---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
  - Log Forwarding
  - Monitoring
---

# Managing Application Logs

Logging is one of the most important tools in a developer's tool kit. Application logs allow a developer to debug an application in development as well as monitor it in production. The App Builder [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) provide significant out-of-the-box capabilities to facilitate logging from code and for viewing and forwarding those applications logs as needed.

## Logging with App Builder SDK

The App Builder [SDK](https://github.com/adobe/aio-sdk) provides a [core logging library](https://github.com/adobe/aio-lib-core-logging) that defines an [API](https://github.com/adobe/aio-lib-core-logging/blob/master/doc/api.md) on top of the popular [WinstonJS](https://www.npmjs.com/package/winston) and [Debug](https://www.npmjs.com/package/debug) npm packages. The core logging library can be used in a Runtime action or in other libraries.

Furthermore, the App Builder core logging library can be used with the App Builder [core errors library](https://github.com/adobe/aio-lib-core-errors). The App Builder core errors library aims to streamline error management across the [AIO SDK](https://github.com/adobe/aio-sdk) and App Builder applications. When the core errors library is used in conjunction with the core logging library, the error log messages output specific error codes, as defined by each App Builder [SDK](https://github.com/adobe/aio-sdk), that further aid debugging.

Both the core logging library and the core errors library can be directly used in an App Builder application, a Runtime action, and other libraries. For example, both libraries are used in:

- The App Builder [SDK](https://github.com/adobe/aio-sdk) itself.
- Higher-level SDK libraries, such as the [Real-time Customer Profile](https://github.com/adobe/aio-lib-customer-profile) SDK library.
- Shared Runtime actions, such as the [Token Vending Machine](https://github.com/adobe/aio-tvm).

<InlineAlert slots="text"/>

When a new App Builder application is bootstrapped from the [AIO CLI](https://github.com/adobe/aio-cli) using the `aio app init` command, the [generated boilerplate action code](https://github.com/adobe/generator-aio-app) integrates with both the core and errors logging libraries out-of-the-box. 

## Accessing logs with App Builder CLI

App Builder [CLI](https://github.com/adobe/aio-cli) exposes application logs to the developers at different levels:
- at an App Builder application level using the `aio app` plugin.
- at a Runtime action level using the `aio runtime` plugin.

### App Builder app plugin

The AIO CLI [App plugin](https://github.com/adobe/aio-cli-plugin-app) provides the `aio app logs` command, which fetches the logs for an App Builder application deployed to the App Builder Workspace that is configured in the current working folder:

- The command accepts an integer argument with the `--limit` flag that allows fetching logs from the last `n` Runtime activations.
- The command accepts an action name with the `--action` flag that allows fetching logs from a particular action within the App Builder application.
- The command allows a `--tail` or `--watch` flag that would continuously fetch logs as they appear.

To see more command options, run `aio app logs --help` on your terminal.

The `aio app logs` command can be used either by a developer or even by a script running in a [CI/CD pipeline](deployment/ci_cd_for_firefly_apps.md). Furthermore, the command can be used for App Builder Applications deployed on Runtime or even those running locally through the `aio app run --local` command (see the [Deployment guide](deployment/index.md)).

### Runtime plugin

The AIO CLI [Runtime plugin](https://github.com/adobe/aio-cli-plugin-runtime) operates at the level of a Runtime action. When a [Runtime action is invoked](https://github.com/adobe/aio-cli-plugin-runtime#binrun-runtimeactioninvoke-actionname), the corresponding [activation's logs](https://github.com/adobe/aio-cli-plugin-runtime#binrun-runtimeactivationlogs-activationid) can be fetched using the `aio runtime logs <activation_id>` command.

This command also offers command options to `--watch` or `--tail` the logs among other options (run `aio runtime logs --help`). 

Again, the `aio runtime logs` command can be used by a developer or by a script running in a [CI/CD pipeline](deployment/ci_cd_for_firefly_apps.md). Furthermore, the command can be used for App Builder Applications deployed on Runtime or even those running locally through the `aio app run --local` command (see the [Deployment guide](deployment/index.md)).
