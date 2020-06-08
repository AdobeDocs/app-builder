
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
