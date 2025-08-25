---
title: Lesson 1: Getting to know wskdebug
description: Introduction to debugging OpenWhisk actions using wskdebug with VSCode, covering setup and launch configurations.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
contributors:
- 'https://github.com/duynguyen'
faqs:
- question: How do I start debugging OpenWhisk actions with wskdebug?
  answer: Create your app with AIO CLI, open it in VSCode, then run `aio app run` with optional flags. Use the generated launch profiles to start debugging.
- question: What launch profile should I select for end-to-end debugging?
  answer: Use the `WebAndActions` compound launch profile to debug all actions and UI components together.
- question: Why do I see a "Failure" error when invoking the hello action?
  answer: This error is expected during initial debugging; check the browser console for details and confirm the action is ready in the debug console.
---
# Lesson 1: Getting to know wskdebug

First, you need an app created with AIO CLI:

![app-init](assets/app-init.png)

Open the app in VSCode, and execute `aio app run` in the terminal. Optionally, you can add `--local` flag to make your actions run in the local OpenWhisk environment, and the `--verbose` flag to see more inspection details of your deployment.

You will see the automatically generated VSCode launch profile in `.vscode/launch.json`, with a few available configurations:

* `Action:test-app-debug-0.0.1/hello` for debugging the `hello` action
* `Web` for debugging the UI components
* `Actions` (compound) for debugging all actions
* `WebAndActions` (compound) for debugging all actions and UI components (end to end)

Navigate to "Run" mode:

![debug-config](assets/debug-config.png)

Select the `WebAndActions` profile, and click the Start Debugging button:
Select the `WebAndActions` profile, and click the Start Debugging button:

![run-debug](assets/run-debug.png)

The web UI will appear immediately. But the action launch may take  up to 10 seconds. You could confirm that the action is ready in the Action view of Debug Console:

![action-ready](assets/action-ready.png)

Invoke the `hello` action from the user form on UI. You will see a `Failure! See the error in your browser console.` error, which is expected.

![try-invoke](assets/try-invoke.png)
