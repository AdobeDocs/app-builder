---
title: App Builder and Adobe I/O Runtime
description: App Builder simplifies building cloud-native applications running on Adobe I/O Runtime, enabling easy migration and development of serverless actions. Learn the key steps to convert existing actions and leverage powerful Adobe developer tools.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Cloud Native Applications
faqs:
- question: What is Adobe I/O Runtime?
  answer: Adobe I/O Runtime is a serverless platform that allows developers to execute code in response to events without managing servers. It enables scalable and event-driven applications.
- question: How does App Builder simplify application development on Adobe I/O Runtime?
  answer: App Builder provides templates and CLI tools that streamline creation, deployment, and management of cloud-native applications, reducing boilerplate and simplifying workflows.
- question: Can I convert existing Adobe I/O Runtime actions to use App Builder?
  answer: Yes, by creating a new App Builder project, copying your existing actions, and deploying them within the App Builder framework, you can manage and extend your applications more efficiently.
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
