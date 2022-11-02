---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---


# App Builder application tooling lifecycle event hooks

## Command Support

`aio app run` supports:
```yaml
hooks:
  pre-app-run: echo pre-app-run
  post-app-run: echo post-app-run
  pre-app-build: echo pre-app-build
  post-app-build: echo post-app-build
  pre-app-deploy: echo pre-app-deploy
  post-app-deploy: echo post-app-deploy
  build-actions: echo build-actions
  deploy-actions: echo deploy-actions
  build-static: echo build-static
  serve-static: echo serve-static
  pre-app-undeploy: echo pre-app-undeploy
  post-app-undeploy: echo post-app-undeploy
  undeploy-actions: echo undeploy-actions
  undeploy-static: echo undeploy-static
```

`aio app build` supports:
```yaml
hooks:
  pre-app-build: echo pre-app-build
  post-app-build: echo post-app-build
  build-actions: echo build-actions
  build-static: echo build-static
 ```

`aio app deploy` supports:
```yaml
hooks:
  pre-app-build: echo pre-app-build
  post-app-build: echo post-app-build
  pre-app-deploy: echo pre-app-deploy
  post-app-deploy: echo post-app-deploy
  build-actions: echo build-actions
  build-static: echo build-static
  deploy-actions: echo deploy-actions
  deploy-static: echo deploy-static
```

`aio app undeploy` supports:
```yaml
hooks:
  pre-app-undeploy: echo pre-app-undeploy
  post-app-undeploy: echo post-app-undeploy
  undeploy-actions: echo undeploy-actions
  undeploy-static: echo undeploy-static
```

`aio app test` supports:
```yaml
hooks:
  test: echo this is your custom test runner
```

## Use cases

`aio app run` hooks:
- manage additional local development tooling that is not managed by the out-of-the-box flow

`aio app build` **build-static** and **build-actions** hooks:
- build actions to include static files with the action zipfile (for templates like in server-side rendering)
- build the web assets with a different bundler and configuration, for example webpack

`aio app deploy` **deploy-static** and **deploy-actions** hooks:
- support additional deployment steps (e.g. deploy to multiple servers or locations)

`aio app undeploy` **undeploy-static** and **undeploy-actions** hooks:
- support additional un-deployment steps (e.g. un-deploy from multiple servers or locations)

`aio app test` **test** hook:
- support a custom test runner for your app or extension

## Legacy App (no extensions)

In the root of your app, you will have to add a `hooks` key in the `app.config.yaml` file, under the `application` key. Example:
```
application:
  hooks:
    pre-app-run: echo pre-app-run
```

If you add extensions to a standalone app via `aio app add extension`, note that your `app.config.yaml` hooks will always run first, then your extension hooks in each `ext.config.yaml` will be run.

## App with Extensions

In your app extension folder (typically at `src/EXTENSION_NAME`), find the `ext.config.yaml` file, and add in a `hooks` key. Example:
```
hooks:
  pre-app-run: echo pre-app-run
```

## Hooks flow

The following diagram illustrates how your custom hooks will be executed within the application via the various commands:

![aio-app-run lifecycle](../images/aio-app-run.png)

![aio-app-build lifecycle](../images/aio-app-build.png)

![aio-app-deploy lifecycle](../images/aio-app-deploy.png)

![aio-app-undeploy lifecycle](../images/aio-app-undeploy.png)

