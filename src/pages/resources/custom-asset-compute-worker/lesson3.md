---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors: 
  - https://github.com/marcinczeczko 
---

# Implement the worker

Create a new application using AIO CLI

```bash
$> aio app init my-custom-worker
```

Application initialization will ask you a couple of questions:
1. To select your Adobe Organization, followed by the console project selection (pick the one you created in previous steps) and finally choose a project workspace where you added all the required services.
1. Then, to pick the components of the app. Select only **Actions: Deploy Runtime action**.
2. On the type of action, choose only: **Adobe Asset Compute worker**.
3. At last step, you need to provide the name of the worker and wait for the `npm` to finish installing all the dependencies.

Once it's done, edit `.env` file and add the following lines. These are the environment variables the AIO CLI uses. In a
production deployment, you can set them directly on your CI/CD pipelines as environment variables.

```bash
## A path to the private.key you obtained from Adobe Console
ASSET_COMPUTE_PRIVATE_KEY_FILE_PATH=/path/to/the/private.key

## Azure blob storage container you created to simulate AEM binaries cloud storage
AZURE_STORAGE_ACCOUNT=your-storage-account
AZURE_STORAGE_KEY=your-storage-key
AZURE_STORAGE_CONTAINER_NAME=source

# Azure blob storage container used by the imgIX as assets source
IMGIX_STORAGE_ACCOUNT=your-storage-account
IMGIX_STORAGE_KEY=your-storage-key
IMGIX_STORAGE_CONTAINER_NAME=imgix

# A security token you obtained when setting up imgIX source
IMGIX_SECURE_TOKEN=imgx-token
# A imgix domain you defined when setting up imgIX source
IMGIX_DOMAIN=your-subdomain.imgix.net
```

Edit `manifest.yml` file and add `inputs` object, as shown below. This file describes IO Runtime action to be deployed.
And `input` param sets the default parameters with values referenced to our environment variables. Those params are
available in action JS as `param` object.

```yaml
packages:
  __APP_PACKAGE__:
    license: Apache-2.0
    actions:
      czeczek-worker:
        function: actions/custom-worker/index.js
        web: 'yes'
        runtime: 'nodejs:12'
        limits:
          concurrency: 10
        inputs:
          imgixStorageAccount: $IMGIX_STORAGE_ACCOUNT
          imgixStorageKey: $IMGIX_STORAGE_KEY
          imgixStorageContainerName: $IMGIX_STORAGE_CONTAINER_NAME
          imgixSecureToken: $IMGIX_SECURE_TOKEN
          imgixDomain: $IMGIX_DOMAIN
        annotations:
          require-adobe-auth: true
```

We also need to add two dependencies to our project. These are the libraries we will use to simplify access to the Azure
blob storage and to generated signed URL for imgIX.

```bash
$> npm install @adobe/aio-lib-files imgix-core-js
```

Finally, edit the worker source code (located under `my-custom-worker/actions/<worker-name>/index.js`) and replace it
with the following code.

```javascript
'use strict';

const { worker } = require('@adobe/asset-compute-sdk');
//Convinient library provided by adobe that abstract away managing files on cloud storages
const filesLib = require('@adobe/aio-lib-files');
const { downloadFile } = require('@adobe/httptransfer');
const ImgixClient = require('imgix-core-js');

exports.main = worker(async (source, rendition, params) => {
  //Initialize blob storage client used by imgix
  //We're reading the parameters we defined in manifest.yml
  const targetStorage = await filesLib.init({
    azure: {
      storageAccount: params.imgixStorageAccount,
      storageAccessKey: params.imgixStorageKey,
      containerName: params.imgixStorageContainerName,
    },
  });
  //Copy source asset from the AEM binaries storage to the Azure blob storage for imgIX
  // localSrc:true means, the first parameters points to the file in the local file system (asset-compute-sdk abstracts the source blob storage so it's visible as local file)
  // Second arguments defines the path on the target blob storage. We use the same path just to simplify things
  await targetStorage.copy(source.path, source.path, { localSrc: true });

  //Initialize imgix client responsible for generation of signed URLs
  //to our assets accessed via imgIX subdomain
  //We're getting the config params we defined in manifest.yml
  const client = new ImgixClient({
    domain: params.imgixDomain,
    secureURLToken: params.imgixSecureToken,
  });

  //Generate signed URL with the params send by AEM and sign it.
  //All the parameters send by AEM are available under rendition.instructions object
  const url = client.buildURL(source.path, JSON.parse(rendition.instructions.imgix));

  //Finally, download a rendition from a given url and store in AEM azure blob storage so it will be visible in AEM as a rendition
  await downloadFile(url, rendition.path);
});
```
