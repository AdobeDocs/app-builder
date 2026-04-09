---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - post-app-deploy
  - hooks
  - collections
  - indexes
title: Setting Up Database Collections and Indexes
description: How to use post-app-deploy hooks to automatically set up database collections and indexes on every deployment.
---

# Setting up database collections and indexes

Provisioning a workspace database with `auto-provision: true` creates an empty database. Setting up the collections, indexes, and schema validators your application needs is still a separate step — and doing it manually after every deployment is error-prone.

A practical solution is to use a `post-app-deploy` hook: a script that runs automatically at the end of every `aio app deploy`. The script creates collections and indexes if they do not yet exist, and skips them silently if they do. This makes the setup **idempotent** and safe to run on every deployment.

<InlineAlert variant="info" slots="text" />

A fully declarative approach — defining collections and indexes directly in `app.config.yaml` — is on the roadmap. The hook-based approach described here is the recommended path today.

## Prerequisites

- A workspace database has been provisioned. See [Getting started with Database Storage](./database.md) for details.
- An IMS OAuth server-to-server credential is configured for your AIO project workspace. The following environment variables must be set in your `.env` file:

  | Variable | Description |
  |---|---|
  | `IMS_OAUTH_S2S_CLIENT_ID` | Client ID of the server-to-server credential |
  | `IMS_OAUTH_S2S_CLIENT_SECRET` | Client secret |
  | `IMS_OAUTH_S2S_ORG_ID` | IMS Organization ID |
  | `IMS_OAUTH_S2S_SCOPES` | JSON array of scopes, e.g. `["AdobeID","openid"]` |

- The following packages are installed in your project:

  ```bash
  npm install @adobe/aio-lib-db @adobe/aio-sdk
  ```

## Supported index types

`aio-lib-db` uses the same index syntax as the MongoDB Node.js driver. Supported types follow [DocumentDB 8.0 compatibility](./db-mongo-compatibility.md):

| Index type | Key value | Use case |
|---|---|---|
| Ascending / descending | `1` / `-1` | Equality and range queries, sort optimization |
| Text | `"text"` | Full-text search across string fields |
| Geospatial | `"2dsphere"` | Location-based queries |
| Unique | `options: { unique: true }` | Enforce uniqueness on a field |

## Configure the hook in app.config.yaml

Add a `post-app-deploy` hook alongside the `database` declaration in your `app.config.yaml`:

```yaml
application:
  hooks:
    post-app-deploy: scripts/post-deploy-db-setup.js
  runtimeManifest:
    database:
      auto-provision: true
      region: emea
    packages:
      ...
```

The hook runs once after `aio app deploy` completes successfully. It does **not** run during `aio app run` or `aio app dev`.

## The hook script

Create `scripts/post-deploy-db-setup.js` in the root of your project. The example below creates two collections — `stores` and `user_favorites` — with their respective indexes. Adapt the collection names and index definitions to match your application's data model.

```javascript
/**
 * Post-deploy hook: ensures database collections and indexes exist.
 * Runs after `aio app deploy` — idempotent, safe on every deploy.
 *
 * Reads IMS credentials from environment variables (set in .env):
 *   IMS_OAUTH_S2S_CLIENT_ID, IMS_OAUTH_S2S_CLIENT_SECRET,
 *   IMS_OAUTH_S2S_ORG_ID, IMS_OAUTH_S2S_SCOPES
 */
const { Core } = require('@adobe/aio-sdk');
const libDb = require('@adobe/aio-lib-db');

const STORES_INDEXES = [
  {
    key: {
      name: 'text',
      'address.streetAddress': 'text',
      'address.city': 'text',
      'address.subAddress': 'text',
      'address.region': 'text',
    },
    name: 'stores_text_idx',
  },
  {
    key: { geolocation: '2dsphere' },
    name: 'stores_geo_2dsphere_idx',
  },
  {
    key: { 'address.countryCode': 1 },
    name: 'stores_countryCode_idx',
  },
  {
    key: { 'address.city': 1 },
    name: 'stores_city_idx',
  },
  {
    key: { id: 1 },
    name: 'stores_id_idx',
  },
  {
    key: { storeId: 1 },
    name: 'stores_storeId_idx',
  },
  {
    key: { statusCode: 1 },
    name: 'stores_statusCode_idx',
  },
];

const USER_FAVORITES_INDEXES = [
  {
    key: { userId: 1 },
    options: { unique: true, name: 'user_favorites_userId_idx' },
  },
];

function parseScopes() {
  try {
    return JSON.parse(process.env.IMS_OAUTH_S2S_SCOPES || '[]');
  } catch {
    return [];
  }
}

function isIndexExistsError(err) {
  return (
    err.code === 85 ||
    err.code === 86 ||
    /already exists|duplicate/i.test(err.message || '')
  );
}

async function ensureCollectionIndexes(collection, collectionName, indexes) {
  let created = 0;
  let skipped = 0;

  for (const idx of indexes) {
    const indexName = idx.options?.name || idx.name;
    const indexOptions = idx.options || { name: idx.name };
    try {
      await collection.createIndex(idx.key, indexOptions);
      created++;
      console.log(`  [${collectionName}] Created: ${indexName}`);
    } catch (err) {
      if (isIndexExistsError(err)) {
        skipped++;
      } else {
        console.warn(
          `  [${collectionName}] Failed to create ${indexName}: ${err.message}`
        );
      }
    }
  }

  return { created, skipped };
}

const postDeployDbSetup = async () => {
  const clientId = process.env.IMS_OAUTH_S2S_CLIENT_ID;
  const clientSecret = process.env.IMS_OAUTH_S2S_CLIENT_SECRET;
  const orgId = process.env.IMS_OAUTH_S2S_ORG_ID;
  const region = process.env.DB_REGION || 'amer';
  const namespace =
    process.env.AIO_runtime_namespace || process.env.__OW_NAMESPACE;

  // ensure __OW_NAMESPACE is set so generateAccessToken can auto-detect stage vs prod IMS
  if (namespace && !process.env.__OW_NAMESPACE) {
    process.env.__OW_NAMESPACE = namespace;
  }

  if (!clientId || !clientSecret || !orgId) {
    console.warn(
      '[post-deploy-db-setup] IMS credentials not found in environment — skipping DB setup.'
    );
    console.warn(
      '[post-deploy-db-setup] Set IMS_OAUTH_S2S_CLIENT_ID, IMS_OAUTH_S2S_CLIENT_SECRET, IMS_OAUTH_S2S_ORG_ID in .env'
    );
    return;
  }

  console.log('[post-deploy-db-setup] Ensuring database indexes...');

  let client;
  try {
    const { generateAccessToken } = Core.AuthClient;
    const scopes = parseScopes();
    const token = await generateAccessToken({
      clientId,
      clientSecret,
      orgId,
      scopes,
    });
    const db = await libDb.init({
      token: token.access_token,
      region,
      ow: { namespace },
    });
    client = await db.connect();
  } catch (error) {
    console.error(
      `[post-deploy-db-setup] DB connection failed: ${error.message}`
    );
    console.error(
      '[post-deploy-db-setup] Indexes were NOT created — you may need to run setup manually.'
    );
    return;
  }

  const stores = await ensureCollectionIndexes(
    client.collection('stores'),
    'stores',
    STORES_INDEXES
  );
  const favorites = await ensureCollectionIndexes(
    client.collection('user_favorites'),
    'user_favorites',
    USER_FAVORITES_INDEXES
  );

  console.log(
    `[post-deploy-db-setup] Done. stores: ${stores.created} created, ${stores.skipped} existed. ` +
      `user_favorites: ${favorites.created} created, ${favorites.skipped} existed.`
  );

  try {
    await client.close();
  } catch {
    // ignore close errors
  }
};

module.exports = postDeployDbSetup;
```

## How it works

When `aio app deploy` finishes, the AIO CLI calls the `post-app-deploy` hook and executes the script. The script:

1. Reads IMS credentials from environment variables.
2. Generates an IMS access token using `Core.AuthClient.generateAccessToken`.
3. Connects to the workspace database via `aio-lib-db`.
4. Iterates over the index definitions and calls `createIndex` for each one.
5. Catches "index already exists" errors and skips them silently — so re-deploying never fails due to pre-existing indexes. Three cases are handled:
   - Code `85` (`IndexOptionsConflict`): an index with the same name exists but with different options
   - Code `86` (`IndexKeySpecsConflict`): an index on the same keys exists but with a different name
   - Message fallback: `/already exists|duplicate/i` for drivers that surface the conflict as a string rather than a numeric code
6. Closes the database connection.

If credentials are missing, the script logs a warning and exits cleanly without failing the deployment.

## Running the setup locally

The hook does not fire during `aio app run` or `aio app dev`. To set up indexes in your local or development workspace, run the script directly:

```bash
node scripts/post-deploy-db-setup.js
```

Make sure your `.env` file is populated with the IMS credentials before running.

## Verifying the setup

After deploying, confirm the indexes were created using the AIO CLI:

```bash
aio app db index list <collection-name>
```

For example, using the collections from the script above:

```bash
aio app db index list stores
aio app db index list user_favorites
```

Each command lists the indexes on the collection, including their names and key specifications.

