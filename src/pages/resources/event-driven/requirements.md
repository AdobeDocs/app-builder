---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/Yu1986'
title: Codelab Environment Requirements
---

import Requirements from '../transclusions/_requirements.md'

<Requirements/>

## Codelab environment

In addition to above pre-requisites, please install the [Adobe I/O Events CLI Plugin](https://github.com/adobe/aio-cli-plugin-events):
 
```bash
npm install -g @adobe/aio-cli-plugin-events
```  

We assume you have access to create integration on [Adobe I/O Console](https://console.adobe.io/) with `I/O Management Service` needs to be enabled for the integration. This will help create the JWT token with adobeio_api scope which is required for all the API calls.

![webhook](assets/event.png)


