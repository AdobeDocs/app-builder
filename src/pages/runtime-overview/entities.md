# Adobe I/O Runtime Entities

Adobe I/O Runtime&rsquo;s computing model depends on a number of elements, called _entities_, that encapsulate aspects of Runtime functionality. The following is a quick rundown of these entities, pointing you to further resources in these docs.

## Actions
Actions are stateless functions that run on Adobe I/O Runtime. For example, an action can be used to detect the faces in an image, respond to a database change, respond to an API call, or post a Tweet. In general, an action is invoked in response to an event and produces some observable output.

For more information, see the following topics:

- [Creating Actions](../using/creating_actions.md)
- [Securing Web Actions](../using/securing_web_actions.md)
- [CI/CD Pipeline](../using/ci-cd_pipeline.md)

## Namespaces
All entities in Adobe I/O Runtime are organized into namespaces. A namespace is merely a label used as a prefix on entity names to organize them. Each organization on Runtime gets its own namespace, and all entities created in Runtime for that organization get that namespace applied as a prefix. 

## Triggers and Rules
Triggers are a way for you to apply a name to a class of events. Almost anything can be classified as an event by defining it as a trigger. In Runtime, events are defined by means of a set of key-value pairs; this allows them to be passed to an action as a JSON object. Triggers are used to define the keys for these pairs. When a trigger is activated (_fired_), it reads from the event source the values for these keys and passes on a dictionary of key-value pairs that define the event.

Rules link triggers with actions. Each rule links a specific trigger with a single action: every time the trigger is fired, the rule causes the action to be invoked with the trigger&rsquo;s event used as input parameters. By combining rules, however, you can cause a trigger to fire multiple actions, or cause a action to respond to multiple triggers.

For more information, see this topic:

- [Triggers and Rules](../reference/triggersrules.md)

## Packages
In OpenWhisk, you can use packages to bundle together a set of related actions and share them with others. A package can include actions and feeds.

- [Pre-installed Packages](../reference/prepackages.md)
- [Using Packages](../using/using_packages.md)

## Sequences and Compositions
A powerful feature of Adobe I/O Runtime is the ability to compose actions together. Two types of composed actions are possible:

- **Sequence:** A sequence action is a set of actions composed so they are executed in sequence, with the output of one action being fed as parameters to the next action. Sequence actions take parameters like regular actions, but those parameters apply only to the first action in the sequence. The order of execution of actions in a sequence is set when you define it.

- **Composition:** Compositions compose actions using conductor actions and combinator methods. These methods implement the typical control-flow constructs of a sequential imperative programming language. Using compositions, you can combine actions to execute in different orders depending on the dictates of logic flow. Effectively, compositions are actions whose logic consists of component actions. This offers you a powerful way to combine and reuse actions in new ways.

## Feeds
Feeds are streams of events. if you&rsquo;ve reviewed [triggers](../reference/triggersrules.md 'Using Triggers and Rules'), you may wonder about the distinction between the two:

* **Triggers** are a way to classify events: each trigger defines a type of event and is fired when that event is received by Runtime. Triggers are linked to actions by rules; each rule links a trigger to a single action.
* **Feeds** are streams of events that are all handled by the same trigger. Each feed is controlled by a _feed action_ that manages the stream: creating, deleting, pausing or resuming it as needed. In this way, a feed controls the flow of input to a trigger. Feed actions use a REST API to interact with external services that produce the events to which triggers are set to respond.

For more information, see this topic: 

- [Using Feeds](../reference/feeds.md)