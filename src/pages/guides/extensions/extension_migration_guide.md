---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Extension Migration Guide

As of July 28, 2021, we have officially released support for [Extensions](introduction_to_extensions.md) in Project Firefly. This release allows you to extend Adobe Experience Cloud through Firefly applications in a more native and integrated fashion. 

While all existing application built prior to July 28,2021 should continue to work as expected without any further action. In the next 90 days (until Oct 28, 2021), please update your Adobe I/O CLI and migrate your application as we’ll be retiring the previous services. Follow this guide to migrate your application in a few simple steps.

## Understanding Configuration Changes
With the introduction of [Extensions](introduction_to_extensions.md), we have made a few changes to Firefly project file structures and to how we compile configurations. Before you get started on the migration, please read through the changes so that you can make an informed decision for how to refactor your project during the migration.

### Old File Structure
Previously, if you initialize a new Firefly Project in the CLI, you will see the following folders and files in your project: 

1. `actions`: this folder is intended for backend source code for all serverless actions
1. `web-src`: this folder is intended for frontend source code such as html templates, react components, JS, CSS
1. `test`: this folder is intended for back-end action unit tests and integration tests
1. `e2e`: this folder is intended for  end-to-end tests
1. `manifest.yml`: this file describes the backend actions you would like to deploy or to redeploy. 
    - The manifest file contents shoud adhere to the [OpenWhisk deployment YAML specification](https://github.com/apache/openwhisk-wskdeploy/tree/master/specification#package-specification). Once defined, the [CLI](https://github.com/adobe/aio-cli) use this file to deploy or redeploy actions. You might see values like `$CUSTOMER_PROFILE_TENANT` listed on this page. These are environment variables that you can define in your `.env` file. 
1. `package.json`: this file describes project definition and various metadata relevant to the project. 
    - It is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. Learn more [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/).
1. `.aio`: this file contains config variables that are useful for the [CLI](https://github.com/adobe/aio-cli) to facilitate the app, e.g. supported API services. **This file can be committed to a source code versioning system.**
    - You can manually update the file or use the `aio config` commands to add or to remove configurations. Learn more about the [Config Plugin](https://github.com/adobe/aio-cli-plugin-config). 
1. `.env`: this file contains environment variables that are useful for the app during development, e.g. Adobe I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)
    - The environment variables defined here can be used in the application (e.g. in `manifest.yml`). If you've set up credentials for the selected workspaces, you should be able to see some of those values prepopulated upon initialization, like `AIO_runtime_auth` and `AIO_runtime_namespace`. 
    - This file is automatically included in `.gitignore`. **It is not intented be shared given the credentials and secrets listed.**
1. `console.json`: this file contains the credentials set up through your Project Firefly project. 
    - This file is also automatically included in `.gitignore`. **It is not intented be shared given the credentials and secrets listed.** 
    - This file can be downloaded directly from the [Adobe Developer Console](/console) as well. You can retrieve it by going to a workspace, and clicking on the `Download all` button. 

### New File Structure
With the introduction of extensions, your new file structure would look something like this --
1. `src`: Instead of one folder for all `actions` and all `web-src`, you will see individual folders under `src` for each Extension point you have selected. For instance, a `dx-excshell-1` folder for your Experience Cloud SPA actions and frontend resources. 
    - Under each folder, you should be able to see both the actions and the frontend code when application. In addition, you should be able to see `ext.config.yaml`. This file contains all the action and extension configuration for the extension point where it's located. This individual configuration allows for more flexibility in defining and managing individual extension points. You can see that this file is also imported to `app.config.yaml` as that's the master config file. 
    - The action definition in this file shoud adhere to the [OpenWhisk deployment YAML specification](https://github.com/apache/openwhisk-wskdeploy/tree/master/specification#package-specification).
    - Once defined, the [CLI](https://github.com/adobe/aio-cli) use this file to deploy or redeploy actions. You might see values like `$CUSTOMER_PROFILE_TENANT` listed under environments in this file. These are environment variables that you can define in your `.env` file. 
1. `app.config.yaml`: this is the master configuration file. It follows the same principle as the individual `ext.config.yaml`, and compiles these individual file into one comprehensive config upon application build. 
1. `lib`: this folder will contain all the shared utility actions across different extension points. 
1. `package.json`: this file describes project definition and various metadata relevant to the project. 
    - It is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. Learn more [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/).
1. `.aio`: this file contains config variables that are useful for the [CLI](https://github.com/adobe/aio-cli) to facilitate the app, e.g. supported API services. **This file can be committed to a source code versioning system.**
    - You can manually update the file or use the `aio config` commands to add or to remove configurations. Learn more about the [Config Plugin](https://github.com/adobe/aio-cli-plugin-config). 
1. `.env`: this file contains environment variables that are useful for the app during development, e.g. Adobe I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)
    - The environment variables defined here can be used in the application (e.g. in `ext.config.yaml` or `app.config.yaml`). If you've set up credentials for the selected workspaces, you should be able to see some of those values prepopulated upon initialization, like `AIO_runtime_auth` and `AIO_runtime_namespace`. 
    - This file is automatically included in `.gitignore`. **It is not intented be shared given the credentials and secrets listed.**

## Step-by-step Migration Instruction 
Please follow the steps below for a detailed instruction for how to migrate your application! 

### 0. Understanding the Difference
Let's start with the why you need to migrate your application. What happens if you migrate your application:
1. You will be able to take advantage of Extensions and the flexibility of our new configuration set up!
1. Your application will be using our new validator -- providing more granular access control to ensure the security of your application. Read more about this in our [Security Guide]().

What happens if you don't migrate:
1. During this release, we have automatically indexed your application in the backend. If you update your application (and it is an SPA in Experience Cloud or an AEM Asset Microservices Custom Processing Profile) using the old CLI (up to 7.1.0), you should see no change until the end of October when we retire some services. 
1. If you update the CLI before the end of October, but didnot refactor your code following the guide below, you may no longer be able to see your application in Experience Cloud UI and will need to refactor your code. 
1. Long story short -- don't upgrade the CLI until you are ready to refactor your project, and do refactor your project within the next three months. 

With this context, let's dive in. 

### 1. Update Tooling
First of all, please make sure your local tooling and environment set up is up to date. You can find the latest supported environment and tooling info in [here](https://www.adobe.io/project-firefly/docs/getting_started/). 

### 2. Update Configuration
Your existing application could be one of three types: 
1. an application not extending any Extension Points (for instance, your application is a standalone Headless application **OR** a standalone Single Page Application that does not integrate with Experience Cloud UI)
1. an application extending **one** Extension Points (for instance, your application is a Single Page Application accessed through Experience Cloud UI **OR** a Custom Processing Profile for AEM Asset Microserves)
1. an application extending **two or more** Extension Points (for instance, your application is a Custom Processing Profile for AEM Asset Microserves **AND** contains a Single Page Application accessible through Experience Cloud UI).

Learn more about Extension Points in [Introduction to Extensions](introduction_to_extensions.md). Based on the nature of your existing project, please following the corresponding the section below. 

#### 2.1 Application not extending any Extension Points

Congratulations! Technically you won't NEED to do any refactoring. Our CLI will continue to support the old configuration system. 

That being said, if you do plan to integrate with Extension Points in the future or simply want to make sure your project is up-to-date, we highly recommend that you follow the instruction in the next section to refactor your codebase. 

Please note that if you have a headless application and you have the `require-adobe-auth` set to `true`, refactoring your codebase and redeploying your application with the new CLI will switch you to our new validator, which means we'll validate the token passed in belongs to the same IMS organization, and contains product profile required for your application. For instance, if your application uses Adobe Analytics API, the token you pass in must also have access to Adobe Analytics.

##### Instructions:

1. Create `app.config.yaml` file in the root directory of your project.
1. Move the content of the `manifest.yml` to `app.config.yaml`, then delete `manifest.yml` file
1. Move any application hooks you have set up under `scripts` in `package.json` into `applications.hooks` in `app.config.yaml` configuration file.
1. Move any configuration found under the `.app` section of the `.aio` configuration file into the `applications` section of the new `app.config.yaml` configuration file.

##### Sample `app.config.yaml` File after the refactoring:

```
# standalone application
application:
  hostname: 'customhost'
  runtimeManifest:
    packages:
      application-pkg:
        license: Apache-2.0
        actions:
          count-apples:
            function: actions/count-apples/index.js
            web: 'yes'
            annotations:
              require-adobe-auth: true
  env:
    SOME_ENV: dev
  hooks:
    post-app-build: 'echo hook'
```

#### 2.2 Application Extending one Extension Point

Follow this section if your application is a Single Page Application accessed through Experience Cloud UI OR a Custom Processing Profile for AEM Asset Microserves.

##### Instructions:

1. Create `app.config.yaml` file in the root directory of your project.
1. Create a definition for the extension in your `app.config.yaml`. If you have a Single Page Application in Experience Cloud UI, use `dx/exchshell/1:` with `operations` set to `view`. If you have a AEM Asset Microservices Custom Profile, use `dx/sset-compute/worker/1:` with `operations` set to `workerProcess`. (See sample configurations below)
1. Move the content of the `manifest.yml` under the extensions in `app.config.yaml`, then delete `manifest.yml` file
1. Move any application hooks you have set up under `scripts` in `package.json` into `extensions.<extensionname>.hooks` in `app.config.yaml`
1. move any configuration under `.app` in `.aio` into `extensions.<extensionname>` in `app.config.yaml`.

##### Sample `app.config.yaml` File after the refactoring:

**SPA in Experience Cloud UI**
```
extensions:
  dx/excshell/1:
    operations:
      view:
        - type: web
          impl: index.html
    runtimeManifest:
      packages:
        <newpackagename>:
          license: Apache-2.0
          actions:
            todolist:
              function: actions/todolist/index.js
              web: 'yes'
              runtime: 'nodejs:14'
              inputs:
                LOG_LEVEL: debug
              annotations:
              require-adobe-auth: true
              final: true
  env:
    SOME_ENV: dev
  hooks:
    post-app-build: 'echo hook'
```

**AEM Asset Microservices**
```
extensions:
  dx/asset-compute/worker/1:
    operations:
      workerProcess:
        - type: web
          impl: worker
    runtimeManifest:
      packages:
        <newpackagename>:
          license: Apache-2.0
          actions:
            worker:
              function: actions/worker/index.js
              web: 'yes'
              runtime: 'nodejs:14'
              inputs:
                LOG_LEVEL: debug
              annotations:
              require-adobe-auth: true
              final: true
  env:
    SOME_ENV: dev
  hooks:
    post-app-build: 'echo hook'
```

#### 2.3 Application Extending two or more Extension Points

Follow this section your application is a Custom Processing Profile for AEM Asset Microserves AND contains a Single Page Application accessible through Experience Cloud UI. 

Please note that there are multiple ways to structure your configuration. You can refactor your code into folders for each extension, and create extension specific configuration, then import them into your main `app.config.yaml` using `$include: path/to/myfile.yaml`, you can also manage them all in one file in the root directory `app.config.yaml`. You could try to initialize a new project with multiple extension points through `aio app init` to see how we structure the code and config file my default. Below, we are showing the easist way to refactor by merging all config into `app.config.yaml`, but you are more than welcome to explore and to try different methods. 

##### Instructions:

1. Create `app.config.yaml` file in the root directory of your project.
1. Create the definitions for the extensions in your `app.config.yaml`. For the Single Page Application in Experience Cloud UI, use `dx/exchshell/1:` with `operations` set to `view`. For the AEM Asset Microservices Custom Profile, use `dx/sset-compute/worker/1:` with `operations` set to `workerProcess`. (See sample configurations below)
1. Move the content of the `manifest.yml` under the extensions in `app.config.yaml`, then delete `manifest.yml` file
1. Move any application hooks you have set up under `scripts` in `package.json` into `extensions.<extensionname>.hooks` in `app.config.yaml`
1. move any configuration under `.app` in `.aio` into `extensions.<extensionname>` in `app.config.yaml`.

##### Sample `app.config.yaml` File after the refactoring:

**Firefly Project Extending Multiple Extension Points**
```
extensions:
  dx/excshell/1:
    operations:
      view:
        - type: web
          impl: index.html
    runtimeManifest:
      packages:
        <newpackagename>:
          license: Apache-2.0
          actions:
            todolist:
              function: actions/todolist/index.js
              web: 'yes'
              runtime: 'nodejs:14'
              inputs:
                LOG_LEVEL: debug
              annotations:
              require-adobe-auth: true
              final: true
  dx/asset-compute/worker/1:
    operations:
      workerProcess:
        - type: web
          impl: worker
    runtimeManifest:
      packages:
        <newpackagename>:
          license: Apache-2.0
          actions:
            worker:
              function: actions/worker/index.js
              web: 'yes'
              runtime: 'nodejs:14'
              inputs:
                LOG_LEVEL: debug
              annotations:
              require-adobe-auth: true
              final: true
  env:
    SOME_ENV: dev
  hooks:
    post-app-build: 'echo hook'
```

### 3. Testing
Once you've completed your refactoring, simply try `aio app run` or `aio app deploy`, and everything should work as usual. 

Should you run into any issues, please contact us through the [Experience League Forum](https://experienceleaguecommunities.adobe.com/t5/project-firefly/ct-p/project-firefly) and we'll support you as soon as possible.

## Adding or removing Endpoints from Existing Projects

Similar to actions, you can choose to directly edit your extension configuration by modifying your code. Alternatively, we provide a few simple commands:
- `aio app add ext` for adding a new Extension Point to your application. 
- `aio app delete ext` for deleting an existing Extension Point project and configuration. 
