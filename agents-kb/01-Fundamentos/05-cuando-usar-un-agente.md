---
title: "¿Cuándo Usar un Agente?"
tags:
  - agents/fundamentos
  - type/guia
  - difficulty/principiante
created: 2026-07-27
updated: 2026-07-27
category: "Fundamentos"
aliases:
  - "Decision Framework"
  - "Cuándo Agente"
related:
  - "[[01-que-son-agentes-empresariales]]"
  - "[[02-tipos-de-agentes]]"
  - "[[03-agentes-vs-automatizaciones-tradicionales]]"
---

# ¿Cuándo Usar un Agente?

## Árbol de Decisión

```
¿La tarea requiere comprensión de lenguaje natural?
├── NO → ¿Es 100% predecible y estructurada?
│        ├── SI → Usa RPA/Automatización tradicional
│        └── NO → ¿Requiere decisiones?
│                 ├── NO → Usa script simple
│                 └── SI → Usa Agente
└── SI → ¿Requiere múltiples pasos?
         ├── NO → Usa Agente simple (chatbot inteligente)
         └── SI → ¿Necesita acceder a sistemas externos?
                  ├── NO → Usa Agente con RAG
                  └── SI → Usa Agente con Herramientas
```

## Criterios Positivos (¿Usar agente?)

✅ El proceso involucra **texto libre** (emails, chats, documentos)
✅ Hay **múltiples fuentes** de datos que consolidar
✅ Se necesitan **decisiones contextuales**
✅ El proceso **evoluciona** con frecuencia
✅ Hay **comunicación con humanos** involucrada
✅ Se necesita **disponibilidad 24/7**
✅ El volumen es **alto** y repetitivo pero variable

## Criterios Negativos (¿No usar agente?)

❌ El proceso es 100% **predecible y determinista**
❌ No hay **texto libre** involucrado
❌ Los datos siempre tienen el **mismo formato**
❌ No se necesitan **decisiones**
❌ Es un proceso **crítico de seguridad** sin margen de error
❌ El **volumen es muy bajo** (no justifica inversión)

## Checklist de Viabilidad

| # | Pregunta | Sí = 1 punto |
|---|----------|--------------|
| 1 | ¿El proceso involucra comprensión de texto libre? | ☐ |
| 2 | ¿Hay múltiples fuentes de datos? | ☐ |
| 3 | ¿Se necesitan decisiones contextuales? | ☐ |
| 4 | ¿El proceso evoluciona con frecuencia? | ☐ |
| 5 | ¿Hay comunicación con humanos? | ☐ |
| 6 | ¿Se necesita disponibilidad 24/7? | ☐ |
| 7 | ¿El volumen es alto y variable? | ☐ |
| 8 | ¿Hay puntos de falla por rigidez? | ☐ |

**Interpretación:**
- **0-2 puntos**: No uses agente, usa automatización simple
- **3-5 puntos**: Considera un agente simple
- **6-8 puntos**: Usa un agente completo con herramientas

## Ver también

- [[03-agentes-vs-automatizaciones-tradicionales|Agentes vs Automatizaciones]]
- [[04-casos-de-uso-en-telco|Casos de Uso en Telco]]
- [[06-ecosistema-de-agentes-en-una-telco|Ecosistema Telco]]
