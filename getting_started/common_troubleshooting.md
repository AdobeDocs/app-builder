# Common Troubleshooting

Here are troubleshooting guides for some of the most common issues as you develop your first Firefly apps.

## Action authentication errors

When Adobe IMS auth is enabled for an action, you may see the following errors when making requests to the action.
1. `request is invalid, failed authorization. Please use a valid user token for this SPA.`
2. `request is invalid, failed authorization. Please use a valid JWT or user access token for this headless application.`

SPA is an app with UI components (located in the `web-src/` folder). Headless app does not have UI components. For authentication, actions in an SPA are validated against a valid user token which is passed directly from Adobe Experience Cloud (ExC) Shell. On the other hand, actions in a headless app can be validated against a valid user token from ExC Shell or a valid access token generated with the [JWT (Service Account) Authentication](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWT.md). Please go through the [Firefly Security Overview](../guides/security_overview.md) for more details about SPA vs. headless app authentication. 

If you are developing a headless app but accidentally have the `web-src/` folder added during the app initialization process, you could remove it by executing the command `aio app delete web-assets`. It will assure that your actions are validated against the appropriate JWT auth.