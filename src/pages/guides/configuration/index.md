---
title: Configuration
---
# App Builder Configuration Files

## Overview

An app has three configuration files, **defined in the root of the project folder**:

- `app.config.yaml` is the main configuration file, defining the application's behavior and implementation.
- `.env` is used to store secrets and environment variables available during build time.
- `.aio` is populated by the `aio` CLI to store the current Developer Console Workspace details.

Note: `.env` and `.aio` files **should not be committed to version control**.

## `app.config.yaml`

### Tl;dr: give me a full example:

```yaml
# standalone application config
application:
  hostname: 'customhost'
  runtimeManifest:
    packages:
      application-pkg:
        actions:
          count-apples:
            function: actions/count-apples/index.js
            web: 'yes'
            runtime: nodejs:18
            annotations:
              require-adobe-auth: true
  hooks:
    post-app-build: 'echo hook'

# extension points config
extensions:
  dx/excshell/1:
    # $include directive stores config in a separate file
    $include: ./dx-excshell-1/ext.config.yaml
  dx/asset-compute/worker/1:
    operations:
      workerProcess:
        - type: action
          impl: dx-asset-compute-worker-1/myworker
    runtimeManifest:
      packages:
        dx-asset-compute-worker-1:
          actions:
            myworker:
              function: actions/worker/index.js
              web: 'yes'
              runtime: nodejs:18

# public distribution only - customer configuration
configSchema: 
  title: 'the title'
  description: 'the description'
  properties:
    - title: 'Slack Webhook'
      type: 'string'
      description: 'Please provide the webhook used by this application. Configure in slack.com'
      envKey: 'SLACK_WEBHOOK'

# public distribution only - required products
requiredProducts: 
  - code: AEP
    minVersion: 0.0.0
    maxVersion: 1.0.0
```

### Standalone application and extensions

The `app.config.yaml` file can contain two top level fields: `application` and `extensions`.
Only one is required.

```yaml
# app.config.yaml

application:
  <common-config>
extensions:
  <extension-type>:
    <extension-definition>
    <common-config>
```

A project can implement a standalone application and N extensions.

### Common configuration

Extensions and the standalone application behave in a similar way.
Both can contain a UI and actions and both support a common configuration.
The common configuration contains following fields:

```yaml
# <common-config>

runtimeManifest:
  <runtime-manifest>
hooks:
  <app-hooks>
actions: <path to action folder>
web: <path to web folder>
unitTest: <path to unit test folder>
e2eTest: <path to e2e test folder>
dist: <path to build output folder>
htmlCacheDuration: <cache duration for UI .html files, default: 60s>
jsCacheDuration: <cache duration for UI .js files, default: about a week>
cssCacheDuration: <cache duration for UI .css files, default: about a week>
imageCacheDuration: <cache duration for UI image (.jpg, .png, .gif, etc.) files, default: about a week>
tvmurl: <alternative tvm url used to upload the UI>
awsaccesskeyid: <upload UI to own s3, provide credentials>
awssecretaccesskey: <upload UI to own s3, provide credentials>
s3bucket: <upload UI to own s3, provide credentials>
hostname: <alternative hostname for the UI>
```

#### Runtime Manifest

The `runtimeManifest` field holds the backend configuration deployed into Adobe I/O Runtime.
The full spec can be found [here](https://github.com/apache/openwhisk-wskdeploy/tree/master/specification/html). Acceptable values for the `limits` fields below can be found on the [Runtime System Settings](https://developer.adobe.com/runtime/docs/guides/using/system_settings/) page.
Here is an example to get started:

```yaml
runtimeManifest
   packages:
     myapp:
       license: Apache-2.0
       actions:
         generic:
           # path relative to the configuration file
           function: src/myapp/actions/generic/index.js
           web: 'yes'
           runtime: nodejs:18
           annotations:
            require-adobe-auth: true
         target:
           function: src/myapp/actions/target/index.js
           web: 'yes'
           runtime: nodejs:18
           limits:
             timeout: 60000
             memory: 512
             concurrency: 1
             logs: 10
           include:
              - ["myfilestoinclude/*.txt", "text/"]        
```

> Note that the above example also demonstrates the 'include' field of an action.  In some cases you may want to have a file deployed with your action code, and available to your code when it runs.
The example will copy all .txt files from the `myfilestoinclude/` directory and place it in a new dir `text/` that is available via `fs.readFile('text/somefile.txt', 'utf8', callback);` when your action is invoked.


> Note the above sets limit values.  Limits are defined as:
> 
> - `concurrency`: the maximum number of action invocations to send to the same container in parallel (default 200, min: 1,max: 500)
> - `logs`: the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
> - `timeout`: the timeout LIMIT in milliseconds after which the action is terminated (default 60000, min: 100, max: 3600000)
>   - _for web actions served from cdn there is a hard limit of 30 seconds for timeout_
> - `memory`: the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
>   - _setting distinct values (ex. 671) can impact cold starts as Runtime keeps a number of pre-warmed containers, but only for common memory sizes (128, 256, 512, 1024, etc.)_
> 
> More info on `limits` can be found on the [Runtime System Settings](https://developer.adobe.com/runtime/docs/guides/using/system_settings/) page.

##### Annotations 

Runtime actions can be decorated with annotations to enhance or modify action behavior. 

```yaml
runtimeManifest:
   packages:
     myapp:
       license: Apache-2.0
       actions:
         generic:
           annotations:
             require-adobe-auth: true
             disable-download: true  
```


In addition to the base annotations provided by Runtime (See [here](https://github.com/adobe-apiplatform/incubator-openwhisk/blob/master/docs/annotations.md)), there are a few special annotations: 

- **disable-download** (Default: false) - Determines whether action code can be downloaded. Once this annotation is set to true, it cannot be set back to false. 
- **require-adobe-auth** (Default: false) - Determines whether the action will require Adobe authentication to invoke. See [here](https://developer.adobe.com/app-builder/docs/guides/security/#authentication-and-authorization-handling) for more.

##### API Gateway Configuration

A Runtime API Gateway configuration can be added to expose web actions over specific paths and HTTP verbs. 

> Note: It can take 5 to 10 minutes for new gateway configurations to provision. In the meantime, you may see 404 errors from your API.

```yaml
runtimeManifest:
   packages:
     petsapp:
       license: Apache-2.0
       actions:
         get-pets: # Note the name of the action
           function: actions/get-pets/index.js
           web: 'yes'
           runtime: nodejs:18
         get-pet: # Note the name of the action
           function: actions/get-pet/index.js
           web: 'yes'
           runtime: nodejs:18
       apis: 
        get-pets: # API Name
          v1: # Base Path
            pets: # Relative Path
              get-pets: # Name of the action to connect this path to
                method: get
                response: http
        get-pet: # API Name
          v1: # Base Path
            pets/{petName}: # Relative Path, with a path parameter
              get-pet: # Name of the action to connect this path to
                method: get
                response: http
```

> Note: The configuration above will result in the following: 
> - `GET https://adobeioruntime.net/apis/[namespace]/v1/pets`
> - `GET https://adobeioruntime.net/apis/[namespace]/v1/pets/{petName}`

> Note: The second API above defines a path parameter in the relative path by using curly braces, i.e `pets/{petName}`
> - APIs using path parameters must use the `http` response type

- The following options are available for `method`: get, post, put, delete, patch
- The following options are available for `response`: http (default), json, text, or html

Learn more about API Gateway Configuration with the [Action APIs QuickStart](https://github.com/adobe/appbuilder-quickstarts/tree/master/action-apis)

#### Hooks to customize the tooling

Hooks can be used to customize `aio app` commands. Hooks are documented [here](https://github.com/AdobeDocs/project-firefly/blob/main/src/pages/guides/app-hooks.md).

### Extension specific configuration

#### Extension types

The `<extension-type>` indicates which product the extension is extending, currently we support the following product extensions:

1. `dx/excshell/1` to implement an Experience Cloud Shell single page application.
2. `dx/asset-compute/worker/1` to implement an AEM Asset Compute worker.

#### `dx/excshell/1` definition

The Experience Cloud Shell extension supports a `view` operation that points to the entry html file of the SPA.
In the following example the `impl` field points to an `index.html` file stored in the `web/` folder of the extension.

```yaml
extensions
  dx/excshell/1:
    operations:
      view:
        - type: web
          impl: index.html
     web-src: web/
```

#### `dx/asset-compute/worker/1` definition

The AEM Asset Compute worker extension supports a `workerProcess` operation that points to the backend Adobe I/O Runtime action implementing the worker logic.
In the following example the `impl` field points to the  `dx-asset-compute-worker-1/worker` action defined in the `runtimeManifest`.

```yaml
extensions
  dx/asset-compute/worker/1:
    operations:
      workerProcess:
        - type: action
          impl: dx-asset-compute-worker-1/myworker
    runtimeManifest:
      packages:
        dx-asset-compute-worker-1:
          actions:
            myworker:
              function: actions/worker/index.js
              web: 'yes'
              runtime: nodejs:18
```

### The `$include` directive

The `$include` directive allows to defer any part of the `app.config.yaml` to another file.
In the following example, the `dx/excshell/1` configuration is stored in another `./src/dx-excshell-1/ext.config.yaml` file.

```yaml
extensions:
  dx/excshell/1:
    $include: ./src/dx-excshell-1/ext.config.yaml
```

Configuration paths defined in `./src/dx-excshell-1/ext.config.yaml` must be relative to that file.

### Public distribution configuration

A subset of configuration options are specific to publicly distributable apps. See the [Public Distribution](../distribution/public.md) guide for more details.

```yaml
configSchema: 
  title: 'the title'
  description: 'the description'
  properties:
    - title: 'Slack Webhook'
      type: 'string'
      description: 'Please provide the webhook used by this application. Configure in slack.com'
      envKey: 'SLACK_WEBHOOK'

requiredProducts: 
  - code: AEP
    minVersion: 0.0.0
    maxVersion: 1.0.0
```

## `.env`

The `.env` file is used to store:

1. secrets to be injected into I/O Runtime Actions.
2. environment variables available to `hooks`.
3. auto generated secrets used by the `aio` CLI, prefixed by `AIO_`, those should not be edited.

```
# User secrets
ENABLE_DEV_DEBUG=true

# Auto-generated secrets
AIO_runtime_namespace=
AIO_runtime_auth=
AIO_runtime_apihost=
```

### Using environment variables in frontend

Environment variables set in .env can be accessed directly via `process.env`:

```jsx
<View showDevDebugOverlay={process.env.ENABLE_DEV_DEBUG}></View>
```
Any environment variables are replaced during build time by the [parcel bundler](https://parceljs.org/).

### Using environment variables in Runtime actions 

Environment variables set in .env need to be passed as inputs to an action and then are available via the action parameters.

#### app.config.yaml
```yaml
runtimeManifest:
   packages:
     myapp:
       actions:
         generic:
           function: src/myapp/actions/generic/index.js
           web: 'yes'
           runtime: nodejs:18
           inputs:
               ENABLE_DEV_DEBUG: $ENABLE_DEV_DEBUG
```

#### Action code
```javascript
async function main (params) {
  if (params.ENABLE_DEV_DEBUG) {
    console.debug("Enabling dev tools, extra usage data will be captured...")
  }
}

exports.main = main
```

Alternatively, environment variables defined in a .env file can be configured as inputs to a package, making them accessible to all actions within the package through their parameters. 
Keep in mind that package-level inputs can still be overridden at the action level.

#### app.config.yaml
```yaml
runtimeManifest:
   packages:
     myapp:
       inputs:
         ENABLE_DEV_DEBUG: $ENABLE_DEV_DEBUG
       actions:
         generic:
           function: src/myapp/actions/generic/index.js
           web: 'yes'
           runtime: nodejs:18
```

**Note:** You can specify package-level parameters directly via the command line without redeploying. 
Refer to `aio rt package bind --help` for more details.

## `.aio`

The `.aio` file is auto generated and contains Developer Console specific configuration.
This file is updated via the `aio app use` command and should not be edited manually.

## Legacy configuration system

Apps initialized using a `@adobe/aio-cli` CLI version prior to 8.x use a legacy configuration system that we still support in newer CLI versions.
Those apps do not support extensions, and only get deployed as standalone applications.

The legacy configuration system does not have an `app.config.yaml` and instead uses:

1. `.aio` to store common configuration bits, but hooks and Runtime Manifest, such as `actions` path.
2. `manifest.yaml` to stores the Runtime Manifest.
3. `package.json` to store hooks.
4. `.env` behaves the same.

## Migrating between Standalone Application and DX Experience Cloud SPA v1

- [Standalone Application to DX Experience Cloud SPA v1](migrations/standalone_to_dx_experience_cloud_spa.md) - Useful if you can't seem to view your application in the App Builder Catalog in Adobe Experience Cloud.
