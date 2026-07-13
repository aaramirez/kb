---
title: Cómo Usar Este Knowledge Base
tags:
  - lean/indice
  - type/guia
created: 2026-07-12
updated: 2026-07-12
category: Guía
aliases:
  - Guía de Navegación
  - Manual de Uso
  - How to Use
---

# Cómo Usar Este KB

Esta guía te ayudará a sacar el máximo provecho de la Lean Knowledge Base. Explica las funcionalidades de Obsidian, cómo navegar el vault y los sistemas de organización.

## Fundamentos de Obsidian

Obsidian es un editor de notas basado en **Markdown** que permite crear conexiones entre notas.

### Wikilinks

Los wikilinks conectan notas entre sí usando doble corchete:

```markdown
[[nombre-de-la-nota]]
[[nombre-de-la-nota|Texto personalizado]]
[[sección/nombre-de-la-nota]]
```

Al hacer clic en un wikilink, navegas directamente a la nota referenciada. Si la nota no existe, Obsidian la crea automáticamente.

### Graph View

La vista de grafo muestra todas las notas como nodos y las conexiones como líneas. Permite visualizar la estructura del conocimiento y descubrir relaciones entre conceptos. Accede con `Cmd/Ctrl + G`.

### Backlinks

Los backlinks muestran qué otras notas enlazan a la nota actual. Aparecen en el panel derecho y ayudan a navegar el conocimiento de forma inversa.

## Navegación por Secciones

El vault está organizado en 8 secciones principales. Cada una tiene un archivo `README.md` como punto de entrada:

- **01-Fundamentos**: Conceptos básicos y filosofía Lean
- **02-Pilares**: Los dos pilares del Sistema Toyota
- **03-Desperdicios**: Los 8 tipos de desperdicio (Muda)
- **04-Herramientas**: Técnicas y métodos prácticos
- **05-Ramas**: Evoluciones del Lean (Six Sigma, Startup, etc.)
- **06-Casos**: Ejemplos reales de implementación
- **07-Implementación**: Guías para aplicar Lean
- **08-Ruta-Aprendizaje**: Itinerarios de estudio

Usa el [[Index|índice principal]] para navegar rápidamente a cualquier sección.

## Navegación por Herramienta

Si buscas una herramienta específica como [[04-Herramientas/09-kanban|Kanban]] o [[04-Herramientas/01-5s|5S]], consulta directamente el [[lean-glossary|glosario]] o la sección de [[04-Herramientas/README|Herramientas]].

## Sistema de Tags

Los tags organizan el contenido por categoría y tipo. Se usan en el frontmatter de cada nota.

### Tags de Categoría
- `lean/fundamentos` — Conceptos filosóficos básicos
- `lean/pilares` — Los pilares del sistema Toyota
- `lean/desperdicios` — Los 8 desperdicios
- `lean/herramientas` — Métodos y técnicas
- `lean/ramas` — Evoluciones del Lean
- `lean/casos` — Casos de estudio
- `lean/implementacion` — Guías de implementación

### Tags de Tipo
- `type/concepto` — Definición y explicación de un concepto
- `type/herramienta` — Herramienta o técnica específica
- `type/guia` — Instrucciones paso a paso
- `type/indice` — Punto de entrada o tabla de contenidos
- `type/caso` — Caso de estudio real
- `type/ejercicio` — Ejercicio práctico

## Niveles de Dificultad

Cada nota indica su nivel de dificultad en el frontmatter:

- **Principiante**: Conceptos básicos, sin prerrequisitos
- **Intermedio**: Requiere conocimientos de nivel principiante
- **Avanzado**: Profundiza en temas complejos o requiere experiencia

## Rutas de Aprendizaje

La sección [[08-Ruta-Aprendizaje/README|08-Ruta-Aprendizaje]] ofrece itinerarios estructurados:

- **Ruta Fundamentos**: De cero a comprensión sólida (2-3 horas)
- **Ruta Herramientas**: Dominio práctico de técnicas (4-6 horas)
- **Ruta Implementación**: De la teoría a la práctica (3-4 horas)
- **Ruta Especialización**: Profundización en ramas específicas (5+ horas)

## Flujo de Trabajo Recomendado

### Aprendizaje Secuencial
Para una comprensión completa, sigue el orden de las secciones:
1. [[01-Fundamentos/README|Fundamentos]]
2. [[02-Pilares/README|Pilares]]
3. [[03-Desperdicios/README|Desperdicios]]
4. [[04-Herramientas/README|Herramientas]]
5. Continúa según tu interés

### Consulta Rápida
Para resolver dudas específicas:
1. Busca en el [[lean-glossary|glosario]]
2. Navega a la nota relevante
3. Sigue los wikilinks a conceptos relacionados

### Exploración Visual
Usa la vista de grafo (`Cmd/Ctrl + G`) para descubrir conexiones entre conceptos y explorar el conocimiento de forma no lineal.

---

*¿Tienes sugerencias para mejorar este KB? Agrega una nota en la sección correspondiente.*