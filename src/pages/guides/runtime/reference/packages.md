# Working with packages

Packages are a simple and yet important concept in I/O Runtime. You can use packages to handle versioning (deploy new version of your actions in a new package), create different actions with the same name within the same namespace, group together actions that are related, share actions with other parties (shared packages) and much more.

You create a package running:
```
wsk package create my-fancy-package 
```

When deleting an package, it will only work if the package is empty (no actions or triggers have been defined in it):
```
wsk package delete my-fancy-package
```

Another useful feature is defining default params at the package level. All the actions defined in that package will be able to read the default params. In this example a param called `name` is set, with the value `some-value`:
```
$ wsk package update my-fancy-package --param name some-value
```

Sharing a package (making it available to any other user of the system) is as simple as adding this flag `shared`:
```
$ wsk package update my-fancy-package --shared yes
```

If you want to use a shared package, you need first to bind it. In the following example, we bind `my-fancy-package` to a package called `my-package`. This enables you to invoke any action defined in the original namespace as being part of bound package.
```
$ wsk package bind /namespace-where-package-is-defined/my-fancy-package my-package
```

## Shared Packages and Permissions

Shared packages enforce `execute-only` permission for any operation that is initiated from outside the namespace owning the package. Assuming there is a package `my-package` in namespace `a`, this package is shared, and there is a namespace `b` who uses the shared package, then:
* Invoking `my-package` actions from namespace `b` or `a` will work
* Trying to get `my-package` code or edit it (update/delete) from namespace `b` will fail
* Manage `my-package` (create/read/update/delete) will only work from namespace `a`