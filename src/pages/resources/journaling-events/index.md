---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Consume Events Using Journaling API
description: >-
  Creating cron jobs in an App Builder application to consume events using
  Journaling API.
contributors:
  - 'https://github.com/Yu1986'
---

# Consume Events Using Journaling API

This Code Lab will guide you through creating cron jobs in an App Builder application to consume events using journaling API

## User story

There is a class of App Builder apps in which customers want guarantees that the I/O Events will be processed without losing any events, especially when there is a surge of events. Without them, a Runtime webhook would return 429 response beyond the concurrency limit, causing the webhook to be marked unreachable and causing no further events to be delivered. The Journaling API of custom events is useful to resolve this situation. 

## Solution

- Using [Journaling API](/events/docs/guides/api/journaling_api/) to retrieve the events instead of relying on the webhook approach.
- Use a Runtime action that uses the [Alarm package](../cron-jobs/index.md) to read the events every X minutes.
- The alarm action stores the events in the App Builder storage [aio-lib-state](https://github.com/adobe/aio-lib-state).
- Index of events has been recorded in storage that if the action fails, the next invocation will retrieve from the same index, so no events are lost.

In order to demonstrate how to use journaling API to consume events, we provide an end-to-end solution in this Code Lab: 

- Event provider - we need to create an event provider to automatically generate events sending to Journaling API or if you already have event provider you could skip this step
- Event consumer - which is the main demo part of this Code Lab, we create another App Builder headless app to create cron jobs with alarms, we set up recurring jobs to pull from journaling API every x mins and write into App Builder storage.

Event provider and event consumer both need to be deployed as an App Builder app under different namespace to make sure end to end workflow.
For that purpose, you may need to create two projects at Console follow below:
[Creating your First App Builder Application](../../getting_started/first_app.md)

If successfully set up, you should be able to see that your event consumer periodically pulls events from the Journaling API and writes them into storage.
For your convenience, we provide a complete solution of this Code Lab [here](https://github.com/AdobeDocs/adobeio-samples-journaling-events)


