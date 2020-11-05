# Deployment Overview

The [CLI](https://github.com/adobe/aio-cli) provides out-of-the-box features for developers to manage the lifecycle of their  Project Firefly Applications.

This documentation focuses on the application deployment step of this lifecycle.

# Setup Assumptions

In the following chapters of this documentation, it will be assumed that:

- The Custom Adobe Application has been bootstrapped from a [generator](https://github.com/adobe/generator-aio-app/) using the [CLI](https://github.com/adobe/aio-cli)
- There is a **.env** file at the root of the application folder, which contains the following keys and their values:

  - **AIO_RUNTIME_AUTH**, which holds the credentials for the Runtime namespace to use
  - **AIO_RUNTIME_NAMESPACE**, which holds the name of the Runtime namespace to use
  
If you do not own a [Runtime](https://github.com/AdobeDocs/adobeio-runtime) namespace, please [request trial access]().

The [Setup Requirements](../getting_started/setup.md) documentation should also be checked before trying out the deployment scenarios described below.

# Deployment Scenarios

The [CLI](https://github.com/adobe/aio-cli) offers three types of deployment to the developers.

## Local Deployment

Local deployment capabilities are offered to developers who want to test and debug their application before this one gets deployed to the out-of-the-box Content Delivery Network.

### Local Runtime actions and UI

#### Use-Case

This local deployment feature is useful for developers who want to easily get an initial preview of their Custom Application before deploying it to [Runtime](https://github.com/AdobeDocs/adobeio-runtime) and to the out-of-the-box Content Delivery Network. They will also benefit from local [Runtime](https://github.com/AdobeDocs/adobeio-runtime) actions and UI debugging capabilities. 

It also helps developers who want to work on their Custom Application implementation without an appropriate Internet connection. Of course, in that case you are not able to interact with [Adobe APIs](https://www.adobe.io/apis.html) or with remote 3rd party systems.

The tradeoff is that developers will not be able to run code that uses [Files](https://github.com/adobe/aio-lib-files) or [State](https://github.com/adobe/aio-lib-state) SDKs, [cron jobs scheduler with Alarms package](https://adobeio-codelabs-alarms-adobedocs.project-helix.page/), as well as expose web actions as webhooks for [I/O Events](https://www.adobe.io/apis/experienceplatform/events.html) or external events providers. These are only available if the actions are deployed to [Runtime](https://github.com/AdobeDocs/adobeio-runtime).

This deployment scenario doesn't require any specific credentials, as both [Runtime](https://github.com/AdobeDocs/adobeio-runtime) actions and application UI are hosted on the developer's machine.

#### CLI Command

This deployment is triggered when running `aio app run --local` at the root of the Custom Application source code directory.

#### Architecture

![Local Runtime Actions and UI](../images/local-actions-local-ui.png)

In this scenario, the [CLI](https://github.com/adobe/aio-cli) will download a [standalone instance](https://github.com/apache/openwhisk/tree/master/core/standalone) of [Apache OpenWhisk](https://openwhisk.apache.org/), which is the open source serverless platform behind [Runtime](https://github.com/AdobeDocs/adobeio-runtime), on the developer's machine.

The [Runtime](https://github.com/AdobeDocs/adobeio-runtime) actions of the application will be deployed to this local [Apache OpenWhisk](https://openwhisk.apache.org/) instance, and executed in NodeJS docker containers spinned up locally from the Docker images that are documented in the **Technical Prerequisites** section above.

The local [Apache OpenWhisk](https://openwhisk.apache.org/) instance runs on port 3233 by default, and the deployed actions will be accessible at:

```
http://localhost:3233/api/v1/web/guest/<appname-appversion>/<action-name>
```

**appname** and **appversion** are both application name and version, which are maintained in the package.json file at the root of the Custom Application source code folder.

**action-name** is the name of the action, which has been chosen by the developer when bootstrapping the application from the generator that was executed with `aio app init <appname>`.

In case of a headful Custom Application, the UI will be served locally from [ParcelJS](https://parceljs.org/cli.html), which is the underlying framework used by the [CLI](https://github.com/adobe/aio-cli) to build the front-end source code.

### Remote Runtime actions and local UI

#### Technical Prerequisites

This deployment scenario requires [Runtime](https://github.com/AdobeDocs/adobeio-runtime) credentials in a .env file at the root of the Custom Application source code folder, as documented in the **Setup Assumptions** above.

#### Use-Case

This feature is useful for developers who want to test and debug locally their Custom Application in a live environment fully integrated to Adobe's ecosystem, with minimal deployment time and efforts. 

#### CLI Command

This deployment is triggered when running `aio app run` at the root of the Custom Application source code directory.

#### Architecture

![Remote Runtime Actions and local UI](../images/remote-actions-local-ui.png)

The UI is still served locally from [ParcelJS](https://parceljs.org/cli.html), which allows hot updates of the front-end code. It communicates with [Runtime](https://github.com/AdobeDocs/adobeio-runtime) actions deployed to the developer's Runtime namespace.

## Full Deployment

#### Technical Prerequisites

This deployment scenario requires [Runtime](https://github.com/AdobeDocs/adobeio-runtime) credentials in a .env file at the root of the Custom Application source code folder, as documented in the **Setup Assumptions** above.

#### Use-Case

This feature is useful for developers who want to test and preview their Custom Application fully integrated to Adobe's ecosystem, in conditions that are similar to a production deployment. 

#### CLI Command

This deployment is triggered when running `aio app deploy` at the root of the Custom Application source code directory.

#### Architecture

![Remote Runtime Actions and UI](../images/remote-actions-remote-ui.png)

The UI is deployed to the out-of-the-box content Content Delivery Network on behalf of the developer's Runtime credentials. It communicates with [Runtime](https://github.com/AdobeDocs/adobeio-runtime) actions deployed to the developer's Runtime namespace.

The out-of-the-box [Token-Vending Machine](https://github.com/adobe/aio-tvm) is implicitely used by the CLI `aio app deploy` command, and validates the developer's Runtime credentials against [Runtime](https://github.com/AdobeDocs/adobeio-runtime).

If the credentials are valid, the Token-Vending Machine provides an access token to the CLI, which will authorize the CLI to deploy the static files of the Custom Application to the Content Delivery Network.

The deployed Custom Application will then be available at `https://<namespace>.adobeio-static.net/<appname>-<appversion>/index.html`, where **namespace** is the developer's namespace, **appname** and **appversion** are respectively the Custom Application name and version, which are maintained in the package.json file at the root of the Custom Application source code folder.
