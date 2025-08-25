---
title: App Builder and Adobe I/O Runtime
description: App Builder simplifies building cloud-native applications for Adobe I/O Runtime, enabling easy conversion and deployment of existing actions. Learn the main steps to migrate and manage your apps efficiently.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Cloud Native Applications
faqs:
- question: What is Adobe I/O Runtime used for in App Builder?
  answer: Adobe I/O Runtime provides a serverless platform where App Builder applications can run, enabling scalable deployments and event-driven functions.
- question: How can I convert existing Adobe I/O Runtime actions to App Builder applications?
  answer: You can create a new project with the App Builder template in the Developer Console, copy your existing actions into this project, and deploy them using the Adobe CLI.
- question: What are the prerequisites for setting up App Builder with Adobe I/O Runtime?
  answer: You need to configure the Adobe CLI, create a project in the Developer Console, and initialize your application environment before deploying your actions.
---
# App Builder and Adobe I/O Runtime

App Builder greatly simplifies the process of building cloud native applications that run on Adobe I/O Runtime. 

If you have existing actions (for example, headless applications) deployed on Adobe I/O Runtime and you want to convert them to App Builder applications, these are the main steps:

* Create a new project in the [Developer Console](https://developer.adobe.com/developer-console/) and choose the App Builder template
* Configure the Adobe CLI and use it to initialize a new application for the project you created above; see also [Setting Up Your Environment](set-up.md)
* Create copies of your actions in this project
* Deploy and test the new actions
* Update your applications to point to the new actions

## Next step

See what else App Builder can do: [Create your First App Builder Application](first-app.md).
