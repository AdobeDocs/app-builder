# Security Overview

## Context

This guide provides details about each aspect of the security of Firefly applications. For every application development project, security requirements are among the most critical. But without appropriate guidance and tools, they are also among the most difficult and time-consuming ones, even for seasoned developers.

The Firefly SDK and CLI aim to simplify and fasten the implementation of the security requirements for applications that integrate within Adobe's ecosystem.

## High-Level Overview

TODO: summarize multiple security aspects and how does the tooling helps mitigating the issues

## Adobe Identity Management System

Any interaction with Adobe product APIs needs to be authenticated against Adobe Identity Management System (IMS).
The [Understanding Authentication](understanding_authentication.md) guide is a good pre-read to get deeper preliminary insights on the topic.

### IMS Support at SDK and CLI level

The Firefly SDK and CLI help developers to bootstrap applications easily. As part of this process, developers can choose to create actions from a list of generators for every supported Adobe API.
These generators create Runtime web actions, which implement the boilerplate code that is needed to:

- Check that a bearer token has been passed as Authorization header of the request that invoked this action
- Instantiate a client for the API, by using the appropriate product SDK library
- Call the API and pass the required credentials (including the token), by using the same product SDK library

### Headless Applications

Headless applications (e.g. Runtime actions or sequences) are usually executed as a back-end service called by another Adobe product. For example:

- A custom worker for AEM Assets as a Cloud Service
- An external data ingestion process called within an Adobe Campaign Standard Marketing Activity

If such a headless application needs to call Adobe APIs, it will usually rely on a JWT access token obtained from an integration of services defined within the Developer Console, for a specific Firefly project and workspace.

Note that this token has a lifetime of 24 hours and will expire afterwards, for obvious security reasons. A developer shouldn't have to manually refresh the token and update the application configuration every day.

Developers can use the [IMS SDK Library](https://github.com/adobe/aio-lib-ims) to automate the JWT access token generation and renewal from their Runtime action code.

Note that this SDK library uses the [State SDK Library](https://github.com/adobe/aio-lib-state) as a dependency in order to persist the token on behalf of the developer's Runtime credentials between two invocations of the Runtime action that needs this token to sucessfully call Adobe Product APIs.

### SPAs deployed into the Experience Cloud Shell

## Securing Firefly Applications

TODO: HTTPS, AuthN/AuthZ, isolation per tenant (both actions & UI), Files/States store security

## Summary

TODO: Time to value, User context aware, OOTB Security support, developer friendly, little time to implement security compliant features, Adobe-native 
