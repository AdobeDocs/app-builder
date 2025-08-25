---
title: App Builder State SDK
description: Code snippets demonstrating how to read and write key-value pairs using the Adobe App Builder State SDK, including sample curl requests.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- State SDK
# --- FAQs ---
faqs:
- question: How do I read a value by key using the App Builder State SDK?
  answer: Use the State SDK's get method with the desired key to retrieve its value asynchronously.
- question: How can I write a key-value pair into the State SDK?
  answer: Use the State SDK's put method to store a key-value pair, ensuring keys that exist are handled correctly.
- question: What happens if I try to write a key that already exists?
  answer: The sample code returns the existing value without overwriting it; you can modify this behavior if needed.
- question: How are errors handled in the State SDK actions?
  answer: The sample includes error logging and returns appropriate HTTP status codes for client or server errors.
- question: How can I test these State SDK actions quickly?
  answer: Use the provided sample curl commands to read or write state data from the command line.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: App Builder Code Snippets - App Builder State SDK
---
# App Builder State SDK

## Read a value by key from the State SDK

```javascript
/**
 * Read a value by key from the State SDK
 *
 * Sample curl request:
 * curl --location --request GET 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/state-read?key=name'
 */
const { Core, State } = require('@adobe/aio-sdk')
const { errorResponse, stringParameters, checkMissingRequestInputs } = require('../../utils')

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    // 'info' is the default level if not set
    logger.info('Calling the main action')

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params))

    // check for missing request input parameters and headers
    const requiredParams = ['key']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const state = await State.init()

    const valueObj = await state.get(params.key)
    let value = null
    if (valueObj){
      value = valueObj.value
    }
    logger.debug(`value=${value}`)

    const response = {
      statusCode: 200,
      body: {
        key: params.key,
        value
      }
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

## Write a key-value pair into the State SDK

```javascript
/**
 * Write a key-value pair into the State SDK
 *
 * Sample curl request:
 * curl --location --request POST 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/state-write' \
 * --header 'Content-Type: application/json' \
 * -- data-raw '{
 *     "key": "name",
 *     "value": "James Bond"
 * }'
 */
const { Core, State } = require('@adobe/aio-sdk')
const { errorResponse, stringParameters, checkMissingRequestInputs } = require('../../utils')

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    // 'info' is the default level if not set
    logger.info('Calling the main action')

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params))

    // check for missing request input parameters and headers
    const requiredParams = ['key', 'value']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const state = await State.init()
    const val = await state.get(params.key)
    let result
    // if key already exists, return its value
    if (val != null) {
      result = `reading ${params.key}=${val.value}`
    } 
    // else, save the k-v pair
    else {
      await state.put(params.key, params.value)
      result = `writing ${params.key}=${params.value}`
    }

    logger.debug(result)

    const response = {
      statusCode: 200,
      body: {
        key: params.key,
        value: params.value,
        message: result
      }
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
