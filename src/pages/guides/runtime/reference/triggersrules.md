# Using Triggers and Rules

Invoking an action directly in the CLI is quite limited; what you want to do is configure Adobe I/O Runtime to respond to events. The Runtime features that enable you to do this are triggers and rules:

* _Triggers_ are events: each trigger you create represents a particular class of event.
* _Rules_ are associations between triggers and actions. Rules are the way you make Runtime execute code in response to an event.

## About triggers
Triggers are a way for you to apply a name to a class of events. Some examples:

* updating a user&rsquo;s location on a mobile app
* uploading a file to cloud storage
* sending an email or text message

Almost anything can be classified as an event by defining it as a trigger. In Runtime, events are defined by means of a set of key-value pairs; this allows them to be passed to an action as a JSON object. Triggers are used to define the keys for these pairs. When a trigger is activated (_fired_), it reads from the event source the values for these keys and passes on a dictionary of key-value pairs that define the event.

You can fire a trigger explicitly in the CLI yourself, but it&rsquo;s much more common for an event source to be configured to fire triggers via a feed. For more information, see [Using Feeds](feeds.md "Using feeds").

## About rules
Rules link triggers with actions. Each rule links a specific trigger with a single action: every time the trigger is fired, the rule causes the action to be invoked with the trigger&rsquo;s event used as input parameters. By combining rules, however, you can cause a trigger to fire multiple actions, or cause a action to respond to multiple triggers. 

For example, consider a mobile app that tracks the user&rsquo;s location when the user takes a photo, records the user&rsquo;s GPS coordinates, and uploads the photo to the user&rsquo;s Adobe Assetsa account, in a library named &ldquo;My Photos&rdquo;. The app also captures images sent or received via text or email and uploads them to the user&rsquo;s Adobe Assets, in another library named &ldquo;Shared with Me&rdquo;. You could configure the following actions:

* `catalogImg`: calls a Sensei Studio function to analyze the image and recognize objects
* `mapImg`: adds metadata to the image to log its GPS coordinates
* `thumbImg`: creates a thumbnail of an image

Using the mobile app as an event source, you could set the following triggers:

* `myPhoto`: fires when the app uploads a photo taken by the user
* `sharedImg`: fires when the app uploads an image sent or received via email or text message

To process these images in Runtime, you could set the following rules:

* `myPhoto -> catalogImg`
* `myPhoto -> mapImg`
* `myPhoto -> thumbImg`
* `sharedImg -> catalogImg`
* `sharedImg -> thumbImg`

So, with these rules, both images taken by the user and images sent or received via email or text are catalogued and thumbnails are created; for the user&rsquo;s own images only, GPS coordinates are tracked.

## Creating and firing triggers
Creating triggers is easy. Consider a trigger to update a user&rsquo;s location; every time the trigger is fired, it sends the user&rsquo;s name and GPS coordinates. To create the trigger in the CLI:

`wsk trigger create updateLoc`

```
ok: created trigger updateLoc
```

And, just as with packages and actions, you can list the triggers you&rsquo;ve created:

`wsk trigger list`

```
triggers
/yourNamespace/updateLoc                                              private
```

That was simple; but then, all you&rsquo;ve really done here is create a label for a channel through which events can be passed to the system. You can fire this trigger just as simply, specifying the parameters:

`wsk trigger fire updateLoc --param name Jocasta latitude 38.316667 longitude 23.316667`

```
ok: triggered updateLoc with id 94dddb5ef8ca46e9ba4648eeb9bda80f
```

So, the trigger has been fired&mdash;but nothing happened. You haven&rsquo;t set up a rule yet to link this trigger with an action. Triggers that fire with no associated rule have no effect.

## Creating and using rules
To link your trigger with an action, you need to create a rule. To do so, you need the name of your trigger, the name of the action you&rsquo;re going to execute when the trigger is fired, and a name for your rule itself. 

To give your trigger an appropriate action, create an action named `helloLoc` using the following code. (See [Deploying your first Adobe I/O Runtime function](../gettingstarted/deploy.md "Deploying your first function") for instructions on creating an action):

```js
function main(params) {
   return {payload:  'Hello, ' + params.name + ', I see you are at latitude ' + params.latitude ', longitude ' + params.longitude };
}
```

Now you can create the rule linking the trigger to the action:

`wsk rule create greetLoc updateLoc helloLoc`

This creates a rule named `greetLoc` that executes `helloLoc` every time the trigger `updateLoc` is fired. Now, fire the trigger again:

`wsk trigger fire updateLoc --param name Jocasta latitude 38.316667 longitude 23.316667`

```
ok: triggered updateLoc with id 00e0dd4cce3f43768dabb99d67731b50
```

To see what happened as a result, you can check your activations. You can list them easily:

`wsk activation list`

Your `hello` action should be first on the list. If the list is long, though, you may want to just show the most recent activation:

`wsk activation list --limit 1 helloLoc`

```
activations
a48069e1da3c4aa9bc48ac979c5ee140             helloLoc
```
To see the results of this activation:

`wsk activation result a48069e1da3c4aa9bc48ac979c5ee140`
```
{
    payload: "Hello, Jocasta, I see you are at latitude 38.316667, longitude 23.316667"
}
```

So, the helloLoc action received the parameters from updateLoc and returned the result you&rsquo;d expect.

Finally, to stop a rule, you can disable it:

`wsk rule disable greetLoc

## Rules on triggers and rules
Triggers, rules and actions can be combined in different ways: you can associate a trigger with multiple actions by using a different rule for each action, and an action can be the target of multiple triggers, again by creating a rule for each trigger. You cannot, however, link a trigger to more than one action with a single rule, nor can you link more than one trigger to an action with a single rule.

Triggers and rules stand outside packages; you cannot place either in a package. You can, however, create a rule that addresses an action in a package. Suppose the `helloLoc` action is in a package named `manageLoc`:

`wsk rule create greetLoc updateLoc /manageLoc/helloLoc`

`




