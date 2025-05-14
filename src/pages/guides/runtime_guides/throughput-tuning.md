# Throughput Tuning

## Containers

### Setting concurrency

The main instrument for tuning how rapidly actions can be executed is the value you set for `action/container concurrency`. This is not related to the concurrent value per namespace or minuteRate value, although these two enforce an upper limit on actions executed per minute in your namespace.

The default `action/container concurrency` value is `200` invocations of an action in the same container. If, for example, you plan to execute a `HelloWorld` action 100 times, either simultaneously or within minutes, the default value (`200`) means that the system will use one container rather than as many as 100.

This helps avoid cold-start issues. When the system has no containers left, it creates new ones - "cold starts" that add a lot of latency to your application.

You can set `action/container concurrency` to any value between `1` and `500`. Here, the limit is set to `100`:

```
aio rt:action:create actionName fileName.js -c 100
```

### Concurrency considerations

1. Containers are kept warm after for 5 minutes after an invocation finishes. For those 5 minutes, it is highly unlikely that invoking the same action will require a cold start.
2. Experiment with the value you set for concurrency limits. The default, `200`, is a good place to start, but a smaller or a larger value may be better depending on how much memory and other resources your action consumes.  
3. Be sure your code is designed to work when executed in parallel. For example, avoid using global variables to store values that may differ between invocations.
4. If an action works on a large data set that is not different from one invocation to another, a global variable can maximize the chances that the next execution can use it. But your code should handle the condition in which the variable is not initialized.
5. It is not guaranteed that all invocations will use the same container. In case of errors, for example, the existing container is destroyed and a new one created.
6. If your action code consumes a large amount of memory, you may need to set concurrency to a lower value to avoid exceeding the container's memory limit.
