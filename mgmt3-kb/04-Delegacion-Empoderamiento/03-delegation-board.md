---
title: "Delegation Board"
tags:
  - mgmt3/delegacion
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Delegación y Empoderamiento"
aliases:
  - "Tablero de Delegación"
  - "Matriz de Delegación"
related:
  - "[[01-siete-niveles-autoridad]]"
  - "[[02-delegation-poker]]"
  - "[[12-matriz-decision-delegacion]]"
  - "[[07-who-decides-what]]"
---

## Delegation Board

El Delegation Board es un **artefacto visual** que muestra de un vistazo qué nivel de autoridad se ha asignado a diferentes dominios de decisión dentro de un equipo. Es el resultado tangible de sesiones de [[02-delegation-poker|Delegation Poker]] y funciona como contrato social vivo del equipo.

> **"Si no puedes ver la delegación, no puedes gestionarla."**
> — Jurgen Appelo

## Estructura del tablero

El Delegation Board es una matriz con:

- **Filas**: Dominios de decisión (qué se decide)
- **Columnas**: Los 7 niveles de autoridad (quién tiene la autoridad)
- **Marcadores**: Indicador visual del nivel acordado para cada dominio

```
                    Tell  Sell  Consult  Agree  Advise  Inquire  Delegate
Herramientas técnicas                ●
Distribución de trabajo                        ●
Priorización de features              ●
Arquitectura de software                          ●
Procesos del equipo                                         ●
Presupuesto del equipo    ●
```

## Cómo crear tu Delegation Board

### Paso 1: Identificar dominios de decisión (15 min)

Haz una lluvia de ideas con el equipo sobre los tipos de decisiones que toman regularmente. Agrupa en categorías:

- **Técnicas**: Arquitectura, herramientas, estándares de código, infraestructura
- **Procesos**: Cómo trabajan, reuniones, Definition of Done, horarios
- **Personas**: Onboarding, capacitación, evaluación,分配 de roles
- **Producto**: Priorización, features, diseño de UX, métricas
- **Organizacionales**: Presupuesto, contratación, relaciones con otros equipos

Selecciona los 8-15 dominios más relevantes para tu equipo. No intentes cubrir todo — empieza con lo que genera más confusión o conflicto.

### Paso 2: Determinar niveles actuales (20 min)

Usa [[02-delegation-poker|Delegation Poker]] o una votación directa para determinar el nivel actual y el nivel deseado para cada dominio. Es útil mostrar ambos:

- **Nivel actual** (dónde estamos hoy) — puede ser implícito o informal
- **Nivel deseado** (dónde deberíamos estar) — el objetivo del equipo

La brecha entre ambos revela oportunidades de mejora y áreas de tensión.

### Paso 3: Construir el tablero (15 min)

Crea el tablero en un formato visible para todo el equipo:

- **Físico**: Un poster en la pared del team room con Post-its o imanes
- **Digital**: En una herramienta como Miro, Mural, Notion o una wiki
- **Híbrido**: Un tablero físico que se sincroniza con una copia digital

Usa colores para distinguir:
- 🟢 Verde: Nivel acordado y funcionando
- 🟡 Amarillo: Nivel acordado pero en revisión
- 🔴 Rojo: Nivel en conflicto o sin acuerdo

### Paso 4: Revisar y acordar (10 min)

Presenta el tablero al equipo completo. Verifica que cada miembro esté de acuerdo con los niveles asignados. Si hay desacuerdos, agenda una sesión de Delegation Poker específica para esos dominios.

### Paso 5: Publicar y socializar (5 min)

El tablero debe ser visible y accesible para todo el equipo. Considera compartirlo también con stakeholders cercanos para que entiendan cómo se toman las decisiones en el equipo.

## Mantenimiento del tablero

Un Delegation Board no es estático. Debe revisarse periódicamente:

| Evento | Acción |
|--------|--------|
| **Cada retrospectiva** | Revisar si algún nivel necesita ajuste |
| **Cada 3 meses** | Sesión formal de recalibración con Delegation Poker |
| **Cambio de miembros** | Revisar niveles cuando entra gente nueva o sale gente |
| **Cambio de contexto** | Ajustar cuando cambian las circunstancias del negocio o del equipo |
| **Conflictos recurrentes** | Si hay tensión en un dominio, es hora de revisar su nivel |

## Ejemplo práctico

**Equipo de desarrollo de software (6 personas):**

| Dominio | Nivel | Notas |
|---------|-------|-------|
| Elección de framework frontend | 7 — Delegate | Equipo tiene expertise demostrada |
| Definición de estándares de código | 5 — Advise | Manager aconseja, equipo decide |
| Distribución de tareas entre sprints | 4 — Agree | Se decide en sprint planning |
| Horarios de trabajo | 7 — Delegate | Total autonomía del equipo |
| Presupuesto de herramientas | 3 — Consult | Manager decide tras consultar |
| Proceso de code review | 5 — Advise | Equipo define su proceso |
| Comunicación con stakeholders | 2 — Sell | Gerencia comunica, equipo execute |
| Selección de candidatos para contratación | 5 — Advise | Equipo evalúa, gerencia decide |

## Errores comunes

1. **Crear el tablero y nunca revisarlo**: El tablero se obsoleta si no se mantiene vivo
2. **No incluir todos los dominios relevantes**: Si falta un dominio importante, sigue habiendo ambigüedad
3. **Confundir el nivel actual con el nivel deseado**: Primero mapea dónde están, luego define dónde quieren estar
4. **Hacerlo solo el manager**: Sin la participación del equipo, el tablero es una imposición, no un contrato
5. **Ignorar las señales**: Si el tablero dice "Delegate" pero el manager sigue interviniendo, el tablero pierde credibilidad

## Beneficios del Delegation Board

- **Visibilidad**: Hace visible algo que normalmente es invisible
- **Alineación**: Todos tienen la misma comprensión de las reglas del juego
- **Redución de conflictos**: Las expectativas explícitas previenen malentendidos
- **Base para feedback**: Proporciona un marco para discutir desviaciones
- **Onboarding**: Los nuevos miembros entienden rápidamente la dinámica de decisiones

Para un enfoque más analítico de la delegación, consulta la [[12-matriz-decision-delegacion]].
