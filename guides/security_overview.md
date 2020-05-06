# Security Overview

## Context

Every application development project has its own security requirements. Even for seasoned developers, these critical requirements can lead to complex and time-consuming implementations with an inappropriate support at SDK and tools level.

Project Firefly SDK and CLI are designed to fasten the implementation of the typical security requirements for cloud-native applications that deploy into Adobe's ecosystem.

## High-Level Overview

TODO: summarize multiple security aspects and how does the tooling helps mitigating the issues

## Adobe Identity Management Services

Any interaction with [Adobe Product APIs](https://www.adobe.io/apis.html) needs to be authenticated against Adobe Identity Management Services (IMS).
The [Understanding Authentication](understanding_authentication.md) guide is a good pre-read to get deeper preliminary insights on those services.

### IMS Support for Firefly Applications

Project Firefly SDK and CLI help developers to [bootstrap applications](../getting_started/setup.md#bootstrapping-an-application) easily from application templates. 
These includes templates for Runtime web actions, which integrate with the [Adobe Product APIs](https://www.adobe.io/apis.html), which can be extended with Project Firefly.
Any generated action is initialized with boilerplate code based on Project Firefly SDK libraries. Out-of-the box, the following steps are implemented:

- Validation that an Adobe IMS bearer token has been passed as Authorization header of the request which invoked this action
- Extraction of this bearer token for further usage in the action
- Instantiation of an API client, by using the appropriate product SDK library
- Pre-configured API call, passing the required credentials, by using the same product SDK library

### Headless Firefly Applications

Headless applications (e.g. Runtime actions or sequences) are usually executed as a back-end service invoked by another service - another Adobe product or a 3rd party system. For example:

- A custom asset worker integrating with AEM Assets as a Cloud Service
- An Adobe Campaign Standard Marketing Activity
- A 3rd party CRM workflow

TODO: insert sequence diagram

A headless Firefly application requires to pass an Adobe IMS JWT access token in order to successfully call Adobe Product APIs. This token can be obtained within the [Developer Console](https://console.adobe.io/), by accessing the corresponding Firefly project and workspace.

However, its lifetime will be of 24 hours and it will expire afterwards, for obvious security reasons. A developer shouldn't have to manually refresh the token and update the application configuration every day.

The [IMS SDK Library](https://github.com/adobe/aio-lib-ims) can be used to automate the JWT access token generation and renewal from directly from the Runtime action code.

This SDK library also uses the [State SDK Library](https://github.com/adobe/aio-lib-state) behind the scenes in order to persist the token in Project Firefly's cloud storage on behalf of the developer between two invocations of the Runtime action.

### Firefly SPAs

These SPAs are business-to-employees custom applications that deploy into the [Experience Cloud Shell](https://experience.adobe.com) for the end-users of an Enterprise organization.

TODO: insert sequence diagram

The SPA front-end interacts with Runtime web actions on specific events triggered at UI level.
In this scenario, the Experience Cloud Shell exposes a [client-side API](../reference_documentation/exc_app/overview.md), which can be used by the SPA to obtain the OAUth token generated for the logged-in Enterprise user. 
This token will be used by the back-end Runtime actions to call the [Adobe Product APIs](https://www.adobe.io/apis.html), which need to be integrated in this application.

## Securing Firefly Applications

### I/O Runtime Specific guidelines

The [security guidelines for I/O Runtime](https://github.com/AdobeDocs/adobeio-runtime/blob/master/guides/security_general.md) generally apply for the back-end actions of a Firefly application.

### Transport Security

Developers building Firefly applications on top of the out-of-the-box infrastructure will benefit from HTTPs connections between all the components that are part of this infrastructure.

We strongly recommend to ensure that every 3rd party system or service integrating with a Firefly application supports HTTPs connections as well.

### Authentication and Authorization

### Tenant isolation

### Additional Firefly Services

## Summary

TODO: Time to value, User context aware, OOTB Security support, developer friendly, little time to implement security compliant features, Adobe-native 
