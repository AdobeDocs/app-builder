---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Using Client SDKs for Accessing Adobe APIs
---

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

## Client SDK Initialization

In order to initialize the client SDK, you need to provide the API key and access token as mandatory params. Additionally, some APIs require a tenant name (Analytics, Campaign Standard, Target) or org ID (Audience Manager) or both (AEP Customer Profile). Below is an example of AEP Customer Profile.

```javascript
const client = await CustomerProfile.init(params.tenant, orgId, params.apiKey, token)
```

Among these parameters, `orgId` and `token` can be obtained from the request headers (more about that in [Security Overview](./security/index.md)). For `token` specifically we provide the `getBearerToken(params)` method in the auto-generated utilities under `actions/utils.js`.

```javascript
const token = getBearerToken(params)
const orgId = params.__ow_headers['x-gw-ims-org-id']
```

The other two params `tenant` and `apiKey` have to be passed as default parameters ([more details](./application-state.md#default-parameters)). Particularly, you would set the real values as environment variables in the `.env` file that are mapped to the action default params in the `manifest.yml` file. Below are sample snippets taken from these files.

```bash
# in .env
SERVICE_API_KEY=your_api_key
CUSTOMER_PROFILE_TENANT=your_tenant_name
```

```yaml
# in manifest.yml
customer-profile:
  function: actions/customer-profile/index.js
  web: 'yes'
  runtime: 'nodejs:12'
  inputs:
    LOG_LEVEL: debug
    tenant: $CUSTOMER_PROFILE_TENANT
    apiKey: $SERVICE_API_KEY
  annotations:
    require-adobe-auth: true
    final: true
```

Please note that, most of the above steps are already taken care of after actions are created from the app template with `aio app init` or `aio app add action` commands, supposing your project is properly set up with the relevant API services. All you need to do are setting the value of tenant (if required) and customize the action code for your needs.

## Adobe Analytics API 1.4

While many features of Adobe Analytics API have been [migrated to the new 2.0 APIs](https://developer.adobe.com/apis/experiencecloud/analytics/docs#!AdobeDocs/analytics-2.0-apis/master/migration-guide.md), a few other features are still available in 1.4 APIs only (e.g. data sources, insertion, real-time data). In that case, you could simply select the `Generic` template for your action, and leverage the available `node-fetch` module to make HTTP request to the API endpoint directly as shown in the boilerplate code. For reference, please see [our example code snippet of getting real-time report data](https://github.com/AdobeDocs/adobeio-samples-firefly-basics/blob/master/actions/analytics14/index.js).
