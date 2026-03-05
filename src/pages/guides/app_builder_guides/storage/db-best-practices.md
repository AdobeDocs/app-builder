---
keywords:
  - Adobe I/O
  - App Builder
  - Database Storage
  - aio-lib-db
  - DocumentDB
  - MongoDB
title: Database Storage Best Practices
description: Learn best practices for using the App Builder Database Storage library to optimize performance, reliability, and maintainability in your applications.
---

# Database Storage best practices

Following best practices can help ensure optimal performance, reliability, and maintainability when using App Builder Database Storage in your applications.

## Always close connections

Be sure to always close database connections when they are no longer needed to free up resources and avoid potential connection leaks.

```javascript
const client = await db.connect();
try {
  // Your database operations
} finally {
  await client.close();
}
```

## Use projections for large documents

A projection is a way to specify which fields should be included or excluded in the documents returned by a query. Using projections can improve performance by reducing the amount of data transferred from the database and processed by the application.

```javascript
// Only fetch needed fields
const users = await collection.find({})
  .project({ name: 1, email: 1, _id: 0 })
  .toArray();
```

## Use indexes for frequent queries

Creating indexes on fields that are frequently queried can significantly improve query performance by allowing the database to quickly locate relevant documents without scanning the entire collection.

```javascript
// Create indexes for frequently queried fields
await collection.createIndex({ email: 1 });
await collection.createIndex({ status: 1, createdAt: -1 });
```

## Handle large result sets with cursors

Large result sets should be handled with cursors to avoid loading too much data into memory at once. Cursors allow you to iterate through results one at a time or in batches.

```javascript
// For large datasets, use cursor iteration instead of toArray()
for await (const doc of collection.find({})) {
  // Process one document at a time
  await processDocument(doc);
}
```

## Use aggregation for complex queries

In cases where you need to perform complex data processing, transformations, or computations on the server side, using the aggregation framework can be more efficient than retrieving raw documents and processing them in the application.

```javascript
// Use aggregation for complex data processing
const report = await collection.aggregate()
  .match({ date: { $gte: startDate } })
  .group({ _id: '$category', total: { $sum: '$amount' } })
  .sort({ total: -1 })
  .toArray();
```
