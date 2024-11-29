# Setting up the wsk CLI

Download the executable from the [OpenWhisk GitHub repository](https://github.com/apache/incubator-openwhisk-cli/releases). Choose the version that matches your operating system and download the compressed archive.

Extract the executable from the compressed archive and place it in a folder of your choice. Add the folder into which you placed the executable to your PATH environment variable. This allows you to call the CLI from anywhere.

Alternatively, you can build OpenWhisk locally; this produces a copy of the CLI. See the [OpenWhisk documentation](https://github.com/apache/incubator-openwhisk/blob/master/docs/cli.md) for instructions.

The OpenWhisk CLI uses a `.wskprops` file to configure commands to work with a specific namespace: this means that at any given point in time, the `wsk` CLI will interact with only with one namespace. To use a different namespace, change the content of the `.wskprops` file.

If you're using the `aio` CLI, the `.wskprops` file will be configured automatically for whatever integration you select. You can use the OpenWhisk CLI by itself, but that requires manual configuration: create a `.wskprops` file containing your authorization key, namespace, and the path to the Runtime API host. Here’s an example:

```
AUTH=<Your UUID>
APIHOST=adobeioruntime.net 
NAMESPACE=<Your namespace>
```

Place this file in your user folder where the CLI can access it to set those properties when it starts.

An alternative method to configure your instance of the CLI is through a CLI command: open a command-line window and enter:

```
wsk property set --apihost adobeioruntime.net  --auth  <Your auth code from the Runtime team>  namespace  <Your namespace from the Runtime team>
```

Once you've configured the CLI, test it:

```
wsk list
```

It should list the content of the current namespace.

## Next steps

Return to the [Runtime Tools](index.md) Index.

Return to the [Guides Index](../../guides_index.md).
