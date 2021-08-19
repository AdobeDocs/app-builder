---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/marcinczeczko 
---

# Configure services

## Create Azure blob storages

You need to [create Azure blob storage][create-azure-blob] on your Azure account. Then, create two containers:

- First, name it `imgix` - it will be used as assets source for the **imgIX** service.
- The second one, name it `source` - it will be required only for local testing purposes to simulate AEM assets cloud
  storage.

## Configure imgIX

On your imgIX account, you need to [create a source pointing to the Azure blob storage][imgix-create-azure-source].

- During the setup, you define the name of the imgIX subdomain serving transformed images. Write down that domain as we
  will need it later.
- In the **Security** section check **Secure URLs** checkbox
- Once the source provisioning is finished, you need to open it and click on the **Show Token** button in the
  **Security** section. Write down that token as we will need it later.

To test your configuration:

1. Upload any asset to the `imgix` blob storage container, e.g. `image.png`
2. Go to the [https://dashboard.imgix.com/tools][imgix-tools] and sign image URL (use the URL
   `https://<your-subdomain>.imgix.net/image.png`)
3. Open signed URL in the browser to verify the image is loaded.

## Configure Adobe IO

1. Go to the [https://console.adobe.io][adobe-console] and create a [new project using Firefly template][adobe-console-firefly-template].
1. Add the following services to your project workspace:
   - Asset Compute
   - I/O Management API
   - I/O Events
2. When adding the first service, you will be asked to generate keys pair or upload your own. Pick **Generate keys
   pair** and your keys will be downloaded as a zip file.
3. Unzip the file and write down the location to the **private.key**.

[create-azure-blob]: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal 'Create storage account and container'
[imgix-create-azure-source]: https://docs.imgix.com/setup/creating-sources/microsoft-azure 'Setting up your Microsoft Azure Source'
[imgix-tools]: https://dashboard.imgix.com/tools
[adobe-console]: https://console.adobe.io 'Adobe IO Console'
[adobe-console-firefly-template]: https://github.com/AdobeDocs/project-firefly/blob/master/getting_started/first_app.md#2-creating-a-new-project-on-developer-console 'Creating new project on Adobe developer console'