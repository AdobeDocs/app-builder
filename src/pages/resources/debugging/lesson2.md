---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/duynguyen'
title: 'Lesson 2: Debugging Application Code'
---

# Lesson 2: Debugging Application Code

To address the error from the previous lesson,  open your app inside Adobe Experience Cloud (ExC) Shell on the same [Chrome Debug window](https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080). You may be asked to log in using your Adobe ID. When opened, the UI is almost similar to that when you access it on localhost, except the ExC Shell will be on top.

At this time, the action should run successfully, and you will see the response body of the `hello` action in the browser console.

![exc-invoke](assets/exc-invoke.png)

Let's try debugging this action. Go back to the Explorer View in VSCode, open the file `actions/hello/index.js`. At line 40, it makes a request to the Adobe I/O Runtime API docs at https://adobeioruntime.net/api/v1/api-docs:

```javascript
const apiEndpoint = 'https://adobeioruntime.net/api/v1/api-docs'
const res = await fetch(apiEndpoint)
```

You may want to debug what is returned from this API call to decide what to do next. To debug, you first need a breakpoint at line 40:

![set-breakpoint](assets/set-breakpoint.png)

Back in the Chrome Debug window, access the action inside ExC Shell if you haven't already: https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080. Select the `hello` action and invoke. Your debugger should stop at the breakpoint you set, so you can inspect values of the variables in your code.

>Note: If your code uses App Builder [State](https://github.com/adobe/aio-lib-state) or [Files](https://github.com/adobe/aio-lib-files) SDKs, you cannot use this debugging method. There are more details about it [here](../../getting_started/common_troubleshooting.md#debugging-errors-with-state-and-files-sdk).

<Embed slots="video" />

./assets/debugger-action.mp4

You can debug your UI code in the `web-src` folder in the same way as [debugging action code](lesson2.md). But since almost every browser comes with built-in debugging capabilities, you may want to use them instead.

This is an example run on Firefox:

![debugger-ui](./assets/debugger-ui.png)
