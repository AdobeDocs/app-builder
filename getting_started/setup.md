# Setting up Your Environment

During Private Beta, please following the steps below to acquire access and credentials, and to set up your local environment to build your first Adobe Custom Applications.

## Acquire Access and Credentials

- Adobe Experience Cloud Organization
    - Adobe Experience Cloud Org is required if you would like to use APIs from Adobe, to access Developer Console, to set up Adobe Custom Applications project, to publish custom applications, and to access published custom applications. 
    - You should have access to one as an enterprise customer or partner. If you do not have access to an organization -- for customers, please contact your account manager for access. For partners, please contact your partner manager or request sandbox access via [Adobe Solution Partner Portal](https://solutionpartners.adobe.com/home.html).
- Adobe I/O Runtime Namespace
    - Adobe I/O Runtime is the serverless environment where your code would be deployed to. The credential is also used to get access to out-of-the-box File & State Store and CDN. 
    - If you do not already have one, please [request trial access](https://github.com/AdobeDocs/adobeio-runtime/blob/master/overview/request_a_trial.md).  
- [GitHub](https://github.com/) Account
    - GitHub account is required for access to React Spectrum.  
    
## Local Environment Set Up 

### Required
- [NodeJS](https://nodejs.org/en/download/) (at least v10). It should also install npm together. We recommend using [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to manage NodeJS installation and versions on your machine.
- [Adobe I/O CLI](https://github.com/adobe/aio-cli)
    - ```npm install -g @adobe/aio-cli```

### Optional
The following set up is required if you intend to use the Debugger. 
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/download) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage e.g. debugger is not yet supported.
- [Docker Desktop](https://www.docker.com/get-started).
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) (at least Java 11).
- [Chrome debugger extension in VSCode](https://github.com/Microsoft/vscode-chrome-debug)

## Where to Go Next

Now that you have your environment set up, you can start building your own custom application:
* [Creating your First Jaeger App](https://github.com/adobe/aio-cli#bootstrapping-an-application)
