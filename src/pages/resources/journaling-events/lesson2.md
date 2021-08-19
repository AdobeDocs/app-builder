---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - https://github.com/Yu1986
---

# Lesson 2: Create the Event Consumer using Journaling API

In this lesson, we will do the follow steps:
- Create an event consumer using Project Firefly template.
- Use [aio-lib-state](https://github.com/adobe/aio-lib-state) as storage library to store the events from journaling api.
- Scheduling cron jobs with alarms to trigger event consumer to pull event from journaling api every x mins.

## Create an event consumer using Project Firefly template
We will also use Project Firefly template to create the event consumer, this time we could use the `generic` template. in this codelab I will create a headless app follow [here](https://adobeio-codelabs-alarms-adobedocs.project-helix.page/?src=/README.html)

For enterprise developers, Adobe offers journaling to consume events. The Adobe I/O Events Journaling API enables enterprise integrations to consume events according to their own cadence and process them in bulk. Unlike webhooks, no additional registration or other configuration is required; every enterprise integration that is registered for events is automatically enabled for journaling. Journaling data is retained for 7 days.

After you fire event, you should be able to verify your event through journaling UNIQUE API ENDPOINT you get from console by follow below instruction Journaling api you could use Curl command or POSTMAN to call this journaling UNIQUE API ENDPOINT to see your fired event. Or you can use [Custom Event SDK](https://github.com/adobe/aio-lib-events) to call Journaling API to retrieve your event.


## Write the data into Firefly storage
We will use [aio-lib-state](https://github.com/adobe/aio-lib-state) to store the event from journaling api. So first we’re going to install the dependency with:
```bash
npm i --save @adobe/aio-lib-state
``` 
Then we're going to import it as well:
```javascript
const stateLib = require('@adobe/aio-lib-state');
``` 
We'll setup the write to storage inside the main function. 
```javascript
async function saveToDb(params, new_events) {
  const stateCLient = await State.init()


  var events = await stateCLient.get(params.db_event_key) 
  if (events === undefined) {
    events = {latest: new_events[new_events.length - 1], events: new_events}
  } else {
    events = events.value
    events.latest = new_events[new_events.length - 1]
    events.events.push(new_events)
  }
  await stateCLient.put(params.db_event_key, events, { ttl: -1 })
}
``` 
also we will write down the event postion to ensure that if this action fails, the next invocation will retrieve from the same index instead of the new one. Thus no events are lost.
```javascript
async function getLatestEventPosition(params) {
  const stateCLient = await State.init()
  const events = await stateCLient.get(params.db_event_key)
  if (events === undefined) {
    return undefined
  } else {
    return events.value.latest.position
  }
}
``` 
the source code is [here](https://github.com/AdobeDocs/adobeio-samples-journaling-events/blob/main/event-consumer/actions/event_consumer/index.js)

## Scheduling cron jobs to automate the consuming events
Same steps as in lesson 2 to scheduling cron jobs to make sure the consumer pulling events from journaling api every x mins. Now we can deploy this event consumer app in another runtime namespace. 

