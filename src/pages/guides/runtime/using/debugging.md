# Debugging - Advanced Debugging for Node.js Actions

The easiest way to debug your actions is using a local Node.js server and run the action code on your machine. However, this is not exactly the environment used by I/O Runtime to execute your actions. This is where `wskdebug` steps in and helps you to debug and do live development. It's even integrated with Visual Studio Code.

This is how it works: your action deployed on I/O Runtime is replaced with a special agent that will send the activation to the local container and take the local container activation result back to the original activation. The action is actually executed on your local container. This local environment has the debug port open so you can connect and IDE to it.

Be aware that in the unlikely event that the agent is killed by I/O Runtime while running, you'll need to restore the original action content.

## Installing `wskdebug`

You'll need Node.js, version 10 or newer, and a local [Docker environment](https://www.docker.com/products/docker-desktop). You can grab `wskdebug` from this [GitHub repo](https://github.com/adobe/wskdebug) or use npm to install it:
```
npm install -g @adobe/wskdebug
```

Next, assuming that you have Docker configured locally, you need to run the wskdebug in Terminal in order to pull on your machine the latest image used by I/O Runtime to execute Node.js actions:
```
 wskdebug --inspect-brk=11932 <ACTION NAME> <FULL PATH TO THE SOURCE FILE> -l 
```


## Visual Studio Code Example

Before you can debug your action code, open the source file for your action and create the [launch.json](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) with this content:
```
"configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "wskdebug <ACTION NAME>",
            "runtimeExecutable": "wskdebug",
            "args": [ "<ACTION NAME>", "${workspaceFolder}/<ACTION SOURCE FILE>", "-l" ],
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/code",
            "outputCapture": "std"
        }
    ]
```
Next, go back to your action code and place breakpoints and then launch the debugger. Once the debugger was launched (keep an eye on the Debug Console window), you just need to invoke the action. Once invoked, the first breakpoint will be hit and you can inspect the variables step over/next. You can even change the code and once is saved, it is automatically re-executed.

For more details about how `wskdebug` works, its limitations and how you can use it to its full potential, please read the [official docs](https://github.com/adobe/wskdebug).
