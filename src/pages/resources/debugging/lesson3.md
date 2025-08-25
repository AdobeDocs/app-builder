---
title: Lesson 3: Managing Application Logs
description: Overview of logging capabilities in Adobe App Builder apps using the core Logging library and how to configure log levels.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Logging
# --- FAQs ---
faqs:
- question: How do I enable logging in my Adobe App Builder app?
  answer: Use the App Builder's core Logging library by requiring the logger in your code and configure the LOG_LEVEL input in your manifest.yml file to control log verbosity.
- question: Where can I set the log level for my application?
  answer: You can set the log level by specifying the LOG_LEVEL input in your manifest.yml file, for example, LOG_LEVEL: debug.
- question: Where can I learn more about the logging library used in Adobe App Builder?
  answer: Visit the App Builder's core Logging library GitHub page at https://github.com/adobe/aio-lib-core-logging for detailed documentation and usage examples.
contributors:
  - 'https://github.com/duynguyen'
---
# Lesson 3: Managing Application Logs

Logging is a useful add-on for debugging apps during development as well as at runtime. Both App Builder [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) provide capabilities for Developers to log and retrieve information and data from their apps.  

In our sample app, `logger` is used throughout the `hello` action. It is provided by the [App Builder's core Logging library](https://github.com/adobe/aio-lib-core-logging):

```javascript
const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })
```

You can control the log level by setting `LOG_LEVEL` input in the `manifest.yml` file.

```yaml
inputs:
  LOG_LEVEL: debug
```

Please refer to the [App Builder's core Logging library](https://github.com/adobe/aio-lib-core-logging) to learn more about using `logger` in your app. If you need more high-level information on this topic, review [Managing logs in App Builder Apps](../../guides/app_builder_guides/application_logging/logging.md).


