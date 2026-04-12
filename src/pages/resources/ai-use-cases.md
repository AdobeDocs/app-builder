---
keywords:
  - Adobe I/O
  - Extensibility
  - AI
  - MCP
  - Agent Skills
title: Build AI Integrations with App Builder
description: Deploy AI-powered integrations with App Builder including MCP servers, documentation assistants, and agent skills.
---

# Build AI Integrations with App Builder

**Deploy AI-powered integrations in minutes, not weeks.** App Builder provides zero-infrastructure, enterprise-grade hosting for AI agents, MCP servers, and intelligent workflows with built-in security, authentication, and auto-scaling.

## Why App Builder for AI?

- **Isolated containers** - Each action runs in its own secure sandbox
- **Encrypted credential storage** - No hardcoded API keys
- **OAuth 2.0** - Enterprise SSO and Server-to-Server authentication
- **Auto-scaling** - Handles traffic spikes without configuration
- **Regional deployment** - Data residency support (amer/apac/emea)
- **One-command deploy** - `aio app deploy` ships to production

## AI Use Cases

### MCP (Model Context Protocol) Servers

Host **standardized MCP servers** that expose Adobe data and capabilities to AI assistants through the official MCP TypeScript SDK.

[MCP](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard that enables AI assistants (Claude, Cursor, etc.) to securely interact with external systems. Instead of hardcoding API credentials in AI configs, MCP servers act as secure intermediaries.

```
AI Tool (Claude Desktop / Cursor)
    ↓ MCP protocol request
Your MCP Server (hosted on App Builder)
    ↓ Authenticated API call (OAuth S2S)
Adobe APIs (Analytics, AEM, Assets, etc.)
    ↓ Structured response
AI Tool (formats for user)
```

**What you can build:**

- Real-time Adobe Experience Cloud data access for AI tools
- Custom tools, resources, and prompts for Claude Desktop / Cursor
- Serverless MCP endpoints with auto-scaling
- Secure credential management (no keys on user machines)

**Quick start:**

```bash
aio app init my-mcp-server
cd my-mcp-server
npm install @modelcontextprotocol/sdk
aio app deploy
```

After deployment, your MCP server URL will be:

```
https://<namespace>-<workspace>.adobeioruntime.net/api/v1/web/mcp/server
```

Add this URL to your AI assistant's configuration (Claude Desktop, Cursor, or other MCP-compatible tools).

**Example queries your MCP server can handle:**

- *"Show my open tasks due this week"* - Queries Adobe Workfront
- *"Find all product images tagged 'Spring 2026'"* - Searches AEM Assets
- *"What's the conversion rate for homepage test?"* - Checks Adobe Target

### Documentation Assistants

Build **AI-powered chatbots** that answer developer questions based on your documentation, GitHub issues, and internal knowledge bases.

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

**Example:** [DocuBot](https://github.com/rokapooradobe/adobe-docubot) - an AI Slack assistant that answers App Builder questions using official docs, generates code snippets, and troubleshoots errors. Powered by LLM providers (OpenAI, Anthropic, Groq) with vector search against indexed documentation.

### AI Agent Hosting

Host **AI agents and autonomous workflows** on App Builder without managing containers or orchestration.

- Multi-agent systems that coordinate multiple Adobe APIs
- Autonomous task completion workflows
- Event-driven AI pipelines triggered by I/O Events

Deploy agents as serverless actions that scale automatically, with secure credential management for LLM API keys and built-in logging.

### Content Analysis & Auto-Tagging

Build **intelligent content processing pipelines** using AI models to analyze, categorize, and enrich assets.

```
Asset uploaded to AEM
    ↓ (webhook trigger)
App Builder action receives event
    ↓
Calls vision API (Google Vision, AWS Rekognition, Firefly)
    ↓
Tags extracted & written back to AEM
```

Use cases: auto-tag images in AEM Assets, sentiment analysis on customer feedback, content moderation, SEO metadata generation.

### Predictive Workflows

Use **machine learning models** to power intelligent business workflows: customer lifetime value prediction, inventory demand forecasting, lead scoring for Marketo, and content recommendation engines.

## Getting Started

### Prerequisites

- Node.js 18+
- Adobe Developer Console project with I/O Runtime enabled ([Create one](https://developer.adobe.com/app-builder/docs/get_started/app_builder_get_started/first-app))
- AI service API key (OpenAI, Anthropic, etc.) - optional depending on use case

### Initialize, build, deploy

```bash
# Create project
aio app init my-ai-app
cd my-ai-app

# Add API keys (stored securely, never in code)
aio app config set OPENAI_API_KEY your-key

# Develop locally
aio app dev

# Deploy to production
aio app deploy
```

Use AI assistants to write your action code. See the [AI-Powered Development Tools](../get_started/app_builder_get_started/ai-development-tools.md) guide for how to use Cursor with App Builder Skills to build and deploy apps from a single prompt.

## App Builder Skills

**App Builder Skills** are structured knowledge files that teach AI agents how to build on App Builder. Skills encode patterns for project scaffolding, action development, UI building, testing, and deployment so AI assistants produce correct code without verbose prompts.

Available skills cover project initialization, action scaffolding, UI development, testing, and CI/CD. See the [AI-Powered Development Tools](../get_started/app_builder_get_started/ai-development-tools.md) guide for setup and usage.

Adobe Skills are open source: [github.com/adobe/skills](https://github.com/adobe/skills)

### Contribute a Skill

If you've built patterns for App Builder, share them:

1. Create your skill following the [Agent Skills specification](https://agentskills.io/specification)
2. Test with AI assistants (Claude, Cursor, GitHub Copilot)
3. Submit to the [Adobe Skills repository](https://github.com/adobe/skills)

Contributions welcome for Adobe API integrations (Analytics, AEM, Campaign, Target, Commerce), developer tooling (scaffolding, testing, deployment), and business workflows (CRM sync, content pipelines, approval flows).

## Resources

- [App Builder Documentation](https://developer.adobe.com/app-builder/docs/intro_and_overview/)
- [AI-Powered Development Tools](../get_started/app_builder_get_started/ai-development-tools.md)
- [Agent Skills Specification](https://agentskills.io/specification)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [DocuBot Example](https://github.com/rokapooradobe/adobe-docubot)
- [Adobe Developer Forums](https://experienceleaguecommunities.adobe.com/)
