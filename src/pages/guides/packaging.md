---
keywords:
  - Adobe I/O
  - Extensibility
  - ISV
  - Developer Tooling
---


# Packaging for Developer Distribution

To get your App Buikder app listed for [Adobe Developer Distribution](https://developer.adobe.com/developer-distribution/), you will need to package it.

The `aio app pack` command will verify and bundle your app. In the root of your app folder, run this command:

```sh
aio app pack
```

After this command completes running, you can find the app package in your app folder as: `dist/app.zip`.

## App Validation

1. `app.config.yaml` 
     - will be checked if it is in a valid format, and will show specific config errors for you to fix, if necessary
2. `package.json` version
     - application version format must be `X.Y.Z`, where X, Y, and Z are non-negative integers
3. files to be packaged. All the files in your app folder will be packaged EXCEPT:
     - files specified in `.gitignore`
     - files specified in `.npmignore`
     - any `dist` folders
     - any dot files (.env, .gitignore, etc)
     - any OS junk files (.DS_Store, thumbs.db, etc)
4. event registrations will be validated (if any)

## Hooks

Two new [hooks](./app-hooks.md) have been added for this command, and will run before and after the command is run (respectively):

1. pre-pack
2. post-pack

Your hook handler function will be passed two items:

1. `appConfig` (object) - this contains the config of the current application
2. `artifactsFolder` (string) - this will be the location of the folder containing all the packaging artifacts that will be bundled
