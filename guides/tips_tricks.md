# Tips and Tricks for optimizing Project Firefly Apps

There are many areas in a web app where you could optimize the way it works, such as security, performance, and operational cost, to name a few. Here are some tips and tricks to help you gain the most out of your Project Firefly applications.

## Caching HTTP Responses

This method works extremely well if your action returns some results based on repeated user inputs as query params, e.g. details about an item on a webshop, or visualization of static data. In these cases, your backend action would be invoked once only, and then subsequent requests receive the results directly from the  cache by the expiry time. Serving results from cache is not only fast, but also saves the cost of action invocations.

In order to configure the cache, you use the `Cache-Control` directive. Below is an example of an action that sets the cache with a TTL of 30 minutes. In the response object you will find an entry with `X-GW-Cache: HIT` or `X-GW-Cache: MISS` (depending on the answer being returned from cache or not).

```javascript
async function main (params) {
  return {
      headers: {
        'Cache-Control': 'max-age=1800'
      },
      statusCode: 200,
      body: { message: 'I am cached for 30 minutes.' }
  }
}
```

When you test this functionality for web action using Postman or web browser with developer tools opened, make sure that `Cache-Control` is not automatically set for all the requests.

## Returning Large Response Payload

You can return a [response payload of max 1MB](https://github.com/AdobeDocs/adobeio-runtime/blob/master/guides/system_settings.md) in an Adobe I/O Runtime action. That is more than enough for the majority of the use cases we have seen so far. However, if your action would return a larger payload than the 1MB limit, we provide a scalable solution with [Project Firefly Files SDK](https://github.com/adobe/aio-lib-files). It allows you to [persist a binary file to the blob storage](https://github.com/adobe/aio-lib-files/blob/master/doc/api.md#Files+write), obtain [a temporary downloadable URL](https://github.com/adobe/aio-lib-files/blob/master/doc/api.md#Files+generatePresignURL) and return an [HTTP Redirect response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) to the file with this URL. Below is a simple code snippet to demonstrate that.

```javascript
const fileLocation = '/private-dir/large-image.png'
const files = await Files.init()
await files.write(fileLocation, fileContent)

// Generate a presigned URL of the file that is valid for 60 seconds only
const presignUrl = await files.generatePresignURL(fileLocation, { expiryInSeconds: 60 })

return {
  headers: { location: presignUrl }, 
  statusCode: 302
}
```

## Implementing a move operation for the Project Firefly Files SDK

While handling large files within a Runtime action using [Project Firefly Files SDK](https://github.com/adobe/aio-lib-files), you might have the need to move those files to another location in the underlying cloud storage, e.g. for archiving purpose when computing is over.

We have decided until now to not expose a move operation in our abstraction, for the two main following reasons:

- Some cloud storage APIs do not provide an atomic move operation, meaning that there is a tradeoff between abstraction and consistency. Users might expect that files operations on single files are atomic. Operations on folders are not atomic neither.
- The implementation of such a feature is a two-liner, which makes it simple enough to implement and test the abstraction at application level

This is our recommendation to implement the move operation at application level by using the [Project Firefly Files SDK] primitives:

```
/**
 * Note: this operation is not atomic.
 * Moves files from one location to another in the remote storage. 
 *  
 * @param {Files} files the files instance
 * @param {string} src source file/folder
 * @param {string} dest destination file/folder
 * @param {object} [options={}] move options
 * @param {Function} [options.progressCallback] a function that will be called every
 *   time the operation completes on a single file, the srcPath and destPath to the moved
 *   file are passed as argument to the callback `progressCallback(srcPath, destPath)`
 */
async function move (files, src, dest, options = {}) {
  const res = await files.copy(src, dest, { progressCallback: options.progressCallback })
  await files.delete(src)
  return res
}
```

Here is an usage example:

```
const files = await Files.init()
await move(files, 'my/remote/src/folder/', 'my/remote/dest/')
```
