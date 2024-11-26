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

yaml
hello-world:
  function: actions/hello/index.js
  inputs:
    name: Joe

In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the .env file (which is not committed to Git), and reference them in the manifest.yaml file.

## Feature Matrix

|       | Files     | State    | State Legacy
| ----------- | ----------- |----------- | --------- |
| read <br/> write <br/> delete | Y | Y | Y |
| list | Y | Y | N
| streams | Y | N | N
| copy | Y | N | N
| deleteAll | N | Y | N
| sharing | Y (pre-sign URLs) | N | N
| Time-To-Live | N | Y | Y
| max TTL | infinite | 365 days | infinite
| max file/value size | 200GB | 1MB | 2MB |
| max key size | 1KB | 1KB | 1KB |
| key charset | open | alphanumeric with _-. | any but /\?# |
| max request load | N/A | 10MB/min, 1MB/s <br/>(scalable) | 900 RU/min (~KB/min) |
| max storage | 1TB | 1GB (scalable) | 10GB |
| regions | East US <br/> West US read-only | Amer (US) <br/>Emea (EU)<br/> Apac (JPN) | East US <br/> Europe read-only
| consistency | strong | strong | eventual