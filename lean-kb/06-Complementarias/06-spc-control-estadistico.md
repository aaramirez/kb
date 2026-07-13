---
title: "SPC (Control Estadístico de Procesos)"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/avanzado
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - SPC
  - Statistical Process Control
  - Control Estadístico
related:
  - "[[01-six-sigma-vista-general]]"
  - "[[07-doe-diseno-experimentos]]"
  - "[[05-fmea-analisis-modos-falla]]"
  - "[[04-Herramientas/16-oee]]"
  - "[[04-Herramientas/02-andon]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]]"
---

# SPC — Control Estadístico de Procesos

## ¿Qué es SPC?

SPC (Statistical Process Control) es un método de **monitoreo y control** de procesos usando herramientas estadísticas, principalmente gráficas de control. Permite distinguir entre variación normal y anormal para tomar acciones oportunas.

> *"Todo proceso tiene variación. SPC nos dice cuándo esa variación es un problema."*

## Tipos de Variación

| Tipo | Nombre | Descripción | Acción |
|------|--------|-------------|--------|
| **Causa común** | Common cause | Variación inherente al proceso | Rediseñar el proceso |
| **Causa especial** | Special cause | Variación externa e inespera | Investigar y eliminar |

Un proceso con solo causas comunes está **estadísticamente bajo control**. Las causas especiales indican que algo ha cambiado y necesita atención.

## Gráficas de Control

Las gráficas de control son el corazón de SPC:

```
Límite Superior de Control (UCL)
─────────────────────────────────
                                  
      • •   • • • •              ← Datos dentro de control
           •     •   •            
─────────────────────────────────
           Línea Central (CL)
─────────────────────────────────
   •       •                     ← Datos dentro de control
                                  
─────────────────────────────────
Límite Inferior de Control (LCL)
```

### Tipos de Gráficas

| Gráfica | Para qué se usa |
|---------|-----------------|
| **X̄-R** | Media y rango de muestras pequeñas (n < 10) |
| **X̄-S** | Media y desviación estándar de muestras grandes |
| **p** | Proporción de defectos |
| **np** | Número de defectos (tamaño fijo) |
| **c** | Número de defectos por unidad |
| **u** | Defectos por unidad (tamaño variable) |

## Capacidad del Proceso

La capacidad mide qué tan bien un proceso cumple con las especificaciones:

| Índice | Fórmula | Interpretación |
|--------|---------|----------------|
| **Cp** | (USL - LSL) / 6σ | Capacidad potencial del proceso |
| **Cpk** | min[(USL - X̄)/3σ, (X̄ - LSL)/3σ] | Capacidad real (considera centrado) |
| **Pp** | Igual a Cp pero con datos de larga escala | Capacidad de largo plazo |
| **Ppk** | Igual a Cpk pero con datos de larga escala | Capacidad real de largo plazo |

**Interpretación:**
- **Cpk ≥ 1.33** — Proceso capaz y aceptable
- **1.0 ≤ Cpk < 1.33** — Proceso marginal, necesita monitoreo
- **Cpk < 1.0** — Proceso no capaz, requiere mejora

## SPC y Jidoka

SPC es la herramienta cuantitativa de [[02-Pilares/02-jidoka|Jidoka]]:

- Jidoka dice "detectar anomalías y detener el proceso"
- SPC dice **cuándo** hay una anomalía basándose en datos
- Las gráficas de control son señales visuales (como [[04-Herramientas/02-andon|Andon]] pero estadísticas)
- SPC convierte la intuición en criterio objetivo

## Conexión con Lean

SPC complementa Lean en áreas específicas:

- **OEE** — SPC puede monitorear componentes de [[04-Herramientas/16-oee|OEE]] (disponibilidad, calidad, rendimiento)
- **Calidad en origen** — SPC permite detectar problemas antes de que se propaguen
- **Toma de decisiones** — Sustituir opiniones por datos en Kaizen events
- **Estabilidad** — Un proceso estable es prerrequisito para implementar Kanban o Pull

## Cuándo Usar SPC

- El proceso tiene variabilidad que necesita ser entendida
- Se necesita monitoreo continuo de calidad
- Se quiere validar si un proceso está "bajo control"
- Se requiere demostrar capacidad del proceso a clientes o auditores
- Se está implementando Lean y se necesita estabilidad previa

## Notas Relacionadas

- [[01-six-sigma-vista-general]] — Six Sigma usa SPC como herramienta central
- [[07-doe-diseno-experimentos]] — DOE para experimentar, SPC para monitorear
- [[05-fmea-analisis-modos-falla]] — FMEA identifica fallas, SPC las detecta en tiempo real
- [[04-Herramientas/16-oee]] — SPC para componentes de OEE
- [[04-Herramientas/02-andon]] — Señales visuales de calidad
- [[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]] — LSS integra SPC
- [[02-Pilares/02-jidoka|Jidoka]] — Automatización con calidad
