---
title: How it Works
description: Overview of App Builder, Adobe I/O Runtime, and how enterprise developers can build and deploy custom web applications on Adobe Experience Cloud.
keywords:
- Adobe I/O  
- Extensibility  
- API Documentation  
- Developer Tooling
faqs:
- question: What is App Builder?
  answer: App Builder is a framework for enterprise developers to create and deploy custom web applications that extend Adobe Experience Cloud solutions using modern technologies like JAM stack, serverless computing, Node, and React.
- question: What are the main components of App Builder?
  answer: Its main components include Single-Page Applications using React Spectrum, Adobe I/O Runtime for backend microservices, developer tools like CLI and SDKs, and integration with Adobe Experience Cloud's execution environment.
- question: What is Adobe I/O Runtime?
  answer: Adobe I/O Runtime is a serverless computing platform that runs backend application logic in response to events or HTTP requests, allowing developers to focus on code rather than infrastructure.
- question: How does serverless computing benefit developers using App Builder?
  answer: It abstracts server management, enabling developers to deploy on-demand functions that scale automatically and respond to events, simplifying infrastructure concerns.
- question: How do I get started with building an App Builder application?
  answer: Begin by reviewing core App Builder concepts and follow the "Get Started with App Builder" tutorial series for step-by-step guidance on building your first application.
keywords:
  - Adobe I/O  
  - Extensibility  
  - API Documentation  
  - Developer Tooling
title: How it Works
---
## What is App Builder?

App Builder is a complete framework for enterprise developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure. 

It uses modern technologies like JAM stack, serverless computing, Node, and React, and helps developers build applications using best practices including event-driven architecture, microservices, and Continuous Integration/Continuous Delivery (CI/CD).

Its main components are:

- **Single-Page Applications** (SPAs) that use React Spectrum for the client side - the same UI toolkit used by Adobe solutions
- **I/O Runtime**, Adobe’s serverless platform, used to create backend microservices and orchestrate APIs
- **Developer tools** including the Command-Line Interface (CLI), SDKs, Adobe Services and Developer Console. Support for Adobe authentication, end-user access control, publishing/consuming custom events, data and file storage, CI/CD pipelines, Content Delivery Network, and developer sandboxes are all included.
- **[Adobe Experience Cloud](https://experience.adobe.com/)** execution environment, so custom apps will live side by side with Adobe Experience Cloud solutions and will execute in the context of the organization and its authenticated employees.

## What is Adobe I/O Runtime?

Adobe I/O Runtime is Adobe's serverless computing platform, included as a component of App Builder. Serverless computing abstracts server infrastructure from developers so they can concentrate on application logic, not infrastructure. 

Serverless computing platforms like Adobe I/O Runtime host those portions of application logic that need to be Internet-accessible as on-demand functions. Adobe I/O Runtime executes code in response to Adobe I/O Events or HTTP requests controlled by conditional logic, or rules. It provides a programming environment supported by a REST API-based CLI and other tools.

## Next step

Understand core App Builder concepts and start building your first App Builder application with the [Get Started with App Builder](../get_started/app_builder_get_started/app-builder-intro.md) tutorial series.
