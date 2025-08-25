---
title: Consume Events Using the Journaling API
description: Creating cron jobs in an App Builder application to consume events reliably using the Journaling API.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Journaling API
# --- FAQs ---
faqs:
- question: What is the Journaling API used for in App Builder apps?
  answer: The Journaling API is used to retrieve events reliably, ensuring no events are lost even during surges, unlike the Runtime webhook that may return 429 errors.
- question: How does the cron job consume events using the Journaling API?
  answer: A Runtime action using the Alarm package triggers cron jobs that periodically pull events from the Journaling API and store them in App Builder storage.
- question: How are events stored to prevent data loss?
  answer: Events are stored with an index in aio-lib-state storage so that if a job fails, the next run continues from the same point without missing any events.
- question: Do I need both an event provider and consumer app?
  answer: Yes, for an end-to-end workflow you should deploy an event provider to generate events and an event consumer to pull and store those events using separate App Builder projects.
- question: Where can I find a complete implementation of this Code Lab?
  answer: The full solution is available on GitHub at https://github.com/AdobeDocs/adobeio-samples-journaling-events.
contributors:
  - 'https://github.com/Yu1986'
---
# Consume Events Using the Journaling API

This Code Lab will guide you through creating cron jobs in an App Builder application to consume events using the Journaling API.

## User story

There is a class of App Builder apps for which customers want guarantees that I/O Events will be processed without losing any, for example during a surge of events. Without processing guarantees, a Runtime webhook would return a 429 response when it passed its concurrency limit, causing the webhook to be marked unreachable and ending delivery of events. The Journaling API of custom events resolves this situation. 

## Solution

- Use the [Journaling API](https://developer.adobe.com/events/docs/guides/api/journaling_api/) to retrieve events instead of relying on the webhook approach.
- Use a Runtime action that uses the [Alarm package](../cron-jobs/index.md) to read the events every X minutes.
- The alarm action stores the events in the App Builder storage [aio-lib-state](https://github.com/adobe/aio-lib-state)
- Record an index of events in storage so that if the action fails, the next invocation will retrieve from the same index, and no events will be lost.

This Code Lab provides an end-to-end solution that demonstrates how to use the Journaling API to consume events. It includes: 

- **Event provider** to generate events automatically and send them to the Journaling API.  If you already have an event provider, you can skip this step.
- **Event consumer**, the most important demonstration in this Code Lab. We will create another App Builder headless app to create cron jobs with alarms, and set up recurring jobs to pull from the Journaling API every x mins and write into App Builder storage.

Event provider and event consumer both need to be deployed as App Builder apps under different namespaces to endsure end-to-end workflow.
If you don't have them already, create two projects at Console following the steps detailed in [Creating your First App Builder Application](../../get_started/app_builder_get_started/first-app.md).

When they are successfully set up, you should be able to see your event consumer periodically pull events from the Journaling API and write them into storage.
For your convenience, there is a complete solution of this Code Lab [here](https://github.com/AdobeDocs/adobeio-samples-journaling-events).
