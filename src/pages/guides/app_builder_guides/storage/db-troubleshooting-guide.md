---
title: Database Storage Troubleshooting Guide
description: This guide helps you diagnose and fix common issues when using App Builder Database Storage (including the IMS token-based authentication update).
---

# Database Storage Troubleshooting Guide

This guide helps you diagnose and resolve common issues encountered when using App Builder Database Storage. It covers required setup prerequisites, authentication changes introduced with IMS token-based access, and step-by-step solutions for the most frequently reported errors. Work through each section that applies to your situation, starting with the required setup checklist before investigating specific error messages.

## Required setup and versions

Before troubleshooting specific errors, confirm the following.

### App Builder Data Services API is added to your workspace

In Adobe Developer Console:

1. Open your project.
1. Select the workspace you are using.
1. Click **Add API**.
1. Add **App Builder Data Services**.

This step is required for App Builder Database access and for IMS credentials to be generated.

### IMS credentials are present in your `.env` file

After adding the API, sync credentials into your local configuration:

```bash
aio app use --merge
```

The command populates entries like this:

```bash
IMS_OAUTH_S2S_CLIENT_ID=...
IMS_OAUTH_S2S_CLIENT_SECRET=...
IMS_OAUTH_S2S_ORG_ID=...
IMS_OAUTH_S2S_SCOPES=["openid","AdobeID","read_organizations","adobeio.abdata.read","adobeio.abdata.write","adobeio.abdata.manage","additional_info.roles", ...]
```

If these values are missing, the IMS token generation for DB will not work correctly.

### AIO CLI is up to date (for DB support and plugin fixes)

To use App Builder Database reliably, you must be running the following packages:

```text
@adobe/aio-cli 11.0.2+
@adobe/aio-cli-plugin-app 14.7.0+
@adobe/aio-cli-plugin-app-storage 1.5.0+
```

If you previously installed early access versions of these plugins, clean them up first:

```bash
# Remove any locally installed early-access plugin versions
aio plugins:uninstall @adobe/aio-cli-plugin-app
aio plugins:uninstall @adobe/aio-cli-plugin-app-storage

# Install or update the AIO CLI globally (brings in GA plugins)
npm install -g @adobe/aio-cli
```

Then verify:

```bash
aio -v
aio plugins
```

Confirm that the versions listed meet or exceed the minimums above.

For general CLI installation and upgrade guidance, refer to the [Adobe I/O Extensible CLI](https://github.com/adobe/aio-cli) documentation.

### Database CLI plugin is on the correct version

In your App Builder actions, ensure you are using the GA version of the DB library:

```bash
npm update @adobe/aio-lib-db
```

Confirm that your package.json (and the deployed code) is using:

```text
@adobe/aio-lib-db 1.0.0 or later
```

Always follow the version recommendation in [Getting Started with Database Storage](./database.md) for the most up-to-date guidance.

## Migrating to IMS token authentication

App Builder Database now uses IMS token-based authentication instead of the legacy values:

- `AIO_RUNTIME_NAMESPACE`
- `AIO_RUNTIME_AUTH`

If you are migrating an existing app, follow the migration steps in [Getting Started with Database Storage](./database.md) (including adding App Builder Data Services in Developer Console, and updating your code to use `generateAccessToken` from `@adobe/aio-sdk`).

After completing the migration, use the error-specific sections below (for example, 401: OAuth token is not valid, Missing required scope, Region and provisioning errors).

```javascript
// Good example action using IMS + @adobe/aio-lib-db
const { Core } = require('@adobe/aio-sdk');
const libDb = require('@adobe/aio-lib-db');

async function main(params) {
  try {
    // 1. Get IMS access token from params (requires include-ims-credentials: true)
    const tokenResponse = await Core.AuthClient.generateAccessToken(params);
    const accessToken = tokenResponse && tokenResponse.access_token;

    // 2. Initialize DB with the IMS access token
    const db = await libDb.init({ token: accessToken });

    // 3. Connect and query
    const client = await db.connect();
    const collection = await client.collection('test_collection');
    const result = await collection.find({}).toArray();

    return { statusCode: 200, body: { data: result } };
  } catch (error) {
    return { statusCode: 500, body: { error: error.message || String(error) } };
  }
}

module.exports.main = main;
```

Ensure `app.config.yaml` is similar to the following:

```yaml
application:
  actions:
    my-action:
      function: actions/my-action/index.js
      annotations:
        include-ims-credentials: true
```

## Common errors and how to fix them

The following sections describe the most common errors you may encounter when working with App Builder Database Storage, along with their likely causes and recommended fixes. Each entry includes the symptoms to look for, an explanation of what is causing the problem, and the steps needed to resolve it.

### 401: OAuth token is not valid

You might receive this error when:

- CLI commands such as `aio app db find` work.
- Calling the database from your runtime action (using `@adobe/aio-lib-db`) fails with an error like:

  ```text
  findOne failed with code 401: OAuth token is not valid
  ```

Likely causes include:

- `include-ims-credentials: true` annotation is missing or not applied to the action.
- IMS scopes are incomplete or not synced into `.env`.
- You are passing the wrong value as `token` to `libDb.init` (for example, the token object instead of `access_token`).
- `@adobe/aio-lib-db` is on an older version that does not support the IMS flow you are using.
- You are mixing environments (stage vs prod). The runtime namespace and IMS auth environment do not match.

To fix this error:

- Confirm the action annotation:

  ```yaml
  application:
    actions:
      my-action:
        annotations:
          include-ims-credentials: true
  ```

  Re-deploy your app so the updated annotation is applied.

- Re-sync workspace credentials to `.env`

  Ensure App Builder Data Services API is added to the workspace, then run:

  ```bash
  aio app use --merge
  ```

  Confirm `IMS_OAUTH_S2S_*` and `IMS_OAUTH_S2S_SCOPES` are present.

- Pass the correct value to `libDb.init`:

  ```javascript
  const tokenResponse = await Core.AuthClient.generateAccessToken(params);
  const accessToken = tokenResponse && tokenResponse.access_token;
  const db = await libDb.init({ token: accessToken });
  const client = await db.connect();
  ```

  Make sure you are not making a call like this:

  ```javascript
  await libDb.init({ token: tokenResponse }); // incorrect
  ```

- Update `@adobe/aio-lib-db`

  ```bash
  npm update @adobe/aio-lib-db
  ```

  Confirm that `@adobe/aio-lib-db` is 1.0.0 or later, as recommended in the docs.

- Optionally validate the token against IMS. If you suspect a token issue, validate with `@adobe/aio-lib-ims` as described in Token validation - aio-lib-ims.

- Check environment consistency. Ensure that:

  - The runtime namespace used by your action is in the same environment (prod or stage) as the database.
  - You are not using a `development-*` namespace with a production-only auth path or vice versa.

### Database not provisioned (auto-provisioning issues)

You might receive this error when:

- Your app config contains:

  ```yaml
  application:
    runtimeManifest:
      database:
        auto-provision: true
  ```

- You see `Database not provisioned` at runtime, or auto-provisioning does not create a database.

Likely causes include:

- A known issue in auto-provisioning logic in older `@adobe/aio-cli-plugin-app` / `@adobe/aio-cli-plugin-app-storage` versions.
- Region misconfiguration in app.config.yaml.

To fix this error:

- Update the CLI and DB plugins. Make sure you are on a GA-supported setup:

  ```bash
  # Uninstall any locally installed early-access versions
  aio plugins:uninstall @adobe/aio-cli-plugin-app
  aio plugins:uninstall @adobe/aio-cli-plugin-app-storage

  # Update the CLI globally (pulls in GA plugin versions)
  npm install -g @adobe/aio-cli
  ```

  Then verify the versions:

  ```bash
  aio -v
  aio plugins
  ```

- Manually provision the database once:

  ```bash
  aio app db provision
  ```

  Optionally specify a region:

  ```bash
  aio app db provision --region amer
  ```

- Check the `app.config.yaml` database configuration. After provisioning, ensure the database block is correct:

  ```yaml
  application:
    runtimeManifest:
      database:
        auto-provision: true
        region: amer
  ```

- If the CLI reports a plugin error:

  If you see `TypeError: opts.getPluginsList is not a function`, update the main CLI to the latest version:

  ```bash
  npm install -g @adobe/aio-cli
  ```

### Region and provisioning errors

Typical errors include:

- An error message similar to

  `Database provisioning failed: ... code 503: No provisioning cluster configuration found for region: us-east-1`

- Timeouts when connecting to a database that was incorrectly configured for a given Dev Console / region

- Confusion around multiple regions (for example, provisioning in emea and then switching to amer)

To resolve these issues, keep the following in mind:

- A database is provisioned in one region at a time, configured in `app.config.yaml`.
- In the Production Dev Console, use any region listed as available when provisioning.
- In the Staging Dev Console, App Builder Database currently supports `amer` and `amer2`.

Make sure the region in `app.config.yaml` matches one of the supported regions for the Dev Console (Production vs Staging) where your project/workspace lives. If you configure an unsupported region for that Dev Console, provisioning will fail with errors such as:

```text
No provisioning cluster configuration found for region: ...
```

To fix these errors:

- Ensure you only have one region configured.

  In `app.config.yaml`, your DB block should use a single region:

  ```yaml
  application:
    runtimeManifest:
      database:
        auto-provision: true
        region: amer
  ```

- If you previously provisioned in an unsupported or problematic region

  Delete the existing database:

  ```bash
  aio app db delete
  ```

  Remove or correct the `database:` block in `app.config.yaml`.

  Re-provision in a supported region (for example, `amer` in Staging or Production):

  ```bash
  aio app db provision --region amer
  ```

- In the Dev Consoles (Stage vs Prod)

  - Namespaces starting with `development-` always belong to the Staging Dev Console.
  - In the Staging Dev Console, App Builder Database Storage is used for pre-production testing and may be subject to unscheduled changes. It is not guaranteed to be as stable as Production.
  - If you encounter unexpected provisioning errors in Staging and your region configuration is correct, confirm you are using a supported Stage region (`amer` or `amer2`). If the issue persists, contact Adobe Support or your Adobe representative.

  If you require higher stability for critical workflows, prefer using the Production Dev Console and a production namespace.

### Missing required scope: `adobeio.abdata.write`

You might encounter this error when running `aio app db status` or similar CLI commands fails with:

```text
Failed to check database status: ... code 403: Missing required scope: adobeio.abdata.write
```

Likely causes include:

- Your workspace does not have the App Builder Data Services API added.
- After switching workspaces in the CLI, the API integration was implicitly removed (CLI syncing can overwrite workspace configuration).
- `.env` does not contain the required IMS scopes.

To fix this error:

- Add the API to each workspace that uses DB

  In the Developer Console for each workspace, add the App Builder Data Services API.

- Re-sync credentials

  ```bash
  aio app use --merge
  ```

  Verify that `IMS_OAUTH_S2S_SCOPES` includes:

  ```text
  adobeio.abdata.read
  adobeio.abdata.write
  adobeio.abdata.manage
  ```

- Be careful when syncing workspaces

  When the CLI asks whether to sync workspace configuration, understand that syncing can remove APIs that are not present in the target workspace. Ensure the workspace you are syncing already has the App Builder Data Services API.

### CLI works, app times out (aio app dev / local dev)

This error occur might occur when:

- `aio app db` commands (for example, `aio app db provision`, `aio app db find`) work.
- Your action, when run locally via `aio app dev`, times out when connecting to the database.
- You can create collections and indices through the CLI but not from your app when running locally.

Likely causes include:

- Your local dev is not running with the latest CLI / plugin versions.
- The project is not using the correct workspace or region in `app.config.yaml`.
- The database was not successfully provisioned for the workspace used by `aio app dev`.

To fix these errors: 

- Update the CLI and plugins. Ensure your AIO CLI and plugins are up to date (see Required Setup and Versions).

- Confirm workspace and region configuration

  Run:

  ```bash
  aio app use
  ```

  Confirm that the active workspace matches the one where your database was provisioned.

  Check app.config.yaml to ensure `database.region` matches the region where the DB was provisioned.

- Re-check provisioning. From your project directory:

  ```bash
  aio app db status
  ```

  If no database is found, provision one:

  ```bash
  aio app db provision --region <your-region>
  ```

- Set the local DB endpoint if needed. If the CLI works but local dev still times out, set `AIO_DB_ENDPOINT` in .env to the region-specific endpoint (for example, `https://...-amer.app-builder.adp.adobe.io`).

- Retry local dev. Restart `aio app dev` after any configuration changes. If timeouts persist, contact Adobe Support or your Adobe representative with:

  - The exact command (`aio app dev`)
  - Region and runtime namespace
  - Any error logs from your terminal

### Database created previously (pre-IMS) is no longer accessible

These errors might occur when:

- You migrated to IMS token-based authentication.
- You can provision and use a new database.
- The old database, created with `AIO_RUNTIME_NAMESPACE` + `AIO_RUNTIME_AUTH`, appears empty or inaccessible.

Likely causes include:

- You are connecting with a different runtime namespace than the one used when the original DB was created.
- You are mixing the Production Dev Console and Staging Dev Console (for example, DB created in Staging but now connecting from a Production project).
- In rare cases, there might be environment-side changes that affect access to legacy namespaces.

How to check:

Confirm that you are using the same Adobe Developer Console instance (Production vs Staging) where the database was originally provisioned.

In the Developer Console, verify the runtime namespace for the workspace where the original database was created, and ensure your current app is using that exact namespace.

Confirm that the region and `app.config.yaml` settings match the original provisioning (if you know which region was used).

If the Dev Console instance, runtime namespace, and region all match and you still cannot see your data, contact Adobe Support or your Adobe representative with:

- The runtime namespace
- The Dev Console (Production vs Staging)
- The region and approximate timeframe of original provisioning
- The error or behavior you see when querying the DB

### Action file size too large

These errors might occur when:

- You package your action as a ZIP and upload it manually (for example, via CI or custom tooling).
- ZIP size is around or above ~50 MB.
- Deployment or execution fails due to action size limitations.

App Builder Runtime enforces a per-action code size limit. The documented limit is approximately 22 MB per action. Large dependencies or bundled assets can easily exceed this limit.

To stay within the per-action size limit:

- Prefer using the standard `aio app build` process over hand-crafted ZIPs.
- Split large functionality into multiple smaller actions where possible.
- Remove unused dependencies from `package.json`.
- Avoid bundling large static assets (such as images and archives) inside the action code package.
- Where appropriate, move large assets to an external storage system and load them at runtime instead of bundling.

Refer to System settings and limitations for the latest runtime limits and behaviors.

## Error fix summary

| Symptom / Error | Likely Cause | Fix (Short) |
| --- | --- | --- |
| 401: OAuth token is not valid from @adobe/aio-lib-db | Missing annotation, wrong token, outdated lib, env mismatch | Add `include-ims-credentials: true`, run `aio app use --merge`, pass `token.access_token`, update lib. |
| Database not provisioned despite auto-provision: true | Auto-provision bug or outdated plugin | Update CLI and plugins, run `aio app db provision`. |
| TypeError: opts.getPluginsList is not a function when using DB plugin | Old AIO CLI version | Update CLI: `npm install -g @adobe/aio-cli`. |
| No provisioning cluster configuration found for region: us-east-1 | Region or environment configuration issue (often Stage) | Use a supported region (for example, `amer`) and re-provision. |
| Missing required scope: adobeio.abdata.write | App Builder Data Services API missing or not synced | Add API in console, run `aio app use --merge`, check `IMS_OAUTH_S2S_SCOPES`. |
| CLI works but app (`aio app dev`) times out | Local dev endpoint not set for region | Set `AIO_DB_ENDPOINT` in .env (for example, `https://...-amer.app-builder.adp.adobe.io`). |
| Old pre-IMS DB appears missing after migration | Namespace or environment mismatch | Ensure runtime namespace and environment match original; if still failing, contact support. |
| Action ZIP around 50 MB fails or misbehaves | Exceeds per-action size limit | Reduce bundle size, split actions, remove unused dependencies. |

## Related information

- Core how-to and reference: [Getting Started with Database Storage](https://developer.adobe.com/app-builder/docs/guides/app_builder_guides/storage/database)
- Runtime limits and behavior: [System settings and limitations](https://developer.adobe.com/app-builder/docs/guides/runtime_guides/system-settings#codesize)
- CLI reference and updates: [Adobe I/O Extensible CLI](https://github.com/adobe/aio-cli)
- IMS token validation: [Token validation – aio-lib-ims](https://github.com/adobe/aio-lib-ims?tab=readme-ov-file#token-validation)

If you still see an error that is not covered here, capture the exact error message, region, runtime namespace, and CLI + library versions, then contact Adobe Support with those details.
