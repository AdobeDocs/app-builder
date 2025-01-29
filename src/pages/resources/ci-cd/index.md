---
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
* CDN delegation and sub-domain provisioned on adobeio-static.net
* Related credentials and secrets (API Key, access token, Runtime namespace credentials...)

We recommend to go through the [App Builder CI/CD documentation](../../guides/deployment/ci-cd-for-firefly-apps.md) to learn more about the architectural details.

This codelab will show you how to create a CI/CD worflow for a stage and production environment using [GitHub actions](https://github.com/features/actions) within an App Builder App.   

For that, we'll use the default bootstrapped App Builder project provided via the [CLI](https://github.com/adobe/aio-cli) which provides a sample CI/CD workflow out-of-the-box.  
  
