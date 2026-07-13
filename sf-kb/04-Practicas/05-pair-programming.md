---
title: "Pair Programming y Mob Programming"
tags:
  - sf/practicas
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Pair Programming"
  - "Mob Programming"
  - "Driver-Navigator"
  - "Remote pair"
related:
  - "[[./06-code-review-best-practices|Code Review]]"
  - "[[./02-clean-code|Clean Code]]"
  -  "[[./01-coding-standards|Coding Standards]]"
  -  "[[./03-test-driven-development|TDD]]"
  -  "[[./11-definition-of-done|Definition of Done]]"
  -  "[[../03-Procesos/agile-methodology|Agile Methodology]]"
  -  "[[../05-Herramientas/team-tools|Team tools]]"
  -  "[[../06-Metricas/velocity-metrics|Velocity Metrics]]"
  -  "[[../08-Calidad/READ-LINT|Calidad de código]]"
  -  "[[../01-Fundamentos/collaboration-basics|Collaboration basics]]"
  -  "[[../02-Estrucutra/README|Estructura de contenido]]"
---


# Pair Programming and Mob Programming

## Introducción

Pair programming consiste en dos desarrolladores compartiendo una estación de trabajo: uno escribe código (driver) y el otro revisa en vivo (navigator). Mob programming extiende la idea a todo el equipo, rotando los roles.

## El Rol de Driver y Navigator

| Rol | Responsabilidades |
|------|------------------|
| **Driver** | Escribe el código, enfocado en los detalles técnicos y sintaxis. |
| **Navigator** | Revisa constantemente el código, anticipa errores, plantea enfoques alternativos. |

El navegador piensa en la siguiente acción, mientras que el conductor se concentra en la implementación.

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Reducción de bugs | Dos pares de ojos sobre el mismo fragmento |
| Transfer de conocimiento | Conocimiento tácito se expresa en voz alta |
| Mayor calidad de diseño | Las decisiones se discuten mientras se toman |
| Menos interrupciones | La pareja actúa como una unidad |
| Mejora en comunicación | Fomenta vocabulario compartido |

## Pair programming remoto

Herramientas:

- VS Code Live Share
- JetBrains Code With Me
- tmux + tailscale/obico
- ScreenHero / tuple

Para el formato remoto:
- Usar una comunicación de calidad (Mum le voz)
- Rotar el control de la sesión cada 20-30 min.
- Microfono y compartir siempre activados.

## Mob programming

En mob programming el equipo completo colabora en una sola tarea.

### Reglas del Mob

1. Duct schedule: el responsable escribe, los demás observan y sugieren.
2. Rotar el conductor cada 10-15 minutos.
3. El equipo decide el algoritmo y la estructura.
4. Un moderador gestiona la rotación y el tiempo.

### Timeline

```
10:00 - Driver A, rest of team navigators (código checks)
10:15 - Driver B, team navigators
10:30 - Driver C, team navigators
```

### Cuándo usarlo

| Context | pair | mob |
|---------|------|-----|
| Bug complejo | X | X |
| nueva feature | X | X |
| code review | X | X |
| refactoring global |  | X |
| diseño arquitectónico |  | X |
| Onboarding | X | X |

## Errores comunes

- Navegador pasivo: si calla, solo hay un desarrollador. Fomentar el dialogo.
- Driver dictador: el navegador debe tener voz.
- Sesiones demasiado largas: descansar cada 45 min.
- Falta de rotación: un solo par siempre es malo.

## Integración con TDD

Pair programming tiene una afinidad natural con TDD. El navegador escribe la prueba (RED), el driver implementa (GREEN), ambos refactorizan (REFACTOR). Ver [[03-test-driven-development]].

## Métricas de éxito

- Número de defectos fugados — se reduce en pair programming
- Velocidad del equipo — puede no aumentar inicialmente, pero la calidad si
- Satisfacción del equipo: mejora en equipos complementarios

Ver también [[../06-Metricas/velocity-metrics|Velocity metrics]].
