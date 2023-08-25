---
keywords:
  - Logging
  - Log Forwarding
  - Monitoring
title: Guides
description: Logging is one of the most important tools in a developer's tool kit. Application logs allow a developer to debug an application in development as well as monitor it in production.
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

<InlineAlert slots="text" />

When a new App Builder application is bootstrapped from the [AIO CLI](https://github.com/adobe/aio-cli) using the `aio app init` command, the [generated boilerplate action code](https://github.com/adobe/generator-aio-app) integrates with both the core and errors logging libraries out-of-the-box.

## Accessing logs with App Builder CLI

App Builder [CLI](https://github.com/adobe/aio-cli) exposes application logs to the developers at different levels:
- At an App Builder application level using the `aio app` plugin.
- At a Runtime action level using the `aio runtime` plugin.

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

## Forwarding Application logs

Apart from viewing application logs using the AIO CLI, a developer can also configure an App Builder application to forward all application logs to a **customer-owned** log management solution. Forwarding logs has several benefits over retrieving logs through the AIO CLI, especially for applications deployed in Production or Staging environments. 

The supported log management solutions include:
1. Adobe I/O Runtime (default)
2. [Splunk Cloud](splunk_cloud.md)
3. [Splunk Enterprise](splunk_enterprise.md)
4. [Azure Log Analytics](azure_log_analytics.md)
5. [New Relic](new_relic.md)

_Visit the above links to view the steps to set up log forwarding with that solution._

### When to use Log forwarding

The following table outlines a quick comparison between storing logs in Adobe I/O Runtime vs. forwarding application logs to a log management solution of your choice.


|                    |  Storing logs in Adobe I/O Runtime  |  Forwarding application logs  |
|--------------------|-------------------------------------|-------------------------------|
| Setup              |  All workspaces default to storing logs in Runtime. Included in App Builder SKU.  |  Log Forwarding needs to be configured per workspace of an App Builder application. As a customer, you would need to bring in a log management solution you own. |
| When to use        |  Storing logs in Runtime is a good option for local development and when each developer works in their own workspace.  |  Forwarding logs is ideal for shared environments such as `Stage` and `Production` workspaces.  |
| Access to all logs |  Adobe I/O Runtime stores application logs for only failed or asynchronous activations.  |  Log forwarding allows you to gain access to **all** your application logs.  |
| Retrieving logs    |  The AIO CLI can be used to fetch logs stored in Adobe I/O Runtime.  |  Once logs are forwarded to your configured log management solution, they cannot be fetched using the AIO CLI. You can directly retrieve logs from your configured log management solution.  |
| Logging limits     |  Adobe I/O Runtime allows up to a maximum of 10 MB of log lines per activation beyond which log lines are truncated.  |  Adobe I/O Runtime allows up to a maximum of 10 MB of log lines per activation beyond which log lines are truncated.  |
| Throttling         |  The `x-ow-extra-logging` header directs Adobe I/O Runtime to store all application logs, but the header is meant to be used only in local development. Furthermore, overuse of the header is throttled at high log volumes.  |  Log Forwarding removes the need to use `x-ow-extra-logging` as all application logs are forwarded by design.  |
| Log retention      |  Logs stored in Adobe I/O Runtime are retained for 7 days.  |  Once logs are forwarded to your configured log management solution, you can choose to retain logs for a longer duration.   |
| Capabilities       |  AIO CLI provides the ability to view and tail application logs on a per application or activation level.  |  Most industry-leading log management solutions offer the ability to view logs, search through unstructured logs, and chart data extracted from logs. Forwarding logs further allows you to consolidate your App Builder application logs with the logs from the rest of your infrastructure for better correlation.  |

### Log Forwarding Commands

#### Setting Log Forwarding 

```
aio app config set log-forwarding
```

This command allows you to configure log forwarding for your workspace or reset it to store logs in Adobe I/O Runtime. 

Once a log forwarding configuration is successfully set, the log forwarding configuration is also stored in the `.aio` and `.env` files. Any changes made directly to the log forwarding configuration in the `.aio` or `.env` file would now be deployed when you run `aio app deploy`.

_Note: Running `aio app deploy --no-actions` or `aio app deploy --no-log-forwarding-update` would skip deploying any changes made to the local log forwarding configuration._

Please visit the individual guides to set up log forwarding for your log management solution of choice.
1. [Splunk Cloud](splunk_cloud.md)
2. [Splunk Enterprise](splunk_enterprise.md)
3. [Azure Log Analytics](azure_log_analytics.md)
4. [New Relic](new_relic.md)

#### Viewing the current Log Forwarding configuration

```
aio app config get log-forwarding
```
This command outputs the current log forwarding configuration for your workspace and compares it to the locally set log forwarding configuration. If log forwarding is not configured for your workspace, then Adobe I/O Runtime would be returned by default.

_Note: We never return the configured secret from our servers for security reasons._

#### Debugging Log Forwarding

```
aio app config get log-forwarding errors
```
This command outputs any errors that occurred when application logs were being forwarded to your configured log management solution. The command shows the most recent 10 log forwarding errors for the current log forwarding configuration, up to 30 days.
