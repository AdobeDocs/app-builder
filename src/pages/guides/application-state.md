---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Dealing with Application State
---

# Dealing with Application State

Application state could be a pre-defined variable of your action that is accessible across all invocations, or dynamic values or files uploaded by the web users when the app is running. App Builder provides the appropriate tools to handle each of these requirements.

## Default parameters

Sometimes you want to bind the same parameter values for all invocations or you just set default values of your action. In either case, you have two different options: setting params at the action level, or at the package level (so all actions in that package can inherit them). These params are set in the manifest.yaml file, as the following example.

```yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: Joe
```

In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the .env file (which is not committed to Git), and reference them in the manifest.yaml file.

```bash
# in .env
NAME=Joe
```

```yaml
# in manifest.yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: $NAME
```

### Considerations about security

For authentication with Adobe APIs, you should leverage [App Builder Security Guideline](./security/index.md) using our supported SDKs.

For other 3rd party systems and APIs when provisioning actions with the secrets/passwords is a must, you can then use the default params as demonstrated above. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code.

## Persistence at runtime

As part of App Builder, you will have out-of-the-box access to *Files* and *State*, our two storage services meant for persisting data dynamically from your Runtime actions.

No pre-configuration is required, just install the libraries and use them in your project. We will be transparently using your App Builder credentials to authorize and entitle your requests.

*When should I use Files vs State?*