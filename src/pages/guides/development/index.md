---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Development

## Localhost Dev Server

The aio-cli includes a development server for seamless local development, enabling you to run, develop, and test your applications on localhost. Traffic is securely served over HTTPS using a self-signed certificate. This server supports hot-reloading, allowing you to instantly see the effects of any changes made to your application.

> Please be aware: If you receive an 'unsafe site' warning, you may need to accept this certificate explicitly. This is common with self-signed certificates. Upon the initial page load, you may need to manually trust this certificate in your browser settings.

## aio app dev vs. aio app run

These commands are very similar but offer several distinct differences giving you several ways of working with your application.
Both commands allow you to do browser debugging and run a local webserver to serve your frontend on localhost.  Both commands support browser hot reload on frontend code changes.

When you use the command `aio app run`, before the localhost webserver is started the following happens:
- your action code is transpiled, zipped, and deployed to Runtime.
- web action urls are written to `/src/dx-excshell-1/web-src/src/config.json`
- frontend code is built and served on localhost
- web action calls from your frontend are direct to Runtime
- action logs are output in the terminal ( polling )
- changes to action code are re-built and re-deployed ( hot reload )
- activation records are kept, and may be queried for outputs, timing, logs, etc.
- logs may be forwarded

When you use the command `aio app dev`
- web action urls are written to `/src/dx-excshell-1/web-src/src/config.json`
  - urls are of the form `https://localhost:PORT/api/v1/web/<package-name>/<action-name>`
- frontend code is built and served on localhost
- action calls from your frontend are run in a debuggable local node process
- action logs are immediately output to the terminal
- changes to action code are loaded on the next call to your action ( modules are not cached )
- there are no activation records
- logs cannot be forwarded

## State-lib and Files-lib usage

There are also differences in what your actions can do in either case. The storage libraries have security restrictions limiting calls from outside of Runtime actions. This means if your action needs either state/files libs, it will fail with `aio app dev`.  Third party apis may have similar restrictions.

## Debugging

The following covers how you can debug your App Builder application frontend and backend code with full source maps support using VS Code Debugging and/or Chrome DevTools

> Technically, any debugger that can attach to Node.js can be used to debug App Builder applications, although some of the details will differ from the configurations covered here. For details on node debugging see: 


### Debugging with VS Code

Create a file named .vscode/launch.json at the root of your project with the following content:

```json
{
  "version": "0.3.0",
  "configurations": [
    {
      "name": "App Builder: debug actions",
      "type": "node-terminal",
      "request": "launch",
      "command": "aio app dev",
      "skipFiles": [
        "<node_internals>/**/*.js",
        "${workspaceFolder}/node_modules/**/*.js"
      ]
    }, {
      "name": "App Builder: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "aio app dev",
      "sourceMapPathOverrides": {
        "/__parcel_source_root/*": "${webRoot}/*"
      },
      "skipFiles": [
        "<node_internals>/**/*.js",
        "${workspaceFolder}/node_modules/**/*.js"
      ],
      "serverReadyAction": {
        "pattern": "server running on port : ([0-9]+)",
        "uriFormat": "https://localhost:%s",
        "action": "debugWithChrome",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}
```

1. Open the Debug panel (Ctrl+Shift+D on Windows/Linux, ⇧+⌘+D on macOS)
2. Select a launch configuration
3. Press F5 or select Debug: Start Debugging from the Command Palette to start your debugging session.

> Note: This debug configuration is dynamic and allows you to set a port in the .env file <br/>
> ex. <br/>
> &nbsp;  `PORT=3000`