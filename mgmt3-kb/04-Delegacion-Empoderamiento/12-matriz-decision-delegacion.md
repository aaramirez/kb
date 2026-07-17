---
title: "Matriz de Decisión y Delegación"
tags:
  - mgmt3/delegacion
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Delegación y Empoderamiento"
aliases:
  - "Decision-delegation matrix"
  - "Matriz de delegación"
related:
  - "[[01-siete-niveles-autoridad]]"
  - "[[03-delegation-board]]"
  - "[[11-cuando-no-delegar]]"
  - "[[07-who-decides-what]]"
---

## Matriz de Decisión y Delegación

La Matriz de Decisión y Delegación es una herramienta que combina **dos dimensiones clave** — el impacto de la decisión y la madurez del equipo — para determinar el nivel de delegación más adecuado. Es una guía práctica para tomar decisiones sobre delegación de manera consistente y fundamentada.

> **"La delegación no debe ser un acto de intuición — debe ser un proceso informado."**

## Las dos dimensiones

### Dimensión 1: Impacto de la Decisión

Evalúa qué tan significativa es la decisión en términos de:

| Nivel | Impacto | Ejemplos |
|-------|---------|----------|
| **Bajo** | Reversible, bajo costo de error, afecta solo al equipo | Elección de librería menor, formato de documentación interna, horarios de reuniones |
| **Medio** | Semi-reversible, costo moderado, afecta a varios equipos | Selección de framework, proceso de CI/CD, estándares de testing |
| **Alto** | Difícil de revertir, costo alto, afecta a la organización | Arquitectura de plataforma, selección de proveedor cloud, contratación clave |
| **Crítico** | Irreversible o muy costoso de revertir, afecta a clientes/market | Stack de producción, datos de clientes, compliance regulatorio |

### Dimensión 2: Madurez del Equipo

Evalúa qué tan preparado está el equipo para esta decisión específica, usando los [[05-madurez-auto-organizacion|niveles de madurez]]:

| Nivel | Madurez | Características |
|-------|---------|-----------------|
| **Baja** | Dirigido/Guiado | Equipo nuevo, poca experiencia en el dominio, sin track record |
| **Media** | Contributivo/Autogestionado | Experiencia moderada, ha tomado decisiones similares antes, resultados aceptables |
| **Alta** | Auto-organizado/Auto-dirigido | Expertos en el dominio, track record demostrable, alta confianza acumulada |

## La matriz

```
                    MADUREZ DEL EQUIPO
                    Baja        Media       Alta
IMPACTO   Bajo   │ Tell(1)  │ Sell(2)   │ Agree(4)   │
DE LA     Medio  │ Tell(1)  │ Consult(3)│ Advise(5)  │
DECISIÓN  Alto   │ Tell(1)  │ Sell(2)   │ Inquire(6) │
          Crítico│ Tell(1)  │ Tell(1)   │ Sell(2)    │
```

Los números entre paréntesis corresponden a los [[01-siete-niveles-autoridad|Siete Niveles de Autoridad]].

## Cómo usar la matriz

### Paso 1: Evaluar la decisión

Para la decisión que estás considerando, responde:

1. **¿Cuál es el impacto?** — ¿Qué tan significativa es esta decisión?
2. **¿Cuál es la madurez del equipo en este dominio?** — ¿Han tomado decisiones similares antes con éxito?

### Paso 2: Ubicar en la matriz

Cruza las dos dimensiones para obtener el nivel de delegación recomendado.

### Paso 3: Ajustar al contexto

La matriz es una guía, no una regla absoluta. Ajusta según:

- **Urgencia**: Situaciones urgentes pueden justificar niveles más bajos temporalmente
- **Información disponible**: Si el equipo no tiene toda la información, ajusta hacia abajo
- **Consecuencias colaterales**: Si la decisión afecta a otros equipos significativamente, considera más control
- **Reversibilidad**: Decisiones muy reversibles pueden tolerar niveles más altos de delegación incluso con menor madurez

### Paso 4: Documentar y comunicar

Registra la decisión y el nivel de delegación en el [[03-delegation-board]]. Comunica al equipo:

- "Para esta decisión, estamos en nivel [X] porque [razón]"
- "Cuando [condición], podemos subir a nivel [Y]"

## Ejemplos prácticos

### Ejemplo 1: Elección de base de datos

- **Impacto**: Alto (difícil de revertir, afecta toda la arquitectura)
- **Madurez del equipo en este dominio**: Alta (equipo senior con experiencia en múltiples BDD)
- **Matriz sugiere**: Inquire (nivel 6)
- **Decisión**: El equipo investiga y presenta recomendación. El manager acepta salvo objeción crítica.

### Ejemplo 2: Proceso de onboarding de nuevos miembros

- **Impacto**: Medio (afecta experiencia de nuevos, semi-reversible)
- **Madurez del equipo**: Media (han onboardeado 2-3 personas antes)
- **Matriz sugiere**: Consult (nivel 3)
- **Decisión**: El manager consulta al equipo y toma la decisión final.

### Ejemplo 3: Cambio de proveedor de CI/CD

- **Impacto**: Medio (afecta workflow del equipo, requiere migración)
- **Madurez del equipo**: Alta (han evaluado y cambiado herramientas antes)
- **Matriz sugiere**: Advise (nivel 5)
- **Decisión**: El equipo decide, el manager aconsejo.

### Ejemplo 4: Reducción de personal

- **Impacto**: Crítico (irreversible, afecta vidas)
- **Madurez del equipo**: Cualquiera
- **Matriz sugiere**: Tell (nivel 1)
- **Decisión**: La gerencia decide y comunica. No es delegable.

## Errores comunes

1. **Usar la matriz como excusa**: "La matriz dice Tell, así que no escucho al equipo" — La matriz es una guía, no una excusa para no escuchar
2. **Ignorar la madurez**: Delegar decisiones de alto impacto a equipos con baja madurez porque "así aprenden" — El aprendizaje tiene un costo que debe ser gestionado
3. **No re-evaluar**: La madurez del equipo cambia — la matriz debe usarse periódicamente
4. **Olvidar el contexto**: La matriz no captura toda la complejidad — úsala como punto de partida, no como respuesta final

## Integración con otras herramientas

- **[[02-delegation-poker|Delegation Poker]]**: Para validar los niveles sugeridos por la matriz con el equipo
- **[[03-delegation-board|Delegation Board]]**: Para documentar los resultados de la matriz
- **[[07-who-decides-what|Mapa de decisiones]]**: Para contextualizar quién es el dueño de cada decisión
- **[[06-limites-de-delegacion|Límites de delegación]]**: Para identificar restricciones que la matriz no captura

## Plantilla de uso rápido

| # | Decisión | Impacto | Madurez Equipo | Nivel Sugerido | Nivel Final | Notas |
|---|----------|---------|----------------|----------------|-------------|-------|
| 1 | | Alto/Medio/Bajo/Crítico | Alta/Media/Baja | 1-7 | | |
| 2 | | | | | | |
| 3 | | | | | | |

Completa esta tabla para las decisiones clave de tu equipo y compártela en una sesión de [[02-delegation-poker]] para calibrar.
