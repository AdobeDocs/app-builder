# Managing application logs

Logging is a crucial need for every application developer. While it is a great add-on for debugging the code at implementation time, it also provides information about the behavior of an application that has been deployed to a specific environment such as `Stage` or `Production`.
The application logs are important assets to facilitate the investigation and resolution of application-specific issues and outages happening remotely from the developer's machine. Project Firefly [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) provide commodities for developers to log and retrieve information and data from their custom applications.

## Logging with Project Firefly SDK

Project Firefly [SDK](https://github.com/adobe/aio-sdk) provides a [core Logging library](https://github.com/adobe/aio-lib-core-logging), which defines an [API](https://github.com/adobe/aio-lib-core-logging/blob/master/doc/api.md) on top of the popular [WinstonJS](https://www.npmjs.com/package/winston) and [Debug](https://www.npmjs.com/package/debug).

The [Logging library](https://github.com/adobe/aio-lib-core-logging) can be used in Runtime actions or plain libraries. For example, it is used by Project Firefly SDK itself:

- In higher-level SDK libraries, for example the [Realtime Customer Profile](https://github.com/adobe/aio-lib-customer-profile) SDK library
- In shared Runtime actions, for example the [Token Vending Machine](https://github.com/adobe/aio-tvm)

Project Firefly [core Logging library](https://github.com/adobe/aio-lib-core-logging) can be used together with Project Firefly [core Error library](https://github.com/adobe/aio-lib-core-errors), which purpose is to streamline error management across the [SDK](https://github.com/adobe/aio-sdk) and custom Project Firefly Applications which are using it.

The errors log messages will then output specific codes defined by each Project Firefly [SDK](https://github.com/adobe/aio-sdk) library.
Again, the [Realtime Customer Profile](https://github.com/adobe/aio-lib-customer-profile) SDK library is a good example that uses Project Firefly [Logger](https://github.com/adobe/aio-lib-core-logging) with Project Firefly [Errors](https://github.com/adobe/aio-lib-core-errors).

Both Project Firefly [core Logging library](https://github.com/adobe/aio-lib-core-logging) and Project Firefly [core Error library](https://github.com/adobe/aio-lib-core-errors) can also be used directly in Project Firefly Applications.

When bootstrapping a new custom application from the [CLI](https://github.com/adobe/aio-cli) `aio app init` command, the developer is invited to select [action generators](https://github.com/adobe/generator-aio-app), which will create the boilerplate code for the custom back-end actions of the application. These ones integrate out-of-the-box with these two core Project Firefly [SDK](https://github.com/adobe/aio-sdk) features.

## Accessing logs with Project Firefly CLI

Project Firefly [CLI](https://github.com/adobe/aio-cli) exposes application logs to the developers at different levels.

### Project Firefly app plugin

The CLI [App plugin](https://github.com/adobe/aio-cli-plugin-app) provides the `aio app logs` command, which fetches the logs for a Project Firefly application deployed to the Project Firefly Workspace that is configured in the current working folder:

- The command accepts an integer argument. It defines the number of last Runtime activation logs to fetch from the Runtime namespace bound to the Project Firefly Workspace to which the application has been deployed.
- The command can be used either by a developer or by a script running in a [CI/CD pipeline](deployment/ci_cd_for_firefly_apps.md).
- The command can be used either for deployed Project Firefly Applications, or for Applications running locally with `aio app run --local` (see the [Deployment guide](deployment/index.md)).

### Runtime plugin

The CLI [Runtime plugin](https://github.com/adobe/aio-cli-plugin-runtime) operates at a lower level than the [App plugin](https://github.com/adobe/aio-cli-plugin-app). It directly exposes Runtime primitives and does not interact with higher-level Project Firefly applications and related concepts.

It can be used to retrieve [activations](https://github.com/adobe/aio-cli-plugin-runtime#binrun-runtimeactivation) and [activation logs](https://github.com/adobe/aio-cli-plugin-runtime#binrun-runtimeactivationlogs-activationid) from [invoked actions](https://github.com/adobe/aio-cli-plugin-runtime#binrun-runtimeactioninvoke-actionname).

In that case, the activations and logs will not be aggregated by application, but fetched individually for a more fine-grained control. The [Runtime plugin](https://github.com/adobe/aio-cli-plugin-runtime) provides the same possibilities than the [App plugin](https://github.com/adobe/aio-cli-plugin-app):

- The commands can be used either by a developer or by a script running in a [CI/CD pipeline](deployment/ci_cd_for_firefly_apps.md).
- The commands can be used either for deployed Runtime actions, or for actions running locally with `aio app run --local` (see the [Deployment guide](deployment/index.md)).

Project Firefly will provide more Logging and Monitoring capabilities as we are expanding both [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) for a broader panel of custom application use-cases.
