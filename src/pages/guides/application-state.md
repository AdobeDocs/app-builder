---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Dealing with Application State
---

# Dealing with Application State

Application state can either be pre-defined variables accessible across all invocations or dynamic values/files uploaded by web users while the app is running. App Builder provides tools to handle each of these scenarios effectively.

## Default Parameters

Sometimes, you may want to set default parameter values for all invocations or bind specific values at the action or package level. These parameters are defined in the `manifest.yaml` file, as shown in the following example:

```yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: Joe
```