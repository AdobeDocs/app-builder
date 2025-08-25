---
title: Lesson 2: Debugging Application Code
description: Learn how to debug your Adobe I/O application code using the Adobe Experience Cloud Shell, VSCode Explorer, and Chrome Debugger to inspect responses and set breakpoints effectively.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Debugging
contributors:
  - 'https://github.com/duynguyen'
# --- FAQs ---
faqs:
- question: How do I open my app in the Adobe Experience Cloud Shell for debugging?
  answer: Open the app inside the Adobe Experience Cloud Shell on Chrome via https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080 and log in with your Adobe ID.
- question: Where should I set breakpoints to debug the hello action?
  answer: Set a breakpoint at line 40 in the file actions/hello/index.js where the API call to Adobe I/O Runtime docs is made.
- question: Can I debug apps using the App Builder State or Files SDK with this method?
  answer: No, this debugging method does not support apps using the State or Files SDKs due to their architecture limitations.
- question: How can I inspect the response from the Adobe I/O Runtime API call during debugging?
  answer: When the debugger stops at your breakpoint, inspect the variables in VSCode or browser debugger to view the response from the API call.
- question: Can I debug UI code for my Adobe I/O app in the browser?
  answer: Yes, UI code in the web-src folder can be debugged using built-in browser debugging tools like those in Firefox or Chrome.
---
# Lesson 2: Debugging Application Code

To overcome the error that you got in the previous lesson, open your app inside the Adobe Experience Cloud (ExC) Shell on the same Chrome Debug window: https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080. You may be asked to log in using your Adobe ID. When opened, the UI is similar to the one you accessed on localhost, except with the ExC Shell on top.

This time, the action runs successfully, and you can see the response body of `hello` action in the browser console:

![exc-invoke](assets/exc-invoke.png)

To debug this action, go back to Explorer View in VSCode, open the file `actions/hello/index.js`. At line 40, it makes a request to the Adobe I/O Runtime API docs at https://adobeioruntime.net/api/v1/api-docs.

```javascript
const apiEndpoint = 'https://adobeioruntime.net/api/v1/api-docs'
const res = await fetch(apiEndpoint)
```

You may want to debug what was returned from this API call to decide what to do next. To debug, you need a breakpoint at line 40:

![set-breakpoint](assets/set-breakpoint.png)

In the Chrome Debug window, access the at inside ExC Shell if you have not already done so: https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080. Now select and invoke the `hello` action. Your debugger will stop at the breakpoint you set earlier so you can inspect the values of the variables in your code.

> Note: If your code uses App Builder [State](https://github.com/adobe/aio-lib-state) or [Files](https://github.com/adobe/aio-lib-files) SDKs, you cannot use this debugging method, as described [here](../../get_started/app_builder_get_started/troubleshoot.md#debugging-errors-with-state-and-files-sdk).

![debugger-action](https://raw.githubusercontent.com/AdobeDocs/adobeio-codelabs-debugging/master/lessons/assets/debugger-action.gif)

You can debug UI code in the `web-src` folder as outlined in [debugging action code](lesson2.md). But you may find the built-in debugging capabilities of most browsers a more productive approach.

Here is an example run on Firefox:

![debugger-ui](assets/debugger-ui.png)
