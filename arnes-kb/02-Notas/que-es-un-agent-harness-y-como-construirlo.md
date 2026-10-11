---
title: "Qué es un agent harness y sus nueve componentes"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "Prompt Engineering"
speaker: "Prompt Engineering"
videoId: "nWzXyjXCoCE"
source: "https://www.youtube.com/watch?v=nWzXyjXCoCE"
language: "en"
playlistOrder: 36
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "What is an Agent Harness? and How to build a great one!"
related:
  - "[[nWzXyjXCoCE - que-es-un-agent-harness-y-como-construirlo|Transcripción]]"
---

# Qué es un agent harness y sus nueve componentes

Video explicativo del canal Prompt Engineering (unos 20 minutos) que se propone tres cosas: definir qué es un harness (y qué no es), recorrer nueve componentes que el autor considera esenciales en un harness moderno y mostrar una implementación de referencia mínima en Python. Toma Claude Code como ejemplo principal de un harness bien construido.

Es una buena introducción conceptual al harness engineering: separa con claridad el harness de los frameworks de agentes y ofrece una lista de comprobación arquitectónica (bucle, contexto, tools/skills, subagentes, primitivas, persistencia, system prompt, hooks y permisos) útil para quien diseña o evalúa un harness.

## Resumen

- **Definición**: un harness es una arquitectura fija que convierte un modelo en un agente; el modelo es el motor y el harness es el coche.
- **Harness ≠ framework**: LangChain, LangGraph, AutoGen o CrewAI dan abstracciones que el humano debe ensamblar; un harness entrega un agente que ya funciona, sin paso de ensamblado.
- **Núcleo mínimo**: en esencia, un harness es "un bucle while con un registro de herramientas y una capa de permisos".
- **Convergencia**: Codex, Cursor, Claude Code y Windsurf partieron del mismo problema (editar código en un repositorio real) y llegaron a arquitecturas muy parecidas.
- **Nueve componentes**: bucle de iteración, gestión de contexto, skills y tools, subagentes, skills integradas, persistencia de sesión, ensamblado del system prompt, hooks de ciclo de vida y permisos.
- **Compactación con cuidado**: resumir el historial al acercarse al límite es necesario, pero mal hecho tiene consecuencias graves.
- **Persistencia append-only**: cada evento se escribe como una línea (JSONL) para poder reanudar exactamente donde se quedó.
- **El system prompt es un pipeline**, no un string estático: recorre directorios buscando CLAUDE.md / AGENTS.md; lo estático va primero para no romper el prompt caching.
- **Permisos dinámicos para bash**: el mismo comando puede ser seguro o peligroso; el harness lo clasifica analizando la cadena del comando.
- **Hooks como vía de adopción empresarial**: permiten inyectar lógica antes/después de cada herramienta sin tocar el harness.

## Contenido estructurado

### Qué es (y qué no es) un harness

Los LLM son generadores de texto de un solo disparo: responden y se detienen. El harness les da la capacidad de actuar, ver las consecuencias y seguir hasta resolver el problema.

> "En términos simples, un harness es una arquitectura fija que convierte un modelo en un agente."

> "Piensa en el modelo como el motor y en el harness que lo rodea como el coche."

Ejemplos de harness: las herramientas de programación agéntica (Codex, Cursor, Claude Code, Windsurf). Cada una nació de un problema concreto y han convergido en arquitecturas notablemente similares.

**Frameworks frente a harness**:

| Framework | Harness |
|---|---|
| Ofrece abstracciones (estados, cadenas, memoria, retrievers) | Entrega un agente funcional ya cableado |
| El humano, como arquitecto, ensambla las piezas | No hay paso de ensamblado |
| Construido para que un humano arme un agente | Construido para que el agente ejecute una tarea |

> "Es simplemente un bucle while con un registro de herramientas y una capa de permisos. Y todo viene ya conectado."

Con un harness, el usuario solo aporta el objetivo; el harness se encarga del resto.

### Los nueve componentes (visión arquitectónica)

El autor aclara que la lista es opinada, pero basada en lo que ha visto funcionar en la práctica, y la relaciona con Claude Code.

1. **Bucle while (iteración externa)**: el modelo lee su system prompt, decide qué herramienta llamar, la ejecuta, incorpora el resultado al contexto y vuelve a iterar, hasta que produce una respuesta solo de texto o alcanza un tope de iteraciones. Es "el motor que lo ejecuta todo".
2. **Gestión de contexto**: en cada turno el historial crece (mensajes, llamadas a herramientas). El harness decide qué conservar literal, qué resumir y qué descartar. En Claude Code el presupuesto era de unos 200.000 tokens y ahora llega a 1 millón con Opus; al llegar a cierto umbral (la mitad, o 80–90 %) se dispara la compactación: los mensajes recientes se conservan completos y lo antiguo se resume.
3. **Skills y tools**: las tools son primitivas universales (leer/editar archivos, ejecutar bash, buscar código). Las skills son una capa encima que codifica el conocimiento organizacional, normalmente en archivos Markdown, y son específicas de cada equipo y flujo. El **registro** indica qué hay disponible, qué permiso necesita cada cosa y cómo se despacha la llamada.
4. **Gestión de subagentes**: cuando una tarea es demasiado grande o paralelizable, el harness crea subagentes aislados, cada uno con su sesión, un conjunto restringido de herramientas y un system prompt enfocado. Patrón: lanzar, restringir y recoger resultados.
5. **Skills integradas**: un conjunto base que funciona de serie (operaciones de archivos, ejecución de shell, navegación de código). "Si tu agente no puede leer ni editar archivos, no es un agente de programación". Además, skills de alto nivel como hacer un commit de Git, abrir un pull request o ejecutar tests, algunas específicas del proveedor.
6. **Persistencia de sesión / memoria**: una sesión larga tiene estado; si el proceso se cae, se pierde todo salvo que se escriba a disco. Los harness modernos usan archivos JSON append-only (o Markdown): cada mensaje, resultado de herramienta y evento de compactación ocupa una línea, lo que permite reanudar exactamente donde se quedó. El autor menciona una charla del equipo de Anthropic sobre *managed agents* donde la gestión de sesión estaba separada del propio harness, un diseño que le pareció interesante.
7. **Ensamblado del system prompt**: "el que más sorprende". No es un string estático sino un pipeline que recorre directorios ancestros buscando instrucciones (CLAUDE.md, AGENTS.md) y las inyecta. Precaución: introducir componentes dinámicos rompe el prompt caching.
8. **Hooks de ciclo de vida**: puntos de extensibilidad. Un *pre-tool hook* recibe el nombre y la entrada de la herramienta y puede permitir, denegar o modificar la llamada; un *post-tool hook* inspecciona el resultado. El protocolo es estructurado (JSON con códigos de salida para permitir/denegar). Según el autor, los hooks son la forma en que las empresas adoptan hoy los harness.
9. **Permisos y seguridad**: "la diferencia entre una herramienta útil y una peligrosa". Jerarquía de modos (solo lectura, escritura en el workspace, acceso total); cada herramienta declara el mínimo que necesita y el harness lo aplica en el momento del despacho, antes de ejecutar. Para bash, el harness clasifica el comando dinámicamente (listar archivos = solo lectura; borrar = acceso total). Encima de lo estático, aprobaciones interactivas: el agente pausa y pregunta "¿ejecuto esto?".

### Implementación de referencia en Python

El autor recorre una plantilla mínima pensada como estructura base para quien construya un harness:

- **Motor (bucle while)**: ensambla el system prompt y empieza a iterar; en cada iteración compacta el contexto si ha crecido demasiado; ahí se implementan las llamadas a herramientas y a subagentes. Hay que limitar el número de iteraciones para que nunca corra indefinidamente. "Todos los demás archivos del proyecto existen para dar soporte a estas pocas líneas".
- **Contexto**: compactación simple; si el historial supera cierto punto, se resumen las conversaciones antiguas. Decisión de diseño: al registrar llamadas a herramientas, ¿se guarda todo lo ocurrido o solo entradas y salidas?
- **Registro de tools y skills**: cada herramienta es una pequeña *dataclass* con nombre, nivel de permiso, función manejadora y descripción de una línea. El registro es un diccionario nombre → registro, con funciones `register` (añadir), `get` (recuperar para despachar) y `descriptors` (versión ligera con nombre, permisos y descripción que se envía al modelo). Las skills se registran igual: son tools cuyo manejador lee un archivo Markdown al invocarse.
- **Subagentes**: tres arquetipos (exploración, general y verificación), cada uno con su nivel de permisos, lista restringida de herramientas y system prompt enfocado.
- **Primitivas integradas**: leer archivos, ejecutar bash, etc., según el tipo de trabajo. Deben usar solo la biblioteca estándar, sin dependencias de frameworks.
- **Memoria de sesión**: cada evento se escribe como una línea JSON (prefiere JSON a Markdown). El método `append` abre en modo anexar, escribe y hace *flush* inmediato, de modo que si el proceso cae, la línea ya está a salvo. El método `replay` lee línea a línea y reconstruye la sesión. Al ser append-only, dos ejecuciones pueden compartir el mismo log sin pisarse.

> "Si el harness muere, el archivo no. Esa es toda la historia de la durabilidad."

- **System prompt**: carga dinámica de AGENTS.md, CLAUDE.md u otros archivos de memoria leyendo un directorio. El orden importa: primero la parte estática, después el contenido dinámico, para no romper el *prefix caching*.
- **Hooks**: el pre-tool hook se dispara antes y puede permitir o denegar; el post-tool hook ve la salida pero no puede bloquear nada: sirve para auditoría, logging y observabilidad.
- **Permisos**: niveles `read`, `workspace` y `full`. Clasificación dinámica de comandos: seguros (`ls`, `cat`, `grep`) se quedan en solo lectura; peligrosos (borrar, `sudo`, `shutdown`) saltan a acceso total; el resto, nivel workspace. Además, aprobación explícita del usuario antes de cualquier acción destructiva.

## Conceptos clave

- **Agent harness**: arquitectura fija (bucle + registro de herramientas + capa de permisos) que convierte un modelo en un agente que actúa hasta resolver la tarea.
- **Framework de agentes**: conjunto de abstracciones que un humano debe ensamblar para construir un agente; no es un harness.
- **Bucle de iteración**: ciclo leer prompt → elegir herramienta → ejecutar → incorporar resultado, hasta respuesta solo texto o tope de iteraciones.
- **Compactación**: resumir lo antiguo y conservar lo reciente cuando el contexto se acerca a su límite.
- **Registro de herramientas**: mapa nombre → herramienta con permisos, manejador y descripción; base del despacho.
- **Skill**: conocimiento organizacional encapsulado (normalmente Markdown), implementado como una tool que lee ese archivo al invocarse.
- **Subagente**: instancia aislada con sesión, herramientas restringidas y prompt enfocado para una subtarea.
- **Log append-only (JSONL)**: persistencia de sesión línea a línea que permite reanudar y es resistente a caídas.
- **Hooks pre/post-tool**: puntos de extensión para permitir/denegar/modificar llamadas o auditarlas.
- **Clasificación dinámica de permisos**: determinar el nivel de permiso de un comando bash analizando su contenido.

## Herramientas y referencias mencionadas

- Claude Code (Anthropic), Codex (OpenAI), Cursor, Windsurf — ejemplos de harness.
- LangChain, LangGraph, AutoGen, CrewAI — ejemplos de frameworks (no harness).
- CLAUDE.md / AGENTS.md — archivos de instrucciones inyectados en el system prompt.
- Charla del equipo de Anthropic sobre *managed agents* (sesión separada del harness).
- Python (implementación de referencia con biblioteca estándar).
- Coursera (patrocinador del video).

## Referencias

- Transcripción: [[nWzXyjXCoCE - que-es-un-agent-harness-y-como-construirlo|Transcripción completa]]
- Video: [What is an Agent Harness? and How to build a great one!](https://www.youtube.com/watch?v=nWzXyjXCoCE) — Prompt Engineering
