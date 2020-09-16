# Common Troubleshooting

Here are troubleshooting guides for some of the most common issues as you develop your first Firefly apps.

## General debugging

When your action code doesn't work as expected, you may want to investigate into what exactly went wrong. Project Firefly provides the [Logging SDK](https://github.com/adobe/aio-lib-core-logging), please check out [Firefly's Application Logging](https://github.com/AdobeDocs/project-firefly/blob/master/guides/application_logging.md) for more details. 

To see the latest activations of your project, run this command:
```bash
aio runtime activation list
```
It lists the most recent activations and summary (ID, start / end time, duration, status, and so on). There are 4 most popular statuses of a finished activation:
* `success`: the action was successfully executed and you can obtain it's result with `aio runtime activation result activationID`
* `developer error`: the most likely reasons of this are compilation errors (missing variables, module not found) and action time-out (due to an internal issue within the action or time-out of a backend service the action connects to). You can get the activation details to see what exact error causing this by running the command `aio runtime activation get activationID`
* `application error`: this error is usually due to some issues at runtime, such as thrown exceptions, getting value of an `undefined` variable. With appropriate try-catch blocks and logging, you can see what goes wrong from the logs `aio runtime activation logs activationID`
* `internal error`: this could be an error caused by an external factor unrelated to the action itself, e.g. not enough resources to run the action. I/O Runtime is a scalable platform, so you would never see it with default action settings. If you do, please let us know by [email](mailto:iodev@adobe.com) so that we can help to troubleshoot what causes it.

You could also try [openwhisk-wskdebug](https://github.com/apache/openwhisk-wskdebug) which offers extensive capabilities to develop and debug the I/O Runtime actions of your Project Firefly applications.

## Action authentication errors

When Adobe authentication and authorization checks are enabled for an action with the `require-adobe-auth` annotation set to `true`, you may see the following errors when making requests to the action:

1. `request is invalid, failed authorization. Please use a valid user token for this SPA.`
2. `request is invalid, failed authorization. Please use a valid JWT or user access token for this headless application.`

An SPA is an application with web UI components (located in the `web-src/` folder). Headless app are back-end microservices without web UI. 
For authentication and authorization checks, the back-end actions of an SPA are validated against a valid user token which is passed directly from Adobe Experience Cloud (ExC) Shell. 

On the other hand, the actions of a headless app can be validated against a valid user token from ExC Shell or a valid access token generated with the [JWT (Service Account) Authentication](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWT.md). Please go through the [Firefly Security Overview](../guides/security_overview.md) for more details about SPA vs. headless app authentication. 

If you are developing a headless app but accidentally have the `web-src/` folder added during the app initialization process, you could remove it by executing the command `aio app delete web-assets` at the root of your application source code folder. This will also assure that your actions are validated against the appropriate JWT auth.
