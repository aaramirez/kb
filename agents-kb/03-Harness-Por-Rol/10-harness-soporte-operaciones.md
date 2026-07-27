---
title: "Harness: Soporte / Operaciones"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Support Harness"
  - "Mesa de Ayuda"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[11-harness-datos-analytics]]"
---

# Harness: Soporte / Operaciones

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Soporte Técnico, Mesa de Ayuda, Operaciones |
| **Enfoque** | Resolución de tickets, soporte a usuarios |
| **Volumen** | Muy alto (primer nivel de contacto) |
| **Sensibilidad** | Media (datos de usuarios) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny    # No modifica sistemas
  bash: deny    # No ejecuta comandos

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-soporte/         # Guías de soporte
  - kb-faqs/            # Preguntas frecuentes
  - kb-procedimientos/  # Procedimientos operativos

rules:
  - "Intentar resolver antes de escalar"
  - "Registrar cada interacción"
  - "Seguir guías de troubleshooting"
  - "Escalar si el tiempo de resolución > 15 min"
  - "Nunca compartir información interna con clientes"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Soporte Nivel 1** | Resuelve consultas básicas | "¿Cómo configuro mi router?" |
| **Diagnóstico** | Guía troubleshooting | "Mi internet está lento, ¿qué hago?" |
| **Gestión de Tickets** | Clasifica y prioriza | "Clasifica este ticket por urgencia" |
| **Base de Conocimiento** | Busca soluciones | "¿Tenemos solución para este error?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[11-harness-datos-analytics|Siguiente: Datos]]
- [[14-harness-atencion-cliente|Atención al Cliente]]
