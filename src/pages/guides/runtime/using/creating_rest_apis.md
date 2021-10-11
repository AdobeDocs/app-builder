# Creating REST APIs

You can create REST APIs from web actions you&rsquo;ve deployed to Adobe I/O Runtime. Let&rsquo;s assume that you&rsquo;ve created four actions to manage CRUD operations for the `pet` entity:


|CRUD Operation | Action Name |
|---|---|
| Create | `addPet` |
| Read | `getPet` |
| Update  | `updatePet` |
| Delete  | `deletePet` |

You can map these actions to a REST API for managing `pet` resources:

| Endpoint | HTTP Method | Action Nam |
|---|---| --- |
| /pet | POST | `addPet` |
| /pet | GET | `getPet` |
| /pet/{id} | GET | `getPet` |
| /pet/{id} | PUT | `updatePet` |
| /pet/{id} | DELETE | `deletePet` |

Let&rsquo;s see how you can create this API, assuming you have the web actions are already deployed/created.

# How long does it take to create/update an API

When creating or updating a REST API, it can take up to 5 minutes to see the changes. 

## Using wsk CLI

Using the `wsk api create` command, you create each API endpoint one-by-one. This command allows you to set a base path, path, method, and response type. We will set:

```
wsk api create /pet-store /pet post createPet --response-type http
wsk api create /pet-store /pet get getPet --response-type http
wsk api create /pet-store /pet/{id} get getPet --response-type http
wsk api create /pet-store /pet/{id} put updatePet --response-type http
wsk api create /pet-store /pet/{id} delete deletePet --response-type http
```
You can quickly see the API you&rsquo;ve defined, including the fully qualified path, by running this command:
```
wsk api list /pet-store
```

Please note, that at this time `wsk api list` is not implemented. Instead, you have to use `wsk api list /enter-base-path`.

Here is an example of calling one of the endpoints:
```
curl https://adobeioruntime.net:443/apis/<YOUR-NAMESPACE>/pet-store/pet/2345 -X get
```
or
```
curl https://<YOUR-NAMESPACE>.adobeioruntime.net:443/apis/pet-store/pet/2345 -X GET
```
**Note** the change in the URL here in comparison to what the `wsk` returns. This is due some additional protections Runtime provides to segregate namespaces from each other when invoking web actions. The `wsk` generated link will still work but it will return a 308 redirect to your namespace's subdomain on Runtime. For a further discussion of this please see the [Securing Web Actions](securing_web_actions.md) page.

In the example above, the `{di}` value, 2335, will be mapped to a {payload.id}.


## Using Swagger files

A neat feature when working with REST APIs is the support for Swagger files. This works for creating a new REST API from scratch or, if you already used the `wsk` CLI to create one,  saving the API as a Swagger definition file that you can use later on to restore the API.

Continuing the example above, if you run this command, you&rsquo;ll create a Swagger definition file on your machine out of the pet-store API:
```
wsk api get /pet-store > pet-store-swagger.json
```

Suppose that you want to restore or create the same API, maybe in some other namespace. All you have to is to run:
```
wsk api create --config-file pet-store-swagger.json
```
This will work as long as the actions are already created in that namespace.

## Enable CORS on an HTTP Resource

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) headers can be controlled in two ways: statically, or dynamically.

### Static CORS Response with OpenAPI
If the returned CORS headers can be static, no code is necesary. The REST APIs can be configured in OpenAPI 2.0 format, by defining the `options` method. The following snippet illustrates how to configure CORS headers:

```json
"paths": {
    "/test": {
      "options": {
        "responses": {
          "204": {
            "description": "Default CORS response",
            "headers": {
              "Access-Control-Allow-Origin": {
                "type": "string",
                "description": "Which origin can invoke the /test API\n",
                "default": "https://xyz.example.com"
              },
              "Access-Control-Allow-Methods": {
                "type": "string",
                "description": "Which methods are allowed\n",
                "default": "GET, POST, PUT"
              }
            }
          }
        }
      }
    }
}
```

Once the `options` block is added to any HTTP resource, the system will respond with the configured headers, and their corresponding `default` values. In this example the response will be:

```
 HTTP/1.1 204 No Content
 Access-Control-Allow-Methods: GET, POST, PUT
 Access-Control-Allow-Origin: https://xyz.example.com

```

#### Dynamic CORS Response with Custom Actions
The CORS headers can also be returned by a dedicated function, which must be configured to handle the `options` HTTP Method. It works in the same fashion as the other HTTP Methods like `GET`, or `POST`.

The code bellow demonstrates an action that returns a CORS response:

```javascript
// save it as cors-action.js
function main(params) {
  return {
    statusCode: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://xyz.example.com",
      "Access-Control-Allow-Methods": "GET, POST, PUT"
    }
  }
}
```

The web action must be created and configured for the CORS request:

```bash
wsk action create handleCorsRequest ./cors-action.js --web true -a web-custom-options true

wsk api create /pet-store /pet options handleCorsRequest --response-type http
```

To test the CORS request get the URL of the action, and invoke it:
```bash
wsk api list /pet-store
# get the URL for the options action and invoke it
curl -i -X OPTIONS https://adobeioruntime.net/...
# it should return
 HTTP/1.1 204 No Content
 Access-Control-Allow-Methods: GET, POST, PUT
 Access-Control-Allow-Origin: https://xyz.example.com
```

## Securing the API endpoints

You secure an API the same way you&rsquo;d do it for web actions. You can read more about this on the [Securing Web Actions](securing_web_actions.md) page.

Once you&rsquo;ve enabled basic authentication for an action, you&rsquo;d have to pass the `X-Require-Whisk-Auth` header and the secret you chose when making an API call. 
