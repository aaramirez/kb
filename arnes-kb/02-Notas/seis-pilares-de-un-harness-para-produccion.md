---
title: "Los seis pilares de un harness agéntico para producción"
tags:
  - arnes/nota
  - type/nota
  - arnes/produccion
  - arnes/evals-y-observabilidad
  - arnes/fundamentos
channel: "AI Engineer"
speaker: "Varun Krovvidi (Resolve AI)"
videoId: "eXA2tjRZIbY"
source: "https://www.youtube.com/watch?v=eXA2tjRZIbY"
language: "en"
playlistOrder: 25
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "The 6 Pillars of an Agentic Harness for Production — Varun Krovvidi, Resolve AI"
related:
  - "[[eXA2tjRZIbY - seis-pilares-de-un-harness-para-produccion|Transcripción]]"
---

# Los seis pilares de un harness agéntico para producción

Charla de Varun Krovvidi, de Resolve AI, en la conferencia AI Engineer (unos 21 minutos). Resolve construye "IA para producción": agentes que operan y arreglan software (on-call, incidentes y tareas de fondo). Explica por qué este dominio es mucho más difícil que generar código, qué "grietas" aparecen cuando un harness pasa de la demo a escalar entre casos de uso y equipos, y los seis pilares de su arquitectura: orquestación de modelos, context engineering, razonamiento causal, acciones gobernadas, sistema de aprendizaje y evals. Cierra con una demo del producto investigando una alerta.

Para el harness engineering, su valor está en mostrar qué necesita un harness de **dominio específico** con una única respuesta correcta, donde la coherencia del modelo no basta y hace falta una cadena causal de evidencia.

## Resumen

- **La IA triunfó primero en código** porque el código es autodocumentado, modular y de un solo dominio, lo que además permite benchmarks objetivos.
- **El 70 % del tiempo de ingeniería es operar y arreglar software**, no generarlo, y eso cruza múltiples dominios y herramientas.
- **Generación frente a tareas con respuesta única**: en las segundas aparece la decepción; la "última milla" es la milla más larga.
- **Las demos funcionan, el escalado no**: al ampliar casos de uso y equipos aparecen grietas conocidas.
- **Grietas**: sesgo de anclaje y la "cinta de correr" de modelos, contexto excesivo o insuficiente, coherencia en lugar de causalidad, falta de guardrails y ausencia de aprendizaje compartido.
- **Seis pilares**: orquestación de modelos, context engineering, razonamiento causal, acciones gobernadas, sistema de aprendizaje y evals.
- **Causa raíz basada en evidencia**: si no se establece una cadena causal, se responde con baja confianza y se reorienta al usuario.
- **Evals en cinco niveles**: refuerzo positivo, refuerzo negativo, trazabilidad del camino, comparación con el mejor ingeniero y calibración de la confianza.
- **Producción es multijugador**: varios equipos deben compartir el mismo contexto, también a lo largo del tiempo.

## Contenido estructurado

### Por qué la IA funcionó primero en código

El ponente pregunta al público si puede decir que el 90 % de su trabajo de on-call lo hace la IA; nadie puede. Explica por qué el código fue la primera ola:

1. **El código es autodocumentado**: fácil de analizar y entender para la IA.
2. **Es modular**: se puede dividir en fragmentos, navegar y extender.
3. **Es de un solo dominio** (lo más importante): no hay que enseñar a razonar entre dominios, y por eso existen benchmarks que permiten evaluar objetivamente.

### Operar software: el otro 70 %

Con una analogía médica, agrupa el trabajo de producción en tres categorías:

- **On-call y mantenimiento**: problemas pequeños y frecuentes ("un Tylenol o un Advil").
- **Incidentes**: todos a bordo, el equivalente a una cirugía.
- **"Vitaminas diarias"**: revisar infraestructura, costos o trabajo de platform engineering para escalar.

Son difíciles porque cruzan dominios y herramientas. Señala tres tendencias del momento: preocupación por los problemas que el código generado por IA causa en producción, el fin de la "IA sin fondo" (conversaciones sobre eficiencia de tokens y arquitecturas rigurosas) y la idea, popularizada por Satya Nadella, de la arquitectura que hace falta sobre los modelos para que funcione la IA de dominio.

Distingue dos tipos de tareas:

> "Cuando piensas en el otro lado, una tarea donde hay una única respuesta correcta a la que quieres que llegue la IA, ahí empieza la decepción. La mayoría lo llama la última milla, pero es la milla más larga que tienes que recorrer con la IA."

Además, operar producción es un problema **multijugador y multisistema**: hay que involucrar a distintos equipos especializados.

### La tesis de Resolve AI

Creen que la mayor parte del trabajo sobre sistemas en producción deben hacerla los agentes, y los ingenieros deben dirigir esos agentes. Tres categorías:

- **Agentes de on-call**: arreglan los problemas diarios.
- **Agentes de incidentes**: conducen los canales de incidentes hasta la causa raíz y la solución.
- **Agentes ambientales en segundo plano**: monitorización de despliegues, análisis o investigaciones disparadas por condiciones.

Todos comparten la misma arquitectura de agente.

### Las grietas al escalar

¿Por qué no apuntar el modelo más grande a los datos de producción? Porque "hace buenas demos" en un caso concreto, pero al escalar entre casos de uso y equipos aparecen grietas:

1. **Modelos**:
   - **Sesgo de anclaje**: los modelos están diseñados para dar una respuesta coherente.
   - **La cinta de correr de modelos**: con cada lanzamiento hay que evaluar qué modelo sirve para qué y actualizar.
   - **Cada workflow tiene cientos de tipos de tareas** (razonamiento, pasos deterministas, imágenes, SQL, logs) y cada modelo frontera es bueno en algo distinto. El motor de orquestación debe seguir el ritmo de los modelos y asignar el mejor modelo a cada tarea.
2. **Contexto**: con demasiado contexto el modelo **sobreexplora** e inventa hipótesis inexistentes; con muy poco **subexplora** y no ve otros caminos. En incidentes es crítico porque la telemetría es prácticamente infinita y se cruza con código e infraestructura.
3. **Razonamiento causal**: "los modelos están ahí para complacerte"; si se los presiona, acaban dando la razón en cualquier dirección. Producen respuestas coherentes, no causalidad, y en un incidente se busca una cadena causal de evidencia, "como un detective", para arreglar el problema real en lugar de poner un parche.
4. **Guardrails**: cuando una IA borra un sistema de archivos o una base de datos, "es una feature, no un bug": pudo determinar que borrar era el arreglo más limpio. No se le puede culpar; hay que construir guardrails y definir el acceso de mínimo privilegio para cada escenario.
5. **Bucles de aprendizaje**: el sistema debe escalar a toda la organización. SRE, platform y backend deben tener el mismo contexto, y la investigación número 100 debe tener el contexto de las anteriores "o estás reinventando la rueda".

### Los seis pilares

Los modelos son para razonamiento de propósito general; para "domarlos" hacia una respuesta concreta hacen falta seis pilares:

1. **Orquestación de modelos**, en dos niveles: seguir la cinta de los modelos nuevos y emparejar el mejor modelo con cada tarea ("¿Gemini para razonamiento sobre imágenes, OpenAI para pasos deterministas o Claude para investigaciones abiertas?"). Lo construyeron muy pronto.
2. **Context engineering**: no reducirlo a detalles de implementación (graph RAG, grafo de conocimiento); el objetivo es **la cantidad precisa de contexto** para el problema. Suele ser una combinación: algo tipo graph RAG para iniciar la investigación y llamadas a herramientas muy precisas después, para no quemar tokens en consultas de logs, métricas, dashboards o código.
3. **Razonamiento causal**: la causa raíz siempre se basa en una cadena causal de evidencia. Si no se puede establecer, se informa con baja confianza y se apunta al usuario en otra dirección.
4. **Acciones gobernadas**: guardrails según el equipo, la organización y la industria: ¿solo lectura?, ¿escritura?, ¿en qué condiciones?
5. **Sistema de aprendizaje**: cada interacción es una oportunidad de aprender, no solo de la investigación sino de cómo interactúa el usuario: refuerzo positivo, negativo o cuando dirige la investigación hacia un lado.
6. **Evals**: "el punto de partida y el punto final de cualquier arquitectura de agentes".

### Evals en cinco niveles

1. **Refuerzo positivo** del usuario.
2. **Refuerzo negativo** del usuario.
3. **Trazabilidad**: ¿se puede seguir el camino por el que llegó a la solución?
4. **Puntuación como ingeniero**: ¿cómo haría la investigación el mejor ingeniero y cómo se compara?
5. **Calibración**: ¿cómo asigna la IA su nivel de confianza?

Es infraestructura de evals sistemática contra la que se prueba la arquitectura cada vez que hay un modelo nuevo, un caso de uso nuevo o un cambio de arquitectura.

### Demo: investigación de una alerta

- Las alertas de observabilidad (Grafana) llegan a un canal de Slack; Resolve las toma automáticamente y empieza a investigar.
- Devuelve una causa raíz, factores contribuyentes, **teorías descartadas**, evidencia y recomendaciones.
- La alerta se trata como un prompt y se lanzan dos categorías de agentes; los **investigadores** proceden como un ingeniero: identifican el problema, recogen métricas y trazas, localizan dónde ocurre con trazas y logs y lo correlacionan con eventos de cambio, despliegues, código e infraestructura.
- Razona sobre cuatro tipos de fuentes: **código, infraestructura, bases de conocimiento y plataformas de observabilidad**.
- En el ejemplo, un componente de logs ("log skill" en la transcripción, posiblemente un *log sink*) tenía alta tasa de fallos por integraciones obsoletas aún activas. Entre las teorías descartadas estaba una caída de GCP simultánea, la correlación perfecta que una IA "diseñada para la coherencia" habría elegido.
- Funciona con una política de **mínima confianza**: el usuario puede resaltar y cuestionar la conclusión. Al presionarlo con preguntas sobre la caída de GCP u otros errores de despliegue, el sistema no cede: se basa en la cadena causal que construyó.
- Se puede incorporar a compañeros desde Slack para colaborar en una "sala de guerra virtual".

Cierra señalando que esto es un eje de la arquitectura; el otro es productizar la IA sobre una plataforma robusta para ponerla frente a clientes.

## Conceptos clave

- **IA para producción**: agentes que operan y arreglan software (on-call, incidentes, mantenimiento), no que lo generan.
- **Tarea con respuesta única**: problema con una solución correcta, donde la "última milla" es la más larga.
- **Sesgo de anclaje / coherencia frente a causalidad**: los modelos tienden a dar respuestas coherentes y a complacer, no a establecer causas.
- **Cinta de correr de modelos**: la necesidad continua de reevaluar qué modelo es mejor para cada tarea.
- **Sobreexploración / subexploración**: efectos de dar demasiado o demasiado poco contexto.
- **Cadena causal de evidencia**: secuencia verificable de pasos que llevan a un incidente; base de la causa raíz.
- **Acciones gobernadas**: guardrails y acceso de mínimo privilegio para las acciones del agente.
- **Evals en cinco niveles**: refuerzo positivo, negativo, trazabilidad, comparación con un experto y calibración de la confianza.

## Herramientas y referencias mencionadas

- Resolve AI (agentes de on-call, incidentes y ambientales)
- Modelos: Gemini, OpenAI, Claude
- Grafana, Slack, Microsoft Teams, GCP
- Graph RAG, grafos de conocimiento
- Satya Nadella (Microsoft)

## Referencias

- Transcripción: [[eXA2tjRZIbY - seis-pilares-de-un-harness-para-produccion|Transcripción completa]]
- Video: [The 6 Pillars of an Agentic Harness for Production — Varun Krovvidi, Resolve AI](https://www.youtube.com/watch?v=eXA2tjRZIbY) — AI Engineer
