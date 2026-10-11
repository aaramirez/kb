---
title: "Needle: un LLM diminuto, offline y acotado a herramientas para automatización confiable"
tags:
  - arnes/nota
  - type/nota
  - arnes/herramientas-y-sandbox
  - arnes/frameworks
channel: "The Next New Thing"
speaker: "Andrew (The Next New Thing) y Henry (Cactus)"
videoId: "tsWOiibaaxA"
source: "https://www.youtube.com/watch?v=tsWOiibaaxA"
language: "en"
playlistOrder: 14
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Better than Jev - because you can build with it"
related:
  - "[[tsWOiibaaxA - alternativa-construible-a-jev|Transcripción]]"
---

# Needle: un LLM diminuto, offline y acotado a herramientas para automatización confiable

Entrevista con demostración en el canal The Next New Thing: el presentador (Andrew) conversa con Henry, de Cactus (empresa respaldada por Y Combinator), sobre **Needle**, un modelo de lenguaje gratuito y open source, lo bastante pequeño (8–29 MB) para integrarse en software o en hardware propio y funcionar sin conexión a internet. El video estuvo motivado porque el repositorio fue tendencia en GitHub (top 10 de la semana). Incluye un segmento patrocinado de Zapier.

Para el harness engineering es relevante porque muestra el extremo opuesto al agente generalista: un modelo cuya fiabilidad proviene casi por completo del **diseño del espacio de acciones** (herramientas declaradas con descripciones estrictas y opciones enumeradas) y de una **puntuación de confianza** que permite decidir si se ejecuta o no una acción. Es el principio de "restringir la salida" llevado a dispositivos.

## Resumen

- **Modelo pequeño, gratuito, privado y offline**: Needle se integra en apps o dispositivos y no necesita llamar a ningún servidor.
- **Salida estructurada como tool calls**: genera instrucciones estructuradas que un sistema de ejecución/automatización debe consumir y ejecutar.
- **La calidad depende del alcance de las herramientas**: cuanto mejor se definan las herramientas disponibles y sus descripciones, mejor el resultado.
- **Opciones enumeradas**: se pueden restringir los parámetros a enums (por ejemplo, adelante, atrás, izquierda); el modelo no debe salir de ese alcance.
- **Prefiere negarse antes que equivocarse**: si la petición no encaja, tiende a no actuar.
- **Puntuación de confianza**: devuelve un score (por ejemplo, 0,97); el desarrollador fija un umbral por debajo del cual no se ejecuta.
- **Limitación como virtud**: no intenta ser terapeuta, programador y controlador del computador a la vez; es "limitado, limitado, limitado".
- **Integración con agentes de código**: basta pasar el `llm.txt` del repositorio a Claude Code para que lo incorpore a la app.
- **Comparación con Jev**: ambos restringen la salida a opciones finitas; Jev es en la nube y basado estrictamente en enums, Needle es en el dispositivo.

## Contenido estructurado

### Qué es Needle y cómo funciona

Primera demostración: un panel de luces domésticas. Henry escribe "apaga todas las luces" y el modelo las apaga; luego "enciéndelas". El presentador lo describe como un humano que habla y un LLM que entiende y actúa con precisión.

Henry explica el mecanismo:

> "Needle en realidad genera instrucciones estructuradas, y buscas algún sistema de ejecución, un sistema de automatización, que las lleve a cabo. Simplemente las llamamos tool calls."

- El modelo recibe una lista de herramientas disponibles (por ejemplo, `set lights`, `set temperature`).
- Gran parte de la calidad depende de **cómo se delimitan esas herramientas** y sus características.

### Ejemplos en software

En la sección "búsqueda y emparejamiento" del sitio:

- A la izquierda, las capacidades del software: poner alarma, temporizador, reproducir un podcast, detener temporizador, calcular.
- A la derecha, la consulta del usuario. Con el preset "recuérdame renovar el pasaporte el próximo mes", el modelo emite una instrucción que llama a `set reminder` con el asunto y la fecha.
- **Extracción estructurada**: se da un esquema de lo que se quiere extraer de un texto. Con "encuentra mis notas sobre el dentista", localiza las notas relevantes.

### Integración en tu propia app

El presentador plantea el caso práctico: al construir con Claude Code una app de notas que genere tareas y recordatorios, la herramienta sugiere conectarse a la API de Anthropic, que resulta cara. La alternativa:

- Incorporar Needle, que es pequeño y **fiable**: "puedo saber exactamente lo que va a hacer; no adivina, pero tampoco puede hacer un millón de cosas".
- Cactus es open source; en GitHub está todo, incluido un `llm.txt` que se copia y se pasa a Claude para que tenga el contexto de cómo usarlo.
- Resultado: la app funciona sin llamadas externas e incluso sin conexión.

### Más allá del computador: dispositivos

Lo que generó entusiasmo en GitHub fue llevarlo a dispositivos:

- **Aspiradora robot**: se le puede decir "limpia la cocina y no el dormitorio" (ni la sala) y luego "ve a la base" para que vuelva a cargarse.
- Control por voz natural de sistemas domésticos sin depender de internet.

### Por qué casi no comete errores

Henry señala que mucha gente lo prueba con consultas aleatorias sin haber definido las capacidades. Needle está **diseñado para personalizarse**:

- La descripción de lo que hace cada herramienta debe ser **estricta**, porque la automatización requiere una configuración cuidadosa: "no quieres que apague la nevera durante la noche y se dañe la comida".
- El objetivo es **evitar que el modelo haga cosas que no se le pidieron**.
- Se pueden **enumerar opciones**: el modelo solo puede elegir una de cuatro (adelante, atrás, izquierda…) y no salirse de ese alcance.
- Cactus publicó un blog sobre cómo diseñar herramientas para Needle, con apoyo visual.

¿Puede confundir "encender" con "apagar"? Sí, **si las herramientas están mal diseñadas**; pero en la mayoría de los casos "preferirá negarse a actuar".

### Confianza y umbrales

- Needle devuelve una **puntuación de confianza** junto con la acción (en la demo, 0,97), como una forma de autorreflexión.
- Con confianza baja, a veces se niega; otras veces devuelve el resultado con su score y **el desarrollador decide**.
- Recomendación: definir un umbral y no ejecutar por debajo de él.

Síntesis del presentador: si el desarrollador fija límites claros (un conjunto cerrado de acciones) y exige confianza suficiente antes de actuar, el sistema prácticamente no comete errores. Y parte del poder está en sus capacidades limitadas:

> "No va a hacer lo que hace ChatGPT, que de pronto pasa de ser tu terapeuta a controlar tu computador y luego escribir código por ti. Es limitado, limitado, limitado."

### Más ejemplos: teléfono y laptop

- **Teléfono**: "crea un álbum llamado Fin de semana y mueve allí las fotos del fin de semana pasado"; el modelo extrae las etiquetas y selecciona las fotos.
- **Laptop**: iniciar temporizadores por voz, "copia lo que hay en pantalla al portapapeles".
- En teoría puede automatizar cualquier cosa "siempre que lo delimites bien" y le des suficientes herramientas, incluso controlar todo el portátil.

### Comparación con Jev

Henry explica que, para tareas prácticas, la gente no necesita LLM generalistas (que sirven para chat o escribir código):

> "Para la automatización general no necesitas todas esas funciones. Simplemente necesitas acciones seguras; ese es el ethos."

- La idea es **restringir la salida del modelo** para que elija dentro de un espacio finito: herramientas finitas y, dentro de cada herramienta, opciones finitas. Si no se le da la herramienta de borrar fotos, no puede borrarlas.
- **Jev** funciona de forma parecida, pero es un subconjunto: se basa estrictamente en enums (el modelo elige una de varias opciones).
- No los ve como competencia: **Needle es en el dispositivo, Jev es en la nube**.

### Mercado: privacidad en dispositivos pequeños

- Modelos de **8 a 29 MB**, pensados para mandos de smart TV, relojes inteligentes, auriculares; los laptops son "lo más grande" a lo que apuntan.
- Caso de uso: un altavoz doméstico que escucha 24 horas no debería transmitir a un servidor; "no confiarías a una gran corporación el acceso a tus actividades en vivo".

## Conceptos clave

- **Tool call / instrucción estructurada**: salida del modelo que un sistema de ejecución externo consume para realizar la acción.
- **Alcance de herramientas (tool scoping)**: definición estricta de qué herramientas existen y qué hace cada una; determina la calidad del resultado.
- **Opciones enumeradas (enums)**: restricción de parámetros a un conjunto finito de valores permitidos.
- **Restricción de salida**: forzar al modelo a elegir dentro de un espacio finito de acciones como mecanismo de seguridad.
- **Puntuación de confianza**: score que el modelo devuelve sobre su propia acción; se usa con un umbral para decidir si ejecutar.
- **Rechazo preferente**: comportamiento de negarse a actuar ante peticiones fuera de alcance o ambiguas.
- **IA en el dispositivo (on-device)**: inferencia local, sin conexión, por privacidad y autonomía.

## Herramientas y referencias mencionadas

- Needle (modelo de Cactus), Cactus (open source, GitHub, `llm.txt`)
- Jev (sistema en la nube basado en enums, comparado con Needle; nombre según la transcripción)
- Claude Code, API de Anthropic, ChatGPT
- Zapier y Zapier SDK (patrocinador)
- Y Combinator
- Notion, Salesforce, HubSpot (mencionados como integraciones vía Zapier)

## Referencias

- Transcripción: [[tsWOiibaaxA - alternativa-construible-a-jev|Transcripción completa]]
- Video: [Better than Jev - because you can build with it](https://www.youtube.com/watch?v=tsWOiibaaxA) — The Next New Thing
