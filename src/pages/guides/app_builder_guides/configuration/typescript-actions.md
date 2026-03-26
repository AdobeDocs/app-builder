---
title: TypeScript Actions
description: >-
  Use TypeScript to write Runtime actions in App Builder applications.
keywords:
  - TypeScript
  - Runtime Actions
  - Webpack
  - Configuration
---

# TypeScript Actions

## Overview

App Builder supports TypeScript for Runtime actions via Webpack's `ts-loader`. You can point your `app.config.yaml` directly to `.ts` files — no manual `tsc` compilation step or duplicated source directories required. This works with `aio app dev`, `aio app build`, and `aio app deploy`.

## Prerequisites

Install the required dev dependencies in your project:

```bash
npm install --save-dev ts-loader typescript
```

## Setup

### 1. Add a Webpack configuration

Create a `webpack-config.js` file in the root of your project (or in an action directory for per-action configuration). See [Webpack Configuration](webpack-configuration.md) for details on file placement and supported export formats.

```javascript
module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }
}
```

> If your project uses ES modules (`"type": "module"` in `package.json`), name this file `webpack-config.cjs` instead so that it is treated as CommonJS. See the [ES module syntax](webpack-configuration.md#es-module-syntax) section for more information.

### 2. Add a TypeScript configuration

Create a `tsconfig.json` file in the root of your project:

```json
{
  "exclude": ["node_modules", "dist"],
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "sourceMap": true
  }
}
```

### 3. Point your actions to `.ts` files

In `app.config.yaml`, set the `function` field of your action to the TypeScript entry file:

```yaml
runtimeManifest:
  packages:
    my-package:
      actions:
        my-action:
          function: actions/my-action/index.ts
          web: 'yes'
          runtime: nodejs:18
```

That's it. App Builder will use Webpack with `ts-loader` to compile your TypeScript action during build and deployment.

## Limitations

- **CommonJS output only** — Runtime actions must produce CommonJS modules. App Builder enforces this automatically (`output.libraryTarget` defaults to `commonjs2`), so no extra configuration is needed.
- **Webpack config must be CommonJS** — The webpack configuration file must use CommonJS syntax (`.js` or `.cjs`). ES module syntax (`.mjs`) is not supported.
- **Immutable Webpack options** — You cannot override `target`, `output.path`, or `output.filename` in your webpack configuration. See [Immutable options](webpack-configuration.md#immutable-options) for details.
- **Debugging** — The VS Code debugger steps through the compiled JavaScript output by default. Adding `devtool: 'inline-source-map'` to your webpack configuration (as shown above) enables source map support, which improves the debugging experience but may not be a perfect 1:1 mapping with your original TypeScript source.

## Example project

The [typescript-app quickstart](https://github.com/adobe/appbuilder-quickstarts/tree/master/typescript-app) provides a complete working example.

## Next steps

- [Webpack Configuration](webpack-configuration.md) — Customize your build process
- [App Builder Configuration Files](configuration.md) — Full `app.config.yaml` reference

Return to [Guides Index](../../index.md).
