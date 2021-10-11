# Using Feeds

Feeds are streams of events. if you&rsquo;ve reviewed [triggers](triggersrules.md 'Using Triggers and Rules'), you may wonder about the distinction between the two:

* **Triggers** are a way to classify events: each trigger defines a type of event and is fired when that event is received by Runtime. Triggers are linked to actions by rules; each rule links a trigger to a single action.
* **Feeds** are streams of events that are all handled by the same trigger. Each feed is controlled by a _feed action_ that manages the stream: creating, deleting, pausing or resuming it as needed. In this way, a feed controls the flow of input to a trigger. Feed actions use a REST API to interact with external services that produce the events to which triggers are set to respond.

## Creating feeds: feed actions

So, to create a feed, you first need a feed action. A feed action is an action, just like any other, but to qualify as a feed action, it needs to accept the following parameters:

* **lifecycleEvent:** passes in commands to control the feed: `CREATE`, `READ`, `DELETE`, `PAUSE`, OR `UNPAUSE`.
* **triggerName:** provides the fully qualified name of the trigger to associate with this feed.
* **authKey:** the Basic auth credentials of the user who owns the trigger given in `triggerName`.

Beyond these parameters, the feed action can take any others you choose; these should include the parameters needed to connect to the event source and manage the feed.

Once you've got the feed action, you create the feed when you create the trigger itself, simply by using the --feed parameter. For example, let's assume you want to set up a feed for receiving updates to the user's location coming from your mobile app, and you&rsquo;ve created a feed action named `userLocChange` in a package in your namespace called `userLoc`. To create the feed for managing location updates, you could issue the following command in the CLI:

`wsk trigger create trigLocUpdate --feed userLoc/userLocChange <optional parameters for the feed action>`

This command creates a trigger named `trigLocUpdate` and then do something like this:

`wsk action invoke userLoc/userLocChange --param lifecycleEvent CREATE --param triggerName trigLocUpdate --param authKey <yourauthKey> --param <optional parameters>`

This invokes the feed action `userLocChange`, which then sets up the stream of events from your mobile app aimed at the trigger `trigLocUpdate`.

You can use the `--feed` parameter to execute similar functions on feed actions within the `wsk trigger delete`, `wsk trigger update`, and `wsk trigger get` commands.

## Feed implementation patterns

You can create a feed according to several different architectural patterns. Three of the best choices are:

* **Hooks:** This is the easiest option, if your event source offers a webhook facility. Simply set up the webhook to send an HTML POST directly to a URL to fire the trigger. This works best for low-frequency events.
* **Polling:** This is good for managing a regularly scheduled event, so long as it&rsquo;s not too frequent. Set up the feed action to poll an endpoint periodically to fetch new data.
* **Connections:** Sometimes, the volume and frequency of events makes it most efficient to set up a persistent connection. This is complicated, though, by the fact that Runtime is architected as a REST service and that each invocation of an action is destroyed as soon as it's executed; in other words, Runtime is by nature not persistent. Here, you would set up an external service to maintain a persistent connection with your event source, and that service would then fire events at your feed in Runtime.
