# How Adobe I/O Runtime Works

Adobe I/O Runtime is based on OpenWhisk, and uses its architecture to provide function-as-a-service. Here is a look at the high-level OpenWhisk architecture:

![The OpenWhisk architecture](../../img/howitworks_f01.png 'The OpenWhisk architecture')
_The OpenWhisk architecture_

This figure shows how Runtime (via OpenWhisk) is set up to respond to events and direct invocations. Whether the event comes from an external or internal source, it gets associated with a trigger, which invokes an action in accordance with whatever rules are applied. You can also invoke an action directly using the Runtime (OpenWhisk) CLI or the REST API.

Actions in Adobe I/O Runtime are written in JavaScript/Node.js. When Runtime receives a trigger, it instantiates and executes the associated action; the more triggers Runtime receives, the more actions are executed. Also, you can chain actions together by creating a sequence; this doesn&rsquo;t require writing any code at all. With a sequence, you can execute a number of actions in series, piping the output of one action to the input of the next.

When each action is complete, the instantiation is disposed, so there&rsquo;s no maintenance of state between actions. And, because the code isn&rsquo;t maintained in memory bewteen instantiations, there&rsquo;s no cost while the code isn&rsquo;t computing. This makes Runtime very economical for the app developer, and also inherently scalable; there&rsquo;s no limit to the number of actions that can be invoked, and the actions invoked always correspond to the trigger rate. This is very different from traditional long-running VMs or containers, which need to be architected for resiliency&mdash;provisioning multiple VMs or containers that run in parallel to take over if one VM or container fails. Such architectures incur the costs of constant uptime and require expertise and dedicated resources to design and configure properly and keep running.

## The process in detail

Here we&rsquo;ll trace the entire process, beginning with an event and finishing with the complete action executed in response. OpenWhisk (and therefore Runtime) is built on well-established open-source tools such as Nginx, Docker, Kafka, and CosmosDB. These are assembled together into a seamless pipeline to provide serverless event-based processing.

### Start with an action

Before you can trace the process, you need an action against which to trigger an event. Actions are functions, so a simple JavaScript function will do.

> If you want to follow along with these steps, you&rsquo;ll need to get access to Runtime, then install and configure the Runtime (OpenWhisk) CLI. To do so, see [Creating Actions](../using/creating_actions.md 'Creating Actions').

Create the following function in any editor:

```js
function main() {
  console.log('Hello World');
  return { hello: 'world' };
}
```

Save it as **hello.js.** This function will print "Hello World" to stdout and return a JSON object containing the key-value pair "hello: world".

Next, you need to upload this function to Runtime as an action. In the CLI, type the following command:

`aio rt:action:create helloAction <path>/hello.js`

Now that the action is created, it&rsquo;s ready to be invoked via an HTTP call or associated with a trigger. For this exercise, however, you&rsquo;ll invoke it directly, again by means of the CLI:

`aio rt:action:invoke helloAction --result`

### Trace the process

Now that you&rsquo;ve got an action and invoked it, how is it actually processed? As an HTTP request, of course. Since the Runtime (OpenWhisk) system is an open REST API and completely HTTP-based, the invoke you sent in the CLI is translated into an HTTP request against Runtime. The command translates roughly into the following POST:

```
POST /api/v1/namespaces/$userNamespace/actions/helloAction
Host: $openwhiskEndpoint
```

Note the $userNamespace variable. You can&rsquo;t submit requests to Runtime without having access to a namespace; specifically, the same namespace into which the action was created. When you&rsquo;re configured for an account in Runtime, you&rsquo;re given a personal namespace.
![Internal process flow](../../img/howitworks_f02.png 'Internal process flow')
_Internal process flow_

#### Receiving: nginx

[Nginx](https://www.nginx.com/ 'Nginx') is a reverse proxy and HTTP server. The OpenWhisk architecture uses it to terminal SSL and forward the HTTP request to the next component in the processing loop.

#### Interpreting: the Controller

The Controller is the core component of Runtime (OpenWhisk). It serves as the interface for everything a user can do. It&rsquo;s an imlementation of the actual REST API, written in the [Scala](https://www.scala-lang.org/ 'Scala programming language') programming language, and built on the [Akka](https://akka.io/ 'Akka runtime') runtime environment and the [Spray](http://spray.io/ 'Spray toolkit') REST/HTTP toolkit.

The Controller receives your HTTP request from nginx and interprets it. The result may be a [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) request, or a direct invocation of an action. In this example, the Controller reads your HTTP POST request to an existing action as an invocation of that action. It then moves to the next step.

#### Permitting: CosmosDB

Now the Controller has to verify that you are who you are (authentication), and you have permission to do what you&rsquo;re asking (authorization). It does this by checking your credentials, which are stored in a CosmosDB database called **subjects.** If you have an account and you have the permissions required to invoke the action you&rsquo;re requesting, which also depends on the action being in a namespace you own, then the Controller proceeds to the next step: retrieving the action itself.

#### Retrieving: CosmosDB

CosmosDB is not only used to store users&rsquo; credentials, it&rsquo;s also used to store the code for the actions themselves. So, once the Controller has determined your permissions by the first call to CosmosDB, it calls CosmosDB again, this time to a database called **whisks.** CosmosDB returns the code for the action, so the Controller can take the next step: queueing the action for processing.
