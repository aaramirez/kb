---
title: "Software Development Life Cycle"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "SDLC"
  - "Ciclo de Vida del Desarrollo"
  - "Fases del Desarrollo"
related:
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../03-Procesos/03-scrum|Scrum]]"
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
---

# Software Development Life Cycle (SDLC)

El **SDLC** es el marco que define las fases, actividades y deliverables del proceso de desarrollo de software, desde la concepción de una idea hasta su mantenimiento continuo.

## Definición

> El Software Development Life Cycle es un proceso estructurado que guía el desarrollo de software desde los requisitos iniciales hasta el despliegue y mantenimiento, asegurando calidad, trazabilidad y eficiencia.

## Fases del SDLC

| Fase | Objetivo | Actividades principales | Deliverables |
|------|----------|------------------------|-------------|
| **1. Planificación** | Definir alcance y viabilidad | Análisis de negocio, estimación, riesgos | Business case, roadmap |
| **2. Análisis** | Capturar requisitos | Interviews, user stories, use cases | Requirements doc, backlog |
| **3. Diseño** | Arquitectura y diseño técnico | Diagramas, prototipos, ADRs | Design doc, architecture |
| **4. Desarrollo** | Implementar la solución | Coding, unit tests, code review | Código funcional |
| **5. Testing** | Verificar calidad | QA, UAT, performance, security | Test reports, bugs |
| **6. Despliegue** | Entregar a producción | CI/CD, release, rollback plan | Software desplegado |
| **7. Mantenimiento** | Soporte y evolución | Bug fixes, enhancements, monitoring | Patches, versiones |

## Modelos de SDLC

### Waterfall (Cascada)

```
Requisitos → Diseño → Desarrollo → Testing → Deploy → Mantenimiento
    │           │          │           │         │          │
    └───────────┴──────────┴───────────┴─────────┴──────────┘
                    Secuencial, sin vuelta atrás
```

| Ventaja | Desventaja |
|---------|------------|
| Simple de entender | Rígido, cambios costosos |
| Documentación completa | Feedback tardío |
| Fases claras | Largo tiempo-to-market |

### Iterativo

```
┌──→ Diseño → Código → Test ──┐
│                              │
└──── Feedback del usuario ────┘
```

- Construcción en ciclos repetidos
- Cada iteración produce un incremento funcional
- Permite ajustar requisitos entre iteraciones

### Modelo Espiral

Combina iterativo con gestión de riesgos:

```
        ┌─ Planificación ──┐
        │   Evaluación     │
        │   de Riesgos     │
    ┌───┴───────────────────┴───┐
    │                           │
    │   Desarrollo + Testing    │
    │                           │
    └───────────┬───────────────┘
                │
          Prototipo / Release
```

- Cada ciclo incluye análisis de riesgo
- Ideal para proyectos grandes y complejos
- Permite prototipado temprano

### Agile / Iterativo Ágil

El [[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]] promueve:

| Valor | Significado |
|-------|-------------|
| **Individuos > Procesos** | Las personas y su interacción importan más |
| **Software funcional > Documentación** | Entregar valor, no paperwork |
| **Colaboración con cliente > Contrato** | Feedback continuo |
| **Responder al cambio > Seguir un plan** | Adaptabilidad |

En la práctica se materializa en:

- [[../03-Procesos/03-scrum|Scrum]]: sprints, roles, eventos
- [[../03-Procesos/02-kanban-software|Kanban]]: flujo continuo, WIP limits
- Extreme Programming (XP): pair programming, TDD, continuous integration

## Comparación de modelos

| Aspecto | Waterfall | Iterativo | Espiral | Agile |
|---------|-----------|-----------|---------|-------|
| **Feedback** | Al final | Cada iteración | Cada ciclo | Continuo |
| **Cambios** | Difíciles | Moderados | Controlados | Bienvenidos |
| **Riesgo** | Alto al final | Reducido | Gestionado activamente | Reducido |
| **Documentación** | Pesada | Moderada | Completa | Justa |
| **Time-to-market** | Largo | Moderado | Variable | Corto |
| **Ideal para** | Requisitos fijos | Proyectos medianos | Grandes y riesgosos | Evolución rápida |

## SDCI en la era de la IA

Con los [[../01-Fundamentos/03-era-ia-contexto|LLMs y coding assistants]], el SDLC evoluciona:

- **Planificación**: AI asiste en estimación y análisis de riesgos
- **Diseño**: Generación de arquitecturas y ADRs con AI
- **Desarrollo**: Copilot, code generation, autocomplete
- **Testing**: AI genera tests, detecta bugs, sugiere fixes
- **Despliegue**: Predictive deployment, anomaly detection
- **Mantenimiento**: AI para root cause analysis

## Relación con otros conceptos

- [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] estandariza el SDLC
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] automatiza las fases de deploy y operación
- [[../01-Fundamentos/08-shift-left|Shift-Left]] mueve testing y seguridad hacia atrás
- [[../06-Metricas/README|Métricas]] miden la eficiencia del ciclo
- [[../05-Herramientas/README|Herramientas]] soportan cada fase del SDLC
