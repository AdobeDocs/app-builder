---
title: Working with Packages
description: Learn how to create, update, share, bind, and manage packages in I/O Runtime to organize and control your actions effectively.
keywords:
- packages
- I/O Runtime
- shared packages
- package binding
- default parameters
faqs:
- question: How do I create a package in I/O Runtime?
  answer: Use the command `aio rt:package:create <package-name>` to create a new package.
- question: Can I delete a package that contains actions or triggers?
  answer: No, packages can only be deleted if they are empty, meaning they have no actions or triggers defined.
- question: How do I set default parameters for all actions in a package?
  answer: Update the package with `aio rt:package:update <package-name> --param <key> <value>` to define default parameters.
- question: What does making a package shared do?
  answer: Marking a package as shared with `--shared yes` makes it available to other users for execution, but with execute-only permissions.
- question: How do I use a shared package from another namespace?
  answer: Bind the shared package using `aio rt:package:bind /namespace/package original-name` to your namespace to invoke its actions.
---
# Working with Packages

Packages are a simple and yet important concept in I/O Runtime. You can use packages to handle versioning (deploy new version of your actions in a new package), create different actions with the same name within the same namespace, group together actions that are related, share actions with other parties, and much more.

You create a package by running:

```
aio rt:package:create my-fancy-package 
```

Deleting packages works only if they are empty, that is, no actions or triggers have been defined in them:

```
aio rt:package:delete my-fancy-package
```

Packages allow defining default parameters at the package level. All actions defined in that package will then be able to read the default parameters. In this example a param called `name` is set, with the value `some-value`:

```
$ aio rt:package:update my-fancy-package --param name some-value
```

Add this flag `shared`to make a package available to any other user of the system:

```
$ aio rt:package:update my-fancy-package --shared yes
```

To use a shared package, you must first bind it. In this example, we bind `my-fancy-package` to a package called `my-package`. This allows you to invoke any action defined in the original namespace as part of the bound package.

```
$ aio rt:package:bind /namespace-where-package-is-defined/my-fancy-package my-package
```

## Shared packages and permissions

Shared packages enforce `execute-only` permission for any operation is initiated from outside the namespace owning the package. Assuming there is a shared package `my-package` in namespace `a`, and a namespace `b` that uses the shared package, then:

* Invoking `my-package` actions from namespace `b` or `a` will work
* Trying to get, edit, or delete `my-package` code from namespace `b` will fail
* Management of `my-package` -  create, read, update, or delete - will only work from namespace `a`

## Next steps

Return to the [Runtime Reference Documentation Index](index.md).

Return to the [Guides Index](../../index.md).