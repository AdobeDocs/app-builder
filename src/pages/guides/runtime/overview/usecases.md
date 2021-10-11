# Use Cases for Adobe I/O Runtime

There are many possible uses for Adobe I/O Runtime&rsquo;s serverless, event-driven, on-demand computing model. In addition to the typical serverless use cases, there are a few that are ideal for Runtime:

If you want to see more real-world examples, some of the apps built on top of I/O Runtime check this list:
* [How Belgian Broadcaster VRT Turned to Adobe I/O Runtime to Dynamically Create Newsletter Content](https://medium.com/adobetech/how-belgian-broadcaster-vrt-turned-to-adobe-i-o-runtime-to-dynamically-create-newsletter-content-5cafe224a2a5)
* [How Bank of America Is Using Adobe I/O Runtime to Boost the Efficiency of Its Personalized Offers in Adobe Target](https://medium.com/adobetech/how-bank-of-america-is-using-adobe-i-o-runtime-to-boost-the-efficiency-of-its-personalized-offers-699de38cf751)
* [How Adobe.com Uses I/O Runtime to Optimize On-Site B2B Personalization](https://medium.com/adobetech/how-adobe-com-uses-i-o-runtime-to-optimize-on-site-b2b-personalization-6c10b9888981)
* [Bots 💙 Adobe I/O Runtime](https://medium.com/adobetech/bots-adobe-i-o-runtime-c89083e1067c)
* [Adobe I/O Runtime: Polishing the Rough Edges of SaaS Solutions](https://medium.com/adobetech/adobe-i-o-runtime-polishing-the-rough-edges-of-saas-solutions-238f82b58765)
* [Serverless GraphQL on Adobe I/O Runtime](https://medium.com/adobetech/serverless-graphql-on-adobe-i-o-runtime-e221d2a8e215)
* [Adobe Campaign Content Recommendations in Email](https://medium.com/adobetech/adobe-campaign-content-recommendations-in-email-b51ced771d7f)
* [Data-Driven Marketing Campaigns using Adobe Experience Platform’s Unified Profile in Adobe Campaign](https://medium.com/adobetech/data-driven-marketing-campaigns-using-adobe-experience-platforms-unified-profile-in-adobe-campaign-9d9a97e183c4)
* [Adobe Campaign Standard and Web Push Notifications](https://medium.com/adobetech/adobe-campaign-standard-and-web-push-notifications-5c12c0f4ada2)
* [Easily Coordinate External Deployments with Cloud Manager and Adobe I/O Events: A Step-by-Step Guide](https://medium.com/adobetech/easily-coordinate-external-deployments-with-cloud-manager-and-adobe-i-o-events-a-step-by-step-bb2f651a18ae)
* [The use case for an Adobe Campaign integration with Microsoft Dynamics](https://medium.com/adobetech/*adobe-campaign-microsoft-dynamics-api-based-crm-integration-36807d329fd5)
* [Getting to Know the Adobe I/O Architecture: Experience Cloud Use Cases](https://medium.com/adobetech/getting-to-know-the-adobe-i-o-architecture-experience-cloud-use-cases-4c63a409ec8c)
* [Creating a Headless Omnichannel Experience in Adobe Experience Manager with Adobe I/O Runtime](https://medium.com/adobetech/headless-commerce-content-management-with-aem-i-o-runtime-87c315283b74)
* [Leveraging Adobe I/O Runtime to Optimize Real-Time Email Triggered by Form Submission](https://medium.com/adobetech/leveraging-adobe-i-o-runtime-to-optimize-real-time-email-triggered-by-form-submission-7558f19bece0)

## Microservices
Microservices offer many benefits, but provisioning server-side support for them can be daunting, whether you&rsquo;re using a traditional server approach or a cloud-based solution. Development teams often find they spend as much or more time configuring the server or cloud solution for fault tolerance, load balancing, logging, and auto-scaling. This expertise is often outside the bounds of the development team, which implies the need for a server admin or admin team to do this work, thus adding to the resource demands of the microservice.

Adobe I/O Runtime is a perfect solution for this problem. By abstracting the server side of the equation and offering automatic scaling and load balancing, Runtime relieves developers of the need to maintain their own server infrastructure, either locally or in the cloud. Runtime&rsquo;s architecture is perfect for building modular solutions, because each function you place in Runtime&rsquo;s serverless cloud is independently deployed and managed and scales independently as well, so wherever the demand for computing from your microservie hits, Runtime can respond at scale. Runtime supports interconnectivity among your functions, so they can call each other, run in sequence, etc. Thus, instead of architecting and maintaining a server-side back end for your microservice, you merely deploy a set of functions that can respond at scale as they&rsquo;re needed.

## Extending Adobe's Cloud Platform
Adobe I/O Runtime lets you extend Adobe&rsquo;s Cloud Platform by deploying your own microservices on top of Adobe's infrastructure. With those microservices, you can interact directly with your content and data and build out services that modify, transform, or automate processes based on your specific business needs. Those services can be invoked with events from Adobe I/O Events or via REST APIs.

## Internet of Things
Connecting intelligent devices to the Internet (IoT) has enabled incredibly useful innovations in home automation, navigation, and many other areas. Adobe I/O Runtime is an excellent choice for hosting functions to support IoT applications:

* IoT applications are often sensor-driven: devices are programmed to respond to external stimuli, such as a change in location or orientation. Under the right circumstances, sensor-driven events can spike from the low level of normal conditions to a flood of sensor events under extreme conditions. This makes designing and maintaining a scalable back end with traditional approaches particularly challenging and costly: either you build a system to handle normal use, which can&rsquo;t scale for peak use, or you build a system to handle peak use, most of the capacity of which sits idle the vast majority of the time.  The auto-scaling capabilities of Adobe I/O Runtime solve this problem, not only enabling your IoT application to continue to function in response to peak sensor events, but eliminating the need for you to design and provision that back end yourself.
* Given the lack of standardization with respect to data formats used in IoT devices, and their need to connect and report to myriad back-end services and related applications, data transformation can be a major challenge: to provide functionality in real time, a device may need to transform data in both directions and depend on transformations among collaborating applications and platforms on the back end. The on-demand, scalable computing resources offered by Adobe I/O Runtime make it much easier to develop and deploy data transformation functions that operate in real time to and from your IoT device.

## API backend
Imagine creating an API for your application without having a server to run it! Adobe I/O Runtime enables just that. Your functions hosted in Runtime&rsquo;s cloud can expose REST APIs to other applications. This makes it possible for you to offer customers a way to program against your Runtime application; it&rsquo;s also a great way to implement a back end for microservices or to customize Adobe's existing APIs to meet your needs. You can also connect your Runtime functions to any API management tool you choose.

## Mobile back end
Mobile back end is an optimal use for Adobe I/O Runtime. Mobile applications often need extensive server-side functionality; however, mobile developers generally don&rsquo;t have much server-side development expertise. With Adobe I/O Runtime, you can build your mobile app and support it dynamically with Runtime functions written in JavaScript and Node.js, inheriting the server-side automation and management of Runtime and gaining the scalability to respond to mobile applications&rsquo; often unpredictable spikes in usage.

## Data processing
Adobe I/O Runtime functions can access any data stored in the Adobe Cloud Platform and can be designed to transform and process data in response to events or conditions, send and receive messages, invoke other functions, and access ACP or other data stores. You can build complete data processing pipelines in Runtime, and even make changes through simple configurations without having to reprogram. Combined with the scalability and flexibility of Runtime, this enables Runtime data processing solutions to be highly agile and responsive to changing requirements.

## Event processing with Adobe I/O Events
As you might imagine, Adobe I/O Runtime is ideally situated to work with Adobe I/O Events. When you combine a platform for hosting event-driven code with a service that fires events you can consume, the implications are obvious: build and deploy your event-driven logic on Adobe I/O Runtime to consume events from Adobe I/O Events. The possibilities are endless.
