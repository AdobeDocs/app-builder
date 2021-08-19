---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/marcinczeczko 
---

# Requirements

In order to build and deploy the worker you only need **NodeJS (v10 to v12 LTS)**.
Besides that, you need to have access to couple of services.

## Access to Adobe solutions
- You must have an Adobe organization ID, and have access to [Adobe Experience Cloud][experience-cloud]
- Access to AEM as a Cloud service and Adobe IO Runtime. 
- Access to the [Adobe Project Firefly][firefly-doc]. If you don't,
you can still join the prerelease programme, for details see [How to Get Access to Project Firefly][firefly-get-access].

## 3rd party services

- Azure blob storage, so an Azure subscription is required ([Azure free account][azure-free-account] is enough)
- An account on [imgIX service][imgix]. You can sign up to imgIX for free to try it.

[experience-cloud]: https://www.adobe.com/experience-cloud.html
[firefly-doc]: https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html
[firefly-get-access]: https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html#!AdobeDocs/project-firefly/master/overview/getting_access.md
[azure-free-account]: https://azure.microsoft.com/en-us/free/
[imgix]: https://www.imgix.com/
