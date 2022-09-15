---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Introduction to Extensions

When App Builder was first introduced, we primarily supported two types of use cases -- Single Page Applications (SPAs) that can be accessed in [Experience Cloud UI](https://experience.adobe.com), and standalone Headless Applications. Over time, we began to see patterns and asks for a more integrated way to extend Adobe products through App Builder. For instance, [AEM Asset Microservices](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/asset-microservices-configure-and-use.html?lang=en) allow developers to build [Custom Processing Profile](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/asset-microservices-configure-and-use.html?lang=en#custom-config) as App Builder applications that can be used in AEM to process assets in batch. However, developer has to manually set up the connection between AEM and their custom processing profiles built on App Builder. 

Introducing **Extensions** -- a new property of App Builder applications that enables developers to build and to extend specific Adobe products in an integrated fashion across our ecosystem. 

## How does it work?
Think of extensions as a contract between an Adobe product and an App Builder application.

Let's revisit the AEM Asset Microservices example. Adobe products, like AEM Asset, can define how they'd like customers to extend the product through App Builder Applications -- what kind of operations is allowed, what kind of data format is expected, etc. This definition is called an **Extension Point**. From the developer's perspective, developer would be able to build applications against these Extension Points that maps to the requirement of the product. Developers will also define **Endpoints** that map to the Extension Point. 

![extension diagram](../../images/extensions.png)

To visualize this in a diagram, you can see that each Adobe product can define as many Extension Points as needed. App Builder applications, on the right side, expose Endpoints that are implementing these defined Extension points. Each App Builder Application can implement none or multiple Extension Points across the Adobe ecosystem. 

This mechanism allows developers to easily validate that the App Builder application built will work in the context of the Adobe product it is extending, and provides a flexible yet integrated way for developers to implement their custom applications. 

## Available Extension Points
Currently, we support 2 Extension Points in App Builder. One for AEM Asset Microservices and one for Experience Cloud UI.

### Experience Cloud UI Extension Point
This Extension Point should be used for developers who are looking to build Single Page Applications (SPAs) that can be accessed by users through [Experience Cloud UI](https://experience.adobe.com).

#### Extension Point Info
- **Title**:  "App Builder Experience Cloud Shell Extension"
- **Name**: `dx/excshell`
- **Version**: `1`
- **Allowed Operations**: 
    - `view`
        - produces `text/html`

### AEM Asset Microservices Extension Point
This Extension Point should be used for developers who want to build AEM Asset Microservices Custom Processing Profiles.

#### Extension Point Info
- **Title**:  "Asset Compute Worker"
- **Name**: `dx/asset-compute/worker`
- **Version**: `1`
- **Allowed Operations**: 
    - `workerProcess` 
        - consumes `application/json`
        - produces `application/json`

## How do I use it in my App Builder Project?
Similar to other properties in an App Builder project, we leverage configurations in your codebase to define Extension properties. Follow the detailed instructions below with sample code to see how you can use it in your project!

### New Project
Simply follow instructions in [Creating your First App Builder Application](../../getting_started/first_app.md), you will be prompted through a few selections that set up the Extension Point info by default in your App Builder project. 

### Migrating from Existing Project or Editing Endpoints
If you have an existing App Builder application prior to July 28, 2021 that you'd like to migrate, or if you'd like to edit existing endpoints, please follow [Extension Migration Guide](extension_migration_guide.md) for more details. 
