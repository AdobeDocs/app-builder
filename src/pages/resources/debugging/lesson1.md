---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/duynguyen'
title: 'Lesson 1: Getting Familiar with Debugger'
---

# Lesson 1: Getting Familiar with Debugger (wskdebug)

First you need a new app created with AIO CLI:

![app-init](assets/app-init.png)

Open the app in VSCode and execute `aio app run` in the terminal. You can also add the `--local` flag to make your actions run in the local OpenWhisk environment, and the `--verbose` flag to see more inspection details of your deployment.

You will see the VSCode launch profile generated automatically in `.vscode/launch.json`, with a few available configurations:
* `Action:test-app-debug-0.0.1/hello`: for debugging the `hello` action
* `Web`: for debugging the UI components
* `Actions` (compound): for debugging all actions
* `WebAndActions` (compound): for debugging all actions and UI components (end to end)

Navigate to the "Run" mode:

![debug-config](assets/debug-config.png)

Select the `WebAndActions` profile, and click the Start Debugging button:

![run-debug](assets/run-debug.png)

The web UI will appear immediately, but the action launch may take up to 10 seconds. Verify that the action is ready in the Action view of the Debug Console:

![action-ready](assets/action-ready.png)

Try invoking the `hello` action from the user form on UI: you will see the error `Failure! See the error in your browser console`. This is not a problem at this time.

![try-invoke](assets/try-invoke.png)

