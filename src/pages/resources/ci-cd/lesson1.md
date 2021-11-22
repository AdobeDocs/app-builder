---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling 
---

# Lesson 1: Setup CI/CD

App Builder comes with pre-defined GitHub actions to manage your CI/CD workflow. **GitHub actions can only work once the App Builder app and the corresponding GitHub actions are committed to a GitHub repository.**

## Setup your GitHub repository for your App Builder App

To put your App Builder App up on GitHub, you'll need to create a repository for it to live in. You can follow these [steps](https://help.github.com/en/github/getting-started-with-github/create-a-repo) to create an empty repository.
Once your repository is available on GitHub, you can copy your repository url e.g. `https://github.com/<org>/<project_name>.git`.

Then in the command line, use `git clone https://github.com/<org>/<project_name>.git` to clone the repository to your local system.

Go to the project folder with `cd <project_name>` and run the command `aio app init` to bootstrap a new App Builder Application from the [CLI](https://github.com/adobe/aio-cli), the application generator will ask whether to include GitHub Actions based workflows for Build, Test and Deploy.

![bootstrap](assets/bootstrap.png)

## GitHub actions

The CI/CD workflow relies on Adobe I/O GitHub Actions published on the GitHub Marketplace:
                                                                              
* `adobe/aio-cli-setup-action` used to install and configure the [CLI](https://github.com/adobe/aio-cli) on the GitHub infrastructure running the workflow that invoked the action. See [CLI Setup](https://github.com/marketplace/actions/aio-cli-setup).
* `adobe/aio-apps-action` used to centralize the support for a GitHub workflow to leverage several application specific commands, such as testing via `aio app test` and deployment via `aio app deploy`. See [Apps](https://github.com/adobe/aio-apps-action).                                                                              
 
By selecting the CI/CD workflow option, the application code will be initialized with an additional `.github` folder at its root. 

This folder contains default GitHub Workflows that can be customized and extended if needed. 

**pr_test.yml** is the GitHub action that will run the App unit tests on the stage environment by calling `aio app test` against the requested changes. It will run anytime the [pull_request](https://help.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-event-pull_request) event occurs.

```yaml
name: AIO App CI

on: [pull_request]
jobs:
  test:
    name: Test PR
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        node-version: ['14']
        os: [macOS-latest, ubuntu-latest, windows-latest]
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install
        run: npm i
      - name: Setup CLI
        uses: adobe/aio-cli-setup-action@1.0.0
        with:
          os: ${{ matrix.os }}
      - name: Build
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: build
          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}
      - name: Test
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: test
```

**deploy_stage.yml** is the GitHub action that will deploy the App Builder App to the stage environment on every new commit on the `master` branch by calling `aio app deploy`. 
It will run anytime the [push](https://help.github.com/en/actions/reference/events-that-trigger-workflows#push-event-push) event occurs on the `master` branch. 

```yaml
name: AIO App CI

on:
  push:
    branches:
      - master
jobs:
  deploy:
    name: Deploy to Stage
    runs-on: ${{ matrix.os }}
    strategy:
      max-parallel: 1
      matrix:
        node-version: ['14']
        os: [ubuntu-latest]
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install
        run: npm i
      - name: Setup CLI
        uses: adobe/aio-cli-setup-action@1.0.0
        with:
          os: ${{ matrix.os }}
      - name: Build
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: build
          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}
      - name: Deploy
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: deploy
          AIO_RUNTIME_AUTH: ${{ secrets.AIO_RUNTIME_AUTH_STAGE }}
          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}
```

**deploy_prod.yml** is the GitHub action that will deploy the Firefly App to the production environment by calling `aio app deploy`. It will run anytime the [release](https://help.github.com/en/actions/reference/events-that-trigger-workflows#release-event-release) event occurs. Please read [GitHub's documentation ](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository) to learn how to perform releases. 

```yaml
name: AIO App CI

on:
  release:
    types: [published]
jobs:
  deploy:
    name: Deploy to Prod
    runs-on: ${{ matrix.os }}
    strategy:
      max-parallel: 1
      matrix:
        node-version: ['14']
        os: [ubuntu-latest]
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install
        run: npm i
      - name: Setup CLI
        uses: adobe/aio-cli-setup-action@1.0.0
        with:
          os: ${{ matrix.os }}
      - name: Build
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: build
          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_PROD }}
      - name: Deploy
        uses: adobe/aio-apps-action@1.0.0
        with:
          os: ${{ matrix.os }}
          command: deploy
          AIO_RUNTIME_AUTH: ${{ secrets.AIO_RUNTIME_AUTH_PROD }}
          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_PROD }} 
```  

The back-end serverless actions get deployed to Runtime, while the SPA gets deployed to the out-of-the-box CDN for every deployment whether to stage or production.    

For that, we'll push the project on GitHub with `git commit "Initial commit" && git push origin master` which will commit the Firefly App to the `master` branch of the GitHub repository.

The GitHub actions defined in `deploy_stage.yml` will run by default. Go to `https://github.com/<org>/<project_name>/actions` to see the workflow running:

![workflow-failure](assets/workflow-failure.png)

**By default, the workflow will fail as we didn't specify the GitHub secrets yet.**

## GitHub secrets

To differentiate stage from production, the GitHub actions rely on [GitHub secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).
Encrypted secrets allow you to store sensitive information, such as access tokens, in your repository. 

By default, the secrets required for `deploy_prod.yml` for the **production environment** are named: 
* `AIO_RUNTIME_NAMESPACE_PROD`
* `AIO_RUNTIME_AUTH_PROD`

And the secrets required for `deploy_stage.yml` and `pr_test.yml` for the **stage environment** are named: 
* `AIO_RUNTIME_NAMESPACE_STAGE`
* `AIO_RUNTIME_AUTH_STAGE`

To add a secret to your project:
1. Go to `https://github.com/<org>/<project_name>/settings/secrets`
2. Type the name of your secret e.g. `AIO_RUNTIME_NAMESPACE_PROD` in the "Name" input box.
3. Type the value for your secret. 

![secrets](assets/secrets.png)

If you can't add secrets to the repository, the reason could be that:
* You're not the repository owner if the repository is a user account repository.
* You don't have admin access for an organization repository.
* You don't have write access to the repository if you're using the [GitHub Actions secrets API](https://developer.github.com/v3/actions/secrets/#create-or-update-a-secret-for-a-repository)

**The secrets value can be retrieved in the [Developer Console](https://console.adobe.io/)** from where you can download the stage and production namespace and credential.

![developer-console](assets/developer-console.png)  

Follow these steps to retrieve the value for the secrets `AIO_RUNTIME_NAMESPACE_STAGE`, `AIO_RUNTIME_AUTH_STAGE` and `AIO_RUNTIME_NAMESPACE_PROD`, `AIO_RUNTIME_AUTH_PRD`: 

1. Go to the [Developer Console](https://console.adobe.io/)
2. Select the right org, project and workspace. 
3. Click on the Download all button on the top right. 

This will download a `json` file like the following:

```
{
    "project": {
        "id": "...",
        "name": "...",
        "title": "...",
        "org": {
            "id": "...",
            "name": "...",
            "ims_org_id": "..."
        },
        "workspace": {
            "id": "...",
            "name": "...",
            "title": "...",
            "description": "...",
            "action_url": "...",
            "app_url": "...",
            "details": {
                "credentials": [],
                "services": [],
                "runtime": {
                    "namespaces": [
                        {
                            "name": AIO_RUNTIME_NAMESPACE_VALUE,
                            "auth": AIO_RUNTIME_AUTH_VALUE
                        }
                    ]
                }
            }
        }
    }
}
```

Now you can copy the value of `AIO_RUNTIME_NAMESPACE_VALUE` and to `AIO_RUNTIME_AUTH_VALUE` to your GitHub secrets. 
Simply repeat the steps for your stage / production workspace. 

**Alternatively you can also use the CLI to retrieve these values.** 

Simply run the following commands:

```
aio where // Shows you where your CLI config points to in terms of org/project/workspace

aio console org list // List which org you can work with
aio console org select <orgId> // Select the org you want to work with

aio console project list // List which project you can work with
aio console project select <projectid> // Select the project you want to work with

aio console workspace list // List which workspace you can work with
aio console workspace select <wkspId> // Select the workspace you want to work with

aio app use -m // Merge the selected environment settings from the Developer Console into the current working environment.  
```

Then go to the `.env` file in your project and copy the values of `AIO_runtime_namespace` and `AIO_runtime_auth` into your GitHub secrets.
Simply repeat the steps for stage / production by switching to another workspace with `aio console workspace select <wkspId>`.   

