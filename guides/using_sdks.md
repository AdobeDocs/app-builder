# Using Client SDKs for Accessing Adobe APIs

To simplify your interaction with Adobe APIs, we have created a number of libraries for Adobe Experience Cloud solution APIs. These libraries are npm modules that provides a JavaScript abstraction on top of our product APIs. 

You can try it out directly at 
- [Adobe Analytics 2.0 Library](https://github.com/adobe/aio-lib-analytics)
- [Adobe Audience Manager Customer Data](https://github.com/adobe/aio-lib-audience-manager-cd)
- [Adobe Campaign Standard Library](https://github.com/adobe/aio-lib-campaign-standard)
- [Adobe Experience Platform Real-Time Customer Profile](https://github.com/adobe/aio-lib-customer-profile)
- [Adobe Target Library](https://github.com/adobe/aio-lib-target)

You can also get started through the CLI by ```aio app init```, and selecting one of the templates to generate project scaffolding automatically. 

While the current implementation focuses on API wrapping, we are looking to add business abstraction layers in the future. 

## Adobe Analytics API 1.4

While many features of Adobe Analytics API have been [migrated to the new 2.0 APIs](https://www.adobe.io/apis/experiencecloud/analytics/docs.html#!AdobeDocs/analytics-2.0-apis/master/migration-guide.md), a few other features are still available in 1.4 APIs only (e.g. data sources, insertion, real-time data). In that case, you could simply select the `Generic` template for your action, and leverage the available `node-fetch` module to make HTTP request to the API endpoint directly as shown in the boilerplate code. For reference, please see [our example code snippet of getting real-time report data](https://github.com/AdobeDocs/adobeio-samples-firefly-basics/blob/master/actions/analytics14/index.js).
