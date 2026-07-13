---
title: "AI Pair Programming"
tags:
  - sf/ia-software
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Pairing"
  - "Driver-Navigator with AI"
related:
  - "[[../07-IA-Software/02-copilot-efecto|Copilot y Efecto Copilot]]"
  - "[[../07-IA-Software/07-prompt-engineering-dev|Prompt Engineering]]"
  - "[[../03-Procesos/README|Procesos]]"
---

# AI Pair Programming

AI pair programming combina las fortalezas del developer (contexto, decisiones, creativity) con las del LLM (velocidad, knowledge base, patterns).

## El Nuevo Pair Programming

### Traditional vs AI Pair Programming

```
Traditional:
┌──────────┐     ┌──────────┐
│  Driver  │────▶│ Navigator│
│ (codes)  │◀────│ (reviews)│
└──────────┘     └──────────┘

AI Pair Programming:
┌──────────┐     ┌──────────┐
│  Human   │────▶│   AI     │
│ (driver) │◀────│(navigator│
│          │     │  + coder)│
└──────────┘     └──────────┘
```

### Roles en AI Pair Programming

| Role | Humano | AI |
|------|--------|-----|
| **Understands context** | ✅ Business logic | ❌ Solo código |
| **Makes decisions** | ✅ Architecture | ⚠️ Sugiere |
| **Generates code** | ✅ Complex logic | ✅ Boilerplate |
| **Reviews** | ✅ Final check | ✅ First pass |
| **Identifies issues** | ✅ Domain bugs | ✅ Syntax/logic |
| **Suggests patterns** | ⚠️ Based on experience | ✅ From training data |
| **Writes tests** | ✅ Integration/E2E | ✅ Unit tests |

## Workflows de AI Pair Programming

### Workflow 1: Human-led, AI-assisted

```
1. Human defines the task/feature
2. Human writes the design/interface
3. AI fills in implementation details
4. Human reviews and adjusts
5. AI handles boilerplate (tests, types)
6. Human does final review + merge
```

### Workflow 2: AI-led with human oversight

```
1. Human describes the goal
2. AI generates a plan
3. Human approves/modifies plan
4. AI implements step by step
5. Human reviews each step
6. AI addresses feedback
7. Human does final review
```

### Workflow 3: Exploratory (TDD with AI)

```
1. Human writes the test first
2. AI generates implementation to pass test
3. Human reviews implementation
4. AI refactors to improve
5. Human verifies tests still pass
6. Repeat
```

## Tips para Effective AI Pairing

### Do's ✅

| Tip | Ejemplo |
|-----|---------|
| **Provide context first** | "We're in a React + TypeScript project using Zustand for state" |
| **Use architecture decisions** | "Follow our feature-based structure" |
| **Review incrementally** | Don't let AI write 500 lines without checking |
| **Ask for alternatives** | "Show me 3 different approaches" |
| **Request explanations** | "Explain why you chose this pattern" |
| **Iterate together** | "This is good, but handle the error case too" |

### Don'ts ❌

| Anti-pattern | Why it fails |
|--------------|-------------|
| Accept everything blindly | AI generates plausible but wrong code |
| No context | AI guesses wrong patterns |
| Over-delegate | AI doesn't understand business logic |
| Skip review | Bugs slip through |
| No tests | AI-generated code needs verification |
| Too specific prompts | Limits AI creativity |

## Pair Programming Patterns

### Pattern 1: Scaffolding

```
Human: "Create the user registration feature"
AI: Generates complete scaffold:
  - Route definition
  - Controller with validation
  - Service layer
  - Repository pattern
  - Types/interfaces
  - Unit tests
Human: Reviews and customizes
```

### Pattern 2: Debugging together

```
Human: "This function returns wrong results"
AI: Analyzes and suggests:
  - Root cause identification
  - Edge cases missed
  - Fix with explanation
  - Test to verify
Human: Verifies fix makes sense in context
```

### Pattern 3: Refactoring session

```
Human: "This module is too complex"
AI: Suggests:
  - Extract methods
  - Simplify conditionals
  - Apply design pattern
  - Before/after comparison
Human: Decides which changes to apply
```

### Pattern 4: Learning mode

```
Human: "Explain this legacy code"
AI: Provides:
  - Architecture overview
  - Data flow explanation
  - Dependency analysis
  - Suggested modernization
Human: Learns and applies knowledge
```

## Limitaciones

| Limitación | Impacto | Mitigación |
|------------|---------|------------|
| No entiende business context | Puede generar código técnicamente correcto pero funcionalmente equivocado | Siempre explicar el "por qué" |
| No conoce el codebase completo | Puede contradecir decisiones previas | Proporcionar contexto relevante |
| Over-engineering | Patrones innecesarios | Simplify prompts |
| Code review fatigue | AI genera mucho, humano se cansa de revisar | Limitar scope por iteración |
| No detecta race conditions | Concurrency issues | Testing explícito |

## Metrics de AI Pair Programming

| Métrica | Sin AI | Con AI | Delta |
|---------|--------|--------|-------|
| Time to first prototype | 4h | 1.5h | -62% |
| Boilerplate written by hand | 100% | 20% | -80% |
| Time spent debugging | 30% | 25% | -17% |
| Time spent reviewing | 15% | 25% | +67% |
| Overall productivity | baseline | +35-50% | — |

## Herramientas para AI Pairing

| Tool | Best for | Model |
|------|----------|-------|
| Cursor Composer | Multi-file features | GPT-4o, Claude |
| Copilot Chat | Inline questions | GPT-4o |
| Aider | CLI-based pairing | Multi-model |
| Cody | Codebase-aware chat | Claude |
| Windsurf Cascade | Agentic flows | Multi |

Referencia: [[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]

## Relación con otros conceptos

- Copilot: [[../07-IA-Software/02-copilot-efecto|Copilot y Efecto Copilot]]
- Prompting: [[../07-IA-Software/07-prompt-engineering-dev|Prompt Engineering]]
- Código: [[../07-IA-Software/03-generacion-codigo|Generación de Código]]
- Métricas: [[../07-IA-Software/13-ai-metrics-impact|Impacto en Métricas]]
- Procesos: [[../03-Procesos/README|Procesos]]
