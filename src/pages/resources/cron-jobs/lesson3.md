```yaml
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Alarm Feeds
contributors:
- 'https://github.com/duynguyen'
title: Lesson 3: Types of Alarm Feed
description: Overview of different types of alarm feeds in Adobe I/O Runtime, including once and cron-based schedules.
faqs:
- question: What is the /whisk.system/alarms/once feed used for?
  answer: It is used to fire a trigger once at a specific date and time by specifying the date parameter.
- question: Which parameter is required for the /whisk.system/alarms/once feed?
  answer: The required parameter is date, which sets the exact time to fire the trigger.
- question: How does the /whisk.system/alarms/alarm feed differ from the interval and once feeds?
  answer: The alarm feed allows firing triggers on a time-based schedule using cron syntax, providing more flexible scheduling.
- question: What parameters can I specify for the /whisk.system/alarms/alarm feed besides cron?
  answer: Optional parameters include trigger_payload, timezone, startDate, and stopDate to control trigger behavior and timing.
- question: How do I specify a cron schedule to run at 2:00 am on Sundays CET timezone?
  answer: Use cron: "0 2 * * 7" with timezone: CET in your trigger's inputs configuration.
```
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

The `/whisk.system/alarms/alarm` feed allows you to [fire an event on a time-based schedule using cron](https://github.com/apache/openwhisk-package-alarms#firing-a-trigger-on-a-time-based-schedule-using-cron). This is more generic than the `interval` and `once` feeds, because you can write crontab to configure the alarm service to trigger at the exact time and interval you want. The only required parameter is `cron`, a string based on the [UNIX crontab syntax](http://crontab.org) that indicates when to fire the trigger in UTC. Optional params are `trigger_payload`, `timezone`, `startDate` and `stopDate`. 

The following example shows a cron schedule at 2:00 am on Sundays in the Central Europe Timezone (CET):

```yaml
triggers:
  sunday2am:
    feed: /whisk.system/alarms/alarm
    inputs: 
      cron: 0 2 * * 7
      timezone: CET
      startDate: 1601918992704
      stopDate: 1651918992704
```
