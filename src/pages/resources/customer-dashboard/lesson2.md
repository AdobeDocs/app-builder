---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/duynguyen 
---

# Lesson 2: Explore the Firefly App

Within the newly created app, you have seen the `.env` file which contains your credentials for running the app. Let's explore further.

Firstly, `package.json` is the [crucial part](https://docs.npmjs.com/creating-a-package-json-file) of almost every NodeJS project. It contains the list of dependencies, version, reproducible builds, etc.

Then `app.config.yaml` is the cockpit of your Firefly app backend. It lists the declaration of serverless actions including name, source files, runtime kind, default params, annotations, and so on. You can find the grammar of writing manifest [here](https://github.com/apache/openwhisk-wskdeploy/blob/master/docs/programming_guide.md#wskdeploy-utility-by-example).

```yaml
get-profiles:
  function: actions/get-profiles/index.js
  web: 'yes'
  runtime: 'nodejs:14'
  inputs:
    LOG_LEVEL: debug
    tenant: $CAMPAIGN_STANDARD_TENANT
    apiKey: $SERVICE_API_KEY
  annotations:
    require-adobe-auth: true
    final: true
```

Currently your app only has one action `get-profiles`.
* Source code is at `actions/get-profiles/index.js`
* It is a [web action](/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#invoking-actions)
* The action will be run in the `nodejs:12` [runtime container on I/O Runtime](/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/runtimes.md)
* It has some [default params](/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#working-with-parameters) such as `LOG_LEVEL`, `tenant`, `apiKey`, which are automatically available in the `params` object of the action without passing it to the action for every invocation. The `final` annotation set as `true` tells that those params are immutable.
* Setting the `require-adobe-auth` annotation as `true` enables this action to be protected by Adobe IMS user token in the request header. Without it, the action will return `401 Unauthorized` error.

Now let's have a deeper look at the action's source code.

```javascript
/**
 * This action gets a list of customer profiles the Adobe Campaign Standard API
 */

const { Core } = require('@adobe/aio-sdk')
const { CampaignStandard } = require('@adobe/aio-sdk')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

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
    const requiredParams = ['apiKey', 'tenant']
    const errorMessage = checkMissingRequestInputs(params, requiredParams, ['Authorization'])
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger)
    }

    // extract the user Bearer token from the input request parameters
    const token = getBearerToken(params)

    // initialize the sdk
    const campaignClient = await CampaignStandard.init(params.tenant, params.apiKey, token)

    // get profiles from Campaign Standard
    const profiles = await campaignClient.getAllProfiles()
    logger.debug('profiles = ' + JSON.stringify(profiles, null, 2))
    const response = {
      statusCode: 200,
      body: profiles
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

What happens here, is that the [action](https://github.com/apache/openwhisk/blob/master/docs/actions-nodejs.md) exposes a `main` function, which accepts a list of params from the client. It checks that required params for using the Campaign Standard SDK are present in this list, including the `Authorization` header for authentication against Adobe IMS.  
An access token is retrieved to initiate the SDK client instance, which is then used to retrieve the list of customer profiles using the [getAllProfiles()](https://docs.adobe.com/content/help/en/campaign-standard/using/working-with-apis/managing-profiles/retrieving-profiles.html) function. Finally the profiles are returned to the client. This whole execution is wrapped within a try-catch block, so that errors are handled appropriately.

Next, let's see how the web UI communicates with the backend. All web assets are placed in the `web-src` folder.  
Beside a few auto-generated files that are useful for running your app on Adobe Experience Cloud (ExC) Shell, `App.js` is the extension point of your UI.  
By default, it contains 3 pages: Home and About are just static pages showing listing reference docs, and ActionsForm lists all available backend actions, allows you to select the action to be invoke, and once you click on the "invoke" button, it shows the invocation results in the browser console.

```javascript
<View gridArea='content' padding='size-200'>
  <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route path='/actions'>
      <ActionsForm runtime={props.runtime} ims={props.ims} />
    </Route>
    <Route path='/about'>
      <About></About>
    </Route>
  </Switch>
</View>
```

