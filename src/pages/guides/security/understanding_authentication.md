# Understanding Authentication

If you plan to work with Adobe APIs in your custom application, please follow this chapter to understand Adobe Authentication and the libraries that you can leverage. 

Adobe services like Creative SDK, Photoshop, Adobe Analytics, etc. use the OAuth 2.0 protocol for authentication and authorization. Using Adobe OAuth 2.0, you can generate an access token which is used to make API calls from your web server or browser-based apps. You can learn more about it at [OAuth 2.0 Authentication and Authorization](/authentication/auth-methods#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md).

API services tied to entitled Adobe products (e.g. Campaign, Target, etc.) require a JSON Web Token (JWT) in order to retrieve access tokens for usage against authenticated endpoints. [This document](/authentication/auth-methods#!AdobeDocs/adobeio-auth/master/JWT/JWT.md) serves as a quickstart guide for first-time users.

Certain products, like Adobe Analytics 2.0, allow both types of integrations. You can choose to use an OAuth client if you are creating an application that requires an end user to authenticate before calling the Adobe Analytics APIs; JWT client if creating an application that needs to programmatically authenticate calls to the Adobe Analytics APIs.

To simplify your interaction with Adobe authentication, we have created a library.

You can configure it and try it out directly at 
- [Adobe I/O IMS SDK Library](https://github.com/adobe/aio-lib-ims)

