---
title: "Harness: Agilidad / PMO"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "PMO Harness"
  - "Scrum Master"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[08-harness-product-ownership]]"
---

# Harness: Agilidad / PMO

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Scrum Master, Coordinador de Proyectos, PMO |
| **Enfoque** | Gestión ágil, seguimiento, reportes, ceremonias |
| **Volumen** | Medio-Alto |
| **Sensibilidad** | Media (datos de proyecto) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: allow   # Puede actualizar documentación de proyecto
  bash: deny

tools:
  - web_search
  - file_read
  - file_write
  - kb_search

context:
  - kb-pmo/             # Procesos PMO
  - kb-agil/            # Metodologías ágiles
  - kb-proyectos/       # Estado de proyectos

rules:
  - "Seguir ceremonias ágiles definidas"
  - "Reportar impedimentos > 48h automáticamente"
  - "Calcular velocity por sprint"
  - "Generar reportes en formato estándar"
  - "Incluir métricas de salud del proyecto"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Tracker de Portafolio** | Seguimiento diario | "¿Qué proyectos tienen bloqueos?" |
| **Generador de Reportes** | One-pagers, dashboards | "Genera el reporte quincenal" |
| **Gestor de Solicitudes** | Procesa intake | "Procesa este formulario de solicitud" |
| **Integrador** | GitHub-Teams-Planner | "Sincroniza el estado de los issues" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[08-harness-product-ownership|Siguiente: PO]]
- [[mgmt3-kb/Index|Management 3.0]]
