---
keywords:
  - App Builder
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Frequently Asked Questions
---

# Frequently Asked Questions

## What is App Builder?
App Builder is a complete design, application, and runtime framework for building 3rd-party cloud native applications. These custom web apps run on Adobe infrastructure and extend the functionality of Adobe Experience Platform and Adobe Experience Cloud. With App Builder, customers can build custom integrations between Adobe products and 3rd-party products, enabling greater efficiency and improved workflows.

## What is “in the box”?
App Builder offers a complete application framework for extending Adobe solutions:
* Support for headful apps (Single Page Applications) or headless apps (microservices, service-to-service type of integrations)
* React-Spectrum as the default UI toolkit (other toolkits can be used)
* CLI and code generators for creating and managing code
* SDK libraries to integrate with Adobe solutions
* Enterprise grade security for accessing data and control end-user access; System Admins can control what App Builder apps are published and who gets access to them
* CI/CD pipeline and building blocks to create a custom pipeline if needed
* Execution environment so you do not need to bring your own infrastructure: serverless platform for backend (Adobe I/O Runtime), CDN for static assets, experience.adobe.com for surfacing the UI, custom events for publishing your events through our infrastructure, and file and data storage to persist application state
* Your App Builder apps will be surfaced within [experience.adobe.com](https://experience.adobe.com), so end-users can move seamlessly between Adobe and App Builder apps.

## Is there a trial available?
Yes. App Builder Trial is now offered as part of Adobe Experience Manager Headless trial. See how App Builder is better with Adobe Experience Manager:

- [Adobe Experience Manager Headless Trial](https://commerce.adobe.com/business-trial/sign-up?items%5B0%5D%5Bid%5D=649A1AF5CBC5467A25E84F2561274821&cli=headless_exl_banner_campaign&co=US&lang=en)

## How can customers license App Builder?
There are several ways to license App Builder. Customers can purchase App Builder with Adobe Experience Manager, Adobe Commerce or to use with Adobe Experience Platform app (AJO, CJA, RTCDP, etc.).

You may be entitled to App Builder as part of a product you previously purchased. 1 pack of App Builder is included with the purchase of Adobe Experience Manager Sites Cloud Service and 1 or several packs with Adobe Commerce on Cloud. If you have Adobe Experience Manager Sites Cloud Service but do not have access to App Builder, please contact your sales team to request 1 pack of App Builder to be added. Adobe Commerce packs will be added automatically by Adobe.

In addition, customers can purchase a license for use with any Adobe Experience Cloud product or add extra packs to add capacity. Please contact your sales team for details.

## What comes in an App Builder license?
App Builder is licensed in packs. Please refer to our [product description page](https://helpx.adobe.com/legal/product-descriptions/adobe-developer-app-builder.html) for details. 

Contact your sales team for details about licensing.

## What are some App Builder use cases?
App Builder is great for any small action that needs to run repeatedly based on events or other triggers. For instance, every time a page is published in AEM, perhaps the web team wants to publish details to a slack channel, so the extended team stays informed. 

It can also be used to create complex applications. For instance, at Adobe, our marketing team uses an application built by our technical marketing team to manage tracking codes for marketing campaigns. It is available to our extended marketing team using the same experience cloud URL as the team uses to access other Adobe Experience Cloud solutions.

Adobe Experience Manager & Adobe Commerce customers can create UI extensions to empower customers to work their own way during AEM authoring or in the commerce admin UI.

Adobe Commerce customers can create an API Mesh. Using this powerful capability, Commerce customers can aggregate API requests from a variety of back-end services using a GraphQL mesh. This dramatically increases performance by calling only the objects you need from APIs.
 
## How is this different than Adobe I/O Runtime?
App Builder builds on top of existing Adobe technologies and Adobe I/O Runtime is one of them. Developers who have used Adobe I/O Runtime will gain extra productivity and developer convenience with App Builder. The addition of state storage, CDN and custom events in App Builder make it easy to address complex use cases that would have needed the purchase of these extra services from other vendors.

## How can I get access to App Builder if my company is already licensed?
App Builder is available to Adobe enterprise users from either the AIO CLI or the Adobe Developer Console. Make sure that you have the correct user permissions. You'll need to have either Developer or System Admin permissions for the Adobe IMS organization that is licensed for App Builder. If you do not have access, please contact the system administrator of your Adobe IMS org for help getting access as a developer.

## How do I request support for App Builder?
App Builder uses the same support process for other Adobe Experience Cloud products. More details [here](https://helpx.adobe.com/support/programs/enterprise-support-programs.html)

## How does App Builder compare to other application frameworks?
App Builder is not a generic serverless framework for creating cloud native apps. It is a framework that is designed from ground-up to support 3rd-parties who want to extend and integrate Adobe Experience Cloud and Adobe Experience Platform. It is pre-integrated with Adobe APIs, Events, Adobe I/O Runtime, and Adobe authentication/authorization. 

App Builder is the fastest & easiest way for a developer to extend and integrate with Adobe enterprise solutions.
 
## Can I extend “App Builder”?
Yes. App Builder was built from the ground-up with extensibility in mind. From the way we develop the core functionalities (open source) to how we enable developers to swap the out of the box components with their own components.

## Are the tools open sourced?
Yes, we develop our tools under Apache License Version 2.0 and developers can submit Pull Requests. We are always happy to see external contributions! I/O Runtime is built on Apache OpenWhisk, another open source project.
 
## Can I use Python (or other language)?
No. At the moment we only support JavaScript and the Node.js universe. This covers a large majority of code used by the web today and with NPM support there are likely ready made libraries that you can bring into your 
 
## How does App Builder simplify the distribution of custom applications for my company?
Enterprises can use Adobe Exchange for controlling the application lifecycle (test, publish, unpublish) and the Adobe enterprise user access control for deciding what users get access to what App Builder apps.
 
## Can I use App Builder to extend Document Cloud or Creative Cloud products?
Today, App Builder focuses on Adobe Experience Platform and Adobe Experience Cloud. We may include App Builder access in the future for Adobe Document Cloud and Adobe Creative Cloud.

## Is App Builder available to individuals not part of a company?
App Builder is available to Adobe enterprise customers or partners who want to extend and integrate Adobe Experience Platform and Adobe Experience Cloud solutions. Currently, it is not available to individual developers who are not part of an Adobe enterprise or partner organization.

