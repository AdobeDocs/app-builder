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

Sometimes you want to bind the same parameter values for all invocations or you just set default values of your action. In either case, you have two different options: setting params at the action level, or at the package level (so all actions in that package can inherit them). These params are set in the `manifest.yaml` file, as the following example.

```yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: Joe
```

In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the `.env` file (which is not committed to Git), and reference them in the `manifest.yaml` file.

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

For authentication with Adobe APIs, you should leverage [App Builder Security Guideline](security/index.md) using our supported SDKs.

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

*We've just released a [new State version](https://github.com/adobe/aio-lib-state/releases/tag/4.0.0) built on top of our own storage service. [Legacy State](https://github.com/adobe/aio-lib-state/tree/3.x) (`@adobe/aio-lib-state` < v4 based on CosmosDB) is still available, but we strongly advise new users to use the latest library version to avoid migrating later. Note that this applies also to `State` imported from `@adobe/aio-sdk` < v6. We will be sending out migration steps for existing customers soon. The [feature matrix](#feature-matrix) provides a detailed comparison of both versions.*

***How is my data stored?***

- State is a multi-tenant storage. Your data is isolated in a "State container" which maps to your I/O Runtime namespace and application Workspace. This means that each application Workspace has its own isolated data.
- You have the option to store data in either the `amer`, `emea` or `apac` region. These regions operate independently, so treat them as separate instances. You may prefer one region over the other to optimize latency, as it may be closer to your users, or for compliance reasons such as GDPR.
- Your data is not eternal. There is a configurable time-to-live (TTL) for each key-value pair, the default is 1 day and the maximum is 1 year (365 days).

Region Acronyms are abbreviations for one or more continents that are part of a business region.

- `amer`: North, Central, and South America. Data is stored in the US.
- `apac`: Asia and Pacific. Data is stored in Japan.
- `emea`: Europe, the Middle East, and Africa. Data is stored in the EU.

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
  // Note: match doesn't reduce the amount of work needed to traverse your key-values (see the #list-guarantees section)
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

Available for `aio --version` >= `10.2`.

The CLI must be run from within a valid App Builder application folder and uses the Runtime credentials to authenticate your requests to State. Each namespace has its own State container, so please ensure that your are accessing the expected instance by looking in your `.env` file for the `AIO_RUNTIME_NAMESPACE` variable.

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

The default region is `amer`, to access another region, you can use the `--region` flag or add the `AIO_STATE_REGION=emea` variable to your `.env`.

Navigate the CLI usage documentation from the repo's [README](https://github.com/adobe/aio-cli-plugin-app-storage?tab=readme-ov-file#usage) or by using the `--help` flag on the desired command.

### Constraints

- State is only available to Runtime namespaces created via the Developer Console, which follow the App Builder format: `orgId-project(-workspace)?`. Legacy namespaces are not supported.
- Max state value size: `1MB`.
- Max state key size: `1024 bytes`.
- Max-supported TTL is `365 days`.
- Values format: any `string|binary`.
- Keys format: `string` only `alphanumeric` with `-`,`_`,`.`.

### Usage quotas and limits

The following quotas and limits apply while dealing with Application State associated with your App Builder application.

Quotas are shared across the organisation. Workspace limits are defined at the *workspace* level. The State service may return 429 (rate-limits) or
403 (storage limits) errors if limits are exceeded.

| Limit                                                                                   | Limit Type                            | Default Limit                                                                     | Can it be Increased?                                                                                                                                                                                                         | Notes                                                                         |
|-----------------------------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| How much data can you store in State?                                                   | Quota (increases with number of packs) | Up to 10 GB per App Builder pack                                                  | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Storage is calculated as: `(2 * total size of keys) + (total size of values)`. |
| How much State bandwidth can you utilize?                                               | Quota (increases with number of packs) | 1 TB per month per App Builder pack                                               | Yes, by purchasing more packs of App Builder                                                                                                                                                                                 | Bandwidth is calculated as: total bytes uploaded + total bytes downloaded.    |
| How much data can you store in State in a single App Builder workspace?                 | Workspace limit (fixed per workspace) | 1 GB for production workspaces 200 MB for other workspaces                        | Yes, by raising a support ticket. You can request an increase up to 10 GB. *Note: Increasing the limit beyond 10 GB in a single workspace can be supported depending on your case. Raise a support ticket to find out more.* | Storage is calculated as: `(2 * total size of keys) + (total size of values)`. |
| How much State burst bandwidth can you consume in a single App Builder workspace?       | Workspace limit (fixed per workspace) | 1 MB/s (bursts) 10 MB/min for production workspaces 2 MB/min for other workspaces | Yes, by raising a support ticket. You can request an increase up to 3 MB/s and 30 MB/min per App Builder packs purchased.                                                                                                    | Bandwidth is calculated as: `total bytes uploaded + total bytes downloaded`.  |
| How fast can you increase your bandwidth consumption in a single App Builder workspace? | Workspace limit (fixed per workspace) | 100 KB/s per minute                                                               | No                                                                                                                                                                                                                           | -                                                                             |
| How many keys can you store in State in a single App Builder workspace?                 | Workspace limit (fixed per workspace) | 200K                                                                              | Yes, by raising a support ticket. You can request an increase up to 500K keys.                                                                                                                                               | This limit does not scale with the number of App Builder packs purchased.     |
| How many list operations can you run per minute in a single App Builder workspace?      | Workspace limit (fixed per workspace) | 1K/min                                                                            | Yes, by raising a support ticket. You can request an increase up to 10K/min.                                                                                                                                                 | This limit does not scale with the number of App Builder packs purchased.     |

### List considerations

Using `state.list`, you can scan through the keys stored in your State container. `list` is a cursor-based iterator, which requires multiple calls to the State service to traverse all your keys.

It is important to understand that `list` is scanning through your keys:

- **the more keys you have stored**, the longer a full iteration will take to complete, regardless of whether you use the [using a glob-style pattern](#match-option).
- every call to `list` will iterate over up to 1000 keys. The former `countHint` option is now ignored.
- As an example, trying to match 1 key in a 10k key-values data-set will still require 10 calls to `list` to fetch it.

The `list` command is not strongly consistent, and the following points need to be taken into account:

- We are sending `list` requests to a replica, there is a ~5ms lag, after which a
  full iteration returns keys that were present in the container and doesn't
  return keys that were deleted prior to an iteration.
- Keys that were not constantly present in the collection during a full
  iteration, may be returned or not: it is undefined.
- A given key may be returned multiple times across iterations (but not within a
  same iteration). You can mitigate this by either performing operations that are
  safe when applied multiple times (recommended with many keys) or by collecting all keys in an
  array first and then remove any duplicates.
- In some rare cases, `list` may return expired keys.

Please note, that `list` is subject to rate-limiting, so listing many keys may result in 429s.

### `match` option

`state.deleteAll` and `state.list` support a `match` option to filter keys.

`match` supports a glob-style pattern via the `*` character, suppose you have the following keys: `key`, `base.key`, `key-1`

- `match=key` will match `key`
- `match=k*` will match `key`
- `match=*k*` will match `key`, `base.key`, `key-1`
- `match=*-1` will match `key-1`
- `match=base.*-1` will match none

The `match` filter is applied server-side **after** traversing elements, this means:

- `match` does not reduce the work needed to iterate over your key-values.
- every call to `list` may return only few keys when matching a handful of key-values in a large dataset.

### Troubleshooting

Set `DEBUG=@adobe/aio-lib-state*` to see debug logs.

## Files

*Files is currently implemented as an abstraction layer over Azure Blob. Major changes and additional features are planned, stay tuned.*

To learn more please visit the [Adobe I/O File Storage library](https://github.com/adobe/aio-lib-files?tab=readme-ov-file#adobe-io-lib-files) repository.

## Feature Matrix

|                     | Files                       | State                                  | State Legacy               |
|---------------------|-----------------------------|----------------------------------------|----------------------------|
| read write delete   | Y                           | Y                                      | Y                          |
| list                | Y                           | Y                                      | N                          |
| streams             | Y                           | N                                      | N                          |
| copy                | Y                           | N                                      | N                          |
| deleteAll           | N                           | Y                                      | N                          |
| sharing             | Y (pre-sign URLs)           | N                                      | N                          |
| Time-To-Live        | N                           | Y                                      | Y                          |
| max TTL             | infinite                    | 365 days                               | infinite                   |
| max file/value size | 200GB                       | 1MB                                    | 2MB                        |
| max key size        | 1KB                         | 1KB                                    | 1KB                        |
| key charset         | open                        | `alphanumeric` with `_-.`              | any but `/\?#`             |
| max load            | N/A                         | 10MB/min, 1MB/s 1k/min `list` requests | 900 RU/min (~KB/min)       |
| max key values      | N/A                         | 200K (scalable)                        | N/A                        |
| max storage         | 1TB                         | 10GB                                   | 10GB                       |
| max monthly load    | N/A                         | 1TB (scalable)                         | N/A                        |
| regions             | East US West US read-only   | Amer (US) Emea (EU)  Apac (JPN)        | East US Europe read-only   |
| consistency         | strong                      | strong (CRUD), eventual for `list`     | eventual                   |
