# Setting up Your Environment

Before you can create and run actions, you have to install and configure a couple of tools on your machine. Please note that for some of the steps (creating integrations in I/O Console) you need to have System Administrator or Developer Role permissions. If you don&rsquo;t have those, you need either to be provisioned with these permissions or someone from your team has to share the credentials.

## Step 1: Install aio CLI and wsk CLI

You need `npm` installed in order to install `aio` (make sure you have the latest versions of Node and npm installed):

`npm install -g @adobe/aio-cli`

For the `wsk` CLI, download the executable from the [OpenWhisk GitHub repository](https://github.com/apache/incubator-openwhisk-cli/releases). Choose the version that matches your operating system and download the compressed archive.

Extract the executable from the compressed archive and place it in a folder of your choice.

Add the folder into which you placed the executable to your `$PATH` environment variable. This enables you to call the CLI from anywhere.

Try to run these commands to check that `aio` and `wsk` were properly installed:

`wsk -h`

and:

`aio -h`

### Creating a Namespace and retrieving the credentials

If your organization has access to I/O Runntime, then you manage namespaces in the [Developer Console](/console). Please note that you need Developer Role or System Administrator permissions in order to do this.

In the Developer Console:
* Create a new `Project`
* Choose one of the workspaces, for example `Production` and then click `Add service` and choose `Runtime` 
* Go to back to `Workspace overview` page and, at the top of the page, click on the `Download all` button. This will download the configuration file for this project -> workspace
* Open this file in a text editor and search for the `runtime` > `namespaces` entry. This is where you will find the namespace `name` and `auth` values you can use to set the .wskprops file or configue the `aio` CLI (see the next sections). 

### Configuring the wsk CLI with a .wskprops file

If you have a `.wskprops` file, then you can use it to configure the `wsk` CLI, so you'll be creating actions in the namespace that is defined in that file.

For Mac, you just need to copy the `.wskprops` in the user home folder.

For Windows, you'll place the `.wskprops` in `C:\Users\<user>`.

### Signing in aio CLI 

There are two ways you can configure your aio CLI: if you have Developer Role or System Administrator permissions, then you can sign in in aio CLI, and then the CLI will be able to retrieve the projects you have created in the Developer Console and select the workspace you want to work in.

This [page](https://github.com/AdobeDocs/project-firefly/blob/master/getting_started/first_app.md#3-signing-in-from-cli) walks you through the steps.

If you don't have the right permissions, but you have the namespace and the authorization for it, then you can manually configure aio CLI (see the next section).

### Configuring aio CLI to use your .wskprops file

The `aio` CLI will pickup credentials from the exact same path as the wsk CLI ( `.wskprops` file )

Additionally, the `aio` CLI allows the use .env files, so if you have multiple namespaces you can have a different set of credentials associated with each project/directory.  `aio` CLI always looks for a .env file in the current working directory before looking to the default location of .wskprops.


## Step 2: Testing the CLI is setup correctly

Once you've configured the CLI, you should test it:

`wsk list`

`aio runtime list`

If successful, you should see a list of the entities defined in your namespace.

You&rsquo;re ready to [deploy your first function](deploy.md).
