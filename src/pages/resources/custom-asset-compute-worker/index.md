---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Custom Asset Compute Worker
description: Building a Custom Asset Compute Worker leveraging 3rd-party services to generate intelligent renditions in AEM.
contributors: 
  - https://github.com/marcinczeczko 
---

# Build custom Asset Compute worker

![front-banner](assets/hero-banner.jpg)
<a href="https://www.freepik.com/vectors/banner">Hero banner created by starline - www.freepik.com</a>

> *This CodeLab is based on the [**How to generate intelligent renditions with AEM as a Cloud**][original-post] blog post.*

Image resizing or format conversion is a relatively easy task when doing renditions in **Adobe Experience Manager**. 
Your project might require more robust approaches supported by intelligent image services. You might need to change 
images to greyscale, or intelligently crop the image around faces. 

This codelab will guide you through the creating a [custom worker for Asset Compute][asset-compute-extensions] using [Project Firefly][firefly-home], and how to use it in [Adobe Experience Manager as a Cloud service][aem-cloud].
  
[original-post]: https://tech.cognifide.com/blog/2020/how-to-generate-intelligent-renditions-aem-cloud/
[firefly-home]: https://github.com/AdobeDocs/project-firefly
[asset-compute-extensions]: https://docs.adobe.com/content/help/en/asset-compute/using/extend/understand-extensibility.html
[aem-cloud]: https://docs.adobe.com/content/help/en/experience-manager-cloud-service/landing/home.html