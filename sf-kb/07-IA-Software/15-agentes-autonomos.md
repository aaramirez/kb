---
title: "Agentes Autónomos vs Asistidos"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "Autonomous Agents"
  - "Agent Autonomy Levels"
related:
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]"
  - "[[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]"
  - "[[../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos]]"
---

# Agentes Autónomos vs Asistidos

No todos los agentes son iguales. El nivel de autonomía determina cuánto control tiene el humano sobre las acciones del agente.

## Autonomy Levels (L0-L5)

```
┌─────────────────────────────────────────────────┐
│          AGENT AUTONOMY LEVELS (L0-L5)          │
├─────────────────────────────────────────────────┤
│                                                  │
│  L0: NO AI                                      │
│  └── Human does everything                      │
│                                                  │
│  L1: AI SUGGESTS                                │
│  └── AI provides suggestions, human decides     │
│                                                  │
│  L2: AI EXECUTES WITH APPROVAL                  │
│  └── AI plans + proposes, human approves        │
│                                                  │
│  L3: AI EXECUTES WITH OVERSIGHT                 │
│  └── AI acts, human reviews periodically        │
│                                                  │
│  L4: AI EXECUTES AUTONOMOUSLY                   │
│  └── AI acts independently, human monitors      │
│                                                  │
│  L5: FULL AUTONOMY                              │
│  └── AI operates independently (theoretical)    │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Detalle por nivel

| Level | Nombre | Control humano | Ejemplo en software |
|-------|--------|---------------|---------------------|
| L0 | Manual | 100% | Sin AI |
| L1 | Advisory | 90% | Copilot autocomplete |
| L2 | Supervised | 70% | AI suggests, human approves |
| L3 | Monitored | 40% | AI executes, human reviews |
| L4 | Autonomous | 10% | AI acts, human spot-checks |
| L5 | Full autonomy | 0% | Theoretical |

## Agentes Asistidos (L1-L2)

### Characteristics

```
Human-Centric Workflow:
───────────────────────
Human decides → AI suggests → Human validates → Human applies

Example (L1 - Copilot):
  Human writes code → AI autocompletes → Human accepts/rejects

Example (L2 - AI Code Review):
  Human creates PR → AI reviews → Human addresses feedback
```

### Use Cases

| Use Case | Level | Tool |
|----------|-------|------|
| Code completion | L1 | Copilot, Cursor Tab |
| Code suggestions | L1 | Chat-based AI |
| PR review | L2 | CodeRabbit, PR-Agent |
| Test generation | L2 | Copilot + human review |
| Documentation | L2 | AI generates, human edits |
| Refactoring | L2 | AI suggests, human applies |

### Ventajas

- **Bajo riesgo**: Humano siempre en control
- **Fácil adopción**: No cambia workflow drásticamente
- **Learning opportunity**: Developer aprende del AI
- **Quality assurance**: Double-check siempre

### Limitaciones

- **Velocidad limitada**: Por la velocidad del humano
- **Fatiga de review**: AI genera mucho, humano se cansa
- **No escala**: Tareas repetitivas siguen siendo lentas

## Agentes Autónomos (L3-L4)

### Characteristics

```
AI-Centric Workflow:
─────────────────────
Human defines goal → AI plans → AI executes → Human reviews result

Example (L3 - Copilot Workspace):
  Human describes feature → AI plans changes → AI implements → Human reviews

Example (L4 - Devin-like):
  Human assigns task → AI researches → AI implements → AI tests → Human approves
```

### Use Cases

| Use Case | Level | Tool |
|----------|-------|------|
| Feature implementation | L3 | Copilot Workspace |
| Bug investigation | L3 | Cursor Agent |
| Code migration | L3-L4 | Custom agents |
| Dependency updates | L3 | Dependabot + AI |
| Incident response | L3 | AIOps agents |
| Full SWE tasks | L4 | Devin, OpenAI Codex |

### Architecture típica

```
┌─────────────────────────────────────────────┐
│        AUTONOMOUS AGENT ARCHITECTURE        │
├─────────────────────────────────────────────┤
│                                              │
│  ┌─────────────┐                             │
│  │ Task Input  │                             │
│  └──────┬──────┘                             │
│         ▼                                    │
│  ┌─────────────┐    ┌──────────────┐        │
│  │  Planner    │───▶│ Tool Router  │        │
│  └──────┬──────┘    └──────┬───────┘        │
│         │                  │                 │
│         ▼                  ▼                 │
│  ┌─────────────┐    ┌──────────────┐        │
│  │  Executor   │───▶│  Tools       │        │
│  └──────┬──────┘    │  - read_file │        │
│         │           │  - write_file│        │
│         │           │  - run_cmd   │        │
│         │           │  - search    │        │
│         │           └──────────────┘        │
│         ▼                                    │
│  ┌─────────────┐                             │
│  │  Evaluator  │───→ Success? → Done        │
│  └──────┬──────┘    Fail? → Replan          │
│         │                                    │
│         ▼                                    │
│  ┌─────────────┐                             │
│  │   Memory    │                             │
│  │  (Update)   │                             │
│  └─────────────┘                             │
│                                              │
└─────────────────────────────────────────────┘
```

### Ventajas

- **Velocidad**: Ejecuta tareas complejas rápido
- **Escalabilidad**: Puede manejar múltiples tareas
- **Consistencia**: Sigue patrones establecidos
- **24/7**: No necesita descanso

### Riesgos

| Risk | Impact | Mitigation |
|------|--------|------------|
| Wrong decisions | Code bugs, security issues | Human oversight gates |
| Hallucination actions | Non-existent files modified | Validation before apply |
| Scope creep | Changes beyond original task | Clear task boundaries |
| Error propagation | Small errors compound | Checkpoint + rollback |
| Resource waste | Unnecessary API calls | Budget limits |

## Comparación de Herramientas por Nivel

| Tool | Autonomy Level | Best For |
|------|---------------|----------|
| Copilot Autocomplete | L1 | Code suggestions |
| Copilot Chat | L1-L2 | Q&A, small tasks |
| Cursor Composer | L2-L3 | Multi-file features |
| Copilot Workspace | L3 | Feature implementation |
| Claude Code | L3-L4 | CLI-based coding |
| Devin | L4 | Autonomous SWE |
| OpenAI Codex (agent) | L3-L4 | Cloud-based tasks |

## Framework de Decisión

```
¿Cuánta autonomía necesita?
─────────────────────────────
¿Es una tarea repetitiva y predecible?
  ├── Sí → L3-L4 (autónomo con oversight)
  └── No → ¿Tiene alto riesgo?
            ├── Sí → L1-L2 (asistido)
            └── No → ¿Requiere creatividad?
                      ├── Sí → L2 (supervisado)
                      └── No → L3 (monitoreado)

¿Cuánto contexto necesita el agente?
─────────────────────────────────────
Solo el código actual → L1-L2
Todo el proyecto → L3
Múltiples sistemas → L4 con guardrails
```

## Best Practices

1. **Start low, go slow**: Empezar en L1-L2, escalar gradualmente
2. **Clear boundaries**: Definir scope de acción del agente
3. **Human checkpoints**: Gates de aprobación para cambios críticos
4. **Rollback capability**: Siempre poder revertir cambios
5. **Monitoring**: Log de todas las acciones del agente
6. **Budget limits**: Controlar costo de ejecución

## Relación con otros conceptos

- Visión general: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]
- Arquitecturas: [[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]
- Orquestación: [[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]
- Seguridad: [[../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos]]
- Métricas: [[../07-IA-Software/13-ai-metrics-impact|Impacto en Métricas]]
