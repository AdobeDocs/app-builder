---
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: Storage Options
---

# Storage Options

**IMPORTANT:** This documentation describes a product in early-access development and does not reflect all functionality intended for general availability (GA). It cannot be used in production until GA.

As part of App Builder, you have access to three storage services for persisting data dynamically from your Runtime actions: **Database**, **Files**, and **State**. Each service is designed for different use cases, with distinct benefits and trade-offs.

## Quick comparison

The following table summarizes the key differences between the three storage services:

| Feature | State | Files | Database |
|---------|-------|-------|----------|
| **Best for** | Fast key-value access | Large file storage | Complex queries and relationships |
| **Max value size** | 1 MB | 200 GB | Max document size is 16MB |
| **Data model** | Key-value pairs | Binary blobs | Document collections |
| **Query capability** | Get by key, list with glob | Get by path | Rich queries, aggregations, and indexes |
| **TTL support** | Yes (max 365 days) | No | No |
| **Sharing** | No | Yes (pre-signed URLs) | No |
| **Provisioning** | Automatic | Automatic | Manual (CLI or SDK) |

## Usage quotas and limits

The following quotas and limits apply while dealing with Persistent Storage associated with your App Builder application.

Quotas are shared across the organisation. Workspace limits are defined at the *workspace* level. The Database and State services may return 429 (rate-limits) or
403 (storage limits) errors if limits are exceeded.

| Limit                                                                                   | Limit Type                             | Default Limit                                                                     | Can it be Increased?                                                                                                                                                                                                         | Notes                                                                          |
|-----------------------------------------------------------------------------------------|----------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| How much data can you store in State?                                                   | Quota (increases with number of packs) | Up to 10 GB per App Builder pack                                                  | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Storage is calculated as: `(2 * total size of keys) + (total size of values)`. |
| How much State bandwidth can you utilize?                                               | Quota (increases with number of packs) | 1 TB per month per App Builder pack                                               | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Bandwidth is calculated as: total bytes uploaded + total bytes downloaded.     |
| How much data can you store in State in a single App Builder workspace?                 | Workspace limit (fixed per workspace)  | 1 GB for production workspaces 200 MB for other workspaces                        | Yes, by raising a support ticket. You can request an increase up to 10 GB. *Note: Increasing the limit beyond 10 GB in a single workspace can be supported depending on your case. Raise a support ticket to find out more.* | Storage is calculated as: `(2 * total size of keys) + (total size of values)`. |
| How much State burst bandwidth can you consume in a single App Builder workspace?       | Workspace limit (fixed per workspace)  | 1 MB/s (bursts) 10 MB/min for production workspaces 2 MB/min for other workspaces | Yes, by raising a support ticket. You can request an increase up to 3 MB/s and 30 MB/min per App Builder packs purchased.                                                                                                    | Bandwidth is calculated as: `total bytes uploaded + total bytes downloaded`.   |
| How fast can you increase your bandwidth consumption in a single App Builder workspace? | Workspace limit (fixed per workspace)  | 100 KB/s per minute                                                               | No                                                                                                                                                                                                                           | -                                                                              |
| How many keys can you store in State in a single App Builder workspace?                 | Workspace limit (fixed per workspace)  | 200K                                                                              | Yes, by raising a support ticket. You can request an increase up to 500K keys.                                                                                                                                               | This limit does not scale with the number of App Builder packs purchased.      |
| How many list operations can you run per minute in a single App Builder workspace?      | Workspace limit (fixed per workspace)  | 1K/min                                                                            | Yes, by raising a support ticket. You can request an increase up to 10K/min.                                                                                                                                                 | This limit does not scale with the number of App Builder packs purchased.      |
| How much data can you store in the Database Service?                                    | Quota (increases with number of packs) | Up to 40 GB per App Builder pack                                                  | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Includes storage used for both data and indexes.                               |
| How much Database bandwidth can you utilize?                                            | Quota (increases with number of packs) | Up to 10 TB per App Builder pack                                                  | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Includes both uploaded and downloaded traffic.                                 |
| How many Database collections (tables) can you create?                                  | Hard Limit                             | 1,000                                                                             | No                                                                                                                                                                                                                           | Enforced to ensure service reliability and performance.                        |

## State

State provides a high-performance key-value store optimized for low-latency access to small pieces of data.

### Benefits

- **Fast access** — Optimized for latency-sensitive operations
- **No provisioning required** — Works immediately with your App Builder credentials
- **Time-to-live (TTL)** — Automatic expiration of data (up to 365 days)
- **Multi-region support** — Choose from `amer`, `emea`, `apac`, or `aus` regions
- **Simple API** — Easy get, put, delete, and list operations
- **CLI and SDK support** — Manage state from code or command line

### Drawbacks

- **Size limits** — Maximum 1 MB per value, 1 KB per key
- **No sharing** — Cannot generate shareable URLs for data
- **Limited querying** — Only key-based access and glob pattern matching
- **Storage quotas** — Limited to 10 GB per App Builder pack, 1 GB per production workspace
- **Eventual consistency for list** — List operations may not immediately reflect recent changes

### When to use state

- Session data and user preferences
- Caching frequently accessed data
- Temporary data that should auto-expire
- Small configuration values
- Data under 100 KB that needs fast access

[Learn more about State](application-state.md#state)

## Files

Files provides blob storage for large binary data, built as an abstraction layer over cloud storage services.

### Benefits

- **Large file support** — Store files up to 200 GB
- **Shareable URLs** — Generate pre-signed URLs for secure sharing
- **Streaming support** — Efficient handling of large data transfers
- **No provisioning required** — Works immediately with your App Builder credentials
- **Copy operations** — Duplicate files without re-uploading
- **Strong consistency** — Read-after-write consistency guaranteed

### Drawbacks

- **No TTL** — Data persists indefinitely until manually deleted
- **No bulk delete** — Must delete files individually
- **Higher latency** — Optimized for throughput, not speed
- **Limited querying** — Only path-based access, no search capabilities
- **Regional constraints** — Data stored in US regions only

### When to use files

- Storing images, videos, or documents
- Large payloads over 100 KB
- Data that needs to be shared by URL
- Binary data requiring streaming
- Long-term storage without expiration

[Learn more about Files](application-state.md#files)

## Database

Database Storage provides a document-style database with a MongoDB-compatible API, powered by AWS DocumentDB.

### Benefits

- **Rich queries** — Full query language with filters, projections, and sorting
- **Aggregation pipelines** — Complex data transformations and analytics
- **Indexing** — Create indexes for optimized query performance
- **Collections** — Organize data into logical groups
- **Schema validation** — Optional enforcement of document structure
- **Familiar API** — Compatible with MongoDB Node Driver patterns
- **Geospatial queries** — Location-based data operations
- **Strong consistency** — CRUD operations are strongly consistent

### Drawbacks

- **Requires provisioning** — Must explicitly create database before use
- **More complex** — Steeper learning curve than State or Files
- **Regional lock-in** — Database is tied to a single region (`amer`, `emea`, or `apac`)
- **Limited admin commands** — Fewer administrative features than standalone MongoDB
- **Connection management** — Must handle client connections properly

### When to use database

- Complex data with relationships between entities
- Data requiring advanced queries and filtering
- Applications needing aggregation and analytics
- Large datasets requiring indexing for performance
- Data that benefits from schema validation
- Applications migrating from MongoDB or DocumentDB

[Learn more about Database](database.md)

## Choosing the right storage

Use this decision guide to select the appropriate storage service:

```
Is your data larger than 100 KB?
├── Yes → Do you need shareable URLs?
│         ├── Yes → Use Files
│         └── No → Is it structured data needing queries?
│                  ├── Yes → Use Database
│                  └── No → Use Files
└── No → Do you need complex queries or relationships?
         ├── Yes → Use Database
         └── No → Do you need automatic expiration?
                  ├── Yes → Use State
                  └── No → Use State (simpler) or Database (more features)
```

### Common patterns

| Use Case | Recommended Storage |
|----------|---------------------|
| User session data | State |
| Application configuration | State |
| Uploaded images/documents | Files |
| Export files for download | Files |
| User profiles with queries | Database |
| Product catalogs | Database |
| Order history with analytics | Database |
| Temporary processing data | State (with TTL) |
| Cached API responses | State (with TTL) |

## Getting started

All three storage services integrate seamlessly with App Builder:

```bash
# State - install the library
npm install @adobe/aio-lib-state

# Files - install the library  
npm install @adobe/aio-lib-files

# Database - install the library and provision
npm install @adobe/aio-lib-db
aio app db provision
```

No additional configuration is needed. The libraries automatically use your App Builder credentials for authentication and authorization.
