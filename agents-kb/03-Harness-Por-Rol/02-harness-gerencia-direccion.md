---
title: "Harness: Gerencia / Dirección"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Executive Harness"
  - "Gerente"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[09-Ruta-Aprendizaje/01-ruta-gerente-directivo|Ruta Gerente]]"
---

# Harness: Gerencia / Dirección

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Gerente, Director, VP, C-Level |
| **Enfoque** | Estrategia, decisiones, reportes |
| **Volumen** | Bajo-Medio de interacciones |
| **Sensibilidad** | Alta (datos estratégicos) |

## Harness Diseñado

```yaml
model: gpt-4o  # Capacidad de razonamiento estratégico
mode: primary
permission:
  read: allow
  edit: deny    # Solo lectura, no modifica
  bash: deny    # No ejecuta comandos

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-gerencia/       # Documentos estratégicos
  - kpi-dashboard/     # Métricas del negocio
  - team-reports/      # Reportes de área

rules:
  - "Siempre presentar datos con contexto"
  - "Incluir recomendaciones accionables"
  - "Citar fuentes de datos"
  - "Formato ejecutivo: resumen → detalle → recomendación"
  - "Nunca compartir información sensible sin autorización"
```

## Agentes Recomendados para Gerencia

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Reportes Ejecutivos** | Genera dashboards y reportes | "Genera un resumen semanal del portafolio" |
| **Análisis Estratégico** | Analiza tendencias y competition | "¿Cómo estamos vs competencia en NPS?" |
| **Seguimiento KPIs** | Monitorea métricas clave | "¿Cuál es el ROI del proyecto X?" |
| **Resumen de Reuniones** | Procesa minutas y acuerdos | "Resume los acuerdos de la junta" |

## Prompts Recomendados

### Prompt del Agente de Reportes
```
Eres un asistente ejecutivo especializado en reportes gerenciales.
Tu objetivo es transformar datos en insights accionables.

Formato de respuesta:
1. RESUMEN EJECUTIVO (3-5 líneas)
2. HALLAZGOS CLAVE (con datos)
3. RIESGOS OPORTUNOS
4. RECOMENDACIONES (máx 3)
5. PRÓXIMOS PASOS

Siempre incluye la fuente de los datos y la fecha de actualización.
```

## Métricas de Éxito

| Métrica | Target |
|---------|--------|
| Ahorro de tiempo en reportes | > 60% |
| Satisfacción del ejecutivo | > 4.5/5 |
| Tiempo de respuesta | < 1 min |
| Precisión de datos | 100% |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[03-harness-arquitectura-soluciones|Siguiente: Arquitectura]]
- [[09-Ruta-Aprendizaje/01-ruta-gerente-directivo|Ruta Gerente]]
