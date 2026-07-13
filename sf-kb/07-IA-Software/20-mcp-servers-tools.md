---
title: "MCP Servers, Tools y Resources"
tags:
  - sf/ia-software
  - type/arquitectura
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "MCP Servers"
  - "MCP Tools"
  - "MCP Resources"
related:
  - "[[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]"
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]"
  - "[[../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización]]"
---

# MCP Servers, Tools y Resources

MCP Servers exponen Tools, Resources y Prompts que los LLMs pueden usar. Este artículo detalla cómo diseñarlos y usarlos.

## MCP Server Architecture

```
┌─────────────────────────────────────────────┐
│            MCP SERVER ARCHITECTURE           │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │           Transport Layer            │   │
│  │     (stdio / SSE / Streamable HTTP)  │   │
│  └──────────────────┬───────────────────┘   │
│                     │                       │
│  ┌──────────────────┴───────────────────┐   │
│  │          Protocol Layer              │   │
│  │        (JSON-RPC 2.0)                │   │
│  └──────────────────┬───────────────────┘   │
│                     │                       │
│  ┌─────────┬────────┴────────┬──────────┐   │
│  │  TOOLS  │   RESOURCES     │ PROMPTS  │   │
│  │         │                 │          │   │
│  │ Functions│  Data access   │ Templates│   │
│  │ (write)  │  (read-only)   │ (repeat) │   │
│  └─────────┴─────────────────┴──────────┘   │
│                                              │
└─────────────────────────────────────────────┘
```

## Tools (Herramientas)

### Definición

Tools son funciones que el LLM puede invocar. Toman input estructurado y retornan resultados.

```typescript
// Tool definition
{
  name: "create_issue",
  description: "Create a GitHub issue",
  inputSchema: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "Issue title"
      },
      body: {
        type: "string",
        description: "Issue body (markdown)"
      },
      labels: {
        type: "array",
        items: { type: "string" },
        description: "Labels to add"
      }
    },
    required: ["title"]
  }
}
```

### Tool Implementation

```typescript
// Server-side handler
server.setRequestHandler("tools/call", async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "create_issue":
      const issue = await github.createIssue({
        owner: "myorg",
        repo: "myrepo",
        title: args.title,
        body: args.body,
        labels: args.labels || []
      });

      return {
        content: [{
          type: "text",
          text: `Created issue #${issue.number}: ${issue.title}`
        }]
      };

    case "search_code":
      const results = await searchCode(args.pattern, args.path);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(results, null, 2)
        }]
      };

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});
```

### Tool Patterns

```
Tool Categories:
─────────────────
1. Read-only tools (safe)
   ├── read_file
   ├── search_code
   ├── list_directory
   └── get_weather

2. Write tools (need validation)
   ├── write_file
   ├── create_issue
   ├── send_email
   └── deploy

3. Execution tools (high risk)
   ├── run_command
   ├── execute_sql
   ├── run_tests
   └── build_project
```

## Resources (Recursos)

### Definición

Resources exponen datos que el LLM puede leer. Son READ-ONLY por diseño.

```typescript
// Resource definition
{
  uri: "file:///path/to/project/src",
  name: "Source Directory",
  description: "Project source code directory",
  mimeType: "text/plain"
}

// Resource template
{
  uriTemplate: "file:///path/to/project/{filepath}",
  name: "Project File",
  description: "Read any file in the project",
  mimeType: "text/plain"
}
```

### Resource Implementation

```typescript
// List available resources
server.setRequestHandler("resources/list", async () => ({
  resources: [
    {
      uri: "config://app/settings",
      name: "App Settings",
      description: "Application configuration",
      mimeType: "application/json"
    },
    {
      uri: "db://schema/tables",
      name: "Database Schema",
      description: "Database table definitions",
      mimeType: "application/json"
    }
  ]
}));

// Read resource
server.setRequestHandler("resources/read", async (request) => {
  const { uri } = request.params;

  if (uri === "config://app/settings") {
    const config = await readConfig();
    return {
      contents: [{
        uri,
        mimeType: "application/json",
        text: JSON.stringify(config, null, 2)
      }]
    };
  }
});
```

### Resource vs Tool

| Aspect | Resource | Tool |
|--------|----------|------|
| Operation | Read-only | Read/Write |
| Side effects | None | Possible |
| Caching | Aggressive | Careful |
| Use case | Data retrieval | Actions |
| Safety | High | Requires validation |

## Prompts

### Definición

Prompts son templates de interacción pre-definidos.

```typescript
// Prompt definition
{
  name: "code_review",
  description: "Review code for issues",
  arguments: [
    {
      name: "language",
      description: "Programming language",
      required: true
    },
    {
      name: "focus",
      description: "Review focus area",
      required: false
    }
  ]
}
```

### Prompt Implementation

```typescript
server.setRequestHandler("prompts/list", async () => ({
  prompts: [
    {
      name: "code_review",
      description: "Review code for quality and security",
      arguments: [
        { name: "language", description: "Language", required: true },
        { name: "focus", description: "Focus area", required: false }
      ]
    },
    {
      name: "debug_error",
      description: "Help debug an error",
      arguments: [
        { name: "error_message", description: "Error message", required: true },
        { name: "stack_trace", description: "Stack trace", required: false }
      ]
    }
  ]
}));

server.setRequestHandler("prompts/get", async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "code_review") {
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Review this ${args.language} code for:
- Security vulnerabilities
- Performance issues
- Code quality
${args.focus ? `Focus on: ${args.focus}` : ""}`
          }
        }
      ]
    };
  }
});
```

## Sampling

Sampling permite al servidor pedir al LLM que genere contenido.

```typescript
// Server requests LLM generation
const result = await server.requestSampling({
  messages: [{
    role: "user",
    content: {
      type: "text",
      text: "Generate a test case for this function: " + functionCode
    }
  }],
  modelPreferences: {
    hints: [{ name: "claude-3-opus" }]
  },
  maxTokens: 1024
});
```

## Ejemplo: Database Server Completo

```typescript
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const server = new Server(
  { name: "postgres", version: "1.0.0" },
  { capabilities: { tools: {}, resources: {} } }
);

// Tools
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "query",
      description: "Execute a read-only SQL query",
      inputSchema: {
        type: "object",
        properties: {
          sql: { type: "string", description: "SQL query" }
        },
        required: ["sql"]
      }
    },
    {
      name: "list_tables",
      description: "List all tables in the database",
      inputSchema: { type: "object", properties: {} }
    }
  ]
}));

server.setRequestHandler("tools/call", async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "query") {
    // Security: only allow SELECT
    if (!args.sql.trim().toUpperCase().startsWith("SELECT")) {
      return {
        content: [{ type: "text", text: "Error: Only SELECT queries allowed" }],
        isError: true
      };
    }

    const result = await pool.query(args.sql);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(result.rows, null, 2)
      }]
    };
  }

  if (name === "list_tables") {
    const result = await pool.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public'
    `);
    return {
      content: [{
        type: "text",
        text: result.rows.map(r => r.table_name).join("\n")
      }]
    };
  }
});

// Resources
server.setRequestHandler("resources/list", async () => ({
  resources: [{
    uri: "db://schema",
    name: "Database Schema",
    description: "Full database schema",
    mimeType: "application/json"
  }]
}));

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Best Practices

1. **Minimal exposure**: Solo las tools necesarias
2. **Input validation**: Validar todos los inputs
3. **Error messages**: Claros y accionables
4. **Rate limiting**: Prevenir abuse
5. **Logging**: Para debugging y auditoría
6. **Documentation**: Buenas descriptions para el LLM

## Relación con otros conceptos

- Protocolo: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Agentes: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]
- Automatización: [[../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
