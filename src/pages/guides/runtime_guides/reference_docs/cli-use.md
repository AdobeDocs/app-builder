---
title: Using aio CLI
description: Overview and usage instructions for the aio CLI runtime commands, including options and command aliases.
keywords:
- aio CLI
- runtime
- commands
- options
- deployment
# --- FAQs ---
faqs:
- question: How do I access help for specific aio runtime commands?
  answer: Use the command syntax `aio runtime <command> --help` to view detailed help for any specific runtime command.
- question: What option allows bypassing certificate checks in aio runtime?
  answer: Use the `-i` or `--insecure` option to bypass certificate checks when running aio runtime commands.
- question: How can I enable verbose output in aio runtime commands?
  answer: Add the `-v` or `--verbose` flag to your command to enable verbose output for debugging or more detailed information.
---
# Using aio CLI

```
USAGE
  $ aio runtime

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt

COMMANDS
  runtime:action      Manage your actions
  runtime:activation  Manage your activations
  runtime:deploy      The Runtime Deployment Tool
  runtime:namespace   Manage your namespaces
  runtime:package     Manage your packages
  runtime:property    Execute property commands
  runtime:route       Manage your routes
  runtime:rule        Manage your rules
  runtime:trigger     Manage your triggers
```

Each command also offers help, so you can for example, run `aio runtime action --help`.

## Next steps

Return to the [Runtime Reference Documentation Index](index.md).

Return to the [Guides Index](../../index.md).
