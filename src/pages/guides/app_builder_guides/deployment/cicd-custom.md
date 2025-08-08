# Setting up a custom CI/CD pipeline to deploy App Builder apps

To deploy an App Builder app, you can build a CI/CD pipeline with any industry-leading tool and the AIO CLI. The following general steps outline how you can set up a CI/CD pipeline.

## Step 1: Prepare a Workspace for deployment using a CI/CD pipeline

To enable a workspace for deployment via a CI/CD pipeline:

1. Open the [Developer Console](https://developer.adobe.com/console)
2. Navigate to your App Builder Project and Workspace
3. Add the I/O Management API to the workspace. This will add an OAuth Server-to-Server credential to the workspace, if one isn't already present. It will also ensure that the credential has the right scopes to deploy your application.  
4. Click the Download all button on the Workspace overview page to download the workspace.json file.

![Download Workspace JSON](../../../images/download-workspace-config-json.png)

## Step 2: Compute the `.aio` and `.env` files

<InlineAlert slots="text" />

Note: This guide refers to the "root of your App Builder app". The root of your App Builder app is the directory that contains the `app.config.yaml`, `.aio`, and `.env` files.


1. Open your terminal and navigate to the root of your App Builder app.
2. Run `aio app use path/to/workspace/json/from/step1_4.json>`
3. When prompted, be sure to merge the `.aio` and the `.env` files to avoid losing any other configuration you may have added to those files.
4. Get the name of your IMS context for CI/CD and note it down.
   ```bash
   aio config ls --json | jq -r '.project.workspace.details.credentials[] | select(.integration_type == "oauth_server_to_server") | .name' | tr '[:upper:]' '[:lower:]'
   ```

## Step 3: Setting up the secrets in secret store

The AIO CLI relies on the `app.config.yaml`, `.aio`, and `.env` files for all deployment related information. The `aio app deploy` command expects these files to be present at the root of your App Builder app. 

Because the `.aio` and `.env` files can contain sensitive information they must not be committed to version control. Instead, the contents of those files must be stored in a secrets repository of your choice. 

Note: You must store the secrets in such a way that you can recreate the `.aio` and `.env` files at the root of your App Builder app in your CI/CD pipeline.

Depending on the capabilities of your secret store, you could store the contents of the `.aio` and `.env` files (created in step 2) in different ways. We suggest storing the files in their entirety to reduce complexity.

1. You could store the contents of your `.aio` and `.env` files as-is in your secret store.
   ```bash
   cat .aio | pbcopy
   cat .env | pbcopy
   ```

2. Or you could base 64 encode the contents of your `.aio` and `.env` files and store the encoded values as strings in your secret store.
   ```bash
   cat .aio | base64 | pbcopy
   cat .env | base64 | pbcopy
   ```


<InlineAlert slots="text" />

App Builder does not offer a secret storage solution. If you are building a custom CI/CD pipeline, you will need to bring your own secret storage solution to store your application secrets.

## Step 4: Repeat for other workspaces

Repeat steps 1-3 for any workspace to which you wish to deploy via your CI/CD pipeline. 

While storing your secrets in the secret store, ensure you add the workspace name as a prefix or suffix to the secret name. This will allow you to store different values for different workspaces for the same secret name.

So when you deploy your app to a given workspace, you can fetch the secrets for that workspace and recreate the `.aio` and `.env` files correctly.

## Step 5: Installing AIO CLI in your CI/CD pipeline

The AIO CLI is required to deploy App Builder apps. Therefore, you must install the AIO CLI in your CI/CD pipeline to run the `aio app deploy` command. The steps to install AIO CLI could vary from one CI/CD solution to another. However, generally speaking, you would use `npm` for installing AIO CLI on your CI/CD pipeline.

```bash
npm install -g @adobe/aio-cli
```

## Step 6: Writing the deployment script

If you have completed steps 1-4, you can now write the deployment script to deploy your App Builder app via a CI/CD pipeline.

```bash

# Clone or check out the source code from your version control
git clone git@github.com:your-org/your-repo.git

# Navigate to the root of your App Builder app
cd your-repo

# Install your App Builder app dependencies
npm install

# Fetch all the secrets stored in your secret store and create the .aio and .env files
# Ensure you fetch secrets for the workspace to which you wish to deploy your app
echo "Fetching secrets and re-creating the .aio file is left as an exercise for the reader" > .aio
echo "Fetching secrets and re-creating the .env file is left as an exercise for the reader" > .env

# Set the Adobe IMS context to use from Step 2.6
aio context -s <context_name_from_step_2.4>

# Run the deploy command
aio app deploy
```