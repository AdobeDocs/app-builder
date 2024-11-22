# Throughput Tuning

The main instrument you can use for tuning how a given action is executed and enable a faster number of executions, is the value you set for the `action/container concurrency`. This value is not related to the concurrent value per namespace or minuteRate value, though these two enforce the upper limit for actions executed per minute your namespace can reach.

The default value is `200` and it means that 200 invocation can happen in the same container for the that action. Suppose that you want to execute 100 times a `HelloWorld` action at the same time or in short period of time (minutes). With the default value (`200`) it means that the system will use 1  container instead of using up to 100 containers.

This enables you to avoid cold-start issues. When the system doesn't have any containers left, it has to create new ones. This cold-start adds a lot of latency to your application.

You can set any value between `1` and `500`. In the example below, the limit is set to `100`:
```
aio rt:action:create actionName fileName.js -c 100
```

Some considerations to keep in mind:
1. A container is kept warm after an invocation finished for 10 minutes. This means that for 10 minutes you can be 99% you don't get cold-starts when executing the same action
2. Depending on how much memory/resources your action consumes, you can use a smaller or a higher value. A good average number to start with is `200`. You should experiment to make sure the value you choose is working 
3. Make sure that your code is working when being executed in parallel. Using global variables to store values that are different between invocations is a recipe for disaster
4. If your Action works on some large data that is not different between invocations, then using a global variable can maximize the chances that the next execution can reuse it. However your code should handle the situation where the variable is not initialized
5. It is not guarantee that all invocations will use the same container. In case of errors, the existing container is destroyed and a new container will be used
6. In cases where your action code is memory hungry, you might need to tweak this setting to a lower value 


## Using pre-warm containers or optimizing against cold-starts

A second way for maximizing your chances of having the best low latency possible is creating actions that use the default Node version and a memory setting that is `256MB`, `512MB`, or `1024MB` - this way you avoid cold-starts in most cases. 

The system has a pool of containers with these settings waiting to be used for any incoming call that can't be sent to an existing running container and the action matches the container settings (Node version and memory setting). In this scenario, time will only be spent for injecting your action code as opposed to wait for creating a container first and then get the code injected.

## Caching Responses

The second instrument you have to maximize throughput is caching the action response. When you cache an action response, for the time the cache is valid, you can invoke the action without increasing the counter used by minuteRate or concurrent action invocations per namespace. In this situations, your action is not actually executed, instead the system serves the result from cache.

You use the Cache-Control dirrective in order to configure the cache. Below is an example of an action that sets the cache with a TTL of `30 minutes`. In the response object you'll find an entry with `X-Cache: HIT` or `X-Cache: MISS` (depending on the answer being returned from cache or not). 
```
function main(args) {
   return {
       body: "OK",
       statusCode: 200,
       headers: {
           "Cache-Control": "max-age=1800"
       }
   }
}
```

One way to verify if a response is returned from the cache or not is by checking for the following header:
```
X-GW-Cache: HIT
```

<InlineAlert slots="text"/>

Encoded responses can't be cached, this means that `Content-Encoding` response header needs to be always empty in order for the response to be cached. 

### Vary Header
The caching layer supports the use of [Vary header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) to enable caching based not only on URL and query parameters but on header fields.

For example you here is some action that responds to certain header fields when doing some complex calculation:

`curl -H "storeId: 1234" https://runtime-namespace-1.adobeioruntime.net/api/v1/web/store?query={products(pageSize: 10,filter:{ id:{ eq:"abcedefg"}}){items{name}}}`

Could produce a response:
```
HTTP/1.1 200 OK
Content-Type: application/json
Vary: storeId
Cache-Control: max-age=120
X-GW-Cache: MISS

{"someBigData" : ["array"]}
```

That would add the `storeId` to the cache key such that subsequent requests with the same `storeId` in the headers will create a `HIT` up till the cahe control header settings and anytime the value varies, it will be a `MISS` and be stored under a new key with new cache control directives.
