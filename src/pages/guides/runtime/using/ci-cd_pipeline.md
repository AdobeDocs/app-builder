# CI/CD Pipeline

When it comes to creating a CI/CD pipeline for managing your actions, Adobe I/O Runtime offers a number of tools that can help you build a pipeline that suites your needs. 

Namespaces can be used to separate your different environments: dev, qe, stage or prod. You can create as many namespaces as you want/need. This enables you to deploy the different versions of your actions to different environments, as you promote a given version all the way up to production.

The CLI tools, `wsk` and `wskdeploy`, can help you automate deployments: manage action dependencies and create manifest files that describe your packages/actions. You can read more about using `wskdeploy` [here](creating_actions.md). 

When it comes to exposing your actions as REST APIs, using Swagger definition files helps you to manage the API life cycle: create/edit/delete. You can read more about this [here](creating_rest_apis.md).

## Versioning Actions

One common problem when creating actions is how to handle versioning – how to keep multiple versions of the same action around. An elegant way to solve this problem is to leverage packages.

This is how it works: you would create a new package for every release you want push and deploy all your actions in that package. You can use the version number as part of the package name and you can also create a latest package that will always hold the latest version. This way, a client application has complete freedom to: lock on a specific version, use always the latest, or migrate to a newer version.

AEM Commerce team documented this approach in a [blogpost](https://medium.com/adobetech/functions-packaging-and-versioning-in-adobe-i-o-runtime-7accdfd95e0a).
