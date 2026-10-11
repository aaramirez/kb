---
title: "Por qué cancelé Claude Code: lock-in, inferencia subsidiada y enrutamiento de modelos"
tags:
  - arnes/nota
  - type/nota
  - arnes/opinion
  - arnes/construccion
channel: "Jordan Urbs"
speaker: "Jordan Urbs"
videoId: "yFvl2x8_9gI"
source: "https://www.youtube.com/watch?v=yFvl2x8_9gI"
language: "en"
playlistOrder: 9
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Why I Cancelled My Claude Code Subscription"
related:
  - "[[yFvl2x8_9gI - por-que-cancele-claude-code|Transcripción]]"
---

# Por qué cancelé Claude Code: lock-in, inferencia subsidiada y enrutamiento de modelos

Jordan Urbs, constructor y solopreneur que fue suscriptor de Claude Max (200 USD/mes) y usuario intensivo de Claude Code, explica en un monólogo-ensayo de unos 15 minutos por qué canceló su suscripción. No lo hace porque el producto fuera malo, sino justamente porque se había vuelto indispensable: la dependencia de un solo proveedor, cuyas condiciones económicas no parecen sostenibles, se convirtió en un riesgo para su trabajo y su negocio.

Para el harness engineering el video importa porque separa claramente tres capas: el **modelo** (sustituible), el **proveedor de inferencia** (sustituible) y el **workspace/harness con sus instrucciones, skills y perfiles de subagentes** (lo que realmente conviene poseer). Propone harnesses model-agnostic como OpenCode, modelos open-weight y enrutamiento inteligente de modelos definido en el propio workspace (AGENTS.md) como salida al vendor lock-in.

## Resumen

- **Uso extremo, precio fijo**: en dos días de un mes superó los 700 millones de tokens diarios; a precios de API eso serían más de 50.000 USD (unos 1.800–2.000 USD con caché), frente a una suscripción de 200 USD.
- **Economía insostenible**: o los márgenes de la API son exagerados o se está quemando capital de riesgo para subsidiar la inferencia y crear dependencia; probablemente ambas cosas.
- **Riesgo de cambio de condiciones**: precios, límites o el propio producto pueden cambiar (por ejemplo, ante una salida a bolsa); la pregunta clave es cuánto del flujo de trabajo habría que reconstruir.
- **Deuda de ignorancia**: la comodidad hace dejar de cuestionar la herramienta; con el tiempo, el costo de cambiar se vuelve demasiado alto y se genera lock-in.
- **No buscar "un reemplazo"**: el error es buscar una sola herramienta que sustituya a Claude; conviene usar distintos modelos para distintas tareas.
- **Modelos por rol**: Kimi K3 como planificador/orquestador, GLM 5.2 para código y escritura creativa, DeepSeek V4 Flash para tareas simples y casi gratis.
- **Privacidad**: le preocupa el perfilado de su forma de pensar por parte de los proveedores; usa Venice por sus acuerdos de cero retención de datos.
- **Enrutamiento inteligente desde el workspace**: con buenas instrucciones en AGENTS.md, el agente decide qué tareas delega a qué modelos y proveedores.
- **El workspace ahorra tokens**: el mismo modelo consume muchos menos tokens en un workspace ajustado (instrucciones, skills, perfiles de subagentes) que en uno vacío.
- **Poseer el workspace, no el modelo**: si un modelo o proveedor deja de servir, se cambia; el resto del flujo de trabajo no se cae.

## Contenido estructurado

### La economía de la inferencia subsidiada

Jordan describe que Claude Code pasó en 12 meses de "bastante interesante" a algo sin lo que no podía vivir. Midió su consumo:

- Dos días del último mes superaron **700 millones de tokens** cada uno.
- A precios públicos de API, esos dos días habrían costado **más de 50.000 USD**; considerando la caché de tokens, alrededor de **1.800–2.000 USD**.
- Su suscripción completa costaba **200 USD al mes**.

> "Algo anda muy mal con la economía aquí, y no quiero estar enganchado a Claude cuando caiga el otro zapato."

Su lectura: o los márgenes de la API son "obscenos", o la empresa quema dinero de capital de riesgo para subsidiar la inferencia, enganchar a los usuarios y ocultar el costo real de entrega. "Probablemente un poco de ambas". Reconoce que es un producto excelente y un trato increíble para un usuario intensivo: podía trabajar 20 horas seguidas un fin de semana.

### Dependencia y "deuda de ignorancia"

La contracara: al acostumbrarse, uno construye todo su flujo alrededor de la herramienta y deja de pensar en el costo de cada petición o en qué modelo usa.

- Usaba Claude Code para landing pages, páginas de ventas, campañas automatizadas de Meta Ads, assets visuales para videos y presentaciones, y partes del flujo de contenido (reutilización, metadatos).
- Un proyecto personal con su hijo (un mundo narrativo convertido en libro, canal de YouTube, juego educativo y un "Patreon" propio hecho con vibe coding) solo existió gracias a la inferencia subsidiada.
- Se dio cuenta de que abría Claude Code antes de siquiera pensar si había otra forma de hacer el trabajo.

> "Esa comodidad se acumula como una deuda de ignorancia que tarde o temprano tenemos que pagar, porque dejaste de cuestionar la herramienta, porque simplemente funciona."

> "Pasé todo este tiempo haciendo que Claude me fuera más útil, mientras silenciosamente hacía que mi propio flujo de trabajo fuera más difícil de separar de él."

Dos cosas le preocupaban: la economía futura de la suscripción y de la empresa, y el vendor lock-in de haber construido tanto sobre un sistema que no controla. Añade que esto aplica a cualquier proveedor de IA ("no existe el almuerzo gratis").

### Cambiar el enfoque: distintos modelos para distintas tareas

Al principio buscaba un único sustituto (¿Codex? ¿Gemini CLI?), y reconoce que era la forma equivocada de pensarlo. ¿Por qué una sola familia de modelos debería proveerlo todo?

- Modelos open-weight citados: Kimi K3, GLM 5.2, GLM 5.3, DeepSeek V4, Qwen 3.8.
- Harnesses open source **model-agnostic**: OpenCode se convirtió en su reemplazo de Claude Code; admite cualquier proveedor y modelo y es compatible con sus flujos agénticos de Claude Code.

Asignación por roles que adoptó:

| Rol | Modelo | Comentario |
|-----|--------|------------|
| Planificador / orquestador | Kimi K3 | Más caro pero muy inteligente; "más amigable" que Fable |
| Codificación y escritura creativa | GLM 5.2 | Más barato |
| Tareas simples o manuales | DeepSeek V4 Flash | Rápido; "casi gratis"; no lo usaría para planificar |

### Privacidad y elección del proveedor

Más allá del resultado, el proceso creativo propio (su forma de pensar) queda perfilado por herramientas como Claude Code, Codex o Gemini. Al empezar a usar harnesses en casa (seguridad doméstica, Raspberry Pi con emuladores), concluyó que no quería a Anthropic dentro de su red doméstica.

- Los modelos que puede alojar localmente "todavía no están a la altura".
- Usa **Venice** como proveedor de modelos open-weight porque tiene acuerdos de **cero retención de datos** con los proveedores: nada se almacena y no se construye ningún perfil.

### Enrutamiento inteligente de modelos (smart model routing)

Dejar de tratar a Claude como la respuesta por defecto cambia la economía:

1. Un modelo potente piensa qué hay que hacer y produce el plan.
2. Un modelo más barato implementa.
3. Para tareas que no son de código, modelos aún más simples.
4. Para la revisión o auditoría final, se vuelve a los modelos grandes.

Lo clave para el harness: el enrutamiento puede manejarse **dentro del workspace**. El agente puede llamar a otros modelos con instrucciones y un system prompt propio.

> "Cuanto mejores sean tus instrucciones en AGENTS.md, más inteligente puede ser tu agente al enviar ciertas tareas a ciertos modelos."

Sobre el consumo de tokens: el mismo modelo (Opus, Fable) en un workspace vacío "se inventa sus propias instrucciones" y quema muchos más tokens que en un workspace ajustado con instrucciones, skills y perfiles de subagentes, porque ahí tiene contexto con el que trabajar. En las instrucciones basta con indicar: "cuando hagamos esto, envíalo a tal modelo de tal proveedor, aquí está la API key". Advierte que una generación de usuarios quedará en desventaja "cuando la realidad toque a la puerta" por no haber aprendido esto.

### El experimento y la tesis de propiedad

- Canceló Claude y usa una cuenta **Venice Max** (200 USD/mes, que da 225 USD en créditos) con acceso a más de 300 modelos.
- Objetivo: no recrear Claude a la perfección, sino obtener resultados similares sin gastar mucho más, sacrificando comodidad.
- El experimento sirve para encontrar las brechas en sus workspaces: cada palabra y cada prompt cuestan dinero.

Disciplinas que se impone:

- Si una tarea no necesita el modelo más fuerte, no enviarla ahí.
- Si se usará mucho contexto, ver si puede cachearse.
- Si se reciclan instrucciones, convertirlas en skills y ponerlas en los archivos de contexto de comportamiento.

> "Esta es la verdadera arquitectura de ser dueño de tu propia IA. [...] Lo más importante para mí es ser dueño de los workspaces, porque pueden ser míos y nadie me los puede quitar ni apagar."

Si una herramienta, modelo o proveedor deja de funcionar, "el resto de mi vida con IA no tiene por qué caerse con él". Deja abierta la pregunta de si terminará volviendo a Claude y promete actualizaciones. Cierra promocionando su comunidad AI Captain's Academy.

## Conceptos clave

- **Inferencia subsidiada**: suscripción de precio fijo cuyo uso real, a precios de API, cuesta muchas veces más; genera dependencia.
- **Vendor lock-in**: dependencia de un proveedor tal que el costo de cambiar se vuelve prohibitivo.
- **Deuda de ignorancia**: el costo acumulado de dejar de cuestionar una herramienta porque "simplemente funciona".
- **Harness model-agnostic**: harness (como OpenCode) que admite cualquier proveedor y modelo.
- **Smart model routing**: asignar cada tarea al modelo más adecuado por capacidad y costo (planificar, implementar, revisar).
- **Workspace ajustado**: entorno con instrucciones (AGENTS.md), skills y perfiles de subagentes que reduce el consumo de tokens y mejora los resultados.
- **Cero retención de datos**: acuerdo por el cual el proveedor de inferencia no almacena prompts ni construye perfiles.
- **Propiedad del workspace**: tesis de que lo valioso y controlable es el workspace; el modelo y el proveedor son intercambiables.

## Herramientas y referencias mencionadas

- Claude Code, Claude Max, Anthropic, modelos Opus y Fable
- OpenAI Codex, Gemini CLI
- OpenCode (harness model-agnostic)
- Modelos open-weight: Kimi K3, GLM 5.2, GLM 5.3, DeepSeek V4 / V4 Flash, Qwen 3.8
- Venice (proveedor de inferencia con cero retención de datos; plan Venice Max)
- AGENTS.md, skills, subagentes
- Raspberry Pi, HyperFrames (generación de assets visuales)
- AI Captain's Academy (comunidad del autor)

## Referencias

- Transcripción: [[yFvl2x8_9gI - por-que-cancele-claude-code|Transcripción completa]]
- Video: [Why I Cancelled My Claude Code Subscription](https://www.youtube.com/watch?v=yFvl2x8_9gI) — Jordan Urbs
