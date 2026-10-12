---
title: "Software Factories con IA (videos)"
tags:
  - sf/fabricas-ia
  - type/indice
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Fábricas de software con IA"
  - "AI Software Factories"
related:
  - "[[Index|SF Knowledge Base]]"
  - "[[../07-IA-Software/README|IA en Software]]"
---

# Software Factories con IA (videos)

Sección 13 del SF KB: cómo se construyen y operan **fábricas de software habilitadas por IA**, en las que agentes de código hacen la mayor parte de la implementación y el trabajo humano pasa a diseñar el sistema que produce el software (specs, harness, verificación, orquestación y métricas). Complementa las secciones conceptuales 01–12 con la experiencia de practicantes.

Fuente: playlist [Software Factories](https://www.youtube.com/playlist?list=PLfZlklpUd4zY) (10 videos). Cada video tiene una **nota en español** (`02-Notas/`) que enlaza las notas conceptuales relacionadas del KB, y su **transcripción fiel en el idioma original** (`01-Transcripciones/`).

Estado: **10 de 10** videos procesados.

## Por tema

### Qué es una fábrica de software con IA

- [[que-son-las-fabricas-de-software-y-cuando-estas-listo|Qué es una fábrica de software con IA y cuándo estás listo para una]] — Patrick Robinson (Lean TECHniques) define la fábrica de software como un proceso repetible automatizado con agentes dentro de guardrails y explica que conviene construirla solo con madurez en IA, flujos repetibles, tests y CI confiables, empezando con algo pequeño a modo de tracer bullet.

### Roles y organización

- [[como-construir-una-fabrica-de-software|Cómo construir una fábrica de software con harness engineering]] — Dru Knox (Tessl) define la fábrica de software como un sistema donde los agentes producen todo el producto y los ingenieros construyen la fábrica, y explica cómo llegar a ella con harness engineering: bucles inner, outer y meta, tres capas de trabajo (plano de control, agent-izar la empresa y bucles de mejora) y métricas de autonomía, automatización y calidad.

### Procesos y flujos de la fábrica

- [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA: el harness no basta]] — Dex Horthy (HumanLayer) sostiene que la fábrica de software lights-out fracasa porque el RL de los modelos no premia la mantenibilidad, y propone volver a leer el código apoyándose en una planificación asistida por IA (producto, arquitectura, diseño de programa y vertical slices) para que la revisión sea rápida.
- [[combatir-el-code-slop-estado-de-las-fabricas|Combatir el code slop: el estado de las fábricas de software]] — Dex Horthy (HumanLayer) argumenta con Slop Code Bench que los modelos desatendidos degradan el codebase y propone las '12 Factor Factories' y un modelo de capas (compute, dev environment, harness, control plane) para fábricas que siguen leyendo el código.
- [[fabrica-de-software-automejorable|Una fábrica de software automejorable con agentes especialistas]] — Eric Tech muestra una fábrica open source que convierte la telemetría (Sentry, PostHog) en tickets de GitHub y los procesa con agentes builder, QA y reviewer basados en skills curadas, con testing por capas, bucle de refinamiento de UI y guardrails.
- [[de-ingenieria-de-software-a-ingenieria-de-fabricas|De la ingeniería de software a la ingeniería de fábricas]] — Zach Lloyd (Warp) sostiene que el SDLC se vuelve un bucle automatizado de agentes y que los ingenieros pasarán a construir, medir y ajustar la fábrica que construye el producto, sin perder el gusto de producto humano.
- [[fabrica-de-software-afk-open-source|Sandcastle: una fábrica de software AFK open source con agentes en sandboxes]] — Matt Pocock presenta Sandcastle, una librería TypeScript open source para correr agentes de código AFK dentro de sandboxes Docker. Con ella arma una mini fábrica donde un planner reparte issues de GitHub a implementers que trabajan en paralelo, y luego un reviewer y un merger con agente llevan el trabajo a main.
- [[arquitectura-multiagente-que-entrega|La arquitectura multiagente que sí entrega: Missions de Factory]] — Luke Alvoeiro (Factory) propone cinco patrones multiagente y explica Missions, un sistema de orquestador, workers y validadores. Usa un contrato de validación escrito antes del código, handoffs estructurados, ejecución serial y el modelo adecuado en cada rol para sostener proyectos autónomos de hasta 16 días.

### Prácticas de ingeniería

- [[curso-construir-una-fabrica-de-software-que-funcione|Curso: construir una fábrica de software con agentes que funcione]] — Ross Mike muestra su fábrica de software, unos pocos archivos markdown (AGENTS.md y skills) que no dependen del modelo ni del harness, organizada en Isolate (worktrees), Build (estructura de código), Prove (evidencia before/after) y Ship (bucle con Greptile hasta 5/5) antes del merge humano.

### Herramientas y plataformas

- [[curso-construir-una-fabrica-de-software-que-funcione|Curso: construir una fábrica de software con agentes que funcione]] — Ross Mike muestra su fábrica de software, unos pocos archivos markdown (AGENTS.md y skills) que no dependen del modelo ni del harness, organizada en Isolate (worktrees), Build (estructura de código), Prove (evidencia before/after) y Ship (bucle con Greptile hasta 5/5) antes del merge humano.
- [[fabrica-de-software-afk-open-source|Sandcastle: una fábrica de software AFK open source con agentes en sandboxes]] — Matt Pocock presenta Sandcastle, una librería TypeScript open source para correr agentes de código AFK dentro de sandboxes Docker. Con ella arma una mini fábrica donde un planner reparte issues de GitHub a implementers que trabajan en paralelo, y luego un reviewer y un merger con agente llevan el trabajo a main.

### Métricas y calidad del resultado

- [[como-construir-una-fabrica-de-software|Cómo construir una fábrica de software con harness engineering]] — Dru Knox (Tessl) define la fábrica de software como un sistema donde los agentes producen todo el producto y los ingenieros construyen la fábrica, y explica cómo llegar a ella con harness engineering: bucles inner, outer y meta, tres capas de trabajo (plano de control, agent-izar la empresa y bucles de mejora) y métricas de autonomía, automatización y calidad.

### Agentes, harness y orquestación

- [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA: el harness no basta]] — Dex Horthy (HumanLayer) sostiene que la fábrica de software lights-out fracasa porque el RL de los modelos no premia la mantenibilidad, y propone volver a leer el código apoyándose en una planificación asistida por IA (producto, arquitectura, diseño de programa y vertical slices) para que la revisión sea rápida.
- [[curso-construir-una-fabrica-de-software-que-funcione|Curso: construir una fábrica de software con agentes que funcione]] — Ross Mike muestra su fábrica de software, unos pocos archivos markdown (AGENTS.md y skills) que no dependen del modelo ni del harness, organizada en Isolate (worktrees), Build (estructura de código), Prove (evidencia before/after) y Ship (bucle con Greptile hasta 5/5) antes del merge humano.
- [[combatir-el-code-slop-estado-de-las-fabricas|Combatir el code slop: el estado de las fábricas de software]] — Dex Horthy (HumanLayer) argumenta con Slop Code Bench que los modelos desatendidos degradan el codebase y propone las '12 Factor Factories' y un modelo de capas (compute, dev environment, harness, control plane) para fábricas que siguen leyendo el código.
- [[fabrica-de-software-automejorable|Una fábrica de software automejorable con agentes especialistas]] — Eric Tech muestra una fábrica open source que convierte la telemetría (Sentry, PostHog) en tickets de GitHub y los procesa con agentes builder, QA y reviewer basados en skills curadas, con testing por capas, bucle de refinamiento de UI y guardrails.
- [[de-ingenieria-de-software-a-ingenieria-de-fabricas|De la ingeniería de software a la ingeniería de fábricas]] — Zach Lloyd (Warp) sostiene que el SDLC se vuelve un bucle automatizado de agentes y que los ingenieros pasarán a construir, medir y ajustar la fábrica que construye el producto, sin perder el gusto de producto humano.
- [[fabrica-de-software-afk-open-source|Sandcastle: una fábrica de software AFK open source con agentes en sandboxes]] — Matt Pocock presenta Sandcastle, una librería TypeScript open source para correr agentes de código AFK dentro de sandboxes Docker. Con ella arma una mini fábrica donde un planner reparte issues de GitHub a implementers que trabajan en paralelo, y luego un reviewer y un merger con agente llevan el trabajo a main.
- [[arquitectura-multiagente-que-entrega|La arquitectura multiagente que sí entrega: Missions de Factory]] — Luke Alvoeiro (Factory) propone cinco patrones multiagente y explica Missions, un sistema de orquestador, workers y validadores. Usa un contrato de validación escrito antes del código, handoffs estructurados, ejecución serial y el modelo adecuado en cada rol para sostener proyectos autónomos de hasta 16 días.
- [[como-construir-una-fabrica-de-software|Cómo construir una fábrica de software con harness engineering]] — Dru Knox (Tessl) define la fábrica de software como un sistema donde los agentes producen todo el producto y los ingenieros construyen la fábrica, y explica cómo llegar a ella con harness engineering: bucles inner, outer y meta, tres capas de trabajo (plano de control, agent-izar la empresa y bucles de mejora) y métricas de autonomía, automatización y calidad.
- [[que-son-las-fabricas-de-software-y-cuando-estas-listo|Qué es una fábrica de software con IA y cuándo estás listo para una]] — Patrick Robinson (Lean TECHniques) define la fábrica de software como un proceso repetible automatizado con agentes dentro de guardrails y explica que conviene construirla solo con madurez en IA, flujos repetibles, tests y CI confiables, empezando con algo pequeño a modo de tracer bullet.
- [[harness-de-agente-de-debugging-en-uber|Debug Assist: el harness de agente de debugging de Uber]] — Kriti Dangi presenta Debug Assist, el agente de Uber sobre LangGraph que combina nodos deterministas y LLM, sub-agentes, mitigación por feature flags, validación automática y skills enchufables para hacer unos 9.000 RCAs al mes y subir la tasa de merge de sus PRs del 5 % al 48 %.

### Calidad, verificación y seguridad

- [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA: el harness no basta]] — Dex Horthy (HumanLayer) sostiene que la fábrica de software lights-out fracasa porque el RL de los modelos no premia la mantenibilidad, y propone volver a leer el código apoyándose en una planificación asistida por IA (producto, arquitectura, diseño de programa y vertical slices) para que la revisión sea rápida.
- [[combatir-el-code-slop-estado-de-las-fabricas|Combatir el code slop: el estado de las fábricas de software]] — Dex Horthy (HumanLayer) argumenta con Slop Code Bench que los modelos desatendidos degradan el codebase y propone las '12 Factor Factories' y un modelo de capas (compute, dev environment, harness, control plane) para fábricas que siguen leyendo el código.
- [[fabrica-de-software-automejorable|Una fábrica de software automejorable con agentes especialistas]] — Eric Tech muestra una fábrica open source que convierte la telemetría (Sentry, PostHog) en tickets de GitHub y los procesa con agentes builder, QA y reviewer basados en skills curadas, con testing por capas, bucle de refinamiento de UI y guardrails.
- [[arquitectura-multiagente-que-entrega|La arquitectura multiagente que sí entrega: Missions de Factory]] — Luke Alvoeiro (Factory) propone cinco patrones multiagente y explica Missions, un sistema de orquestador, workers y validadores. Usa un contrato de validación escrito antes del código, handoffs estructurados, ejecución serial y el modelo adecuado en cada rol para sostener proyectos autónomos de hasta 16 días.
- [[que-son-las-fabricas-de-software-y-cuando-estas-listo|Qué es una fábrica de software con IA y cuándo estás listo para una]] — Patrick Robinson (Lean TECHniques) define la fábrica de software como un proceso repetible automatizado con agentes dentro de guardrails y explica que conviene construirla solo con madurez en IA, flujos repetibles, tests y CI confiables, empezando con algo pequeño a modo de tracer bullet.

### DevOps e infraestructura

- [[harness-de-agente-de-debugging-en-uber|Debug Assist: el harness de agente de debugging de Uber]] — Kriti Dangi presenta Debug Assist, el agente de Uber sobre LangGraph que combina nodos deterministas y LLM, sub-agentes, mitigación por feature flags, validación automática y skills enchufables para hacer unos 9.000 RCAs al mes y subir la tasa de merge de sus PRs del 5 % al 48 %.

### Cultura y equipo

- [[de-ingenieria-de-software-a-ingenieria-de-fabricas|De la ingeniería de software a la ingeniería de fábricas]] — Zach Lloyd (Warp) sostiene que el SDLC se vuelve un bucle automatizado de agentes y que los ingenieros pasarán a construir, medir y ajustar la fábrica que construye el producto, sin perder el gusto de producto humano.

### Casos reales

- [[harness-de-agente-de-debugging-en-uber|Debug Assist: el harness de agente de debugging de Uber]] — Kriti Dangi presenta Debug Assist, el agente de Uber sobre LangGraph que combina nodos deterministas y LLM, sub-agentes, mitigación por feature flags, validación automática y skills enchufables para hacer unos 9.000 RCAs al mes y subir la tasa de merge de sus PRs del 5 % al 48 %.

## Playlist completa

| # | Video | Canal | Nota | Transcripción |
|---|-------|-------|------|---------------|
| 1 | [Why Software Factories Fail](https://www.youtube.com/watch?v=Ib5GBkD555M) | AI Engineer | [[por-que-fallan-las-fabricas-de-software\|Por qué fallan las fábricas de software con IA: el harness no basta]] | [[Ib5GBkD555M - por-que-fallan-las-fabricas-de-software\|Transcripción]] |
| 2 | [Building a Software Factory that actually works (Full Course)](https://www.youtube.com/watch?v=_LCeJZFIsd4) | Greg Isenberg | [[curso-construir-una-fabrica-de-software-que-funcione\|Curso: construir una fábrica de software con agentes que funcione]] | [[_LCeJZFIsd4 - curso-construir-una-fabrica-de-software-que-funcione\|Transcripción]] |
| 3 | [Fighting Code Slop: The State of Software Factories - Dexter Horthy](https://www.youtube.com/watch?v=ix1qQK1IvmA) | Agentic AI Foundation | [[combatir-el-code-slop-estado-de-las-fabricas\|Combatir el code slop: el estado de las fábricas de software]] | [[ix1qQK1IvmA - combatir-el-code-slop-estado-de-las-fabricas\|Transcripción]] |
| 4 | [I Built a Self-Improving Software Factory](https://www.youtube.com/watch?v=aggJvNZxfKA) | Eric Tech | [[fabrica-de-software-automejorable\|Una fábrica de software automejorable con agentes especialistas]] | [[aggJvNZxfKA - fabrica-de-software-automejorable\|Transcripción]] |
| 5 | [Software Engineering Is Becoming Factory Engineering — Zach Lloyd, Warp](https://www.youtube.com/watch?v=tUPPVhBBcoM) | AI Engineer | [[de-ingenieria-de-software-a-ingenieria-de-fabricas\|De la ingeniería de software a la ingeniería de fábricas]] | [[tUPPVhBBcoM - de-ingenieria-de-software-a-ingenieria-de-fabricas\|Transcripción]] |
| 6 | [I Open-Sourced My Own AFK Software Factory](https://www.youtube.com/watch?v=E5-QK3CDVQM) | Matt Pocock | [[fabrica-de-software-afk-open-source\|Sandcastle: una fábrica de software AFK open source con agentes en sandboxes]] | [[E5-QK3CDVQM - fabrica-de-software-afk-open-source\|Transcripción]] |
| 7 | [The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory](https://www.youtube.com/watch?v=ow1we5PzK-o) | AI Engineer | [[arquitectura-multiagente-que-entrega\|La arquitectura multiagente que sí entrega: Missions de Factory]] | [[ow1we5PzK-o - arquitectura-multiagente-que-entrega\|Transcripción]] |
| 8 | [Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl](https://www.youtube.com/watch?v=X6l4lpA0_NY) | AI Engineer | [[como-construir-una-fabrica-de-software\|Cómo construir una fábrica de software con harness engineering]] | [[X6l4lpA0_NY - como-construir-una-fabrica-de-software\|Transcripción]] |
| 9 | [Software Factories: What They Are and When You’re Ready for One](https://www.youtube.com/watch?v=Bn-XApeEko0) | Lean TECHniques | [[que-son-las-fabricas-de-software-y-cuando-estas-listo\|Qué es una fábrica de software con IA y cuándo estás listo para una]] | [[Bn-XApeEko0 - que-son-las-fabricas-de-software-y-cuando-estas-listo\|Transcripción]] |
| 10 | [Building a Debugging Agent Harness at Uber - Kriti Dangi](https://www.youtube.com/watch?v=iVCDIOf7vXw) | Agentic AI Foundation | [[harness-de-agente-de-debugging-en-uber\|Debug Assist: el harness de agente de debugging de Uber]] | [[iVCDIOf7vXw - harness-de-agente-de-debugging-en-uber\|Transcripción]] |
