# App Builder Configuration Files

## Overview

An app has three configuration files, **defined in the root of the project folder**:

- `app.config.yaml` is the main configuration file, defining the application's behavior and implementation.
- `.env` is used to store secrets and environment variables available during build time.
- `.aio` is populated by the `aio` CLI to store the current Developer Console Workspace details.

Note: `.env` and `.aio` files **should not be committed to version control**.

## `app.config.yaml`

### Tl;dr: give me a full example:

```
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
```

### Standalone application and extensions

The `app.config.yaml` file can contain two top level fields: `application` and `extensions`.
Only one is required.

```
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

```
# <common-config>

runtimeManifest:
  <runtime-manifest>
hooks:
  <app-hooks>
actions: <path to action folder>
web-src: <path to web folder>
unitTest: <path to unit test folder>
e2eTest: <path to e2e test folder>
dist: <path to build folder>
htmlCacheDuration: <cache duration for UI html files, default: 60s>
jsCacheDuration: <cache duration for UI JS files, default: about a week>
cssCacheDuration: <cache duration for UI JS files, default: about a week>
imageCacheDuration: <cache duration for UI JS files, default: about a week>
tvmurl: <alternative tvm url used to upload the UI>
awsaccesskeyid: <upload UI to own s3, provide credentials>
awssecretaccesskey: <upload UI to own s3, provide credentials>
s3bucket: <upload UI to own s3, provide credentials>
hostname: <alternative hostname for the UI>
```

#### Runtime Manifest

The `runtimeManifest` field holds the backend configuration deployed into Adobe I/O Runtime.
The full spec can be found [here](https://github.com/apache/openwhisk-wskdeploy/tree/master/specification/html)
Here is an example to get started:

```
runtimeManifest
   packages:
     myapp:
       license: Apache-2.0
       actions:
         generic:
           # path relative to the configuration file
           function: src/myapp/actions/generic/index.js
           web: 'yes'
           annotations:
            require-adobe-auth: true
         target:
           function: src/myapp/actions/target/index.js
           web: 'yes'
           limits:
             timeout: 60
             memory: 512
```

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

```
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

```
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
```

### The `$include` directive

The `$include` directive allows to defer any part of the `app.config.yaml` to another file.
In the following example, the `dx/excshell/1` configuration is stored in another `./src/dx-excshell-1/ext.config.yaml` file.

```
extensions:
  dx/excshell/1:
    $include: ./src/dx-excshell-1/ext.config.yaml
```

Configuration paths defined in `./src/dx-excshell-1/ext.config.yaml` must be relative to that file.

## `.env`

The `.env` file is used to store:

1. secrets to be injected into I/O Runtime Actions.
2. environment variables available to `hooks`.
3. auto generated secrets used by the `aio` CLI, prefixed by `AIO_`, those should not be edited.

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

