# Managing application logs

Logging is a crucial need for every application developer. While it is a great add-on to debugging features at implementation time, it also provides information about the behavior of an application that has been deployed to a specific environment such as `Stage` or `Production`.
This information will be precious to investigate and resolve application issues and outages happening remotely from the developer's machine.

Project Firefly [SDK](https://github.com/adobe/aio-sdk) and [CLI](https://github.com/adobe/aio-cli) provide commodities for developers to log and retrieve information and data from their applications.

# Logging with Project Firefly SDK

Project Firefly [SDK](https://github.com/adobe/aio-sdk) provides a [core Logging library](https://github.com/adobe/aio-lib-core-logging), which defines an [API](https://github.com/adobe/aio-lib-core-logging/blob/master/doc/api.md) on top of the popular [WinstonJS](https://www.npmjs.com/package/winston) and [Debug](https://www.npmjs.com/package/debug).

The [Logging library]((https://github.com/adobe/aio-lib-core-logging)) can be used in Runtime actions or plain libraries. For example, it is used by Project Firefly SDK itself:

- In higher-level SDK libraries, for example the [Realtime Customer Profile](https://github.com/adobe/aio-lib-customer-profile) SDK library
- In shared Runtime actions, for example the [Token Vending Machine](https://github.com/adobe/aio-tvm)

Project Firefly [core Logging library](https://github.com/adobe/aio-lib-core-logging) can be used together with Project Firefly [core Error library](https://github.com/adobe/aio-lib-core-errors), which purpose is to streamline error management across the [SDK](https://github.com/adobe/aio-sdk) and custom Project Firefly Applications which are using it.

The errors log messages will then output specific codes defined by each Project Firefly [SDK](https://github.com/adobe/aio-sdk) library.
Again, the [Realtime Customer Profile](https://github.com/adobe/aio-lib-customer-profile) SDK library is a good example that uses Project Firefly [Logger](https://github.com/adobe/aio-lib-core-logging) with Project Firefly [Errors](https://github.com/adobe/aio-lib-core-errors).

# Accessing logs with Project Firefly CLI
