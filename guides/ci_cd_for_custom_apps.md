# CI/CD for Firefly Applications
A key requirement for application development teams is to continuously integrate and deploy new applications and their updates along the chain of their infrastructure environments.

The same need exists for developers building and deploying Firefly Applications to the Project Firefly serverless infrastructure.

Every new application project created by an entitled organization administrator or developer in the Developer Console will be setup with two named workspaces: Stage and Production. Each workspace will have its own setup:

- List of Adobe services to integrate via user or technical user accounts
- Runtime namespace
- Related credentials and secrets (API Key, access token, Runtime namespace credentials...)

The entitled organization users will also be allowed to create as many additional workspaces as required by their project, whether this is to add an extra stage (e.g. qa, preproduction...) to match their infrastructure needs, or to define developer specific workspaces for each of their development team member to work locally against.

<TODO - insert diagram showing local development workspaces>

## Github Actions Support
A sample CI/CD workflow is provided out-of-the-box on top of [Github Actions](https://github.com/features/actions).
When a developer bootstraps a new Firefly application from the [CLI](https://github.com/adobe/aio-cli) by using the `aio app init` command, the application generator asks the developer whether to `include GitHub Actions based workflows for Build, Test and Deploy`.

If the developer selects this option, the application code that is bootstrapped will contain a `.github` folder containing default [Github Workflows](https://github.com/adobe/generator-aio-app/tree/master/generators/add-ci/.github/workflows) that can be extended at application level depending on the developer's needs.

### Github Workflows

The default Github Workflows enable the following actions based on specific Github events triggered on the application repository:

- On `Pull Request`, the application unit and end-to-end tests are executed by calling `aio app test -u -e` against the requested changes. See the [PR workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/pr_test.yml).

- On `Branch Merge`, the application gets deployed to the `Stage` workspace by calling `aio app deploy`. This includes Runtime for back-end actions and out-of-the-box CDN for SPA if there is a web UI). See the [Deploy Stage workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_stage.yml)

- On `Repository Release`, the application gets deployed to the `Production` workspace by calling `aio app deploy`. This includes Runtime for back-end actions and out-of-the-box CDN for SPA if there is a web UI). See the [Deploy Prod workflow](https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_prod.yml)

### Github Actions for AIO CLI

### Github Secrets



## Bring your own CI/CD pipeline

