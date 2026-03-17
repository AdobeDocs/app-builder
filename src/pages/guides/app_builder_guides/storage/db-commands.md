---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: aio app db Commands
description: Discover the essential commands and operations available in App Builder Database Storage for managing your application's data effectively.
---

# aio app db commands

The database plugin in the AIO CLI is a utility that facilitates provisioning, initializing, querying, and monitoring workspace databases.

The following is only a brief introduction to the DB Plugin. For more thorough documentation, see [aio-cli-plugin-app-storage](https://github.com/adobe/aio-cli-plugin-app-storage/tree/epic/abdb-implementation).

## Installation

If you installed the early access versions of the plugins, you must uninstall them before updating `@adobe/aio-cli`:

```bash
aio plugins:uninstall @adobe/aio-cli-plugin-app
aio plugins:uninstall @adobe/aio-cli-plugin-app-storage
```

The DB plugin for the AIO CLI requires the following:

- `@adobe/aio-cli-plugin-app` version 14.7.0 or higher
- `@adobe/aio-cli-plugin-app-storage` version 1.5.0 or higher.

These are installed automatically by updating `@adobe/aio-cli` to the latest version:

```bash
npm install -g @adobe/aio-cli
```

## Region selection

When using the DB Plugin in the AIO CLI, it is important that the region is the same as where the database is provisioned. If not, the connection will fail.

If a database region is present in the `app.config.yaml` application manifest, that is the region the DB Plugin will use.

If no database region is present in the `app.config.yaml` application manifest, the region may be specified using the `--region` option or by setting the `AIO_DB_REGION` environment variable and will otherwise default to `amer`.

## Provision a workspace database

To provision a workspace database in the current AIO Project Workspace with the default `amer` region:

```bash
aio app db provision
```

[Provision a workspace database](./database.md#provision-a-workspace-database) describes the provisioning process further.

The provisioning status can be retrieved with:

```bash
aio app db status
```

To check connectivity with the database:

```bash
aio app db ping
```

## Delete a workspace database

```bash
# Delete the database for your App Builder application (non-production only)
aio app db delete
```

## Usage statistics

```bash
# Get statistics about your App Builder database
aio app db stats # bytes
aio app db stats --scale 1024 # KB
```

| Field returned   | Description |
| ---              | --- |
| `ok`             | Whether the request was successful  |
| `namespace`      | The runtime namespace of the database |
| `collections`    | The number of collections |
| `objects`        | The number of objects/documents |
| `views`          | The number of views (not currently supported) |
| `indexes`        | The number of indexes |
| `dataSize`       | The actual amount of storage used (default bytes) |
| `storageSize`    | Space allocated for storage (default bytes) |
| `indexSize`      | Space allocated for indexes (default bytes) |
| `scaleFactor`    | The scale factor used for the size fields. For example, 1024 for kilobyte-scale (default is 1 for bytes) |
| `lastUpdated`    | When the statistics were last updated |

```bash
# Get statistics about all databases in your IMS Org
aio app db org stats # bytes
aio app db org stats --scale $((1024*1024)) # MB
```

| Field returned              | Description |
| --------------------------- | --- |
| `ok`                        | Whether the request was successful |
| `databases`                 | The number of databases in the organization |
| `collections`               | The total number of collections across databases |
| `dataSize`                  | The total actual amount of storage used across databases (default bytes) |
| `storageSize`               | Space allocated for storage (default bytes) |
| `indexSize`                 | Space allocated for indexes (default bytes) |
| `scaleFactor`               | The scale factor used for the size fields (default is 1 for bytes) |
| `databaseStats`             | An array of statistics for individual databases in the organization |
| `databaseStats.namespace`   | The runtime namespace the database corresponds to |
| `databaseStats.dataSize`    | The actual amount of storage used by the database (default bytes) |
| `databaseStats.storageSize` | Space allocated for storage for the database (default bytes) |
| `databaseStats.indexSize`   | Space allocated for indexes for the database (default bytes) |
| `databaseStats.collections` | The number of collections in the database |
| `databaseStats.scaleFactor` | The scale factor used for the size fields in the databaseStats array (default is 1 for bytes) |
| `databaseStats.lastUpdated` | When the database statistics were last updated |

### Collections

Collections do not have to be explicitly created in order to start using them, but if specific fields need to be indexed or documents require schema validation, then creating a collection beforehand makes sense.

To create an empty collection named `inventory`:

```bash
aio app db collection create inventory
```

To create an empty collection with schema validation:

```bash
aio app db collection create inventory --validator '{"type": "object", "required": ["sku", "quantity"]}'
```

> **Note:** Schema validation is much less common in document-style databases in comparison with relational databases, and not requiring strict schemas is in fact part of the strength of document-style databases. They should be used judiciously, if at all, for App Builder applications. See [Schema Validation](https://www.mongodb.com/docs/manual/core/schema-validation/) in the MongoDB documentation for more information.

Other collection commands:

```bash
# List the collections in the database
aio app db collection list

# Rename a collection in the database
aio app db collection rename <CURRENTNAME> <NEWNAME>

# Drop a collection from the database
aio app db collection drop <COLLECTION>

# Get statistics for a collection in the database
aio app db collection stats <COLLECTION>
```

### Indexes

Indexing frequently queried fields is fundamental to optimizing the performance of a database.

To create a default-type index on specific fields:

```bash
aio app db index create <COLLECTION> -k sku -k rating
```

To create a text index using a spec:

```bash
aio app db index create <COLLECTION> -s '{"name":"text", "category":"text"}'
```

Other index commands:

```bash
# Drop an index from a collection in the database
aio app db index drop <COLLECTION> <INDEXNAME>

# Get the list of indexes from a collection in the database
aio app db index list <COLLECTION>
```

The following index types are supported:

- Single Field Index
- Compound Index (multiple fields)
- Multikey Index (indexes on embedded arrays)
- Text Index (including case-insensitive)
- Geospatial Index (2dsphere)

See [Indexes for Query Optimization](https://www.mongodb.com/docs/drivers/node/current/indexes/) in the MongoDB documentation for more information.

### Documents

The DB Plugin for the AIO CLI is useful for inserting documents and making ad hoc queries against collections. It also supports a rich set of update, replace, and delete operations, but those are expected to be used sparingly.

To insert a document into a collection:

```bash
aio app db document insert <COLLECTION> '{"name": "John", "age": 30}'
```

To find a specific document in a collection:

```bash
aio app db document find <COLLECTION> '{"name": "John"}'
```

To insert multiple documents into a collection:

```bash
aio app db document insert <COLLECTION> '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
```

To find documents in a collection without a filter:

```bash
aio app db document find <COLLECTION> '{}'
```

> **Note:** By default, only the first 20 documents in a collection are returned, with a maximum of 100. To retrieve all documents in a collection larger than 100 documents, `aio-lib-db` needs to be used.

Other document commands:

```bash
# Update documents in a collection
aio app db document update <COLLECTION> <FILTER> <UPDATE>

# Replace a document in a collection
aio app db document replace <COLLECTION> <FILTER> <REPLACEMENT>

# Delete a document from a collection
aio app db document delete <COLLECTION> <FILTER>

# Count documents in a collection
aio app db document count <COLLECTION> <FILTER>
```
