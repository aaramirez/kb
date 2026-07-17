---
title: "Celebration Grids"
tags:
  - mgmt3/cambio
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Gestión del Cambio"
aliases:
  - "Cuadrícula de Celebraciones"
  - "Matriz de Aprendizaje"
related:
  - "[[01-change-management-game]]"
  - "[[03-experimentacion-organizacional]]"
  - "[[05-feedback-wall]]"
  - "[[06-dialogos-de-mejora]]"
---

## Celebration Grids

Las Celebration Grids son una herramienta de Management 3.0 para **rastrear tanto éxitos como fracasos como fuentes de aprendizaje**. A diferencia de las retrospectivas tradicionales que se enfocan en "qué salió mal", las Celebration Grids crean una cultura donde el fracaso es valorado tanto como el éxito porque ambos generan conocimiento.

> **"Si nunca fracasas, no estás experimentando lo suficiente."**

## Cuándo usarlas

- **En cada retrospectiva** — Para registrar lo que se aprendió en el sprint/ciclo
- **Al final de un proyecto** — Para documentar aprendizajes de todo el ciclo
- **Después de un cambio significativo** — Para evaluar si el cambio funcionó
- **Mensualmente** — Como check-in del equipo sobre experimentos en curso
- **En reviews de equipo** — Para mostrar evidencia de mejora continua

## La cuadrícula

La Celebration Grid es una matriz 2x2 con dos ejes:

```
                    ┌─────────────────────┬─────────────────────┐
                    │     ÉXITO (+)       │     FRACASO (-)     │
┌───────────────────┼─────────────────────┼─────────────────────┤
│ Experimento       │ "¡Funcionó!         │ "No funcionó,       │
│ intencionado      │  Mantenlo"          │  pero aprendimos"   │
│ (+)               │                     │                     │
├───────────────────┼─────────────────────┼─────────────────────┤
│ Casualidad /      │ "Funcionó, pero     │ "No funcionó y      │
│ Azar (-)          │  no sabemos por qué"│  no sabemos por qué"│
└───────────────────┴─────────────────────┴─────────────────────┘
```

### Los cuatro cuadrantes

| Cuadrante | Significado | Acción |
|-----------|-------------|--------|
| **Experimento + Éxito** | Intentamos algo y funcionó | Documentar y compartir para replicar |
| **Experimento + Fracaso** | Intentamos algo y no funcionó | Analizar qué aprender de ello |
| **Casualidad + Éxito** | Funcionó sin que supiéramos por qué | Investigar para entender la causa |
| **Casualidad + Fracaso** | No funcionó y no sabemos por qué | Crear un experimento para entender |

## Setup paso a paso

### Paso 1: Prepara la cuadrícula (5 min)

Dibuja la cuadrícula en una pizarra, tablero digital o en papel grande. Asegúrate de que sea lo suficientemente grande para que todos puedan leer y escribir.

```
┌─────────────────────────────────────────────────────────────┐
│                    CELEBRATION GRID                         │
│                                                             │
│     ÉXITO                              FRACASO              │
│  ┌───────────────────┬───────────────────┐                  │
│  │  🧪 + 😊          │  🧪 + 😞          │                  │
│  │                   │                   │                  │
│  │                   │                   │                  │
│  │  Experimentos     │  Experimentos     │                  │
│  │  exitosos         │  fallidos         │                  │
│  ├───────────────────┼───────────────────┤                  │
│  │  🎲 + 😊          │  🎲 + 😞          │                  │
│  │                   │                   │                  │
│  │                   │                   │                  │
│  │  Casualidades     │  Casualidades     │                  │
│  │  exitosas         │  fallidas         │                  │
│  └───────────────────┴───────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Paso 2: Prepara los materiales (5 min)

- **Post-its** de dos colores: verde para éxitos, naranja para fracasos
- **Marcadores** para escribir de forma legible
- **Temporizador** para las rondas de escritura

### Paso 3: Contexto (5 min)

El facilitador explica:
- El objetivo es **aprender**, no juzgar
- Los fracasos son **igual de valiosos** que los éxitos
- El anonimato es respetado — se puede escribir sin nombre
- Se puede incluir experimentos formales e informales

### Paso 4: Ronda de escritura (10 min)

Cada persona escribe en post-its:

1. **¿Qué experimentamos intencionalmente?** (procesos, herramientas, prácticas nuevas)
2. **¿Qué funcionó o no funcionó?** (resultado)
3. **¿Qué aprendimos?** (lección)

Coloca cada post-it en el cuadrante correspondiente.

### Paso 5: Lectura y discusión (15 min)

1. **Leer en silencio** — Todos caminan y leen los post-its (2 min)
2. **Clarificar preguntas** — Si algo no se entiende, preguntar al autor
3. **Discutir patrones** — ¿Hay temas recurrentes?
4. **Priorizar** — ¿Qué 2-3 aprendizajes son más impactantes?

### Paso 6: Acciones (10 min)

Para cada aprendizaje importante:
- **Experimento exitoso**: ¿Cómo lo replicamos en otros contextos?
- **Experimento fallido**: ¿Qué cambiamos para el próximo intento?
- **Casualidad exitosa**: ¿Cómo lo hacemos intencional?
- **Casualidad fallida**: ¿Qué experimento diseñamos para entender?

## Ejemplo práctico

**Equipo de desarrollo después de un sprint de 2 semanas:**

| Cuadrante | Ejemplo |
|-----------|---------|
| **+ Éxito + Experimento** | Probamos pair programming en el módulo de pagos → menos bugs en producción |
| **- Éxito + Experimento** | Cambiamos la daily a 15 min → nadie se quejó pero tampoco mejoró nada |
| **+ Fracaso + Experimento** | Intentamos TDD estricto → el equipo lo encontró muy lento, abandonamos |
| **- Fracaso + Experimento** | Probamos code review por rotación → la calidad no mejoró |
| **+ Éxito + Casualidad** | Un miembro empezó a documentar decisiones en ADRs → otros lo copiaron |
| **- Fracaso + Casualidad** | El nuevo onboarding se sintió caótico → nadie sabía qué esperar |

## Construir una cultura de aprendizaje

Las Celebration Grids no son solo una herramienta — son un **instrumento de transformación cultural**:

### Lo que cambia con el tiempo

| Fase | Comportamiento típico |
|------|----------------------|
| **Inicial** | Solo se escriben éxitos, los fracasos se evitan |
| **Intermedia** | Se empiezan a documentar fracasos, pero superficialmente |
| **Madura** | Los fracasos se celebran activamente como fuentes de aprendizaje |
| **Avanzada** | Se diseñan experimentos específicos para aprender de áreas desconocidas |

### Señales de que está funcionando

- La gente **propone experimentos** sin que se les pida
- Los fracasos se discuten **abiertamente** sin buscar culpables
- Se **replican** prácticas exitosas en otros equipos
- Las retrospectivas se vuelven **más constructivas** y menos de queja

## Errores comunes

1. **Solo celebrar éxitos** — Si soloDocumentas lo que funcionó, no estás aprendiendo
2. **Culpar por los fracasos** — Si la gente teme consecuencias, no será honesta
3. **No hacer seguimiento** — Si documentas pero no actúas, es un ejercicio burocrático
4. **Confundir con retrospectiva** — Las Celebration Grids son complementarias, no un reemplazo
5. **No incluir casualidades** — Lo que funciona sin saber por qué es un riesgo

## Celebration Grids vs Retrospectiva

| Aspecto | Celebration Grid | Retrospectiva tradicional |
|---------|-----------------|---------------------------|
| Enfoque | Aprendizaje de experimentos | Qué salió bien/mal |
| Tono | Curiosidad, experimentación | Crítica, resolución |
| Salida | Hipótesis y experimentos | Acciones correctivas |
| Frecuencia | Continua | Periódica |
| Cultura | Blameless, experimental | Variable |

Ambas son complementarias. La retrospectiva resuelve problemas; la Celebration Grid construye conocimiento experimental.

Para un enfoque más profundo de experimentación, consulta [[03-experimentacion-organizacional]].
