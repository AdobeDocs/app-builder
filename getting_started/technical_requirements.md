# Technical Requirements

## Technical Prerequisites for Adobe Custom Applications

These prerequisites should be fulfiled on the developer's machine before using the [CLI](https://github.com/adobe/aio-cli):

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

## Supported local development environments

We aim to provide the similar quality of local development experience on both Windows 10 and macOS 10.14 and higher.
Our [CLI](https://github.com/adobe/aio-cli) and its plugins are automatically tested against NodeJS versions 10 and 12 on both Windows and Linux Xenial.
