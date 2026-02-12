---
keywords:
  - CDN
  - Content Delivery Network
  - Caching
  - Static Assets
  - Performance
title: CDN Overview
description: Learn how App Builder's Content Delivery Network delivers your application's static assets globally with built-in caching and compression.
---

# CDN Overview

App Builder includes a built-in Content Delivery Network (CDN) that serves your application's static assets globally. When you deploy an App Builder application with a UI, static assets such as HTML, JavaScript, CSS, and images are automatically deployed to the CDN.

The CDN is provisioned on the `adobeio-static.net` domain, with each workspace receiving a dedicated subdomain based on its Runtime namespace. This ensures complete tenant isolation between applications.

## Global Network Architecture

App Builder's CDN distributes your static assets across a global edge network, ensuring low-latency access for users worldwide. The architecture provides:

- **Edge caching**: Assets are cached at edge locations close to your users
- **Automatic provisioning**: The CDN is automatically set up when you create an App Builder workspace
- **Tenant isolation**: Each Runtime namespace has its own subdomain, ensuring strict separation between applications

### URL Structure

When you deploy your application, static assets are available at:

```
https://<namespace>.adobeio-static.net/index.html
```

For example, if your namespace is `1234-myproject-stage` and you deploy the app, the URL would be:

```
https://1234-myproject-stage.adobeio-static.net/index.html
```

## Features

The App Builder CDN provides several built-in features to optimize delivery of your static assets:

| Feature | Description |
|---------|-------------|
| **Automatic compression** | Assets are compressed using modern algorithms for faster delivery |
| **Edge caching** | Content is cached at edge locations worldwide |
| **HTTPS by default** | All assets are served over secure HTTPS connections |

## Default Caching Behavior

The CDN enforces default caching policies, governed by the HTTP `Cache-Control` header, with durations specified in seconds. By default, assets are cached for 60 seconds, improving performance for high-traffic sites while ensuring that updates become available within 1 minute after deployment. This approach optimizes both speed and the rapid propagation of changes.

## Caching for Runtime Actions

Responses from runtime actions are not cached directly by the CDN; instead, they are subject to a secondary caching layer with certain limitations:
- The maximum cache duration is 30 minutes.
- Once cached, the content cannot be invalidated manually.

To enable caching for an action, set the `Cache-Control` header in your response:

```javascript
async function main(params) {
  return {
    headers: {
      'Cache-Control': 'max-age=1800'
    },
    statusCode: 200,
    body: { message: 'This response is cached for 30 minutes.' }
  }
}
```

Caching action responses can significantly improve performance and reduce costs by avoiding repeated action invocations for identical requests.

## Default Root
The CDN automatically serves a default document. URLs ending with a trailing slash or lacking a file extension are redirected to the default `index.html` file.
```
/docs/  => /docs/index.html
/docs   => /docs/index.html
```
## Default Error Handling
Apps can provide a custom error document. When a URL does not correspond to an existing file, the CDN will look for and serve `/404.html` as the error page. If `/404.html` is not present, a default error document will be displayed instead.


## Path Versioning
Including a version identifier in your file or folder names is highly recommended. The default Parcel build process takes care of this automatically. Versioning guarantees that each file instance is uniquely named—creating a distinct cache key for every version. This enables the use of longer `Cache-Control: max-age` values, since only HTML file paths remain consistent between deployments. Deployments are atomic: every deployment replaces all existing files with the newly built set.

Examples:
```
index.html
404.html
web-src.c244e3e9.js
web-src.96dfb607.css
404.58deabca.css
```

## Response Headers

You can configure custom response headers for your static assets using the application manifest file (`app.config.yaml` or `ext.config.yaml`). This is useful for setting security headers, CORS policies, and other custom headers.

For detailed information on configuring response headers, see [Setting Response Headers](../deployment/setting-response-headers.md).

### Disallowed Headers

Certain headers are managed by the CDN and cannot be overridden. If specified in your manifest, they will be ignored:

#### Common Examples
- `content-type`
- `content-length`
- `content-encoding`
- `etag`
- `last-modified`
- `x-cache`

For the complete list, see [Disallowed Headers](../deployment/setting-response-headers.md#disallowed-headers).

## Cache Management

### Cache Invalidation

Redeploying your application with `aio app deploy` does not automatically invalidate the CDN cache.

By default, `index.html` has a short max-age, so new versions are typically available to users within a minute. If you've configured a longer max-age for `index.html`, you may need to manually invalidate the cache.

Cache invalidation removes the cached item so subsequent requests will fetch the latest version.

App Builder only allows cache invalidation of the default document, `index.html`. This limitation underscores the importance of path versioning.

You can trigger a cache invalidation from the Developer Console on the CDN configuration page. It may take up to 10 minutes for invalidations to propagate across all cache regions.
### Browser Cache vs. Server (CDN) Cache

When users visit your site, there are two main types of caching that affect how quickly content is delivered and updated: **browser cache** and **server (CDN) cache**.

**Browser cache** refers to temporary storage on the end user's device. When they access a website, their browser may keep a copy of files (such as images, scripts, or HTML) to speed up future visits. This reduces the need to download the same files again, improving load times. However, only the individual visitor can clear their own browser cache—by refreshing with a hard reload, clearing history, or using browser settings. As a developer or site owner, you cannot remotely force a user's browser to discard cached files.

**Server (CDN) cache** operates on the edge servers that distribute your content globally. The CDN keeps copies of your static assets and dynamic responses to serve them to multiple users efficiently. Unlike browser cache, you (as the site owner) can control aspects of CDN cache—such as cache invalidation—via deployment tools or the CDN configuration. This allows you to purge, refresh, or update files for all users at once.

### Cache-Control: max-age vs. s-maxage

- **max-age**: Specifies, in seconds, how long a resource will be considered fresh (cacheable) by browsers and all intermediate caches. It is used by both browsers and CDNs when present.
- **s-maxage**: A directive specifically for shared caches (like CDNs or proxies). If set, it overrides `max-age` in those environments, but browsers will ignore it.

**Example:**
```
Cache-Control: max-age=600, s-maxage=1200
```
- Browsers will cache the resource for 10 minutes (600 seconds).
- CDNs and proxies may cache it for 20 minutes (1200 seconds).

Setting both directives allows you to control how long end users vs. shared network caches retain your content, providing more precise cache management.

**Key takeaway:**  
- You can clear CDN cache for all users with an invalidation (where supported).
- You cannot directly clear browser cache for site visitors; only the visitors themselves can do so.

### Cache is not a guarantee

While CDNs are designed to cache static assets for fast delivery, it's important to understand that cache behavior is not absolute—**not every file is guaranteed to be cached everywhere, or at all times**.

#### How CDN Caching Really Works

- **Cache is dynamic and shared:** The CDN's global edge locations share a cache pool not only across your site but also among many other customers. Space is finite, and most CDNs (including App Builder's) optimize cache storage for high-traffic content.

- **Cache is optimized for volume:**  The CDN prioritizes assets based on how often and how recently they are used. Files that receive frequent requests are more likely to be retained in the cache. In contrast, assets from "quiet" sites (with fewer or infrequent visitors) may be evicted early from the cache due to overall demand and available space.

- **Geographic cache locality:** Caching is region-based. If your users are mostly in Europe, for example, your files will likely be cached on European CDN edge locations where those requests happen. However, if no one in Asia has accessed your site recently, those files may not be cached in Asian edge locations—so the first user there could experience a slower, cache-miss response.

#### What this means for your application

- **Cache headers are advisory, not mandatory:** While you can suggest to the CDN how long to cache each resource, the CDN's own cache management algorithms may override or ignore these instructions in order to optimize for the most requested content.

- **Cache misses are normal:** It's expected that some users, especially in less commonly used regions or after a period of no traffic, may experience cache misses (i.e., the file must be fetched from the origin rather than the edge cache).

- **No deterministic global cache:** There is no way to fully guarantee that every asset will stay cached at every edge globally, regardless of cache settings.

**Bottom line:**  
CDN cache is highly effective for speeding up access to popular content and for users in frequently accessed regions, but it is ultimately optimized for shared efficiency—not for guaranteed persistence of all files. Plan for cache-miss scenarios, and make sure your application origin can handle requests that aren't served from the edge cache.

### ETags
An **ETag** ("entity tag") is a unique identifier assigned to a specific version of a file or resource. Each time a file changes—such as after you update your code, modify assets, or redeploy your app—a new ETag value is generated for that file. This allows both browsers and CDNs to efficiently determine whether a cached version of a file is still valid.

#### How ETags enable efficient cache validation

- When a user or CDN edge cache requests a file from your application, the server responds with an `ETag` header that identifies the content version.
- If the cached version of the file expires (according to cache control rules), the edge cache or browser checks with the origin server to see whether the file has changed.
- It does this by sending an `If-None-Match` HTTP request header containing the ETag value of the cached file.
- The origin server compares the supplied ETag with that of the current file:
  - **If the ETag has not changed:** The server returns a `304 Not Modified` response—no new file is sent. The cached version at the edge (or in the browser) is simply marked as "fresh" and is served to the caller, saving bandwidth and reducing latency.
  - **If the ETag is different:** The server responds with the new, updated file and its new ETag value, and the cache is updated.

This model ensures that users always receive the most up-to-date version of your files, while still maximizing efficiency by not redownloading files that haven't changed.

**Summary:**  
- The ETag updates every time a file changes.
- Upon cache expiry, the edge cache validates the ETag with your origin.
- If unchanged, the cache is refreshed and served; if changed, the new version replaces the old one in the cache and is delivered to users.
- You can view the ETag value in the response headers, as well as in the CDN view of the Developer Console.

## Security

The CDN enforces strict tenant isolation:

- **Namespace isolation**: Each Runtime namespace has its own subdomain
- **Credential-based access**: Only users with appropriate workspace credentials can deploy to the CDN
- **HTTPS only**: All content is served over encrypted connections

For more information on App Builder security, see [Security Overview](../security/index.md).

## Next Steps

- [Deployment Guide](../deployment/deployment.md) — Learn how to deploy your application
- [Setting Response Headers](../deployment/setting-response-headers.md) — Configure custom headers for static assets
- [Optimization Guide](../optimization.md) — Techniques for optimizing your App Builder application
- [Security Overview](../security/index.md) — Understand App Builder security features

Return to the [Guides Index](../../index.md).
