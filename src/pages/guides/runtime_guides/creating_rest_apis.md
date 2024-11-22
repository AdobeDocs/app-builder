# Creating REST APIs

You can create REST APIs from web actions deployed to Adobe I/O Runtime. Let&rsquo;s assume that you&rsquo;ve created four actions to manage CRUD operations for the `pet` entity:

| CRUD Operation | Action Name |
| -------------- | ----------- |
| Create         | `addPet`    |
| Read           | `getPet`    |
| Update         | `updatePet` |
| Delete         | `deletePet` |

You can map these actions to a REST API for managing `pet` resources:

| Endpoint  | HTTP Method | Action Nam  |
| --------- | ----------- | ----------- |
| /pet      | POST        | `addPet`    |
| /pet      | GET         | `getPet`    |
| /pet/{id} | GET         | `getPet`    |
| /pet/{id} | PUT         | `updatePet` |
| /pet/{id} | DELETE      | `deletePet` |

Let&rsquo;s see how you can create this API, assuming you have the web actions are already deployed/created.

# How long does it take to create/update an API

When creating or updating a REST API, it can take up to 5 minutes to see the changes. 

## Using wsk CLI

Using the `aio rt:api:create` command, you create each API endpoint one-by-one. This command allows you to set a base path, path, method, and response type. We will set:

```
aio rt:api:create /pet-store /pet post createPet --response-type http
aio rt:api:create /pet-store /pet get getPet --response-type http
aio rt:api:create /pet-store /pet/{id} get getPet --response-type http
aio rt:api:create /pet-store /pet/{id} put updatePet --response-type http
aio rt:api:create /pet-store /pet/{id} delete deletePet --response-type http
```

You can quickly see the API you&rsquo;ve defined, including the fully qualified path, by running this command:

```
aio rt:api:list /pet-store
```

Please note, that at this time `aio rt:api:list` is not implemented. Instead, you have to use `aio rt:api:list/enter-base-path`.

Here is an example of calling one of the endpoints:

```
curl https://adobeioruntime.net:443/apis/<YOUR-NAMESPACE>/pet-store/pet/2345 -X get
```

or

```
curl https://<YOUR-NAMESPACE>.adobeioruntime.net:443/apis/pet-store/pet/2345 -X GET
```

**Note** the change in the URL here in comparison to what the `aio` returns. This is due some additional protections Runtime provides to segregate namespaces from each other when invoking web actions. The `aio` generated link will still work but it will return a 308 redirect to your namespace's subdomain on Runtime. For a further discussion of this please see the [Securing Web Actions](securing_web_actions.md) page.

In the example above, the `{di}` value, 2335, will be mapped to a {payload.id}.

## Using Swagger files

A neat feature when working with REST APIs is the support for Swagger files. This works for creating a new REST API from scratch or, if you already used the `aio` CLI to create one,  saving the API as a Swagger definition file that you can use later on to restore the API.

Continuing the example above, if you run this command, you&rsquo;ll create a Swagger definition file on your machine out of the pet-store API:

```
aio rt:api:get /pet-store > pet-store-swagger.json
```

Suppose that you want to restore or create the same API, maybe in some other namespace. All you have to is to run:

```
aio rt:api:create --config-file pet-store-swagger.json
```

This will work as long as the actions are already created in that namespace.

## Enable CORS on an HTTP Resource

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) headers can be controlled in two ways: statically, or dynamically.

### Static CORS Response with OpenAPI

If the returned CORS headers can be static, no code is necessary. The REST APIs can be configured in OpenAPI 2.0 format, by defining the `options` method. The following snippet illustrates how to configure CORS headers:

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
aio rt:action:create handleCorsRequest ./cors-action.js --web true -a web-custom-options true

aio rt:api:create /pet-store /pet options handleCorsRequest --response-type http
```

To test the CORS request get the URL of the action, and invoke it:

```bash
aio rt:api:list /pet-store
# get the URL for the options action and invoke it
curl -i -X OPTIONS https://adobeioruntime.net/...
# it should return
 HTTP/1.1 204 No Content
 Access-Control-Allow-Methods: GET, POST, PUT
 Access-Control-Allow-Origin: https://xyz.example.com
```

## Securing the API endpoints

### Oauth (using the Adobe Identity Management System)

An action can be configured to require IMS validation for incoming requests using the following command: 

```bash
aio rt:action:create <action_name> --web true -a require-gw-validation true
```

#### Scopes validation

Once IMS authentication has been enabled for an action, the only way to allow access to the action is by specifying a list of IMS scopes or client IDs that are permitted to invoke the action. 

The following code snippet demonstrates how to configure access using a standard Swagger file and the `security` object:

```json
{
    "basePath": "/v2",
    "paths": {
      "/ims-secure-endpoint": {
        "get": {
          "operationId": "your-namespaces/default/my-ims-secure-web-action.json",        
          "security": [
            {
              "scopes_auth": [
                  "write:pets",
                  "read:pets"
                ]
            }
          ]
        }
      }
    },
    "securityDefinitions": {
        "scopes_auth": {
          "type": "oauth2",
          "authorizationUrl": "",
          "flow": "implicit",
          "scopes": {
            "write:pets": "modify pets in your account",
            "read:pets": "read your pets"
          }
        }
    }
}
```

This enables scope validation for the API endpoint, allowing requests with access tokens that have the scopes `write:pets` OR `read:pets`. Requests that do not have the required scopes in the access token will be rejected with the following error message: 

```json
{
  "error_code":"401015",
  "message":"Scope mismatch"
}
```

After publishing the Swagger file, this endpoint `your-namespaces/default/my-require-gw-validation-web-action` can be used to call the action: 

```bash
curl -i -H "Authorization: Bearer <ims_access_token>" https://guest.adobeioruntime.net/api/v2/ims-validation-endpoint
```

#### Client ID validation

`client_id` validation can be enabled by adding `x-client-ids` with a list of clients that are allowed to invoke the action. The clientId list has to be added to the `security definition` object in the Swagger. Also make sure to add the security definition key to the method `security` object, otherwise the validation won't be enabled for that method: 

```json
{
    "basePath": "/v2",
    "paths": {
      "/ims-validation-endpoint": {
        "get": {
          "operationId": "your-namespaces/default/my-require-gw-validation-web-action.json",
          "security": [
            {
              "clientids_auth": []
            }
          ]
        }
      }
    },
    "securityDefinitions": {
        "clientids_auth": {
          "type": "oauth2",
          "authorizationUrl": "",
          "flow": "implicit",
          "scopes": {
            "write:pets": "modify pets in your account",
            "read:pets": "read your pets"
          },
          "x-client-ids": ["zookeeper", "dogwalker"]
        }
    }
}
```

This configuration allows the action to accept requests with access tokens that have the client IDs `zookeeper` OR `dogwalker`. Requests that do not have the client ID in the access token will be rejected with the following error message: 

```json
{
  "error_code":"403201",
  "message":"Client ID not allowed to call this service"
}
```

> Note that both `scope` and `client_id` validation can be enabled at the same time. In this case, the request will be rejected if the access token does not have the required scope AND client ID.
> 
> In case no validation is enabled for the endpoint's verb, by removing the `security` object from the method definition, the action can be invoked publicly without any restrictions on the API url.
> 
> By default, the IMS token validation URL will be used for token validation so "authorizationUrl" can be left empty. However, if you want to use a different Oauth provider, you can specify the `authorizationUrl` in the `securityDefinition` object. Only one external security provider can be configured, and it needs to be defined in the first `securityDefinition` object in the Swagger file.
> 
> Please allow a 5minute window for the changes to take effect.

### Basic Authentication

You secure an API the same way you&rsquo;d do it for web actions. You can read more about this on the [Securing Web Actions](securing_web_actions.md) page.

Once you&rsquo;ve enabled basic authentication for an action, you&rsquo;d have to pass the `X-Require-Whisk-Auth` header and the secret you chose when making an API call.

### IP Allow-list / Disallow-list

Endpoints can also be configured to only allow/block requests from specific IP addresses. This can be done by adding the `x-ip-allowlist` or `x-ip-disallowlist` to the method definition as follows:

```json
{
    "basePath": "/v2",
    "paths": {
      "/ip-validation-endpoint": {
        "get": {
          "operationId": "your-namespaces/default/my-require-gw-validation-web-action.json",
          "x-ip-allowlist": ["192.150.10.210", "192.168.0.1"],
          "x-ip-disallowlist": ["192.150.10.10"]
        }
      }
    }
}
```

This configuration allows the action to accept requests from clients with the IP addresses "192.150.10.210" or "192.168.0.1", and block requests from "192.150.10.10". 

Requests that do not have the requests originating from the IP addresses in the whitelist will be rejected with the following error message:

```json
{
  "error_code":"403013",
  "message":"Access from your IP address is not authorized"
}
```

Requests that have the requests originating from the IP addresses in the disallow list, will be rejected with the following error message:

```json
{
  "error_code":"403012",
  "message":"Access from your IP address is not authorized"
}
```

> Make sure that the `my-require-gw-validation-web-action` is configured to be a web action with `-a require-gw-validation true`, otherwise the action can be accessed publicly without any restrictions on the non api url. 