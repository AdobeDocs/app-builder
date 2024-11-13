```yaml
keywords:
  - [need keywords]
title: How I/O Runtime works
```

# How Adobe I/O Runtime works

Adobe I/O Runtime is based on the open source Apache OpenWhisk platform, and uses the OpenWhisk architecture to provide function-as-a-service. Here is a high-level look at the architecture:

<img src="https://developer.adobe.com/runtime/docs/static/2f65d806954291bfd2a474f3c8b2f9f4/73c8b/howitworks_f01.png" title="The OpenWhisk architecture" alt="The OpenWhisk architecture" data-align="center">

The figure shows how Runtime (via OpenWhisk) is set up to respond to events and direct invocations. Whether the event comes from an external or internal source, it is associated with a trigger, which invokes an action according to any rules that are applied. Actions can also be invoked directly through the Runtime (OpenWhisk) CLI or the REST API.

Actions in Adobe I/O Runtime are written in JavaScript/Node.js. When Runtime receives a trigger, it instantiates and executes the associated action; the more triggers Runtime receives, the more actions it executes. Actions may be chained into sequences without adding code, by piping the output of one action to the input of the next.

Once an action is complete, its instantiation is disposed, so there’s no need to maintain state between actions. And since code isn’t maintained in memory between instantiations, there’s no cost while the code isn’t computing. This makes Runtime very economical for the app developer, and also inherently scalable: there’s no limit to the number of actions that can be invoked, and the actions invoked always correspond to the trigger rate. 

Compare this approach to traditional long-running VMs or containers, which need to be architected for resiliency by provisioning multiple VMs or containers running in parallel to take over if a VM or container fails. Such architectures incur the costs of continuous uptime, and require expertise and dedicated resources to design and configure them properly and keep them running.

## Next step

For a step-by-step tutorial on creating, deploying, and testing your first Runtime action, start with [Set up Your Environment](setup.md).
