---
title: "AI Coding Assistants"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Copilot"
  - "AI Assistants"
  - "Code Generation"
related:
  - "[[../07-IA-Software/README|IA en Software]]"
  - "[[11-ai-code-review]]"
  - "[[12-ai-testing-tools]]"
---

## Visión General

AI coding assistants han transformado la productividad del developer. Estas herramientas usan LLMs para autocomplete, chat, code generation, y agentic workflows. Son el pilar principal de la [[../07-IA-Software/README|IA en software engineering]].

## Panorama de Herramientas

### GitHub Copilot

| Aspecto | Detalle |
|---------|---------|
| **Provider** | GitHub (Microsoft) |
| **Modelo** | GPT-4o, Claude, Gemini (multi-model) |
| **Pricing** | Individual ($10/mes), Business ($19/user/mes), Enterprise ($39/user/mes) |
| **Features** | Autocomplete, Chat, Copilot Workspace, Code Review |
| **IDE Support** | VS Code, JetBrains, Neovim, Visual Studio |
| **Codebase context** | Repo indexing (Enterprise) |
| **Agentic** | Copilot Workspace (multi-file changes) |

**Features clave**:
- **Autocomplete**: Suggestions en tiempo real
- **Chat**: Q&A sobre código, debugging, explanations
- **Extensions**: Terminal, PR summaries, code review
- **Copilot Workspace**: Planning → implementation multi-step
- **Custom instructions**: Project-specific context

### Cursor

| Aspecto | Detalle |
|---------|---------|
| **Type** | AI-native IDE (fork de VS Code) |
| **Pricing** | Free (2000 completions), Pro ($20/mes), Business ($40/user/mes) |
| **Models** | GPT-4o, Claude 3.5/Opus, custom |
| **Features** | Tab autocomplete, Chat, Composer, codebase indexing |
| **Differentiator** | Full codebase awareness, multi-file editing |
| **Context** | Automatic (entire project indexed) |

**Features clave**:
- **Composer**: Agentic multi-file changes con planificación
- **Tab**: Context-aware autocomplete que entiende patrones
- **Codebase indexing**: Pregunta sobre cualquier archivo del proyecto
- **Privacy mode**: No training on your code

### Sourcegraph Cody

| Aspecto | Detalle |
|---------|---------|
| **Provider** | Sourcegraph |
| **Pricing** | Free, Pro ($9/mes), Enterprise |
| **Context** | Code graph (entire codebase) |
| **Strength** | Enterprise code search + AI |
| **Models** | Claude, GPT-4, Gemini |

**Features clave**:
- **Code search**: Enterprise codebase exploration
- **Context engine**: Smart context retrieval
- **Agentic**: Multi-repo changes
- **Sourcegraph integration**: Code intelligence

### Codeium / Windsurf

| Aspecto | Detalle |
|---------|---------|
| **Pricing** | Free (generous), Pro ($10/mes) |
| **Features** | Autocomplete, Chat, Extensions |
| **IDE Support** | VS Code, JetBrains, Vim, +15 more |
| **Unique** | Windsurf IDE (agentic, Cascade flows) |
| **Models** | Proprietary + third-party |

**Features clave**:
- **Free tier**: Más generoso que competidores
- **Wide IDE support**: +15 editores
- **Cascade**: Multi-step agentic reasoning

### Tabnine

| Aspecto | Detalle |
|---------|---------|
| **Type** | Autocomplete-focused assistant |
| **Pricing** | Free, Dev ($12/mes), Enterprise |
| **Focus** | Code completion quality |
| **Models** | Proprietary (trained per language) |
| **Self-hosted** | ✅ Enterprise |
| **Privacy** | Code never stored |

**Features clave**:
- **Code completion**: High-quality, low-latency
- **Self-hosted**: Enterprise on-premise option
- **Team training**: Adapta al código del equipo

### Amazon CodeWhisperer / Q Developer

| Aspecto | Detalle |
|---------|---------|
| **Provider** | AWS |
| **Pricing** | Free tier, Pro ($19/user/mes) |
| **Focus** | AWS integration, security scanning |
| **Features** | Autocomplete, Chat, security scans |
| **AWS services** | Deep integration |

## Comparison Matrix

| Feature | Copilot | Cursor | Cody | Codeium | Tabnine | Q Developer |
|---------|---------|--------|------|---------|---------|-------------|
| Autocomplete | ✅✅ | ✅✅ | ✅ | ✅✅ | ✅✅ | ✅ |
| Chat | ✅✅ | ✅✅ | ✅✅ | ✅ | ⚙️ | ✅ |
| Agentic (multi-file) | ✅ | ✅✅ | ✅ | ✅ | ❌ | ⚙️ |
| Codebase context | ✅ (Enterprise) | ✅✅ | ✅✅ | ✅ | ⚙️ | ✅ |
| Free tier | ✅ | ✅ | ✅ | ✅✅ | ✅ | ✅ |
| Self-hosted | ✅ (Enterprise) | ❌ | ✅ | ❌ | ✅ | ✅ (Q) |
| Multi-IDE | ✅ | ❌ (VS Code fork) | ✅ | ✅✅ | ✅✅ | ✅ |
| Security scanning | ⚙️ | ❌ | ⚙️ | ❌ | ❌ | ✅✅ |
| Privacy mode | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ |

## Impacto en Productividad

### Datos de Productivity

| Métrica | Impacto reportado |
|---------|-------------------|
| Code completion acceptance | 30-40% suggestions accepted |
| Time to first working code | 25-55% faster |
| Bug detection | +15-20% found earlier |
| Code review efficiency | 20-30% faster reviews |

### Best Practices de Uso

1. **Provide context**: Descriptive variable names, comments, docstrings
2. **Review suggestions**: Nunca aceptar sin entender
3. **Use chat**: Preguntar "why" no solo "what"
4. **Custom instructions**: Configurar project context
5. **Test everything**: AI genera código plausible pero no siempre correcto
6. **Team alignment**: Establecer conventions de AI usage

## Selection Framework

```
¿Budget + enterprise features?     → GitHub Copilot Business
¿Maximum AI power + codebase?     → Cursor
¿Enterprise code search + AI?     → Cody + Sourcegraph
¿Budget constrained?              → Codeium (free)
¿Privacy-first + self-hosted?     → Tabnine Enterprise
¿AWS ecosystem?                   → Q Developer
```

## Privacy y Security Considerations

| Concern | Mitigation |
|---------|------------|
| Code sent to cloud | Self-hosted options (Tabnine) |
| Training on your code | Opt-out options, privacy modes |
| Secret leakage | Pre-commit scanning, .gitignore patterns |
| License compliance | Review generated code licenses |
| Data retention | Enterprise plans with zero-retention |

## Enterprise Adoption

### Planning

1. **Pilot program**: 2-4 weeks con selected team
2. **Metrics baseline**: Measure before/after
3. **Security review**: Evaluate data flow
4. **Policy creation**: Acceptable use guidelines
5. **Training**: Team workshops on effective prompting

### Rollout

1. Start with high-trust teams
2. Establish feedback loops
3. Measure productivity metrics
4. Iterate on policies
5. Expand gradually

Referencia: [[../06-Metricas/README|Métricas de productividad]]

## Tendencias

- **Multi-model**: Elegir modelo por tarea
- **Agentic workflows**: AI que ejecuta tareas completas
- **Codebase-aware**: Contexto del proyecto completo
- **Specialized assistants**: AI por domain (testing, security, docs)
- **On-device models**: Privacy, latency improvement

Referencia: [[../07-IA-Software/README|IA en Software Engineering]]

## Integración

- **Code Review**: [[11-ai-code-review]] — AI-assisted PR reviews
- **Testing**: [[12-ai-testing-tools]] — AI-generated tests
- **IDEs**: [[01-ides-editores]] — Environment setup
- **CI/CD**: [[02-herramientas-ci-cd]] — AI in pipelines
- **DX**: [[12-developer-experience]] — AI as DX component
