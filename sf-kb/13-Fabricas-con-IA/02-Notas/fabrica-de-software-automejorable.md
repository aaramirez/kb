---
title: "Una fábrica de software automejorable con agentes especialistas"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/procesos
  - sf/calidad
channel: "Eric Tech"
speaker: "Eric Tech"
videoId: "aggJvNZxfKA"
source: "https://www.youtube.com/watch?v=aggJvNZxfKA"
language: "en"
playlistOrder: 4
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "I Built a Self-Improving Software Factory"
related:
  - "[[aggJvNZxfKA - fabrica-de-software-automejorable|Transcripción]]"
  - "[[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../../03-Procesos/02-kanban-software|Kanban en Desarrollo de Software]]"
  - "[[../../08-Calidad-Seguridad/02-testing-piramide|La Pirámide de Testing]]"
  - "[[../../04-Practicas/12-observabilidad-practicas|Observabilidad — Prácticas]]"
---

# Una fábrica de software automejorable con agentes especialistas

Video tutorial (unos 12 minutos) del canal Eric Tech, cuyo autor se presenta como exingeniero senior de IA en Amazon y Microsoft. Muestra la fábrica de software que dice usar desde hace meses y que ha publicado como open source: un conjunto de skills que recogen tickets automáticamente desde la telemetría (Sentry, PostHog), los ponen en un tablero de GitHub Projects y los hacen pasar por agentes especialistas (builder, QA, reviewer) que imitan a un equipo de desarrollo real. Al terminar, el ciclo vuelve a recoger tickets, de modo que la aplicación "se mejora a sí misma".

Para una software factory con IA es un ejemplo práctico, a escala de desarrollador individual o equipo pequeño, de cómo cerrar el bucle *monitoreo → backlog → construcción → QA → revisión → monitoreo* con skills curadas, trazabilidad en GitHub Issues, bloqueos para aprobación humana y guardrails mediante hooks. Tiene parte de promoción (comunidad de pago del autor), que la nota omite.

## Resumen

- **Ciclo autónomo y automejorable**: la telemetría (Sentry, PostHog) genera tickets que la fábrica procesa y, al terminar, vuelve a recoger más.
- **Agentes especialistas como un equipo real**: builder, QA y reviewer; si QA no aprueba, el ticket vuelve al builder para revisiones.
- **Trazabilidad total en GitHub Issues**: descripción, pull requests y comentarios de cada agente quedan en el issue para que cualquier agente o humano vea qué se hizo.
- **Tablero kanban como plano de control**: los tickets avanzan columna por columna; si requieren aprobación humana pasan a *blocked*.
- **Agnóstica de harness y modelo**: funciona con Claude Code o Codex y se puede cambiar de modelo.
- **Preparación antes de escribir código**: una skill que pregunta si el código debe existir (escalera de siete peldaños para reutilizar) y Context7 para leer la documentación de dependencias.
- **QA por capas**: unitarias primero, luego integración y componentes, y solo al final end-to-end con Playwright o Cypress.
- **Revisión enfocada en simplicidad y diseño**: revisión de complejidad, code review y diseño del codebase para refactorizar.
- **Bucle de refinamiento de UI**: diagnosticar → criticar/auditar → corregir → estilizar → animar → pulir → volver a diagnosticar, en varias iteraciones.
- **Guardrails con hooks**: bloquear secretos en el repo, crear archivos de eval de skills y actualizar documentación desactualizada.

## Contenido estructurado

### La idea general

La aplicación se automejora usando telemetría como Sentry y PostHog: de ahí se formulan automáticamente tickets o tareas que atraviesan una fábrica de agentes especialistas en construcción, QA y revisión. El ciclo imita un equipo de producción:

> "Tenemos un builder, un QA y un reviewer, y si el QA no pasa, se lo devuelve al builder para que haga las revisiones."

Cada ticket se rastrea en GitHub Issues: la descripción, los pull requests y los comentarios de cada agente. El autor afirma usar este framework agéntico desde hace meses para construir aplicaciones, corregir bugs y reducir automáticamente el churn de usuarios, con guardrails y hooks para que los agentes construyan "de la forma correcta". Todo está publicado como open source, con skills curadas de su canal y otras propias.

### Arquitectura: super collect y superboard

1. **Telemetría**: Sentry (rendimiento del sistema) y PostHog (analítica de usuarios).
2. **Super Collect**: skill que recoge los problemas *según un calendario* y añade los tickets al tablero de GitHub Projects. También puede recibir ideas de nuevas features (con skills de brainstorming o *grooming*) que se verifican y se pasan al backlog.
3. **Superboard**: skill que orquesta la fábrica de agentes especialistas (construcción, QA, revisión). Los tickets se procesan uno a uno en el tablero kanban; si un ticket necesita aprobación humana, se asigna a *blocked*.
4. **Onboarding sencillo**: configura los checks, la cuenta de GitHub, el tablero, la rama, el system prompt, las políticas y la revisión.

Funciona en cualquier harness (Claude Code, Codex) y con cualquier modelo.

### Super Build: preparación, construcción y checks

Cuando un ticket llega a la columna del builder, `superboard run` dispara **Super Build**, con tres pasos:

**Preparación (antes de escribir código):**
- Una skill muy popular (según el autor, más de 100 000 estrellas en GitHub; el nombre aparece transcrito como "ponytail") para reducir la complejidad, porque los agentes "escriben duplicado tras duplicado". Aplica una escalera de siete peldaños para decidir si el código debe escribirse: ¿la feature necesita existir? ¿ya está en el codebase (utilidades, componentes reutilizables)? ¿hay una librería estándar o una feature nativa de la plataforma? ¿una dependencia ya instalada lo resuelve? ¿se puede hacer en una línea? Menos código implica menos tokens, menos tiempo y menos costo.
- **Context7**: leer la documentación real de las dependencias (Vercel, React, NestJS, librerías de terceros) para que la IA sepa cómo usarlas antes de escribir una sola línea.

**Construcción:** usa las skills de Matt Pocock, que el autor eligió tras revisar en su canal varios frameworks de spec-driven development (GSD, gstack, Superpowers) por ser ligeras y seguir buenas prácticas: *implement* para nuevas features, *diagnose* para bugs y *codebase design* para refactorizaciones.

**Checks y handoff:** verificaciones, code review y una skill *humanizer* para que la IA no use palabras complejas que dificulten la lectura. El handoff resume lo completado y lo publica en el GitHub Issue.

### Super QA: verificar la completitud del ticket

Para el autor es la parte más importante:

> "Un feature pequeño, una vez publicado, puede usarlo millones o cientos de millones de personas, y un solo bug puede causar un costo real en una aplicación en producción."

Lo que diferencia esta skill es usar las librerías de testing adecuadas para cada ticket y respetar las capas:

- Probar primero la capa base: tests unitarios.
- Luego integración y tests de componentes (por ejemplo, componentes React que dependen de funciones y hooks).
- Solo al final, end-to-end con Playwright o Cypress para la UI.
- En backend, además, stress tests y tests de integración (no detallados en el video).

> "Playwright es en realidad el último paso del testing."

### Super Review

Incluye una revisión de complejidad (la misma skill de reducción de código), un code review y la skill de *codebase design* para asegurar que el código quede bien refactorizado.

### Bucle de refinamiento de UI

Skill propia para cuando una página o componente "parece AI slop". Se apoya en las skills de Matt Pocock y en **Impeccable** (una skill para diseñar UIs "menos AI slop"):

1. Se da una dirección (rediseño de página o componente) y los problemas observados.
2. El agente hace preguntas para aclarar la intención.
3. Bucle: diagnosticar (criticar, auditar) → corregir (*harden*, *clarify*) → estilos → movimiento (animaciones) → pulido → volver a diagnosticar.
4. Suele correr un par de iteraciones hasta lograr un diseño claramente mejor que el inicial.

### Subskills y guardrails

- **git sync**: resuelve conflictos, hace pull y escribe buenos mensajes de commit.
- **Hooks de guardrails**: bloquear que se escriban secretos en el repositorio, configurar automáticamente archivos de eval de las skills y actualizar la documentación desactualizada.

### Puesta en marcha

Tres pasos: instalar, ejecutar el onboarding (verifica que todas las dependencias estén conectadas) y lanzar el superboard, que reparte el trabajo entre varios agentes en paralelo (máximo unos tres) para vaciar los tickets de la columna *ready*.

## Conceptos clave

- **Fábrica automejorable**: ciclo en el que la telemetría de producción genera tickets que la propia fábrica resuelve, y vuelve a empezar.
- **Agentes especialistas**: builder, QA y reviewer, cada uno con su conjunto de skills curadas.
- **Super Collect / Superboard / Super Build / Super QA / Super Review**: las skills que componen la fábrica del autor.
- **Escalera de "¿debe existir este código?"**: siete comprobaciones para reutilizar antes de escribir código nuevo.
- **Testing por capas**: unitarias → integración/componentes → end-to-end.
- **Bucle de refinamiento de UI**: iteración diagnosticar–corregir–pulir para eliminar el aspecto de "AI slop".
- **Blocked para aprobación humana**: punto de intervención humana dentro del tablero.
- **Guardrails con hooks**: controles automáticos (secretos, evals, documentación) que se ejecutan junto a los agentes.

## Relación con el SF KB

- [[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]] — ejemplo concreto de orquestación con agentes especialistas (builder, QA, reviewer) coordinados por una skill y un tablero, con bucle de retorno al builder.
- [[../../03-Procesos/02-kanban-software|Kanban en Desarrollo de Software]] — el tablero de GitHub Projects actúa como sistema kanban de la fábrica agéntica, con columnas por especialista, estado *blocked* y límite de paralelismo (unos tres agentes).
- [[../../08-Calidad-Seguridad/02-testing-piramide|La Pirámide de Testing]] — el Super QA aplica explícitamente la pirámide: base unitaria, luego integración/componentes y E2E solo al final.
- [[../../04-Practicas/12-observabilidad-practicas|Observabilidad — Prácticas]] — la observabilidad (Sentry, PostHog) deja de ser solo diagnóstico y pasa a ser la fuente automática del backlog de la fábrica.

## Herramientas y referencias mencionadas

- Telemetría: Sentry, PostHog
- GitHub Issues, GitHub Projects, pull requests
- Harness: Claude Code, Codex
- Skills: Context7, skills de Matt Pocock (implement, diagnose, codebase design), Impeccable, humanizer, skill de reducción de complejidad (transcrita como "ponytail"), skills de brainstorming/grooming (transcritas como "wayfinders"), git sync
- Frameworks de spec-driven development revisados: GSD, gstack, Superpowers
- Testing: Playwright, Cypress
- Dependencias de ejemplo: Vercel, React, NestJS

## Referencias

- Transcripción: [[aggJvNZxfKA - fabrica-de-software-automejorable|Transcripción completa]]
- Video: [I Built a Self-Improving Software Factory](https://www.youtube.com/watch?v=aggJvNZxfKA) — Eric Tech
