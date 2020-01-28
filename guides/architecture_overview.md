# Adobe Custom Applications - Architecture Overview

## Types of Adobe Custom Applications

An Adobe Custom Application is a serverless application extending [Adobe Product APIs](https://www.adobe.io/apis.html).
It can be of two kinds:

### Headless Applications

In that case, the application consists in a set of serverless actions or sequences deployed to Adobe's serverless platform called [Runtime](https://github.com/AdobeDocs/adobeio-runtime).

This kind of application would integrate well with a remote script or process invoking it, such as an [AEM Assets workflow](https://docs.adobe.com/content/help/en/experience-manager-65/assets/using/assets-workflow.html) or an [ACS activity](https://docs.adobe.com/content/help/en/campaign-standard/using/managing-processes-and-data/data-management-activities/external-api.html).

### Headful Applications

Here, the application is a full-fledged UI Single Page Application delivered out of a Content Delivery Network. It calls directly [Adobe Product APIs](https://www.adobe.io/apis.html) from the client when applicable, or from serverless actions or sequences deployed to Adobe Runtime, and which orchestrate the calls to [Adobe Product APIs](https://www.adobe.io/apis.html), Adobe Identity Management System, or 3rd party APIs.

## JAMStack: Anatomy of an Adobe Custom Application

![JAMStack Architecture](jamstack-anatomy-application.png)

## Components Architecture

