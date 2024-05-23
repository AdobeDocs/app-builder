---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'Lesson 1: Create a New App Builder App with the React Spectrum template'
---

# Lesson 1: Create a New App Builder App with the React Spectrum template

In this lesson, we'll start bootstrapping the app with Runtime actions and the React Spectrum starter template.

## Initialization 

To initialize an App Builder app, let's use init command from the CLI.

```bash
aio app init todo-app --no-extensions
```

You should be selecting the org, project and workspace for your app, and then presented with a few options what you want your app to include (serverless actions, web UI assets, CI/CD pipeline, events). In this lab, we keep all except events.

The next question asks you to select the sample actions to be created as part of the initial app. Since we'll only rely on the [aio-lib-state](https://github.com/adobe/aio-lib-state) service, we can select the default option `Generic`. 

Next, you'll be prompted to select the UI template. Pick `React Spectrum 3`.

![aio app init](assets/aioappinit.png)

Finally, you can name your generic action. We'll name it `todolist`. 

What happens next, is that from the command line a NodeJS project is created including the Adobe I/O Runtime actions, configuration files, tests etc. You could explore your project in VS Code, either by opening VSCode -> Open... -> select app folder, or typing the following command.

```bash
code todo-app
```    

The mandatory environment variables should be automatically defined in the `.env` file, namely `AIO_runtime_namespace`, `AIO_runtime_auth`, and `SERVICE_API_KEY`.  

