---
title: Lesson 1: Configure Services
description: Instructions to configure Azure blob storage, imgIX, and Adobe I/O services for asset management.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Azure Blob Storage
# --- FAQs ---
faqs:
- question: How do I create Azure blob storage containers for this setup?
  answer: Create two containers in your Azure blob storage account: one named 'imgix' for the imgIX service assets, and another named 'source' for local testing purposes.
- question: How do I configure imgIX to use Azure blob storage?
  answer: In your imgIX account, create a source pointing to your Azure blob storage, enable Secure URLs, and note your imgIX subdomain and security token for later use.
- question: How can I test that imgIX is configured correctly with my Azure blob storage?
  answer: Upload an image to the 'imgix' container, sign the image URL using the imgIX dashboard tools, and open the signed URL in a browser to verify the image loads.
- question: Which services should I add to my Adobe I/O project for this integration?
  answer: Add Asset Compute, I/O Management API, and I/O Events services to your Adobe I/O project using the App Builder template.
- question: How do I generate and manage keys for Adobe I/O services?
  answer: When adding the first service in Adobe I/O, choose to generate a key pair, download the zip file, and securely store the private.key for authentication.
contributors:
  - 'https://github.com/marcinczeczko'
---
# Lesson 1: Configure Services
# Lesson 1: Configure Services

## Create Azure blob storage
## Create Azure blob storage

You need to [create Azure blob storage][create-azure-blob] on your Azure account. Then, create two containers:

- First, name it `imgix` - it will be used as assets source for the **imgIX** service.
- Name the second one `source` - it will be required only for local testing purposes to simulate AEM Assets cloud storage.

## Configure imgIX

On your imgIX account, you need to [create a source pointing to the Azure blob storage][imgix-create-azure-source].

- During the setup, define the name of the imgIX subdomain serving transformed images. Write down that domain, since we
- During the setup, define the name of the imgIX subdomain serving transformed images. Write down that domain, since we
  will need it later.
- In the **Security** section, check **Secure URLs** checkbox
- Once the source provisioning is finished, open it and click on the **Show Token** button in the **Security** section. Write down that token, too.

To test your configuration:

1. Upload any asset, e.g. `image.png`, to the `imgix` blob storage container
2. Go to  [https://dashboard.imgix.com/tools][imgix-tools] and sign the image URL using the URL
   `https://<your-subdomain>.imgix.net/image.png`
3. Open the signed URL in the browser to verify the image is loaded

## Configure Adobe I/O
## Configure Adobe I/O

1. Go to the [https://console.adobe.io][adobe-console] and create a [new project using App Builder template][adobe-console-firefly-template].
2. Add the following services to your project workspace:
   - Asset Compute
   - I/O Management API
   - I/O Events
3. When adding the first service, you will be asked to generate keys pair or upload your own. Pick **Generate keys
   pair** and your keys will be downloaded as a zip file.
4. Unzip the file and write down the location to the **private.key**.

[create-azure-blob]: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal 'Create storage account and container'
[imgix-create-azure-source]: https://docs.imgix.com/setup/creating-sources/microsoft-azure 'Setting up your Microsoft Azure Source'
[imgix-tools]: https://dashboard.imgix.com/tools
[adobe-console]: https://console.adobe.io 'Adobe IO Console'
[adobe-console-firefly-template]: ../../get_started/app_builder_get_started/first-app.md#2-creating-a-new-project-on-developer-console 'Creating new project on Adobe Developer console'
