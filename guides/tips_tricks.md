# Tips and Tricks for Firefly Apps

There are many areas in a web app where you could optimize the way it works, such as security, performance, and operational cost, to name a few. Here are some tips and tricks to help you gain the most out of your Firefly application.

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
