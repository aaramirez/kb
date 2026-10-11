---
title: "Qué es un harness de IA: construcción en vivo de un harness para depurar errores de Sentry"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/fundamentos
  - arnes/flujos-de-trabajo
channel: "How I AI"
speaker: "Claire Vo (How I AI)"
videoId: "ofS-4RRw9zw"
source: "https://www.youtube.com/watch?v=ofS-4RRw9zw"
language: "en"
playlistOrder: 29
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "What is an AI harness? I build one live in less than 30 minutes"
related:
  - "[[ofS-4RRw9zw - que-es-un-harness-construido-en-vivo|Transcripción]]"
---

# Qué es un harness de IA: construcción en vivo de un harness para depurar errores de Sentry

En este episodio del podcast *How I AI*, la presentadora y fundadora de ChatPRD intenta desmitificar el término "harness" y muestra el primer harness que ha construido. Es un harness específico para investigar y triar errores de Sentry en su empresa. Tiene una interfaz de terminal (TUI), su núcleo corre sobre el **Claude Agent SDK** y está conectado a Sentry, Vercel, Linear y GitHub mediante adaptadores muy opinados. Formato: explicación conceptual breve, demo en vivo, recorrido por la arquitectura y el código, y una receta final.

Para el harness engineering es un contrapunto práctico frente a los harnesses de propósito general como Claude Code o Codex. Defiende que, para trabajos concretos y repetitivos, conviene "microgestionar" al agente con código: intención implícita, herramientas restringidas, pasos con prompts propios y artefactos estructurados garantizados en cada ejecución.

## Resumen

- **Definición mínima**: "Un harness es código alrededor de un agente de IA que lo hace más eficaz". Ese código puede contener IA, pero no tiene por qué.
- **Tres partes**: contexto específico, acciones específicas y resultados (outcomes) específicos.
- **Cuándo construir uno**: cuando el mismo flujo necesita la misma configuración y los mismos resultados, sobre todo si combina pasos deterministas y no deterministas.
- **Por qué no basta un agente de código general**: con un harness el agente ya conoce la intención, se restringen las herramientas (p. ej. modo "solo investigar") y el proceso se repite igual siempre, sin vigilarlo.
- **Arquitectura del demo**: TUI o CLI → *runs* con input y flags → núcleo en Claude Agent SDK (Sonnet 4.6) → adaptadores a Sentry, Vercel, Linear y GitHub → almacén de artefactos.
- **Adaptadores opinados en lugar de MCP genérico**: se define exactamente qué datos sacar de cada herramienta para el caso del bug, en vez de dejar que el agente deambule.
- **Prompts codificados en pasos**: el prompt específico de cada paso se ejecuta siempre, a diferencia de una skill, que puede no invocarse.
- **Los modelos se resistían a poner IA en el harness**: GPT-5.5 y Opus tendían a construir algo totalmente determinista. Hay que ser muy específico con el flujo, las herramientas y dónde van los prompts.
- **Cambio de mentalidad**: restringir el trabajo de agentes especializados y orquestarlos con un agente general da más apalancamiento que el chat abierto.
- **"Un wrapper es solo un harness"**: Cursor, Codex y Claude Code son harnesses complejos, y el principio es el mismo.

## Contenido estructurado

### Qué es un harness y cuándo tiene sentido

La autora quiere desmitificar un término del que "todo el mundo dice que no es el modelo, es el harness", pero que pocos definen:

> "Un harness es simplemente código alrededor de un agente de IA que lo hace más eficaz. ¿Puede ese código tener IA? Claro. ¿Tiene que tenerla? No necesariamente. ¿Cuál es el objetivo? Hacer mejor a la IA."

**Partes de un harness**: contexto específico, capacidad de ejecutar acciones específicas y un objetivo de resultados específicos.

**Cuándo construirlo**: "cuando el mismo flujo necesita la misma configuración y los mismos resultados". Es parecido a cuándo construir un agente, y a veces los conceptos se intercambian. Encaja especialmente con una combinación de pasos deterministas y no deterministas, procesos paso a paso y uso de herramientas para un trabajo concreto, normalmente algo complejo.

**Casos de uso**:
- Código (por eso proliferan los harnesses de código: es un trabajo con herramientas y un flujo estándar).
- Gestión de incidentes en producción, preparación de PRs para release, escalados de soporte, migraciones.
- Casos no técnicos: investigar o consolidar documentación "de una forma muy específica".

### Elección del caso: depurar errores de Sentry

Buscó en su negocio (ChatPRD) algo que hiciera de forma repetida y en lo que la IA rendiría mejor con más estructura. Eligió el triaje de bugs ("despliego código, así que despliego bugs"):
- Ya lo hacía con Claude Code o Codex y con herramientas internas propias.
- Requiere código, contenido y contexto propios.
- Tiene resultados obligatorios: registrar todo en Linear y escribir documentos de seguimiento para el resto del equipo de ingeniería.

### Por qué no usar directamente una herramienta de código general

> "Con un trabajo específico, a veces quieres microgestionar un poco. Quieres ser más prescriptivo sobre cómo se hace."

Ventajas concretas:
- **Intención implícita**: con Claude Code habría que escribir "Querido agente, por favor arregla este bug" y pegar el enlace. Con el harness basta con pegar el enlace, porque el agente ya conoce el trabajo.
- **Herramientas restringidas**: por ejemplo, un harness de solo investigación que nunca escribe código y solo explora y explica la causa raíz.
- **Repetibilidad**: cada bug de Sentry corregido queda documentado en Linear con un informe concreto, y quizá con seguimiento a los clientes afectados. "Podrías codificarlo en una skill, pero tendrías que vigilarla". Con el harness ocurre siempre.
- **Enrutamiento de modelos**: se puede hacer enrutamiento multimodelo de formas que un agente general no permite.

### Demo: la interfaz TUI

- La interfaz es una TUI construida con la librería **Ink**. No tiene por qué ser una TUI: podría ser una CLI o una app web. "El harness es toda la experiencia, incluida la experiencia humana".
- La TUI refleja la estructura del harness: ejecuciones previas, errores, cómo se arreglaron y el proceso (reunir evidencia → transmitir la actividad → construir artefactos).
- Lanza una investigación sobre un error real: operaciones de edición que los agentes pierden a veces. Pulsa **I** (investigar) en lugar de **F** (arreglar), así que no se modifican archivos sin necesidad de pedirlo en el prompt. Se abre una sesión del Claude SDK que reúne evidencia y formula una hipótesis de causa raíz.

### Arquitectura

- **Frontend**: TUI o CLI.
- **Run**: cada invocación es una ejecución de una tarea con un input concreto, normalmente un issue de Sentry.
- **Flags**: permiten editar el código, modificar entradas o enviar mensajes a clientes, solo si se activan y aprueban explícitamente.
- **Núcleo**: Claude Agent SDK, que se encarga de la planificación agéntica con primitivas de Claude Code como leer y escribir archivos.
- **Almacén de artefactos**: como en otros harnesses tipo OpenClaw, guarda en el sistema de archivos toda la evidencia de las ejecuciones para usos futuros.
- **Herramientas reales**: Sentry y Vercel para datos; Linear y GitHub para ejecutar tareas.
- **Modelo**: Claude Sonnet 4.6, "el modelo correcto para este trabajo".
- **Prompts propios por paso**: en vez de "eres Claude Code, no cometas errores", indica que trabaja dentro del harness de ingeniería de ChatPRD, que no es un sistema de código abierto a cualquier cosa, que los artefactos son la fuente de verdad, el plan para un problema concreto y qué debe devolver.
  > "No tengo que copiar y pegar esto, ni siquiera ponerlo en una skill esperando que se invoque bien. Lo codifiqué en un paso concreto del harness para asegurar que el modelo lo siga siempre."
- **Políticas de herramientas**: qué herramientas se pueden llamar y cuáles no.

### Cómo se generó el código

- Lanzó sesiones paralelas de Claude Code y Codex ("dueling") pidiéndoles construir un harness con el Claude Agent SDK.
- No salió a la primera. GPT-5.5 y Opus "querían construir algo súper determinista" y se resistían a meter IA en el harness, así que tuvo que pedirlo de forma muy específica.
- Consejo: ser muy específico sobre el flujo, sobre las herramientas y sobre dónde tienen sentido los prompts propios, y usar un agent SDK (de Claude o de OpenAI) para la mayor parte.
- Curiosamente, Codex fue el que mejor construyó el agente, pero lo implementó con el Claude Agent SDK, combinando modelos y agentes de código.

### Estructura del código

El harness es sencillo: un índice de alto nivel que lleva a la TUI y unos ocho archivos con capacidades concretas.
- **Adaptador de Sentry**: usa la API de Sentry de forma muy concreta.
  > "En vez de usar el MCP de forma genérica y dejar que tu agente de código deambule por todas esas trazas, soy muy preciso sobre exactamente qué necesitas sacar de un informe de bug, qué es útil y qué no, e hice ese conector muy opinado."
- Integraciones igualmente opinadas con Linear, Vercel y GitHub, centradas en cómo usarlas cuando se busca un bug.
- **Flujo bug hunter**: cómo se cazan bugs y cómo se arman los resúmenes.
- **Paquete de artefactos** por ejecución: los mensajes del run, el informe (issue de Sentry, resumen de lo descubierto, logs relevantes, qué hizo el worker de Claude, resumen de salida), un HTML con lo ocurrido y un informe del worker.
- Además de la TUI, comandos CLI para ejecutar el harness contra issues concretos con flags de herramientas, pensados para que otro agente pueda usarlos.

### Reflexión: restringir el trabajo de los agentes

> "Nos acostumbramos al campo de chat abierto... Ahora me di cuenta de que estos agentes pueden resolver problemas muy, muy específicos usando otros agentes, y que restringiendo ese trabajo podemos hacer trabajos concretos de forma muy eficiente y luego usar el agente de propósito general para orquestarlo."

La TUI es para el humano, pero el valor real es dar a un agente general un harness específico para un problema específico.

### Resultado de la investigación

El informe de la ejecución:
- Evidencia confirmada: una advertencia de Sentry (no un error) que afecta a 150 usuarios y sigue ocurriendo cada hora. Los logs de Vercel no estaban disponibles.
- Causas raíz probables ordenadas: rango original inválido o rangos originales solapados, más un punto ciego en una función.
- Dónde está el problema en el producto y cómo verificarlo (obtener un evento raw de Sentry).
- Recomienda crear un issue en Linear y asignarlo, y **no** recomienda activar el modo patch todavía porque necesita más información.

Era exactamente el resultado deseado: evidencia, causas priorizadas, siguiente paso de verificación, decisión sobre Linear y si puede arreglarlo.

### Receta para construir tu propio harness

1. Identificar un flujo concreto y escribirlo ("en papel proverbial": HTML o markdown).
2. Definir cómo es una ejecución (*run*) sobre la tarea.
3. Hacer llamadas muy opinadas a herramientas y fuentes de datos con adaptadores específicos (un MCP puede formar parte, pero no basta con "usa un MCP").
4. Diseñar los artefactos estructurados de salida.
5. Decidir reglas y permisos: qué se le permite al harness y qué no.
6. Elegir con qué correrlo: Claude Code, Codex o un enrutador de modelos.
7. Construir una superficie de interacción (TUI, CLI o app web).
8. Pedirle a Claude Code o Codex que lo construya y probarlo con datos reales.

### Cierre

> "Un harness es simplemente poner algo de estructura alrededor de cómo trabaja la IA."

Cursor, Codex y Claude Code son harnesses muy complejos, pero siguen siendo código que envuelve agentes y llamadas a la IA para hacer mejor un trabajo. La autora llega a plantear que "un wrapper es solo un harness". (El episodio incluye patrocinios de Bolt.new y Customer.io.)

## Conceptos clave

- **Harness**: código alrededor de un agente de IA que lo hace más eficaz para un caso de uso concreto, con o sin IA en ese código.
- **Harness específico vs. de propósito general**: el primero prescribe flujo, herramientas y resultados; el segundo (Claude Code, Codex) da herramientas y contexto amplios.
- **Run**: cada invocación del harness sobre una tarea con un input concreto y flags.
- **Flags de capacidad**: interruptores que habilitan acciones de riesgo (editar código, contactar clientes) solo bajo aprobación.
- **Adaptador opinado**: integración a medida que extrae solo los datos relevantes de una herramienta para el flujo, en lugar de un MCP genérico.
- **Almacén de artefactos**: evidencia y resultados persistidos en disco como fuente de verdad para ejecuciones futuras.
- **Prompt codificado en un paso**: instrucción fijada en el código del harness que se ejecuta siempre, frente a una skill que puede no invocarse.
- **Restricción como apalancamiento**: acotar el trabajo de agentes especializados y orquestarlos con uno general.

## Herramientas y referencias mencionadas

- Claude Agent SDK, Claude Sonnet 4.6, Claude Code, Codex, GPT-5.5, Opus, Cursor, OpenClaw
- Sentry, Vercel, Linear, GitHub, MCP
- Ink (librería para TUIs)
- ChatPRD
- Patrocinadores: Bolt.new, Customer.io

## Referencias

- Transcripción: [[ofS-4RRw9zw - que-es-un-harness-construido-en-vivo|Transcripción completa]]
- Video: [What is an AI harness? I build one live in less than 30 minutes](https://www.youtube.com/watch?v=ofS-4RRw9zw) — How I AI
