---
title: CI/CD Pipeline
description: Learn how to build and manage a CI/CD pipeline using Adobe I/O Runtime tools, including namespaces, CLI tools, versioning, and Swagger specifications for REST APIs.
keywords:
- Adobe I/O Runtime
- CI/CD pipeline
- namespaces
- versioning actions
- Swagger specifications
# --- FAQs ---
faqs:
- question: How can I separate different environments in Adobe I/O Runtime?
  answer: Use namespaces to create and manage separate environments like Development, QE, Staging, and Production, allowing you to deploy different versions of your actions accordingly.
- question: What CLI tools help automate deployments in Adobe I/O Runtime?
  answer: Use the `aio` and `wskdeploy` CLI tools to automate deployments, manage dependencies, and create manifest files describing your packages and actions.
- question: How should I manage versioning for my actions?
  answer: Create a new package for each release and include version numbers in package names or use a "latest" package to maintain multiple versions, enabling flexible client version usage.
---
# CI/CD Pipeline

Adobe I/O Runtime offers a number of tools to help you build a CI/CD pipeline for managing your actions. 

## Namespaces

Namespaces can be used to separate different environments such as Development, QE, Staging, and Production. Since you can create as many namespaces as you need, you can deploy different versions of your actions to different environments as you promote a version up to Production.

## CLI tools

CLI tools `aio` and `wskdeploy` can help you automate deployments, manage action dependencies, and create manifest files that describe your packages and actions. Details about using `wskdeploy` can be found [here](creating-actions.md). 

## Swagger specifications

If you plan to expose your actions as REST APIs, Swagger definition files can help you to manage the API life cycle through creation, editing, and deletion, as described [here](creating-rest-apis.md#using-swagger-files).

## Versioning actions

A persistent problem when creating actions is versioning – how to maintain different stages of development or updates of the same action. Packages offer an elegant solution.

Do this by creating a new package for every release you want to publish, and deploy all your actions in that package. Use the version number as part of the package name, or create a "latest" package that always holds the newest version. Client applications then have complete freedom to stay with a preferred version, always use the latest, or migrate according to their own schedules.

The AEM Commerce team documented this approach in a [blog post](https://medium.com/adobetech/functions-packaging-and-versioning-in-adobe-i-o-runtime-7accdfd95e0a).

## Next step

Return to the [Guides Index](../index.md).
