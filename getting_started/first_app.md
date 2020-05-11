# Creating your First Firefly App

## Creating a new Project on Developer Console

Adobe Developer Console gives you access to APIs, SDKs and developer tools to build on, integrate, and extend Adobe products. You will set up your credentials using the Developer Console. Follow the instructions to set up your project:

1. Navigate to [Adobe Developer Console](https://console.adobe.io/).

1. Under `Quick Start`, click on the option to `Create project from template`.

1. Select `Project Firefly` from the list of templates. 

1. Enter `Project Title` and `App Name` for your templated project. Click `Save` when ready. 

1. You should see a new project generated with 2 default Workspace. Workspaces are where you’ll connect services and get the credential details needed to connect to Adobe APIs. Each Firefly project has two default workspaces: Production and Stage. You can add more workspaces as needed. When you’re ready to deploy your app, submit it for approval from the Production workspace.

1. Select a workspace, and you can start adding APIs and Events that you would need for your application. 


## Log in Developer Console from your CLI

Once you have your project set up in Developer Console, it is time to move onto your local environment. You can always go back to Developer Console to modify your project. 

1. On your machine, navigate to the Terminal and enter

    ```bash
    aio login
    ```
1. A browser window would prompt open, asking you to sign in with your Adobe ID. 

1. Once you've logged in, you can close the success window and go back to your Terminal. 

1. You would now be able to start building Project Firefly Apps with the Adobe I/O CLI.  

## Bootstrapping new App using the Adobe I/O CLI

1. Type in the following command in your Terminal:

    ```bash
    aio app init <app-name>
    ```

    You will be prompted with a few questions about how you want your app to have:
    
1. Select Organization, Project and Workspace that you'd like to use for this new Firefly App. Navigate through the list to find the project you just created. 


1. Select app features to enable:
    - **Actions: Deploy Runtime actions:** adding the boilerplate for backend serverless actions on I/O Runtime
    - **Web Assets: Deploy hosted static assets:** adding the boilerplate for frontend react app and static assets
    - **CI/CD: Include GitHub Actions based workflows for Build, Test and Deploy:** adding the boilerplate for Github Actions managing CI/CD process of the app

    You can select either of the options, or both to have a full app for both back and frontend.

1. Select one or more sample actions to be generated along with the new app:
    - **Adobe Target**: including dependencies and examples of accessing the Adobe Target API
    - **Adobe Analytics**: including dependencies and examples of accessing the Adobe Analytics API
    - **Adobe Campaign Standard**: including dependencies and examples of accessing the Adobe Campaign Standard (ACS) API
    - **Adobe Experience Platform: Realtime Customer Profile**: including dependencies and examples of accessing the Customer Profile API of Adobe Experience Platform
    - **Generic**: a generic application with hello world flow

1. Define the names of sample actions (by keeping the defaults or specifying other names). The new app is then generated, and npm dependencies are getting installed.

1. Open the project in VSCode, by entering the command `code <app-name>`, or opening VSCode -> Open... -> select app folder.

## Main Components of the App

- `actions`: backend source code for all serverless actions
- `web-src`: frontend source code such as html templates, react components, JS, CSS
- `test`: including unit tests and integration tests
- `e2e`: including end-to-end tests
- `manifest.yml`: definition of I/O Runtime actions being deployed with the app
- `package.json`: project definition and metadata
- `.env`: containing environment variables that are useful for the app, e.g. I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)
- `.aio`: containing config variables that are useful for the AIO CLI to facilitate the app, e.g. supported API services

## Local Development

### Running the Application

To run the application locally, use the following command:

```bash
aio app run
```

This will deploy the actions to Adobe I/O Runtime, while running the UI part on the local machine. The app is accessible on the browser at `https://localhost:9080` (by default, but the port is configurable). There is also an output of the second URL that allows accessing the app running on ExC Shell; but you still need to go to the localhost URL for the first time to approve the self-signed SSL certificate.

To have the application running completely locally, which means the actions run on a local deployment of (standalone) OpenWhisk, add the `--local` flag to the above run command.

### Debugging the Application

Make sure that local dev environment is running, either with or without `--local`.

An example debugging flow:
- Set a breakpoint in your code
- Go to debugger mode in VSCode
- Select `Web and actions` profile for debugging
- Click on Run, the debugger will stop at the breakpoint and you can inspect your app execution

If the local development is run without `--local` flag, you debug the actions running directly on Adobe I/O Runtime. When the `--local` flag is set, the actions are debugged in the standalone OpenWhisk instance running locally. More about this can be found on the [wskdebug docs](https://www.npmjs.com/package/@adobe/wskdebug).

### Retrieving Logs for the Application

To see logs of your app, use the command `aio app logs`. By default, only the logs of the latest activation is fetched. If you want to see a more extensive list of logs, use the `--limit` flag to define the number of recent activations to be fetched.

Read more at [Managing Application Logs](../guides/application_logging.md)

## Deploying the Application

Once the application is in a good shape, it could be deployed to a dev environment. This is achievable with a single command.

```bash
aio app deploy
```

This will invoke:
- The actions defined in `manifest.yml` being updated on Adobe I/O Runtime
- The frontend built files and assets being uploaded to our CDN.

The deployment also outputs 2 URLs of the app, which allow access either to the CDN host or Adobe Experience Cloud (ExC Shell). The URL format of the app on ExC Shell is `https://experience.adobe.com/#/@<your-org-id>/myapps/?localDevUrl=<your-app-url>`.

The app could also be "unpublished" later with `aio app undeploy`.
