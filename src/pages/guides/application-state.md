---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Dealing with Application State
---

# Dealing with Application State

Application state could be a pre-defined variable of your action that is accessible across all invocations, or dynamic values or files uploaded by the web users when the app is running. App Builder provides the appropriate tools to handle each of these requirements.

## Default parameters

Sometimes you want to bind the same parameter values for all invocations or you just set default values of your action. In either case, you have two different options: setting params at the action level, or at the package level (so all actions in that package can inherit them). These params are set in the manifest.yaml file, as the following example.

```yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: Joe
```

In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the .env file (which is not committed to Git), and reference them in the manifest.yaml file.

```bash
# in .env
NAME=Joe
```

```yaml
# in manifest.yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: $NAME
```

### Considerations about security

For authentication with Adobe APIs, you should leverage [App Builder Security Guideline](./security/index.md) using our supported SDKs.

For other 3rd party systems and APIs when provisioning actions with the secrets/passwords is a must, you can then use the default params as demonstrated above. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code.

## Persistence at runtime

As part of App Builder, you will have out-of-the-box access to *Files* and *State*, our two storage services meant for persisting data dynamically from your Runtime actions.

No pre-configuration is required, just install the libraries and use them in your project. We will be transparently using your App Builder credentials to authorize and entitle your requests.

*When should I use Files vs State?*


- Files is good for transferring large payloads (bandwidth oriented) and State is good for fast access (latency oriented).
- Files supports sharing data via presigned-url, State supports setting expirations.
- As a rule of thumb if you expect your data to grow larger than 100KBs go with Files, otherwise use State.

Please refer to the [feature matrix](#feature-matrix) for a detailed comparison.

## State

*We've just released a [new State version](https://github.com/adobe/aio-lib-state/releases/tag/4.0.0) built on top of our own storage service. [Legacy State](https://github.com/adobe/aio-lib-state/tree/3.x) (@adobe/aio-lib-state < v4 based on CosmosDB) is still available, but we strongly advise new users to use the latest library version to avoid migrating later. Note that this applies also to State imported from @adobe/aio-sdk < v6. We will be sending out migration steps for existing customers soon. The [feature matrix](#feature-matrix) provides a detailed comparison of both versions.*

***How is my data stored?***

- State is a multi-tenant storage. Your data is isolated in a "State container" which maps to your I/O Runtime namespace and application Workspace. This means that each application Workspace has its own isolated data.
- You have the option to store data in either the amer, emea or apac region. These regions operate independently, so treat them as separate instances. You may prefer one region over the other to optimize latency, as it may be closer to your users, or for compliance reasons such as GDPR. 
- Your data is not eternal. There is a configurable time-to-live (TTL) for each key-value pair, the default is 1 day and the maximum is 1 year (365 days).

Region Acronyms are abbreviations for one or more continents that are part of a business region.

- amer: North, Central, and South America. Data is stored in the US.
- apac: Asia and Pacific. Data is stored in Japan.
- emea: Europe, the Middle East, and Africa. Data is stored in the EU.

### Getting started

***Library usage, from an I/O Runtime Action:***

```bash
npm install @adobe/aio-lib-state
```

```js
  const stateLib = require('@adobe/aio-lib-state')

  // init with implicit I/O Runtime credentials, default region is 'amer'.
  const state = await stateLib.init()
  // set an explicit region
  const state2 = await stateLib.init({ region: 'emea' })

  // get
  const res = await state.get('key') // res = { value, expiration }
  const value = res.value
  // put
  await state.put('key', 'value') // with default ttl of 1 day
  await state.put('another key', 'another value', { ttl: 200 }) // in seconds, use stateLib.MAX_TTL for 365 days.
  // delete
  await state.delete('key')

  // list keys using an iterator, with glob pattern support, omit the match option to list all keys
  for await (const { keys } of state.list({ match: 'ke*' })) {
    console.log(keys)
  }

  // returns true if you have at least one key and value
  await state.any()
  // returns usage statistics (storage)
  await state.stats()

  // delete selected keys matching a glob pattern
  // Note: the match option is required!
  await state.deleteAll({ match: 'ke*' })
```

Explore the [full API](https://github.com/adobe/aio-lib-state/blob/main/doc/api.md)

***CLI usage, from your local machine***:

Available for aio --version >= 10.2.

The CLI must be run from within a valid App Builder application folder and uses the Runtime credentials to authenticate your requests to State. Each namespace has its own State container, so please ensure that your are accessing the expected instance by looking in your .env file for the AIO_RUNTIME_NAMESPACE variable.

```bash
> aio app state
Manage your App Builder State storage

USAGE
  $ aio app state COMMAND

COMMANDS
  app state delete  Delete key-values
  app state get     Get a key-value
  app state list    List key-values
  app state put     Put a key-value
  app state stats   Display stats
```

The default region is amer, to access another region, you can use the --region flag or add the AIO_STATE_REGION=emea variable to your .env.

Navigate the CLI usage documentation from the repo's [README](https://github.com/adobe/aio-cli-plugin-app-storage?tab=readme-ov-file#usage) or by using the --help flag on the desired command.

### Limits & validation

Limits are enforced and can't be changed on a per-user basis.

- State is only available to Runtime namespaces created via the Developer Console, which follow the App Builder format: orgId-project(-workspace)?. Legacy namespaces are not supported.
- Max state value size: 1MB.
- Max state key size: 1024 bytes.
- Max-supported TTL is 365 days.
- Values format: any string|binary.
- Keys format: string only alphanumeric with -,_,..

### Quotas

Quotas are limits that depend on the organization's entitlements. Every organization with App Builder access is entitled to at least 1 State quota.

At the organization level, 1 quota provides:

- 200GB/month bandwidth usage (~5MB/min): bandwidth usage = bytes uploaded + bytes downloaded
- 1GB storage: storage usage = 2 * key_sizes + value_sizes

The quota is shared for all State containers in the organization, across all regions. It is not enforced for now, just tracked.

*Example: org 123 is entitled to 3 quotas, the total bandwidth usage of the organization should not exceed 600GB/month and the storage across regions should not exceed 3GB.*

We also enforce rate-limiting at the State container (=Workspace) level within a region. Rate-limiting per quota unit is defined as:

- 10MB/min with up to 1MB/sec peaks for production Workspaces.
- 2MB/min with up to 1MB/sec peaks for non-production Workspaces.

In case of exceeding the rate-limiting quota, the State service will return with 429s. However, a retry mechanism in the State library will mitigate the propagation of the error on short time windows.

*Example: org 123 is entitled to 5 quotas, any production workspace will not be throttled before consuming 50MB/min or 5MB/sec bandwidth in a single region.*

### match option

state.deleteAll and state.list support a match option to filter keys.

match supports a glob-style pattern via the * character, suppose you have the following keys: key, base.key, key-1

- match=key will match key
- match=k* will match key
- match=*k* will match key, base.key, key-1
- match=*-1 will match key-1
- match=base.*-1 will match none

### List guarantees

Using state.list, you can iterate over the keys stored in your State container. State implements listing with a cursor-based iterator, which requires multiple calls to the State service to traverse all your keys. Please note, that list is subject to the bandwidth rate-limiting quotas, so listing many keys may result in 429s.

list provides the following guarantees:

- A full iteration always returns all keys that were present in the container during the start to the end of a full iteration.
- A full iteration never returns any key that was deleted prior to an iteration.

However, list also has the following drawbacks:

- Keys that were not constantly present in the collection during a full iteration, may be returned or not: it is undefined.
- A given key may be returned multiple times across iterations (but not within a
  same iteration). You can mitigate this by either performing operations that are
  safe when applied multiple times (recommended with many keys) or by collecting all keys in an
  array first and then remove any duplicates.
- In some rare cases, list may return expired keys.

Furthermore, you can control the list behavior via those two options:

- match, to filter keys [using a glob-style pattern](#match-option).
- countHint, to specify an approximate amount of keys returned per iteration. State doesn't provide a guarantee on the number of elements returned per iteration, but we try (again with no guarantees) to return at least countHint elements per iteration.

### Troubleshooting

Set DEBUG=@adobe/aio-lib-state* to see debug logs.

## Files

*Files is currently implemented as an abstraction layer over Azure Blob. Major changes and additional features are planned, stay tuned.*

To learn more please visit the [Adobe I/O File Storage library](https://github.com/adobe/aio-lib-files?tab=readme-ov-file#adobe-io-lib-files) repository.

## Feature Matrix

|                     | Files                     | State                         | State Legacy             |
| ------------------- | ------------------------- | ----------------------------- | ------------------------ |
| read<br>write<br>delete  | Y                         | Y                             | Y                        |
| list test-mani      | Y                         | Y                             | N                        |
| streams             | Y                         | N                             | N                        |
| copy                | Y                         | N                             | N                        |
| deleteAll           | N                         | Y                             | N                        |
| sharing             | Y (pre-sign URLs)         | N                             | N                        |
| Time-To-Live        | N                         | Y                             | Y                        |
| max TTL             | infinite                  | 365 days                      | infinite                 |
| max file/value size | 200GB                     | 1MB                           | 2MB                      |
| max key size        | 1KB                       | 1KB                           | 1KB                      |
| key charset         | open                      | alphanumeric with _-.         | any but /\?#             |
| max request load    | N/A                       | 10MB/min, 1MB/s(scalable)     | 900 RU/min (~KB/min)     |
| max storage         | 1TB                       | 1GB (scalable)                | 10GB                     |
| regions             | East US West US read-only | Amer (US)Emea (EU) Apac (JPN) | East US Europe read-only |
| consistency         | strong                    | strong                        | eventual                 |
