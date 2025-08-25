---
title: Set up Your Environment
description: Learn how to set up your environment for Adobe I/O Runtime, including installing the aio CLI, configuring namespaces, and testing your setup.
keywords:
- Adobe I/O Runtime setup
- aio CLI installation
- Developer Console namespace
- Adobe App Builder environment
- configure aio CLI
faqs:
- question: What is Adobe I/O Runtime?
  answer: Adobe I/O Runtime is a serverless platform integrated with Adobe App Builder that lets you run custom code and manage events within your Adobe products.
- question: How do I install the aio CLI?
  answer: You can install the aio CLI using npm by running the command npm install -g @adobe/aio-cli after ensuring npm and Node.js are up to date.
- question: What permissions do I need to manage namespaces?
  answer: Namespace management requires either the Developer role or System Administrator permissions in the Adobe Developer Console.
- question: How do I configure the aio CLI if I don’t have Developer role permissions?
  answer: You can configure the aio CLI manually using the namespace name and auth credentials found in the downloaded configuration file.
- question: How can I verify that the aio CLI is set up correctly?
  answer: After configuration, run the command aio runtime list to confirm it can access your namespace entities successfully.
---
# Set up Your Environment

## Get access

Adobe I/O Runtime is part of Adobe App Builder. Customers and partners who want to try Adobe I/O Runtime along with the storage, custom events, and other features of App Builder may sign up for an [App Builder trial](https://commerce.adobe.com/business-trial/sign-up?items%5B0%5D%5Bid%5D=649A1AF5CBC5467A25E84F2561274821&cli=headless_exl_banner_campaign&co=US&lang=en).

## Install the Adobe I/O (aio) command-line interface (CLI)

To install `aio`, you'll need the `npm` package manager. Make sure that the latest versions of `npm` and `Node.js` are both installed, and then install `aio`:

`npm install -g @adobe/aio-cli`

Then confirm that `aio` installed properly:

`aio help`

### Create a namespace and retrieve credentials

Organizations with access to I/O Runtime manage namespaces from the [Developer Console](https://developer.adobe.com/developer-console/). Namespace management requires the Developer role or System Administrator permissions.

In the Developer Console:

* Create a new `Project`.
* Select a workspace option, for example `Production`.
* Click `Add service` and choose `Runtime`.
* Navigate back to `Workspace overview` page and click on the `Download all` button at the top of the page. This will download the configuration file for this project and workspace.
* Open the configuration file in a text editor and search for the `runtime` > `namespaces` entry. Here you will find the namespace `name` and `auth` values you will use to configure the `aio` CLI. 

### Sign in from the CLI

There are two ways to configure the `aio` CLI:

* **With Developer Role or System Administrator permissions**, sign in to the `aio` CLI as shown [here](../app_builder_get_started/first-app.md#3-sign-in-from-the-CLI), then use it to retrieve the projects you created in the Developer Console and select the workspace you want to work in. 

* **If you lack the right permissions** but have a namespace and authorization for it, manually configure the `aio` CLI as shown in the next section.

### Configure aio CLI

The `aio` CLI will pick up credentials from an `.env` file in the current working directory.

## Test that the CLI is set up correctly

Once the CLI is configured, test it:

`aio runtime list`

A successful test will display a list of the entities defined in your namespace.

## Next step

With the CLI installed and tested, you're ready to [deploy your first function](deploy.md).
