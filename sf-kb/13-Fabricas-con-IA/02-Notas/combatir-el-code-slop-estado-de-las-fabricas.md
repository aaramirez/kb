---
title: "Combatir el code slop: el estado de las fábricas de software"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/calidad
  - sf/procesos
channel: "Agentic AI Foundation"
speaker: "Dex Horthy (HumanLayer)"
videoId: "ix1qQK1IvmA"
source: "https://www.youtube.com/watch?v=ix1qQK1IvmA"
language: "en"
playlistOrder: 3
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Fighting Code Slop: The State of Software Factories - Dexter Horthy"
related:
  - "[[ix1qQK1IvmA - combatir-el-code-slop-estado-de-las-fabricas|Transcripción]]"
  - "[[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA]]"
  - "[[../../01-Fundamentos/02-evolucion-software-factory|Evolución de la Software Factory]]"
  - "[[../../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos de IA en Desarrollo]]"
  - "[[../../03-Procesos/08-code-review-proceso|Proceso de Code Review]]"
  - "[[../../04-Practicas/13-feature-flags|Feature Flags]]"
  - "[[../../02-Estructura/14-plataforma-interna|Internal Developer Platform (IDP)]]"
---

# Combatir el code slop: el estado de las fábricas de software

Charla breve (unos 16 minutos, pensada inicialmente para 25) de Dex Horthy, CEO y cofundador de HumanLayer, en un evento de la Agentic AI Foundation. Es una versión condensada y actualizada de su argumento sobre por qué la fábrica *lights-off* no funciona (ver [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA]]): repasa la historia de la software factory, sostiene con datos que los modelos desatendidos degradan la calidad del codebase y propone un primer borrador de "12 Factor Factories", un conjunto de prácticas (en realidad nueve) para construir fábricas que sigan leyendo el código sin perder velocidad.

Para una software factory con IA aporta dos cosas concretas: una lista accionable de prácticas (planificar, alinear visualmente, dar *back pressure* a los agentes, reglas anti-slop, feedback de usuarios e incidentes directo a la fábrica, experimentación con feature flags, aprendizaje de sesiones) y un modelo de capas de la infraestructura de la fábrica (compute, dev environment, harness y control plane) donde cada capa se puede comprar o construir.

## Resumen

- **El hype vs. los datos**: mientras se popularizaba "solo construye loops, ya no hagas prompts", un informe de mayo mostraba menor calidad de code review, más PRs sin revisión, más incidentes por PR y más bugs por desarrollador desde la adopción masiva (enero, con Opus 4.5). Para Dex no es un problema de habilidad: "los datos dicen lo contrario".
- **La software factory no es una idea de IA**: existe desde 1968, el mismo año en que se acuñó "ingeniería de software"; la fábrica agéntica es la misma fábrica de 2022 con agentes en lugar de personas en algunos pasos.
- **El cuello de botella se desplaza a la revisión**: el agente construye en minutos u horas, pero revisar sigue tomando horas o días; la respuesta extrema es la fábrica lights-off, que deja de revisar el código.
- **Tesis central**: los modelos desatendidos no mejoran ni mantienen la calidad del codebase con el tiempo; para pedirles que mejoren hay que entender el código, y entonces ya no es desatendido.
- **La mantenibilidad no tiene oráculo rápido**: el RL necesita un verificador, y el costo de la mala arquitectura se mide en meses o años.
- **Slop Code Bench lo evidencia**: con requisitos revelados de forma incremental, el mejor modelo al lanzarse (GPT-5.5) obtuvo 14,8 %; los modelos más recientes mejoran apenas 1–1,5 puntos.
- **Mientras tanto, hay que leer el código**: de ahí las "12 Factor Factories", empezando por planificar antes de construir y gestionar el "dolor esperado".
- **Loops = forward pressure + back pressure**: qué dispara trabajo nuevo y qué feedback recibe el agente mientras trabaja para escalar hacia un resultado sin depender de un humano.
- **Nueva forja de software**: sesiones, planes, prompts y documentos de arquitectura necesitan un sistema de registro centralizado, como GitHub lo fue para el código.
- **Cuatro capas comprables o construibles**: compute, dev environment, harness y control plane; HumanLayer trabaja en el control plane.

## Contenido estructurado

### Contexto: HumanLayer y el ruido del hype

Dex pregunta al público quién escribe el 100 % de su código con IA (muchos) y quién intenta leer todo ese código (también muchos). HumanLayer construye un espacio de trabajo multijugador para coding agents y "bloques de construcción para constructores de software factories", con foco en un área que considera desatendida: problemas difíciles en codebases complejos, con cientos de ingenieros y cientos de repos.

> "Cualquiera puede construir —no es trivial, pero se puede— un pipeline de ticket a PR o de mensaje de Slack a PR para las cosas pequeñas. Nuestro foco es cómo colaboramos de verdad, como ingenieros y equipos, en las cosas grandes."

Frente a la moda de los loops del verano anterior, cita un informe publicado en mayo: desde enero, cuando "todos adoptamos Opus 4.5 y decidimos que esto ya era suficientemente bueno", la calidad del code review bajó, muchos PRs se saltan la revisión, los comentarios son más largos y numerosos, y suben los incidentes por PR y los bugs por desarrollador.

### Breve historia de la software factory

- **1968**: el término software factory nace el mismo año que "ingeniería de software".
- **Fábrica circa 2022**: equipo (ingenieros, PMs, un GM o CEO con la visión) → tracker (Linear, Jira, Beads) → alguien toma un ítem y lo construye → pruebas automatizadas y manuales → pull request → batería de checks (cientos de checks de CI, escaneos de seguridad) → revisión humana → si algo falla vuelve al constructor; si no, a producción con rollouts, feature flags y canarios → los usuarios piden features, se quejan y reportan errores → vuelve a la cola. Más el monitoreo que "despierta a los ingenieros a las 3 de la mañana".
- **Fábrica agéntica**: "no cambia mucho"; el agente construye en lugar de la persona. Todos tienen su "pequeño agente de ticket a PR". Se añaden code review agéntico y pruebas de regresión agénticas, pero la revisión puede seguir siendo el cuello de botella.
- **Fábrica lights-off**: "estoy cansado de revisar código, los ingenieros senior lo odian; ¿y si dejamos de revisarlo?". En teoría, invirtiendo en todo lo demás, podría acercarse a funcionar.

### La tesis: el slop se acumula

> "Los modelos desatendidos no mejorarán ni mantendrán la calidad de tu codebase con el tiempo."

Los modelos se volvieron muy buenos en 2026 resolviendo problemas, pero no mejorando la calidad del codebase. Puedes pedirles que lo mejoren, pero tienes que saber qué pedir, lo que exige entender el código: deja de ser desatendido.

La explicación (desarrollada en una charla suya de junio) está en cómo se hace RL: los benchmarks pueden incentivar "hacer trampa", pasar los tests sin premiar buena arquitectura.

> "El costo de la mala arquitectura se mide en meses y años. Para hacer reinforcement learning necesitas un oráculo, un verificador [...] y la mantenibilidad no tiene un oráculo rápido."

No se descubre que el código era feo hasta dos meses después, cuando alguien recibe una alerta a las 3 de la mañana.

### Slop Code Bench y el estado de los modelos

- **Slop Code Bench** (laboratorio de la Universidad de Wisconsin): en vez de dar todo el problema de entrada, revela el desafío por partes, haciendo que el modelo escriba código, luego otra feature, luego otra; esto se parece mucho más a cómo se construye software de verdad.
- Al lanzarse, GPT-5.5 era el mejor modelo y obtuvo **14,8 %**: un benchmark "muy poco saturado", frente a scores de 95 % en Terminal Bench que sugieren que "el código está resuelto".
- Anthropic publicó un postmortem admitiendo un problema de seguridad causado por código desordenado acumulado con el tiempo; el autor del benchmark señaló que ya existía un benchmark que probaba que los modelos generan código descuidado con el tiempo.
- La vieja broma "el código es slop, pero será problema de GPT-7": "estamos en GPT-6 y no creo que hayamos mejorado mucho en esto". Los modelos nuevos (Astra, y Sol en modo x-high) superan a GPT-5.5 por solo 1–1,5 puntos porcentuales: mejoran, pero no tan rápido como algunos sostienen. Hay quienes piden públicamente "tareas de RL sobre abstracción y centralización".
- **Steve Yegge** (Gas Town), que durante un año dijo que quien siguiera leyendo el código se quedaría atrás, reconoció recientemente que si no se vigila a los modelos escriben código slop y construyen algo tan complejo que ni ellos mismos pueden depurarlo.

Conclusión: si el código de modelos desatendidos empeora con el tiempo, por ahora hay que leer el código.

### "12 Factor Factories" (en realidad nueve)

1. **Planificar antes de construir**: 20–30 minutos al inicio pueden ahorrar horas de revisión. Es lo que los equipos ya sabían antes de la IA: si construir y revisar toma horas o días, conviene alinear la arquitectura antes (sprint planning, refinamiento). Pero sin sobreplanificar.
2. **Gestionar el dolor esperado**: un prompt de dos frases "en YOLO" tiene quizá 50 % de probabilidad de requerir rehacer cosas; una spec detallada escrita a mano durante 5 horas, quizá 10 %; escribir todo a mano durante 20 horas, 0 % de retrabajo causado por el agente (aunque igual habrá que arreglar cosas: para eso existía el code review). Hay que moverse por esa curva según la tarea, el codebase y el problema.
   > "No discuto con mi coding agent en medio de la planificación sobre de qué color será el botón, porque sé que puedo cambiarlo después. [...] Planificar consiste en eliminar el dolor esperado."
3. **Alinear visualmente**: HumanLayer publicó una skill open source llamada *show me* (unas 20 000 instalaciones) para que el modelo entregue la información sin "muros de prosa agéntica", y para acordar cómo dividir los stacked PRs y en qué orden hacer los cambios.
4. **Ayudar a los agentes a probar su trabajo**: darles un navegador, dejarles ejecutar la app, usar curl, grabar videos: darles *back pressure*.
5. **Reglas anti-slop**: para TypeScript, el repositorio de Dylan Mulroy con unas cien reglas que catalogan los antipatrones que los agentes introducen; también se pueden aprovechar ideas del paper de Slop Code Bench.
6. **Alimentar la fábrica con el feedback de usuarios**: en lugar de leer tickets de soporte y convertirlos en tickets de Jira, leer el ticket junto con el PR que el agente ya preparó. En incidentes, que la alerta llegue con el PR que el agente cree que lo resuelve:
   > "Aunque solo puedas fusionar el 50 % de esos, es una diferencia enorme en tu throughput: te despiertas, fusionas el PR y vuelves a dormir."
7. **Dejar que los modelos experimenten**: darles herramientas de feature flags para proponer tres versiones de una feature. Los modelos hacen UIs bonitas pero no las "ven" como nosotros; mostrar tres UIs a los usuarios y medir cuál entienden es la forma de dar back pressure de UI.
8. **Loops = forward pressure + back pressure**: desmitifica los loops. Forward pressure: qué dispara trabajo nuevo (schedules, automatizaciones, webhooks). Back pressure: el feedback durante el trabajo para que el agente haga *hill climbing* hacia un resultado sin acudir a un humano.
9. **Componer con el tiempo**: aprender de sesiones pasadas; analizar las sesiones del equipo, detectar con qué luchan y llevarlo a skills o memoria.

### La nueva forja de software

Antes se enviaban parches de git por listas de correo (Linus aún lo hace para el kernel); hoy casi todos usan GitHub: protocolo descentralizado, lugar centralizado. Ahora otras partes del SDLC son de primera clase: trazas de sesión, documentos de arquitectura, planes, prompts. La versión "nativa de IA" de la lista de correo es copiar algo del agente, pegarlo en Slack o Teams, que el compañero lo pegue en su agente y devuelva la respuesta. Se necesita un sistema de registro centralizado para sesiones, planes y prompts.

### Las capas de la fábrica

Cada capa se puede comprar o construir:

| Capa | Qué resuelve | Ejemplos |
|------|--------------|----------|
| Compute | Dónde corren los agentes | Pods libres en Kubernetes, Daytona, E2B |
| Dev environment | Lenguaje, runtime, preview environments, acceso a servicios internos en la VPC para que el agente pruebe su trabajo | — |
| Harness | El agente de código en sí | "Hay un montón de opciones"; HumanLayer abrirá su harness propio |
| Control plane | Despachar trabajo, colaborar en sesiones y planes | HumanLayer |

HumanLayer se presenta como un espacio de trabajo colaborativo compartido: ver lo que hace todo el equipo, entrar en la sesión de un compañero, invitar a co-promptear (incluso una sesión de Claude Code corriendo en el portátil), colaboración de artefactos tipo Google Docs/Notion dentro de la sesión, y diffs que se transmiten a la nube mientras el agente escribe, para hacer code review sin esperar al pull request. Recursos en humanlayer.dev/resources, organizados cronológicamente por "eras" de aprendizaje.

## Conceptos clave

- **Code slop**: código descuidado y difícil de mantener que los agentes acumulan cuando trabajan sin supervisión.
- **Fábrica lights-off**: fábrica en la que nadie revisa el código generado por agentes.
- **Oráculo / verificador**: señal automática que el RL necesita para premiar; la mantenibilidad carece de uno rápido.
- **Slop Code Bench**: benchmark de la Universidad de Wisconsin que revela requisitos de forma incremental y mide la degradación del código.
- **Dolor esperado (expected pain)**: probabilidad de tener que cambiar algo multiplicada por lo doloroso del cambio; guía cuánto planificar.
- **Back pressure**: feedback que el agente recibe mientras trabaja (tests, navegador, curl, experimentos con usuarios).
- **Forward pressure**: disparadores que inician trabajo nuevo (schedules, automatizaciones, webhooks).
- **12 Factor Factories**: nombre provisional de las prácticas de Dex para fábricas de software.
- **Software forge nativa de IA**: sistema de registro centralizado para sesiones, planes, prompts y documentos de arquitectura.
- **Control plane**: capa que despacha trabajo y permite colaborar en sesiones y planes.

## Relación con el SF KB

- [[../../01-Fundamentos/02-evolucion-software-factory|Evolución de la Software Factory]] — recorre de nuevo la evolución (1968 → fábrica de 2022 → agéntica → lights-off) y subraya que la fábrica agéntica es esencialmente la misma de siempre.
- [[../../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos de IA en Desarrollo]] — aporta evidencia concreta de la degradación de calidad: Slop Code Bench (14,8 %), el postmortem de Anthropic y la falta de un oráculo de mantenibilidad para el RL.
- [[../../03-Procesos/08-code-review-proceso|Proceso de Code Review]] — defiende seguir leyendo el código y reducir el costo de revisión planificando antes; propone revisar diffs en streaming sin esperar al PR.
- [[../../04-Practicas/13-feature-flags|Feature Flags]] — amplía su uso: herramientas de feature flags en manos del agente para experimentar con varias versiones y obtener back pressure de UI con usuarios reales.
- [[../../02-Estructura/14-plataforma-interna|Internal Developer Platform (IDP)]] — las capas compute / dev environment / harness / control plane son la plataforma interna de una fábrica agéntica, cada una comprable o construible.

## Herramientas y referencias mencionadas

- HumanLayer (empresa del ponente), skill open source *show me*, humanlayer.dev/resources
- Slop Code Bench (Universidad de Wisconsin), Terminal Bench
- Modelos: Opus 4.5, GPT-5.5, GPT-6, Astra, Sol (x-high), Fable, Opus 4, Sonnet 3.5
- Trackers: Linear, Jira, Beads
- Steve Yegge (Gas Town), Dylan Mulroy (reglas anti-slop para TypeScript), Linus Torvalds (parches por correo)
- Postmortem de seguridad de Anthropic; GitHub; Slack, Teams; Kubernetes, Daytona, E2B; Claude Code
- Concepto de 12-factor agents y context engineering (trabajo previo del ponente)

## Referencias

- Transcripción: [[ix1qQK1IvmA - combatir-el-code-slop-estado-de-las-fabricas|Transcripción completa]]
- Video: [Fighting Code Slop: The State of Software Factories - Dexter Horthy](https://www.youtube.com/watch?v=ix1qQK1IvmA) — Agentic AI Foundation
