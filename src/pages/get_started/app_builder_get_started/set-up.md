---
keywords:
  - Acquire Access
  - Credentials
  - Local Environment
  - Set up
title: Set Up Access, Environment, and Tools
description: App Builder is a complete framework that enables enterprise developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure.
---

# Set Up Access, Environment, and Tools

Here you'll learn what systems you need to access, how to access them, and how to configure your local environment.

## Access and credentials

**Adobe Experience Cloud Identity Management Service (IMS) organization** membership, with a Developer or System Admin role, is needed to access App Builder.

* If your organization has a license for App Builder, use the IMS organization where App Builder is provisioned. Some companies have multiple IMS Organizations. Check with your company admin who manages Adobe software for details.

- If you do not have access to your IMS organization:
  
  - Customers should request access from their account manager or their company IT/Marketing admin
  
  - Partners should request App Builder access from their partner manager, or Sandbox access though the [Adobe Solution Partner Portal](https://solutionpartners.adobe.com/home.html)

**App Builder access** is only available with a purchased license. 

**[Adobe Developer Console](https://developer.adobe.com/developer-console/)** gives you access to APIs, SDKs, and developer tools. It also provides a way to set up your credentials.

**[A GitHub account](https://github.com/)** is optional but highly recommended for setting up your CI/CD workflow.

### Granting App Builder access in Adobe Admin Console

If you are an IMS organization administrator, follow these steps to grant App Builder access to your developers. Once you complete these steps, users can sign in to [Adobe Developer Console](https://developer.adobe.com/console) and start building.

A user needs two things to access App Builder:

1. Membership in a product profile under the App Builder product
2. The **Developer** or **System Administrator** role in the IMS organization

> **Note:** Adobe does not use product profiles to scope App Builder permissions — every profile under the App Builder product grants the same access. However, the [Adobe Admin Console](https://adminconsole.adobe.com/) requires at least one profile to be selected before you can save a user assignment, so you must create one before assigning users.

#### 1. Create a product profile for App Builder

If your App Builder product does not already have a product profile, create one:

1. Sign in to the [Adobe Admin Console](https://adminconsole.adobe.com/) and switch to the IMS organization where App Builder is provisioned.
2. Open the **Products** tab and select **App Builder** from the product list.
3. Click **New Profile**.
4. Enter a profile name (any name is fine — for example, `App Builder Users`) and an optional description, then click **Next** and **Save**.

#### 2. Assign users the Developer or System Administrator role

Adobe Developer Console only surfaces App Builder to users who hold the Developer or System Administrator role.

To grant the **Developer** role:

1. In the [Adobe Admin Console](https://adminconsole.adobe.com/), open the **Users** tab and select **Developers**.
2. Click **Add Developer**.
3. Enter the user's email address.
4. Under **Select Products and User Groups**, choose **App Builder** and select the product profile you created above.
5. Click **Save**.

To grant the **System Administrator** role instead (full org-wide admin access):

1. In the [Adobe Admin Console](https://adminconsole.adobe.com/), open the **Users** tab and select **Administrators**.
2. Click **Add Admin**.
3. Enter the user's email address, leave the admin role set to **System Administrator**, and click **Save**. System Administrators automatically have access to App Builder and do not need to be added to a product profile separately.

For more details on roles and permissions in the Admin Console, see the [Adobe Admin Console documentation](https://helpx.adobe.com/enterprise/using/admin-roles.html).

## Local environment setup

### Required tools

[**NodeJS**](https://nodejs.org/en/download/), version 18 or 20 (odd versions are not recommended), which will also install the npm package manager. We recommend [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) for NodeJS installation and version management.

[**Adobe I/O Command Line Interface (CLI)**](https://github.com/adobe/aio-cli)

- `npm install -g @adobe/aio-cli`
- If Adobe I/O CLI is already installed, please make sure you have the latest version: 
  - Check your CLI version using `aio -v` and compare it to`npm show @adobe/aio-cli version`. If your CLI is outdated, update it by running `npm install -g @adobe/aio-cli`.
  - Even if your Adobe I/O CLI is up to date, run `aio update` to make sure all core plugins are updated.
  - For seven days after release of a new version of Adobe I/O CLI, you'll see a message like this before the command output:

```bash
›   Warning: @adobe/aio-cli update available from 3.3.0 to 3.4.1.
›   Run npm install -g @adobe/aio-cli to update.
```

#### Supported local environments

We aim to provide similar quality of local development experience on Windows 10 and 11, and MacOS 10.14 and higher.
[Adobe I/O CLI](https://github.com/adobe/aio-cli) and its plugins are automatically tested against NodeJS versions 14 and 16 on both Windows and [Linux Xenial](http://releases.ubuntu.com/16.04/).

#### Supported terminals for the CLI

The [CLI](https://github.com/adobe/aio-cli) uses the popular [inquirer](https://www.npmjs.com/package/inquirer) package for all its interactive functions such as application generators.

See [inquirer's Support section](https://www.npmjs.com/package/inquirer#support-os-terminals) and its [known issues](https://www.npmjs.com/package/inquirer#known-issues) for up-to-date details.

### Optional tool

If you intend to use local development (`aio app dev`) features provided by the [CLI](https://github.com/adobe/aio-cli), you will also need:

- [Visual Studio Code](https://code.visualstudio.com/download), the supported integrated development environment (IDE) for editing, debugging, etc. You may use any other IDE as a code editor, but advanced usage like debugging is not yet supported.

## Next step

Now that you have your environment set up, you can start to [Create your First App Builder Application](first-app.md).
