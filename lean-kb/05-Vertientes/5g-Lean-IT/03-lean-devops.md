---
title: "Lean DevOps"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/it
created: 2026-07-12
updated: 2026-07-12
category: "Lean IT"
aliases:
  - Lean DevOps
  - DevOps Lean
related:
  - "[[05-Vertientes/5g-Lean-IT/01-lean-it-vista-general]]"
  - "[[05-Vertientes/5g-Lean-IT/02-lean-it-service-management]]"
  - "[[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]]"
---

# Lean DevOps

## ¿Qué es Lean DevOps?

Lean DevOps es la convergencia de los principios del [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general|Lean Thinking]] con la filosofía DevOps, creando un enfoque integral para la **entrega continua de valor** a través de la integración de desarrollo y operaciones.

> *"DevOps es cultura, Lean es pensamiento. Juntos son imparables."*

## DevOps como extensión del Lean

DevOps hereda y amplía los principios Lean:

| Principio Lean | Aplicación DevOps |
|---------------|-------------------|
| **Eliminar desperdicio** | Reducir tiempo muerto en el pipeline |
| **Crear flujo** | Flujo continuo de código a producción |
| **Amplificar retroalimentación** | Monitoreo y feedback en tiempo real |
| **Empoderar al equipo** | Autonomía de los equipos para desplegar |
| **Reducir lote** | Despliegues pequeños y frecuentes |

## Pipeline de entrega continua

El pipeline de entrega continua es la manifestación del flujo Lean en DevOps:

```
Código → Build → Test → Staging → Producción
  │        │       │        │          │
  └── Lead time total de commit a producción ──┘
```

### Métricas del pipeline

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| Lead time de commit a producción | Tiempo desde commit hasta despliegue | <1 día |
| Frecuencia de despliegues | Cuántas veces se despliega por día | Múltiples veces |
| Tasa de fallo de despliegue | % de despliegues que fallan | <5% |
| Tiempo de recuperación (MTTR) | Tiempo para recuperarse de fallo | <1 hora |

## Flujo en desarrollo y operaciones

El flujo continuo se logra eliminando barreras entre desarrollo y operaciones:

### En desarrollo
- **Trabajo en lotes pequeños** — features que se pueden entregar rápidamente
- **Integración continua** — merge frecuente para evitar divergencia
- **Automatización de tests** — feedback inmediato sobre calidad

### En operaciones
- **Infraestructura como código** — infraestructura versionada y repetible
- **Despliegue automatizado** — eliminación de pasos manuales
- **Monitoreo proactivo** — detectar problemas antes de que impactuen

## Desperdicios en la entrega de software

| Desperdicio | En DevOps | Solución Lean |
|-------------|-----------|---------------|
| **Sobreproducción** | Features no usadas | Validar con usuarios |
| **Espera** | Aprobaciones manuales | Automatizar aprobaciones |
| **Transporte** | Mover código entre entornos | Infraestructura como código |
| **Sobreprocesamiento** | Tests innecesarios | Optimizar suite de tests |
| **Inventario** | Código sin integrar | Integración continua |
| **Movimiento** | Context switching | Equipos dedicados |
| **Defectos** | Bugs en producción | Tests automatizados |
| **Talento no usado** | Automatización subutilizada | Empoderar al equipo |

## Métricas clave de Lean DevOps

| Categoría | Métrica | Objetivo |
|-----------|---------|----------|
| **Velocidad** | Lead time | Reducir |
| **Calidad** | Tasa de defectos | Reducir |
| **Frecuencia** | Despliegues por día | Aumentar |
| **Estabilidad** | MTTR | Reducir |
| **Eficiencia** | Tiempo de build | Reducir |

## Conexiones

- [[05-Vertientes/5g-Lean-IT/01-lean-it-vista-general]] — contexto general
- [[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]] — Lean Software como precursor
- [[05-Vertientes/5g-Lean-IT/02-lean-it-service-management]] — gestión de servicios
- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — orígenes del Lean
