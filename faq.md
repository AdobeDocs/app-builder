# Frequently Asked Questions

## What is Project Firefly?
Project Firefly is a complete design, application, and runtime framework for building 3rd-party cloud native applications. These custom web apps run on Adobe infrastructure and extend the functionality of Adobe Experience Platform and Adobe Experience Cloud. With Project Firefly, customers can build custom integrations between Adobe products and 3rd-party products, enabling greater efficiency and improved workflows.
 
## When is Project Firefly going to be publicly available?
Project Firefly is available starting on May 18, 2020. We invite enterprise customers and partners to join our Developer Preview release. We will announce the General Availability release at a later time.
 
## What is a “Developer Preview” release?
We are still working on finalizing the capabilities and feature set of Project Firefly. By “previewing” the technology, customers and partners can try the functionality and give feedback to our product team (who use the information to further shape the development of the product).

However, some of the stack behind Firefly is production ready and customers have been using it in production for some time: Adobe I/O Runtime, I/O Events, Adobe solution APIs, and Adobe authorization and authentication.
 
## What is the support for Project Firefly?
For developer support type of requests, we encourage developers to use our [forum](https://experienceleaguecommunities.adobe.com/t5/project-firefly/ct-p/project-firefly). In addition, feature requests or bugs can be submitted on our public repositories – [CLI repo](https://github.com/adobe/aio-cli) and [SDK repo]( https://github.com/adobe/aio-sdk). Enterprise Customer support is not available during the “Developer Preview” phase.
 
## What is the pricing / licensing?
Project Firefly is available at no cost to enterprise customers and partners for the duration of the Developer Preview. Pricing and licensing details will be announced later this year.
 
## Who is this offering for?
Project Firefly is available to Adobe enterprise customers or partners who want to extend and integrate Adobe Experience Platform and Adobe Experience Cloud solutions. Currently, it is not available to individual developers who are not part of an Adobe enterprise or partner organization.
 
## How does someone get access to Project Firefly?
You can apply for access on [Adobe’s Prelease forum] (http://www.adobeprerelease.com) -> Project Firefly -> Apply. The following information is needed:
* Your Adobe Organization ID. We are granting access to organizations, not to individuals. You can retrieve your Organization ID from [Adobe Admin Console](https://adminconsole.adobe.com), it is part of the URL (something like some_hash@AdobeOrg)
* Describe your use case. For example: “I want to extend/integrate Adobe Experience Platform” or “Adobe Campaign Standard”
* Once your organization has been onboarded, anyone who has a Developer Role or System Administrator permissions will be able to create projects for Firefly in the [Developer Console](https://console.adobe.io)
 
## What is the relationship with Adobe Experience Platform and Adobe Experience Cloud?
Project Firefly is part of Adobe Experience Platform, under a workstream called Cloud Extensibility that allows customers and partners to extend the functionality of Adobe Experience Platform and Adobe Experience Cloud solutions.
Firefly offers a consistent way to extend Adobe enterprise solutions, so regardless of which one you choose to extend there is always the same developer experience.

## What is “in the box”?
Project Firefly offers a complete application framework for extending Adobe solutions:
* Support for headful apps (Single Page Applications) or headless apps (microservices, service-to-service type of integrations)
* React-Spectrum as the default UI toolkit (other toolkits can be used)
* CLI and code generators for creating and managing the code
* SDK libraries to integrate with Adobe solutions
* Enterprise grade security for accessing data and control end-user access; System Admins can control what Firefly apps are published and who gets access to them
* CI/CD pipeline and building blocks to create a custom pipeline if needed
* Execution environment so you do not need to bring your own infrastructure: serverless platform for backend (Adobe I/O Runtime), CDN for static assets, experience.adobe.com for surfacing the UI, custom events for publishing your events through our infrastructure, and file and data storage to persist application state
* Your Firefly apps will be surfaced within the experience.adobe.com, so end-users can move seamlessly between Adobe and Firefly apps.
 
## Can I extend “Project Firefly”?
Yes. Firefly was built from the ground-up with extensibility in mind. From the way we develop the core functionalities (open source) to how we enable developers to swap the components with their own components.
This enables developers to extend the reach and complexity of the use cases that can be built on top of Firefly.
 
## Are the tools open sourced?
Yes, we develop our tools under Apache License Version 2.0 and developers can submit Pull Requests. We are always happy to see external contributions! I/O Runtime is built on top of Apache OpenWhisk, another open source project.
 
## How is this different than Adobe I/O Runtime?
Project Firefly builds on top of existing Adobe technologies and Adobe I/O Runtime is one of them. Developers looking to use Adobe I/O Runtime will be getting extra productivity and developer convenience when using Firefly. For example, creating Single Page Applications that run on top of Adobe I/O Runtime is simple when using Firefly.
 
## What resources are available for developers wishing to try it?
We have public developer docs, code labs, and videos. In addition to this, we host public webinars; work with your Adobe account manager to find out when is the next one.
 
## Can I use Python (or any other language)?
No. The only language supported is JavaScript and you can use the Node.js universe.
 
## Why did you select JavaScript and Node.js as the only supported language?
About 75% of world-wide serverless code is written using JavaScript and Node.js. The rich ecosystem, low-entry barrier, and high performances in serverless context are the main arguments for this choice.
 
## How does Project Firefly simplify the distribution of custom applications for my company?
We enabled enterprises to use Adobe Exchange for controlling the application lifecycle (test, publish, unpublish) and the Adobe enterprise user access control for deciding what users get access to what Firefly apps.
 
## How can I use Project Firefly to extend Document Cloud or Creative Cloud products?
Today, Project Firefly focuses on Adobe Experience Platform and Adobe Experience Cloud. We are looking at how to expand and include Document Cloud and Creative Cloud solutions.
 
## How does Project Firefly compare to other application frameworks?
Project Firefly is not a generic framework for creating cloud native apps. It is a framework that is designed from ground-up to support 3rd-parties who want to extend and integrate Adobe Experience Cloud and Adobe Experience Platform. It is pre-integrated with Adobe APIs, Events, Adobe I/O Runtime, and Adobe authentication/authorization. 

Our value proposition is that Project Firefly is the fastest and easiest way for a developer to extend and integrate with Adobe enterprise solutions.