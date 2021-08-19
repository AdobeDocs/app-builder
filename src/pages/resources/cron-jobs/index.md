---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Scheduling Cron Jobs
description: Creating cron jobs in a Firefly app using OpenWhisk Alarms Package.
contributors: 
  - https://github.com/duynguyen 
---

# Scheduling Cron Jobs with Alarms

This codelab will guide you through creating cron jobs in a Firefly application using OpenWhisk Alarms Package. 

Project Firefly simplifies the process of building Cloud Native Applications that leverage Adobe I/O Runtime, which is based on OpenWhisk and uses its architecture to provide function-as-a-service (FaaS). 

For [headless applications](https://github.com/AdobeDocs/project-firefly/blob/master/guides/architecture_overview.md#headless-application), you may need to set up recurring jobs or tasks, such as invoking a data importing action every hour. To achieve that, you could leverage [OpenWhisk Alarms Package](https://github.com/apache/openwhisk-package-alarms) to fire a trigger at a specified frequency. 

