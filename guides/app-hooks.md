
# Firefly application tooling lifecycle event hooks

Firefly applications created with our tooling are inherently npm packages.
This means they support many of the npm conveniences node developers expect.

package.json may include the following scripts which are triggered at various times while an app is being built, deployed and/or run.

```
  "scripts": {
    "pre-app-run": "echo pre-app-run",
    "post-app-run": "echo post-app-run",
    "pre-app-build": "echo pre-app-build",
    "post-app-build": "echo post-app-build",
    "pre-app-deploy": "echo pre-app-deploy",
    "post-app-deploy": "echo post-app-deploy"
  }
  ```

![aio-app-deploy lifecycle](../images/aio-app-deploy.png)

# NPM script hooks

Use of Firefly event hooks does not interfere with use of npm scripts, however you will need to use `npm run ..` to trigger them.
The only _default_ script that Firefly tooling calls is `test`
`aio app test -> npm test`, and in turn, npm calls `pretest` and `posttest` around your actual test script.

[How npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts)