---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
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

No pre-configuration is required, just install the libraries and use them in your project. We will be transparently using your AppBuilder credentials to authorize and entitle your requests.

*When should I use Files vs State?*

- Files is good for bandwidth and State is good for latency.
- Files supports sharing data via presigned-url, State supports setting expirations.
- As a rule of thumb if you expect your data to grow larger than 100KBs go with Files, otherwise use State.

## State

***We are introducing major changes for State**, now hosting our storage service. The documentation refers to the new version which is still in **developer preview**. Documentation for the last stable version based on CosmosDB is available [here](https://github.com/adobe/aio-lib-state/tree/3.x)*

***How is my data stored?***

- Your data is stored in an isolated "State container" mapping to the I/O Runtime namespace and Application Workspace.
- Each region stores your data independently, treat it as a different instance. We support `amer` and `emea`. *`apac` is coming soon.*
- Note the default time-to-live for a key-value which is 1 day, the maximum is 1 year (365 days).

### Getting started

***Library usage, from an I/O Runtime Action:***

```bash
npm install @adobe/aio-lib-state@next
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
  await state.put('key', 'value') // with default ttl
  await state.put('another key', 'another value', { ttl: 200 }) // in seconds, use -1 for max.
  // delete
  await state.delete('key')
  // delete all keys and values
  await state.deleteAll()
  // returns usage statistics (storage)
  await state.stats()
  // returns true if you have at least one key and value
  await state.any()

  // coming soon!
  // await state.listKeys()
```

Explore the [full API](https://github.com/adobe/aio-lib-state/blob/main/doc/api.md)

***CLI usage, from your local machine***: *coming soon!*

### Limits & validation (preview)

Limits are enforced and can't be changed on a per-user basis.

- State is only available to Runtime Namespaces that follow the AppBuilder format: `amsorg-project(-workspace)?`.
- Max state value size: `1MB`.
- Max state key size: `1024 bytes`.
- Max-supported TTL is `365 days`.
- Values format: any `string|binary`.
- Keys format: `string` only `alphanumeric` with `-`,`_`,`.`.

### Quotas (preview)

Quotas are limits that depend on the organization's entitlements. Every organization with AppBuilder access is entitled to at least 1 State quota.

At the organization level, 1 quota provides:

- 200GB/month bandwidth usage (~5MB/min): `bandwidth usage = bytes uploaded + bytes downloaded`
- 1GB storage: `storage usage = 2 * key_sizes + value_sizes`

The quota is shared for all State Containers in the organization, across all regions. It is not enforced for now, just tracked.

*Example: org 123 is entitled to 3 quotas, the total bandwidth usage of the organization should not exceed 600GB/month and the storage across regions should not exceed 3GB*

We also enforce rate-limiting at the State Container (=Workspace) level. Rate-limiting per quota unit is defined as:

- 10MB/min with up to 1MB/sec peaks for production Workspaces.
- 2MB/min with up to 1MB/sec peaks for non-production Workspaces.

In case of exceeding the rate-limiting quota, the State service will return with 429s. However, a retry mechanism in the State library will mitigate the propagation of the error on short time windows.

*Example: org 123 is entitled to 5 quotas, any production workspace will not be throttled before consuming 50MB/min or 5MB/sec bandwidth*

### Troubleshooting

Set `DEBUG=@adobe/aio-lib-state*` to see debug logs.

## Files

*Files is currently implemented as an abstraction layer over Azure Blob. Major changes and additional features are planned, stay tuned.*

To learn more please visit the [Adobe I/O File Storage library](https://github.com/adobe/aio-lib-files) repository.
