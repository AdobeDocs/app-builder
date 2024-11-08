---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: How it Works
---

# How App Builder works

The App Builder framework supports custom application development through build, deploy and test, and publish stages.

## Build

Start in the [Developer Console](/console):

- Create a new project

- Add credentials for the Adobe APIs you want to use in your app, for example Adobe Campaign

- Define the sandboxes you need: development, staging, and production

Once the project is in place, set the local development environment. This allows the Command Line Interface (CLI) to use the project, deploy the code to the right environments, and help with scaffolding the application. Based on what you are trying to create, you can use one of the available templates to generate code for the client side and microservices for the backend. 

## Deploy and test

Now that there is something to run, use the CLI to deploy the app into the sandbox, or into a GitHub-based CI/CD (Continuous Integration/Continuous Delivery) pipeline for tighter control over the production environment. This pushes the microservices to I/O Runtime and static HTML, JS, CSS, and image files to the CDN. 

You can now run the application in the context of Experience Cloud and simulate end user interactions with the app. Since the application is not yet published, end users will not be able to see it and only the developers can interact with it.

## Publish

Once you are ready to share the application with end users, initiate the publish process from the Developer Console. After Admin approval, authenticated business users will be able to find your new app in Adobe Experience Cloud and use it.
