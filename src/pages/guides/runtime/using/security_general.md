# Security Guide

This guide attempts to lay out security concerns you have to think about when working with Runtime functions. Depending on your exact use case, only a subset of these may matter to you: for example, if you aren't using web actions, the section about cookies isn't relevant. This guide will assist you in keeping your functions secure and steer you away from practices that are likely to cause security headaches in the serverless environment.

## Sandboxing
Each action is run inside its own container. The container may be reused for the same action + namespace combination, but never for a different action or namespace. The function is limited in memory and CPU usage based on the requested setting when the action is created. The action has full access to the internet, but no access directly to Runtime; the only exception to this is that chaining functions together is supported via sequences, which do not fully leave the Runtime cluster.

## Cross-Site Scripting (XSS)
When building anything that runs on the internet that takes user input, you must be concerned with cross-site scripting (XSS) attacks. These attacks take a variety of forms and can be easily introduced if you are not careful.

Parameters sent to actions are not sanitized by the Runtime system. All these inputs should be treated as unsafe and should be sanitized before being used directly. For example, do not just pass parameters to a SQL query or evaluate them in JavaScript. For further reading on this, a good resource is the [Open Web Application Security Project (OWASP) XSS documentation](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

## Cookies
Many things on the web rely on cookies. You can set cookies in two ways in Runtime: from JavaScript on the page via [document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) calls, or via passing a [Header object from a web action](https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md#web-actions) that contains a Set-Cookie header directive. Due to the way Runtime hosts your functions, there are some particular concerns for function developers.

The use of cookies directly from web actions on Runtime is discouraged. For further reading, please see [Securing Web Actions](securing_web_actions.md).

## Secrets
Secrets fall into two different categories and must be handled in specific ways based on those categories. 

### Runtime Namespace Details
Namespace credentials should be treated with the utmost care. These credentials allow full access to the namespace: _do not share this information with customers using the action._ If the design of the system requires these credentials to be stored inside the action or passed in as parameters to your action, _consider some other design._ Leaking of these credentials will allow an attacker full access to the namespace, and _the owner of the namespace is responsible for any costs accrued_ during that time.

If you need to pass namespace credentials, use the `-a provide-api-key true` annotation on the function. This will place the namespace and key in the `__OW_NAMESPACE` and `__OW_API_KEY` execution context.

### A Function's Secrets
If the action must communicate with some external service in an authenticated way, consider making use of a [HMAC](https://en.wikipedia.org/wiki/HMAC) that is passed into the service to authorize it for a time to retrieve those credentials. If passing a short-lived token to the action to retrieve the credentials is not possible, any long-lived credentials should be passed as part of a Header or a document POST-ed to the action. This will ensure that the credentials are always passed over a secure channel and not leaked to any internal or external routing mechanisms.

If you need to store secrets your functions use, it's best to place them in some other trusted storage system or use the default params mechanism that is supported by packages and actions. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code.

If you run the CLI command for getting an action or package, you’d get a listing for the names of the default params while the values will be listed as a hash instead of the actual value.

## Authorization and Authentication

When invoking functions on the command line, your namespace and key are authenticated with Runtime and we examine if you authorized to perform the requested action; if so, it proceeds. Beside the possibility of forwarding along the namespace and key, Runtime does not provide any facility out of the box to authenticate or authorize users of the function. In the future, Container-Native Applications may provide a facility for these types of things: for example, creating and validating [IMS tokens](https://www.adobe.io/authentication/auth-methods.html).

For web actions, see [Securing Web Actions](securing_web_actions.md).

## Transport Security

Due to the shared nature of any serverless system, it is necessary to review transport security to your function and how your function communicates with the world.

All communications to the Runtime cluster are secured by HTTPS. Communications from your functions to any other service should also use HTTPS or some other secure channel whenever possible. While there is a network partition and no function should be able to see or route traffic directly to another, it is always best to also secure your communication channel as well.