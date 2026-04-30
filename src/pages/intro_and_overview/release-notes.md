# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in App Builder and Adobe I/O Runtime.

## April 2026

*April 27, 2026*

### @adobe/aio-apps-action 4.1.0

#### New Features

- Export Service-to-Server (S2S) credentials as environment variables during `aio app deploy`, making them available to actions at deploy time

#### Upgrade Instructions

To use the update, pin the action to `4.1.0` in your GitHub Actions workflow:

```yaml
uses: adobe/aio-apps-action@4.1.0
```

[Full release changes](https://github.com/adobe/aio-apps-action/releases/tag/4.1.0)

*April 17, 2026*

### @adobe/aio-cli-plugin-console 5.3.0

#### New Features

- Added `aio console api list` command to list API services available to the selected Organization (flags services that require a product profile)
- Added `aio console workspace api list` command to list API services subscribed to a Workspace, including their product profiles
- Added `aio console workspace api add` command to subscribe one or more API services to a Workspace by service code, using OAuth Server-to-Server credentials
- Added repeatable `--license-config '<sdkCode>=<profileNameOrId>[,...]'` flag on `workspace api add` for services that require a product profile (e.g. Adobe Analytics)
- Together with `aio console project create` and `aio console workspace create` (5.2.0), this completes a fully non-interactive App Builder project bootstrap workflow for scripted and agentic use cases

#### Upgrade Instructions

To use the update, reinstall the aio-cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-cli-plugin-console/releases/tag/5.3.0)

*April 1, 2026*

### @adobe/aio-cli-plugin-console 5.2.0

#### New Features

- Added `aio console project create` command to create new App Builder projects non-interactively
- Added `aio console workspace create` command to create workspaces in existing projects non-interactively
- Useful for scripted and agentic workflows where interactive terminal prompts are not available

#### Upgrade Instructions

To use the update, reinstall the aio-cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-cli-plugin-console/releases/tag/5.2.0)

## March 2026

*March 24, 2026*

### @adobe/aio-lib-ims-oauth 6.1.0

#### New Features

- Added `AIO_IMS_LOCAL_LOGIN_PORT` environment variable to configure the local login callback port
- Enables interactive `aio login` from inside Docker containers by port-forwarding the configured port to the host browser

#### Upgrade Instructions

To use the update, reinstall the aio-cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes](https://github.com/adobe/aio-lib-ims-oauth/releases/tag/6.1.0)

*March 10, 2026*

### @adobe/aio-cli 11.0.2 & @adobe/aio-cli-lib-app-config 4.2.0

#### Bug Fixes

- Fixed a `TypeError: opts.getPluginsList is not a function` error that occurred when installing CLI plugins
- Aligned `app.config.yaml` action and package schema validation with the OpenWhisk specification

#### Upgrade Instructions

To use the update, reinstall the aio-cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes - aio-cli](https://github.com/adobe/aio-cli/releases/tag/11.0.2)  
[Full release changes - aio-cli-lib-app-config](https://github.com/adobe/aio-cli-lib-app-config/releases/tag/4.2.0)

## February 2026

*February 24, 2026*

### Activation Logs and CDN Management in Developer Console

#### New Features

Two new features are now available in Adobe Developer Console for App Builder projects:

**Console Logs UI**

View and search your action logs directly in Developer Console — no CLI required:
- See all activations, not just failures
- Access the last 3 days of logs
- Search by action name or log content
- Filter by time range

Access via **Console → Project → Workspace → App Builder Logs**. For longer retention, configure [log forwarding](https://developer.adobe.com/app-builder/docs/guides/app_builder_guides/application_logging/logging#viewing-logs-in-adobe-developer-console) to Splunk, Azure, or New Relic.

**CDN Management**

A new CDN page in Developer Console for managing your CDN settings:
- View your CDN URL and deployment info
- See the last deployer and timestamp
- Enable or disable caching with one click
- Invalidate the cache directly from the UI

Access via **Console → Project → Workspace → App Builder CDN**. See the [CDN overview](https://developer.adobe.com/app-builder/docs/guides/app_builder_guides/cdn/#cache-management) for details.

#### User Action Required

None — these features are available automatically in Developer Console.

*February 3–5, 2026*

### @adobe/aio-lib-web 7.1.1, @adobe/aio-cli-plugin-app 14.4.2, @adobe/aio-cli-plugin-console 5.1.0 & @adobe/aio-cli-plugin-runtime 8.1.0

#### Bug Fixes

- **aio-lib-web**: Fixed a long-standing issue where static HTML files in subfolders were unreachable when deployed from Windows machines
- **aio-cli-plugin-app**: Fixed `aio app install` to fall back to `npm install` when `npm ci` fails due to an out-of-sync lockfile in packages published before lockfile support was added
- **aio-cli-plugin-console**: Fixed a `require() of ES Module` error
- **aio-cli-plugin-runtime**: Fixed the `rt` alias so it correctly displays help

#### Upgrade Instructions

To use the updates, reinstall the aio-cli:

```
npm install -g @adobe/aio-cli
```

[Full release changes - aio-lib-web](https://github.com/adobe/aio-lib-web/releases/tag/7.1.1)  
[Full release changes - aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/releases/tag/14.4.2)  
[Full release changes - aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/releases/tag/5.1.0)  
[Full release changes - aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/releases/tag/8.1.0)

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
