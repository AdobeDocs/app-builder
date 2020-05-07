# Creating your First Firefly App

## Bootstrapping new App using the AIO CLI

In order to create your first application, use the following command:

```bash
aio app init <app-name>
```

You will be prompted with a few questions about how you want your app to have:

1. Select app features to enable:
- **Actions: Deploy Runtime actions:** adding the boilerplate for backend serverless actions on I/O Runtime
- **Web Assets: Deploy hosted static assets:** adding the boilerplate for frontend react app and static assets
- **CI/CD: Include GitHub Actions based workflows for Build, Test and Deploy:** adding the boilerplate for Github Actions managing CI/CD process of the app

You can select either of the options, or both to have a full app for both back and frontend.

2. Select one or more sample actions to be generated along with the new app:
- **Adobe Target**: including dependencies and examples of accessing the Adobe Target API
- **Adobe Analytics**: including dependencies and examples of accessing the Adobe Analytics API
- **Adobe Campaign Standard**: including dependencies and examples of accessing the Adobe Campaign Standard (ACS) API
- **Adobe Experience Platform: Realtime Customer Profile**: including dependencies and examples of accessing the Customer Profile API of Adobe Experience Platform
- **Generic**: a generic application with hello world flow

3. Define the names of sample actions (by keeping the defaults or specifying other names). The new app is then generated, and npm dependencies are getting installed.

4. Open the project in VSCode, by entering the command `code <app-name>`, or opening VSCode -> Open... -> select app folder.

5. Open `.env` file, add your I/O Runtime credentials in the `AIO_RUNTIME_XXX` variables, and uncomment them by removing the `#` before the variable names.

## Main components of the App

- `actions`: backend source code for all serverless actions
- `web-src`: frontend source code such as html templates, react components, JS, CSS
- `test`: including unit tests and integration tests
- `e2e`: including end-to-end tests
- `manifest.yml`: definition of I/O Runtime actions being deployed with the app
- `package.json`: project definition and metadata
- `.env`: containing environment variables that are useful for the app, e.g. I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)
- `.aio`: containing config variables that are useful for the AIO CLI to facilitate the app, e.g. supported API services

## Local development

### Running the application

To run the application locally, use the following command:

```bash
aio app run
```

This will deploy the actions to Adobe I/O Runtime, while running the UI part on the local machine. The app is accessible on the browser at `https://localhost:9080` (by default, but the port is configurable). There is also an output of the second URL that allows accessing the app running on ExC Shell; but you still need to go to the localhost URL for the first time to approve the self-signed SSL certificate.

To have the application running completely locally, which means the actions run on a local deployment of (standalone) OpenWhisk, add the `--local` flag to the above run command.

### Debugging the application

Make sure that local dev environment is running, either with or without `--local`.

An example debugging flow:
- Set a breakpoint in your code
- Go to debugger mode in VSCode
- Select `Web and actions` profile for debugging
- Click on Run, the debugger will stop at the breakpoint and you can inspect your app execution

If the local development is run without `--local` flag, you debug the actions running directly on Adobe I/O Runtime. When the `--local` flag is set, the actions are debugged in the standalone OpenWhisk instance running locally. More about this can be found on the [wskdebug docs](https://www.npmjs.com/package/@adobe/wskdebug).

### Getting logs

To see logs of your app, use the command `aio app logs`. By default, only the logs of the latest activation is fetched. If you want to see a more extensive list of logs, use the `--limit` flag to define the number of recent activations to be fetched.

## Publishing the application

Once the application is in a good shape, it could be deployed to a dev environment. This is achievable with a single command.

```bash
aio app deploy
```

This will invoke:
- The actions defined in `manifest.yml` being updated on Adobe I/O Runtime
- The frontend built files and assets being uploaded to our CDN.

The deployment also outputs 2 URLs of the app, which allow access either to the CDN host or Adobe Experience Cloud (ExC Shell). The URL format of the app on ExC Shell is `https://experience.adobe.com/#/@<your-org-id>/myapps/?localDevUrl=<your-app-url>`.

The app could also be "unpublished" later with `aio app undeploy`.
