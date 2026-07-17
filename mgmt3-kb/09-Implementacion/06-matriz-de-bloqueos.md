---
title: "Matriz de Bloqueos"
tags:
  - mgmt3/implementacion
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Implementación"
aliases:
  - "Blocking Matrix"
  - "Identificación de Bloqueos"
related:
  - "[[02-roadmap-transformacion]]"
  - "[[07-gestion-visual]]"
  - "[[10-resistencia-al-cambio]]"
  - "[[08-metricas-de-adopcion]]"
---

## Matriz de Bloqueos

La Matriz de Bloqueos es una herramienta de Management 3.0 para **identificar, categorizar y abordar sistemáticamente los obstáculos** que impiden la adopción efectiva de M3.0. Transforma la queja vaga ("hay resistencia") en acción concreta.

> **"Un bloqueo no identificado es un problema sin solución. Un bloqueo identificado es una oportunidad de mejora."**

## Cuándo usarla

- **Retrospectivas de implementación** — cuando el equipo siente que "algo no avanza"
- **Reuniones de seguimiento del roadmap** — para identificar qué frena el progreso
- **Diagnósticos de equipo** — cuando las métricas no mejoran como se esperaba
- **Antes de escalar** — para asegurar que las bases están sólidas
- **Periódicamente** — como práctica regular de mantenimiento organizacional

## La matriz

```
                    ALTO IMPACTO
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         │   BLOQUEOS   │  BLOQUEOS    │
         │  PRIORITARIOS│  ESTRATÉGICOS│
         │   (Accionar  │  (Planificar │
         │    ya)       │   y actuar)  │
         │              │              │
 BAJO    ├──────────────┼──────────────┤  ALTO
 ESFUERZO│              │              │  ESFUERZO
         │   QUICK      │  BLOQUEOS    │
         │   WINS       │  DE BAJADA   │
         │  (Hacer      │  (Evaluar    │
         │   ahora)     │   si vale)   │
         │              │              │
         └──────────────┼──────────────┘
                        │
                    BAJO IMPACTO
```

### Cuatro cuadrantes

| Cuadrante | Impacto | Esfuerzo | Acción |
|-----------|---------|----------|--------|
| **Quick Wins** | Bajo-Medio | Bajo | Hacer ahora — generan momentum |
| **Bloqueos Prioritarios** | Alto | Bajo | Accionar ya — máxima relación esfuerzo/impacto |
| **Bloqueos Estratégicos** | Alto | Alto | Planificar — requieren recursos y tiempo |
| **Bloqueos de Bajada** | Bajo | Alto | Evaluar si vale la pena — a menudo son distracciones |

## Proceso paso a paso

### Paso 1: Identificar bloqueos (15 min)

Cada participante escribe bloqueos en post-its (uno por post-it):
- **¿Qué está impidiendo que M3.0 funcione mejor?**
- **¿Qué frena nuestro progreso?**
- **¿Qué nos gustaría hacer pero no podemos?**

**Reglas:**
- Sé específico, no genérico ("el VP no da autonomía" en vez de "falta apoyo")
- Incluye bloqueos de cualquier tipo: cultural, estructural, personal, técnico
- No juzgues si un bloqueo es "válido" — todos cuentan

### Paso 2: Clusterizar (10 min)

Agrupa bloqueos similares en categorías:

| Categoría | Ejemplos |
|-----------|----------|
| **Cultural** | "La gente tiene miedo de hablar en público" |
| **Estructural** | "No hay tiempo para retrospectivas" |
| **De liderazgo** | "Los managers no modelan los comportamientos" |
| **De proceso** | "Las métricas actuales recompensan comportamientos opuestos" |
| **De habilidades** | "Nadie sabe facilitar una retrospectiva" |
| **De recursos** | "No hay presupuesto para herramientas" |
| **De comunicación** | "La gente no sabe por qué estamos cambiando" |

### Paso 3: Evaluar impacto y esfuerzo (10 min)

Para cada bloqueo (o grupo), asigna:
- **Impacto**: Si lo resolvemos, ¿cuánto mejora la implementación? (1-10)
- **Esfuerzo**: ¿Cuánto trabajo/timepo/dinero requiere resolverlo? (1-10)

### Paso 4: Posicionar en la matriz (10 min)

Coloca cada bloqueo en el cuadrante correspondiente:

| Impacto | Esfuerzo | Cuadrante |
|---------|----------|-----------|
| ≥ 6 | ≤ 4 | **Bloqueos Prioritarios** |
| ≥ 6 | ≥ 5 | **Bloqueos Estratégicos** |
| ≤ 5 | ≤ 4 | **Quick Wins** |
| ≤ 5 | ≥ 5 | **Bloqueos de Bajada** |

### Paso 5: Definir acciones (15 min)

Para cada cuadrante, define acciones concretas:

**Quick Wins:**
- ¿Quién lo resuelve?
- ¿Para cuándo?
- ¿Cómo sabremos que se resolvió?

**Bloqueos Prioritarios:**
- ¿Quién lidera la acción?
- ¿Qué recursos necesita?
- ¿Cuál es el plan de acción?

**Bloqueos Estratégicos:**
- ¿Quién necesita estar involucrado?
- ¿Qué aprobaciones se necesitan?
- ¿Cuál es el plan a 3 meses?

**Bloqueos de Bajada:**
- ¿Vale la pena resolverlo?
- ¿Qué pasa si lo ignoramos?
- ¿Podemos eliminarlo de la lista?

## Ejemplo completo

### Bloqueos identificados por el equipo

| # | Bloqueo | Categoría | Impacto | Esfuerzo | Cuadrante |
|---|---------|-----------|---------|----------|-----------|
| 1 | "No sabemos qué herramientas usar primero" | Habilidades | 7 | 2 | Prioritario |
| 2 | "El VP de RRHH no apoya los cambios de proceso" | Liderazgo | 9 | 7 | Estratégico |
| 3 | "No tenemos lugar para un tablero visual" | Recursos | 4 | 3 | Quick Win |
| 4 | "La gente no entiende qué es M3.0" | Comunicación | 8 | 3 | Prioritario |
| 5 | "Los managers tienen miedo de perder control" | Cultural | 9 | 8 | Estratégico |
| 6 | "Las herramientas de tracking no se integran" | Técnico | 3 | 6 | Bajada |
| 7 | "No hay tiempo para reuniones extra" | Estructural | 7 | 4 | Prioritario |

### Acciones resultantes

| Bloqueo | Acción | Responsable | Fecha |
|---------|--------|-------------|-------|
| #1 | Workshop de selección de herramientas | Facilitador M3.0 | Semana 2 |
| #4 | Sesión informativa para todo el equipo | Manager | Semana 1 |
| #7 | Reemplazar reunión existente (no agregar) | Manager | Semana 1 |
| #3 | Usar una pared existente o tablero digital | Equipo | Semana 1 |
| #2 | Reunión 1:1 con VP para alinear expectativas | Sponsor | Mes 1 |
| #5 | Programa de desarrollo para managers | RRHH | Mes 2-3 |
| #6 | Evaluar alternativas técnicas | Tech Lead | Backlog |

## Facilitación de la sesión

### Materiales

- Post-its de colores (por categoría)
- Pizarra o muro grande
- Marcadores
- Temporizador
- La matriz impresa o dibujada en la pizarra

### Timebox sugerido

| Actividad | Tiempo |
|-----------|--------|
| Explicar la herramienta | 5 min |
| Generar bloqueos | 15 min |
| Clusterizar | 10 min |
| Evaluar impacto/esfuerzo | 10 min |
| Posicionar en la matriz | 10 min |
| Definir acciones | 15 min |
| **Total** | **65 min** |

### Preguntas guía para la facilitación

1. "¿Qué nos está impidiendo avanzar?"
2. "Si pudiéramos resolver UNA cosa, ¿cuál tendría mayor impacto?"
3. "¿Cuáles de estos bloqueos hemos creado nosotros mismos?"
4. "¿Qué es real y qué es una percepción?"
5. "¿Qué podemos resolver esta semana, no este trimestre?"

## Errores comunes al usar la matriz

1. **No ser específico** — "falta comunicación" es demasiado vago; "el VP no asiste a las retrospectivas" es accionable
2. **Ignorar los quick wins** — Los bloqueos pequeños acumulados matan el momentum
3. **No asignar responsables** — Si nadie es responsable, nadie lo resuelve
4. **No dar seguimiento** — La matriz sin seguimiento es solo un ejercicio
5. **Tratar todo como igual** — Priorizar es decir "no a esto, sí a esto"
6. **No repetir la práctica** — Los bloqueos cambian; la matriz debe actualizarse

## Seguimiento

- **Revisa la matriz cada 2-4 semanas** en retrospectivas
- **Actualiza el estado** de cada bloqueo (resuelto, en progreso, nuevo)
- **Celebra los resueltos** — cada bloqueo eliminado es victoria
- **Añade nuevos** — los bloqueos emergentes deben capturarse
