# Dealing with Application State

Application state could be a pre-defined variable of your action that is accessible across all invocations, or dynamic values or files uploaded by the web users when the app is running. Project Firefly provides the appropriate tools to handle each of these requirements.

## Default parameters

Sometimes you want to bind the same parameter values for all invocations or you just set default values of your action. In either case, you have two different options: setting params at the action level, or at the package level (so all actions in that package can inherit them). These params are set in the `manifest.yaml` file, as the following example.

```yaml
hello-world:
  function: actions/hello/index.js
  runtime: 'nodejs:12'
  inputs:
    name: Joe
```

In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the `.env` file (which is not committed to Git), and reference them in the `manifest.yaml` file.

```bash
# in .env
NAME=Joe
```

```yaml
# in manifest.yaml
hello-world:
  function: actions/hello/index.js
  runtime: 'nodejs:12'
  inputs:
    name: $NAME
```

### Considerations about security

For authentication with Adobe APIs, you should leverage [Project Firefly Security Guideline](https://github.com/AdobeDocs/project-firefly/blob/master/guides/security_overview.md) using our supported SDKs. 

For other 3rd party systems and APIs when provisioning actions with the secrets/passwords is a must, you can then use the default params as demonstrated above. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code.

## State and files persistence at runtime

As part of Project Firefly, you will have out-of-the-box access to file storage and to a key-value store. These are particularly useful when you want to persist data dynamically in the individual action invocations.

To provide zero-config state and file caching for Project Firefly, we have created the [Adobe I/O Files library](https://github.com/adobe/aio-lib-files) and [Adobe I/O State library](https://github.com/adobe/aio-lib-state). The Adobe I/O State library is an npm module that provides a JavaScript abstraction on top of distributed/cloud DBs with a simple key-value store state persistence API; whereas the Adobe I/O Files library provides a JavaScript abstraction on top of cloud blob storages with a simple file-system like persistence API.

The state library is meant for storing and accessing small values, while the files library should be used for storing bigger amounts of data.

To learn more or to try them out, please visit the following GitHub repositories:
- [Adobe I/O File Storage library](https://github.com/adobe/aio-lib-files)
- [Adobe I/O Key/Value Storage library](https://github.com/adobe/aio-lib-state)

After reviewing each of the libraries, you may have noticed that the sample code only requires your Runtime namespace credentials in order to start accessing the cloud services behind the scenes. This is handled through the [Adobe I/O Token Vending Machine](https://github.com/adobe/aio-tvm) (TVM). TVM is a set of Adobe I/O Runtime actions exposed as an API that allows developers to trade their credentials for temporary and restricted tokens to external cloud services. Users authenticate to the TVM with their Adobe I/O Runtime (OpenWhisk) credentials and are only authorized to access their own resources.

You can also opt out of using Runtime (OpenWhisk) and leverage your own cloud services (for example, Azure). Please see the sample code in either of the library GitHub repositories for more information.
