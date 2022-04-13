---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Frequently Asked Questions

## What is App Builder?
App Builder is a complete design, application, and runtime framework for building 3rd-party cloud native applications. These custom web apps run on Adobe infrastructure and extend the functionality of Adobe Experience Platform and Adobe Experience Cloud. With App Builder, customers can build custom integrations between Adobe products and 3rd-party products, enabling greater efficiency and improved workflows.
 
## When is App Builder going to be publicly available?
App Builder is available starting on May 18, 2020. We invite enterprise customers and partners to join our Developer Preview release. We will announce the General Availability release at a later time.
 
## What is a “Developer Preview” release?
By “previewing” the technology, customers and partners can try the functionality and give feedback to our product team to further shape our product.  We are constantly working on extending the capabilities and feature set of App Builder

Some of the stack behind App Builder is production ready and customers have been using it in production for some time: Adobe I/O Runtime, I/O Events, Adobe solution APIs, and Adobe authorization and authentication.
 
## What is the support for App Builder?
For developer support type of requests, we encourage developers to use our [forum](https://experienceleaguecommunities.adobe.com/t5/project-firefly/ct-p/project-firefly). In addition, feature requests or bugs can be submitted on our public repositories – [CLI repo](https://github.com/adobe/aio-cli) and [SDK repo]( https://github.com/adobe/aio-sdk). Enterprise Customer support is not available during the “Developer Preview” phase.
 
## What is the pricing / licensing?
App Builder is available at no cost to enterprise customers and partners for the duration of the Developer Preview. Pricing and licensing details will be announced later this year.
 
## Who is this offering for?
App Builder is available to Adobe enterprise customers or partners who want to extend and integrate Adobe Experience Platform and Adobe Experience Cloud solutions. Currently, it is not available to individual developers who are not part of an Adobe enterprise or partner organization.
 
## How does someone get access to App Builder?
You can apply for access on [Adobe’s Prelease forum](http://www.adobeprerelease.com) -> App Builder -> Apply. The following information is needed:
* Your Adobe Organization ID and Organization Name. We are granting access to organizations, not to individuals. You can retrieve your Organization ID from [Adobe Admin Console](https://adminconsole.adobe.com), the ID is part of the URL (something like some_hash@AdobeOrg) and the Name is displayed in the top-right corner.
* Describe your use case. For example: “I want to extend/integrate Adobe Experience Platform” or “Adobe Campaign Standard”.
* Once your organization has been onboarded, anyone who has a Developer Role or System Administrator permissions will be able to create projects for App Builder in [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui).
 
## What is the relationship with Adobe Experience Platform and Adobe Experience Cloud?
App Builder is part of Adobe Experience Platform, under a workstream called Cloud Extensibility that allows customers and partners to extend the functionality of Adobe Experience Platform and Adobe Experience Cloud solutions.

App Builder offers a consistent way to extend Adobe enterprise solutions, so regardless of which one you choose to extend there is always the same developer experience.

## What is “in the box”?
App Builder offers a complete application framework for extending Adobe solutions:
* Support for headful apps (Single Page Applications) or headless apps (microservices, service-to-service type of integrations)
* React-Spectrum as the default UI toolkit (other toolkits can be used)
* CLI and code generators for creating and managing the code
* SDK libraries to integrate with Adobe solutions
* Enterprise grade security for accessing data and control end-user access; System Admins can control what App Builder apps are published and who gets access to them
* CI/CD pipeline and building blocks to create a custom pipeline if needed
* Execution environment so you do not need to bring your own infrastructure: serverless platform for backend (Adobe I/O Runtime), CDN for static assets, experience.adobe.com for surfacing the UI, custom events for publishing your events through our infrastructure, and file and data storage to persist application state
* Your App Builder apps will be surfaced within the experience.adobe.com, so end-users can move seamlessly between Adobe and App Builder apps.
 
## Can I extend “App Builder”?
Yes. App Builder was built from the ground-up with extensibility in mind. From the way we develop the core functionalities (open source) to how we enable developers to swap the components with their own components.

This enables developers to extend the reach and complexity of the use cases that can be built on top of App Builder.
 
## Are the tools open sourced?
Yes, we develop our tools under Apache License Version 2.0 and developers can submit Pull Requests. We are always happy to see external contributions! I/O Runtime is built on top of Apache OpenWhisk, another open source project.
 
## How is this different than Adobe I/O Runtime?
App Builder builds on top of existing Adobe technologies and Adobe I/O Runtime is one of them. Developers looking to use Adobe I/O Runtime will be getting extra productivity and developer convenience when using App Builder. For example, creating Single Page Applications that run on top of Adobe I/O Runtime is simple when using App Builder.
 
## What resources are available for developers wishing to try it?
We have public developer docs, code labs, and videos. In addition to this, we host public webinars; work with your Adobe account manager to find out when is the next one.
 
## Can I use Python (or any other language)?
No. The only language supported is JavaScript and you can use the Node.js universe.
 
## Why did you select JavaScript and Node.js as the only supported language?
About 75% of world-wide serverless code is written using JavaScript and Node.js. The rich ecosystem, low-entry barrier, and high performances in serverless context are the main arguments for this choice.
 
## How does App Builder simplify the distribution of custom applications for my company?
We enabled enterprises to use Adobe Exchange for controlling the application lifecycle (test, publish, unpublish) and the Adobe enterprise user access control for deciding what users get access to what App Builder apps.
 
## How can I use App Builder to extend Document Cloud or Creative Cloud products?
Today, App Builder focuses on Adobe Experience Platform and Adobe Experience Cloud. We are looking at how to expand and include Document Cloud and Creative Cloud solutions.
 
## How does App Builder compare to other application frameworks?
App Builder is not a generic framework for creating cloud native apps. It is a framework that is designed from ground-up to support 3rd-parties who want to extend and integrate Adobe Experience Cloud and Adobe Experience Platform. It is pre-integrated with Adobe APIs, Events, Adobe I/O Runtime, and Adobe authentication/authorization. 

Our value proposition is that Project Firefly is the fastest and easiest way for a developer to extend and integrate with Adobe enterprise solutions.

## Which languages are supported in I/O Runtime?  
For now, Adobe I/O Runtime only supports Node.js. We might add support for other languages in the future.

## Where we execute your actions?
I/O Runtime runs in Azure in multiple regions. We deploy your code in all regions and execute it in the closest region to the caller (latency-based routing). You can't restrict the execution to a specific region only.

You can find more information about the regions and how you can check where your actions are being executed here - [Multiple Regions](../guides/runtime/reference/multiple_regions.md).

## Which limits are imposed onto actions?  
All available limits (and the default values) are listed here: [System Settings](../guides/runtime/using/system_settings.md). Notable limits are the timeout for functions and the maximum payload that can get posted to a function.

## Developer Support

You can use the [Forums](https://experienceleaguecommunities.adobe.com/t5/adobe-i-o-cloud-extensibility/ct-p/adobe-io) for developer support related questions.
