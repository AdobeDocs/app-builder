---
keywords:
  - cli
  - response headers
title: Setting Response Headers
description: How to set response headers for your static assets
---

# Setting Response Headers

For developers building applications with UI, the static assets (HTML, Javascript, css, images, etc) and so on) are served by our CDN (via the `adobeio-static.net` domain).

Adobe Developer App Builder supports setting response headers for this static content (since aio-cli version 9.3.0).

This feature is applicable to any App Builder applications with UI, and is helpful for several use cases, including:

- Setting `CORS` Headers to enforce access policies
- Enabling `Content Security Policy` for your assets
- Add any `custom headers` required by the App UI

## Rules

App Builder developers can now set the intended response headers in the app manifest file (either `ext.config.yaml` or `app.config.yaml`) during app development.

The manifest allows these headers to be set as rules which can select or reject various type of static assets/paths or all static assets within the app.

These rules are as follows:

| Rule                               | Description                             |
|------------------------------------|-----------------------------------------|
| /*                                 | Include all static content              |
| /&lt;folder name&gt;/*             | Include all files within a given folder |
| \*.html or \*.js etc.              | Include files based on extension        |
| /file or /&lt;folder name&gt;/file | Include a specific file                 |

These rules are applied in the order in which they are specified in the manifest. For example, rules placed after a given rule can override the previous rule if both match the same file.

## Example Usage

```yaml
application:
  actions: actions
  web:
    src: web-src
    response-headers:
      /*: # add headers to all content
        X-custom-header: generic header
      /secure-dir/*: # specific folder
        Content-security-policy: default-src 'self'
      /widgets/*.html: # add headers to all html content
        X-custom-header: widget specific header
        Content-security-policy: default-src 'self'
      /lib/sample.js: # add headers to specific ile
        Content-security-policy: default-src 'self' example.com *.example.com
```

Once headers are added, they can be easily deployed with the app using the `aio app:deploy` command.
Note: the paths specified in rules are relative to the dist folder (created post app build) and not to the app root.

## Allowed Headers

This feature allows developers to set any HTTP or custom response headers, **except** those in the list below.

If these headers are specified in the manifest, they are **ignored** and are not included in the response.

These particular headers are ignored because they are either meant for internal usage or are CDN-specific headers which should not be overridden.

1. accept-ranges
2. age
3. allow
4. alt-svc
5. cache-control
6. connection
7. content-length
8. content-type
9. content-disposition
10. content-encoding
11. content-language
12. content-length
13. date
14. etag
15. expires
16. last-modified
17. location
18. server
19. trailer
20. transfer-encoding
21. upgrade
22. x-cache
