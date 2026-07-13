---
title: "DevOps como Filosofía"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "DevOps"
  - "CALMS"
  - "Cultura DevOps"
related:
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
  - "[[../01-Fundamentos/08-shift-left|Shift-Left]]"
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
---

# DevOps como Filosofía

DevOps no es solo herramientas o pipelines. Es una **filosofía cultural y organizacional** que busca unir desarrollo (Dev) y operaciones (Ops) para entregar valor de forma continua y confiable.

## ¿Qué es DevOps?

> DevOps es el conjunto de prácticas que combina el desarrollo de software (Dev) y las operaciones de TI (Ops) para acortar el ciclo de vida del desarrollo de sistemas y proporcionar entrega continua con alta calidad.

### El símbolo del infinity

```
    ┌───── Plan ─────┐
    │                 │
  Code              Operate
    │                 │
    └──── Build ──────┘
          │
       Deploy
```

DevOps es un ciclo continuo, no una línea recta.

## CALMS: Los 5 pilares de DevOps

| Pilar | Descripción | Prácticas |
|-------|-------------|-----------|
| **C**ulture | Cultura de colaboración | Blameless postmortems, shared ownership |
| **A**utomation | Automatización completa | CI/CD, IaC, testing automatizado |
| **L**ean | Pensamiento lean | Eliminar desperdicio, flujo continuo |
| **M**easurement | Medición continua | Métricas, monitoring, alertas |
| **S**haring | Conocimiento compartido | Documentación abierta, blameless culture |

### Culture — La base de todo

- **Blameless postmortems**: analizar qué salió mal, no quién falló
- **Shared ownership**: todos son responsables de producción
- **Psychological safety**: poder reportar errores sin miedo
- **Cross-functional teams**: equipos con todas las habilidades necesarias

### Automation — Eliminar trabajo manual

```
Commit → Build → Test → Stage → Deploy → Monitor
  │       │       │       │        │        │
  ▼       ▼       ▼       ▼        ▼        ▼
 Git    Jenkins  JUnit  Docker  K8s    Prometheus
```

**Qué automatizar:**
- Build y compilación
- Testing (unit, integration, e2e)
- Deployment (blue-green, canary)
- Infraestructura (Terraform, Ansible)
- Monitoring y alertas

### Lean — Flujo continuo

Relacionado con [[../01-Fundamentos/16-lean-software|Lean Software Development]]:
- **Eliminar desperdicio**: código innecesario, wait times
- **Amplificar aprendizaje**: feedback rápido
- **Decidir lo más tarde posible**: opciones, no compromisos
- **Entregar lo más rápido posible**: batch size pequeño

### Measurement — Lo que no se mide, no se mejora

| Métrica | Descripción |
|---------|-------------|
| **Lead Time** | Tiempo desde commit hasta producción |
| **Deployment Frequency** | Frecuencia de despliegues |
| **Change Failure Rate** | % de cambios que causan fallo |
| **MTTR** | Mean Time To Recovery |
| **DORA Metrics** | Las 4 métricas anteriores combinadas |

### Sharing — Romper silos

- Documentación viva (no specs muertas)
- Pair programming y mob programming
- Tech talks internas
- Runbooks compartidos
- Chatops para incidentes

## DevOps vs IT Operations tradicional

| Aspecto | IT Ops tradicional | DevOps |
|---------|-------------------|--------|
| **Velocidad** | Mensual, trimestral | Diaria, continua |
| **Riesgo** | Minimizar cambios | Cambios pequeños y frecuentes |
| **Roles** | Silos separados | Equipos cross-functionales |
| **Herramientas** | Manuales | Automatizadas |
| **Incidentes** | finger-pointing | blameless postmortems |

## El DevOps Toolchain

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
 │      │      │       │       │         │        │          │
Jira   Git   Maven  JUnit  Jenkins   K8s    Ansible  Prometheus
```

## DevOps en la Software Factory

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] aplica DevOps como:

1. **Pipeline estándar**: todos los proyectos usan el mismo flujo
2. **Herramientas compartidas**: centro de plataforma común
3. **Métricas unificadas**: dashboards consolidados
4. **Gobernanza automatizada**: quality gates en pipelines
5. **Onboarding acelerado**: playbooks de DevOps

## DevOps y [[../01-Fundamentos/08-shift-left|Shift-Left]]

DevOps promueve mover la calidad hacia atrás:

- **Testing** en desarrollo, no en QA
- **Seguridad** en diseño, no en auditoría
- **Monitoring** desde el primer día
- **Documentation** junto al código

## Relación con otros conceptos

- [[../01-Fundamentos/06-manifiesto-agile|Agile]] provee el mindset
- [[../01-Fundamentos/16-lean-software|Lean]] provee la eficiencia
- [[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]] proveen calidad de código
- [[../01-Fundamentos/08-shift-left|Shift-Left]] provee prevención
- [[../01-Fundamentos/13-plataformas-ingenieria|Plataformas]] proveen self-service
