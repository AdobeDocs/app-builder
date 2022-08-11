# App Builder Docs

This site is built with [Adobe I/O Theme](https://github.com/adobe/gatsby-theme-aio).

Follow the [instructions](https://github.com/adobe/gatsby-theme-aio#getting-started) to get started.

## Where to ask for help

The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions.

## Prerequisite: Install Yarn 3

This site uses Yarn 3 to manage package dependencies. If you do not have Yarn 3 installed, follow these instructions:

1. Install [Node.js LTS](https://nodejs.org/en/download/). At the time of writing, the latest LTS version is `v16.15.1`.
2. Install Yarn 3 by running the following command:

   ```bash
   corepack enable
   ```

Corepack is a binary shipped with all Node.js releases starting from 16.10.

3. Update Yarn to the latest version by running the following command:

   ```bash
   yarn set version stable
   ```

4. Make sure you are now using version 3.2.2 of Yarn:.

   ```bash
   yarn --version
   ```

That's it. For more information on Yarn 3 usage, see [Yarn usage](https://yarnpkg.com/getting-started/usage).

For the documentation developer, please read these sections on how to:

- [Arrange the structure content of your docs](https://github.com/adobe/gatsby-theme-aio#content-structure)
- [Linking to pages](https://github.com/adobe/gatsby-theme-aio#links)
- [Using assets](https://github.com/adobe/gatsby-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/gatsby-theme-aio#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/gatsby-theme-aio#side-navigation)
- [Using content blocks](https://github.com/adobe/gatsby-theme-aio#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/gatsby-theme-aio#writing-enhanced-markdown)

## How to build the site locally

After installing `yarn` v3 as noted above, you can develop locally by running the following commands:

1. Install the dependencies:

   ```bash
   yarn install
   ```

1. Run a development build:

   ```bash
   yarn dev
   ```

1. Open home page:

   ```bash
   open http://localhost:8000/overview
   ```

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:

```terminal
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/gatsby-theme-aio#deploy-to-azure-storage-static-websites).