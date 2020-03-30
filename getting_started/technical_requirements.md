# Technical Requirements

## Technical Prerequisites for Project Firefly

### Required

These prerequisites should be fulfilled on the developer's machine before using the [CLI](https://github.com/adobe/aio-cli):

- [NodeJS](https://nodejs.org/en/download/) (at least v10). It should also install npm together. We recommend using [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to manage NodeJS installation and versions on the developer's machine. 
- [Adobe I/O CLI](https://github.com/adobe/aio-cli)
    - ```npm install -g @adobe/aio-cli```

### Optional

The following set up is required if you intend to use the local development features provided by the [CLI](https://github.com/adobe/aio-cli): 

- [Visual Studio Code](https://code.visualstudio.com/download) (VS Code) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage (e.g. debugger) is not yet supported.
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) (at least Java 11)
- [Chrome debugger extension in VSCode](https://github.com/Microsoft/vscode-chrome-debug)
- [Docker Desktop](https://www.docker.com/get-started)

The following commands must be executed to install the required Docker images:

```
docker pull openwhisk/action-nodejs-v10:latest
docker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21
```

**Note:** Developers on Windows machines should make sure that they are using Linux containers for the images above.
The steps to switch to Linux containers are described in the [Docker for Windows documentation](https://docs.docker.com/docker-for-windows/).

## Supported local development environments

We aim to provide the similar quality of local development experience on both Windows 10 and macOS 10.14 and higher.
Our [CLI](https://github.com/adobe/aio-cli) and its plugins are automatically tested against NodeJS versions 10 and 12 on both Windows and [Linux Xenial](http://releases.ubuntu.com/16.04/).
