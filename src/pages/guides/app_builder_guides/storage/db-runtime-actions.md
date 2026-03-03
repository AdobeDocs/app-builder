---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: Runtime actions with Database Storage
description: Learn how to use the aio-lib-db library to connect to and perform operations on App Builder Database Storage from your runtime actions.
---

# Runtime actions with Database Storage

The following assumes that a [workspace database](./database.md#provision-a-workspace-database) has been provisioned in the AIO Project Workspace using the [DB plugin in the AIO CLI](./db-commands.md).

Connecting to App Builder Database Storage is where `aio-lib-db` most differs from the MongoDB Node Driver.

The following is the general pattern for loading and using `aio-lib-db`:

```javascript
const libDb = require('@adobe/aio-lib-db')

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
    if (error.name == 'DbError') {
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

- You do not need to specify connection credentials because they are taken from the runtime context, specifically the runtime namespace and auth.
- You do not need to specify the database URL because all requests go through the App Builder Storage Database Service.
- The library must be initialized in the same region the database was provisioned in.
- There is no option to select a different database because there is always a one-to-one relationship between an AIO Project Workspace and Workspace Database.

## CRUD operations

Included in the following are links to the equivalent methods for the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/).

### Insert documents

Insert one document:

```javascript
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

### Find documents

Find one document:

```javascript
const user = await userCollection.findOne({ email: 'john@example.com' });
```

Find all documents matching a filter (returns a cursor - see next section):

```javascript
const cursor = userCollection.find({ age: { $gte: 18 } })
```

Find with projection, sort, skip, and limit (returns a cursor):

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
- [Specify a query](https://www.mongodb.com/docs/drivers/node/current/crud/query/query-document/)
- [Count documents](https://www.mongodb.com/docs/drivers/node/current/crud/query/count/)
- [Retrieve distinct values](https://www.mongodb.com/docs/drivers/node/current/crud/query/distinct/)
- [Search text](https://www.mongodb.com/docs/drivers/node/current/crud/query/text/)
- [Search geospatially](https://www.mongodb.com/docs/drivers/node/current/crud/query/geo/)

### Count documents

The `countDocuments()` method provides an accurate count of documents matching a filter by scanning the collection, while `estimatedDocumentCount()` provides a fast estimate based on collection metadata without scanning the documents.

```js
// Fast count estimate (uses collection metadata)
const estimate = await collection.estimatedDocumentCount();

// Accurate count with filter (scans documents)
const activeUsers = await collection.countDocuments({ status: 'active' });

// Count all documents accurately
const totalExact = await collection.countDocuments({});
```

### Update documents

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

### Delete documents

You can delete documents from a collection using the `deleteOne()`, `deleteMany()`, and `findOneAndDelete()` methods. These methods allow you to specify a filter to identify the documents to delete.

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

### Bulk operations

Bulk operations allow you to perform multiple write operations in a single request, which can improve performance by reducing round trips to the database. The `bulkWrite()` method accepts an array of write operations, such as inserts, updates, and deletes.

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

### Cursor access patterns

Both `find` and `aggregate` return cursors.

Using `toArray()` loads all results into memory:

```javascript
const results = await cursor.toArray()
```

Using iteration is memory-efficient:

```javascript
while (await cursor.hasNext()) {
  const doc = await cursor.next();
  console.log(doc)
}
```

Using `for await...of` is the most convenient:

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

### Cursor transformations

The `map()` method can be used to transform documents as they are retrieved from the database. This is useful for adding computed fields, changing field names, or any other transformation that needs to be applied to the documents before they are used in the application.

```js
// Transform documents as they're retrieved
const cursor = collection.find({ status: 'active' })
  .map(doc => ({
    ...doc,
    displayName: `${doc.firstName} ${doc.lastName}`,
    isVip: doc.tier === 'premium'
  }));

// Chain multiple transformations
const cursor = collection.find({ status: 'active' })
  .map(doc => ({ ...doc, processed: true }))
  .map(doc => ({ ...doc, timestamp: new Date() }));
```

## Aggregations

Aggregates are powerful tools for building complex queries.

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

The following advanced example identifies the top five performing active product categories from recent sales data, useful for business intelligence dashboards or reporting.

It is adapted from MongoDB's [Complete Aggregation Pipeline Tutorials](https://www.mongodb.com/docs/manual/tutorial/aggregation-complete-examples/). With only a few exceptions, the examples there are valid for App Builder Database Storage. (The `$set` and `$unset` stages are not supported.)

```js
// Complex aggregation with multiple stages
const cursor = collection.aggregate()
  .match({ dateCreated: { $gte: new Date('2024-01-01') } })
  .lookup({
    from: 'categories',
    localField: 'categoryId',
    foreignField: '_id',
    as: 'category'
  })
  .unwind('$category')
  .redact({
    $cond: {
      if: { $eq: ['$category.status', 'active'] },
      then: '$$DESCEND',
      else: '$$PRUNE'
    }
  })
  .group({
    _id: '$category.name',
    totalSales: { $sum: '$amount' },
    averageOrder: { $avg: '$amount' },
    orderCount: { $sum: 1 }
  })
  .sort({ totalSales: -1 })
  .limit(5)
  .out('sales_summary'); // Output results to a new collection
```

MongoDB Node Driver references:

- [Aggregation Operations](https://www.mongodb.com/docs/drivers/node/current/aggregation/)
- [Aggregation Pipeline Stages](https://www.mongodb.com/docs/drivers/node/current/aggregation/pipeline-stages/)

## Storage Statistics

You can retrieve storage statistics for your database and organization using the `dbStats()` and `orgStats()` methods on the client object, respectively.

### Individual database statistics

```javascript
// Get storage statistics for the database with the default scale factor (bytes)
const dbStats = client.dbStats()

// Get storage statistics for the database with a scale factor (for example, KB)
const dbStatsKb = client.dbStats({ scale: 1024 })
```
| field returned | description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| collections    | the number of collections                                                                       |
| objects        | the number of objects/documents                                                                 |
| views          | the number of views (not currently supported)                                                   |
| indexes        | the number of indexes                                                                           |
| dataSize       | the actual amount of storage used (default bytes)                                               |
| storageSize    | space allocated for storage (default bytes)                                                     |
| indexSize      | space allocated for indexes (default bytes)                                                     |
| ok             | whether the request was successful                                                              |
| scaleFactor    | the scale factor used for the size fields, ex: 1024 for kilobyte-scale (default is 1 for bytes) |
| lastUpdated    | when the statistics were last updated                                                           |

### Organization storage statistics

```javascript
// Get combined storage statistics across databases in the organization with the default scale factor (bytes)
const orgStats = client.orgStats()

// Get combined storage statistics across databases in the organization with a scale factor (for example. MB)
const orgStatsMb = client.orgStats({ scale: 1024 * 1024 })
```
| Field returned            | Description                                                                                                                |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------|
| ok                        | Whether the request was successful                                                                                         |
| databases                 | The number of databases in the organization                                                                                |
| collections               | The total number of collections across databases                                                                           |
| dataSize                  | The total actual amount of storage used across databases (default bytes)                                                   |
| storageSize               | Space allocated for storage (default bytes)                                                                                |
| indexSize                 | Space allocated for indexes (default bytes)                                                                                |
| scaleFactor               | The scale factor used for the size fields, ex: 1024 for kilobyte-scale (default is 1 for bytes)                            |
| databaseStats             | An array of statistics for individual databases in the organization                                                        |
| databaseStats.namespace   | The runtime namespace the database corresponds to                                                                          |
| databaseStats.dataSize    | The actual amount of storage used by the database (default bytes)                                                          |
| databaseStats.storageSize | Space allocated for storage for the database (default bytes)                                                               |
| databaseStats.indexSize   | Space allocated for indexes for the database (default bytes)                                                               |
| databaseStats.collections | The number of collections in the database                                                                                  |
| databaseStats.scaleFactor | The scale factor used for the size fields in the databaseStats array, ex: 1024 for kilobyte-scale (default is 1 for bytes) |
| databaseStats.lastUpdated | When the database statistics were last updated                                                                             |

## Indexing

Indexes are critical for optimizing query performance. The following examples show how to create, list, and drop indexes using the `aio-lib-db` library.

```js
// Create indexes for better query performance
await collection.createIndex({ email: 1 }, { unique: true });
await collection.createIndex({ 'profile.age': 1, status: 1 });

// List all indexes
const indexes = await collection.getIndexes();

// Drop an index
await collection.dropIndex('email_1');
```

### String and object representations of the _id field

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

When the `_id` field is represented as a string, for example, in an HTTP request or text file, it needs to be converted to an ObjectId before it is used in a query filter. To retrieve the above document, for example, specify code similar to the following:

```javascript
const {ObjectId} = require('bson')
const userDocument = await userCollection.findOne({ _id: new ObjectId("56fc40f9d735c28df206d078")})
```

Results similar to the following will be returned:

```json
{
    "name": "Jane Smith",
    "_id": "56fc40f9d735c28df206d078"
}
```

See the [MongoDB docs](https://www.mongodb.com/docs/manual/core/document/#std-label-document-id-field) for more details on the `_id` field.

## Collection management

The `collection` object provides methods for managing collections in the database, such as creating, dropping, and renaming collections.

Collections do not need to be explicitly created before using them. For example, if a user is inserted into a `users` collection, the `users` collection will be automatically created if it does not already exist.

```javascript
// Drop a collection (permanently delete)
await collection.drop();

// Rename a collection
await collection.renameCollection('new_collection_name');

// Create a new collection with options
const newCollection = await client.createCollection('analytics', {
  validator: {
    $jsonSchema: {
      required: ['userId', 'action', 'timestamp'],
      properties: {
        userId: { type: 'string' },
        action: { type: 'string' },
        timestamp: { type: 'date' }
      }
    }
  }
});
```

## Query options

You can specify various options when performing queries to control the behavior of query execution, such as which index to use, how long the query should run before timing out, and how the results should be sorted and collated.

```javascript
// Advanced query options
const cursor = collection.find({ status: 'active' })
  .hint({ status: 1 })                    // Use specific index
  .maxTimeMS(5000)                        // Set query timeout
  .readConcern({ level: 'majority' })     // Set read concern
  .collation({ locale: 'en', strength: 2 }) // Case-insensitive sorting
  .noCursorTimeout(true);                 // Disable cursor timeout
```
