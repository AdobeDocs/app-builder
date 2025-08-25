---
title: Lesson 4: Test the worker
description: Instructions to test your Asset Compute worker using the Asset Compute Devtool and deploy it for AEM integration.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Asset Compute
# --- FAQs ---
faqs:
- question: How do I start testing the worker locally?
  answer: Run the command `aio app run` to launch the Asset Compute Devtool in your browser and test the worker directly.
- question: What parameter is required to test the worker correctly?
  answer: You need to provide the `imgix` parameter in the worker request object as an escaped JSON string specifying resizing options.
- question: How can I resize an image to 300x300 pixels in the test tool?
  answer: Use the parameter `"imgix": "{ \"h\": 300, \"w\": 300}"` when running the worker in the Asset Compute Devtool.
- question: How do I deploy my worker for use with AEM?
  answer: Run `aio app deploy`, which will provide a deployment URL to configure your worker in AEM.
- question: Where do I find the URL to configure the worker in AEM after deployment?
  answer: The deployment command outputs the worker URL; copy and save it for the AEM configuration.
contributors:
  - 'https://github.com/marcinczeczko'
---
# Lesson 4: Test the Worker

Run this command:

```
$> aio app run
```

After a few seconds it will open Asset Compute Devtool in your browser. Within that tool, you can test your worker without the AEM.

![Asset Compute Devtool](assets/asset-compute-devtool.png)

Since our worker requires `imgix` parameter (as seen at line 34 in the worker code), you need to provide it in the worker request object as shown on the screenshot. That parameter must be an escaped JSON. For instance, use this parameter to resize an image to 300x300px:

```json
"imgix": "{ \"h\": 300, \"w\": 300}"
```

Then run your worker and observe results on the right side of the Asset Compute Devtool.

To let AEM use our worker, deploy the app by running:

```
$> aio app deploy
```

The command, will return the URL of your worker, similar to the below. Write it down, so we can put it in the AEM configuration.

```
Your deployed actions:
  -> dx-asset-compute-worker-1/__secured_my-worker
  -> https://99999-myassetcompute-dev.adobeioruntime.net/api/v1/web/dx-asset-compute-worker-1/my-worker
Well done, your app is now online 🏄
```
