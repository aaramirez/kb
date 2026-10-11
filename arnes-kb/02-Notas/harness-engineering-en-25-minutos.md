---
title: "Harness engineering explicado con la analogía del chip del teléfono"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/herramientas-y-sandbox
channel: "Mayank Aggarwal"
speaker: "Mayank Aggarwal"
videoId: "DYUqTQAW-To"
source: "https://www.youtube.com/watch?v=DYUqTQAW-To"
language: "en"
playlistOrder: 46
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering in 25 Minutes"
related:
  - "[[DYUqTQAW-To - harness-engineering-en-25-minutos|Transcripción]]"
---

# Harness engineering explicado con la analogía del chip del teléfono

Mayank Aggarwal presenta en formato explicativo (pizarra y diapositivas, en inglés) qué es el *harness engineering*. Parte del caso de LangChain, que subió su agente Deep Agents del top 30 al top 5 de Terminal Bench 2.0 sin cambiar el modelo, y construye toda la explicación sobre una analogía: el LLM es el chip de un teléfono, al que todos tienen acceso; lo que diferencia un producto de otro es todo lo que se construye alrededor.

El video es útil como introducción conceptual: sitúa el harness engineering como la tercera etapa tras el prompt engineering y el context engineering, enumera cinco componentes del arnés (configuración, herramientas conectadas, verificación, reglas que se hacen cumplir solas y subagentes) y propone un cambio de mentalidad: cada error del agente es una regla o un control que falta, no un motivo para cambiar de modelo.

## Resumen

- **Mismo modelo, mejor resultado**: LangChain pasó de 52,8 a 66,5 en Terminal Bench 2.0 (+13,7) sin cambiar el modelo, solo mejorando el arnés de Deep Agents.
- **El LLM es el chip**: todas las empresas usan los mismos chips (Snapdragon, etc.); nadie compra el chip solo, se compra el teléfono completo. Igual, nadie paga por el LLM en sí, sino por el ecosistema construido alrededor.
- **Progresión en tres etapas**: prompt engineering (2022, qué decir), context engineering (2025, qué mostrar) y harness engineering (2026, construir el mundo en el que opera el agente).
- **Del encargo a la meta**: con agentes como Claude Code o Codex ya no se pide una tarea puntual sino una meta completa (una aplicación, un PRD), con ejecuciones largas, de 20–50 pasos y sin supervisión.
- **Cinco componentes**: configuración de comportamiento (CLAUDE.md), acceso a herramientas (archivos, Git, MCP), segunda pasada de verificación, reglas que se hacen cumplir solas (hooks) y chips especializados (subagentes con contexto limitado).
- **Instrucciones frente a reglas forzadas**: decir "no hagas esto" en CLAUDE.md no basta; los hooks bloquean acciones peligrosas (`DROP TABLE`, `rm -rf`) y obligan a pasar las pruebas antes de dar algo por terminado.
- **Cada error es una corrección**: cuando el agente falla no se reemplaza el modelo; se busca qué regla o qué control faltaba y se añade para que el error no se repita.
- **Valor económico**: usar siempre el modelo más caro sale muy caro; quien domina el arnés obtiene más del mismo "cerebro" y los mismos tokens.
- **Siguiente paso: loop engineering**: comandos como `/goal` o `/loop` y varias sesiones paralelas de Claude Code abren una disciplina posterior.

## Contenido estructurado

### El caso LangChain y Terminal Bench 2.0

El autor arranca con un artículo de LangChain sobre cómo mejoraron Deep Agents con harness engineering. En el leaderboard de Terminal Bench 2.0 (una competición de referencia para agentes) estaban alrededor del puesto 26–27; sin cambiar el modelo entraron en el top 5, con una puntuación que subió de 52,8 a 66,5.

> "En lugar de pensar 'estamos sacando un mal puesto, esperemos a que salga un modelo nuevo o mejor', trabajaron sobre lo mismo, añadieron un arnés y lograron entrar en el top 5."

Según el autor, entre las técnicas que LangChain describe está la autoverificación del agente: comprobar el trabajo contra la especificación y ejecutar las pruebas.

### La analogía del chip

- Todos tenemos acceso a los mismos modelos: Claude Opus, los GPT de OpenAI, Gemini y modelos abiertos como GLM 5.2 (barato y con buenos resultados).
- En Android, muchos fabricantes usan el mismo chip; lo que cambia es la cámara, la pantalla, la carcasa, la refrigeración, los protocolos de seguridad y el ajuste del software.
- **Mala configuración**: ajustes por defecto, refrigeración débil, sin plan térmico, pipeline de cámara genérico, el teléfono se sobrecalienta: resultado pobre con el mismo chip.
- **Buena configuración**: software afinado, buena refrigeración, plan térmico real y pipeline de cámara construido alrededor del chip, que se aprovecha al máximo.

> "Regla rápida: mismo chip, misma potencia bruta, pero la configuración que lo rodea decide el resultado."

La misma idea vale para el motor de un coche: con la misma potencia, unos fabricantes ofrecen mucha mejor experiencia que otros.

**Ejemplo personal: Poco F1.** Su primer teléfono llevaba el Snapdragon 845, el mismo que otros fabricantes como OnePlus. Poco añadió una refrigeración líquida que evitaba el sobrecalentamiento, y con el mismo chip el teléfono rendía mucho mejor. En lugar de esperar al 855, exprimieron el 845.

### Evolución: de prompt a contexto a arnés

| Etapa | Época | Pregunta central | Características |
|---|---|---|---|
| Prompt engineering | 2022 | Qué decirle | Un mensaje, una respuesta; la redacción manda; falla en tareas de varios pasos; útil para tareas simples y puntuales |
| Context engineering | 2025 | Qué mostrarle | Acceso a archivos correctos, memoria y recuperación; funciona dentro de una sola sesión |
| Harness engineering | 2026 | En qué mundo opera | Reglas, herramientas, controles y límites; nivel de control; pensado para ejecuciones largas y sin supervisión |

> "Ya no le pedimos a la IA que escriba un correo. Le pedimos que cree un sistema completo. Por eso tenemos que darle el mundo entero en el que opera: reglas, herramientas, controles, límites."

Los agentes ahora corren durante horas con acceso a la máquina (Claude Code, Claude Cowork). La pregunta deja de ser "qué le muestro" y pasa a ser "cómo controlo el mundo en el que opera".

### Los cinco componentes del arnés

1. **La configuración que le dice cómo comportarse**: un archivo escrito que el agente necesita antes de hacer nada, con instrucciones concretas, no un genérico "haz un buen trabajo". Ejemplo: `CLAUDE.md`. En el teléfono equivale a los ajustes por defecto: qué está permitido, qué está bloqueado y qué necesita aprobación del usuario. Dos teléfonos con el mismo chip pueden venir ajustados uno para gaming y otro para batería (Samsung orientado a uso profesional, iQOO a gaming).
2. **El hardware conectado**: a qué tiene acceso el agente: archivos, Git, herramientas conectadas mediante MCP. El chip más potente es inútil si el sensor de la cámara no está conectado. Sin estos accesos, da igual que el modelo sea Claude Opus, Fable o Mythos.
3. **La segunda pasada**: alguien tiene que revisar el resultado antes de darlo por terminado: una prueba, un control, a veces una segunda IA revisando, o un humano en el bucle. Ejemplo: al pedir un CRM completo, el agente se detiene a mitad, toma una captura de la aplicación y se autorrevisa. En el teléfono equivale a la ráfaga de fotos de la que se elige la mejor tras analizar encuadre, exposición y ruido.
4. **La regla que se hace cumplir sola**: en vez de escribir "no hagas esto" en CLAUDE.md, se configuran reglas que nada puede saltarse. En el teléfono, una app no accede a tus fotos sin pedir permiso. En IA, son los **hooks** en `settings.json` (según el autor, funcionan en Codex y en Claude):
   - Bloquear `DROP TABLE` o `rm -rf` antes de que se ejecuten.
   - Antes de declarar algo terminado, ejecutar `npm test`; si alguna prueba falla, el agente primero lo arregla.
   > "Se disparan solas, sin preguntar. Detienen las acciones riesgosas antes de que ocurran."
5. **El chip especializado**: como la GPU o la TPU que acompañan al chip principal, los **subagentes** reciben un traspaso con contexto controlado y limitado, y pueden trabajar en paralelo.

### Definición

El autor lee una definición encontrada en internet:

> "El harness engineering es la disciplina de diseñar el sistema, las herramientas y el entorno de ejecución que rodean al modelo de IA. Define qué puede ver el modelo, qué herramientas puede llamar, cómo valida sus propias decisiones y cuándo debe detenerse, llevando la IA de prompts básicos a sistemas autónomos fiables."

Elementos que menciona: guías *feed-forward* (como AGENTS.md), sensores y bucles de evaluación de feedback, linters, parsers de salida, lógica de validación, ejecución en sandbox (entorno seguro con permisos restrictivos) y orquestación.

### Cambio de mentalidad: cada error es una corrección

> "Si la cámara de tu teléfono no rinde, el fabricante no recoge todos los teléfonos para cambiarles el chip. Publica una actualización."

- Si el agente hace algo mal, no se cambia el modelo.
- Preguntas: ¿qué regla faltaba? ¿qué control no existía todavía?
- Se añade la regla o el control para que el mismo error no se repita.

El autor relaciona esto con los presupuestos de IA que se agotan en las empresas: con el mismo cerebro y el mismo número de tokens, unas personas sacan mucho más que otras, y eso explica por qué las empresas buscan "harness engineers". Menciona también otras lecturas que recomienda: el artículo de OpenAI sobre harness engineering con Codex en un mundo *agent-first* y "Skill issue: harness engineering for coding agents".

### Loop engineering y Claude Code como arnés

- Más allá de una sesión larga aparece el **loop engineering**: en Claude, comandos como `/goal` o `/loop` hacen que el agente trabaje por sí mismo en varias tareas, genere un plan y lance varias sesiones; también se pueden abrir varias ventanas de Claude Code en paralelo.
- Resume un diagrama: prompt engineering = qué decir; context engineering = qué ver; harness engineering = construir el mundo completo (restricciones, bucles de feedback, verificación, infraestructura, reglas y permisos alrededor del "cerebro").
- Aclara que los laboratorios siguen creando modelos, pero también construyen el arnés: Claude Code es en sí un arnés completo, con permisos, ejecución de varios pasos y conectores.

> "Todas las aplicaciones que se están haciendo famosas usan de una forma u otra harness engineering por detrás."

## Conceptos clave

- **Harness engineering**: diseñar el sistema, las herramientas, el entorno de ejecución, las reglas y los controles que rodean al modelo para obtener resultados fiables sin cambiarlo.
- **Archivo de configuración (CLAUDE.md / AGENTS.md)**: instrucciones previas sobre cómo debe comportarse el agente en el proyecto; guía *feed-forward*.
- **Segunda pasada**: verificación antes de dar el trabajo por terminado (pruebas, capturas, segunda IA o humano en el bucle).
- **Hooks**: reglas que se ejecutan automáticamente y bloquean acciones o exigen controles; a diferencia de las instrucciones en texto, no se pueden ignorar.
- **Subagentes**: agentes auxiliares que reciben un contexto limitado y controlado y pueden trabajar en paralelo.
- **Prompt, contexto y arnés**: tres etapas de la ingeniería con LLM: qué decir, qué mostrar, en qué mundo opera.
- **"Cada error es una corrección"**: ante un fallo, añadir la regla o el control que faltaba en lugar de cambiar de modelo.
- **Loop engineering**: disciplina emergente de hacer que el agente itere de forma autónoma sobre metas (`/goal`, `/loop`, sesiones paralelas).

## Herramientas y referencias mencionadas

- LangChain Deep Agents y su artículo sobre la mejora con harness engineering
- Terminal Bench 2.0 (leaderboard)
- Claude Code, Claude Cowork, Codex, CLAUDE.md, AGENTS.md, `settings.json` (hooks), MCP
- Modelos: Claude Opus, Fable, Mythos, GPT (OpenAI), Gemini, GLM 5.2
- Artículos: "Harness engineering: leveraging Codex in an agent-first world" (OpenAI), "Skill issue: harness engineering for coding agents"
- Analogías: Snapdragon 845/855, Poco F1, OnePlus, Samsung, iQOO

## Referencias

- Transcripción: [[DYUqTQAW-To - harness-engineering-en-25-minutos|Transcripción completa]]
- Video: [Harness Engineering in 25 Minutes](https://www.youtube.com/watch?v=DYUqTQAW-To) — Mayank Aggarwal
