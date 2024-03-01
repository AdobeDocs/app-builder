# Runtimes

Adobe I/O Runtime supports Node.js versions 14, 12 and 10. Node v14 is the default image and the one used to create pre-warm cotainers. We encourage you to always update your actions to the latest version in order to take advantage of pre-warm containters feature.

The following npm modules are pre-installed (if your action uses any of these modules, you don&rsquo;t have to package them together with action code):

### Node.js v14

    "express": "4.17.1",
    "openwhisk": "3.21.3",
    "body-parser": "1.19.0",
    "cls-hooked": "4.2.2",
    "redis": "3.1.2",
    "node-fetch": "2.6.1"
    "dnscache": "1.0.2"

### Node.js v12

    "express": "4.17.1",
    "openwhisk": "3.21.2",
    "body-parser": "1.19.0",
    "cls-hooked": "4.2.2",
    "redis": "3.0.2",
    "node-fetch": "2.6.0"
    "dnscache": "1.0.2"

### Node.js v10

    "express": "4.16.4",
    "openwhisk": "3.21.2",
    "body-parser": "1.18.3",
    "cls-hooked": "4.2.2",
    "redis": "2.8.0",
    "request": "2.88.0",
    "request-promise": "4.2.2"
    "dnscache": "1.0.2"

This is how you can specify explicitly this kind:
```
wsk action create actionName fromFile.js --kind nodejs:14 
```
or
```
wsk action create actionName fromFile.js --kind nodejs:12 
```
We will publish this image on GitHub and Docker Hub.
