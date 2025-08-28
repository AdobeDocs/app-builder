# Adobe App Builder Documentation

Adobe App Builder documentation site deployed to EDS.
The production address is https://developer.adobe.com/app-builder/

## Quick Start

For local development, you need to start three servers:

1. **Main dev server** (this repo):
```bash
npm run dev
```

2. **ADP Devsite** ([adp-devsite](https://github.com/AdobeDocs/adp-devsite)):
```bash
git clone https://github.com/AdobeDocs/adp-devsite
cd adp-devsite
npm install
npm run dev
```

3. **Runtime connector** ([devsite-runtime-connector](https://github.com/aemsites/devsite-runtime-connector)):
```bash
git clone https://github.com/aemsites/devsite-runtime-connector
cd devsite-runtime-connector
npm install
npm run dev
```

Once all three servers are running, navigate to http://localhost:3000

## Commands

**Development**
- `npm run dev` - Start local server (requires other services above)

**Content Management**
- `npm run buildNavigation` - Generate navigation structure (one-time Gatsby migration only)
- `npm run buildRedirections` - Build URL redirections (one-time Gatsby migration only)
- `npm run renameFiles` - Rename files to Adobe conventions
- `npm run normalizeLinks` - Normalize internal/external links

**Validation**
- `npm run lint` - Run linting checks

**Site Features**
- `npm run buildSiteWideBanner` - Generate site-wide banner

*All commands use `@AdobeDocs/adp-devsite-utils` for standardized tooling.*

## Linting

**Automated**: Runs on PRs when `src/pages/**` files change
**Manual**: `npm run lint`

Validates markdown syntax, links, content structure, and Adobe style guidelines.

**Troubleshooting**: If pages are not showing up as expected, check lint warnings to identify potential issues.

## Navigation

To update navigation structure:
1. Edit `src/pages/config.md` directly

*Note: `npm run buildNavigation` is only needed for initial Gatsby migration.*

## Redirects

To manage URL redirections:
1. Edit `src/pages/redirects.json` directly

*Note: `npm run buildRedirections` is only needed for initial Gatsby migration.*

## Deployment

**Staging**:
- Actions > Deployment > Run workflow
- Can deploy from any branch to staging
- Uses incremental builds from last commit by default
- Use `deployAll` function for full rebuild if needed
- **URL**: `developer-stage.adobe.com/app-builder/`

**Production**:
- Automatically deploys from `main` branch
- Uses incremental builds from last commit
- **URL**: `developer.adobe.com/app-builder/`

## Support

Join `#adobe-developer-website` Slack channel for help.
