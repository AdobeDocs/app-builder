---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/duynguyen'
title: 'Lesson 3: Types of Alarm Feed'
---

# Lesson 3: Types of Alarm Feed

In addition to the `/whisk.system/alarms/interval` feed in Lesson 2, the alarms provider in Adobe I/O Runtime supports other types of feeds.

## Firing a trigger once

The `/whisk.system/alarms/once` feed allows you to [fire an event once at a specific time](https://github.com/apache/openwhisk-package-alarms#firing-a-trigger-event-once). The only required parameter is `date`, indicating when to fire the trigger. Optional parameters are `trigger_payload` and `deleteAfterFire`.

```yaml
triggers:
  runMeOnce:
    feed: /whisk.system/alarms/once
    inputs: 
      date: YYYY-MM-DDTHH:mm:ss.sssZ
      deleteAfterFire: true
```

Note that `YYYY-MM-DDTHH:mm:ss.sssZ` is just a format for this field; you are free to update it with the date and time you want.

## Firing a trigger on a time-based schedule using cron

The `/whisk.system/alarms/alarm` feed allows you to [fire an event on a time-based schedule using cron](https://github.com/apache/openwhisk-package-alarms#firing-a-trigger-on-a-time-based-schedule-using-cron). This is more generic than the `interval` and `once` feeds, because you can write crontab to configure the alarm service to trigger at the exact time and interval you want. The only required parameter is `cron`, a string based on the [UNIX crontab syntax](http://crontab.org) that indicates when to fire the trigger in UTC. Optional params are `trigger_payload`, `startDate` and `stopDate`.

<InlineAlert variant="warning" slots="text" />

**Important: Cron expressions are always evaluated in UTC.** Although a `timezone` parameter is listed in the upstream OpenWhisk alarms documentation, it is ignored in Adobe I/O Runtime. Write your cron expressions in UTC and set your `startDate` and `stopDate` accordingly. The `startDate` and `stopDate` parameters must use ISO-8601 format (for example, `"2027-01-01T00:00:00.000Z"`). Do not use epoch millisecond timestamps — they will cause a deployment error. Both dates must also be in the future at the time of deployment.

The following example shows a cron schedule that fires at 2:00 AM UTC every Sunday, starting January 1, 2027:

```yaml
triggers:
  sunday2amUTC:
    feed: /whisk.system/alarms/alarm
    inputs: 
      cron: "0 2 * * 0"
      startDate: "2027-01-01T00:00:00.000Z"
      stopDate: "2028-01-01T00:00:00.000Z"
```
