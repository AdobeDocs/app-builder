---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: DocumentDB and MongoDB compatibility
description: Understand the compatibility between AWS DocumentDB and MongoDB in the context of App Builder Database Storage, including supported features and limitations.
---

# DocumentDB and MongoDB compatibility

The MongoDB 8.0 features supported by App Builder Database Storage (ABDB) are constrained by the AWS DocumentDB with MongoDB compatibility it is built on.

The primary reference for MongoDB compatibility is [Supported MongoDB APIs, operations, and data types in Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html). Note that ABDB uses version 8.0 of the MongoDB API. Some additional functional differences are documented at [Functional differences: Amazon DocumentDB and MongoDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/functional-differences.html).

Beyond those imposed by AWS DocumentDB there are additional constraints imposed by the App Builder Database Storage itself. For example, the App Builder DB exposes far fewer administrative commands than either DocumentDB or MongoDB, because it is a multi-tenant offering.

The following sections highlight the differences between the App Builder Database Storage API and AWS DocumentDB.

## Database commands

Database commands are not supported by the App Builder Database Storage.

Administrative and diagnostic features are limited to those provided by the `aio-lib-db` package and the db plugin for the aio cli.

AWS reference: [Database commands](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-database).

## Query and projection operators

Same as DocumentDB 8.0.

AWS reference: [Query and projection operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-query)

## Update operators

Same as DocumentDB 8.0.

AWS reference: [Update Operators](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-update)

## Geospatial

Same as DocumentDB 8.0.

AWS reference: [Geospatial](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-geospatial)

## Cursor methods

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

## Aggregation pipeline operators

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

## Data types

Same as DocumentDB 8.0.

AWS reference: [Data types](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-data-types)

## Indexes and index properties

Same as DocumentDB 8.0.

AWS reference: [Indexes and index properties](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html#mongo-apis-index)
