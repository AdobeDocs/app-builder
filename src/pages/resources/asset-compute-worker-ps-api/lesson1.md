---
title: Lesson 1: Create an App Builder App from the Asset Compute Template
description: Step-by-step instructions to create an Adobe App Builder app using the Asset Compute template, including setup with Adobe Developer Console and CLI commands.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Asset Compute
# --- FAQs ---
faqs:
- question: How do I start creating an app using the Asset Compute template?
  answer: Begin by creating a project in the Adobe Developer Console with the Asset Compute and Adobe Photoshop APIs added, then initialize your app via the Adobe I/O CLI using `aio app init <app-name>`.
- question: Which services should be added to the workspace for this Code Lab?
  answer: Add both the Asset Compute service and the Adobe Photoshop APIs (Trial) service to your workspace.
- question: What do I do if I have not logged in to Adobe Developer Console from the CLI?
  answer: Running `aio app init` will prompt you to sign in through a browser to authenticate with your Adobe ID.
- question: Which extension point should I select during the app initialization?
  answer: Select the "DX Asset Compute Worker" extension point when prompted by the CLI.
- question: Where should I add my custom application logic?
  answer: Add your custom code to the `index.js` file located in the `actions/<worker-name>` folder within your newly created app project.
contributors:
  - 'https://github.com/duynguyen'
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---
# Lesson 1: Create an App Builder App from the Asset Compute Template

To begin this Code Lab, you should have [a project already created from App Builder Template in Adobe Developer Console](../../get_started/app_builder_get_started/first-app.md#2-create-a-new-project-on-developer-console). Please add the `Asset Compute` and `Adobe Photoshop APIs (Trial)` services to the workspace that you are using for the Code Lab.

![Console Workspace](assets/console-workspace.png)

Make sure to have the Adobe I/O CLI installed locally. In your terminal, execute the command `aio app init <app-name>`.

If you have not logged in already, this command prompts a browser asking you to sign into the Adobe Developer Console with your Adobe ID. See [here](../../get_started/app_builder_get_started/first-app.md#3-sign-in-from-the-CLI) for more information on signing in from the CLI.

After logging in, follow the prompts in the CLI and select the Organization, Project, and Workspace to use for the application. Choose the project and workspace you created when you set up your environment. When prompted `Which extension point(s) do you wish to implement? `, make sure to select `DX Asset Compute Worker`:

```bash
$ aio app init <app-name>
Retrieving information from [!DNL Adobe I/O] Console.
? Select Org My Adobe Org
? Select Project MyFireflyProject
? Which extension point(s) do you wish to implement ? (Press <space> to select, <a>
to toggle all, <i> to invert selection)
❯◯ DX Experience Cloud SPA
 ◯ DX Asset Compute Worker
```

Follow the rest of the prompts and open the new application in Visual Studio Code (or your favorite code editor). It contains the scaffolding and sample code for a custom application.

The template application uses the [Asset Compute SDK](https://github.com/adobe/asset-compute-sdk) to upload, download, and orchestrate application renditions so developers need only implement the custom application logic. Custom application code should be added to the `index.js` file inside the `actions/<worker-name>` folder.
