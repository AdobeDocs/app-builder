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
