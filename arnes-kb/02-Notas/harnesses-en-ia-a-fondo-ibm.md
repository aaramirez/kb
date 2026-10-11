---
title: "Harnesses en IA a fondo: construir un harness desde cero con Tejas Kumar (IBM)"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "AI Engineer"
speaker: "Tejas Kumar (IBM)"
videoId: "C_GG5g38vLU"
source: "https://www.youtube.com/watch?v=C_GG5g38vLU"
language: "en"
playlistOrder: 27
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harnesses in AI: A Deep Dive — Tejas Kumar, IBM"
related:
  - "[[C_GG5g38vLU - harnesses-en-ia-a-fondo-ibm|Transcripción]]"
---

# Harnesses en IA a fondo: construir un harness desde cero con Tejas Kumar (IBM)

Charla con demo en vivo (unos 20 minutos) de Tejas Kumar, AI developer advocate en IBM, en la conferencia AI Engineer. Parte de la confusión sobre el término "harness" y lo define desde primeros principios; luego construye paso a paso un "harness de pobre" para un agente de navegador que debe entrar en Hacker News y votar la primera noticia, usando a propósito un modelo malo (GPT-3.5 Turbo).

Lo importante para el harness engineering: Kumar **no toca el prompt en ningún momento**. Solo añade código determinista alrededor del bucle (guardrails, compresión de contexto, verificación y un manejador de login) y el resultado pasa de un fallo que miente a un éxito verificado.

## Resumen

- **Dos significados de "harness"**: en machine learning, un test suite/test runner para modelos; en ingeniería de IA, el agent harness.
- **Por qué harness: fiabilidad**. Alquilamos modelos de caja negra con ventanas limitadas y variables que no controlamos; el harness asegura que el agente haga lo que debe.
- **Definición**: el agent harness es todo lo que rodea al modelo y lo ancla a la realidad, a un entorno estable (como el arnés de un escalador o de un perro).
- **Componentes**: registro de herramientas, modelo, primitivas de gestión de contexto, guardrails, bucle del agente y paso de verificación.
- **El harness no es el bucle**: es lo que rodea al bucle; puede ser incluso un bucle alrededor del bucle.
- **Sin harness, el agente miente**: tras topar con la pantalla de login, declara éxito sin verificar.
- **Verificación determinista**: revisar el historial de herramientas elimina la mentira; admitir el fallo es el primer paso.
- **Login determinista desde el harness**: credenciales inyectadas por código, no por el agente; la tarea se completa en seis iteraciones.
- **Modelos baratos + buen harness**: con Qwen, GPT-OSS u otros modelos pequeños se puede llegar muy lejos.
- **Futuro: harnesses dinámicos**: agentes que generan su propio harness antes de ejecutar una tarea.

## Contenido estructurado

### Por qué un harness

Kumar arranca preguntando cuántos se sienten seguros explicando qué es un harness: pocos levantan la mano. La mayoría "paga renta" por cómputo e inferencia (20 dólares al mes por Claude Pro), con ventanas de contexto limitadas, y el modelo alquilado es una caja negra:

> "Podrían, en cualquier momento —no digo que lo hagan—, servirte Sonnet aunque diga Opus, y nunca lo sabrías."

> "El nombre del juego con el harness es la fiabilidad: asegurarse de que los agentes que construimos hagan lo que deben, punto. Independientemente del modelo de caja negra."

### Qué es un harness desde primeros principios

- Un escalador se ancla a la montaña porque es estable y así no puede desviarse demasiado.
- Un perro se pasea con arnés "para que no te lleve a la bancarrota con tokens".
- En ML, un harness es un test suite y test runner: das entradas al modelo y mides la calidad de las salidas. Esta charla trata del **agent harness** de la ingeniería de IA.

> "El agent harness es todo lo que rodea al modelo y le da anclaje en la realidad. Es literalmente lo que lo ata a un entorno estable."

Claude Code es un coding agent, pero un coding agent **con harness**.

### Componentes de un agent harness

1. **Registro de herramientas**: leer y escribir en el sistema de archivos, ejecutar bash (Claude Code, Cursor, Codex).
2. **Modelo**: algunos harnesses permiten elegirlo y otros no.
3. **Primitivas de gestión de contexto**: casi todos compactan su propio contexto.
4. **Guardrails**: por ejemplo, un máximo de pasos ("no más de cinco llamadas a herramientas"); si se supera, se termina la ejecución.
5. **Bucle del agente**: el harness no es solo el bucle, sino lo que lo rodea; puede ser un bucle alrededor del bucle.
6. **Paso de verificación**: en un coding agent, correr lint y tests al terminar para comprobar que nada se rompió.

Se puede tener un harness para cualquier cosa, no solo para código.

### Demo, paso 0: agente sin harness

Proyecto en TypeScript con un prompt fijo ("vota una historia") que no se modificará:

- **Sesión de navegador**: una clase propia sobre Playwright (no Playwright MCP) con un método `open` que lanza Chromium, crea un contexto y una página.
- **Herramientas**: `createTools(browserSession)` devuelve herramientas con el formato del SDK de OpenAI (nombre, descripción, parámetros, `execute`).
- **Contexto**: solo un system prompt muy básico y la tarea del usuario.
- **Bucle**: `while (true)`; si el modelo responde "stop", devuelve el valor; si no, añade los eventos a una traza (historial).

Resultado al ejecutar `npm run agent`: abre Hacker News, pulsa votar, aparece la pantalla de login y el agente entra en pánico y falla, pero **reporta éxito**. Los logs muestran que solo hizo clic en votar y lo dio por bueno sin verificar.

> "¿Cuál es la solución? ¿Insistir con el prompt? No. ¿Cambiar el system prompt para incluir credenciales? No."

### Paso 1: guardrails y compresión de contexto

- `maxIterations`: si hay más de seis pasos, se termina.
- `maxMessages`: si hay demasiados mensajes, se comprime el contexto.
- Una utilidad para componer guardrails; el bucle los aplica y registra metadatos como el tamaño del contexto.
- Compresor deliberadamente ingenuo: conserva el system prompt, el prompt del usuario y los dos mensajes más recientes, y elimina lo del medio. "Hay formas mejores", pero sirve de primer paso.

Después mueve toda la lógica a una función `runHarness`; el `index` queda en unas 19 líneas.

### Paso 2: verificación determinista para dejar de mentir

- `runHarness` pasa a ser un bucle que llama a `runHarnessAttempt` como máximo tres veces (`maxAttempts`): el máximo de pasos se aplica también a nivel del harness.
- Se añade una función de verificación determinista, `verifySuccessfulUpvote`, escrita a mano, que revisa la traza del bucle:
  - Éxito solo si hubo un clic de navegador en votar y fue realmente exitoso.
  - Fallo si la herramienta de autologin del harness devolvió un mensaje que empieza por "failed".
  - Fallo si el autologin no se ejecutó y la página actual es la URL de login (redirección de login no recuperada).

Resultado: el agente sigue fallando, pero ya **no miente**, porque el harness comprueba el historial de herramientas.

> "Esto ya es media batalla ganada, porque el primer paso para resolver un problema es admitir que lo tienes."

### Paso 3: login handler determinista

`createLoginHandler` se ejecuta en cada iteración del bucle, justo antes de registrar la traza:
- Revisa la URL actual de la sesión del navegador; si no es la de login, no hace nada (costo computacional mínimo).
- Si es la de login, rellena credenciales (pueden venir de variables de entorno o de un almacén seguro) y envía el formulario **desde el harness, no desde el agente**, de forma determinista y segura, porque ese archivo tiene acceso a los secretos.
- Añade a la cola un mensaje: "soy el harness, he iniciado sesión, ya puedes seguir".

Resultado: el agente inicia sesión, vota la primera noticia y termina con éxito tras seis iteraciones; Kumar lo comprueba en Hacker News.

> "El harness está literalmente atando al agente a algo estable, algo determinista. Para eso sirve."

### Harnesses en la práctica

Los modelos son no deterministas y queremos hacer más con menos: usar un modelo barato (Qwen, GPT-OSS, que es gratis, o algo más pequeño) con un gran harness. En IBM desarrollan **OpenRAG**, un proyecto open source desplegado en grandes empresas para hacer RAG sobre datos sensibles y aislados (llamadas de Teams, PDFs, facturas), cuyo harness aporta seguridad de nivel empresarial.

Resumen de la demo: no se tocó el prompt ni una vez; se construyó un harness y el resultado cambió radicalmente.

### El futuro: harnesses dinámicos

> "2025 fue el año de los agentes; 2026 es el año de los harnesses. Ojalá 2027 sea el año de los harnesses dinámicos generados sobre la marcha."

La idea: ante una tarea ("cómprame un billete de avión"), el agente genera primero su propio harness, consciente de dónde puede alucinar, como un *plan mode* "con esteroides", y luego ejecuta con guardrails. Kumar lo ve como el siguiente paso lógico hacia la AGI.

## Conceptos clave

- **Agent harness**: todo lo que rodea al modelo y lo ancla a un entorno estable y controlado.
- **Harness en ML**: test suite y test runner para evaluar salidas de modelos (significado distinto).
- **Registro de herramientas**: conjunto de herramientas que el harness expone al modelo.
- **Guardrail**: límite determinista, como máximo de iteraciones, de mensajes o de intentos.
- **Compresión de contexto**: recortar el historial manteniendo system prompt, tarea y mensajes recientes.
- **Paso de verificación**: comprobación determinista del resultado a partir de la traza de herramientas.
- **Login handler**: acción determinista del harness que resuelve un obstáculo conocido sin exponer secretos al agente.
- **Harness dinámico**: harness que el propio agente genera antes de ejecutar una tarea.

## Herramientas y referencias mencionadas

- Claude Code, Cursor, Codex (como agentes con harness); Claude Pro, Opus, Sonnet.
- GPT-3.5 Turbo (modelo usado en la demo), SDK de OpenAI (formato de herramientas), Playwright, Chromium, Hacker News.
- Qwen, GPT-OSS, modelos Watson.
- OpenRAG (proyecto open source de IBM).
- Diapositivas publicadas en GitHub.

## Referencias

- Transcripción: [[C_GG5g38vLU - harnesses-en-ia-a-fondo-ibm|Transcripción completa]]
- Video: [Harnesses in AI: A Deep Dive — Tejas Kumar, IBM](https://www.youtube.com/watch?v=C_GG5g38vLU) — AI Engineer
