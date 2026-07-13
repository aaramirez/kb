---
title: "Modelo Producto vs Proyecto"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Product Mindset"
  - "Project Mindset"
  - "Continuous Product"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/14-software-categoria-a|Categoría A vs B]]"
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
---

# Modelo Producto vs Proyecto

La distinción entre **pensamiento de producto** y **pensamiento de proyecto** es fundamental para la forma en que se construye y mantiene software a largo plazo.

## Definiciones

| Aspecto | Modelo Proyecto | Modelo Producto |
|---------|-----------------|-----------------|
| **Enfoque** | Entregar un output | Crear y evolucionar un valor |
| **Fin** | Tiene fecha de cierre | Continuo, mientras aporte valor |
| **Éxito** | Entregar a tiempo/presupuesto | Impacto en negocio y usuarios |
| **Equipo** | Se disuelve al final | Permanente, cross-functional |
| **Ownership** | Temporal | Permanente |
| **Feedback** | Al final del proyecto | Continuo |

## El modelo Proyecto

```
Inicio ─────────────────────────────────→ Fin
  │                                         │
  Requisitos → Desarrollo → Testing → Entrega
                                         │
                                    Proyecto cerrado
                                    Equipo liberado
```

### Características

- **Presupuesto fijo**: se aprueba al inicio
- **Alcance definido**: se fija en requisitos
- **Timeline rígida**: fechas de entrega hard
- **Equipo temporal**: se arma y se desarma
- **Definition of Done**: entregar el output

### Anti-patrones del modelo proyecto

1. **"Feature factory"**:产出 sin medir impacto
2. **"Throw it over the wall"**: desarrollo → ops sin continuidad
3. **"No es mi proyecto"**: falta de ownership post-entrega
4. **"Presupuesto agotado"**: no hay recursos para mejoras
5. **"El proyecto terminó"**: software sin mantenimiento

## El modelo Producto

```
┌─────────────────────────────────────────────────┐
│                 PRODUCTO                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ V1.0    │  │ V1.1    │  │ V2.0    │  ...   │
│  └─────────┘  └─────────┘  └─────────┘        │
│                                                  │
│  ┌─────────────────────────────────────────┐    │
│  │  Feedback → Learn → Iterate → Deliver   │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

### Características

- **Presupuesto continuo**: invertir mientras haya ROI
- **Alcance evolutivo**: se adapta al mercado
- **Timeline flexible**: releases incrementales
- **Equipo permanente**: ownership continuo
- **Definition of Done**: impacto medido

### Beneficios del modelo producto

1. **Continuidad**: el equipo conoce el dominio
2. **Aprendizaje**: feedback continua mejora el producto
3. **Responsabilidad**: el equipo es dueño del resultado
4. **Calidad**: inversiones en deuda técnica y mejoras
5. **Velocidad**: con el tiempo, el equipo es más rápido

## Comparación detallada

| Dimensión | Proyecto | Producto |
|-----------|----------|----------|
| **Planning** | Big bang, up front | Roadmap continuo |
| **Métricas** | On time, on budget | Revenue, retention, NPS |
| **Riesgo** | Alto (todo al final) | Bajo (feedback temprano) |
| **Deuda técnica** | Se ignora | Se gestiona activamente |
| **Equipos** | Siloed por proyecto | Cross-functional permanente |
| **Documentación** | Extensiva, obsoleta | Viva, continuously updated |
| **Deploy** | Big releases | Continuous delivery |

## Product Thinking en la práctica

### 1. Product Roadmap vs Project Plan

**Project Plan:**
```
Q1: Requisitos
Q2: Desarrollo
Q3: Testing
Q4: Lanzamiento
```

**Product Roadmap:**
```
Q1: Validar problema + MVP
Q2: Primeros usuarios + learning
Q3: Growth + features clave
Q4: Monetización + escalar
```

### 2. OKRs vs Task Lists

**Task List (Proyecto):**
- [ ] Crear formulario de registro
- [ ] Implementar backend
- [ ] Diseñar UI
- [ ] Escribir tests

**OKRs (Producto):**
- **Objective**: Onboarding exitoso
  - KR1: 80% completion rate
  - KR2: < 3 minutos promedio
  - KR3: NPS > 8

### 3. Feature Teams vs Product Teams

**Feature Team:**
- Recibe specification
- Implementa
- Pasa a QA
- Se desarma

**Product Team:**
- Identifica problema
- Diseña solución
- Implementa
- Mide impacto
- Itiera

## El modelo híbrido

En la práctica, muchas organizaciones usan ambos:

| Tipo de trabajo | Modelo apropiado |
|-----------------|------------------|
| **Core product** | Producto |
| **Strategic initiatives** | Proyecto (con scope acotado) |
| **Maintenance** | Producto (continuo) |
| **Innovation/Exploration** | Proyecto (time-boxed) |
| **Compliance** | Proyecto (deadline driven) |

## Relación con la Software Factory

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] moderna favorece el modelo producto:

1. **Equipos permanentes**: no se arman/desarmas por proyecto
2. **Métricas de producto**: no solo de output
3. **Ownership continuo**: el equipo es dueño del sistema
4. **Mejora continua**: invertir en calidad y features
5. **[[../01-Fundamentos/14-software-categoria-a|Categoría A]]**: el software diferenciador SIEMPRE es producto

## Relación con otros conceptos

- Se fundamenta en [[../01-Fundamentos/06-manifiesto-agile|Agile]]
- Se integra con [[../01-Fundamentos/14-software-categoria-a|Categoría A vs B]]
- Se soporta en [[../01-Fundamentos/13-plataformas-ingenieria|plataformas]]
- Se mide con [[../06-Metricas/README|métricas de producto]]
- Complementa [[../01-Fundamentos/16-lean-software|Lean]]
