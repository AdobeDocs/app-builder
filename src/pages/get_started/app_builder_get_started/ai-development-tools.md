---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
  - AI
  - Cursor
  - GitHub Copilot
  - Claude
  - MCP
title: AI-Powered Development Tools for App Builder
description: Learn how to use AI coding assistants like Cursor, GitHub Copilot, and Claude to accelerate App Builder development
---

# AI-Powered Development Tools for App Builder

App Builder isn't just for developers anymore. With the advent of AI coding assistants, anyone who can describe what they need can build on the platform. Marketers automating workflows, designers prototyping experiences, analysts building dashboards, PMs wiring up integrations. If you can write a sentence about what you want, AI can turn it into a working App Builder application. The skills and tools on this page make that possible regardless of your technical background.

Learn how to use modern AI coding assistants (Cursor, GitHub Copilot, Claude) to accelerate App Builder development. AI tools can help you build App Builder applications faster, but they need the right context about the platform.

## Why App Builder for AI

- **No infrastructure:** Deploy in one command. No servers, no clusters.
- **Scales automatically:** From one user to thousands, no config changes.
- **Secure by default:** IMS (Identity management) auth and encryption included, not bolted on.
- **Already included:** No extra license for existing App Builder customers.
- **Adobe managed:** We run the platform. You build the app.
- **Usage-based pricing:** Pay for what you use. Nothing when idle.
- **Minutes to production:** Not days. Not hours. Minutes.

## Building with AI and App Builder Skills

**App Builder Skills** are structured knowledge files that teach AI agents how App Builder works. Skills eliminate verbose prompts. Instead of explaining templates, auth patterns, and CLI commands every time, the agent already knows them.

Skills work with any AI coding tool that can read project files: Cursor, VS Code with Copilot, Windsurf, Claude Code, and others. Add an `AGENTS.md` or context file to your project root and the AI picks up App Builder conventions automatically. The example below was built end-to-end in [Cursor](https://cursor.com) by pointing it directly to the [Skills folder](https://github.com/adobe/skills) in the prompt (see [Setup (Cursor)](#setup-cursor) below), and the same patterns apply to other IDEs.

### Available skills

- **appbuilder-project-init** - Scaffolds projects, maps intent to templates, runs `aio app init`
- **appbuilder-action-scaffolder** - Creates Runtime actions with validation, error handling, SDK wiring
- **appbuilder-ui-scaffolder** - Builds React Spectrum UIs for App Builder frontends
- **appbuilder-testing** - Unit and integration test patterns
- **appbuilder-e2e-testing** - End-to-end testing with Playwright
- **appbuilder-cicd-pipeline** - CI/CD with GitHub Actions

Adobe Skills are open source: [github.com/adobe/skills](https://github.com/adobe/skills)

### Setup (Cursor)

1. Reference the App Builder skills in your prompt. E.g. *"Using the App Builder skills at [github.com/adobe/skills](https://github.com/adobe/skills), build me a..."* Cursor will fetch the relevant skill automatically.
2. Make sure the `aio` CLI is installed and you're logged in (`aio login`).
3. That's it. Ask Cursor to build something.

Cursor reads skills on-demand and only the relevant skill is loaded when the agent needs it, so token usage stays minimal regardless of how many skills are available.

For other IDEs, add an `AGENTS.md` file to your project root with App Builder context (see [Setting up project context files](#setting-up-project-context-files) below). Any AI tool with terminal access can run `aio` CLI commands to scaffold, deploy, and manage Console projects.

### Example: building a unit converter app (built in Cursor)

With skills, you don't need to specify templates, auth patterns, or deployment steps. The agent figures it all out.

**Prompt:**

```
Using the App Builder skills at github.com/adobe/skills,
create an App Builder unit converter app under the
unit-converter folder. The backend action should convert
between length (miles, km, feet, meters, inches, cm),
weight (lbs, kg, oz, grams), and temperature (F, C, K).
The frontend should let users pick a category, pick a
conversion, enter a value, and see results in a table.
Create a new Console project for it and deploy.
```

**What the agent does (no user intervention):**

1. Reads the `appbuilder-project-init` skill, selects `@adobe/generator-app-excshell`
2. Scaffolds the project with `aio app init`
3. Creates a Console project via `aio console project create`
4. Downloads workspace credentials and populates `.env`
5. Removes `require-adobe-auth` from the manifest (reads the action scaffolder skill to handle both layers)
6. Writes the backend action with conversion logic, input validation, and error handling
7. Writes the React Spectrum frontend with Pickers, NumberField, and TableView
8. Deploys with `aio app deploy`

**Result:** A live app at `https://<namespace>.adobeio-static.net/index.html`

See the deployed example: [https://52381-unitconverter-stage.adobeio-static.net/index.html](https://52381-unitconverter-stage.adobeio-static.net/index.html)

You can also [try](https://developer.adobe.com/app-builder/trial) App Builder using the trial link provided.

### What skills handle for you

Without skills, you'd need to tell the AI all of this in every prompt:

| Concern | Without skills | With skills |
|---|---|---|
| Template selection | "Use `@adobe/generator-app-excshell`" | Agent reads the template decision table |
| Authentication | "Remove `require-adobe-auth` from ext.config.yaml AND clear the `requiredHeaders` array in the action code" | Agent knows about the two-layer auth pattern |
| Action patterns | "Export a `main` function, return `statusCode` and `body`, use `@adobe/aio-sdk` logger" | Agent follows the action scaffolder |
| Console setup | Manual - download JSON, copy namespace/auth to `.env` | Agent runs `aio console project create` and wires it up |
| API versions | "Use Workfront v21.0, AEM OpenAPI, Analytics 2.0" | Documented in skill references |
| Deployment | "Run `aio app deploy --force-deploy`" | Agent deploys automatically |

### Adding skills to your project

Copy the `.cursor/skills/` directory into your project. Skills are portable - they work in any App Builder project opened in Cursor.

```bash
cp -r /path/to/skills/.cursor/skills/ your-project/.cursor/skills/
```

## Key tips for effective AI prompts

Whether or not you use skills, these tips produce better results from any AI assistant:

**Be specific about the platform.** Say "App Builder action" or "Adobe I/O Runtime" instead of "serverless function" (which makes AI return AWS Lambda patterns).

**Reference official docs.** Point AI to `developer.adobe.com/app-builder/docs/` for both App Builder and Runtime documentation.

**Specify folder context.** Tell AI which extension point you are working in:

- `src/dx-excshell-1/actions/` for Unified Shell (Experience Cloud)
- `src/workfront-ui-1/actions/` for Workfront
- `src/aem-cf-console-admin-1/actions/` for AEM Content Fragments

**Include authentication details.** Always mention "OAuth Server-to-Server from environment variables" and never JWT (deprecated Jan 2025).

**Use current API versions.** Workfront v21.0 (not v15.0), AEM OpenAPI (not HTTP API), Analytics 2.0 API.

**Ask for logging.** Request `@adobe/aio-sdk` logger usage in generated code.

## Setting up project context files

AI assistants generate better code when they understand your project structure. You can add context files that AI tools read automatically.

**AGENTS.md** provides general project context. Create this file at your project root:

```
# App Builder Project Context

## Extension Points
- src/dx-excshell-1/ = Unified Shell (Experience Cloud)
- src/workfront-ui-1/ = Workfront extensions
- src/aem-cf-console-admin-1/ = AEM Content Fragments

## Key Commands
- aio app dev = Local development
- aio app deploy = Deploy to production
- aio app logs = View runtime logs

## Authentication
- OAuth Server-to-Server (NOT JWT)
- Credentials in .env for local dev

## Action Patterns
- Always use statusCode and body in responses
- Use @adobe/aio-sdk for logging
- Use current API versions (Workfront v21.0, AEM OpenAPI)

## Documentation
- App Builder and Runtime: https://developer.adobe.com/app-builder/docs/
```

**For Cursor**, point to the [App Builder skills folder](https://github.com/adobe/skills) as described in the setup section above.

**For GitHub Copilot**, add a `.github/copilot-instructions.md` file. Copilot reads this file to understand your project conventions.

All formats serve the same purpose: giving the AI assistant context about App Builder action patterns, authentication, API versions, and extension points.

## Common mistakes to avoid

- **Saying "serverless function"** makes AI assume AWS Lambda patterns instead of App Builder.
- **Mentioning JWT** leads to deprecated authentication code. Always specify OAuth Server-to-Server.
- **Forgetting two-layer auth** - `require-adobe-auth` in the manifest AND `requiredHeaders` in action code are independent. Both must be addressed when disabling auth.
- **Using old API versions** like Workfront v15.0 or AEM HTTP API produces outdated code.
- **Skipping error handling** results in actions that return unhelpful 500 errors. Always ask for statusCode and try/catch.
- **Hardcoding credentials** instead of reading them from environment variables creates security risks.
- **Reusing namespaces** without realizing it - deploying a second app to the same Console project namespace overwrites the first. Create a separate Console project for each app.

> **See also:** [AI Use Cases with App Builder](../../resources/ai-use-cases.md) - Learn what you can build with AI on App Builder (MCP servers, documentation assistants, AI agents, and many more).

## Resources

- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/)
- [App Builder Adobe Summit Session: Build Fast, Secure AI-Powered Integrations with Adobe App Builder - OS605](https://business.adobe.com/summit/2026/sessions/build-fast-secure-aipowered-integrations-with-adob-os605.html)
- [AEM AI Coding Agents Guide](https://www.aem.live/developer/ai-coding-agents)
- [MCP Server Generator](https://github.com/adobe/generator-app-remote-mcp-server-generic)
- [Adobe Skills](https://github.com/adobe/skills)
- [App Builder Trial](https://developer.adobe.com/app-builder/trial)
