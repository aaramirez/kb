---
title: "Harness: Atención al Cliente"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Customer Service Harness"
  - "CX"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[15-harness-recursos-humanos]]"
---

# Harness: Atención al Cliente

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Agente de Atención, Customer Experience |
| **Enfoque** | Interacción con clientes, resolución, retención |
| **Volumen** | Muy alto |
| **Sensibilidad** | Alta (datos personales de clientes) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny
  bash: deny

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-atencion/        # Guías de atención
  - kb-productos/       # Catálogo de servicios
  - kb-faqs/            # Preguntas frecuentes
  - kb-politicas/       # Políticas de retención

rules:
  - "Siempre ser empático y profesional"
  - "Resolver antes de escalar"
  - "Nunca discutir con el cliente"
  - "Ofrecer alternativas cuando no hay solución directa"
  - "Registrar cada interacción"
  - "Escalar a humano si el cliente lo solicita"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Agente Conversacional** | Interactúa con clientes | "Mi internet no funciona" |
| **Clasificador** | Prioriza casos | "Clasifica este caso por urgencia" |
| **Retención** | Ofrece soluciones | "El cliente quiere cancelar, ¿qué ofrecer?" |
| **NPS Tracker** | Mide satisfacción | "¿Cómo ha evolucionado el NPS?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[15-harness-recursos-humanos|Siguiente: RRHH]]
- [[01-Fundamentos/04-casos-de-uso-en-telco|Casos Telco]]
