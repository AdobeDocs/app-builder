---
keywords:
  - cli
  - response headers
title: CDN Response Headers
description: How to set response headers for your static assets
---

# CDN Response Headers

For applications with UI, static assets such as HTML, Javascript, css, and images are served by the Content Content Delivery Network through the `adobeio-static.net` domain. App Builder has supported setting response headers for this static content since aio-cli version 9.3.0.

This feature applies to any App Builder applications with UI, and is helpful for use cases such as:

- Setting `CORS` Headers to enforce access policies
- Controlling web-assets caching behavior via [`Cache-Control` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)
- Enabling `Content Security Policy` for assets
- Adding any `custom headers` required by the application UI

## Rules

App Builder Developers can now set response headers in the application manifest file - either `ext.config.yaml` or `app.config.yaml` - during application development.

The manifest lets headers be set as rules that can select or static assets or paths, or all static assets within the application.

The rules are:

| Rule                               | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| /*                                 | Include all static content                  |
| /&lt;folder name&gt;/*             | Include all files within the named folder   |
| \*.html or \*.js etc.              | Include files based on their file extension |
| /file or /&lt;folder name&gt;/file | Include the named file                      |

Rules are applied in the order specified in the manifest. For example, rules placed after a given rule can override the previous rule if both apply to the same file.

## Example usage

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
      /*.png:
        # cache all png files for 1 hour at CDN level and 1 minute in browser
        cache-control: s-maxage=3600, max-age=60
```

Once headers are added, they can be deployed with the app using the `aio app:deploy` command. Note that the paths specified in rules are relative to the distributable folder created after the application build, and not to the application root.

## Opting Out of Default Response Headers

By default, App Builder may set certain response headers automatically for your web actions. If you want to take full control and override all default response headers with your own custom options, you must explicitly opt out of the defaults.

To do this, update your web action with the `web-custom-options` annotation set to `true` using the CLI:

```bash
aio app action update <your-action-name> --web true -a web-custom-options true
```

Replace `<your-action-name>` with the name of your web action. This command ensures that only the response headers you define (for example, in your manifest or action code) will be applied, and no additional default headers will be set by App Builder.

This is especially important if you require strict control over CORS, security, or other HTTP headers for your application's endpoints.

## Disallowed headers

Developers may set any HTTP or custom response headers except those in the list below. If the listed headers are specified in the manifest, they will be ignored and not included in the response.

Listed headers are ignored because they are either meant for internal use or are CDN-specific headers that should not be overridden.

1. accept-ranges
2. age
3. allow
4. alt-svc
5. connection
6. content-length
7. content-type
8. content-disposition
9. content-encoding
10. content-language
11. content-length
12. date
13. etag
14. expires
15. last-modified
16. location
17. server
18. trailer
19. transfer-encoding
20. upgrade
21. x-cache

## Next steps

This concludes the Configuration section.

Return to [Configuration Overview](configuration.md).

Return to the [Guides Index](../../index.md).
