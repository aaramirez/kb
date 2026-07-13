---
title: "Métricas de Productividad con IA"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "AI Productivity Metrics"
  - "AI Coding Metrics"
  - "Copilot Metrics"
  - "AI Acceptance Rate"
related:
  - "[[../07-IA-Software/README|IA en Software]]"
  - "[[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]"
  - "[[../05-Herramientas/11-ai-code-review|AI Code Review]]"
  - "[[../05-Herramientas/10-ai-testing-tools|AI Testing Tools]]"
  - "[[02-velocity-throughput|Velocity y Throughput]]"
  - "[[05-code-coverage|Code Coverage]]"
  - "[[07-team-health-metrics|Salud del Equipo]]"
---

## Visión General

Con la adopción masiva de herramientas de IA en software development, surgen nuevas métricas para cuantificar su impacto real. Estas métricas ayudan a determinar si la inversión en IA realmente mejora la productividad y calidad.

## Métricas Principales

### Acceptance Rate (Tasa de Aceptación)

```
Acceptance Rate = (Sugerencias de IA aceptadas / Total sugerencias) × 100

Ejemplo: GitHub Copilot sugiere 1000 snippets, 340 aceptados = 34%
```

| Acceptance Rate | Interpretación |
|-----------------|----------------|
| > 40% | Alta utilidad, buen contexto |
| 25-40% | Utilidad moderada |
| 15-25% | Baja utilidad, necesita tuning |
| < 15% | Potencialmente contraproducente |

**Segmentar por tipo**:
- Code completion: 30-40%
- Chat suggestions: 20-35%
- Test generation: 25-40%
- Code review: 15-30%

### Time Saved (Tiempo Ahorrado)

```
Time Saved = (Tasks without AI time − Tasks with AI time) / Tasks without AI time × 100

Estimación方法:
  1. A/B testing: Grupo con IA vs sin IA
  2. Self-reported: Encuestas a developers
  3. Task timing: Medir tiempo antes/después de IA
```

**Benchmarks de GitHub Copilot study**:
| Tarea | Time saved |
|-------|-----------|
| Code writing | 55% |
| Code reading | 7% |
| Testing | 10% |
| Overall | 25-30% |

### Quality Impact

```
Quality Impact = (Defect rate before AI − Defect rate after AI) / Defect rate before AI × 100

O medir cambios en:
- Bug escape rate
- Code review comments
- Test coverage (delta)
```

| Aspecto | Cómo medir | Herramienta |
|---------|------------|-------------|
| Code quality | SonarQube before/after | [[06-technical-debt-metrics]] |
| Test quality | Mutation score delta | [[05-code-coverage]] |
| Bug rate | Bugs/sprint before/after | [[04-defect-rate]] |
| Review comments | Comments/PR trend | GitHub analytics |

### AI Utilization Rate

```
AI Utilization = (Developers actively using AI / Total developers) × 100

Active usage = ≥ 5 AI interactions per day
```

### ROI de AI Tools

```
ROI_AI = (Time saved × Hourly cost − AI tool cost) / AI tool cost × 100

Ejemplo: 10 devs × 5h/week saved × $80/h × 52 weeks = $208K saved
AI tool cost: 10 × $20/month × 12 = $2,400
ROI = ($208K − $2.4K) / $2.4K × 100 = 8,567%
```

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         AI PRODUCTIVITY DASHBOARD - Julio 2026   │
├──────────────────────────────────────────────────┤
│ Acceptance Rate:     34%  [██████████░] OK      │
│ Time Saved (avg):    28%  [████████░░░] OK      │
│ AI Utilization:      85%  [█████████████] Great  │
│ Quality Impact:      ↗ Improving (↓ bugs 15%)   │
│                                                  │
│ Por herramienta:                                │
│   Copilot:     Acceptance 36%, Time saved 31%   │
│   AI Review:   Acceptance 28%, Comments ↓ 22%   │
│   AI Testing:  Acceptance 42%, Coverage ↑ 8%    │
│   AI Chat:     Acceptance 31%, Adoption 78%     │
│                                                  │
│ Monthly Trend:                                   │
│   Acceptance:  Jan 22% → Jun 34% ↗             │
│   Time saved:  Jan 15% → Jun 28% ↗             │
│   Quality:     Stable to slightly improving     │
│                                                  │
│ Financial:                                       │
│   Monthly AI cost:     $2,400                    │
│   Estimated savings:   $40K/month                │
│   ROI:                 1,567%                    │
└──────────────────────────────────────────────────┘
```

## Methodologies de Medición

### 1. A/B Testing

```
Grupo A (control):    Desarrollo sin AI tools
Grupo B (treatment):  Desarrollo con AI tools

Medir: Time to complete, defects, satisfaction
Duración: 4-8 semanas
```

### 2. Pre/Post Adoption

```
Período pre (3 meses): Métricas antes de AI
Período post (3 meses): Métricas después de AI

Medir: Delta en velocity, cycle time, defects
Controlar: Team composition changes
```

### 3. Developer Surveys

```
Monthly pulse:
  - "How useful was AI this month?" (1-5)
  - "What tasks did AI help with?"
  - "Any concerns about AI-generated code?"
```

## Categorías de AI Impact

| Categoría | Herramientas | Métricas clave |
|-----------|-------------|----------------|
| **Code completion** | Copilot, Cody, Codeium | Acceptance rate, time saved |
| **Code review** | CodeRabbit, Qodo | Comments reduced, bugs caught |
| **Testing** | Diffblue, Mabl | Coverage increase, test speed |
| **Documentation** | AI doc generators | Doc coverage, time saved |
| **Architecture** | AI assistants | Design decisions, tech debt |

## Anti-Patrones

| Anti-Patrón | Problema |
|-------------|----------|
| Assuming AI = better | No medir = no saber si funciona |
| Ignoring code quality | AI-generated code puede ser peor |
| Over-reliance | Skills atrophy si se usa IA para todo |
| Not segmenting | Aceitar todo no mide valor real |

## Conexiones

- [[../07-IA-Software/README|IA en Software Engineering]]
- [[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]
- [[../05-Herramientas/11-ai-code-review|AI Code Review]]
- [[../05-Herramientas/10-ai-testing-tools|AI Testing Tools]]
- [[02-velocity-throughput|Velocity y Throughput]]
- [[06-technical-debt-metrics|Deuda Técnica]]
- [[09-business-value-metrics|Valor de Negocio]]
