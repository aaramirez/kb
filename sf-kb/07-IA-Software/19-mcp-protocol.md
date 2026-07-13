---
title: "Model Context Protocol (MCP)"
tags:
  - sf/ia-software
  - type/protocolo
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "MCP"
  - "Model Context Protocol"
  - "MCP Specification"
related:
  - "[[../07-IA-Software/20-mcp-servers-tools|MCP Servers, Tools y Resources]]"
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]"
  - "[[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]"
---

# Model Context Protocol (MCP)

MCP es un protocolo abierto que estandariza cómo los LLMs se conectan a fuentes de datos y herramientas externas. Es el "USB-C" de los agentes de IA.

## ¿Qué es MCP?

> MCP (Model Context Protocol) es un protocolo abierto que define una interfaz estándar para conectar LLMs con contextos externos: tools, resources y prompts.

```
┌─────────────────────────────────────────────────┐
│              MCP ARCHITECTURE                    │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐    MCP    ┌──────────────────┐   │
│  │  LLM     │◀────────▶│   MCP Server      │   │
│  │  Client  │  (stdio/  │  ┌─────────────┐ │   │
│  │          │   SSE)    │  │   Tools     │ │   │
│  └──────────┘           │  ├─────────────┤ │   │
│                          │  │  Resources  │ │   │
│  (IDE, Agent, App)      │  ├─────────────┤ │   │
│                          │  │   Prompts   │ │   │
│                          │  └─────────────┘ │   │
│                          └──────────────────┘   │
│                                                  │
│  Standardized interface                         │
│  Language-agnostic                              │
│  Transport-agnostic                             │
└─────────────────────────────────────────────────┘
```

## Componentes MCP

### Client-Server Model

```
Host Application (IDE, Agent)
    │
    ├── MCP Client 1 ──→ MCP Server A (filesystem)
    │
    ├── MCP Client 2 ──→ MCP Server B (database)
    │
    └── MCP Client 3 ──→ MCP Server C (API)
```

### Three Core Primitives

| Primitive | Description | Analogy |
|-----------|-------------|---------|
| **Tools** | Functions the LLM can call | POST endpoints |
| **Resources** | Data the LLM can read | GET endpoints |
| **Prompts** | Pre-defined interaction templates | API schemas |

## Transport Layers

### 1. stdio (Standard I/O)

```
┌──────────────┐    stdin/stdout    ┌──────────────┐
│  MCP Client  │◀──────────────────▶│  MCP Server  │
│  (Host App)  │    (subprocess)    │  (child proc)│
└──────────────┘                    └──────────────┘

Use case: Local tools, CLI-based servers
```

**Ejemplo de server stdio:**

```typescript
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server(
  { name: "filesystem", version: "1.0.0" },
  { capabilities: { tools: {}, resources: {} } }
);

// Register tools
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "read_file",
      description: "Read contents of a file",
      inputSchema: {
        type: "object",
        properties: {
          path: { type: "string", description: "File path" }
        },
        required: ["path"]
      }
    }
  ]
}));

// Start with stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
```

### 2. SSE (Server-Sent Events)

```
┌──────────────┐     HTTP/SSE      ┌──────────────┐
│  MCP Client  │◀─────────────────▶│  MCP Server  │
│  (Host App)  │   (REST + SSE)    │  (remote)    │
└──────────────┘                    └──────────────┘

Use case: Remote servers, web-based clients
```

### 3. Streamable HTTP (nuevo en 2025)

```
POST /mcp → Full-duplex streaming
Supports: JSON-RPC over HTTP with streaming responses
```

## Lifecycle

```
MCP Connection Lifecycle:
──────────────────────────
1. INITIALIZATION
   ├── Client sends: initialize
   ├── Server responds: capabilities
   └── Client sends: initialized

2. OPERATION
   ├── Client calls tools
   ├── Client reads resources
   └── Client uses prompts

3. SHUTDOWN
   ├── Client sends: close
   └── Server cleans up
```

### Handshake example

```json
// Client → Server: initialize
{
  "jsonrpc": "2.0",
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-03-26",
    "capabilities": {
      "tools": {},
      "resources": {}
    },
    "clientInfo": {
      "name": "my-ide",
      "version": "1.0.0"
    }
  }
}

// Server → Client: initialize response
{
  "jsonrpc": "2.0",
  "result": {
    "protocolVersion": "2025-03-26",
    "capabilities": {
      "tools": { "listChanged": true },
      "resources": { "subscribe": true }
    },
    "serverInfo": {
      "name": "filesystem-server",
      "version": "1.0.0"
    }
  }
}
```

## Capabilities

| Capability | Description | Server declares |
|------------|-------------|-----------------|
| `tools` | Can call tools | ✅ |
| `resources` | Can read resources | ✅ |
| `prompts` | Has prompt templates | ✅ |
| `sampling` | Can request LLM sampling | ✅ |
| `logging` | Can send log messages | ✅ |

## MCP vs Alternativas

| Aspect | MCP | Function Calling | LangChain Tools | Custom API |
|--------|-----|------------------|-----------------|------------|
| Standard | Open protocol | Vendor-specific | Framework-specific | Custom |
| Interoperability | High | Low | Medium | Low |
| Discovery | Built-in | Manual | Manual | Manual |
| Streaming | Yes | Varies | Varies | Custom |
| Resources | Yes | No | No | Custom |
| Prompts | Yes | No | No | No |
| Ecosystem | Growing | Large | Large | None |

## MCP Ecosystem (2026)

### Servers disponibles

| Server | Provider | Purpose |
|--------|----------|---------|
| filesystem | MCP | File read/write |
| github | MCP | GitHub API |
| postgres | MCP | Database queries |
| slack | MCP | Slack messaging |
| puppeteer | MCP | Browser automation |
| memory | MCP | Persistent memory |
| brave-search | MCP | Web search |
| google-maps | MCP | Location services |

### Clients que soportan MCP

| Client | Type |
|--------|------|
| Claude Desktop | Desktop app |
| Cursor | IDE |
| Continue.dev | IDE |
| Zed | IDE |
| Cline | VS Code extension |
| Opencode | CLI tool |

## Ejemplo: Filesystem Server

```
Architecture:
─────────────
┌──────────┐     stdio      ┌────────────────┐
│  Claude  │◀──────────────▶│  filesystem    │
│ Desktop  │                │  MCP server    │
└──────────┘                │                │
                            │  Tools:        │
                            │  - read_file   │
                            │  - write_file  │
                            │  - list_dir    │
                            │  - search      │
                            │                │
                            │  Resources:    │
                            │  - file://...  │
                            └────────────────┘
```

### Configuración en Claude Desktop

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/me/projects"
      ]
    }
  }
}
```

## Best Practices

1. **Start with existing servers**: No reinvent the wheel
2. **Minimal permissions**: Solo los paths/herramientas necesarios
3. **Error handling**: Servers deben manejar errores gracefully
4. **Logging**: Habilitar para debugging
5. **Version control**: Mantener protocol version actualizado
6. **Security**: Validar inputs, sanitizar outputs

## Relación con otros conceptos

- Servers/Tools: [[../07-IA-Software/20-mcp-servers-tools|MCP Servers, Tools y Resources]]
- Agentes: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
- Automatización: [[../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización]]
