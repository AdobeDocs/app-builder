---
title: Setup CI/CD in an App Builder App
description: Setting up CI/CD for an App Builder App using GitHub Actions.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
# --- FAQs ---
faqs:
- question: What is a workspace in App Builder?
  answer: A workspace in App Builder represents an environment with its own Adobe service integrations, runtime namespace, cloud storage, CDN settings, and related credentials.
- question: How can I set up CI/CD for different environments in App Builder?
  answer: You can create CI/CD workflows for stage and production environments using GitHub Actions, leveraging the default bootstrapped project from the App Builder CLI.
- question: Where can I learn more about the architectural details of App Builder CI/CD?
  answer: Review the App Builder CI/CD documentation linked in the guide to understand the architecture and deployment process comprehensively.
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Setup CI/CD in an App Builder App
description: Setting up CI/CD for an App Builder App using GitHub Actions.
---
# Setup CI/CD in an App Builder App

App Builder allows you to manage multiple environments called workspaces. Each workspace has its own setup: 

* List of Adobe services to integrate via user or technical user accounts
* Runtime namespace
* Cloud storage for the SPA static files
* Content Delivery Network (CDN) delegation and sub-domain provisioned on adobeio-static.net
* Related credentials and secrets (API Key, access token, Runtime namespace credentials...)

We recommend reviewing the [App Builder CI/CD documentation](../../guides/app_builder_guides/deployment/cicd-for-app-builder-apps.md) to learn more about the architectural details.

This Code Lab will show you how to create a CI/CD worflow for a stage and production environment using [Github actions](https://github.com/features/actions) within an App Builder App.   

For that, we'll use the default bootstrapped project provided through the [CLI](https://github.com/adobe/aio-cli) included with App Builder, which provides a sample CI/CD workflow.  
