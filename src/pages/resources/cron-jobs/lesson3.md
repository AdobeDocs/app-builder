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

The `/whisk.system/alarms/alarm` feed allows you to [fire an event on a time-based schedule using cron](https://github.com/apache/openwhisk-package-alarms#firing-a-trigger-on-a-time-based-schedule-using-cron). This is more generic than the `interval` and `once` feeds, because you can write crontab to configure the alarm service to trigger at the exact time and interval you want. The only required parameter is `cron`, a string based on the UNIX crontab syntax that indicates when to fire the trigger in UTC. Optional params are `trigger_payload`, `startDate` and `stopDate`.

<InlineAlert variant="warning" slots="text" />

**Important: Cron expressions are always evaluated in UTC.** Although a `timezone` parameter is listed in the upstream OpenWhisk alarms documentation, it is ignored in Adobe I/O Runtime. Write your cron expressions in UTC. The `startDate` and `stopDate` parameters must use ISO-8601 format. You can use UTC (`"2027-01-01T00:00:00.000Z"`) or include a timezone offset (`"2027-01-01T05:30:00.000+05:30"`). Do not use epoch millisecond timestamps — they will cause a deployment error. Both dates must be in the future at the time of deployment.

<InlineAlert variant="warning" slots="text" />

**Important: Months are numbered from 0 to 11.** Unlike standard UNIX crontab, the month field counts from `0` (January) to `11` (December). For example, `35 8 2 11 *` fires on December 2, not November 2. To avoid off-by-one mistakes, use month names (`jan`-`dec`) instead, such as `35 8 2 nov *`. For the day of the week, use `0`-`6` (`0` = Sunday) or `sun`-`sat`. See [Cron expression format](../../guides/runtime_guides/reference_docs/prepackages.md#cron-expression-format) for the full field reference.

<InlineAlert variant="warning" slots="text" />

**Known issue: do not use `stopDate` with `/whisk.system/alarms/alarm`.** Deploying a cron-based alarm trigger with `stopDate` currently fails with the error `Response is not valid 'message/http'.`, and the trigger is not registered. Until this is fixed, omit `stopDate` and delete the trigger when you want the schedule to end.

<InlineAlert variant="warning" slots="text" />

**Known issue: changing a deployed alarm trigger does not change its schedule.** If you change the `cron` (or any other input) of an alarm trigger in `app.config.yaml` and run `aio app deploy` again, or delete the trigger and create it again with the same name, the alarm service may keep firing on the previous schedule. To change a schedule, rename the trigger (and update the rule that references it) and redeploy, so that a new trigger is created. If the old trigger is still deployed, delete it.

The following example shows a cron schedule that fires at 2:00 AM UTC every Sunday, starting January 1, 2027:

```yaml
triggers:
  sunday2amUTC:
    feed: /whisk.system/alarms/alarm
    inputs: 
      cron: "0 2 * * 0"
      startDate: "2027-01-01T00:00:00.000Z"
```
