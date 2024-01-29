---
keywords:
  - cli
  - credentials
  - Developer Tooling
  - secrets
  - rotation
title: Credential Rotation
description: How to rotate your secrets and keep your actions secured.
---

# Credential Rotation

Eventually you will need to rotate your credentials to make sure everything remains secure.  This guide outlines best practices you can use to update the parameters ( aka inputs ) to your actions without disruption.

## Why rotate credentials?

It is possible your credentials were leaked somehow, either by appearing in a errant log, or maybe a developer has left the team ... and it is just good practice to periodically rotate them. _because security_


## How to rotate credentials

In order to update the inputs for a particular action we use the `aio runtime action update` command.

```bash
➜ aio runtime action update <action-name> --param <param-name> <param-value>
# here's a concrete version
➜ aio rt action update dx-excshell-1/generic -p=DEBUG silly

# you can specify multiple values in several ways

# firstly, just a list of key value pairs
➜ aio runtime action update <action-name> --param <param-name> <param-value> <param-name> <param-value> <param-name> <param-value>

# secondly, you can use the --param flag more than once .. here we use the shortened version -p
➜ aio rt action update <action-name> -p <param-name> <param-value> -p <param-name> <param-value> -p <param-name> <param-value>

```



<InlineAlert slots="text" />

Very important! You must pass ALL parameters in a single `update` call.  Any parameters not specified will disappear.
