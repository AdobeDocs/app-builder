# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in App Builder and Adobe I/O Runtime.

## January 2026

*January 26, 2026*

### @adobe/aio-cli-plugin-app 14.4.0 & @adobe/aio-lib-console 5.5.0

#### New Features

- Validate app config by default in CLI app plugin
- Inherit secrets in prerelease workflow in CLI app plugin
- Append x-request-id header to error if present

#### Upgrade Instructions

To use the update, reinstall the aio-cli or update `@adobe/aio-aio-lib-console` to `^5.5` in your project's package.json.

[Full release changes - aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/releases/tag/14.4.0)  
[Full release changes - aio-lib-console](https://github.com/adobe/aio-lib-console/releases/tag/5.5.0)

## December 2025

*December 3, 2025*

### @adobe/aio-lib-ims-oauth 6.0.5

`aio login` on Windows issues: A patch release of a lib in the `aio-cli` fixes these login issues:
- `--no-open` flag was not working (all OSes)
- auto open of the login link in your default browser was not working (Windows Command Prompt and Windows PowerShell)
- any error in auto open will be captured, and the user will receive a warning to open the login link (which is logged into the console) manually in their browser

[Full release changes - aio-lib-ims-oauth](https://github.com/adobe/aio-lib-ims-oauth/releases/tag/6.0.5)

To get the updates in the aio-cli, just reinstall the cli.

## November 2025

*November 27, 2025*

### @adobe/aio-lib-state 5.3.0 & @adobe/aio-cli-plugin-app-storage 1.2.0

#### New Features

- Added support for the new Australia (AUS) region for App Builder State
- Customers can now store state data in Australia for data residency and compliance requirements
- All state CLI commands now accept `--region aus` flag
- Available regions are now: `amer` (US), `emea` (EU), `apac` (Japan), and `aus` (Australia)

#### Usage Examples

Library usage:
```javascript
const state = await stateLib.init({ region: 'aus' })
```

CLI usage:
```bash
aio app state get mykey --region aus
```

Environment variable:
```bash
export AIO_STATE_REGION=aus
```

#### Upgrade Instructions

To use the update, reinstall the aio-cli or update `@adobe/aio-lib-state` to `^5.3.0` in your project's package.json.

[Full release changes - aio-lib-state](https://github.com/adobe/aio-lib-state/releases/tag/5.3.0)  
[Full release changes - aio-cli-plugin-app-storage](https://github.com/adobe/aio-cli-plugin-app-storage/releases/tag/1.2.0)


*November 22, 2025*

### @adobe/aio-lib-state 5.2.0 & @adobe/aio-lib-core-networking 5.1.0

#### New Features

- Added `logRetryAfterSeconds` option to both libraries (defaults to 10 seconds)
- When a network call is throttled with a `429` response and the `Retry-After` header exceeds this value, it will log the retry as a warning
- This helps surface when you might be exceeding State service usage limits due to throttling
- Previously, retries were only logged when logging level was set to `debug`
- Set `logRetryAfterSeconds` to `0` to disable this behavior

#### Upgrade Instructions

Update the respective dependencies in your projects to the appropriate versions above to enable this feature.

[Full release changes - aio-lib-state](https://github.com/adobe/aio-lib-state/releases/tag/5.2.0)  
[Full release changes - aio-lib-core-networking](https://github.com/adobe/aio-lib-core-networking/releases/tag/5.1.0)


*November 18, 2025*

### @adobe/aio-lib-runtime 7.2.0

#### New Features

- Added Node.js 24 runtime support to App Builder Stage environment

#### Upgrade Instructions

To use the update in the aio-cli, just reinstall the cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-lib-runtime/releases/tag/7.2.0)


*November 18, 2025*

### @adobe/aio-cli 11.0.1

#### Bug Fixes

- Fixed warnings and issues when upgrading to use Node.js v24

#### Upgrade Instructions

Install the cli via:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-cli/releases/tag/11.0.1)


*November 18, 2025*

### @adobe/aio-lib-templates 3.0.4 & @adobe/aio-cli-plugin-telemetry 2.0.3

#### Bug Fixes

- Fixed proxy issues with telemetry and template listing
- When using `aio app init`, telemetry and template listing was not going through a configured proxy properly
- Was not connecting via SSL CONNECT as expected

#### Upgrade Instructions

To get the updates in the aio-cli, just reinstall the cli.

[Full release changes - aio-lib-templates](https://github.com/adobe/aio-lib-templates/releases/tag/3.0.4)  
[Full release changes - aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry/releases/tag/2.0.3)


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
