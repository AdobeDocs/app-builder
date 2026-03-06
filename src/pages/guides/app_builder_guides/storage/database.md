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

## App Builder Data Services API

In order to use App Builder Database Storage in an AIO project workspace, you must add the **App Builder Data Services** API, which provides the necessary authentication between runtime actions and the App Builder Database Storage service.

You can add the **App Builder Data Services** API in the developer console like any other API. It does not require any special license or subscription beyond the App Builder license.

## Provision a workspace database

Before using Database Storage in an AIO project workspace, a workspace database must be provisioned. This is a self-service operation requiring no special permissions.

Note that there is a strict one-to-one relationship between an AIO project workspace and a workspace database, and each workspace database is entirely isolated from all other workspace databases. Also, each workspace database must reside in one and only one of the following regions:

- `amer`: North, Central, and South America. Data is stored in the US.
- `apac`: Asia and Pacific. Data is stored in Japan.
- `emea`: Europe, the Middle East, and Africa. Data is stored in the EU.
- `aus`: Australia. Data is stored in Australia.

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

## Runtime actions and aio-lib-db

The `aio-lib-db` package provides the main programming interface for App Builder Database Storage and the README at [aio-lib-db](https://github.com/adobe/aio-lib-db) provides its main documentation.

The `aio-lib-db` package is intentionally modeled on the [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) striving to be a near drop-in replacement for applications developed for MongoDB and/or AWS DocumentDB.

### Installation

Run the following command in the root of your AIO project workspace to install the `aio-lib-db` package:

```bash
npm install @adobe/aio-lib-db
```

### Initialization and authentication

You must always initialize **aio-lib-db** with an IMS Access Token. The simplest way to generate a token is by using the **@adobe/aio-sdk** library as demonstrated in the following example:

```javascript
const {generateAccessToken} = require('@adobe/aio-sdk').Core.AuthClient;
const libDb = require('@adobe/aio-lib-db');

async function main(params) {
  const token = await generateAccessToken(params);
  const db = await libDb.init({token: token});
}
```

This example has the following requirements:

- The AIO project workspace must include the **App Builder Data Services** API. See [App Builder Data Services API](#usage-quotas-and-limits) for details.
- The `include-ims-credentials` annotation for the runtime action must be set to `true` in the `app.config.yaml` application manifest.

The `include-ims-credentials` annotation will look similar to the following example:

```yaml
actions:
  action:
    function: actions/generic/action.js
    annotations:
      include-ims-credentials: true
```

The **@adobe/aio-sdk** library transparently manages caching and refreshing tokens as needed, so you do not need to implement caching or refreshing tokens yourself.

### Region selection

**aio-lib-db** must be initialized in the region the workspace database was provisioned. Otherwise, the connection will fail.

To explicitly initialize the library in a specific region, pass the `{region: "<region>"}` argument to the `libDb.init()` method.

Called without an explicit region, `libDb.init()` will initialize the library either in the default `amer` region or in the region defined in the `AIO_DB_REGION` environment variable.

### General use

Using `aio-lib-db` in a runtime action is documented at [Runtime actions with Database Storage](./db-runtime-actions.md).

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

- **Immediately contact Adobe Support or their Adobe account team** to request a restoration.
- Submit the request as soon as the issue is identified.
- Restoration is only possible within a **limited time window**, and delays may make recovery impossible.
- Provide the following information to assist with the restoration request:
  - IMS Organization name
  - IMS Organization ID
  - The workspace / runtime namespace in which the database was deleted
  - Any additional context about the deletion event, if available

**Adobe responsibilities**

Upon receiving a valid request, Adobe will:

- Assess whether a backup snapshot is available for the affected database
- Work with the customer to attempt restoration from the most appropriate backup
- Communicate any limitations, risks, or constraints associated with the restoration effort

Restoration attempts are **best-effort** and may not be possible in all scenarios.
