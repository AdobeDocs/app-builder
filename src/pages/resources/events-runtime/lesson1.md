---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - https://github.com/Yu1986
---

# Lesson 1: Step by Step Guide

## Initialize a Firefly app using template 
If you don't have a Firefly app, please follow [Create a New Firefly App from Template](../event-driven/lesson1.md) to create one, make sure you have `publish-event`in the template and add `I/O management API`in console. After done, and run `aio app deploy` you should have seen this 
![publishevent](assets/publishevent-1.png)

and here is the project I set up at adobe developer console 
![consoleproject](assets/console-project-2.png)


## Event Registration

- Follow [Register the App as Event Provider](../event-driven/lesson2.md) to register the event provider, in my case, while at the step:
```
aio event registration create 
``` 
It will show you a sample of JSON format, make sure you select `webhook` in my case, here is an example of .json file
```
{
    "name": "event-runtime-integration",
    "description": "test event runtime",
    "delivery_type": "WEBHOOK",
    "webhook_url": "https://io-webhook.herokuapp.com/webhook/testjie",
    "events_of_interest": [
        {
        "provider_id": "ccefc74d-9696-4b99-a799-f2d34a4189cd",
        "event_code": "eventrt"
        }
    ]
}
```

- After finish the steps above, you should be able to see in your terminal that you successfully create register the event, and you will also see it at adobe developer console under the left bottom corner `event` your registration provider `eventrt` will show up there
![console-event](assets/console-event-3.png)

## Create Event Consumer 
We will use the `generic` project firefly template to modify the code to create event consumer, I will name the action to `consume-event`, after deploy the event you will be able to set up an event registration runtime actions you deployed.

Note: here is one simple sample code that you could refer to test the webhook feature: 
```
function main(params) {
  console.log('user action is processing event ' + params.event);
  var event = params.event;
  var id = event.id;
  var event_processed = "Event Received And Processed :: " + JSON.stringify(params.event)
    return {
        body: event_processed,
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        }
    };
  }
```
or you could use below one to create webhook send to slack 

```
/* this is a sample action sent a message to slack */
var request = require('request');

/* default slackwebhook and channel add yours here and replace the TODO below */
var slackWebhook = "Your webhook";
var slackChannel = "your channel";

async function main (params) {
  
  /* print event detail */
  console.log('in main + event detail: ', params.event);

  var returnObject = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: ""
  };

  /* handle the challenge */
  if (params.challenge) {

    console.log('Returning challenge: ' + params.challenge);

    returnObject.body = new Buffer(JSON.stringify({
      "challenge": params.challenge
    })).toString('base64');

    return returnObject;

  } else {

    /* we need it to run asynchronously, so we are returning a Promise */
    return new Promise(function (resolve, reject) {

      var slackMessage = " Event received: " + JSON.stringify(params);

      var payload = {
        "channel": slackChannel,
        "username": "incoming-webhook",
        "text": slackMessage,
        "mrkdwn": true,
      };

      var options = {
        method: 'POST',
        url: slackWebhook,
        headers:
            { 'Content-type': 'application/json' },
        body: JSON.stringify(payload)
      };

      request(options, function (error, response, body) {
        if (error) {

          console.log("ERROR: fail to post " + response);

          reject(error);

        } else {

          console.log ("SUCCESS: posted to slack " + slackMessage);

          returnObject.body = new Buffer(JSON.stringify({
            "slackMessage": slackMessage
          })).toString('base64');

          resolve(returnObject);
        }

      });

    });

  }
}

exports.main = main
```
Please note that: An action used as event consumer does not need to be `web: yes`, and doesn't need `require-adobe-auth: true` in the manifest.yml file, please modify accordingly to ensure your app security. 

## Event Runtime Integration 

- With all above setup, now you get your `providerId`, `eventCode`, you can go back to your firefly App trying to invoke a custom event like below: 
![invoke-event](assets/event-invoke-4.png)

- You should see this runtime action created in the `user defined actions` 
![user-define-action](assets/user-define-action-5.png)

- User now adds the event api to the project to setup the event registration
![add-event](assets/add-event-6.png)

- Adding from our custom event provider we just registered `eventruntime` (you should be able to see your register event in this list)
![add-event](assets/add-event-7.png)

- Subscribing to the "eventrt" event type
![add-event](assets/add-event-8.png)

- Generate the JWT service account credentials key pair
![add-event](assets/add-event-9.png)

- On the registration details page provide name and select the runtime user action created to setup event registration, select the user action from the dropdown of Runtime Actions, as we create the `consume-event`and deployed previously, so we will choose this one, then click `Save configured events`. This will create an event registration with an event handler webhook pointing to your runtime action.
![add-event](assets/add-event-10-3.png)

- If user goes to his aio-cli and do "aio runtime list", he can see the below entities created as part of the new flow of event registration
![add-event](assets/add-event-12.png)


