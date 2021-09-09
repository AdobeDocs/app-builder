---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/duynguyen 
---

# Lesson 1: Bootstrap a Headless App

First of all, you need a new headless app created with AIO CLI. This app only needs a simple action to test the cron job, so all other components are deselected.
Follow this [Creating your First Project Firefly Application](https://www.adobe.io/project-firefly/docs/getting_started/first_app/)

![app-init](assets/app-init.png)

Now let's go to the action code at `actions/generic/index.js` to simplify what it does. We make it print the current execution time to logs and return it in the result.

```javascript
const { Core } = require('@adobe/aio-sdk')

async function main (params) {
  const logger = Core.Logger('main', { level: 'info' })

  try {
    logger.info('Calling the main action')
    const currentTime = new Date()
    logger.info(`Current time is ${currentTime.toLocaleString()}.`)

    return {
      timeInMilliseconds: currentTime.getTime(),
      timeInString: currentTime.toLocaleString()
    }
  } catch (error) {
    logger.error(error)
    return { error }
  }
}

exports.main = main
```

Because the action is only invoked by the internal alarms, it does not need to be exposed as a web action. That would prevent the action to be accessed by unprivileged users. Your manifest file should look the same as below.

```yaml
application:
  actions: actions
  web: web-src
  runtimeManifest:
    packages:
      my-app:
        license: Apache-2.0
        actions:
          generic:
            function: actions/generic/index.js
            web: 'yes'
            runtime: 'nodejs:14'
```

In order to test the action, you could execute `aio app deploy` in the VSCode terminal. Once the deployment is finished, run `aio rt action invoke your-app-name/generic`, and then verify its result and logs using `aio rt activation get ID` and `aio rt activation logs ID` (`ID` is available in the output of the invoke command earlier). Below is an extract of result from the activation info.

![activation-get](assets/activation-get.png)

