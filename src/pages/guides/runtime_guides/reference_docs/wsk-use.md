---
title: Using the wsk CLI
description: A guide to using the OpenWhisk wsk command line interface, including available commands and how to get help for each.
keywords:
- wsk CLI
- OpenWhisk
- command line interface
- actions
- help commands
# --- FAQs ---
faqs:
- question: How do I list all available wsk commands?
  answer: Use the command `wsk --help` to display a list of all available wsk commands and flags.
- question: How can I get detailed help on a specific wsk command?
  answer: Run `wsk [command] --help` to see detailed usage and options for that particular command.
- question: How do I create a new action using wsk?
  answer: Use `wsk action create ACTION_NAME ACTION` and add necessary flags; run `wsk action create --help` for more details.
- question: What flag do I use to specify the API host in wsk?
  answer: Use the `--apihost HOST` flag to specify the OpenWhisk API host when running wsk commands.
- question: How do I enable verbose output for troubleshooting in wsk?
  answer: Add the `-v` or `--verbose` flag to your wsk commands to get detailed output for debugging purposes.
---
# Using the wsk CLI

You can use the `--help` flag to navigate the list of supported commands:

```
wsk --help
      ____      ___                   _    _ _     _     _
       /\   \    / _ \ _ __   ___ _ __ | |  | | |__ (_)___| | __
  /\  /__\   \  | | | | '_ \ / _ \ '_ \| |  | | '_ \| / __| |/ /
 /  \____ \  /  | |_| | |_) |  __/ | | | |/\| | | | | \__ \   <
 \   \  /  \/    \___/| .__/ \___|_| |_|__/\__|_| |_|_|___/_|\_\
  \___\/ tm           |_|

Usage:
  wsk [command]

Available Commands:
  action      work with actions
  activation  work with activations
  package     work with packages
  rule        work with rules
  trigger     work with triggers
  sdk         work with the sdk
  property    work with whisk properties
  namespace   work with namespaces
  list        list entities in the current namespace
  api         work with APIs

Flags:
      --apihost HOST         whisk API HOST
      --apiversion VERSION   whisk API VERSION
  -u, --auth KEY             authorization KEY
      --cert string          client cert
  -d, --debug                debug level output
  -i, --insecure             bypass certificate checking
      --key string           client key
  -v, --verbose              verbose output

Use "wsk [command] --help" for more information about a command.
```

For help on working with actions, run:

```
wsk action  --help
```

This renders:

```
work with actions
Usage:
  wsk action [command]

Available Commands:
  create      create a new action
  update      update an existing action, or create an action if it does not exist
  invoke      invoke action
  get         get action
  delete      delete action
  list        list all actions in a namespace or actions contained in a package
```

Once you know the command for creating an action, you can get help on it:

```
wsk action create --help
```

This renders:

```
create a new action
Usage:
  wsk action create ACTION_NAME ACTION [flags]

Flags:
  -a, --annotation KEY VALUE   annotation values in KEY VALUE format (default [])
  -A, --annotation-file FILE   FILE containing annotation values in JSON format
      --copy                   treat ACTION as the name of an existing action
      --docker string          use provided docker image (a path on DockerHub) to run the action
      --kind KIND              the KIND of the action runtime (example: swift:default, nodejs:default)
  -l, --logsize LIMIT          the maximum log size LIMIT in MB for the action (default 10)
      --main string            the name of the action entry point (function or fully-qualified method name when applicable)
  -m, --memory LIMIT           the maximum memory LIMIT in MB for the action (default 256)
      --native                 treat ACTION as native action (zip file provides a compatible executable to run)
  -p, --param KEY VALUE        parameter values in KEY VALUE format (default [])
  -P, --param-file FILE        FILE containing parameter values in JSON format
      --sequence               treat ACTION as comma separated sequence of actions to invoke
  -t, --timeout LIMIT          the timeout LIMIT in milliseconds after which the action is terminated (default 60000)
      --web string             treat ACTION as a web action, a raw HTTP web action, or as a standard action; yes | true = web action, raw = raw HTTP web action, no | false = standard action
      --web-secure SECRET      secure the web action. where SECRET is true, false, or any string. Only valid when the ACTION is a web action
```

## Next steps

Return to the [Runtime Reference Documentation Index](index.md).

Return to the [Guides Index](../../index.md).