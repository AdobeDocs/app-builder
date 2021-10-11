# Asynchronous Calls - Creating Long Running Actions

When you call a web action or a REST API, the system executes them as synchronous calls (blocking calls) and it waits up to 60 seconds for the action to complete. In many instances, this might just work perfect. However, if your action needs more time to complete the job, than the answer is to use an async call instead of a sync call, as async calls can use up to 30 minutes to complete the work. 

Because web actions and APIs are always executed synchronous, you will have to separate the work that needs more time (the async call) from the piece that is executed synchronous. You have two options to do this.

## Option 1: web action that calls the actual action async

First, let's create the worker action. We will use a setTimeout function to simulate a long running code. 
```
// worker.js
function main(args) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var result = {
                statusCode: 200,
                body: { 
                    payload: 'Hello from the long running job!'
                }
            };
            resolve(result);
        }, 100000);
    });   
}

exports.main = main;
```

Now that we have the code, we can create the action. Note the `-t` flag. You need this if you want to change the default timeout. In this case, we know that the action needs about 100,000 milliseconds to complete, so we will set the value to 120,000 milliseconds (2 minutes) to be sure that the action completes the work before the timeout.
```
wsk action create my-worker worker.js -t 120000
```

Next, we will create a web action that calls the action above. For this we will use the OpenWhisk Node module that makes it easier. This module is part of I/O Runtime Node.js environment, so you don't have to pack the module with your code. 
```
//web-action.js
let openwhisk = require("openwhisk");
 
 // This returns the activation ID of the action that it called
function main(args) {
    let ow = openwhisk();
    return ow.actions.invoke({
                    name: 'worker', // the name of the action to invoke
                    blocking: false, // this is the flag that instructs to execute the worker asynchronous
                    result: false,
                    params: args
                    }); 

}
 
exports.main = main;
```
Let's create the web action now:
```
wsk action create test web-action.js --web true
```

Now, when you invoke the web action, you will get the ActvationId for the `worker` action. You will use the activationId to retrieve the result.

Here is a sample invocation. Note the `.json` extension appended to the URI. This instructs the system to return the result as JSON.
```
curl https://adobeioruntime.net/api/v1/web/YOUR-NAMESPACE-HERE/default/test.json
{
  "activationId": "0123456789"
}
```

## Option 2: using triggers and rules

The second option is to create a trigger and a rule that calls the worker action. This will work as long as you can make the call using a POST method. If you need a GET, then you have to use Option 1.

Here is the code (we will use the `my-worker` action from earlier):
```
// First, you create a trigger
wsk trigger create my-worker-trigger

//Then, you create the rule
wsk rule create async-rule my-worker-trigger my-worker
```
What we got so far: when our trigger is executed (my-worker-trigger), in turn will execute the action (my-worker). Here is how you can execute it. Please note the authentication header. You will need to use the same authentication as the one used by the namespace where you created these actions/trigger/rule.
```
curl https://adobeioruntime.net/api/v1/namespaces/_/triggers/my-worker-trigger -X POST -H "Authorization: Basic NAMESPACE AUTHORIZATION"
```
Tip: you can find the URI and the authorization for a trigger (or secured web action) by adding `-v` (verbose) to the commands to get an trigger (or action):
```
wsk trigger get my-worker-trigger -v
```
Retrieving the action activationId, and not the trigger activationId is a bit trickier in this case. You use the trigger activationId to retrieve the logs and in the logs you will find the action activationId that you can use to read the result.