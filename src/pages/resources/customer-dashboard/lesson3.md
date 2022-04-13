---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/duynguyen 
---

# Lesson 3: Run the App Builder App Locally

Firstly, let's open the terminal in VS Code.

![new-terminal](assets/new-terminal.png)

To run the application, execute the below command with AIO CLI.

```bash
aio app run
```

This command will deploy the `get-profiles` action onto I/O Runtime, and spins up a local instance for the UI. When the app is up and running, it can be seen at https://localhost:9080.

![app-run](assets/app-run.png)

Please note that, as you are visiting the localhost site via HTTPS, the browser may give a warning for the lack of certificate. That's fine for this app, hence you can accept and continue to the page.

![accept-cert](assets/accept-cert.png)

You should be able to see the UI of the app. Navigating to `Your App Actions`, there is a form that allows you to try invoking the existing actions in the app.

![localhost-ui](assets/localhost-ui.png)

Let's try invoking the `get-profiles` action. Select it from the dropdown list, and press the `Invoke` button. Because there is no user token embedded in the request header, you will see a `401 Unauthorized` error in the browser console.

![error-401](assets/error-401.png)

Previously, you can see from the Terminal output that it is also possible to access the app from ExC Shell: https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080. You might be asked to log in using your Adobe ID.  
When opened, the UI is almost similar to that when you access it on localhost, except the ExC Shell on top.

![exc](assets/exc.png)

Here you Adobe IMS user profile has been stored in the browser session, which enables you to make request to the `get-profiles` action using your user token. Let's try invoking the action again.  
At this time, the action runs successfully, and you can see the list of profiles in the browser console.

![profiles-success](assets/profiles-success.png)

This has worked like a charm. The app is now running locally and ready for development. If you want to discover the magic behind it, please check out [App Builder App Security Overview](../../guides/security/index.md).

