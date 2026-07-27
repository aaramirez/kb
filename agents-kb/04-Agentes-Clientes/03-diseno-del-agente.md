---
title: "Diseño del Agente para Clientes"
tags:
  - agents/clientes
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Agentes Clientes"
aliases:
  - "Agent Design"
  - "Customer Agent Design"
related:
  - "[[02-analisis-de-necesidades]]"
  - "[[04-implementacion-y-pruebas]]"
---

# Diseño del Agente para Clientes

## Elementos del Diseño

### 1. Personalidad del Agente

```yaml
nombre: "Asistente [Marca]"
tono: "Profesional, amigable, empático"
idioma: "Español (LATAM)"
disponibilidad: "24/7"
limitaciones: "No puede modificar contratos, no da asesoría legal"
```

### 2. Flujo de Conversación

```
┌─────────────┐
│  SALUDO     │ "¡Hola! Soy [nombre]. ¿En qué puedo ayudarte?"
└──────┬──────┘
       │
┌──────▼──────┐
│  DETECCIÓN  │ ¿Qué quiere el cliente?
│  DE INTENCIÓN│
└──────┬──────┘
       │
  ┌────┴────┐
  │         │
┌─▼──┐  ┌──▼──┐
│INFO│  │ACCIÓN│
│    │  │      │
└─┬──┘  └──┬──┘
  │        │
┌─▼────────▼──┐
│  RESOLUCIÓN  │
│  o ESCALAMIENTO│
└──────┬──────┘
       │
┌──────▼──────┐
│  CIERRE     │ "¿Pude ayudarte? ¿Necesitas algo más?"
└─────────────┘
```

### 3. Herramientas del Agente

| Herramienta | Para qué | Ejemplo |
|-------------|----------|---------|
| Consulta de cuenta | Ver estado, saldos | "¿Cuánto debo?" |
| Catálogo de planes | Ver opciones disponibles | "¿Qué planes tienen?" |
| Registro de ticket | Crear caso de soporte | "Tengo un problema con..." |
| Base de conocimiento | Buscar soluciones | "¿Cómo configuro...?" |
| Escalamiento | Transferir a humano | " Voy a conectarte con un agente" |

### 4. Reglas de Escalamiento

**Escalar SIEMPRE a humano cuando:**
- El cliente lo solicita explícitamente
- Hay riesgo legal o contractual
- El agente no tiene certeza > 80%
- El caso lleva > 3 intentos sin resolución
- Hay datos sensibles involucrados

## Ver también

- [[02-analisis-de-necesidades|Análisis]]
- [[04-implementacion-y-pruebas|Siguiente: Implementación]]
- [[06-Arquitectura/01-patrones-de-agentes|Patrones]]
