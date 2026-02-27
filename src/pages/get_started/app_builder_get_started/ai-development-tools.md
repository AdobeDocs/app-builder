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

Learn how to use modern AI coding assistants (Cursor, GitHub Copilot, Claude) to accelerate App Builder development.

---

## Using AI Assistants with App Builder

AI coding tools can help you build App Builder applications faster, but they need the right context.

### Key Tips for Effective AI Prompts

1. **Be specific about the platform:**
   - Say "App Builder action"
   - Don't say "serverless function" (AI returns AWS Lambda docs)

2. **Reference official docs:**
   - App Builder & Runtime docs: `developer.adobe.com/app-builder/docs/`

3. **Specify folder context:**
   - `src/dx-excshell-1/actions/` = Unified Shell
   - `src/workfront-ui-1/actions/` = Workfront
   - `src/aem-cf-console-admin-1/actions/` = AEM Content Fragments

4. **Include authentication details:**
   - Always mention "OAuth Server-to-Server from environment variables"
   - Never JWT (deprecated Jan 2025)

**Example Prompt:**

```
I'm building an App Builder action in src/workfront-ui-1/actions/. Create an 
action that fetches open tasks from Workfront API v21.0. Use OAuth S2S for 
authentication with credentials from environment variables (ADOBE_CLIENT_ID, 
ADOBE_CLIENT_SECRET). Follow App Builder action patterns with statusCode and 
body. Reference developer.adobe.com/app-builder/docs/ for best practices.
```

> **See also:** [AI Use Cases with App Builder](../../resources/ai-use-cases.md) - Learn what you can build with AI on App Builder (MCP servers, documentation assistants, AI agents, and more).

---

## Create Project Context Files

Add an `AGENTS.md` file to your project root:

```markdown
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
```

This helps AI understand your project structure and generate correct code based on folder context.

---

## "Vibe Coding" with App Builder

Modern AI tools like Cursor, GitHub Copilot, and Claude enable rapid prototyping through conversational coding. Here's how to leverage this workflow with App Builder:

### Quick Onboarding Flow

1. **Start with AI-assisted prototyping:**
   - Use Cursor/Copilot to build your app logic and APIs first
   - Focus on business logic without worrying about deployment
   - Iterate quickly with AI suggestions

2. **Onboard to App Builder in minutes:**
   ```bash
   # Initialize App Builder project
   aio app init my-app
   
   # Copy your AI-generated code into actions/
   cp my-prototype.js src/dx-excshell-1/actions/myaction/index.js
   
   # Deploy instantly
   aio app deploy
   ```

3. **AI helps with App Builder patterns:**
   - Ask AI: "Convert this Express.js endpoint to an App Builder action"
   - AI adds proper `statusCode`, `body`, logging patterns
   - AI integrates Adobe authentication (OAuth S2S)

### Example Vibe Coding Prompt

```
Create a basic campaign landing page that captures lead form submissions. 
Build it as an App Builder action with proper error handling, OAuth S2S 
authentication, and logging. Store lead data using App Builder State storage 
and send a Slack notification when a new lead is submitted. Deploy on Adobe 
App Builder and display the landing page form in the Experience Cloud Shell 
(exc shell) with a summary dashboard showing total leads captured.
```

### Why This Works

- App Builder is just Node.js, so your AI-generated code works with minimal changes
- One-command deployment (`aio app deploy`) means no DevOps setup
- AI assistants already know serverless patterns, easy to adapt to App Builder

---

## Create Context Files for AI

Create `.skills/app-builder-actions-developer.md`:

```markdown
---
name: app-builder-actions-developer
description: Use when working with App Builder actions in specific extension points
---

# Extension Point Context

## Unified Shell: `src/dx-excshell-1/actions/`
- Experience Cloud Shell extensions
- Use @adobe/exc-app SDK
- Access user IMS token

## Workfront: `src/workfront-ui-1/actions/`
- Workfront UI extensions
- Use Workfront API v21.0
- SessionId authentication

## AEM: `src/aem-cf-console-admin-1/actions/`
- AEM Content Fragments
- Use AEM OpenAPI (better coverage for Content Fragments)
- OAuth bearer token
```

---

## Best Practices for AI-Assisted Development

### Do's

✅ **Specify extension points** - Tell AI which folder you're working in  
✅ **Reference official docs** - Point to developer.adobe.com/app-builder/docs/  
✅ **Include auth patterns** - Mention OAuth S2S explicitly  
✅ **Use current API versions** - Workfront v21.0, AEM OpenAPI  
✅ **Ask for logging** - Request `@adobe/aio-sdk` logger usage  
✅ **Verify output** - Review AI-generated code for App Builder patterns

### Don'ts

❌ **Don't say "serverless function"** - AI assumes AWS Lambda  
❌ **Don't mention JWT** - Deprecated in Jan 2025  
❌ **Don't use old API versions** - v15.0, HTTP API are outdated  
❌ **Don't skip error handling** - Always include statusCode and try/catch  
❌ **Don't hardcode credentials** - Use environment variables

---

## Example AI Workflows

### Workflow 1: Create New Action

**Prompt:**
```
I'm in src/workfront-ui-1/actions/. Create fetch-tasks/index.js that queries 
Workfront API v21.0 for open tasks in a project. Accept projectId param. 
Use @adobe/aio-sdk logger. Return JSON with statusCode 200 and tasks array 
sorted by due date. OAuth S2S from environment variables.
```

**AI generates:**
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

### Workflow 2: Migrate Deprecated API

**Prompt:**
```
Convert this AEM HTTP API code to use AEM OpenAPI instead. I'm in 
src/aem-cf-console-admin-1/actions/. Update to use OpenAPI for Content 
Fragments with OAuth bearer token from params.
```

**AI identifies:**
- Deprecated HTTP API patterns
- Suggests OpenAPI endpoints
- Updates authentication from basic auth to OAuth bearer
- Maintains App Builder action structure

### Workflow 3: Add Error Handling

**Prompt:**
```
Add comprehensive error handling to this App Builder action. Include:
- Input validation with 400 responses
- API error handling with specific status codes
- Logging at each step
- Proper try/catch wrapping
```

**AI adds:**
- Parameter validation
- Specific error responses (400, 401, 500)
- Logger calls for debugging
- Clean error messages

---

## AI Assistant Configuration

### Cursor Configuration

Add to `.cursorrules` in your project:

```
# App Builder Project Rules

This is an Adobe App Builder project.

## Extension Points
- src/dx-excshell-1/ = Unified Shell
- src/workfront-ui-1/ = Workfront
- src/aem-cf-console-admin-1/ = AEM Content Fragments

## Action Patterns
- Always use statusCode and body in responses
- Use @adobe/aio-sdk for logging
- OAuth S2S from environment variables (NOT JWT)
- Use current API versions (Workfront v21.0, AEM OpenAPI)

## Documentation
- App Builder & Runtime: https://developer.adobe.com/app-builder/docs/
```

### GitHub Copilot Configuration

Add to `.github/copilot-instructions.md`:

```markdown
# App Builder Development Guidelines

## Action Structure
All actions in `src/*/actions/` must return:
```javascript
{
  statusCode: number,
  body: object | string
}
```

## Authentication
Use OAuth Server-to-Server (NOT JWT):
- ADOBE_CLIENT_ID from params
- ADOBE_CLIENT_SECRET from params
- Never hardcode credentials

## API Versions
- Workfront: v21.0 (NOT v15.0)
- AEM: OpenAPI (NOT HTTP API)
- Analytics: 2.0 API
```

---

## Resources

- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/)
- [AEM AI Coding Agents Guide](https://www.aem.live/developer/ai-coding-agents)
- [Cursor Rules for App Builder](https://github.com/robbiekapoor/benges-app_builder-cursor-rules-base)
- [MCP Server Generator](https://github.com/robbiekapoor/generator-app-remote-mcp-server-generic)

---

## Next Steps

1. **Set up context files** - Create AGENTS.md and .cursorrules
2. **Test AI prompts** - Try the example workflows above
3. **Iterate** - Refine prompts based on AI output quality
4. **Share learnings** - Document what works for your team

---

*Last updated: February 2026*
