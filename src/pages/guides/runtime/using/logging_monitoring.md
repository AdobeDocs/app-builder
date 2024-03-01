# Logging and Monitoring

The `wsk` CLI offers a number of tools you can use to debug your actions while running them on Adobe I/O Runtime.

You can retrieve the latest activations in a namespace by running:
```
wsk activation list
```
Having an activation ID, you can retrieve the activation result running:
```
wsk activation get <activation ID>
```
If you send data to logs from your actions (using `console.log()` in your code), you&rsquo;ll get this information as part of the activation record, inside the `logs` field. The shortcut command to get the logs is:
```
wsk activation logs <activation ID>
//output sample
2018-11-14T22:23:00.002Z       stdout: 1542234180001: param = John Doe
```

# Retrieving Activations for Blocking Successful Calls

At scale, when you run millions of activations in a day, it may be difficult to extract the activations that failed in order to debug them. To help with this task, the system skips persisting the activation that succeeded. 

The exceptions are asynchronous actions that are invoked in a non-blocking fashion. Their results are persisted regardless 
so that you can extract the response of the action at a later time. 

However, during development it is important to have access to all activation results. You can enable this by setting in the request the extra logging header to `on`: 
```
X-OW-EXTRA-LOGGING: on
``` 

> It's not recommended to use the extra logging headers in the production environment as invocation performance can be impacted. 

## Understanding The Error Codes

When you have action invocations that fail, sometimes the best way to understand the reason behind the failing is to take a look at the error object part of the activation record - running `wsk activation get <activationId>` you will get the activation record.

The following are the possible values and the meaning for `error` in `response.status`:
* `success`: everything is okay (status is true)
* `action developer error`: A container or action code error occurred, e.g. failed to start action (status is false). This is usually the case if the nodejs action code has a syntax error or missing dependencies
* `application error`: Action ran, but there was an error thrown in the action code (deliberatly or not) that was handled by I/O Runtime (status is false).
* `whisk internal error`: Action did not run, an internal I/O Runtime system error occurred while starting the action, more info in `response.status.result.error`

## 3rd-Party Tools

I/O Runtime doesn’t offer a configuration to send activations and logs to an external system, something like Splunk, Datadog or New Relic. This is something we are considering to offer in the future. 

Although there is no out-of-the-box integration, there are still ways you can push data from I/O Runtime to an external tool in order to monitor and debug your actions. 

One tool that made it easy to do this is [Epsagon](https://epsagon.com/?utm_source=adobe.io&utm_medium=referral&utm_campaign=adobe_io_docs). Epsagon built an integration for OpenWhisk based systems (I/O Runtime is built on top of the open source project OpenWhisk) that makes super easy to see your activations, errors, latency information and logs in their system. Check this [guide](https://docs.epsagon.com/docs/openwhisk?utm_source=adobe.io&utm_medium=referral&utm_campaign=adobe_io_docs) or this [video presentation](https://www.youtube.com/watch?v=4iprbivqrxQ&t=1517s) if you want to find more. 

## Debugging Locally

Check this [page](debugging.md) if you want to learn how to debug your actions locally.