---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Common Troubleshooting

Here are troubleshooting guides for some of the most common issues as you develop your first App Builder apps.

## Before you proceed

- Check your Node version and tool versions to ensure they are supported by App Builder and up-to-date. You can find the latest supported version [here](index.md).
- Check if your application is on Dropbox or OneDrive as file watchers sometimes cause unexpected errors. 

## General debugging

When your action code doesn't work as expected, you may want to investigate into what exactly went wrong. App Builder provides the [Logging SDK](https://github.com/adobe/aio-lib-core-logging), please check out [App Builder's Application Logging](../guides/application_logging.md) for more details. 

To see the latest activations of your project, run this command:
```bash
aio runtime activation list
```
It lists the most recent activations and summary (ID, start / end time, duration, status, and so on). There are 4 most popular statuses of a finished activation:
* `success`: the action was successfully executed and you can obtain it's result with `aio runtime activation result activationID`
* `developer error`: the most likely reasons of this are compilation errors (missing variables, module not found) and action time-out (due to an internal issue within the action or time-out of a backend service the action connects to). You can get the activation details to see what exact error causing this by running the command `aio runtime activation get activationID`
* `application error`: this error is usually due to some issues at runtime, such as thrown exceptions, getting value of an `undefined` variable. With appropriate try-catch blocks and logging, you can see what goes wrong from the logs `aio runtime activation logs activationID`
* `internal error`: this could be an error caused by an external factor unrelated to the action itself, e.g. not enough resources to run the action. I/O Runtime is a scalable platform, so you would never see it with default action settings. If you do, please let us know by [email](mailto:iodev@adobe.com) so that we can help to troubleshoot what causes it.

You could also try [openwhisk-wskdebug](https://github.com/apache/openwhisk-wskdebug) which offers extensive capabilities to develop and debug the I/O Runtime actions of your App Builder applications.

## Action logs

When you have [web actions](/apis/experienceplatform/runtime/docs#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#invoking-web-actions) in your app, they are blocking requests and their activation results are not recorded if they are invoked successfully. To enforce the persistence of activation results, you need to pass the `x-ow-extra-logging: on` flag in the request headers. In the development mode of an SPA, you can add this flag directly to the "invoking action" function so that you will have the activation results and logs recorded for all requests. Then they could be retrieved as demonstrated in the [General debugging](#general-debugging) section above.

```javascript
headers['x-ow-extra-logging'] = 'on'
```

## Action authentication errors

When Adobe authentication and authorization checks are enabled for an action with the `require-adobe-auth` annotation set to `true`, you may see the following errors when making requests to the action:

1. `request is invalid, failed authorization. Please use a valid user token for this SPA.`
2. `request is invalid, failed authorization. Please use a valid JWT or user access token for this headless application.`

An SPA is an application with web UI components (located in the `web-src/` folder). Headless app are back-end microservices without web UI. 
For authentication and authorization checks, the back-end actions of an SPA are validated against a valid user token which is passed directly from Adobe Experience Cloud (ExC) Shell. 

On the other hand, the actions of a headless app can be validated against a valid user token from ExC Shell or a valid access token generated with the [JWT (Service Account) Authentication](/authentication/auth-methods#!AdobeDocs/adobeio-auth/master/JWT/JWT.md). Please go through the [App Builder Security Overview](../guides/security/index.md) for more details about SPA vs. headless app authentication. 

If you are developing a headless app but accidentally have the `web-src/` folder added during the app initialization process, you could remove it by executing the command `aio app delete web-assets` at the root of your application source code folder. This will also assure that your actions are validated against the appropriate JWT auth.

## Debugging errors with State and Files SDK

If your code uses App Builder [State](https://github.com/adobe/aio-lib-state) or [Files](https://github.com/adobe/aio-lib-files) SDKs, you cannot use [wskdebug](https://github.com/apache/openwhisk-wskdebug) to debug it. The reason is that `wskdebug` forwards the debugged action from the I/O Runtime system to a local container on your machine and executes it there. This local container is not authorized to access the out-of-the-box cloud storage behind State and Files SDKs, as this would be the case with an action deployed to I/O Runtime.

*Note: This is not a problem if you configure the State or Files SDKs to connect to your own cloud storage (e.g. Cosmos DB).*

## NodeJS with Mac M1 chip

There are no pre-compiled NodeJS binaries for versions prior to 15.x for Apple's new M1 chip (arm64 architecture).
One solution is to change the architecture of your shell from arm64 to x86.

We recommend using the [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) over [Homebrew](https://brew.sh/) and follow their [troubleshooting guides for macOS](https://github.com/nvm-sh/nvm#macos-troubleshooting) (section **Macs with M1 chip**). 