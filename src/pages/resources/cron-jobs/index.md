---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Scheduling Cron Jobs with Alarms
description: Creating cron jobs in an App Builder app using OpenWhisk Alarms Package.
contributors:
  - 'https://github.com/duynguyen'
---

# Scheduling Cron Jobs with Alarms

This codelab will guide you through creating cron jobs in an App Builder application using OpenWhisk Alarms Package. 

App Builder simplifies the process of building Cloud Native Applications that leverage Adobe I/O Runtime, which is based on OpenWhisk and uses its architecture to provide function-as-a-service (FaaS). 

For [headless applications](../../guides/index.md#headless-application), you may need to set up recurring jobs or tasks, such as invoking a data importing action every hour. To achieve that, you could leverage [OpenWhisk Alarms Package](https://github.com/apache/openwhisk-package-alarms) to fire a trigger at a specified frequency. 

