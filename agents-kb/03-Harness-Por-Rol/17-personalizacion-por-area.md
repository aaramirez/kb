---
title: "Personalización por Área"
tags:
  - agents/harness
  - type/guia
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Customization"
  - "Adaptación"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[02-Metodologia/04-fase-escala|Fase Escala]]"
---

# Personalización por Área

## Proceso de Personalización

### Paso 1: Analizar el Área

| Pregunta | Respuesta |
|----------|-----------|
| ¿Cuántas personas tiene el área? | |
| ¿Cuáles son sus procesos principales? | |
| ¿Qué sistemas usan? | |
| ¿Cuáles son sus dolores principales? | |
| ¿Qué datos necesitan? | |

### Paso 2: Seleccionar Agente Base

Tomar uno de los harnesses predefinidos (ver archivos 02-16) como punto de partida.

### Paso 3: Adaptar

**Personalizar contexto:**
- Agregar knowledge base específica del área
- Incluir documentos y procedimientos propios
- Referenciar sistemas específicos

**Personalizar reglas:**
- Reglas de negocio del área
- Políticas de escalamiento
- Formato de respuesta preferido

**Personalizar herramientas:**
- APIs específicas del área
- Bases de datos de referencia
- Herramientas de reporting

### Paso 4: Validar

| Validación | Criterio |
|------------|----------|
| ¿Responde correctamente? | > 80% de preguntas típicas |
| ¿Usa la terminología correcta? | Vocabulario del área |
| ¿Escala adecuadamente? | No intenta lo que no sabe |
| ¿Es seguro? | No expone datos sensibles |

## Template de Personalización

```yaml
# Template para personalizar un harness por área
model: [gpt-4o|claude]
mode: primary
permission:
  read: allow
  edit: [allow|deny]
  bash: [allow|deny]

tools:
  - [herramientas del área]

context:
  - kb-[area]/           # Knowledge base del área
  - [sistemas-especificos]/ # Sistemas que usa el área

rules:
  - "Reglas generales de la empresa"
  - "Reglas específicas del área"
  - "Formato de respuesta preferido"
  - "Criterios de escalamiento"
```

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[02-Metodologia/04-fase-escala|Fase Escala]]
- [[06-Arquitectura/04-gestion-de-permisos|Gestión de Permisos]]
