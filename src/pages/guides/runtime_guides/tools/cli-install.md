---
title: Setting up the aio CLI
description: A guide to installing and using the aio CLI for managing namespaces and the .wskprops file, including installation steps and basic commands.
keywords:
- aio CLI
- npm installation
- .wskprops management
- Node.js
- Adobe Runtime Tools
# --- FAQs ---
faqs:
- question: How do I install the aio CLI?
  answer: Use the command `npm install -g @adobe/aio-cli` to install the aio CLI globally via npm.
- question: How can I verify the aio CLI is installed correctly?
  answer: Run `aio help` to see all available commands and confirm the CLI is properly installed.
- question: How do I update the aio CLI plugins?
  answer: Reinstall the CLI using `npm install -g @adobe/aio-cli` to update to the latest plugins and versions.
---
# Setting up the aio CLI

The `aio` CLI helps you to manage the `.wskprops` file as you use different namespaces. You will need `npm` to install it, so before you start, make sure you have the latest version of Node and npm installed.

```
npm install -g @adobe/aio-cli
```

Now you can run `help` to see all the commands and verify that you are ready:

```
aio help
```

To update to the latest versions of any plugins, reinstall the CLI:

```
npm install -g @adobe/aio-cli
```

For more information about the `aio` CLI, check the [package home page](https://www.npmjs.com/package/@adobe/aio-cli).

## Next steps

Return to the [Runtime Tools](index.md) Index.

Return to the [Guides Index](../../index.md).
