---
title: Scheduling Cron Jobs with Alarms
description: Creating cron jobs in an App Builder app using OpenWhisk Alarms Package.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
# --- FAQs ---
faqs:
- question: What is the purpose of the OpenWhisk Alarms Package in App Builder?
  answer: It allows you to schedule and trigger recurring jobs or tasks using cron-like triggers in your App Builder app.
- question: How do cron jobs benefit headless applications in App Builder?
  answer: They enable automated, scheduled invocation of actions like data imports or maintenance tasks without manual intervention.
- question: What architecture does App Builder use for running functions?
  answer: App Builder uses Adobe I/O Runtime, based on OpenWhisk, providing function-as-a-service (FaaS) capabilities.
contributors:
- 'https://github.com/duynguyen'
---
# Scheduling Cron Jobs with Alarms

This Code Lab will guide you through creating cron jobs in an App Builder application using OpenWhisk Alarms Package. 
This Code Lab will guide you through creating cron jobs in an App Builder application using OpenWhisk Alarms Package. 

App Builder simplifies the process of building Cloud Native Applications that use Adobe I/O Runtime, which is based on OpenWhisk and uses its architecture to provide function-as-a-service (FaaS). 

For [headless applications](../../guides/app_builder_guides/architecture_overview/architecture-overview.md#headless-applications), you may need to set up recurring jobs or tasks, such as invoking a data importing action every hour. To achieve that, you could use [OpenWhisk Alarms Package](https://github.com/apache/openwhisk-package-alarms) to fire a trigger at a specified frequency. 
