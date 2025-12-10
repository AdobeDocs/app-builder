---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: Database Storage Getting Started
---

# Overview

Database Storage for App Builder provides document-style database persistence for AIO Runtime Actions. The **aio-lib-db**, which is closely modeled on the MongoDB Database Driver for NodeJS, provides the primary programming interface, while the DB Plugin in the AIO CLI provides additional access.

There is a strict one-to-one relationship between an AIO Project Workspace and a Workspace Database, and each Workspace Database is entirely isolated from all other Workspace Databases.

Before use, a Workspace Database must be explicitly provisioned using either **aio-lib-db** or the AIO CLI. This is a self-service operation subject to organizational quotas and limits.

Workspace Databases are provisioned in one and only one of the following regions: `amer`, `apac`, and `emea`. These acronyms are defined as follows:

- `amer`: North, Central, and South America. Data is stored in the US.
- `apac`: Asia and Pacific. Data is stored in Japan.
- `emea`: Europe, the Middle East, and Africa. Data is stored in the EU.

## DB plugin in the AIO CLI

The DB Plugin in the AIO CLI is a utility that facilitates provisioning, initializing, querying, and monitoring Workspace Databases.

The following is only a brief introduction to the DB Plugin. For more thorough documentation see [aio-cli-plugin-app-storage](https://github.com/adobe/aio-cli-plugin-app-storage/tree/epic/abdb-implementation).

### Installation

To be included in aio --version >= 11.0.0

### Region selection

When using the DB Plugin in the AIO CLI, it is important that the region is the same as where the database is provisioned. If not, the connection will fail.

The default region is `amer`, and to set a different one, you can use the `--region` flag or add the `AIO_DB_REGION` variable to your .env file. Supported regions include `amer`, `emea`, and `apac`.

### Provisioning a workspace database

To provision a Workspace Database in the current AIO Project Workspace is as simple as:

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

Additional database commands include:

```bash
aio app db stats               # Get statistics about your App Builder database
```

```bash
aio app db delete              # Delete the database for your App Builder application (non-production only)
```

### Collections

Collections do not have to be explicitly created in order to start using them. But if specific fields need to be indexed or documents require schema validation, then creating a collection beforehand would make sense.

To create an empty collection named inventory:

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
aio app db collection list                       # List the collections in the database
aio app db collection rename CURRENTNAME NEWNAME # Rename a collection in the database
aio app db collection drop COLLECTION            # Drop a collection from the database
aio app db collection stats COLLECTION           # Get statistics for a collection in the database
```

### Indexes

Indexing frequently queried fields is basic to optimizing the performance of a database.

To create a default type index on specific fields:

```bash
aio app db index create COLLECTION -k sku -k rating
```

To create a text index using a spec:

```bash
aio app db index create COLLECTION -s '{"name":"text", "category":"text"}'
```

Other index commands:

```bash
aio app db index drop COLLECTION INDEXNAME   # Drop an index from a collection in the database
aio app db index list COLLECTION             # Get the list of indexes from a collection in the database
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
aio app db document insert COLLECTION '{"name": "John", "age": 30}'
```

To find a specific document in a collection:

```bash
aio app db document find COLLECTION '{"name": "John"}'
```

To insert multiple documents into a collection:

```bash
aio app db document insert COLLECTION '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
```

To find documents in a collection without a filter:

```bash
aio app db document find COLLECTION '{}'
```

> **Note:** By default only the first 20 documents in a collection are returned and only up to a maximum of 100. In order to retrieve all documents in collection larger than 100 documents, **aio-lib-db** needs to be used.

Other document commands:

```bash
aio app db document update COLLECTION FILTER UPDATE       # Update documents in a collection
aio app db document replace COLLECTION FILTER REPLACEMENT # Replace a document in a collection
aio app db document delete COLLECTION FILTER              # Delete a document from a collection
aio app db document count COLLECTION FILTER               # Count documents in a collection
```

## Runtime actions and aio-lib-db

The **aio-lib-db** package provides the main programming interface for App Builder Database Storage. It is intentionally modeled on the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) striving to be a near drop-in replacement for applications developed for MongoDB and/or AWS DocumentDB.

Much of the extensive documentation for the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) is valid for **aio-lib-db**. Rather than duplicating, the following guide provides links to the MongoDB documentation, with notes about any important differences where applicable.

### Installation

```bash
npm install @adobe/aio-lib-db
```

### Basic usage

The following assumes that a Workspace Database has been provisioned in the AIO Project Workspace using the DB Plugin in the AIO CLI as described above.

Connecting to App Builder Database Storage is where **aio-lib-db** most differs from the MongoDB Node Driver.

The following is the general pattern for loading and using **aio-lib-db**:

```javascript
const libDb = require('@adobe/aio-lib-db')
const { DbError } = require('@adobe/aio-lib-db')

async function main() {
  let client
  try {
    // Initialize the library. Defaults to amer region
    const db = await libDb.init()

    // Region must be specified if the database is not in the amer region
    // const db = await libDb.init({region: 'emea'})

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

- There is no need to specify connection credentials because these are taken from the runtime context, specifically runtime namespace and auth.
- There is no need to specify the database URL because all requests go through the App Builder Storage Database Service.
- The library must be initialized in the same region as the where the database was provisioned.
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

- [Find Documents](https://www.mongodb.com/docs/drivers/node/current/crud/query/retrieve/)
- [Specify Documents to Return](https://www.mongodb.com/docs/drivers/node/current/crud/query/specify-documents-to-return/)
- [Specify Which Fields to Return](https://www.mongodb.com/docs/drivers/node/current/crud/query/project/)
- [Specify a Query](https://www.mongodb.com/docs/drivers/node/current/crud/query/query-document/)
- [Count Documents](https://www.mongodb.com/docs/drivers/node/current/crud/query/count/)
- [Retrieve Distinct Values](https://www.mongodb.com/docs/drivers/node/current/crud/query/distinct/)
- [Search Text](https://www.mongodb.com/docs/drivers/node/current/crud/query/text/)
- [Search Geospatially](https://www.mongodb.com/docs/drivers/node/current/crud/query/geo/)

#### Cursor access patterns

Both **find** and **aggregate** return cursors.

Using toArray() - loads all results into memory:

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

Using for await...of - most convenient:

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

- [Access Data From a Cursor](https://www.mongodb.com/docs/drivers/node/current/crud/query/cursor/)

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

#### String and object Representations of the _id field

Every document in DocumentDB has a required **_id** field that acts as its unique identifier within a collection. Values for the **_id** field may be specified in the document or generated on the fly by the database server.

When a document with no value specified for the _id field is inserted into a collection, the database service will generate a unique value for the field of type ObjectId and add it to the document. So the following:

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

When the _id field is represented as a string, for example in an HTTP request or text file, it needs to be converted to an ObjectId before using in a query filter. To retrieve the above document, for example, something like the following is required:

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

For more details on the **_id** field:

- [The _id Field](https://www.mongodb.com/docs/manual/core/document/#std-label-document-id-field)

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

The MongoDB 8.0 features supported by App Builder Database Storage (ABDB) are constrained by the AWS DocumentDB with MongoDB compatibility on which it is built.

The primary reference for MongoDB compatibility is [Supported MongoDB APIs, operations, and data types in Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html). Note that ABDB uses version 8.0 of the MongoDB API. Some additional functional differences are documented at [Functional differences: Amazon DocumentDB and MongoDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/functional-differences.html).

Beyond those imposed by AWS DocumentDB there are additional constraints imposed by the App Builder Database Storage itself. For example, ABDB exposes far fewer administrative commands than either DocumentDB or MongoDB, for the simple reason that it is a multi-tenant offering.

The following sections highlights the differences between the App Builder Database Storage API and AWS DocumentDB.

### Database commands

Database commands are not supported by App Builder Database Storage.

Administrative and diagnostic features are limited to those provided by the **aio-lib-db** package and the db plugin for the aio cli.

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

Although the general access patterns for cursors with App Builder Database Storage closely follow the DocumentDB/MongoDB model (see Cursor Access Patterns above) only a subset of other methods are supported, and these are only supported when initializing a cursor.

Supported methods when initializing a **find** cursor:

- filter()
- sort()
- project()
- limit()
- skip()

Supported methods when initializing an **aggregate** cursor:

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

Supported methods for reading both **find** and **aggregate** cursors:

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

> **Note:** Support for more stage operators is coming soon.

All other pipeline operators are the same as for DocumentDB 8.0.

AWS reference: [Aggregation pipeline operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-aggregation-pipeline)

### Data types

Same as DocumentDB 8.0.

AWS reference: [Data types](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-data-types)

### Indexes and index properties

Same as DocumentDB 8.0.

AWS reference: [Indexes and index properties](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-index)

## Support and contact information

For any questions, issues, or feedback regarding App Builder Database Storage, please reach out to the team at:

- **Slack** - [#commerce-app-builder-db-early-access](https://adobe.enterprise.slack.com/archives/C09CVBYJU12)
- **Github Issues** - File issues on the relevant repository

