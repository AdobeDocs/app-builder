---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/Yu1986'
title: 'Lesson 3: End to end test'
---

# Lesson 3: End to end test
In the previous lessons, we have setup two App Builder apps:
- Event provider that automatically generating events 
- Event consumer that automatically pulling from journaling api and write to App Builder storage

If you would like to config the alarm package to automatically trigger events or pulling events from journaling API, let's setup `app.config.yaml` and try the `/whisk.system/alarms/interval` feed of the OpenWhisk Alarm Package to fire trigger events on an interval base schedule. To see the effect instantly, we will make it run every minute. You will need a trigger set up with the `/whisk.system/alarms/interval` feed, and a rule to wire this trigger to the `publish-event` or `consume-event` action created earlier.

The only required param for the `interval` feed is `minutes`, which is an integer representing the length of the interval (in minutes) between trigger fires. Optional params are `trigger_payload`, `startDate` and `stopDate`.

Now we deployed these two apps separately in different namespaces, we can configure these two apps at different paces to trigger. if succesful, the events will be stored in the App Builder database. 


