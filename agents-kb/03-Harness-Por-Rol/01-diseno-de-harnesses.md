---
title: "Diseño de Harnesses"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Harness Design"
  - "Diseño de Agente"
related:
  - "[[02-harness-gerencia-direccion]]"
  - "[[17-personalizacion-por-area]]"
---

# Diseño de Harnesses

## Componentes de un Harness

```
┌─────────────────────────────────────────────────────┐
│                    HARNESS                          │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │ MODELO   │  │ PERMISOS │  │ HERRAMIENTAS     │  │
│  │ gpt-4o   │  │ read     │  │ web_search       │  │
│  │ claude   │  │ edit     │  │ file_read        │  │
│  │ local    │  │ bash     │  │ database_query   │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────────────┐ │
│  │ CONTEXTO         │  │ REGLAS                   │ │
│  │ KB del área      │  │ "Siempre escalalar..."   │ │
│  │ Documentación    │  │ "Nunca acceder a..."     │ │
│  │ Políticas        │  │ "Responder en español"   │ │
│  └──────────────────┘  └──────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Proceso de Diseño

### Paso 1: Definir el Objetivo

**Preguntas clave:**
- ¿Qué problema resuelve el agente?
- ¿Quién lo usa?
- ¿Qué éxito se espera?

### Paso 2: Seleccionar Modelo

| Modelo | Velocidad | Capacidad | Costo | Ideal para |
|--------|-----------|-----------|-------|------------|
| GPT-4o | Rápido | Alta | Medio | Uso general |
| Claude 3.5 | Rápido | Alta | Medio | Código, análisis |
| GPT-4o-mini | Muy rápido | Media | Bajo | Tareas simples |
| O3 | Lento | Muy alta | Alto | Razonamiento complejo |
| Modelos locales | Variable | Variable | Bajo | Datos sensibles |

### Paso 3: Definir Permisos

**Principio de mínimo privilegio:**

| Permiso | Nivel Básico | Nivel Medio | Nivel Alto |
|---------|-------------|-------------|------------|
| **read** | Solo KB | KB + sistemas | Acceso completo |
| **edit** | Denied | Solo docs | Código + config |
| **bash** | Denied | Scripts seguros | Acceso completo |

### Paso 4: Seleccionar Herramientas

| Herramienta | Para qué sirve | Ejemplo de uso |
|-------------|----------------|----------------|
| `web_search` | Buscar información | Buscar documentación |
| `file_read` | Leer archivos | Leer knowledge base |
| `file_write` | Crear archivos | Generar reportes |
| `bash` | Ejecutar comandos | Runs scripts |
| `database_query` | Consultar BD | Consultar datos de cliente |
| `api_call` | Llamar APIs | Integrar con CRM |

### Paso 5: Definir Contexto

**Knowledge Base del área:**
- Documentación técnica
- Procedimientos operativos
- FAQs y políticas
- Casos de uso anteriores

### Paso 6: Establecer Reglas

**Reglas de comportamiento:**
- Siempre responder en el idioma del usuario
- Escalar si no tiene certeza > 80%
- Nunca acceder a datos sensibles sin autorización
- Registrar cada interacción para auditoría

## Ver también

- [[02-harness-gerencia-direccion|Ejemplo: Gerencia]]
- [[17-personalizacion-por-area|Personalización por Área]]
- [[06-Arquitectura/04-gestion-de-permisos|Gestión de Permisos]]
