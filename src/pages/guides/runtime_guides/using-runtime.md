---
title: Using Adobe I/O Runtime
description: Overview and guidance on deploying, managing, and securing actions using Adobe I/O Runtime, with links to detailed topics like asynchronous calls, security, monitoring, and debugging.
keywords:
- Adobe I/O Runtime
- actions
- webhooks
- security
- debugging
# --- FAQs ---
faqs:
- question: How do I deploy a group of related actions in Adobe I/O Runtime?
  answer: Deploy related actions as packages, which lets you bundle, share, and manage actions collectively with default parameters and security settings.
- question: How can I secure my web actions in Adobe I/O Runtime?
  answer: Use effective access control measures such as authentication and authorization to restrict who can invoke your web actions.
- question: Where can I find troubleshooting tips for common Runtime issues?
  answer: Refer to the Troubleshooting guide that covers common problems and provides actionable solutions for Adobe I/O Runtime.
---
# Using Adobe I/O Runtime

Adobe I/O Runtime is more than a way of deploying individual actions and invoking them directly in the CLI. With Runtime, you can deploy groups of related actions as packages, share them with others, set up actions as webhooks to automate responses to events, and access Runtime actions through the API. The following pages guide you through the process:

* [Creating Actions](creating-actions.md), including actions, web actions, invocation and management, and setting parameters

* [Asynchronous Calls](asynchronous-calls.md) and how to execute these long-running, non-blocking calls

* [Security](security-general.md) issues to consider when working with I/O Runtime

* [Throughput Tuning](throughput-tuning.md) to maximize invocations and performance

* [Securing Web Actions](securing-web-actions.md) through effective access control

* [Creating REST APIs](creating-rest-apis.md) from your web actions

* [Using Packages](using-packages.md) to bundle and share your actions, set default parameters, and maintain security 

* [Logging and Monitoring](logging-monitoring.md) to assist with troubleshooting your actions

* [Debugging](debugging.md) with advanced techniques for debugging Node.js actions

* [System Settings](system-settings.md) and constraints to consider when designing and debugging actions

* [CI/CD Pipeline](ci-cd-pipeline.md) tools available for the Runtime environment

* [Troubleshooting](troubleshooting.md) common issues and solutions

## Next steps

Continue to [Creating Actions](creating-actions.md).

Return to [Guides Index](../index.md).
