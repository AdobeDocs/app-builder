---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/duynguyen 
---

# Lesson 3: Managing Application Logs

Logging is a great add-on for debugging apps during development as well as at runtime. App Builder [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) provide commodities for developers to log and retrieve information and data from their apps.  

In our sample app, `logger` is used throughout the `hello` action. It is provided by the [Firefly's core Logging library](https://github.com/adobe/aio-lib-core-logging).

```javascript
const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })
```

You can control the log level by setting `LOG_LEVEL` input in the `manifest.yml` file.

```yaml
inputs:
  LOG_LEVEL: debug
```

Please refer to the [Firefly's core Logging library](https://github.com/adobe/aio-lib-core-logging) to learn more about using logger in your app. If you need more information on this topic on a high level, visit [Managing logs in Firefly Apps](https://raw.githubusercontent.com/AdobeDocs/project-firefly/master/guides/application_logging.md).

