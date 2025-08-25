---
title: Runtimes
description: Overview of Adobe I/O Runtime supported Node.js versions, pre-installed npm modules, and instructions for specifying runtime kinds.
keywords:
- Adobe I/O Runtime
- Node.js versions
- npm modules
- action runtime
- Docker images
# --- FAQs ---
faqs:
- question: Which Node.js versions does Adobe I/O Runtime support?
  answer: Adobe I/O Runtime supports the three latest Node.js versions, including v22.6.0, v20.7.0, and v18.14.2. You should keep your actions updated to use the latest supported version.
- question: Do I need to package npm modules with my action code?
  answer: No, common npm modules like express, openwhisk, body-parser, redis, node-fetch, dnscache, and prom-client are pre-installed in the runtime images.
- question: How can I specify the Node.js version when creating an action?
  answer: Use the --kind flag with the version, for example, `aio rt:action:create actionName fromFile.js --kind nodejs:20` to specify Node.js 20.
- question: Where can I find the Docker images for the runtimes?
  answer: Docker images for supported Node.js versions are available on Docker Hub under adobeapiplatform/adobe-action-nodejs-vXX tags.
- question: Why should I update my action to the latest Node.js version?
  answer: Updating ensures you benefit from the latest security updates and improved cold-start performance with pre-warmed containers.
---
# Runtimes

Adobe I/O Runtime supports the three latest Node.js versions (see the [Node.js release schedule](https://nodejs.org/en/about/previous-releases#release-schedule) for details). We encourage you to keep actions updated to the latest version so you can take advantage of latest security updates and the pre-warmed container feature that dramatically improves cold-start times.

These npm modules are pre-installed, so you don't need to package them with your action code to use them:

### Node.js v22.6.0

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.9",
    "node-fetch": "3.3.2",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v20.7.0

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.9",
    "node-fetch": "3.3.2",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v18.14.2

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.5",
    "node-fetch": "3.3.1",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v16.17.0

    "express": "4.18.1",
    "openwhisk": "3.21.6",
    "body-parser": "1.20.0",
    "redis": "4.1.0",
    "node-fetch": "3.2.4",
    "dnscache": "1.0.2",
    "prom-client": "13.2.0"

### Node.js v14.20.0

    "express": "4.17.1",
    "openwhisk": "3.21.6",
    "body-parser": "1.19.0",
    "cls-hooked": "4.2.2",
    "redis": "3.1.2",
    "node-fetch": "2.6.7",
    "dnscache": "1.0.2",
    "prom-client": "12.0.0"

To specify a kind:

```
aio rt:action:create actionName fromFile.js --kind nodejs:20 
```

or

```
aio rt:action:create actionName fromFile.js --kind nodejs:18 
```

These images are on Docker Hub:

1. [Node 22](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v22/tags)
2. [Node 20](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v20/tags)
3. [Node 18](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v18/tags)
4. [Node 16](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v16/tags)
5. [Node 14](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v14/tags)

## Next steps

Return to the [Runtime Reference Documentation Index](index.md).

Return to the [Guides Index](../../index.md).
