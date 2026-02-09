---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: Getting Started with Database Storage
description: All the basics needed to start using Database Storage for App Builder projects.
---

# Getting started with Database Storage

**IMPORTANT:** This documentation describes a product in early-access development and does not reflect all functionality intended for general availability (GA). It cannot be used in production until GA.

Database Storage for App Builder provides document-style database persistence for AIO Runtime Actions. The [`aio-lib-db` library](https://github.com/adobe/aio-lib-db), which is closely modeled on the MongoDB Database Driver for NodeJS, provides the primary programming interface, while the DB Plugin in the AIO CLI provides additional access.

There is a strict one-to-one relationship between an AIO project workspace and a workspace database, and each workspace database is entirely isolated from all other workspace databases.

## Provisioning a workspace database

Before using Database Storage in an AIO project workspace, a workspace database must be provisioned. This is a self-service operation requiring no special permissions.

Note that there is a strict one-to-one relationship between an AIO project workspace and a workspace database, and each workspace database is entirely isolated from all other workspace databases. Also, each workspace database must reside in one and only one of the following regions:

- `amer`: North, Central, and South America. Data is stored in the US.
- `apac`: Asia and Pacific. Data is stored in Japan.
- `emea`: Europe, the Middle East, and Africa. Data is stored in the EU.

A workspace database can be provisioned in one of two ways: declaratively in the `app.config.yaml` application manifest or manually using the db plugin in the AIO CLI.

To provision a database declaratively, add the follow to the runtime manifest of `app.config.yaml`:

```yaml
application:
  runtimeManifest:
    database:
      auto-provision: true
      region: emea
```

When the application is deployed using `aio app deploy` a database will be provisioned in the specified region unless it is already present.

To provision a database using the AIO CLI, the following command can be used:

```bash
aio app db provision [--region <area>]
```

In addition to provisioning a workspace database in the selected region, running this command will automatically add a database entry to the runtime manifest of `app.config.yaml`:

```yaml
application:
  runtimeManifest:
    database:
      auto-provision: false
      region: emea
```

The db plugin for the AIO CLI will use the database region defined in `app.config.yaml`. If it is not defined there, it will either use the `amer` default or whatever is defined in the `AIO_DB_REGION` environment variable.

In runtime actions, however, **aio-lib-db** must be initialized in the same region as defined in `app.config.yaml`. If that region is anything other than the `amer` default, the region should be set either by passing a `{region: "<region>"}` argument to the `libDb.init()` method or by setting the `AIO_DB_REGION` environment variable.

In case a workspace database is provisioned in the wrong region, it must first be deleted and then provisioned in the correct region. The process is to delete the database using `aio app db delete`, set the correct region in the `app.config.yaml` application manifest, and then provision the new workspace database using `aio app deploy` or `aio app db provision`.

## DB plugin in the AIO CLI

The DB plugin in the AIO CLI is a utility that facilitates provisioning, initializing, querying, and monitoring workspace databases.

The following is only a brief introduction to the DB plugin. For more thorough documentation see [aio-cli-plugin-app-storage](https://github.com/adobe/aio-cli-plugin-app-storage/tree/epic/abdb-implementation).

### Installation

To install the pre-GA plugin for the AIO CLI:

```bash
aio plugins:install @adobe/aio-cli-plugin-app@next
aio plugins:install @adobe/aio-cli-plugin-app-storage@next
```

### Region selection

When using the DB plugin in the AIO CLI, it is important that the region is the same as where the database is provisioned. If not, the connection will fail.

If a database region is present in the `app.config.yaml` application manifest, that is the region the DB plugin will use.

If no database region is present in the `app.config.yaml` application manifest, the region may be specified using the `--region` option or by setting `AIO_DB_REGION` environment variable and will otherwise default to `amer`.

### Provisioning a workspace database

To provision a workspace database in the current AIO project workspace is as simple as:

```bash
aio app db provision
```

The provisioning status can be retrieved with this:

```bash
aio app db status
```

To check connectivity with the database:

```bash
aio app db ping
```

### Deleting a workspace database

```bash
# Delete the database for your App Builder application (non-production only)
aio app db delete
```
### Usage statics

```bash
# Get statistics about your App Builder database
aio app db stats
```

| field returned | description                                   |
|----------------|-----------------------------------------------|
| Namespace      | the runtime namespace of the database         |
| collections    | the number of collections                     |
| objects        | the number of objects/documents               |
| views          | the number of views (not currently supported) |
| indexes        | the number of indexes                         |
| dataSize       | the actual amount of storage used in bytes    |
| storageSize    | space allocated for storage in bytes          |
| indexSize      | space allocated for indexes in bytes          |
| ok             | whether the request was successful            |
| lastUpdated    | when the statistics where last updated        |

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

**Note:** Schema validation is much less common in document-style databases in comparison with relational databases, and not requiring strict schemas is in fact part of the strength of document-style databases. They should be used judiciously if at all for App Builder applications. See [Schema Validation](https://www.mongodb.com/docs/manual/core/schema-validation/) in the MongoDB documentation for more information.

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

Indexing frequently queried fields is basic to optimizing the performance of a database.

To create a default type index on specific fields:

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

- 2dsphere
- Compound Index
- Multikey Index
- Single Field Index
- Text Index (including case insensitive)

See [Indexes for Query Optimization](https://www.mongodb.com/docs/drivers/node/current/indexes/) in the MongoDB Documentation for more information.

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

**Note:** By default, only the first 20 documents in a collection are returned and only up to a maximum of 100. In order to retrieve all documents in collection larger than 100 documents, `aio-lib-db` needs to be used.

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

## Runtime actions and aio-lib-db

The `aio-lib-db` package provides the main programming interface for App Builder Database Storage and the README at [aio-lib-db](https://github.com/adobe/aio-lib-db) provides its main documentation.

The `aio-lib-db` package is intentionally modeled on the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) striving to be a near drop-in replacement for applications developed for MongoDB and/or AWS DocumentDB.

### Installation

```bash
npm install @adobe/aio-lib-db
```

### Region selection

**aio-lib-db** must be initialized in the region the workspace database was provisioned. Otherwise, the connection will fail.

To explicitly initialize the library in a specific region, pass the `{region: "<region>"}` arguement to the `libDb.init()` method.

Called with no arguments, `libDb.init()` will initialize the library either in the default `amer` region or in the region defined in the `AIO_DB_REGION` environment variable.

### Basic usage

The following assumes that a Workspace Database has been provisioned in the AIO Project Workspace using the DB Plugin in the AIO CLI as described above.

Connecting to App Builder Database Storage is where `aio-lib-db` most differs from the MongoDB Node Driver.

The following is the general pattern for loading and using `aio-lib-db`:

```javascript
const libDb = require('@adobe/aio-lib-db')
const { DbError } = require('@adobe/aio-lib-db')

async function main() {
  let client
  try {

    // Implicit region initialization
    const db = await libDb.init()
      
    // Explicit region initialization
    // const db = await libDb.init({region: "emea"})

    // Set up a connection
    client = await db.connect()

    // Select a collection
    const userCollection = await client.collection('users')

    // do stuff with the collection...

  } catch (error) {
    // Errors thrown by the database are reported as such
    if (error instanceof DbError) {
      console.error('Database error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  } finally {
    // Best practice to always close the client connection
    if (client) {
      await client.close()
    }
  }
}
```

A few things to note in comparison with the MongoDB Node Driver:

- You do not need to specify connection credentials because they are taken from the runtime context, specifically runtime namespace and auth.
- You do not need to specify the database URL because all requests go through the App Builder Storage Database Service.
- The library must be initialized in the same region the database was provisioned in.
- There is no option to select a different database because there is always a one-to-one relationship between an AIO Project Workspace and Workspace Database.

### Basic CRUD operations

Included in the following are links to the equivalent methods for the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/).

#### Inserting documents

Insert one document:

```javascript
z
const result = await userCollection.insertOne({
  name: 'Jane Smith',
  email: 'jane@example.com',
  age: 30
})
```

Insert multiple documents:

```javascript
const result = await userCollection.insertMany([
  { name: 'Alice', email: 'alice@example.com', age: 27 },
  { name: 'Bob', email: 'bob@example.com', age: 12 }
])
```

MongoDB Node Driver references:

- [Insert Documents](https://www.mongodb.com/docs/drivers/node/current/crud/insert/)

#### Finding documents

Find one document:

```javascript
const user = await userCollection.findOne({ email: 'john@example.com' });
```

Find all documents matching a filter (returns a cursor - see next section):

```javascript
const cursor = userCollection.find({ age: { $gte: 18 } })
```

Find with projection, sort, skip and limit (returns a cursor - see next section):

```javascript
const cursor = userCollection.find({ age: { $gte: 18 } })
  .project({ name: 1, email: 1 })
  .sort({ name: 1 })
  .skip(2)
  .limit(10)
```

MongoDB Node Driver references:

- [Find documents](https://www.mongodb.com/docs/drivers/node/current/crud/query/retrieve/)
- [Specify documents to return](https://www.mongodb.com/docs/drivers/node/current/crud/query/specify-documents-to-return/)
- [Specify which fields to return](https://www.mongodb.com/docs/drivers/node/current/crud/query/project/)
- [Specify a auery](https://www.mongodb.com/docs/drivers/node/current/crud/query/query-document/)
- [Count documents](https://www.mongodb.com/docs/drivers/node/current/crud/query/count/)
- [Retrieve distinct values](https://www.mongodb.com/docs/drivers/node/current/crud/query/distinct/)
- [Search text](https://www.mongodb.com/docs/drivers/node/current/crud/query/text/)
- [Search geospatially](https://www.mongodb.com/docs/drivers/node/current/crud/query/geo/)

#### Cursor access patterns

Both `find` and `aggregate` return cursors.

Using `toArray()` - loads all results into memory:

```javascript
const results = await cursor.toArray()
```

Using iteration - memory efficient:

```javascript
while (await cursor.hasNext()) {
  const doc = await cursor.next();
  console.log(doc)
}
```

Using for `await...of` - most convenient:

```javascript
for await (const doc of cursor) {
  console.log(doc)
}
```

Using streams:

```javascript
const stream = cursor.stream();
stream.on('data', (doc) => {
  console.log(doc)
})
```

MongoDB Node Driver references:

- [Access data from a cursor](https://www.mongodb.com/docs/drivers/node/current/crud/query/cursor/)

#### Updating documents

Update one document:

```javascript
const result = await userCollection.updateOne(
  { email: 'john@example.com' },
  { $set: { age: 31 } }
)
```

Replace one document:

```javascript
const result = await userCollection.replaceOne(
  { email: 'john@example.com' },
  { name: 'Bob', email: 'bob@example.com', age: 12 }
)
```

Update multiple documents:

```javascript
const result = await userCollection.updateMany(
  { age: { $lt: 18 } },
  { $set: { category: 'minor' } }
)
```

Find and update:

```javascript
const updatedUser = await userCollection.findOneAndUpdate(
  { email: 'john@example.com' },
  { $set: { lastLogin: new Date() } },
  { returnDocument: 'after' }
)
```

MongoDB Node Driver references:

- [Modify Documents](https://www.mongodb.com/docs/drivers/node/current/crud/update/modify/)
- [Replace Documents](https://www.mongodb.com/docs/drivers/node/current/crud/update/replace/)
- [Update Arrays in a Document](https://www.mongodb.com/docs/drivers/node/current/crud/update/embedded-arrays/)

#### Deleting documents

Delete one document:

```javascript
const result = await userCollection.deleteOne({ email: 'john@example.com' })
```

Delete multiple documents:

```javascript
const result = await userCollection.deleteMany({ age: { $lt: 0 } })
```

Find and delete:

```javascript
const deletedUser = await userCollection.findOneAndDelete({ email: 'john@example.com' })
```

MongoDB Node Driver references:

- [Delete Documents](https://www.mongodb.com/docs/drivers/node/current/crud/delete/)

#### Bulk operations

Multiple operations in a single request:

```javascript
const operations = [
  { insertOne: { document: { name: 'Alice' } } },
  { updateOne: { filter: { name: 'Bob' }, update: { $set: { age: 30 } } } },
  { deleteOne: { filter: { name: 'Charlie' } } }
]

const result = await collection.bulkWrite(operations)
```

MongoDB Node Driver references:

- [Bulk Operations](https://www.mongodb.com/docs/drivers/node/current/crud/bulk-write/)

#### String and object representations of the _id field

Every document in DocumentDB has a required `_id` field that acts as its unique identifier within a collection. Values for the `_id` field may be specified in the document or generated on the fly by the database server.

When a document with no value specified for the `_id` field is inserted into a collection, the database service will generate a unique value for the field of type ObjectId and add it to the document. So the following:

```javascript
const result = await userCollection.insertOne({name: "Jane Smith"})
```

with a result something like this:

```json
{
   "acknowledged" : true,
   "insertedId" : "56fc40f9d735c28df206d078"
}
```

When the `_id` field is represented as a string, for example in an HTTP request or text file, it needs to be converted to an ObjectId before using in a query filter. To retrieve the above document, for example, something like the following is required:

```javascript
const {ObjectId} = require('bson')
const userDocument = await userCollection.findOne({ _id: new ObjectId("56fc40f9d735c28df206d078")})
```

with a result something like this:

```json
{
    "name": "Jane Smith",
    "_id": "56fc40f9d735c28df206d078"
}
```

See the [MongoDB docs](https://www.mongodb.com/docs/manual/core/document/#std-label-document-id-field) for more details on the `_id` field:

### Aggregates

Aggregates are a powerful tool for building complex queries.

Simple aggregate pipeline:

```javascript
const pipeline = [
  { $match: { status: 'active' } },
  { $group: { _id: '$category', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]

const cursor = collection.aggregate(pipeline)
```

A geospatial example:

```javascript
const nearbyStores = await stores.aggregate()
  .geoNear({
    near: {type: 'Point', coordinates: [-122.4194, 37.7749]}, // San Francisco
    distanceField: 'distance',
    maxDistance: 1000, // 1km radius
    spherical: true
  })
  .match({status: 'open'})
  .limit(10)
  .toArray()
```

MongoDB Node Driver references:

- [Aggregation Operations](https://www.mongodb.com/docs/drivers/node/current/aggregation/)
- [Aggregation Pipeline Stages](https://www.mongodb.com/docs/drivers/node/current/aggregation/pipeline-stages/)

## MongoDB and DocumentDB compatibility

The MongoDB 8.0 features supported by App Builder Database Storage (ABDB) are constrained by the AWS DocumentDB with MongoDB compatibility it is built on.

The primary reference for MongoDB compatibility is [Supported MongoDB APIs, operations, and data types in Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html). Note that ABDB uses version 8.0 of the MongoDB API. Some additional functional differences are documented at [Functional differences: Amazon DocumentDB and MongoDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/functional-differences.html).

Beyond those imposed by AWS DocumentDB there are additional constraints imposed by the App Builder Database Storage itself. For example, the App Builder DB exposes far fewer administrative commands than either DocumentDB or MongoDB, because it is a multi-tenant offering.

The following sections highlight the differences between the App Builder Database Storage API and AWS DocumentDB.

### Database commands

Database commands are not supported by the App Builder Database Storage.

Administrative and diagnostic features are limited to those provided by the `aio-lib-db` package and the db plugin for the aio cli.

AWS reference: [Database commands](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-database).

### Query and projection operators

Same as DocumentDB 8.0.

AWS reference: [Query and projection operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-query)

### Update operators

Same as DocumentDB 8.0.

AWS reference: [Update Operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-update)

### Geospatial

Same as DocumentDB 8.0.

AWS reference: [Geospatial](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-geospatial)

### Cursor methods

Although the general access patterns for cursors with App Builder Database Storage closely follow the DocumentDB/MongoDB model (see the previously mentioned Cursor Access Patterns) only a subset of other methods are supported, and these are only supported when initializing a cursor.

Supported methods when initializing a `find` cursor:

- filter()
- sort()
- project()
- limit()
- skip()

Supported methods when initializing an `aggregate` cursor:

- addStage()
- batchSize()
- explain()
- group()
- limit()
- map()
- match()
- out()
- project()
- lookup()
- redact()
- skip()
- sort()
- unwind()
- geoNear()

Supported methods for reading both `find` and `aggregate` cursors:

- hasNext()
- next()
- toArray()
- close()

AWS reference: [Cursor Methods](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-cursor)

### Aggregation pipeline operators

At this time only the following stage operators are supported by App Builder Database:

- $addFields
- $count
- $geoNear
- $group
- $limit
- $lookup
- $match
- $out
- $project
- $redact
- $replaceRoot
- $sample
- $skip
- $sort
- $unwind

**Note:** Support for more stage operators is coming soon.

All other pipeline operators are the same as for DocumentDB 8.0.

AWS reference: [Aggregation pipeline operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-aggregation-pipeline)

### Data types

Same as DocumentDB 8.0.

AWS reference: [Data types](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-data-types)

### Indexes and index properties

Same as DocumentDB 8.0.

AWS reference: [Indexes and index properties](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-index)

## Usage quotas and limits

These are documented at [Usage quotas and limits](index.md#usage-quotas-and-limits).

## Data Durability and Resiliency

App Builder Database is built on a industry-standard managed, fault-tolerant database architecture designed to deliver high durability and availability for customer data.

When data is successfully written to App Builder Database, it is synchronously persisted across multiple storage nodes within the service. This design protects committed data against common failure scenarios, including individual node failures, hardware issues, and other infrastructure-level disruptions.

The service continuously monitors storage health and automatically repairs or replaces underlying components as needed, without requiring customer intervention. These mechanisms ensure that committed data remains available and durable.

### Recovering from accidental deletion or data corruption

In some cases, data loss may occur as a result of **accidental deletion or unintended data corruption caused by customer actions**, such as application logic errors, incorrect update operations, or misconfigured scripts. When data has been deleted or corrupted by customer activity, recovery may be possible through backup restoration, subject to availability and timing constraints. Restoration is not automatic and requires immediate customer action.

Backup restoration is intended for emergency recovery scenarios and is not guaranteed in all cases.

### Emergency restoration process

If a customer believes they have accidentally deleted or corrupted their data, they must initiate the restoration process as quickly as possible.

**Customer responsibilities**

The customer must:

* **Immediately contact Adobe Support or their Adobe account team** to request a restoration.
* Submit the request as soon as the issue is identified.
* Restoration is only possible within a **limited time window**, and delays may make recovery impossible.
* Provide the following information to assist with the restoration request:
  * IMS Organization name
  * IMS Organization ID
  * The workspace / runtime namespace in which the database was deleted
  * Any additional context about the deletion event, if available

**Adobe responsibilities**

Upon receiving a valid request, Adobe will:
* Assess whether a backup snapshot is available for the affected database
* Work with the customer to attempt restoration from the most appropriate backup
* Communicate any limitations, risks, or constraints associated with the restoration effort

Restoration attempts are **best-effort** and may not be possible in all scenarios.
