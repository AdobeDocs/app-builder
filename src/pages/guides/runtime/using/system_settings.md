# System Settings

When creating actions or debugging issues, it is important to know the system settings and limitations. Here are the ones you should consider when designing your actions.

| Limit | Description | Configurable | Default |  Range  | 
|---|---| --- | --- | --- |
| timeout | A container is not allowed to run longer than N milliseconds. Blocking calls (like web actions) can't run longer than 60,000 milliseconds (1 minute). Non-blocking calls can run up to 1,800,000 milliseconds | per action | 60,000 milliseconds | 100ms - 1,800,000ms  |
| memory | A container is not allowed to allocate more than N MB of memory | per action | 256MB | 128MB - 4096MB |
| minuteRate (ations)| no more than N actions may be invoked per namespace per minute. If exceded, the error is `429: TOO MANY REQUESTS` | not configurable, per namespace | 600/minute | 600/minute |
| logs | A container is not allowed to write more than N MB to stdout | per action | 10MB | 0MB - 10MB |
| concurrent | No more than N activations may be submitted per namespace either executing or queued for execution. If exceded, the error is `429: TOO MANY REQUESTS` | Not configurable, per namespace | 100 | 100 |
| action/container concurrency  | The number of action invocations send to the same container in parallel | per action | 200 |1 - 500 |
| codeSize | The maximum size of the action including dependencies, archived | not configurable, per action | 22MB | 0MB - 22MB |
| parameters | The maximum size of the parameters that can be attached | not configurable, per action/package/trigger | 1MB | 0 - 1MB |
| payload | The maximum POST content size plus any carried parameters for an action invocation or trigger firing | not configurable, per action/trigger | 1MB | 0 - 1MB |
| result | The maximum size of the action result | not configurable, per action | 1MB |  |
| minuteRate (triggers) | No more than N triggers may be fired per namespace per minute. If exceded, the error is `429: TOO MANY REQUESTS` | not configurable, per namespace | 600/minute | 600/minute |
| actionsSequenceMaxlength | No more than N actions can be chained in a sequence | not configurable, per namespace | 50 | 50 |
| list | The maximum number of entities that can be listed | per list request | 30 | 1 - 50 |

## Sequences and Timeout

Sequences that are invoked in a blocking manner (for example as a weba action have a hard limit for timeout and this limit can't be changed 60 seconds. Essentially, adding up the execution time taken by each action has to be 60 seconds or less.

Although the system lets you set a higher timeout on the sequnce, this value is ignored and the 60 seconds limit per action is enforced.

If one of your actions needs more than 60 seconds, then the only solution is to invoke a non-blocking action using the OpenWhisk npm module. So, using the same example, you could have `actionA` calling another action in a non-blocking manner. You can see an example of how to do this [here](asynchronous_calls.md).


## Using pre-warm containers or optimizing against cold-starts

You can maximize your chances of having the best low latency possible by creating actions that use the default Node version and a memory setting that is `256MB`, `512MB`, or `1024MB` - this way you avoid cold-starts in most cases. 

The system has a pool of containers with these settings waiting to be used for any incoming call that can't be sent to an existing running container and the action matches the container settings (Node version and memory setting). In this scenario, time will only be spent for injecting your action code as opposed to wait for both creating a container and then get the code injected.

## Timeout

If you want to change the default timeout setting, you need to do it explicitly. This is how you increase the timeout to 5 minutes:
`wsk action create action-name source.js -t 300000`

When you plan on increasing the timeout to more than one minute, you should be aware of:
1. Blocking calls (web actions for example) will timeout in one minute regardless of the timeout set and return an error to the caller. However, the action execution continues until it finishes or the timeout value is exceeded (at this point you get a developer error as the result). You will retrieve the result by polling for activationId and use the right activationId to get the result
2. Async calls respond immediately with an activationId. The execution continues, until the work is done or the timeout value is reached

## Activations TTL

The activation TTL (Time To Live) is seven days. This is a system setting, not a user setting (it can't be changed by developers).

Thus, if you don't see any activations or not seeing an activation you know that has happened, it could be that they happend more than 7 days ago.
