---
title: Get Started with App Builder
description: This tutorial series guides you through the entire App Builder development lifecycle from setup and development to deployment, testing, and publishing your application.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- App Builder
faqs:
- question: What is Adobe App Builder?
  answer: Adobe App Builder is a development framework that allows you to create, deploy, and manage custom applications integrated with Adobe Experience Cloud.
- question: How do I start building an app with App Builder?
  answer: Begin by creating a new project in the Developer Console, adding required Adobe API credentials, and setting up your local development environment using available templates.
- question: Can I test my app before publishing it?
  answer: Yes, you can deploy your application to sandboxes or CI/CD pipelines and simulate end-user interactions before making it publicly available.
- question: How is my app published to end users?
  answer: After deploying and testing, you initiate the publishing process via the Developer Console, and once approved by Admin, the app becomes available to authenticated business users.
- question: Can I convert existing Adobe I/O Runtime actions to App Builder apps?
  answer: Yes, Adobe provides a shortcut for customers with existing Adobe I/O Runtime actions to streamline converting them into App Builder applications.
---
# Get Started with App Builder

This series of tutorials will show you how to:

* Align App Builder's development stages - build, deploy and test, publish - to your own development process

* Arrange access and secure the necessary credentials, set up your local environment, and collect the tools you'll need

* Write, deploy, and test your app

* Troubleshoot your app and correct common error conditions

Customers with currently deployed Adobe I/O Runtime actions they wish to convert into App Builder applications should consider [this shortcut](../../intro_and_overview/index.md).

## Overview

Here's a high-level view of the process by which you'll build and launch your first App Builder app: 

### Build

Start in the [Developer Console](https://developer.adobe.com/developer-console/):

- Create a new project

- Add credentials for the Adobe APIs you want to use in your app, for example Adobe Campaign

- Define the sandboxes you need: development, staging, and production

Once the project is in place, set up the local development environment. This allows the Command Line Interface (CLI) to use the project, deploy the code to the right environments, and help with scaffolding the application. Based on what you are trying to create, you can use one of the available templates to generate code for the client side and microservices for the backend. 

### Deploy and test

Now that there is something to run, use the CLI to deploy the app into the sandbox, or into a GitHub-based CI/CD (Continuous Integration/Continuous Delivery) pipeline for tighter control over the production environment. This pushes the microservices to I/O Runtime and static HTML, JS, CSS, and image files to the CDN. 

You can now run the application in the context of Experience Cloud and simulate end- user interactions with the app. Since the application is not yet published, end users will not be able to see it and only the developers can interact with it.

### Publish

Once you are ready to share the application with end users, initiate the publish process from the Developer Console. After Admin approval, authenticated business users will be able to find your new app in Adobe Experience Cloud and use it.

## Next step

First, we'll review the access permissions, credentials, local environment, and tools you'll need for your App Builder app: [Set up](set-up.md).
