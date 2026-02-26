# Build AI Integrations with App Builder

**Deploy AI-powered integrations in minutes, not weeks.** App Builder provides zero-infrastructure, enterprise-grade hosting for AI agents, MCP servers, and intelligent workflows—with built-in security, authentication, and auto-scaling.


## Why App Builder for AI?

Stop managing infrastructure. Start building intelligent experiences.

| Self-Hosted AI Infrastructure | App Builder for AI |
|------------------------------|-------------------|
| Provision servers, containers, Kubernetes | Zero infrastructure setup |
| Configure load balancers, auto-scaling | Auto-scaling included |
| Implement authentication, encryption | OAuth 2.0 + encryption built-in |
| Set up logging, monitoring | Observability included by default |
| Manage security updates, patches | Adobe manages platform |
| Pay for idle capacity | Pay only for usage |
| Expose credentials in AI configs | Secure credential injection |
| **Time to production: Weeks** | **Time to production: Minutes** |

### Enterprise Security Built-In

- **Isolated containers** - Each action runs in its own secure sandbox
- **Encrypted credential storage** - No hardcoded API keys
- **OAuth 2.0** - Industry-standard authentication with enterprise SSO
- **Audit logging** - Track all AI interactions
- **Rate limiting** - Prevent abuse and control costs
- **Regional deployment** - Meet data residency requirements (amer/apac/emea)

---

## AI Use Cases on App Builder

> **Note:** This guide focuses on what you can build **today** with App Builder. For AI-powered development workflows similar to [AEM's AI coding agents](https://www.aem.live/developer/ai-coding-agents), see the [Development Tools](#development-tools-for-ai-powered-app-builder) section below.

### 1. MCP (Model Context Protocol) Servers

Host **standardized MCP servers** that expose Adobe data and capabilities to AI assistants through the official MCP TypeScript SDK.

**What is MCP?**

The [Model Context Protocol](https://modelcontextprotocol.io/) is an open standard that enables AI assistants (Claude, Cursor, etc.) to securely interact with external systems. Instead of hardcoding API credentials in AI configs, MCP servers act as secure intermediaries.

**Architecture:**

```
AI Tool (Claude Desktop/Cursor)
    ↓ MCP protocol request
Your MCP Server (hosted on App Builder)
    ↓ Authenticated API call (OAuth S2S)
Adobe APIs (Analytics, AEM, Assets, etc.)
    ↓ Structured response
AI Tool (formats for user)
```

**What You Can Build:**

- Real-time Adobe Experience Cloud data access for AI tools
- Custom tools, resources, and prompts for Claude Desktop/Cursor
- Serverless MCP endpoints with auto-scaling
- Secure credential management (no keys on user machines)

**Features:**

- Official MCP TypeScript SDK
- Zod schema validation
- Serverless deployment on App Builder
- Tools, Resources, and Prompts support
- Secure credential storage on App Builder

**Quick Start:**

```bash
# Initialize App Builder project
aio app init my-mcp-server
cd my-mcp-server

# Install MCP SDK (only needed for MCP servers)
npm install @modelcontextprotocol/sdk

# Deploy to App Builder
aio app deploy
```

**Note:** The MCP SDK is only required if you're building an MCP server. Other AI use cases (DocuBot, LangChain agents, etc.) use different packages.

**Configure in Your AI Assistant:**

Add your deployed MCP server URL to your AI assistant's configuration (Claude Desktop, Cursor, or other MCP-compatible tools). 

After deployment, your MCP server URL will be:
```
https://<namespace>-<workspace>.adobeioruntime.net/api/v1/web/mcp/server
```

**Example:**
```
https://52381-myproject-stage.adobeioruntime.net/api/v1/web/mcp/server
```

Refer to your AI assistant's documentation for specific configuration steps.

**Example Use Cases:**
- *"Show my open tasks due this week"* → Queries Adobe Workfront
- *"Find all product images tagged 'Spring 2026'"* → Searches AEM Assets
- *"What's the conversion rate for homepage test?"* → Checks Adobe Target

**Security Benefits:**

- **No credentials on user machine** - API keys stored securely on App Builder  
- **Enterprise audit trail** - Every AI query logged  
- **Secure execution** - MCP server runs in isolated container  
- **Access control** - OAuth S2S authentication  
- **Cost control** - Monitor and rate-limit AI-driven API usage

---

### 2. Documentation Assistants

Build **AI-powered chatbots** that answer developer questions based on your documentation, GitHub issues, and internal knowledge bases.

**Example:** DocuBot - AI Slack Assistant

**What It Does:**

- Answers App Builder questions in Slack using official docs
- Contextual memory across conversation threads
- Generates code snippets and troubleshoots errors
- Indexes documentation for vector search

**Features:**

- Powered by LLM providers (OpenAI, Anthropic, Groq)
- Scrapes and indexes public documentation
- Slack integration with rich formatting
- Real-time doc updates

**Architecture:**

```
User asks question in Slack
    ↓
App Builder action processes request
    ↓
Vector search against indexed docs
    ↓
LLM generates answer with citations
    ↓
Formatted response in Slack
```

**Quick Start:**

```bash
# Clone the DocuBot example
git clone https://github.com/rokapooradobe/adobe-docubot
cd adobe-docubot

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API keys (Slack, AI provider, Adobe OAuth)

# Deploy to App Builder
aio app deploy
```

**See the [DocuBot README](https://github.com/rokapooradobe/adobe-docubot) for complete setup instructions.**

---

### 3. AI Agent Hosting

Host **AI agents and autonomous workflows** on App Builder without managing containers or orchestration.

**What You Can Build:**

- Multi-agent systems that coordinate multiple Adobe APIs
- Autonomous task completion workflows
- Event-driven AI pipelines

**Benefits:**

- Deploy agents as serverless actions
- Scale automatically with demand
- Secure credential management for LLM API keys
- Built-in logging and monitoring

---

### 4. Content Analysis & Auto-Tagging

Build **intelligent content processing pipelines** using AI models to analyze, categorize, and enrich assets.

**Use Cases:**

- Auto-tag images uploaded to AEM Assets
- Sentiment analysis on customer feedback
- Content moderation for user-generated content
- SEO metadata generation

**Example Flow:**

```
Asset uploaded to AEM
    ↓ (webhook trigger)
App Builder action receives event
    ↓
Calls vision API (Google Vision, AWS Rekognition)
    ↓
Tags extracted & written back to AEM
```

---

### 5. Predictive Workflows & Forecasting

Use **machine learning models** to power intelligent business workflows.

**Use Cases:**

- Customer lifetime value prediction
- Inventory demand forecasting
- Lead scoring for Adobe Marketo
- Content recommendation engines

**Example:**

```javascript
// App Builder action with ML inference
async function predictChurn(params) {
  const customerData = await fetchCustomerData(params.customerId);
  const prediction = await callMLModel(customerData);
  
  if (prediction.churnRisk > 0.7) {
    await triggerMarketoCampaign({ customerId: params.customerId });
  }
  
  return prediction;
}
```

---

## Development Tools for AI-Powered App Builder

Learn how to use modern AI coding assistants (Cursor, GitHub Copilot, Claude) to accelerate App Builder development. Inspired by [AEM's AI Coding Agents Guide](https://www.aem.live/developer/ai-coding-agents).

### Using AI Assistants with App Builder

AI coding tools can help you build App Builder applications faster, but they need the right context.

#### Key Tips for Effective AI Prompts:

1. **Be specific about the platform:**
   - Say "App Builder action" or "Adobe I/O Runtime"
   - Don't say "serverless function" (AI returns AWS Lambda docs)

2. **Reference official docs:**
   - App Builder: `developer.adobe.com/app-builder/docs/`
   - Adobe I/O Runtime: `developer.adobe.com/runtime/docs/`

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
action that fetches open tasks from Workfront API v15.0. Use OAuth S2S for 
authentication with credentials from environment variables (ADOBE_CLIENT_ID, 
ADOBE_CLIENT_SECRET). Follow App Builder action patterns with statusCode and 
body. Reference developer.adobe.com/app-builder/docs/ for best practices.
```

#### Create Project Context Files

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

#### "Vibe Coding" with App Builder

Modern AI tools like Cursor, GitHub Copilot, and Claude enable rapid prototyping through conversational coding. Here's how to leverage this workflow with App Builder:

**Quick Onboarding Flow:**

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

**Example Vibe Coding Prompt:**

```
Create a basic campaign landing page that captures lead form submissions. 
Build it as an App Builder action with proper error handling, OAuth S2S 
authentication, and logging. Store lead data using App Builder State storage 
and send a Slack notification when a new lead is submitted. Deploy on Adobe 
App Builder and display the landing page form in the Experience Cloud Shell 
(exc shell) with a summary dashboard showing total leads captured.
```

**Why This Works:**
- App Builder is just Node.js, so your AI-generated code works with minimal changes
- One-command deployment (`aio app deploy`) means no DevOps setup
- AI assistants already know serverless patterns, easy to adapt to App Builder

---

## Quick Start: Deploy Your First AI Integration

### Prerequisites

- Node.js 18+
- Adobe Developer Console project with I/O Runtime enabled ([Create one](https://developer.adobe.com/app-builder/docs/getting_started/))
- AI service API key (OpenAI, Groq, Anthropic, etc.) - optional depending on use case

### Step 1: Create & Initialize Project

**Initialize App Builder Project:**

```bash
# Create new App Builder project
aio app init my-ai-app

# Select template based on your use case:
# - "All Actions" - For backend-only (MCP servers, APIs)
# - "All Extensions" - For UI extensions (Unified Shell, Workfront, AEM)

cd my-ai-app
```

**Project Structure:**

```
my-ai-app/
├── src/
│   ├── dx-excshell-1/         # Unified Shell (if selected)
│   │   ├── actions/           # Backend actions
│   │   ├── web-src/           # Frontend UI
│   │   └── ext.config.yaml    # Extension configuration
│   ├── workfront-ui-1/        # Workfront (if selected)
│   │   └── ext.config.yaml    # Extension configuration
│   └── ...                    # Other extension points
├── app.config.yaml            # App configuration
├── package.json
└── .env                       # Local secrets
```

---

### Step 2: Configure, Code & Deploy

**1. Add API Keys (stored securely, never in code):**

```bash
# For Adobe APIs (required)
aio app config set ADOBE_CLIENT_ID your-client-id
aio app config set ADOBE_CLIENT_SECRET your-client-secret
aio app config set ADOBE_IMS_ORG_ID your-org-id

# For AI providers (if using LLMs)
aio app config set OPENAI_API_KEY your-openai-key
# or
aio app config set ANTHROPIC_API_KEY your-anthropic-key
```

**2. Create Context Files for AI:**

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

Create `AGENTS.md`:

```markdown
# App Builder AI Development Guide

When working in this project:
- Check folder path to determine extension point
- Use extension point-specific SDKs and APIs
- Follow App Builder action patterns (statusCode, body, headers)
- OAuth S2S for authentication (NOT JWT)
```

**3. Write Your Action Code:**

Use AI to help you! Example prompt:

```
I'm in src/workfront-ui-1/actions/. Create an action called fetch-tasks.js 
that queries Workfront API v21.0 for open tasks in a project. Accept projectId 
as a parameter. Use @adobe/aio-sdk for logging. Return tasks sorted by due date.
```

**Example Generated Action:**

```javascript
// src/workfront-ui-1/actions/fetch-tasks/index.js
const { Core } = require('@adobe/aio-sdk');
const fetch = require('node-fetch');

async function main(params) {
  const logger = Core.Logger('fetch-tasks', { level: params.LOG_LEVEL || 'info' });
  
  try {
    const { projectId } = params;
    
    if (!projectId) {
      return {
        statusCode: 400,
        body: { error: 'projectId parameter required' }
      };
    }
    
    // Query Workfront API
    const response = await fetch(
      `https://${params.WORKFRONT_DOMAIN}/attask/api/v21.0/task/search?projectID=${projectId}&status=NEW,INP&$$LIMIT=100`,
      {
        headers: {
          'Sessionid': params.WORKFRONT_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Workfront API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Sort by due date
    const tasks = (data.data || []).sort((a, b) => 
      new Date(a.plannedCompletionDate) - new Date(b.plannedCompletionDate)
    );
    
    logger.info(`Fetched ${tasks.length} tasks for project ${projectId}`);
    
    return {
      statusCode: 200,
      body: { tasks }
    };
    
  } catch (error) {
    logger.error(error);
    return {
      statusCode: 500,
      body: { error: error.message }
    };
  }
}

exports.main = main;
```

**4. Test Locally:**

```bash
# Start local development server
aio app dev

# Test your action (in another terminal)
curl http://localhost:9080/api/v1/web/fetch-tasks \
  -H "Content-Type: application/json" \
  -d '{"projectId": "abc123"}'
```

**5. Deploy:**

```bash
# Deploy to Adobe I/O Runtime
aio app deploy

# Your action is now live at:
# https://your-namespace.adobeioruntime.net/api/v1/web/fetch-tasks
```

**6. View Logs:**

```bash
# View recent logs
aio app logs

# Stream logs in real-time
aio app logs --tail
```

---

### Next Steps

1. **Add More Actions:** Build additional actions for different Adobe products
2. **Configure AI Assistant:** Connect Claude Desktop or Cursor to your MCP server (if applicable)
3. **Set Up CI/CD:** Automate deployments with GitHub Actions
4. **Monitor Usage:** Track action invocations and errors in logs
5. **Iterate with AI:** Use AI assistants to refine and extend your actions

---

## Agent Skills Specification Reference

> **Note:** Agent Skills are an [open standard](https://agentskills.io/specification) for AI-discoverable capabilities. While App Builder doesn't have pre-built Adobe Skills templates yet, **we will be building a skills library and CLI tooling** to make it easy to discover and install Adobe integration patterns. In the meantime, you can build custom skills using the MCP protocol or by following the Agent Skills specification.

### What Are Agent Skills?

Agent Skills use a standardized directory structure and metadata format that makes capabilities discoverable to AI assistants. Think of them as "API documentation for AI agents."

### Installing Skills with `aio` CLI

Similar to `playwright-cli install --skills`, App Builder can install pre-built skills directly into your project:

```bash
# Install Adobe product skills
aio skill install workfront-task-query
aio skill install aem-content-fragments
aio skill install analytics-query

# Install all recommended skills for an extension point
aio skill install --all --extension workfront-ui-1

# List available skills
aio skill list --available

# List installed skills in current project
aio skill list --installed
```

**Benefits:**
- **Known issues embedded** - Skills contain deprecation warnings (e.g., "Use AEM OpenAPI instead of HTTP API")
- **Best practices enforced** - AI assistants automatically recommend current APIs
- **Version-aware** - Skills specify minimum API versions and flag deprecated endpoints
- **Auto-updates** - Run `aio skill update` to get latest best practices

**Example: Skill with Known Issue**

```markdown
---
name: aem-content-fragments
description: Query and manage AEM Content Fragments using OpenAPI
known-issues:
  - api: "AEM Assets HTTP API"
    status: deprecated
    recommendation: "Use AEM OpenAPI - better coverage for Content Fragments"
    migration: "https://developer.adobe.com/experience-manager/docs/openapi/"
---
```

When an AI assistant tries to use the deprecated HTTP API, the skill automatically suggests the OpenAPI alternative.

### Directory Structure

```
my-app-builder-project/
├── actions/
│   └── skills/                    # Skills directory
│       ├── adobe-analytics-query/
│       │   ├── SKILL.md           # Skill definition (metadata + docs)
│       │   └── index.js           # Implementation (App Builder action)
│       ├── adobe-assets-search/
│       │   ├── SKILL.md
│       │   └── index.js
│       └── registry.js            # Skills discovery endpoint
├── app.config.yaml
└── package.json
```

### SKILL.md Format

Each skill has a `SKILL.md` file with YAML frontmatter + Markdown description following the [Adobe Skills specification](https://github.com/adobe/skills):

````markdown
---
name: workfront-task-query
description: Query and analyze Workfront tasks by team, status, or priority. Helps identify overdue tasks, resource allocation, and project health.
---

# Workfront Task Query

Query Adobe Workfront to retrieve task information based on natural language criteria.

## When to Use This Skill

Use this skill when:
- You need to find tasks by assignee, team, or status
- You want to identify overdue or high-priority work
- You're analyzing project health and resource allocation
- You need task data for reporting or dashboards

**Example queries:**
- "Show my open tasks due this week"
- "What high-priority tasks are overdue?"
- "List all tasks assigned to the Marketing team"

## Prerequisites

To use this skill, you need:
- ✅ Adobe Workfront instance URL
- ✅ OAuth Server-to-Server credentials with Workfront API access
- ✅ Valid access token from App Builder authentication
- ✅ Workfront API v21.0 OpenAPI specification for complete endpoint details

## Related Skills

- **workfront-project-status** - Get overall project health metrics
- **workfront-resource-allocation** - Analyze team capacity and workload
- **workfront-time-tracking** - Query logged hours and time entries

## Workflow

### Step 1: Parse Natural Language Query

Convert user's natural language request into Workfront API parameters:

```javascript
// Input: "Show my open tasks due this week"
// Output:
{
  filters: {
    status: "INP",  // In Progress
    assignedToID: "<current-user-id>",
    plannedCompletionDate: {
      gte: "2026-02-25",
      lte: "2026-03-03"
    }
  }
}
```

### Step 2: Query Workfront API

Call Workfront API v21.0 with constructed filters:

```bash
GET https://your-instance.workfront.com/attask/api/v21.0/task/search
```

### Step 3: Format Response

Transform API response into human-readable results:

```json
{
  "tasks": [
    {
      "name": "Design homepage mockup",
      "dueDate": "2026-02-28",
      "priority": "high",
      "assignee": "John Doe",
      "project": "Website Redesign"
    }
  ],
  "summary": {
    "total": 5,
    "overdue": 1,
    "dueThisWeek": 4
  }
}
```

## Example Usage

**Query 1: High-priority overdue tasks**
```
User: "What high-priority tasks are overdue?"

Response:
Found 3 high-priority overdue tasks:
1. "Update brand guidelines" - Due: Feb 20 (5 days overdue) - John Doe
2. "Review Q1 budget" - Due: Feb 22 (3 days overdue) - Jane Smith
3. "Finalize campaign creative" - Due: Feb 23 (2 days overdue) - Mike Johnson
```

**Query 2: Team workload**
```
User: "List all tasks assigned to the Marketing team"

Response:
Marketing team has 12 active tasks:
- 8 in progress
- 3 not started
- 1 overdue
```

## Authentication

Requires OAuth Server-to-Server credentials:
- Store `ADOBE_CLIENT_ID`, `ADOBE_CLIENT_SECRET` in App Builder environment
- Fetch access token using client credentials flow
- Include token in Workfront API requests

## Error Handling

Handle common errors:
- **401 Unauthorized**: Refresh OAuth token
- **403 Forbidden**: User lacks Workfront permissions
- **404 Not Found**: Invalid task or project ID
- **Rate Limit**: Implement retry with backoff
````

### Progressive Disclosure Concept

Agent Skills use **progressive disclosure** to provide the right level of detail based on AI context:

1. **Skill Registry** - High-level list of available skills (names + 1-line descriptions)
2. **Skill Definition** (SKILL.md frontmatter) - Concise name and description
3. **Full Documentation** (SKILL.md body) - When to use, workflow, examples, error handling

AI assistants first see the registry, then request specific skill details only when needed.

### Learn More

- [AgentSkills.io Specification](https://agentskills.io/specification) - Full Agent Skills spec
- [MCP Protocol](https://modelcontextprotocol.io/) - Model Context Protocol docs
- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/) - Complete platform guide

---

## Resources

- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [DocuBot Example](https://github.com/rokapooradobe/adobe-docubot)
- [MCP Server Generator](https://github.com/robbiekapoor/generator-app-remote-mcp-server-generic)
- [Cursor Rules for App Builder](https://github.com/robbiekapoor/benges-app_builder-cursor-rules-base)

---

## Next Steps

1. **Explore Templates:** Run `aio app init` and browse AI-focused templates
2. **Join Community:** [Adobe Developer Forums](https://experienceleaguecommunities.adobe.com/t5/adobe-i-o-console/ct-p/adobe-io-console)
3. **Read Guides:** [App Builder Guides](https://developer.adobe.com/app-builder/docs/guides/)
4. **Watch Demos:** [App Builder on YouTube](https://www.youtube.com/playlist?list=PLcVEYUqU7VReYsRrAlB0ydgeKIvcxYXXz)
5. **Contribute Your Skills:** Help grow the App Builder Agent Skills ecosystem by sharing your custom skills

**Ready to build? Start with one command:**

```bash
aio app init --template @adobe/generator-app-agent-skills
```

---

## Contribute Your App Builder Skills

We welcome contributions from the community! If you've built Agent Skills for App Builder, share them with other developers.

### How to Contribute:

1. **Create your skill** following the [Agent Skills specification](https://agentskills.io/specification)
2. **Test your skill** with AI assistants (Claude, Cursor, GitHub Copilot)
3. **Document your skill** with clear examples and use cases
4. **Submit to the community** via the [Adobe Skills repository](https://github.com/adobe/skills)

### What Skills to Contribute:

**Adobe API Integrations:**
- Analytics queries and reporting
- AEM Assets search and management
- Campaign automation workflows
- Target experiment management
- Commerce order processing

**Developer Tools:**
- Code generation and scaffolding
- Testing and deployment automation
- Documentation generation
- Error analysis and debugging

**Business Workflows:**
- Lead capture and CRM integration
- Customer data synchronization
- Content publishing pipelines
- Approval workflows

### Contribution Benefits:

- Help other developers accelerate their App Builder projects
- Get feedback and improvements from the community
- Build your reputation as an App Builder expert
- Contribute to the growing AI + Adobe ecosystem

### How to Submit Your Skills:

Share your App Builder skills with the community:

- **Adobe Developer Forums**: Post your skill in the [App Builder Community](https://experienceleaguecommunities.adobe.com/t5/adobe-i-o-console/ct-p/adobe-io-console)
- **GitHub**: Open an issue or discussion in the App Builder docs repository
- **Developer Support**: Contact the App Builder team via Adobe Developer Console

We'll review community contributions and feature the best skills in our documentation and examples.

---

*Last updated: February 2026*
