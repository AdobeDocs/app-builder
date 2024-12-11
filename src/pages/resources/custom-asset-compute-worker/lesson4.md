---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/marcinczeczko'
title: 'Lesson 4: Test the Worker'
---

# Lesson 4: Test the Worker

Run this command:

```
$> aio app run
```

After a few seconds it will open Asset Compute Devtool in your browser. In that tool, test your
worker without  AEM.

![Asset Compute Devtool](assets/asset-compute-devtool.png)

Since our worker requires `imgix` parameter as you can see at line 34 in the worker code, you need to provide it in
the worker request object as shown on the screenshot. That parameter must be an escaped JSON. For instance, use the
parameters below to  resize an image to 300x300px:

```json
"imgix": "{ \"h\": 300, \"w\": 300}"
```

Then  run your worker and observe results on the right-hand side of the Asset Compute Devtool:

To let AEM use our worker, deploy the app by running the command:

```
$> aio app deploy
```

As a result of that command, you will get the URL of your worker, similar to the example below. Write down the URL, since we will need
to put it in our AEM configuration.

```
Your deployed actions are:
  -> dx-asset-compute-worker-1/__secured_my-worker
  -> https://99999-myassetcompute-dev.adobeioruntime.net/api/v1/web/dx-asset-compute-worker-1/my-worker
Well done, your app is now online 🏄
```

