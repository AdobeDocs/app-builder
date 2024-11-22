# Using Packages with Adobe I/O Runtime

Individual actions (functions) can be effective, but often you&rsquo;ll need to create a set of actions that interact with each other; and you may wish to make those available to other developers as well. The means to do this in Runtime are called _packages._

Packages bundle related actions together. More than that, packages can contain both actions and _feeds:_ streams of events. Feeds are created by _feed actions_ that specify the trigger to fire for a given event source; each time the event is received, the selected trigger is fired and the associated action is executed. For more information, see [Using Feeds](../reference/feeds.md 'Using Feeds').

Everything you access in Runtime exists within a namespace. Your namespace is given to you when you sign up for Runtime access (see [Getting Started with Adobe I/O Runtime](../gettingstarted.md 'Getting started')). So, actions you create in Runtime, and packages as well, are stored in your namespace. Other users of Runtime get their own namespaces, and **Runtime includes a system namespace in which certain packages are stored available to all users.**

## Creating packages

Packages not only bundle actions and feeds; they provide the means to share a common set of parameters across all entities in the package. Creating a package is simple. You can create a package in the Runtime CLI in one step:

`aio rt:package:create hellopackage`

This creates a package in your namespace. You&rsquo;ll get the following acknowledgement:

```
ok: created package hellopackage
```

You can now get a summary of the package:

`aio rt:package:get hellopackage`

This produces the following result:

```
package /<yourNamespace>/hellopackage
   (parameters: none defined)
```

## Adding actions to a package

The package you created is empty; you haven&rsquo;t added any actions yet. To add an action to the package, use the source code from the `hello` action created in [Deploying your first Adobe I/O Runtime function](../gettingstarted/deploy.md 'Deploying your first function'). Here is the code for that action:

```
function main(params) {
  return { payload: 'Hello ' + params.name };
}
```

Add this action to the package with the following command:

`aio rt:action:create hellopackage/hello hello.js`

Here&rsquo;s the response from the CLI:

```
ok: created action hellopackage/hello
```

This is just like creating an action by itself; you merely need to preface the action name with the name of the package you want to put it in. Note, however, that this isn&rsquo;t the same action as the one you created from this code earlier; that earlier action exists in your namespace outside any package. You&rsquo;ve just created a new action and stored it in the package. There&rsquo;s no way to move an existing action into a package, or move an action from one package to another.

Now, if you get a summary again, you&rsquo;ll see the following:

```
package /<yourNamespace>/hellopackage
   (parameters: none defined)
 action /<yourNamespace>/hellopackage/hello
   (parameters: none defined)
```

<InlineAlert slots="text"/>

You can&rsquo;t add a package to a package; in other words, you can&rsquo;t nest packages.

## Invoking actions in a package

Invoking an action is also straightforward; you just need to preface the action&rsquo;s name with its package.

`aio rt:action:invoke --result hellopackage/hello --param name <your name>`

You should get this output:

```json
{
  "payload": "Hello <your name>"
}
```

## Adding parameters to a package

Notice in the package summary the statements `(parameters: none defined)`. You can add default parameters to a package, and all entities in the package will inherit them:

`aio rt:package:update hellopackage --param name Patricia`

```
ok: updated package hellopackage
```

### Default params and encryption

Before we dive deeper in how to set and use default params, let’s discuss the security aspect first. Many developers use the default params as a mechanism to provision actions with the secrets/passwords needed to authenticate against some other systems (databases, services, APIs).

In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code.

If you run the CLI command for getting an action or package, you’d get a listing for the names of the default params while the values will be listed as a hash instead of the actual value.

You can see what parameters have been added to a package (note the `summary` flag is left out; you&rsquo;ll get a complete report):

`aio rt:package:get hellopackage`

In the response, you&rsquo;ll see:

```
ok: got package hellopackage
...
"parameters": [
    {
        "key": "name",
        "value": some_hash
    }
]
...
```

You can also verify that your actions inherit the parameters you set for the package:

`aio rt:action:get hellopackage/hello`

You&rsquo;ll see in the response:

```
ok: got action hello
...
"parameters": [
    {
        "key": "name",
        "value": some_hash
    }
]
...
```

If you get the package summary again, you&rsquo;ll see the default parameters listed:

```
package /<yourNamespace>/hellopackage: Returns a result based on parameter name
   (parameters: *name)
 action /<yourNamespace>/hellopackage/hello
   (parameters: none defined)
```

The asterisk next to &ldquo;name&rdquo; in the parameters list for the package indicates that it&rsquo;s _bound_ (see &ldquo;Package bindings&rdquo; below). A single asterisk denotes a parameter has a default value defined. A double asterisk denotes a parameter with a _finalized_ default value: such values cannot be changed by the user.

Now, if you invoke the action without specifying any parameters, you can see that it inherits from the package&rsquo;s parameters:

`aio rt:action:invoke --result hellopackage/hello`

```json
{
  "payload": "Hello Patricia"
}
```

Of course, you can also override those parameters by supplying your own values:

`aio rt:action:invoke --result hellopackage/hello --param name Jennifer`

```json
{
  "payload": "Hello Jennifer"
}
```

You can also override a package&rsquo;s default parameters for a given action by setting default parameters specifically for that action:

`aio rt:action:update hellopackage/hello --param name Christine`

```
ok: updated action hellopackage/hello
```

## Package bindings

Depending on how you use your package, you may find you need to invoke an action with default parameters, without, or with a different set of default parameters. In such cases, rather than create a set of default parameters directly on the package, you can create a _package binding:_ a named set of default parameters associated with a package.

`aio rt:package:bind hellopackage helloMyName --param name`&nbsp;_`<your name>`_

```
ok: created binding helloMyName
```

The package binding is a shortcut for &ldquo;Call this package with these parameters.&rdquo; Unlike setting default parameters on the package, this leaves the package itself (and its entities) open to be called without the parameters defined in the binding. It also leaves open the option to create another binding with another set of defaults. There&rsquo;s no limit to the bindings you can create for a given package.

<InlineAlert slots="text"/>

Package bindings are very useful for another reason: there&rsquo;s no way to remove default parameters from a package or action once you&rsquo;ve set them directly. Using bindings is the only way to preserve the option to call an action in the package without the defaults.

Each package binding is used as if it were a package itself. To call an action in the package associated with a given binding, use the name of the binding in your invocation instead of the name of the package:

`aio rt:action:invoke --result helloMyName/hello`

```json
{
  "payload": "Hello Christine"
}
```

<InlineAlert slots="text"/>

The output above reads `Hello Christine` because we've defined a default value at the action level. This takes precedence over values set at the package level or invocation time. When you share a package, this ensures that your params can't be overwritten at execution time. However if you intend to let the user define its own values, then you shouldn't define a default value.

You can also substitute the name of the binding for the package name in other package commands:

`aio rt:package:get helloMyName`

## Browsing packages

Over time, you&rsquo;ll develop many packages, and you may want to see them all. Of course there&rsquo;s a CLI command for this:

`aio rt:package:list`

This lists all the packages in the given namespace. Run it on yours now, and you should see both your package and the binding you created:

```
packages
/<yourNamespace>/hellopackage                                            private
/<yourNamespace>/helloMyName                                             private
```

## Sharing packages

Once you&rsquo;re sure your package is ready for others to use, you can share it. Notice that the packages listed when you browsed your namespace are shown as `private`; only you can see them. To share a package:

`aio rt:package:update hellopackage --shared yes`

```
ok: updated package hellopackage
```

You can easily verify your package is shared:

`aio rt:package:get hellopackage`

```
ok: got package hellopackage
...
"publish": true
...
```

If you list your packages again, the package you shared will be listed as such:

```
packages
/<yourNamespace>/hellopackage                                            shared
/<yourNamespace>/helloMyName                                             private
```

### Un-sharing packages 

If you wish to make your package private again, you can update the package at any time. To un-share a package: 

`aio rt:package:update hellopackage --shared no` 

You can easily verify your package is private:

`aio rt:package:get hellopackage`

```
...
"publish": false
...
```

If you list your packages again, the package you made private will be listed as such:

```
packages
/<yourNamespace>/hellopackage                                            private
/<yourNamespace>/helloMyName                                             private
```


Others can now use your package just as you can, so long as you give them the fully qualified name of the package, including your namespace.

## Shared Packages and Permissions

Shared packages enforce `execute-only` permission for any operation that is initiated from outside the namespace owning the package. Assuming there is a package `my-package` in namespace `a`, this package is shared, and there is a namespace `b` who uses the shared package, then:
* Invoking `my-package` actions from namespace `b` or `a` will work
* Trying to get `my-package` code or edit it (update/delete) from namespace `b` will fail
* Manage `my-package` (create/read/update/delete) will only work from namespace `a`
