---
title: "Qué es una fábrica de software con IA y cuándo estás listo para una"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/fundamentos
  - sf/calidad
channel: "Lean TECHniques"
speaker: "Patrick Robinson (Lean TECHniques)"
videoId: "Bn-XApeEko0"
source: "https://www.youtube.com/watch?v=Bn-XApeEko0"
language: "en"
playlistOrder: 9
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Software Factories: What They Are and When You’re Ready for One"
related:
  - "[[Bn-XApeEko0 - que-son-las-fabricas-de-software-y-cuando-estas-listo|Transcripción]]"
  - "[[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]]"
  - "[[../../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]]"
  - "[[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]]"
  - "[[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]]"
  - "[[../../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización con IA]]"
---

# Qué es una fábrica de software con IA y cuándo estás listo para una

Charla breve (formato "Lean Bites", unos 13 minutos) de la consultora Lean TECHniques. Tras la presentación de Jason Buck (director de desarrollo de negocio), Patrick Robinson, staff engineer de la firma, intenta "desmitificar" el término *software factory* frente a la avalancha de interpretaciones que circulan: propone una definición de trabajo sencilla, muestra cómo se ve una fábrica desde lo mínimo hasta un ciclo SDLC completo y, sobre todo, enumera los prerrequisitos para que tenga sentido construir una.

Para una software factory con IA es una pieza introductoria y pragmática: sitúa la fábrica como el siguiente paso natural de quien ya usa coding agents, la ancla en la madurez de IA de la organización y recuerda que sin tests, CI confiable y guardrails la fábrica solo acelera en la dirección equivocada.

## Resumen

- **Definición de trabajo**: una fábrica de software es un sistema que automatiza un proceso repetible usando agentes dentro de límites, checks o guardrails.
- **Forma libre**: puede ser una cadena de skills, llamadas a agentes o un programa determinista que reutiliza harnesses (propios o de terceros).
- **Disparadores variados**: un ticket en la intake, una cola, un cron job o cualquier evento.
- **El humano, solo donde importa**: la fábrica abstrae al humano del loop excepto en los puntos más importantes; la *dark factory* (sin humanos) queda fuera del alcance de la charla.
- **Alguien debe responder**: siempre hay una aprobación al final, porque un agente no puede ser responsable de lo que entrega.
- **"Si usas coding agents, ya eres la fábrica"**: si repites los mismos prompts y skills, el siguiente paso es automatizarlos retirándote de forma responsable.
- **Empezar pequeño**: los PRs de Dependabot o actualizaciones menores de dependencias son una fruta al alcance de la mano.
- **Madurez antes que fábrica**: la madurez de IA de la organización debe preceder a las conversaciones sobre una fábrica completa.
- **Cuatro señales de preparación**: flujo repetible, tareas e instrucciones de repo claras, tests y CI confiables, y capacidad de detectar errores de los agentes.
- **La IA amplifica lo que ya hay**: rubber stamping, tests lentos y requisitos difusos se agravan con una fábrica.
- **Guardrails primero y tracer bullet**: construir los componentes antes que la fábrica entera.

## Contenido estructurado

### Una definición de trabajo

Patrick parte de una definición deliberadamente simple: un sistema que automatiza un proceso repetible usando agentes dentro de algún tipo de límites, checks o guardrails. A partir de ahí la forma concreta es muy variable: una agrupación de skills, una aplicación determinista que reutiliza harnesses o el harness propio de cada equipo.

> "Lo que realmente queda al final es que tienes un sistema que automatiza el proceso de hacer tu desarrollo de software usando agentes."

La entrada puede ser una persona que deja un ticket en la intake de la fábrica, o bien una cola, un cron job o un evento. Dentro de lo que llama la "caja negra" se puede poner human in the loop en cualquier punto; el objetivo de la fábrica es retirar al humano salvo donde su intervención es más valiosa.

### Evolución: de cadena de skills a dark factory

- **Inicio**: una cadena de skills cuyo output se observa y se aprueba manualmente paso a paso.
- **Extremo**: la *dark factory*, sin ningún humano en el loop, que corre sola. El ponente la declara "un tema completamente distinto" y centra la charla en fábricas con humanos, configurables para intervenir donde se quiera.
- **Aprobación final**: en su diagrama siempre hay una aprobación al final.

> "Lo que sea que produzca, tienes que hacerte dueño de ello. Los agentes no pueden ser responsables de algo; alguien tiene que serlo."

### "Tú ya eres la fábrica"

Si un desarrollador ya usa coding agents para investigar el problema, construir historias, implementar requisitos, hacer checks y testing y revisar PRs (idealmente también con agentes, que encuentran cosas que el ojo humano no ve), entonces ya está operando como fábrica de forma manual. Pensar en una software factory es el siguiente nivel: preguntarse cómo retirarse de cada interacción de forma responsable sin perder visibilidad de lo que ocurre, "dónde el humano puede dar un paso atrás y el agente dar un paso al frente".

### Empezar pequeño y la fábrica madura

Como primer caso propone las actualizaciones de dependencias (p. ej. PRs de Dependabot): suelen ser menores y con poco *blast radius*. Ejemplo de flujo:

1. Un cron job lanza un agente que revisa los PRs de dependencias.
2. Comprueba que estén al día y que los tests y checks de CI estén en verde ("y que confíes en tus checks verdes").
3. Aprueba y fusiona automáticamente, o, si se quiere mantener al humano, hace una primera pasada y deja su visto bueno.

En el otro extremo muestra una fábrica madura que cubre todo el SDLC (aclara que no es el modelo definitivo, sino uno de los que ha visto):

| Etapa | Contenido |
|---|---|
| Intake | Cuáles son los requisitos |
| Triage | ¿Hay que dividir el trabajo? |
| Spec | Especificaciones que el agente debe seguir (no necesariamente *spec-driven development*) |
| Build / Review / Verify | Construcción, revisión y verificación |
| Ship | Crear el PR y desplegar |
| Monitor | Feedback para que la fábrica se corrija si se equivocó |

Menciona también la *self-healing factory*, una fábrica que corrige sus propios problemas. Insiste en que los nombres y el número de cajas varían según la fábrica.

### Madurez de IA: cuándo tiene sentido

Lean TECHniques maneja cuatro etapas de madurez en IA con impacto creciente (individuo, equipo, departamento, organización). Sin detallarlas, Patrick las mapea con la fábrica:

- **Etapa 1 (individual)**: el equipo se está acostumbrando a los coding agents; no es momento de empezar con una fábrica.
- **Etapa 2 (equipo)**: aparecen componentes de fábrica: skills compartidas, acuerdos de trabajo sobre cómo usar IA, abordar problemas y dividir tickets.
- **Etapa 3 (departamento)**: puede tener sentido un *domain-specific harness*, otra forma de llamar a una fábrica, pero específica de un repo en lugar de una "navaja suiza" genérica y reutilizable.
- **Etapa 4 (agéntica, organización)**: toda la organización puede operar con el modelo de fábrica, definir estándares y construir una fábrica real, sea un harness completo o un conjunto estándar de skills.

> "Diría que la madurez de IA a nivel de organización debería venir antes de hablar de una fábrica de software completa e impulsarla."

### ¿Estás listo? Cuatro señales

Una lista "no exhaustiva" de prerrequisitos; si falta alguno, por ahí hay que empezar:

1. **Un flujo de trabajo que repetir**: sin repetición la fábrica no tiene sentido.
2. **Tareas claras e instrucciones de repo**: si no existen, o si son "increíblemente largas", hay que revisarlas.
3. **Tests y un pipeline de CI en el que confíes**: son lo que "mantiene honestos a los agentes".
4. **Capacidad de detectar cuándo se equivocan los agentes**: requiere familiaridad práctica con cómo responden al codebase, al prompting y a las skills.

### La IA amplifica lo que ya existe

> "La IA amplifica lo que ya está ahí."

- Si ya se aprueban PRs sin revisar (*rubber stamping*), entrarán más bugs.
- Si los tests son lentos, el cuello de botella de PRs crecerá.
- Si los requisitos son difusos, "irás muy rápido en la dirección equivocada", algo muy fácil con una fábrica.

### Guardrails: que el único camino sea el correcto

Para Patrick lo más importante antes de tener una fábrica son los guardrails: restringir a los agentes para que el único camino que puedan tomar sea el aprobado. Enumera tipos, estándares de revisión, linters, tests y el proceso de build y CI/CD. Así el agente tiene más probabilidad de acertar y el equipo "puede dormir por la noche" mientras la fábrica trabaja; el atractivo de la fábrica es precisamente que sigue funcionando cuando tú no.

### Componentes antes que fábrica: tracer bullet

- Con los checks y guardrails en su sitio, buscar algo que se repita y automatizar solo una parte.
- Probarlo y ver si convence.
- Aplicar un *tracer bullet*: hacer que una cosa funcione bien y construir encima.

Cierre: una fábrica es "un proceso repetible automatizado con agentes dentro de límites y checks", disparable por cualquier trigger; y el momento es cuando hay un flujo repetido y ya se confía en agentes supervisados. Tarea para la semana: elegir un flujo e intentar automatizarlo. La charla termina con un QR a la *agent readiness assessment* de Lean TECHniques, que puntúa si un repo está listo para agentes.

## Conceptos clave

- **Software factory (fábrica de software)**: sistema que automatiza un proceso repetible de desarrollo usando agentes dentro de límites, checks o guardrails.
- **Dark factory**: fábrica sin ningún humano en el loop que corre de forma totalmente automática.
- **Self-healing factory**: fábrica que, gracias al monitoreo y feedback, corrige sus propios errores.
- **Domain-specific harness**: fábrica específica de un repo o dominio, en contraste con una fábrica genérica tipo "navaja suiza".
- **Human in the loop**: puntos de intervención humana configurables; la fábrica los reduce a los más importantes, con aprobación final obligatoria.
- **Guardrails**: tipos, estándares de revisión, linters, tests, build y CI/CD que restringen al agente al camino correcto.
- **Tracer bullet**: lograr que una sola pieza funcione bien de extremo a extremo antes de construir encima.
- **Blast radius**: alcance del daño potencial de un cambio; criterio para elegir los primeros flujos a automatizar.

## Relación con el SF KB

- [[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]] — aporta una definición mínima de la fábrica "agéntica": proceso repetible + agentes + guardrails, con humano responsable al final.
- [[../../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]] — introduce una escala de cuatro etapas de madurez en IA (individuo → organización) como condición previa para una fábrica completa.
- [[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]] — refuerza que tests y una CI confiable son el prerrequisito que "mantiene honestos a los agentes" y permite la autoaprobación.
- [[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]] — sitúa la fábrica entre la cadena de skills supervisada y la dark factory, con human in the loop configurable.
- [[../../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización con IA]] — el caso de Dependabot con cron job y agente ilustra el punto de entrada práctico a la automatización.

Ver también, en esta sección: [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA]] (crítica a la fábrica lights-out) y [[como-construir-una-fabrica-de-software|Cómo construir una fábrica de software con harness engineering]].

## Herramientas y referencias mencionadas

- Lean TECHniques (consultora) y su formato de charlas "Lean Bites".
- Dependabot (PRs de actualización de dependencias).
- Modelo de cuatro etapas de madurez en IA de Lean TECHniques.
- Agent readiness assessment de Lean TECHniques.

## Referencias

- Transcripción: [[Bn-XApeEko0 - que-son-las-fabricas-de-software-y-cuando-estas-listo|Transcripción completa]]
- Video: [Software Factories: What They Are and When You’re Ready for One](https://www.youtube.com/watch?v=Bn-XApeEko0) — Lean TECHniques
