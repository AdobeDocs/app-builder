
# Project Firefly application tooling lifecycle event hooks

Project Firefly applications created with [our CLI](https://github.com/adobe/aio-cli) are inherently npm packages.
This means they support many of the npm conveniences node developers expect.

`package.json` may include the following scripts which are triggered at various times while an app is being built, deployed and/or run.

## Sample hooks configuration

For example, pre and post hooks can be defined for the `run`, `build` and `deploy` operations in the package.json file of your app.

`aio app run` supports:
```json
  "scripts": {
    "pre-app-run": "echo pre-app-run",
    "post-app-run": "echo post-app-run",
  }
  ```

`aio app build` supports:
```json
  "scripts": {
    "pre-app-build": "echo pre-app-build",
    "post-app-build": "echo post-app-build",
  }
  ```

`aio app deploy` supports:
```json
  "scripts": {
    "pre-app-build": "echo pre-app-build",
    "post-app-build": "echo post-app-build",
    "pre-app-deploy": "echo pre-app-deploy",
    "post-app-deploy": "echo post-app-deploy"
  }
  ```

  You can also substitute the scripts for building and deploying actions and the web assets by using your own scripts.

  `aio app build` supports:
  ```json
  "scripts": {
    "build-actions": "echo build-actions",
    "build-static": "echo build-static",
  }
  ```

  `aio app deploy` supports:
  ```json
  "scripts": {
    "build-actions": "echo build-actions",
    "build-static": "echo build-static",
    "deploy-actions": "echo deploy-actions",
    "deploy-static": "echo deploy-static",
  }
  ```


## Sample hooks flow

The following diagram illustrates how your custom hooks will be executed within the application build and deploy operations which are triggered from the `aio app build` and `aio app deploy` commands:

![aio-app-build lifecycle](../images/aio-app-build.png)

![aio-app-deploy lifecycle](../images/aio-app-deploy.png)

# NPM script hooks

Use of Project Firefly event hooks does not interfere with use of npm scripts, however you will need to use `npm run ..` to trigger them.
The only _default_ script that Firefly tooling calls is `test`
`aio app test -> npm test`, and in turn, npm calls `pretest` and `posttest` around your actual test script.

[How npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts)
