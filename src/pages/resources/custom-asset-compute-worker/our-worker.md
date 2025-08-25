---
title: Architecture of Our Worker
description: Overview of building a custom worker for the Asset Compute service using imgIX to process and deliver image renditions.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- imgIX
contributors:
  - 'https://github.com/marcinczeczko'
faqs:
- question: What is the role of the custom worker in the Asset Compute service?
  answer: The custom worker produces image renditions by transferring source images to Azure blob storage, generating imgIX URLs with transformation parameters, and fetching processed images back to AEM storage.
- question: How does imgIX fit into the image processing workflow?
  answer: imgIX provides CDN caching, rendering clusters for image processing, and sources images from storage like Azure blob storage, enabling dynamic image transformation and delivery.
- question: Why does the worker download images from imgIX instead of serving from the CDN?
  answer: The worker downloads images from imgIX and uploads them to AEM storage to integrate processed renditions into the AEM binaries cloud storage instead of serving directly via the imgIX CDN.
---
# Architecture of Our Worker

We're going to build a custom worker for Asset Compute service that will produce renditions using the [imgIX][**imgix**] service.

imgIX is an immensely powerful image processing service, composed of three layers:

- imgIX CDN to cache and deliver rendered images.
- imgIX rendering cluster to process the images.
- The source, where source images are hosted, and from which a the rendering cluster initially pulls them. In our case, it will be Azure blob storage.

The service architecture suggests that it's built primarily to provide a layer delivering transformed and optimized assets directly to a website via the dedicated domain. However, for the sake of this tutorial, we will use it differently - our worker will fetch the rendered images from imgIX and transfer them to AEM storage instead of serving them directly from the imgIX Content Delivery Network on the website.

A conceptual diagram of data flow for our solution looks like this:

![Custom worker conceptual architecture](assets/custom-worker-concept.jpg)

- On each processing job, our worker first transfers the source image from AEM binaries cloud storage to the Azure blob storage that a source of assets for imgIX.
- The worker then generates a URL to imgIX. This URL holds the parameters specifying how to transform the image. These parameters come from the processing job, and are provided by the AEM user while configuring what renditions to generate.
- Finally, it downloads the asset from the generated URL and uploads it back to the AEM binaries cloud storage.

[imgix]: https://www.imgix.com/
