# Setting up the wsk CLI

Download the executable from the [OpenWhisk GitHub repository](https://github.com/apache/incubator-openwhisk-cli/releases). Choose the version that matches your operating system and download the compressed archive.

Extract the executable from the compressed archive and place it in a folder of your choice.
Add the folder into which you placed the executable to your PATH environment variable. This enables you to call the CLI from anywhere.

Alternatively, you can choose to build OpenWhisk locally; this produces a copy of the CLI. See the [OpenWhisk documentation](https://github.com/apache/incubator-openwhisk/blob/master/docs/cli.md) for instructions.

The OpenWhisk CLI uses a `.wskprops` file to configure the commands to work with a specific namespace: this means that at any given point in time, the `wsk` CLI will talk with only with one namespace. If you want to use a different namespace, you have to change the content of the `.wskprops` file.

If you&rsquo;re using the `aio` CLI, the `.wskprops` file will be configured automatically for whatever integration you select. You can also use the OpenWhisk CLI by itself, but it requires manual configuration. You will have to create a `.wskprops` file containing your authorization key, your namespace, and the path to the Runtime API host. Here’s an example:

```
AUTH=<Your UUID>
APIHOST=adobeioruntime.net 
NAMESPACE=<Your namespace>
```

You place this file in your user folder, where the CLI can access it to set those properties when it starts.

An alternative method to configure your instance of the CLI is to do it through a CLI command. Open a command-line window and type the following command:

```
wsk property set --apihost adobeioruntime.net  --auth  <Your auth code from the Runtime team>  namespace  <Your namespace from the Runtime team>
```

Once you&rsquo;ve configured the CLI, you should test it:

```
wsk list
```

This should list the content of the current namespace.
