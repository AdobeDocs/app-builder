# Webpack Configuration 

## Overview

App Builder bundles Runtime action code using Webpack. Users can specify a Webpack configuration for an individual action, a set of actions, 
or an entire project. See [here](https://webpack.js.org/configuration/#options) for Webpack configuration options. 

When Runtime code is bundled, the CLI will search for a `*webpack-config.js` file starting at the path of the action code, working up to the root 
of the project. 

If you want to specify a webpack configuration for a single action, place the `*webpack-config.js` file in the action folder. 

If you want to specify a webpack configuration for a set of actions, place the `*webpack-config.js` file in the parent directory of your action
folders. 

If you want to specify a webpack configuration for an entire project, place the `*webpack-config.js` file in the root directory of your project. 

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
  module.exports = () => ({
    mode: 'development'
  })
  ```
  
### Function that returns an array of objects
  ```
  module.exports = () => ([
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
  module.exports = async () => ({
    mode: 'development'
  })
  ```
  
### Async function that returns an array of objects
  ```
  module.exports = async () => ([
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
    () => ({
      mode: 'development'
    }),
    () => ({
      mode: 'production'
    })
  ]
  ```
  
### Array of async functions that return objects
  ```
  module.exports = [
    async () => ({
      mode: 'development'
    }),
    async () => ({
      mode: 'production'
    })
  ]
  ```
  
## Defaults 

App Builder defaults the following Webpack configuration options: 

* `output.libraryTarget` - Will default to `commonjs2`.
* `mode` - Will default to `production`. 
* `optimization.minimize` - Will default to `false`.

## Immutable Options 

App Builder does not allow changing the following Webpack configuration options: 

* `target` - This must be `node`. I/O Runtime only supports Node.js as a runtime. 
* `output.path` - Will always be `./dist/${actionPath}/${actionName}-temp/`
* `output.filename` - Will always be `${output.path}/index.js`
  * Note: If supplying multiple configurations, this is true for the first configuration. For all subsequent configurations, it will be 
    `${output.path}/index.[hashname].js`.  
