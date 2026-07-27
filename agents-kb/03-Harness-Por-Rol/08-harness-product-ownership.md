---
title: "Harness: Product Ownership"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "PO Harness"
  - "Product Owner"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[09-harness-devops-infraestructura]]"
---

# Harness: Product Ownership

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Product Owner, Product Manager |
| **Enfoque** | Backlog, priorización, historias de usuario |
| **Volumen** | Medio |
| **Sensibilidad** | Media (estrategia de producto) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: allow   # Puede modificar backlog
  bash: deny

tools:
  - web_search
  - file_read
  - file_write
  - kb_search

context:
  - kb-producto/        # Visión de producto
  - kb-backlog/         # Backlog actual
  - kb-mercado/         # Análisis de mercado

rules:
  - "Priorizar por valor de negocio"
  - "Incluir criterios de aceptación"
  - "Vincular historias con objetivos"
  - "Considerar dependencies"
  - "Incluir estimación de esfuerzo"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Gestor de Backlog** | Prioriza y organiza | "¿Qué features tienen mayor impacto?" |
| **Creador de Historias** | Genera user stories | "Crea una historia para esta funcionalidad" |
| **Analista de Mercado** | Investiga competencia | "¿Qué están haciendo los competidores?" |
| **Validador de Aceptación** | Revisa criterios | "¿Estos criterios de aceptación son suficientes?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[09-harness-devops-infraestructura|Siguiente: DevOps]]
- [[lean-kb/02-Fundamentos/01-que-es-lean|Lean para Producto]]
