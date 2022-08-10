# Adobe App Builder Docs  

This site is built with [Adobe I/O Theme](https://github.com/adobe/gatsby-theme-aio).  

Follow the [instructions](https://github.com/adobe/gatsby-theme-aio#getting-started) to get started.

## Where to ask for help

The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions. 

## How to develop

For local development, simply run :
```
$ npm install
$ npm run dev
$ open localhost:8000/overview
```

For the documentation developer, please read these sections on how to:
- [Arrange the structure content of your docs](https://github.com/adobe/gatsby-theme-aio#content-structure)
- [Linking to pages](https://github.com/adobe/gatsby-theme-aio#links)
- [Using assets](https://github.com/adobe/gatsby-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/gatsby-theme-aio#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/gatsby-theme-aio#side-navigation)
- [Using content blocks](https://github.com/adobe/gatsby-theme-aio#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/gatsby-theme-aio#writing-enhanced-markdown)

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:
```
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/gatsby-theme-aio#deploy-to-azure-storage-static-websites).
