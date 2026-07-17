---
title: "Árboles de Competencia"
tags:
  - mgmt3/competencia
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Competencia y Habilidades"
aliases:
  - "Competence tree"
  - "Skill tree"
  - "Árbol de habilidades"
related:
  - "[[01-siete-enfoques-competencia]]"
  - "[[03-matrices-competencia]]"
  - "[[08-planes-de-crecimiento]]"
---

# Árboles de Competencia

## Qué es

Un árbol de competencia es una representación visual jerárquica de las habilidades que un equipo necesita, organizadas por categorías y subcategorías. A diferencia de la matriz (que es bidimensional y tabular), el árbol muestra relaciones de dependencia y jerarquía: algunas habilidades son fundamentales y otras se construyen sobre ellas.

## Estructura de un árbol

```
                        [Competencia del Equipo]
                       /           |            \
               [Técnico]      [Proceso]      [Interpersonal]
              /    |    \       /    \          /     |     \
          [Backend] [Front] [Scrum] [Kanban] [Comun.] [Liderazgo] [Negoc.]
           /   \      |       |        |        |         |          |
       [Java] [Py] [React] [Planning] [Board] [Escritura] [Mentoring] [Stakeh.]
```

## Categorías típicas

### Técnica
Habilidades específicas del dominio de trabajo. Para un equipo de software: lenguajes de programación, frameworks, bases de datos, infraestructura, testing, seguridad.

### Proceso
Habilidades relacionadas con cómo se organiza y ejecuta el trabajo: metodologias ágiles, estimación, planificación, gestión de dependencias, CI/CD.

### Interpersonal
Habilidades de comunicación, colaboración y liderazgo: comunicación técnica, facilitación, resolución de conflictos, mentoring, negociación con stakeholders.

## Cómo crear un árbol de competencia

### Paso 1: Identificar las ramas principales

Con el equipo, define las 3-5 categorías principales de competencia. No uses más de 5, o el árbol se vuelve ingobernable. Para un equipo de desarrollo de software, una estructura común es: Técnico, Proceso, Comunicación.

### Paso 2: Desglosar en subcategorías

Para cada rama principal, define 3-7 subcategorías. Estas son las áreas específicas donde el equipo necesita competencia. Por ejemplo, bajo "Técnico": Backend, Frontend, DevOps, Testing, Seguridad.

### Paso 3: Listar competencias específicas

Para cada subcategoría, lista las habilidades concretas. No pongas "sabe JavaScript": pon "puede desarrollar y mantener aplicaciones React sin supervisión". Las descripciones deben ser observables y medibles.

### Paso 4: Asignar nivel por persona

Similar a la matriz, cada persona se ubica en cada hoja del árbol con su nivel de competencia. Puedes usar colores: verde (nivel competente o superior), amarillo (nivelando), rojo (vacío crítico).

### Paso 5: Identificar ramas vacías

Las ramas sin hojas verdes son las que necesitan atención inmediata. Si la rama "DevOps" está toda en rojo, el equipo tiene un problema de capacidad que ningún esfuerzo individual va a resolver.

## Ventajas sobre la matriz

- **Muestra jerarquía:** Algunas habilidades dependen de otras. No puedes ser experto en React sin ser competente en JavaScript y HTML/CSS.
- **Visualización intuitiva:** Un árbol con ramas secas se entiende de inmediato; una matriz con ceros requiere más análisis.
- **Orienta la inversión:** Si la rama "Técnico" está fuerte pero "Proceso" está débil, la inversión debe ir hacia procesos, no hacia más capacitación técnica.

## Mantenimiento

- **Revisión trimestral:** Al menos cada tres meses, revisa el árbol con el equipo.
- **Actualización con proyectos:** Cuando el equipo adopta una nueva tecnología o metodología, añade la rama correspondiente.
- **Podar ramas obsoletas:** Si una tecnología se abandona, retire la rama para que el árbol refleje la realidad actual, no la pasada.
- **Crecimiento visible:** Marca las competencias que crecieron desde la última revisión. Ver el crecimiento es motivador.

## Herramientas para crear árboles

- **Físicos:** Post-its en una pizarra, ideal para talleres presenciales
- **Digitales:** Miro, Mural, Lucidchart, o incluso una imagen generada con Mermaid o D3.js
- **Integrados:** Algunas herramientas de gestión de equipos (Jira con plugins, Notion) permiten crear vistas de árbol
