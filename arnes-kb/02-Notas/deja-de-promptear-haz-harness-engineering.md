---
title: "Deja de promptear y haz harness engineering: las cuatro capas de un harness de dominio"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "Austin Marchese"
speaker: "Austin Marchese"
videoId: "bIYWxYm5cOY"
source: "https://www.youtube.com/watch?v=bIYWxYm5cOY"
language: "en"
playlistOrder: 19
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Stop Prompting Claude. Start Harness Engineering."
related:
  - "[[bIYWxYm5cOY - deja-de-promptear-haz-harness-engineering|Transcripción]]"
---

# Deja de promptear y haz harness engineering: las cuatro capas de un harness de dominio

Video explicativo de Austin Marchese (en inglés, unos 16 minutos, con dibujos a mano y un segmento patrocinado por Anthropic). Tras "cuatro meses estudiando cómo trabajan los builders de IA más rápidos", sostiene que quienes ganan con IA no piensan en el modelo sino en el harness que interactúa con él. Organiza el tema en cuatro capas (fundamentos, elección del dominio, construcción e interfaz), construye como ejemplo un harness de conocimiento interno sobre Claude Code y cierra con la "curva de Karpathy".

Su aporte para el harness engineering es la distinción entre **harness base** (Claude Code, Muse, Grok) y **harness de dominio**, la capa que cualquiera puede construir encima y que de verdad le pertenece. Es un enfoque práctico y orientado a usuarios no necesariamente desarrolladores.

## Resumen

- **El harness es lo que envuelve al modelo**: todo lo que rodea al modelo y al input para mejorar la salida; un "AI wrapper" es lo mismo que un harness.
- **Ecuación del output**: la mayoría usa `modelo + prompt × harness base`; los líderes piensan en `modelo + prompt × (harness base + harness de dominio)`.
- **El harness de dominio es lo único que posees**: la ventaja real es el conocimiento profundo de tu propio flujo de trabajo.
- **Sé un *shaper***: según un informe de McKinsey hay *makers* (construyen modelos), *takers* (usan la IA tal como viene) y *shapers* (construyen su capa encima); el harness engineering es ser *shaper*.
- **Diseña para un solo usuario**: tú mismo, algo que ninguna empresa que vende a miles puede ofrecer.
- **Regla 1, no reinventar**: Claude Code ya hace el 90–95 %; se construye solo el harness de dominio.
- **Regla 2, mantenerlo simple**: empezar con una versión simple de punta a punta en lugar de construir desde la API.
- **Componentes**: reglas, skills, servidores MCP, contexto, hooks, subagentes, interfaz y mecanismo de feedback.
- **La interfaz es la capa más importante**: Claude y Grok pueden hacer casi lo mismo, pero la interfaz hace a uno mejor que el otro según el caso de uso.
- **Curva de Karpathy**: el modelo será la parte menos interesante del stack; ganarán quienes curen datos, descompongan tareas y adapten la organización.

## Contenido estructurado

### Capa 1: fundamentos, por qué importa el harness

El autor pone como evidencia que Meta lanzó Muse y xAI lanzó Grok, ambos harnesses que simplifican el uso diario de la IA. Cita a Pieter Levels sobre Y Combinator:

> "Vi que el batch de Y Combinator literalmente solo tiene startups de harnesses y de hardware. Así que la prueba está a la vista."

El argumento central es que hoy no gana quien tiene acceso al mejor modelo, sino quien sabe moldearlo para aportar más valor en un caso de uso concreto. Propone pensar el output como una ecuación:

```
output = (modelo + prompt) × harness base                       ← el 99 % de la gente
output = (modelo + prompt) × (harness base + harness de dominio)  ← los líderes
```

En la práctica, al usar Claude Code el resultado combina el modelo (por ejemplo Opus), el prompt y el harness base elegido (Claude Code). El **harness de dominio** es lo que se construye encima de Claude y Claude Code:

> "Los más productivos que conozco han construido, en la práctica, su propio harness, hiperespecífico para su trabajo y su día a día, sin siquiera pensarlo ni llamarlo así."

### Capa 2: elegir el dominio

Un harness altera la salida de la IA para que funcione en tu situación concreta, así que hay que elegir un dominio. Distingue dos perfiles problemáticos: quien quiere un harness que lo haga todo y quien no logra decidir en qué enfocarse. La respuesta es la misma para ambos: la mentalidad de *shaper*.

- **Makers**: construyen el modelo (OpenAI, Anthropic, Google). "Ese no eres tú."
- **Takers**: usan la IA como la diseñó el proveedor; rápido, fácil y barato, pero sin diferencia con cualquier otro usuario.
- **Shapers**: construyen su propia capa sobre el modelo de otro. Esto es el harness engineering.

Para moldear hace falta confianza y experiencia en el dominio. Consejo: enfocarse en lo que ya haces. Si estás en marketing, moldea la IA para marketing; si estás en ventas, para ventas. "No intentes hervir el océano."

Frente a la creencia limitante de "¿por qué lo haría mejor que Zuckerberg o Musk?":

> "Diseñas para un solo usuario. No miles, no un departamento entero, solo tú. Y ese es un valor que ninguna empresa que construye un producto para miles de clientes te va a dar."

Menciona un prompt (mostrado en pantalla) para ayudar a identificar el nicho.

### Segmento patrocinado: Claude como ejemplo de harness

El patrocinio de Anthropic se usa como ejemplo de un harness más efectivo:

- **Chat y Cowork unificados** en una misma herramienta: quitar la decisión de qué herramienta usar libera al cerebro para decisiones de mayor palanca.
- **Claude Design dentro de las conversaciones**, además de Claude Docs y Slides para esos casos de uso.
- **Contexto compartido entre conversaciones**: skills y proyectos conectados accesibles desde cualquier chat, sin proyectos aislados.
- Caso de un cliente con propuestas comerciales: conectar Claude a las conversaciones relevantes, darle una propuesta anterior de referencia, pedir una plantilla y luego una propuesta para el cliente usando el contexto de las conexiones.

### Capa 3: construir el harness

**Primera regla: no reinventar.** No pasar el fin de semana construyendo un harness desde cero para descubrir que Claude ya hacía el 90–95 % de lo necesario. Solo se construye el harness de dominio.

Componentes de un harness:

| Componente | Función |
|---|---|
| Reglas | Instrucciones directas sobre cómo debe comportarse la IA |
| Skills | Capacidades reutilizables que se construyen una vez y se invocan cuando hace falta |
| Servidores MCP | El cableado hacia otras herramientas (conexiones externas) |
| Contexto | El conocimiento específico tuyo; un grafo de conocimiento ayuda a escalar |
| Hooks | Scripts que corren ante eventos (bloquear un comando, correr tests tras una edición) |
| Subagentes | Delegación y partición de tareas |
| Interfaz | Cómo interactúas con todo: chat, documentos o un dashboard local |
| Feedback | Mecanismo para moldear el harness con el tiempo |

> "Si mucho de lo que acabo de decir suena a lo que ya haces, ese es el punto."

**Segunda regla: mantenerlo simple.** Un harness complejo va directo a la API del modelo y construye todo desde cero; uno simple toma lo que Claude Code ya da y construye encima. "La solución más simple que realmente resuelve el problema es mejor que cualquier solución compleja."

### Ejemplo: harness de conocimiento interno

Elige un harness que solo responde preguntas a partir del contexto que se le provee, útil para todos. Si se le pregunta a Claude cómo hacer el onboarding de un cliente, por defecto tira de todo su entrenamiento; con el harness, la respuesta se restringe a los documentos provistos. Así se ve cómo el harness altera la respuesta.

Diseño por componente:

- **Reglas**: tomar contexto solo del proyecto actual.
- **Skills**: `KB answer` (responde solo desde el contexto local) y `KB sync` (trae contexto de proveedores externos).
- **MCP**: Google Drive, Notion o donde viva la base de conocimiento.
- **Contexto**: el conocimiento propio de la persona.
- **Hooks y subagentes**: se deja que Claude Code decida cuándo hacen falta.
- **Interfaz**: una web de una sola página con un input; al pulsar Enter responde con `KB answer`.
- **Feedback**: botón para indicar si la respuesta fue buena; si falta contexto, se ingiere más información.

Pasos: en la app de escritorio de Claude, pulsar *Code*, abrir una carpeta nueva (`harness demo`) y ejecutar el prompt que empaqueta todo. La interfaz resultante tiene un botón *Sync* (ejecuta `KB sync`) y *Send* (ejecuta `KB answer`). El autor ofrece también su plugin gratuito (`/buildpartner:build harness`) para hacerlo paso a paso. Con el tiempo, el feedback permite "entrenar y afilar" el harness.

### Capa 4: la interfaz

Para el autor es la capa que casi todos descuidan y, a su juicio, la más importante:

> "El harness no son solo las herramientas de abajo. Es toda la experiencia, y eso incluye cómo un humano realmente usa la cosa."

Al comparar Claude y Grok concluye que pueden hacer esencialmente lo mismo, pero la interfaz hace a uno mejor que el otro en ciertos casos: no tiene que ver con el modelo, los guardrails ni las skills. Opciones de interfaz: página web, terminal/CLI o plugins personalizados.

Por qué prefiere una interfaz web local:

1. **Costo**: corriendo en local puede usar la suscripción de Claude que ya se paga en lugar de créditos de API.
2. **Iteración rapidísima**: en su herramienta interna tiene un icono de lápiz; pasa el cursor sobre algo, escribe el cambio (por ejemplo "agrega Outlook como fuente de datos") y se aplica. Lo hace incluso en llamadas con su equipo.
3. **Camino claro para escalar al equipo**, aunque es más complejo y no lo cubre en el video.

### La curva de Karpathy

Repasa las cuatro capas (fundamentos, dominio, construcción, interfaz) y presenta la "curva de Karpathy", atribuida al ex jefe de IA de Tesla, como alternativa al catastrofismo:

> "Un futuro donde el modelo es la parte menos interesante del stack, donde el trabajo real está en la curación de datos, la descomposición de tareas y la adaptación organizacional, y donde los ganadores no son quienes construyeron el cerebro más grande sino quienes descubrieron lo más valioso en qué pensar."

Frente a la visión catastrofista en la que la IA resuelve todo y nadie aporta valor, esta curva sugiere que ganarán quienes creen un harness y un sistema para interactuar con los modelos según su situación. Advierte, sin embargo, que no hay que construir un harness propio para todo: a veces conviene usar productos existentes.

## Conceptos clave

- **Harness**: todo lo que envuelve al modelo y al input para mejorar el output; equivalente a un "AI wrapper".
- **Harness base**: el producto genérico sobre el modelo (Claude Code, Muse, Grok).
- **Harness de dominio**: la capa propia, específica del flujo de trabajo de una persona, construida encima del harness base.
- **Makers / takers / shapers**: tres formas de relacionarse con la IA; el harness engineering corresponde a los *shapers*.
- **Mecanismo de feedback**: el componente que permite moldear y mejorar el harness con el uso.
- **Interfaz**: la experiencia completa de uso; según el autor, la capa decisiva.
- **Curva de Karpathy**: visión de futuro en la que el valor está en datos, descomposición de tareas y adaptación organizacional, no en el modelo.

## Herramientas y referencias mencionadas

- Claude, Claude Code, Claude Cowork, Claude Design, Claude Docs y Slides (Anthropic, patrocinador)
- Muse (Meta), Grok (xAI)
- Pieter Levels; Y Combinator
- Informe de McKinsey sobre *makers, takers y shapers*
- Andrej Karpathy (ex jefe de IA de Tesla)
- Google Drive, Notion, Outlook (fuentes de datos vía MCP)
- Plugin "Build Partner" del autor

## Referencias

- Transcripción: [[bIYWxYm5cOY - deja-de-promptear-haz-harness-engineering|Transcripción completa]]
- Video: [Stop Prompting Claude. Start Harness Engineering.](https://www.youtube.com/watch?v=bIYWxYm5cOY) — Austin Marchese
