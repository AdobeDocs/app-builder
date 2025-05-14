# Throughput Tuning

## Containers

### Setting concurrency

The main instrument for tuning how rapidly actions can be executed is the value you set for `action/container concurrency`. This is not related to the concurrent value per namespace or minuteRate value, although these two enforce an upper limit on actions executed per minute in your namespace.

The default `action/container concurrency` value is `200` invocations of an action in the same container. If, for example, you plan to execute a `HelloWorld` action 100 times, either simultaneously or within minutes, the default value (`200`) means that the system will use one container rather than as many as 100.
