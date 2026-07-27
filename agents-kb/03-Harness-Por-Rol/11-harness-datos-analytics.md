---
title: "Harness: Datos / Analytics"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Data Harness"
  - "Analytics"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[12-harness-seguridad-compliance]]"
---

# Harness: Datos / Analytics

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Data Engineer, Data Analyst, BI Analyst |
| **Enfoque** | Análisis de datos, reportes, dashboards, ML |
| **Volumen** | Medio-Alto |
| **Sensibilidad** | Alta (datos de negocio) |

## Harness Diseñado

```yaml
model: claude
mode: primary
permission:
  read: allow
  edit: allow   # Puede crear scripts de análisis
  bash: allow   # Puede ejecutar queries y scripts

tools:
  - web_search
  - file_read
  - file_write
  - bash

context:
  - kb-datos/           # Modelos de datos
  - kb-analytics/       # Definiciones de métricas
  - kb-reportes/        # Reportes existentes

rules:
  - "Validar datos antes de presentar"
  - "Incluir sample size y período"
  - "Citar fuentes de datos"
  - "No exponer datos personales (PII)"
  - "Usar estadísticas robustas (mediana vs promedio)"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Query Builder** | Genera SQL | "Crea un query para churn rate mensual" |
| **Data Storyteller** | Presenta insights | "¿Qué nos dicen los datos del Q1?" |
| **Dashboard Builder** | Crea dashboards | "Crea un dashboard de KPIs de red" |
| **Anomaly Detector** | Detecta patrones | "¿Hay anomalías en el tráfico?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[12-harness-seguridad-compliance|Siguiente: Seguridad]]
- [[06-Arquitectura/05-seguridad-y-gobierno|Seguridad]]
