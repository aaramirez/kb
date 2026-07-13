---
title: "Agentes de IA: Visión General"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Agents"
  - "LLM Agents"
  - "Agentic AI"
related:
  - "[[../07-IA-Software/15-agentes-autonomos|Agentes Autónomos]]"
  - "[[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]"
  - "[[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]"
---

# Agentes de IA: Visión General

Los agentes de IA representan la evolución de los LLMs de chatbots pasivos a sistemas activos que pueden planificar, ejecutar y adaptar acciones.

## Definición

> Un **agente de IA** es un sistema que combina un LLM con herramientas, memoria y capacidad de planificación para autonomamente ejecutar tareas complejas.

```
┌─────────────────────────────────────────────────┐
│                 AI AGENT                         │
│                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │   LLM    │───▶│ Planning │───▶│  Action  │  │
│  │ (Brain)  │◀───│  Module  │◀───│  Module  │  │
│  └──────────┘    └──────────┘    └──────────┘  │
│       │               │               │         │
│       ▼               ▼               ▼         │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  Memory  │    │  Tools   │    │ Observer │  │
│  │ (Short/  │    │ (Code,   │    │ (Feedback│  │
│  │  Long)   │    │  APIs)   │    │  Loop)   │  │
│  └──────────┘    └──────────┘    └──────────┘  │
└─────────────────────────────────────────────────┘
```

## Componentes Fundamentales

### 1. LLM (Cerebro)

El LLM es el motor de razonamiento del agente.

| Capability | Role in Agent |
|------------|---------------|
| Understanding | Interpreta instrucciones y contexto |
| Reasoning | Toma decisiones sobre próximos pasos |
| Generation | Produce código, texto, planes |
| Tool selection | Elige la herramienta correcta |
| Error recovery | Analiza fallos y ajusta estrategia |

### 2. Tools (Herramientas)

```
┌─────────────────────────────────────────────┐
│           AGENT TOOLS                        │
├─────────────────────────────────────────────┤
│                                              │
│  Code Tools:                                │
│  ├── read_file(path)                        │
│  ├── write_file(path, content)              │
│  ├── edit_file(path, old, new)              │
│  ├── list_files(directory)                  │
│  └── search_code(pattern)                   │
│                                              │
│  Execution Tools:                           │
│  ├── run_command(cmd)                       │
│  ├── run_tests(pattern)                     │
│  ├── run_linter()                           │
│  └── run_formatter()                        │
│                                              │
│  External Tools:                            │
│  ├── search_web(query)                      │
│  ├── fetch_url(url)                         │
│  ├── send_email(to, body)                   │
│  └── create_issue(title, body)              │
│                                              │
│  MCP Tools:                                 │
│  ├── database_query(sql)                    │
│  ├── api_call(method, url)                  │
│  ├── file_storage operations                │
│  └── Custom tools via MCP servers           │
│                                              │
└─────────────────────────────────────────────┘
```

### 3. Memory (Memoria)

| Type | Description | Persistence |
|------|-------------|-------------|
| **Working memory** | Current context, recent actions | Temporary |
| **Short-term memory** | Conversation history | Per-session |
| **Long-term memory** | Learned patterns, preferences | Persistent |
| **Episodic memory** | Past task experiences | Persistent |
| **Semantic memory** | Knowledge base, docs | Persistent |

```
Memory Architecture:
─────────────────────
┌─────────────────────────────────────┐
│           AGENT MEMORY              │
├──────────────┬──────────────────────┤
│  Working     │ Current task state   │
│  (Context    │ Active variables     │
│   Window)    │ Current plan         │
├──────────────┼──────────────────────┤
│  Short-term  │ Recent conversation  │
│  (Session)   │ Last 10-50 messages  │
│              │ Recent file changes  │
├──────────────┼──────────────────────┤
│  Long-term   │ Vector DB storage    │
│  (Persistent)│ Project conventions  │
│              │ Past decisions       │
│              │ User preferences     │
└──────────────┴──────────────────────┘
```

### 4. Planning (Planificación)

```
Planning Approaches:
─────────────────────
1. ReAct (Reasoning + Acting)
   Thought → Action → Observation → Thought → ...

2. Plan-and-Execute
   Plan all steps → Execute each → Replan if needed

3. Tree of Thoughts
   Branch multiple reasoning paths → Evaluate → Select best

4. Reflexion
   Execute → Evaluate → Reflect → Improve → Retry
```

Referencia: [[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]

## Lifecycle de un Agente

```
┌─────────────────────────────────────────────────┐
│            AGENT LIFECYCLE                        │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. INITIALIZATION                              │
│     ├── Load LLM configuration                  │
│     ├── Initialize tools                        │
│     ├── Load memory/context                     │
│     └── Set system prompt                       │
│                                                  │
│  2. RECEIVE TASK                                │
│     ├── Parse user instruction                  │
│     ├── Gather context                          │
│     └── Decompose into subtasks                 │
│                                                  │
│  3. PLAN                                        │
│     ├── Identify required tools                 │
│     ├── Order steps                             │
│     └── Estimate complexity                     │
│                                                  │
│  4. EXECUTE                                     │
│     ├── Call tools sequentially/parallel        │
│     ├── Handle errors                           │
│     └── Update working memory                   │
│                                                  │
│  5. EVALUATE                                    │
│     ├── Check intermediate results              │
│     ├── Verify against requirements             │
│     └── Decide: continue, replan, or finish     │
│                                                  │
│  6. DELIVER                                     │
│     ├── Compile final result                    │
│     ├── Update long-term memory                 │
│     └── Return to user                          │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Ejemplo: Agente de Coding

```
Task: "Add user authentication with JWT to the API"

Agent Plan:
1. Read current API structure (read_file)
2. Read package.json for dependencies (read_file)
3. Identify auth insertion points (search_code)
4. Create auth middleware (write_file)
5. Create login endpoint (write_file)
6. Create JWT utility (write_file)
7. Update routes (edit_file)
8. Add tests (write_file)
9. Run tests (run_command)
10. Fix any failures (iterate)

Execution trace:
─────────────────
> Agent: Let me start by understanding the current API structure.
> Tool: read_file("src/index.ts")
> Tool: read_file("package.json")
> Tool: search_code("router")
> Agent: I can see Express with TypeScript. I'll add JWT auth.
> Tool: write_file("src/middleware/auth.ts", ...)
> Tool: write_file("src/routes/auth.ts", ...)
> Tool: run_command("npm test")
> Observation: 2 tests failed (import path issue)
> Agent: Let me fix the import paths.
> Tool: edit_file("src/routes/auth.ts", ...)
> Tool: run_command("npm test")
> Observation: All 15 tests passing ✅
> Agent: Authentication has been successfully added.
```

## Agentes en la Industria

| Agent | Company | Type | Capabilities |
|-------|---------|------|-------------|
| GitHub Copilot Workspace | Microsoft | Coding | Multi-file changes |
| Cursor Composer | Anysphere | Coding | Full codebase agent |
| Devin | Cognition | Coding | Autonomous SWE |
| Claude Code | Anthropic | Coding | CLI-based agent |
| OpenAI Codex | OpenAI | Coding | Cloud-based agent |
| SWE-Agent | Princeton | Research | Open-source coding |
| AutoGPT | Significant Gravitas | General | Autonomous tasks |
| LangGraph agents | LangChain | Framework | Custom agents |

## Comparison: Agent vs Chatbot vs Copilot

| Aspect | Chatbot | Copilot | Agent |
|--------|---------|---------|-------|
| Interaction | Q&A | Autocomplete | Autonomous |
| Tools | None | Code completion | Full toolset |
| Memory | Conversation | Context window | Long-term |
| Planning | None | Implicit | Explicit |
| Execution | Text only | Code suggestions | Full execution |
| Autonomy | Low | Medium | High |
| Complexity | Simple | Medium | Complex tasks |
| Error handling | User retries | User fixes | Self-corrects |

## Seguridad y Guardrails

```
Agent Safety Layers:
─────────────────────
┌─────────────────────────────────┐
│  Layer 1: Input Validation      │
│  ├── Prompt injection detection │
│  └── Task scope validation      │
├─────────────────────────────────┤
│  Layer 2: Tool Restrictions     │
│  ├── Allowed tools only         │
│  ├── Rate limiting              │
│  └── Sandboxed execution        │
├─────────────────────────────────┤
│  Layer 3: Output Validation     │
│  ├── Code review before apply   │
│  ├── Security scanning          │
│  └── Human approval gates       │
├─────────────────────────────────┤
│  Layer 4: Monitoring            │
│  ├── Action logging             │
│  ├── Anomaly detection          │
│  └── Rollback capability        │
└─────────────────────────────────┘
```

## Relación con otros conceptos

- Autonomía: [[../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]]
- Arquitecturas: [[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]
- Orquestación: [[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]
- Multi-agente: [[../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]]
- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas AI]]
- Límites: [[../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos]]
