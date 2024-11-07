---
title: 'Migration Guide - Standalone Application to DX Experience Cloud SPA v1'
---
# Migration Guide - Standalone Application to DX Experience Cloud SPA v1

## Overview 

In this guide, you will learn one of the ways to migrate an App Builder application that was originally initialized as a Standalone Application to a 
DX Experience Cloud SPA v1. It is possible to accomplish this by only modifying the configuration of the project, but following this guide will allow your application to closely mirror that of an application that is generated when you initialize an App Builder application as DX Experience Cloud SPA v1. 

## Who is This Migration Guide For?

If you are having trouble viewing your application in Adobe Experience Cloud, you may have initialized your application as a 
Standalone Application, and this guide may help you. 

Applications built with App Builder can only be accessed via the App Builder Catalog in Adobe Experience Cloud if they have been initialized as **DX 
Experience Cloud SPA v1**. 

## How can I tell if my project is a Standalone Application?

Your application will **not** have the `App Builder ExcShell` sub-heading in Adobe Exchange. 

### Standalone Application 
![Standalone Application](../../images/experience_cloud_standalone_application.png)

### DX Experience Cloud SPA v1
![DX Experience Cloud SPA v1](../../images/experience_cloud_dx_experience_cloud_spa.png)

## Understanding the Difference 

See [this](../extensions/extension-migration-guide.md#old-file-structure) guide to 
better understand the difference between a Standalone Application and a DX Experience Cloud SPA v1. This guide also provides an overview of the
directory structure for a DX Experience Cloud SPA v1 application (Under **New File Structure**) and a deeper dive into extension point configuration. 

## Migration Steps 

1. Modify local directory 
    1. Create a new `src/dx-excshell-1` folder
    2. Move `web-src`, `test`, `e2e`, `actions` under `src/dx-excshell-1`
2. Add extension configuration 
    1. Create `src/dx-excshell-1/ext.config.yaml` 
    3. Copy the contents of `app.config.yaml` to `src/dx-excshell-1/ext.config.yaml` 
    4. Delete the `application` tag in `src/dx-excshell-1/ext.config.yaml` 
    5. Shift contents of `src/dx-excshell-1/ext.config.yaml` left one tab space 
    6. Add an `operations` tag at the top of `src/dx-excshell-1/ext.config.yaml` with the following contents: 
        ```yaml
        operations:
          view:
            - type: web
              impl: index.html
        ```
    6. Replace the contents of `app.config.yaml` with the following: 
        ```yaml
        extensions:
            dx/excshell/1:
                $include: src/dx-excshell-1/ext.config.yaml
        ```
3. Revoke the application (Optional: Only if application is published)
    1. If admin
        1. Navigate to Adobe Exchange 
        2. Select **Manage** in the top toolbar 
        3. Select **Approved Apps** in the top sub toolbar
        4. Find your application in the list, click **Revoke**
        5. Click **Revoke**
    2. If not admin
        1. Ping admin to revoke
        2. Wait for admin to revoke 
4. Re-initialize application 
    1. Run `aio app init`
        1. Select your organization 
        2. Select your project 
        3. Select **All Templates**
        4. Select the **@adobe/generator-app-excshell** template
        5. Overwrite package.json 
        6. Overwrite .env
5. Deploy your application
    1. Run `aio app deploy` 
7. Submit application for approval
    1. Navigate to the Adobe Developer Console 
    2. Select your project
    3. Select the Production workspace 
    4. Find and click **Submit for Approval**
    5. Fill out the relevant submission details
    6. Find and click **Submit** 
8. Approve application 
    1. If admin
        1. Navigate to Adobe Exchange 
        2. Select **Manage** in the top toolbar 
        3. Select **Apps Pending Review** in the top sub toolbar
        4. Find your application in the list, click **Review**
            1. Note: Application should have `App Builder ExcShell` sub-heading
        5. Fill in approval notes, click **Approve** 
    2. If not admin
        1. Ping admin for approval
        2. Wait for approval
9. Done, your application should now be in the App Builder Catalog in Adobe Experience Cloud
