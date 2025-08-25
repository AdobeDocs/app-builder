---
title: CI/CD for App Builder Applications: Overview
description: Learn how to set up continuous integration and continuous delivery (CI/CD) pipelines for Adobe App Builder applications using GitHub Actions or custom CI/CD tools.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- CI/CD
# --- FAQs ---
faqs:
- question: What is the benefit of using CI/CD for App Builder apps?
  answer: CI/CD automates building and deploying App Builder applications, ensuring consistent deployments and reducing variances from manual processes.
- question: How can I set up a CI/CD pipeline for App Builder apps?
  answer: You can set up a CI/CD pipeline using GitHub Actions by following Adobe's step-by-step instructions linked in the guide.
- question: What GitHub workflows are provided for App Builder CI/CD?
  answer: Workflows include running unit tests on pull requests, deploying to the Stage workspace on main branch merges, and deploying to Production on release creation.
- question: Can I use other CI/CD tools besides GitHub Actions?
  answer: Yes, you can build a custom CI/CD pipeline with any industry-leading tool using the AIO CLI.
- question: Where can I find the GitHub Actions for AIO CLI?
  answer: The CLI Setup and Apps Actions are available on GitHub Marketplace and can be integrated into your workflows.
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: CI/CD for App Builder Applications
---
# CI/CD for App Builder Applications: Overview

Continuous integration and continuous delivery (CI/CD) is a crucial component for the success of any development team, including teams developing App Builder apps. By automating deployment, CI/CD allows the development team to build and deploy apps free of any variances that may arise from building and deploying the app from a developer's machine.

Before you dive into CI/CD we recommend you read our [deployment guide](deployment.md) to familiarize yourself with general concepts about App Builder app deployment.

## Setting up CI/CD pipeline using GitHub Actions

To deploy App Builder apps, App Builder supports a CI/CD pipeline using GitHub Actions. Please read step-by-step instructions to set up your CI/CD pipeline here: [Setting up a CI/CD pipeline using GitHub Actions](./cicd-using-github-actions.md).

The following GitHub workflows are provided out of the box:

+ **When a pull request is created**: The application unit tests are executed by calling `aio app test` against the requested changes. See the [PR workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/pr_test.yml).
+ **When code is merged to the main branch**: The application is deployed to the `Stage` workspace by calling `aio app deploy`. See the [Deploy Stage workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_stage.yml).
+ **When a release is created in the repository**: The application is deployed to the `Production` workspace by calling `aio app deploy`. See the [Deploy Prod workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_prod.yml).

![CI/CD with Github Actions](../../../images/ci-cd-github-actions-architecture.png)

### GitHub actions for AIO CLI

These GitHub Actions have been built to support the use of the CLI in a CI/CD workflow running within GitHub infrastructure. They are used in the default [App Builder Apps workflows](https://github.com/adobe/generator-aio-app/tree/master/generators/add-ci/.github/workflows), and can also be used in custom GitHub workflows you build:

- [CLI Setup Action](https://github.com/adobe/aio-cli-setup-action) can be used to install and configure the CLI on the GitHub infrastructure running the workflow that invoked the action

- [Apps Action](https://github.com/adobe/aio-apps-action) centralizes support for a GitHub workflow to use application-specific commands such as testing using `aio app test` and deployment using `aio app deploy`.

Both actions have been published and can be found on GitHub Marketplace. See [CLI Setup](https://github.com/marketplace/actions/aio-cli-setup) and [Apps](https://github.com/marketplace/actions/aio-apps).

## Setting up a custom CI/CD pipeline

If you cannot use GitHub actions for your CI/CD pipeline for any reason, you can also build a custom CI/CD pipeline using any industry-leading CI/CD tool and the AIO CLI. Read our guide on [Setting up a custom CI/CD pipeline to deploy App Builder apps](./cicd-custom.md).

## Next steps

Set up [CI/CD using GitHub Actions](cicd-using-github-actions.md).

Set up [custom CI/CD pipeline](cicd-custom.md).

Continue to [Credential Rotation](credential-rotation.md).

Return to [Deployment Overview](deployment.md).

Return to the [Guides Index](../../index.md).
