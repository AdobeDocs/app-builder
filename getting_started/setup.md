# Setting up Your Environment

During Developer Preview, please follow the steps below to acquire access and credentials, and to set up your local environment to build your first Project Firefly.

## Acquire Access and Credentials

Please first follow instructions in [How to Get Access to Project Firefly](../overview/getting_access.md) to join the Developer Preview program. 

Once you have been added to the program, you will need the following information for kicking off your development work. 

- An Adobe Experience Cloud Organization (required)
    - An Adobe Experience Cloud Org is required if you would like to use APIs from Adobe, access Developer Console, set up a Firefly project, publish custom applications, and/or access published custom applications.
    - As an enterprise customer or partner, you should have access to an Adobe Experience Cloud Org. If you do not have access to an organization:
        - Customers: Please contact your account manager for access.
        - Partners: Please contact your partner manager or request sandbox access via [Adobe Solution Partner Portal](https://solutionpartners.adobe.com/home.html).
- Access to Adobe Developer Console (required)
    -  Adobe Developer Console gives you access to APIs, SDKs and developer tools to build on, integrate, and extend Adobe products. You will set up your credentials using the Developer Console. 
    - You must have developer role or system admin role for an Adobe Experience Cloud organization to access Adobe Developer Console.
- A GitHub Account (optional)
    - A [GitHub](https://github.com/) account is optional for setting up your CI/CD workflow. 

## Local Environment Set Up

### Required tools

These prerequisites should be fulfilled on the developer's machine:

- [NodeJS](https://nodejs.org/en/download/) (at least v10). It should also install npm together. We recommend using [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to manage NodeJS installation and versions on the developer's machine. 
- [Adobe I/O CLI](https://github.com/adobe/aio-cli)
    - `npm install -g @adobe/aio-cli`
    - If you already have Adobe I/O CLI on your local, please ensure you have the latest version of Adobe I/O CLI installed. (Current version: [![Version](https://img.shields.io/npm/v/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli))
        - You can check the version through `aio -v`. If you have a version later than `@adobe/aio-cli@3.2.0`, the CLI supports a built-in `update` command. You can simply run `aio update` to update your Adobe I/O CLI and all core plugins. If you have an earlier version, you can update your CLI by running `npm install -g @adobe/aio-cli`. 
    
#### Supported Local Environment
We aim to provide the similar quality of local development experience on both Windows 10 and macOS 10.14 and higher.
Our [CLI](https://github.com/adobe/aio-cli) and its plugins are automatically tested against NodeJS versions 10 and 12 on both Windows and [Linux Xenial](http://releases.ubuntu.com/16.04/).

### Optional tools

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


## Next Step

Now that you have your environment set up, you can start [creating your own Project Firefly application](first_app.md).
