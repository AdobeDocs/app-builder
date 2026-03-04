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

Learn how to use modern AI coding assistants (Cursor, GitHub Copilot, Claude) to accelerate App Builder development. AI tools can help you build App Builder applications faster, but they need the right context about the platform.

## Key tips for effective AI prompts

**Be specific about the platform.** Say "App Builder action" or "Adobe I/O Runtime" instead of "serverless function" (which makes AI return AWS Lambda patterns).

**Reference official docs.** Point AI to `developer.adobe.com/app-builder/docs/` for both App Builder and Runtime documentation.

**Specify folder context.** Tell AI which extension point you are working in:

- `src/dx-excshell-1/actions/` for Unified Shell (Experience Cloud)
- `src/workfront-ui-1/actions/` for Workfront
- `src/aem-cf-console-admin-1/actions/` for AEM Content Fragments

**Include authentication details.** Always mention "OAuth Server-to-Server from environment variables" and never JWT (deprecated Jan 2025).

**Use current API versions.** Workfront v21.0 (not v15.0), AEM OpenAPI (not HTTP API), Analytics 2.0 API.

**Ask for logging.** Request `@adobe/aio-sdk` logger usage in generated code.

Here is an example prompt that follows all of these tips:

```
I'm building an App Builder action in src/workfront-ui-1/actions/. Create an
action that fetches open tasks from Workfront API v21.0. Use OAuth S2S for
authentication with credentials from environment variables (ADOBE_CLIENT_ID,
ADOBE_CLIENT_SECRET). Follow App Builder action patterns with statusCode and
body. Reference developer.adobe.com/app-builder/docs/ for best practices.
```

## Setting up project context files

AI assistants generate better code when they understand your project structure. You can add context files to your project root that AI tools will read automatically.

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

**For Cursor**, add a `.cursorrules` file at your project root with the same information. Cursor reads this file automatically when you open the project.

**For GitHub Copilot**, add a `.github/copilot-instructions.md` file. Copilot reads this file to understand your project conventions.

All three formats serve the same purpose: giving the AI assistant context about App Builder action patterns, authentication, API versions, and extension points.

## Rapid prototyping with AI

App Builder is just Node.js, so AI-generated code works with minimal changes. Here is a typical workflow:

1. Use Cursor or Copilot to build your app logic and APIs first. Focus on business logic without worrying about deployment.

2. Initialize an App Builder project and copy your code in:

```bash
aio app init my-app
cd my-app
cp my-prototype.js src/dx-excshell-1/actions/myaction/index.js
aio app deploy
```

3. Ask AI to adapt the code to App Builder patterns. For example: "Convert this Express.js endpoint to an App Builder action with proper statusCode, body, and OAuth S2S authentication."

This works well because App Builder uses standard Node.js, deployment is a single command (`aio app deploy`), and AI assistants already know serverless patterns that map directly to App Builder actions.

## Example: creating a new action

Here is a prompt and the code an AI assistant would generate:

**Prompt:**

```
I'm in src/workfront-ui-1/actions/. Create fetch-tasks/index.js that queries
Workfront API v21.0 for open tasks in a project. Accept projectId param.
Use @adobe/aio-sdk logger. Return JSON with statusCode 200 and tasks array
sorted by due date. OAuth S2S from environment variables.
```

**Generated code:**

```javascript
const { Core } = require('@adobe/aio-sdk');
const fetch = require('node-fetch');

async function main(params) {
  const logger = Core.Logger('fetch-tasks', { level: params.LOG_LEVEL || 'info' });

  try {
    const { projectId } = params;

    if (!projectId) {
      return { statusCode: 400, body: { error: 'projectId required' } };
    }

    const response = await fetch(
      `https://${params.WORKFRONT_DOMAIN}/attask/api/v21.0/task/search?projectID=${projectId}&status=NEW,INP`,
      { headers: { 'Sessionid': params.WORKFRONT_API_KEY } }
    );

    const data = await response.json();
    const tasks = (data.data || []).sort((a, b) =>
      new Date(a.plannedCompletionDate) - new Date(b.plannedCompletionDate)
    );

    logger.info(`Fetched ${tasks.length} tasks`);
    return { statusCode: 200, body: { tasks } };

  } catch (error) {
    logger.error(error);
    return { statusCode: 500, body: { error: error.message } };
  }
}

exports.main = main;
```

Notice how the generated code follows App Builder conventions: it exports a `main` function, returns `statusCode` and `body`, uses the `@adobe/aio-sdk` logger, and reads credentials from `params` (environment variables).

## Example: migrating a deprecated API

AI assistants can help you migrate from deprecated APIs. Use a prompt like:

```
Convert this AEM HTTP API code to use AEM OpenAPI instead. I'm in
src/aem-cf-console-admin-1/actions/. Update to use OpenAPI for Content
Fragments with OAuth bearer token from params.
```

The AI will identify deprecated HTTP API patterns, suggest OpenAPI endpoints, update authentication from basic auth to OAuth bearer, and maintain the App Builder action structure.

## Example: adding error handling

Ask AI to improve error handling in existing actions:

```
Add comprehensive error handling to this App Builder action. Include
input validation with 400 responses, API error handling with specific
status codes, logging at each step, and proper try/catch wrapping.
```

The AI will add parameter validation, specific error responses (400, 401, 500), logger calls at each step, and clean error messages.

## Common mistakes to avoid

- **Saying "serverless function"** makes AI assume AWS Lambda patterns instead of App Builder.
- **Mentioning JWT** leads to deprecated authentication code. Always specify OAuth Server-to-Server.
- **Using old API versions** like Workfront v15.0 or AEM HTTP API produces outdated code.
- **Skipping error handling** results in actions that return unhelpful 500 errors. Always ask for statusCode and try/catch.
- **Hardcoding credentials** instead of reading them from environment variables creates security risks.

## Resources

- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/)
- [AEM AI Coding Agents Guide](https://www.aem.live/developer/ai-coding-agents)
- [Cursor Rules for App Builder](https://github.com/robbiekapoor/benges-app_builder-cursor-rules-base)
- [MCP Server Generator](https://github.com/robbiekapoor/generator-app-remote-mcp-server-generic)

## Next steps

1. Create an `AGENTS.md` or `.cursorrules` file in your App Builder project.
2. Try the example prompts above with your AI assistant.
3. Refine your prompts based on the output quality.
4. Share what works with your team.
