---
title: "Hoshin Kanri (Despliegue de Política)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Hoshin Kanri
  - Policy Deployment
  - Despliegue de Politica
  - Despliegue Estratégico
related:
  - "[[03-a3-resolucion-problemas]]"
  - "[[10-pdca]]"
  - "[[07-heijunka]]"
  - "[[06-gemba]]"
  - "[[09-kanban]]"
  - "[[12-los-cinco-porques]]"
---

# Hoshin Kanri (Despliegue de Política)

**Hoshin Kanri** (方針管理) es un sistema de planificación estratégica y despliegue de políticas que asegura que toda la organización esté alineada hacia los mismos objetivos a largo plazo. Es la herramienta que conecta la **estrategia** con el **trabajo diario**.

## Definición

Hoshin Kanri significa literalmente "gestión de la dirección" o "despliegue de política". Es un proceso anual que:

1. Define los objetivos estratégicos de la organización
2. Los despliega (deploy) a través de todos los niveles
3. Asegura la alineación y el compromiso de cada persona
4. Monitorea el progreso y ajusta cuando es necesario

> Hoshin Kanri responde a la pregunta: "¿Cómo aseguramos que todos estemos yendo en la misma dirección?"

## El Proceso Catchball

El **Catchball** es el proceso central de Hoshin Kanri. Es un intercambio iterativo de propuestas y retroalimentación entre niveles de la organización:

```
Dirección General
    │
    │ Define: Visión y objetivos estratégicos
    │ (¿Qué queremos lograr?)
    ▼
Dirección de Nivel Medio
    │
    │ Propone: Cómo lograr los objetivos
    │ (¿Cómo lo hacemos?)
    ▼
Equipos de Trabajo
    │
    │ Retroalimenta: Realidad del Gemba
    │ (¿Qué necesitamos? ¿Es factible?)
    ▼
 Dirección General (de vuelta)
    │
    │ Ajusta: Plan revisado y comprometido
    ▼
    Implementación con seguimiento continuo
```

El nombre "catchball" viene del tenis de mesa: la pelota va y viene hasta que ambos lados están de acuerdo.

## El X-Matrix

El **X-Matrix** (Matriz X) es la herramienta visual clave de Hoshin Kanri. Conecta:

1. **Objetivos a largo plazo** (3-5 años)
2. **Metas anuales** del año en curso
3. **Prioridades del año** (3-5 initiatives)
4. **Métricas de seguimiento** (KPIs)

```
        Metas Anuales
            │
            ▼
Objetivos ──X── Prioridades
 a LP        │
            ▼
       Métricas
```

La "X" representa las conexiones entre cada componente, asegurando que cada métrica esté vinculada a una prioridad, cada prioridad a una meta, y cada meta a un objetivo.

## Ciclo Anual de Hoshin Kanri

### Fase 1: Planificación (Octubre-Noviembre)
- Revisar visión y estrategia a largo plazo
- Definir metas anuales (3-5 break-through goals)
- Identificar prioridades del año

### Fase 2: Despliegue (Diciembre-Enero)
- Catchball con cada nivel de la organización
- Alinear objetivos de cada departamento
- Definir métricas y responsables

### Fase 3: Ejecución (Todo el año)
- Implementación de las prioridades
- Revisión mensual del progreso
- Ajustes según resultados

### Fase 4: Revisión (Diciembre)
- Evaluación de resultados vs objetivos
- Aprendizaje y lecciones capturadas
- Iniciar el ciclo para el siguiente año

## Conexión con Kaizen y PDCA

Hoshin Kanri se integra con [[10-pdca|PDCA]] a nivel estratégico:

| Fase PDCA | Hoshin Kanri |
|-----------|--------------|
| **Plan** | Definición de objetivos y despliegue |
| **Do** | Ejecución de prioridades |
| **Check** | Revisión mensual del progreso |
| **Act** | Ajustes y nueva planificación |

El [[02-Pilares/03-kaizen|Kaizen]] se aplica diariamente en la ejecución de las prioridades definidas por Hoshin Kanri.

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Alineación estratégica | Toda la organización va en la misma dirección |
| Transparencia | Cada persona conoce sus objetivos y cómo contribuyen |
| Priorización | Enfoca recursos en lo más importante |
| Aprendizaje organizacional | Captura lecciones para mejorar el proceso |
| Balance largo vs corto plazo | Evita el cortoplacismo |

## Hoshin Kanri y A3

Los A3s estratégicos son una extensión de Hoshin Kanri. Cada prioridad puede tener un [[03-a3-resolucion-problemas|A3]] asociado que documenta el plan de implementación.

## Hoshin Kanri en Software

En organizaciones de software:
- **OKRs** (Objectives and Key Results) son una implementación similar
- **Roadmaps anuales** alineados con la estrategia
- **Sprint Goals** que se conectan con objetivos de negocio
- **Architecture Decision Records** que documentan decisiones estratégicas

## Errores Comunes

- **Solo dirección** — Hacer el despliegue sin catchball (sin retroalimentación)
- **Demasiadas prioridades** — Más de 5 prioridades diluyen el foco
- **Sin seguimiento** — Definir objetivos sin revisión mensual
- **Ignorar la realidad del Gemba** — Los objetivos no son factibles
- **Hoshin como trámite** — Sin compromiso real de la dirección

## Notas Relacionadas

- [[03-a3-resolucion-problemas]] — A3s estratégicos para cada prioridad
- [[10-pdca]] — Ciclo que estructura Hoshin Kanri
- [[07-heijunka]] — Nivelación que alinea con objetivos
- [[06-gemba]] — Observar la ejecución en el lugar real
- [[09-kanban]] — Kanban alineado con prioridades estratégicas
- [[12-los-cinco-porques]] — Análisis de por qué no se alcanzan objetivos
- [[02-Pilares/03-kaizen|Kaizen]] — Mejora continua al servicio de la estrategia
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
