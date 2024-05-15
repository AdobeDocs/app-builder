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

This codelab will guide you through creating cron jobs in an App Builder application to consume events using journaling API

## User Story
There is a class of App Builder apps in which customers want guarantees that the I/O Events are processed without losing any event especially 
when there is a surge of events, a runtime webhook would return 429 response beyond the concurrency limit, thereby causing the webhook to be 
marked unreachable and causing no further events to be delivered. In this use case, the journaling API of custom events would be useful here. 

## Solution
- Using [Journaling API](/events/docs/guides/api/journaling_api/) to retrieve the events instead of relying on the webhook approach.
- Use a runtime action that uses the [Alarm package](../cron-jobs/index.md) to read the events every X minutes.
- The alarm action stores the events in the App Builder storage [aio-lib-state](https://github.com/adobe/aio-lib-state).
- Index of events has been recorded in storage that if the action fails, the next invocation will retrieve from the same index, thus no events are lost.

In order to demo how to using journaling API to consume events, we provide an end to end solution in this codelab, 
- Event provider - we need to create an event provider to automatically generate events sending to Journaling API or if you already have event provider you could skip this step
- Event consumer - which is the main demo part of this codelab, we create another App Builder headless app to create cron jobs with alarms, we set up recurring jobs to pull from journaling API every x mins and write into App Builder storage.

Event provider and event consumer both need to be deployed as an App Builder app under different namespace to make sure end to end workflow.
So for that purpose, you may need to create two projects at Console follow below:
[Creating your First App Builder Application](../../getting_started/first_app.md)

If successfully set up, you should be able to see your event consumer will periodically pull events from journaling API and write into storage.
For your convenience, we provide a complete solution of this codelab at [here](https://github.com/AdobeDocs/adobeio-samples-journaling-events)


