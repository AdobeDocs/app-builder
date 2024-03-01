# Sequences and Compositions

Sometimes you want to orchestrate a series of action calls into a flow. There are two ways to do this: using sequences or compositions.

Sequences represent a single string of actions that are invoked in sequence, starting with the first one, then second, and so forth until the last one. At each step the result of the current action feeds into the arguments of the next one. There is no support to skip one action.

If you want to execute a tree of actions, where you want to be able to evaluate the result of an action and depending on it execute a different action (think of an if/else control structure) then compositions are your best friend.

## Sequences

Assuming that you have two actions created in a package called `my-package`:
```
/my-package/actionA
/my-package/actionB
```

You can create a sequence using the `--sequence` flag in addition to the usual command for creating an action (make sure you add the namespace to the action name; otherwise you'd see an error about not being authorized to access those resources):
`wsk action create mySequence --sequence /[your-namespace]/my-package/actionA,/[your-namespace]/my-package/actionB`

You can invoke this as any other action. For example:
`wsk action invoke --result mySequence`

### Sequences and Timeout

When invoking a sequence in a blocking manner, there is a hard limit for timeout and this limit can't be changed: 60 seconds. It means when you add up the execution time of each action that is part of a sequence, the total has to be 60 seconds or less. 

If we apply this limitation to the example above, then `actionA` and `actionB` have a total budget of 60 seconds. Although the system lets you set a higher timeout on the sequnce `mySequence`, this value is ignored and the 60 seconds limit is enforced.

If one of your actions needs more than 60 seconds, then the only solution is to invoke a non-blocking action using the OpenWhisk npm module. So, using the same example, you could have `actionA` calling another action in a non-blocking manner. You can see an example of how to do this [here](../guides/asynchronous_calls.md).

You can read more about sequences on the [OpenWhisk documentation page](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md#creating-action-sequences).

## Compositions

When you want to orchestrate a more complex flow without having to jam all the code in one action, Apache OpenWhisk Composer is your best friend. Composer lets you assemble actions, even other compositions together and control the executions by using control-flow structure (if, while, repeat). The result of a composition gives you a single entry point and it behaves like an action, in that it supports default params, can be placed into a package, or used as web action.

### Install Composer

You’ll need to install the Composer Node.js package in order to use this feature:
```
npm install -g openwhisk-composer
```

Using this package you can create the JSON file needed for deploying a composition. The flow for creating a composition looks like:
1.	You define the compositions using JavaScript
2.	You run `compose` command to generate the JSON file out of this JavaScript file
3.	You run `deploy` command to deploy the composition using the JSON file you generated at the previous step

For, example let’s assume you have three actions deployed called `a`, `b`, and `c` and you want to create a composition that executes `a` and in case of success, executes `b`, if not it executes `c`. You use the composer package to define this composition in a JavaScript file (`myComp.js'): 
```
const composer = require('openwhisk-composer')

module.exports = composer.if(‘a’, ‘b’, ‘c’)
```

Now, that you have the composition defined you can generate the JSON definition needed for deployment:
```
compose myComp.js > myComp.json
```

Time to deploy:
```
deploy compositionA myComp.json
```

This creates a composition called `compositionA`. You can invoke this, as any other action - `wsk action invoke compositionA`. When you do this, first action `a` is invoked. Then, if `a` was successful, then action `b` is invoked; if not, action `c` is invoked.

More information:
* Apache OpenWhisk Composer [home page]( https://github.com/apache/incubator-openwhisk-composer)
* For a complete list of the control-flow structure check this page: [Combinators](https://github.com/apache/incubator-openwhisk-composer/blob/master/docs/COMBINATORS.md).

### Parallel Compositions

Parallel compositions are not supported by I/O Runtime.
