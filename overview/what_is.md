# What is Project Firefly

Project Firefly is a complete framework that enables enterprise developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure. It leverages modern technologies (JAM stack, serverless computing, Node, and React) and ensures best practices when building applications (event-driven architecture, microservices, continuous integration, and delivery).

From a developer perspective, the main components are:
*	Single Page Application (SPA) - you build a SPA that uses React Spectrum for the client side, which is the same UI toolkit used by Adobe solutions.
*	For the backend, you create microservices and orchestrate APIs by leveraging I/O Runtime (Adobe’s serverless platform).
*	The main developer tools are the CLI, SDKs, Adobe Services and Developer Console. Support for Adobe authentication, end-user access control, publishing/consuming custom events, storing data and files, CI/CD pipelines, CDN, and developer sandboxes are provided out-of-the-box.
*	The execution environment is [Adobe Experience Cloud](https://experience.adobe.com). Your custom apps will be living side-by-side with the Adobe Experience Cloud solutions and will be executed in the context of the organization and its authenticated employees.

## How it Works

At a high level, there are three main stages a custom app would go through: build, test and publish.

### Build 

You start in the [Developer Console](https://console.adobe.io) by creating a new project, adding credentials for the Adobe APIs you want to use in your app (e.g. Adobe Campaign) and defining the sandboxes you need (prod, stage, sandboxes for developers). With the project in place, you are ready to set your local development environment.

This will allow the CLI to use the project and deploy the code to the right environments. The CLI can also help with scaffolding the application. Based on what you are trying to create, you can pick one of the available templates to get code generated. This generates code for the client side and microservices for the backend. 

### Deploy and Testing

Now that you have something to run, you can use the CLI to deploy the app into your sandbox or a GitHub based CI/CD pipeline if you want to have tighter control over the production environment. This will push the microservices to I/O Runtime and static files (HTML, JS, CSS, images) to the CDN. 

With this step completed, you can now run the application in the context of Experience Cloud and you can simulate different end-users using the app. At this point, the application is not yet published, meaning end-users will not be able to see it and only the developers can interact with it.

### Publish

When you are ready to share the application with your end-users, you initiate the publish process from the Developer Console. Once the application is approved by an Admin, business users will be able to find it in Experience Cloud and use it if they have the right permissions.

## Why Would You Use Project Firefly?

The main reasons you would use this framework are:
*	Time to value – if you want to extend Adobe solutions, this is the fastest way to do it.
*	User context – your users don’t need to switch contexts or authenticate with a different user/password; they move seamlessly between Adobe solutions and custom apps, which also have the same look and feel as the Adobe solutions.
*	Security – API authorization and user access control is offered out-of-the-box. Furthermore, user access control is managed the same way as it is for Adobe solutions (in Adobe Admin Console, with the same user permissions and groups).
*	No infrastructure to manage – you can create one app or hundreds of apps, you can have one user or thousands of users, in all cases you don’t need to think about infrastructure. We scale up behind the scenes and route traffic to the closest region without you having to do anything.
*	Adobe-native – this framework is integrated with Adobe solutions and services, meaning that there is less code that you need to write, deploy, or test and more functionality is available out-of-the-box. It also means that you are future-proofing your code, as you are able to incorporate new Adobe capabilities with the least amount of friction.

## Who is This Framework For?

This framework is available to Adobe enterprise customers and Adobe partners (working with Adobe enterprise customers) who are looking to extend Adobe Experience Cloud solutions. The end-user for the custom app are the employees working for the enterprise and the apps are installed by the enterprise for the enterprise.

If you are familiar with modern web technologies and comfortable with JavaScript, you can get started today.

## Example Use Cases

Here are some of the types of apps that can be built on top of this framework:
*	Custom dashboards or other decision making support tools that use data from Adobe solutions and/or data from other systems to empower business people and executives to make decisions.
*	Custom experiences that enable your users to use Adobe solutions the way they want instead of forcing them to use only the out-of-the-box user experience.
*	Custom integrations between Adobe universe and home-grown solutions or other 3rd-party systems. This can include apps with no UI or apps that have a UI.
*	Extending Adobe built-in functionality, such as Adobe Experience Manager (AEM) Assets.

## Where to Go Next

To learn more about Project Firefly, please start by reading the following:
* [Architecture Overview](guides/architecture_overview.md)
* [How to Get Access to Project Firefly](overview/getting_access.md)