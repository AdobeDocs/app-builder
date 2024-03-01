# Retrieve Action Invocation Results

The activation record contains information that helps you understand what happened: activation ID (the unique indentifier), namespace and action name, logs (if any), response (a dictionary that contains the status, success, and result).

## Activations TTL

The activation TTL (Time To Live) is seven days. This is a system setting, not a user setting (it can't be changed by developers).

Thus, if you don't see any activations or not seeing an activation you know that has happened, it could be that they happend more than 7 days ago.

## Example

Assuming that you&rsquo;ve invoked an action called `hello`, this is how you retrieve the latest activations:

`wsk activation list`

The result will be a list of activation IDs (if any) and the action invoked for each:

```
e9932762894d4ccf932762894d6ccff4 hello            
c76dbe66e9b04ad5adbe66e9b06ad541 hello            
[]...]
```

You can retrieve the whole activation record by running `wsk activation get <activation id>`:

```
wsk activation get e9932762894d4ccf932762894d6ccff4
ok: got activation e9932762894d4ccf932762894d6ccff4
{
    "namespace": "your-namespace",
    "name": "hello",
    "version": "0.0.20",
    "subject": "your-namespace",
    "activationId": "e9932762894d4ccf932762894d6ccff4",
    "start": 1542232412321,
    "end": 1542232412366,
    "duration": 45,
    "response": {
        "status": "success",
        "statusCode": 0,
        "success": true,
        "result": {
            "body": {
                "payload": {
                    "message": "hello world!"
                }
            },
            "statusCode": 200
        }
    },
    "logs": [],
    "annotations": [
        {
            "key": "path",
            "value": "your-namespace/hello"
        },
        {
            "key": "waitTime",
            "value": 23
        },
        {
            "key": "kind",
            "value": "nodejs:10-fat"
        },
        {
            "key": "limits",
            "value": {
                "logs": 10,
                "memory": 256,
                "timeout": 60000
            }
        },
        {
            "key": "initTime",
            "value": 40
        }
    ],
    "publish": false
}
```

Or you can extract a specific part from the activation record:

```
// just the result
wsk activation result <activation ID>

// just the logs
wsk activation logs <activation ID>
```

## Retrieving Activations for Blocking Successful Calls

At scale, when you run millions of activations in a day, it may be difficult to extract the activations that failed in order to debug them. To help with this task, the system skips persisting the activation that succeeded. 

The exceptions are asynchronous actions that are invoked in a non-blocking fashion. Their results are persisted regardless 
so that you can extract the response of the action at a later time. 

You can still view the number of executions, please see the [Logging and Monitoring](https://github.com/AdobeDocs/adobeio-runtime/blob/master/guides/logging_monitoring.md) section. 

However, during development it is important to have access to all activation results. You can enable this by setting in the request the extra logging header to `on`: 
```
X-OW-EXTRA-LOGGING: on
``` 

> It's not recommended to use the extra logging headers in the production environment as invocation performance can be impacted. 


## Retrieving Activations for Non-blocking Calls

When you execute a non-blocking action (async action), the action returns immediately the activation ID. If you query for the result or logs before the action finished the execution you get an error:
```
wsk activation get 1d24121f91384740a4121f91389740f0
error: Unable to get activation '1d24121f91384740a4121f91389740f0': The requested resource does not exist. (code myM2aaCufgIcnjnrbNIHztNmhL2HvFia)


wsk activation logs c8c4f354c1824f2c84f354c182ef2cdb
error: Unable to get logs for activation 'c8c4f354c1824f2c84f354c182ef2cdb': The requested resource does not exist. (code nCPo4KRbYmvOTcwPQVfDJdrwtJpv1c3d)
```

This should give you enough tools to debug your first actions. If you want to read more, take a look at the [Logging and Monitoring](../guides/logging_monitoring.md 'Logging and Monitoring') page.
