---
keywords:
  - Deployment
title: Deployment
description: The guide explains how App Builder apps can be deployed.
---

# Deployment Overview

The [AIO CLI](https://github.com/adobe/aio-cli) allows developers to deploy their App Builder app to Adobe servers. The following guide explains how App Builder apps are deployed. Read our [CI/CD guide](cicd-for-app-builder-apps.md), to set up a CI/CD pipeline to deploy your app.

## Which components of the App Builder app are deployed?

An App Builder app can contain different components - frontend, backend, extensions, and event registrations. These components are declared in the `app.config.yaml` file. When you deploy your App Builder app, the following components are deployed.

1. **Frontend web assets**: During deployment, web assets (html, js, css, .map, images, and other static assets) are packed and deployed to the App Builder CDN. The CDN is automatically provisioned in the selected Project and Workspace.
2. **Adobe I/O Runtime entities**: During deployment the following Runtime entites are deployed to the Adobe I/O Runtime namespace in the selected Project and Workspace.
   1. [Actions](../../runtime_guides/creating-actions.md) 
   2. [Sequences](../../runtime_guides/reference_docs/sequences-compositions.md#sequences) 
   3. [APIs](../../runtime_guides/creating-rest-apis.md)
   4. [Rules](../../runtime_guides/reference_docs/triggersrules.md#about-rules) 
   5. [Triggers](../../runtime_guides/reference_docs/triggersrules.md#about-triggers) 
   6. [Log Forwarding configuration](../application_logging/logging.md#forwarding-application-logs) 
3. **Extensions** - During deployment, your app is registered as an extension in the Adobe extension registry against any extension points implemented in the app.
4. **Event Registrations** - During deployment, any event registrations defined in the `app.config.yaml` file are created in the selected Project and workspace.

## Multiple deployment environments

By default, an App Builder Project on the Developer Console contains a Production and a Stage workspace. The Production and Stage workspaces can be used by your team for shared production and staging environments respectively. Furthermore, you can add more workspaces to your App Builder project, even an individual workspace for every developer on your team.

![High-Level CI/CD architecture](../../../images/high-level-ci-cd-architecture.png)

Each workspace is completely isolated from other workspaces and can be deployed to separately. To deploy to a workspace, you must select it before running the `aio app deploy` command. See the section below to know more.

## How to deploy your app?

The following steps outline how you can deploy an App Builder app from your machine. If you want to deploy it from a CI/CD pipeline, please reach our [guide on setting up a CI/CD pipeline](cicd-for-app-builder-apps.md).

1. Open your terminal and navigate to the root of your App Builder app. The directory that contains the `app.config.yaml`, `.aio`, and `.env` files. 

2. Ensure you are logged in to the CLI. Make sure to pick the correct account (personal vs company account) and the correct profile during the login.
   ```bash
   aio login
   ```
   If you want to log in to a different account, you can use the `aio logout --force` command to log out.

3. Ensure a Developer Console Project and Workspace is selected in your project. If you are at the root of your App Builder app directory, the Project and Workspace will be determined using the values in the `.aio` file. 
   ```bash
   aio where
   ```

4. If a Project and Workspace is not selected, or you want to pick a different one, navigate to the Project and Workspace on the Developer Console. On the Workspace overview page, click the `Download all` button to download the `workspace-config.json` file.
   
   ![Download Workspace JSON](../../../images/download-workspace-config-json.png)

   ```bash
   aio app use <path_to_workspace_config_json_file>
   ```
   When prompted, be sure to merge the `.aio` and the `.env` files to avoid losing any other configuration you may have added to those files.
   
5. To deploy the app run 
   ```bash
   aio app deploy
   ``` 

   You can view the help menu (`aio app deploy --help`) to understand the advanced deployment options available to you. Using these options you can deploy only parts of your application or skip deploying some parts.

   Note: you can skip steps 2-4 if you have already logged in to the CLI and selected the correct Project and Workspace.

6. Once your app is deployed it will be available at `https://<namespace>.adobeio-static.net/`

## Tracking deployment activity

Whenever a developer makes a change to a Project, her action is recorded in the [Project Activity Logs](https://developer.adobe.com/developer-console/docs/guides/projects/#view-a-projects-activity-log). Each activity log describes who made what change and when. 

Activities related to deploying an App Builder are also captured in the Project Activity Logs. This includes deployment to any Workspace in the Project. Furthermore, Activity logs are captured whether the app is deployed from a developer's machine or from a CI/CD pipeline.

<InlineAlert slots="text">
The AIO CLI v10 introduces the mandatory use Adobe IMS authentication to deploy App Builder apps. Therefore, activity logs are captured only if you use AIO CLI v10 or higher. 

Currently, older versions of the AIO CLI can be used to deploy App Builder apps, but that deployment will not be recorded in the Project Activity Logs. Once AIO CLI v10 reaches critical adoption, the App Builder team will communicate plans arounding restricting deployment from older CLI versions. 

Meanwhile, we strongly recommend that you upgrade your AIO CLI version to 10 or higher for a better security posture.
</InlineAlert>

<InlineAlert slots="text">
Deployment activity logs were recorded from Aug 11, 2025 onward. Historical data before then is not available. The activity logs are retained for a year.
</InlineAlert>


## Undeploying your app

You can run the `aio app undeploy` command at the root of your App Builder app directory to undeploy all components deployed through the `aio app deploy` command.

Use this command carefully because if you inadvertantly undeploy the app from the Production workspace, it could result in downtime. You can of course deploy the app again immediately.


## Next steps

Continue to [CI/CD for App Builder Applications](cicd-for-app-builder-apps.md).

Return to the [Guides Index](../../index.md).
