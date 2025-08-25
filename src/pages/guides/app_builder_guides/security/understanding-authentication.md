---
title: Understanding Authentication
description: Overview of Adobe authentication methods, including OAuth 2.0 and JWT, and available SDKs for developer integration with Adobe APIs.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
faqs:
- question: What authentication protocols does Adobe use for its APIs?
  answer: Adobe uses OAuth 2.0 and JWT protocols for authenticating and authorizing API access in its services.
- question: When should I use JWT versus OAuth 2.0 for Adobe API integration?
  answer: Use JWT for server-to-server programmatic authentication and OAuth 2.0 when an end-user must authenticate before API calls.
- question: How can the Adobe I/O IMS SDK Library help developers?
  answer: The Adobe I/O IMS SDK Library simplifies Adobe authentication setups and can be configured for easier token management.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: Understanding Authentication
---
# Understanding Authentication

This page outlines Adobe authentication and available libraries, for Developers planning to work with Adobe APIs in their custom applications.

Adobe services like Creative SDK, Photoshop, Adobe Analytics, etc. use the OAuth 2.0 protocol for authentication and authorization. Using Adobe OAuth 2.0, you can generate access tokens to make API calls from your web server or browser-based apps. You can learn more about it at the Developer Guide's [User Authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/) page.

API services tied to entitled Adobe products such as Campaign and Target require a JSON Web Token (JWT) to retrieve access tokens for use against authenticated endpoints. [This document](https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/) serves as a quick-start guide for first-time users.

Certain products, like Adobe Analytics 2.0, allow both types of integrations. You may choose to use an OAuth client if you are creating an application that requires an end user to authenticate before calling the Adobe Analytics APIs, or a JWT client if creating an application that needs to programmatically authenticate calls to Adobe Analytics APIs.

The Adobe I/O IMS SDK Library can simplify your interaction with Adobe authentication. You can configure and try it out at [Adobe I/O IMS SDK Library](https://github.com/adobe/aio-lib-ims)

## Next steps

Return to [Security Overview](index.md).

Return to [Guides Index](../../index.md).
