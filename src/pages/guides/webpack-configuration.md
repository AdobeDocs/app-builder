# Webpack Configuration 

## Overview

App Builder bundles Runtime action code using Webpack. Users can specify a Webpack configuration for an individual action, a set of actions, 
or an entire project. See [here](https://webpack.js.org/configuration/#options) for Webpack configuration options. 

## Configuration File 

When Runtime action code is bundled during `aio app build|run|deploy` the action directory is searched for a webpack config file named `*webpack-config.js`. The search is done first in the directory of the action being built, then the parent directory, up to the project root.

If you want to specify a Webpack configuration for a single action, place the `*webpack-config.js` file in the action folder. 

If you want to specify a Webpack configuration for a set of actions, place the `*webpack-config.js` file in the parent directory of your action
folders. 

If you want to specify a Webpack configuration for an entire project, place the `*webpack-config.js` file in the root directory of your project. 

## Configuration Types

App Builder supports exporting the following configuration types in `*webpack-config.js`. 

### Object
  ```
  module.exports = { 
    mode: 'development' 
  }
  ```
  
### Function that returns an object
  ```
  module.exports = (env) => ({
    mode: 'development'
  })
  ```
  
### Function that returns an array of objects
  ```
  module.exports = (env) => ([
    {
      mode: 'development' 
    },
    {
      mode: 'production'
    }
  ])
  ```
  
### Async function that returns an object
  ```
  module.exports = async (env) => ({
    mode: 'development'
  })
  ```
  
### Async function that returns an array of objects
  ```
  module.exports = async (env) => ([
    {
      mode: 'development' 
    },
    {
      mode: 'production'
    }
  ])
  ```
### Array of objects
  ```
  module.exports = [
    {
      mode: 'development'
    },
    {
      mode: 'production'
    }
  ]
  ```
  
### Array of functions that return objects
  ```
  module.exports = [
    (env) => ({
      mode: 'development'
    }),
    (env) => ({
      mode: 'production'
    })
  ]
  ```
  
### Array of async functions that return objects
  ```
  module.exports = [
    async (env) => ({
      mode: 'development'
    }),
    async (env) => ({
      mode: 'production'
    })
  ]
  ```
 
## Configuration

### Overview

Assuming `config` contains your Webpack configuration: 

```
{
  mode: config.mode || 'production', 
  optimization: {
    minimize: config.optimization.minimize || false
  },
  output: { 
    libraryTarget: config.output.libraryTarget || 'commonjs2',
    path: './dist/${actionPath}/${actionName}-temp/' // Cannot change 
    fileName: `${output.path}/index.js` // Cannot change 
  },
  target: 'node' // Cannot change,
  entry: [
    <path to the action>, 
    ...config.entry
  ],
  resolve: { 
    extensions: [
      '.js', 
      '.json', 
      ...config.extensions
    ],
    mainFields: [ 
      'main',
      ...config.mainFields
    ]
  },
  plugins: [
    new DefaultPlugin({
      WEBPACK_ACTION_BUILD: 'true', 
      `process.env.AIO_CLI_ENV`: ${cliEnv}
    }),
    ...config.plugins
  ]
  
  // ... all other Webpack configuration options are valid

}
```

### Base Options 

App Builder starts off with the following Webpack configuration options, any additional values will be added on for these fields: 

* `entry` - Will always contain the path to the action, additional paths identified in your configuration file will be added on.
* `resolve.extensions` - Will always contain `.js` and `.json`, additional extensions identified in your configuration file will be added on.
* `resolve.mainFields` - Will always contain `main`, additional main fields identified in your configuration file will be added on.
   
### Defaults 

App Builder defaults the following Webpack configuration options if they are not present in your configuration file: 

* `output.libraryTarget` - Will default to `commonjs2`.
* `mode` - Will default to `production`. 
* `optimization.minimize` - Will default to `false`.

### Immutable Options 

App Builder does not allow changing the following Webpack configuration options. These fields will be ignored if present in your configuration file: 

* `target` - This must be `node`. I/O Runtime only supports Node.js as a runtime. 
* `output.path` - Will always be `./dist/${actionPath}/${actionName}-temp/`
* `output.filename` - Will always be `${output.path}/index.js`
  * Note: If supplying multiple configurations, this is true for the first configuration. For all subsequent configurations, it will be 
    `${output.path}/index.[hashname].js`.  
    
## Environment Variables 

If you have chosen to export a function, an async function, or an array of functions from your Webpack configuration file, App Builder will pass the environment to these functions. You can use this, for instance, to make decisions about bundling based on the environment. 

Example: If you exported an environment variable called `MODE` before building your application, you can use this in your Webpack configuration file: 

```
module.exports = (env) => ({
  mode: env.FEATURE_FLAG_PIRATES_BOUNTY ? 'production' : 'development'
})
```
