---
title: I/O Events Handler
description: Demonstrates how to write an event handler for webhook calls using Adobe I/O Events, including posting notifications to Slack via an incoming webhook.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Webhooks
# --- FAQs ---
faqs:
- question: What is the purpose of the I/O Events Handler example?
  answer: It shows how to create an event handler function that processes webhook calls and forwards event details to a Slack channel.
- question: How do I register the event handler as a webhook for Adobe I/O Events?
  answer: Deploy the action as a web action and use its URL to register it as a webhook endpoint in Adobe I/O Events.
- question: What is needed to send messages to Slack in the example?
  answer: You must configure a Slack incoming webhook URL and specify the target Slack channel in the code.
- question: How does the handler respond to a challenge parameter in the request?
  answer: It returns the challenge value in the response body to verify webhook registration.
- question: How are missing parameters handled by this event handler?
  answer: The code checks for required parameters and returns a 400 error response if any are missing.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: App Builder Code Snippets - I/O Events handler
---
# I/O Events Handler

Demonstrates how to write an event handler for webhook calls. This action is exposed as a web action, so you can use its URL to register as a webhook for I/O Events.

```javascript
/**
 * Demonstrating how to write an event handler for webhook calls
 *
 * This action is expose as a web action, you can use its URL to register as a webhook for I/O Events
 */
const { Core } = require('@adobe/aio-sdk')
const fetch = require('node-fetch')
const { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils')

// Set up an Incoming Webhooks for your team: https://api.slack.com/incoming-webhooks
// Then update the following variables with your slack config values
const slackWebhook = 'https://hooks.slack.com/services/AAA/BBB/CCC'
const slackChannel = 'general'

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    // 'info' is the default level if not set
    logger.info('Calling the main action')

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params))

    if (params.challenge) {
      return { body: { challenge: params.challenge } }
    }

    // check for missing request input parameters and headers
    const requiredParams = ['event']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    // NOTE: please customize the following lines based on the event object data type you receive from I/O Events
    const eventDetail = params.event['activitystreams:object']

    const slackMessage = params.event['@type'] + " Event for: " + eventDetail['xdmAsset:asset_name'] + " at " + eventDetail['xdmAsset:path']

    const payload = {
      channel: slackChannel,
      username: 'incoming-webhook',
      text: slackMessage,
      mrkdwn: true
    }

    var slackOpts = {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }

    await fetch(slackWebhook, slackOpts)

    const response = {
      statusCode: 200,
      body: { message: 'posted to slack' }
    }

    // log the response status code
    logger.info(`${response.statusCode}: successful request`)
    return response
  } catch (error) {
    // log any server errors
    logger.error(error)
    // return with 500
    return errorResponse(500, 'server error', logger)
  }
}

exports.main = main
```
