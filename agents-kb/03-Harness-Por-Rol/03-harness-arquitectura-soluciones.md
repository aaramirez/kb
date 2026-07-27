---
title: "Harness: Arquitectura de Soluciones"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Architect Harness"
  - "Arquitecto"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[04-harness-ingenieria-software]]"
---

# Harness: Arquitectura de Soluciones

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Arquitecto de Soluciones, Arquitecto de Software |
| **Enfoque** | Diseño técnico, estándares, documentación |
| **Volumen** | Medio de interacciones |
| **Sensibilidad** | Media-Alta (diseño de sistemas) |

## Harness Diseñado

```yaml
model: claude  # Excelente para análisis y código
mode: primary
permission:
  read: allow
  edit: allow   # Puede crear/modificar documentación
  bash: deny    # No ejecuta, solo diseña

tools:
  - web_search
  - file_read
  - file_write
  - kb_search

context:
  - kb-arquitectura/     # Estándares y patrones
  - kb-tecnologia/       # Stack tecnológico
  - kb-proyectos/        # Proyectos activos

rules:
  - "Seguir estándares de arquitectura corporativa"
  - "Documentar decisiones con ADRs"
  - "Incluir diagramas cuando sea relevante"
  - "Considerar escalabilidad, seguridad, mantenibilidad"
  - "Revisar impacto antes de proponer cambios"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Documentador Arquitectónico** | Genera ADRs, diagramas C4 | "Documenta la decisión de usar microservicios" |
| **Guardián de Estándares** | Revisa compliance | "¿Este diseño cumple nuestros estándares?" |
| **Revisor de Propuestas** | Analiza cambios técnicos | "Evalúa el impacto de migrar a Kubernetes" |
| **Vigilancia Tecnológica** | Monitorea tendencias | "¿Qué hay nuevo en observabilidad?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[04-harness-ingenieria-software|Siguiente: Ingeniería]]
- [[06-Arquitectura/README|Arquitectura]]
