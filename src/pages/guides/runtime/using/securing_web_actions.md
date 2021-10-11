# Securing Web Actions

By default, a web action can be invoked by anyone knowing the action&rsquo;s URL. If you want to restrict the access, you either use Basic Authentication or you build your own authentication layer.

Here is how you can enable Basic Authentication for a web action:
```
// create a web action with Basic Authentication on
wsk action create my-secure-web-action main.js --web true --web-secure this-is-the-secret-hash
```
or
```
// update an existing web action to enable Basic Authenticationn or change the secret
wsk action update my-secure-web-action main.js --web true --web-secure this-is-the-secret-hash
```

Once you&rsquo;ve enabled Basic Authentication, you&rsquo;ll have to pass *X-Require-Wisk-Auth* header, and the secret you set, when invoking the web action. Assuming that your web action is created in the default package, this is how you&rsquo;ll invoke it:
```
curl https://[your-namespaces].adobeioruntime.net/api/v1/web/default/my-secure-web-action -X GET -H "X-Require-Whisk-Auth: this-is-the-secret-hash"
```

If you fail in adding the authentication header or the secret is wrong, you will get an error:
```
{
  "error": "Authentication is possible but has failed or not yet been provided.",
  "code": "OWGYkWwCUT7Ta6hWpfZWTQqRsfvcFTku"
}
```

## Cookies

The use of cookies directly from web actions on Runtime is discouraged. The reason for this is that, due to the shared nature of the infrastructure, it is not possible to completely segregate cookies between namespaces. It is okay to use the runtime domain for testing, but any cookie set directly by the runtime domain must be considered compromised.

To alleviate this, you can set up a forwarding proxy with a correct and valid second-level domain and send those requests along to the actual runtime domain. Inside your function, you can then implement an approve list or some shared secret to ensure that people attempting to access the functions directly are denied. Adobe also provides Container Native Applications, which can do much of this work for you.

For a fuller discussion of this topic you can read [Heroku&rsquo;s discussion of their cookie policy](https://devcenter.heroku.com/articles/cookies-and-herokuapp-com).
