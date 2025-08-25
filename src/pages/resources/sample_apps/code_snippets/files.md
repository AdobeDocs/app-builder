---
title: App Builder Files SDK
description: Sample code snippets demonstrating how to use the Adobe I/O App Builder Files SDK to list files, generate presigned URLs, download files with redirect, and upload files.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Files SDK
# --- FAQs ---
faqs:
- question: How do I list files using the Files SDK?
  answer: Use the Files SDK's list method with an optional 'path' parameter to retrieve files stored in a specified directory.
- question: How can I generate a presigned URL for a private file?
  answer: Call generatePresignURL on the file location with an optional expiry time to get a temporary URL for file access.
- question: How do I return a file with a redirect using the Files SDK?
  answer: Generate a presigned URL and return a response with a 302 status code and the presigned URL in the 'location' header.
- question: What parameters are required to upload a file using the Files SDK?
  answer: You need to provide both 'fileUrl' (source URL of the file) and 'fileLocation' (target path in Files SDK) parameters.
- question: How are errors handled in these Files SDK examples?
  answer: Errors are logged and returned with appropriate HTTP status codes like 400 for client errors and 500 for server errors.
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: App Builder Code Snippets - App Builder Files SDK
---
# App Builder Files SDK

## Demonstrates how to return a list of files stored with the Files SDK

```javascript
/**
 * Return a list of files stored with the Files SDK
 *
 * Sample curl request:
 * curl --location --request GET 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/listfiles'
 * 
 * You could add the query param "path" to reduce the scope of results within a directory.
 */
const { Core, Files } = require('@adobe/aio-sdk')
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
    const requiredParams = ['path']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const files = await Files.init()
    const fileList = await files.list(params.path)
    logger.debug(fileList)

    const response = {
      headers: {},
      body: {
        fileList
      },
      statusCode: 200
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

## Return a presigned URL of a private file from the Files SDK

```javascript
/**
 * Return a presigned URL of a private file from the Files SDK
 *
 * Sample curl request:
 * curl --location --request GET 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/downloadfile-presigned?fileLocation=/mydir/test.csv'
 */

const { Core, Files } = require('@adobe/aio-sdk')
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
    const requiredParams = ['fileLocation']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const files = await Files.init()
    const presignUrl = await files.generatePresignURL(params.fileLocation, { expiryInSeconds: 60 })
    logger.debug(presignUrl)

    const response = {
      headers: {},
      body: {
        presignUrl
      },
      statusCode: 200
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

## Return a file from the Files SDK with Redirect

```javascript
/**
 * Return a file from the Files SDK with Redirect
 */
const { Core, Files } = require('@adobe/aio-sdk')
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
    const requiredParams = ['fileLocation']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const files = await Files.init()
    // Generate a presigned URL of the file that is valid for 60 seconds only
    const presignUrl = await files.generatePresignURL(params.fileLocation, { expiryInSeconds: 60 })
    logger.debug(presignUrl)

    const response = {
      headers: { location: presignUrl }, 
      statusCode: 302
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

## Upload a file to the Files SDK

```javascript
/**
 * Upload a file to the Files SDK
 *
 * Sample curl request:
 * curl --location --request POST 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/uploadfile' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "fileUrl": "https://url.of.file",
 *     "fileLocation": "/mydir/test.csv"
 * }'
 */
const { Core, Files } = require('@adobe/aio-sdk')
const fetch = require('node-fetch')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../../utils')

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
    const requiredParams = ['fileUrl', 'fileLocation']
    const requiredHeaders = []
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    const originalFile = await fetch(params.fileUrl)

    const files = await Files.init()
    logger.info('File SDK init done')
    const fileLocation = params.fileLocation
    await files.write(fileLocation, originalFile.body)
    const props = await files.getProperties(fileLocation)
    logger.debug(JSON.stringify(props))

    const response = {
      statusCode: 200,
      body: {}
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
