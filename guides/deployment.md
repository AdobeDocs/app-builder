# Deployment

The [CLI](https://github.com/adobe/aio-cli) provides out-of-the-box features for developers to manage the lifecycle of their  applications.

This documentation focuses on the application deployment step of this lifecycle.

# Setup Assumptions

In the following chapters of this documentation, it will be assumed that:

- The Custom Adobe Application has been bootstrapped from a [generator](https://github.com/adobe/generator-aio-app/) using the [CLI](https://github.com/adobe/aio-cli)
- There is a **.env** file at the root of the application folder, which contains the following keys and their values:

  - **AIO_RUNTIME_AUTH**, which holds the credentials for the Runtime namespace to use
  - **AIO_RUNTIME_NAMESPACE**, which holds the name of the Runtime namespace to use
  
If you do not own a [Runtime](https://github.com/AdobeDocs/adobeio-runtime) namespace, please [request trial access]().

# Deployment Scenarios

The [CLI](https://github.com/adobe/aio-cli) offers three types of deployment to the developers.

## Local Deployment

Local deployment capabilities are offered to developers who want to test and debug their application before this one gets deployed to the out-of-the-box Content Delivery Network.

### Local Runtime actions and UI

#### Technical Prerequisites

For this scenario, the following prerequisites should be installed on the developer's machine:

- [NodeJS](https://nodejs.org/en/download/) (at least v10). It should also install npm together. We recommend using [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to manage NodeJS installation and versions on the developer's machine. 
- [Docker Desktop](https://www.docker.com/get-started)
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) (at least Java 11).

The following commands must be executed to install the required Docker images:

```
docker pull openwhisk/action-nodejs-v10:latest
docker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21
```

**Note:** Developers on Windows machines should make sure that they are using Linux containers for the images above.
The steps to switch to Linux containers are described in the [Docker for Windows documentation](https://docs.docker.com/docker-for-windows/).

### Remote Runtime actions and local UI

## Full Deployment

### Focus on the token-vending machine

### Out-of-the-box Content Delivery Network
