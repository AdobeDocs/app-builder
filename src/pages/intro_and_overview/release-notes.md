# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in App Builder and Adobe I/O Runtime.

## October 2025

*October 7, 2025*

### @adobe/aio-lib-runtime 7.1.8

#### Bug Fixes

- Fixed proxy SSL CONNECT issues with openwhisk library

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-lib-runtime/releases/tag/7.1.8)


*October 6, 2025*

### @adobe/aio-cli-plugin-app 14.3.0

#### New Features

- `aio app pack` now includes a `package-lock.json` file by default to ensure reproducibility and security of packaged App Builder applications
- `aio app install` now uses `npm ci` when a lockfile is present
- New `--[no]-lock-file` flag for `aio app pack` (default true) to control lockfile inclusion
- New `--[no]-allow-scripts` flag for `aio app install` (default true) to control post and preinstall scripts

#### Upgrade Instructions

To update in the aio-cli, just reinstall the cli if you are on `aio-cli@11.x`. If you are not on aio-cli v11 or greater, you need to install the `@adobe/aio-cli-plugin-app@14.3.0` plugin explicitly.

[Full release changes](https://github.com/adobe/aio-cli-plugin-app/releases/tag/14.3.0)


*October 1, 2025*

### App Builder Provisioner Service 3.1.0

#### Improvements

- Minor feature enhancements to the provisioning service

#### User Action Required

No user action is needed, all future installs will use the new version of the service.

## September 2025

*September 30, 2025*

### @adobe/aio-lib-runtime 7.1.7

#### Bug Fixes

- Fixed a TypeError that occurred during deployment when attempting to read the 'length' property of an undefined object

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-lib-runtime/releases/tag/7.1.7)


*September 22, 2025*

### App Builder Delete Service 2.0.4

#### Bug Fixes & Security

- Bug fixes and security enhancements

#### User Action Required

No user action is needed, all future delete-related requests will use the new version of the service.


*September 15, 2025*

### App Builder Provisioner Service 2.1.1

#### Security

- Security enhancements

#### User Action Required

No user action is needed to upgrade, all future installs will use the new version of the service.


*September 11, 2025*

### App Builder Delete Service 2.0.3

#### Security

- Security enhancements

#### User Action Required

No user action is needed, all future delete-related requests will use the new version of the service.


*September 8, 2025*

### @adobe/aio-cli-plugin-app 14.2.0

#### New Features

- Unhid the `--project` and `--org` flags for `aio app init`
- Added new `--template-options` flag (paired with `--template`) to facilitate non-interactive project creation
- These features are useful for MCP scenarios and when already logged in with technical account credentials

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli if you are on `aio-cli@11.x`. If you are not on aio-cli v11 or greater, you need to install the `@adobe/aio-cli-plugin-app@14.2.0` plugin explicitly.

[Full release changes](https://github.com/adobe/aio-cli-plugin-app/releases/tag/14.2.0)


*September 8, 2025*

### @adobe/aio-lib-web 7.0.6

#### Bug Fixes

- Fixed network timeout issue when deploying web assets
- A third-party library was timing out if the handshake with AWS S3 Server (us-east-1) took longer than 1000ms
- This issue especially affected deployments from locations far from us-east-1 or when using VPN

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli.

[Full release changes](https://github.com/adobe/aio-lib-web/releases/tag/7.0.6)


*September 5, 2025*

### CDN Infrastructure Improvements

#### Infrastructure Enhancements

We've successfully implemented a new generation of CDN infrastructure that includes advanced caching mechanisms and compression. These improvements are now live in staging and production, resulting in significant improvements in Lighthouse performance scores across applications. The best part? These improvements happen automatically without requiring any changes from developers.

#### User Action Required

None - improvements are automatic


*September 4, 2025*

### App Builder Provisioner Service 2.1.0

#### Bug Fixes

- Fixed an issue where App Builder packages with dependencies that installed temporary files (i.e. in `/tmp`) could not be installed due to permissions issues

#### User Action Required

No user action is needed to upgrade, all future installs will use the new version of the service.


*September 3, 2025*

### @adobe/aio-lib-web 7.0.5

#### Bug Fixes

- Fixed proxy issue where deploying web assets was not going through the proxy if specified (when uploading website assets to Amazon S3)

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli.

[Full release changes](https://github.com/adobe/aio-lib-web/releases/tag/7.0.5)

## Getting Help

If you have questions or need assistance with any of the changes in these release notes, please visit the [Community](community.md) page or consult the [FAQ](faq.md).
