---
title: "Casos de uso de ontologías en la empresa: CRM, ERP y planos de ingeniería"
tags:
  - arnes/nota
  - type/nota
  - arnes/ontologias
  - arnes/contexto-y-memoria
channel: "TalkIT Global"
speaker: "Tony Co (presentador) y un especialista de la empresa Emphasis"
videoId: "tul0H7hvKM8"
source: "https://www.youtube.com/watch?v=tul0H7hvKM8"
language: "en"
playlistOrder: 15
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Ontology Use Cases: CRM, ERP and Engineering [TalkIT Global 198, INFOCZ]"
related:
  - "[[tul0H7hvKM8 - casos-de-uso-de-ontologias-crm-erp|Transcripción]]"
---

# Casos de uso de ontologías en la empresa: CRM, ERP y planos de ingeniería

Episodio 198 de TalkIT Global, conducido por Tony Co, en formato de conversación breve (unos 8 minutos) con un especialista de **Emphasis**, empresa dedicada a soluciones de ontologías. Parte de una observación: hace unos años la pregunta era "¿cómo implementamos RAG?"; hoy se amplía a "¿necesitamos también una ontología?". La IA empresarial no solo debe encontrar y resumir información, sino decidir con base en significados y relaciones precisas y poder explicar su razonamiento.

Para el harness engineering, el video describe la **capa semántica** que conecta los sistemas heredados con los agentes: una ontología (clases, relaciones, instancias y axiomas) que sirve de contexto estructurado y verificable para que la IA razone, combine fuentes y simule escenarios. Presenta casos concretos en CRM, ERP, planos de ingeniería y análisis de fallas.

## Resumen

- **De RAG a ontología**: la IA empresarial necesita razonar sobre significados y relaciones, no solo recuperar y resumir.
- **Capa semántica como puente**: para que la IA use el contenido de sistemas heredados hace falta una capa intermedia basada en grafos de conocimiento y ontologías; es una tendencia global en entornos B2B.
- **No es solo metadatos**: consolidar datos en un lakehouse o integrarlos virtualmente no crea un modelo capaz de interpretar significados, razonar ni revelar relaciones causales.
- **Cuatro elementos**: clases, relaciones, instancias (datos reales) y axiomas (reglas de validación).
- **Construcción semiautomática**: los LLM ayudan a construir los cuatro elementos a partir de los datos crudos, algo casi imposible solo con trabajo manual.
- **CRM**: combinar datos de la cuenta, historial de ventas e información externa (noticias) para guiar al vendedor sobre cómo abordar a un cliente hoy.
- **ERP**: explicar por qué subieron o bajaron los costos en la estrecha ventana del cierre mensual y hacer simulaciones what-if con agentes sobre la ontología.
- **Ingeniería**: pasar de digitalizar planos a comprenderlos; una revisión que tomaba un mes podría bajar a uno o dos días.
- **Análisis de fallas**: en generación eléctrica o semiconductores, identificar de inmediato el origen y el alcance del impacto de una falla.

## Contenido estructurado

### La capa semántica como puente hacia la IA empresarial

Si la IA empresarial consiste en que la IA aproveche los sistemas heredados existentes, se necesita una **capa intermedia** que haga utilizable su contenido: la **capa semántica**. La tendencia actual es construirla sobre **grafos de conocimiento y ontologías**, y la ontología está "justo en el corazón" de ella.

Distinción importante:

> "Esto es completamente distinto de simplemente recolectar bien los datos y ponerles etiquetas de metadatos. Meter datos en un lakehouse o integrar virtualmente los datos físicos no crea automáticamente un modelo capaz de interpretar el significado entre los datos ni de razonar sobre ellos."

Tampoco revela relaciones causales. Haya o no consolidación física o virtual, e incluso con datos crudos, se necesita algo que los **conecte semánticamente**.

### Los cuatro elementos de una ontología

El marco predominante hoy (podrían surgir nuevos conceptos ligados a la IA neuro-simbólica):

1. **Clases**: conceptos centrales del dominio de negocio, generalmente bien establecidos y consensuados.
2. **Relaciones**: cómo se conectan esos conceptos.
3. **Instancias**: los datos reales del cliente. Ejemplo: en la clase "Cliente", Samsung Electronics es una instancia.
4. **Axiomas (reglas de validación)**: reglas que siempre deben cumplirse en el negocio, qué debe existir y qué nunca debe existir; no cosas que cambian.

Construir esto "a la antigua", a fuerza de trabajo humano, es casi imposible. Hoy puede **semiautomatizarse** porque los LLM ayudan a construir los cuatro elementos: se alimentan los datos crudos y se obtiene la estructura, que hace los datos mucho más fáciles de usar por la IA.

### Caso 1: CRM y ventas outbound

Las primeras áreas donde las empresas quieren aplicar IA suelen ser las que aumentan ingresos o reducen costos, como CRM y soporte de ventas.

- **Enfoque tradicional**: herramienta de campañas, data mart y OLAP para procesar y extraer datos.
- **Enfoque con ontología**: convertir los datos crudos existentes en una ontología y resolver allí el problema concreto.

Ejemplo: un vendedor empresarial quiere saber cómo se relacionan las noticias del día con la empresa objetivo y qué enfoque comercial adoptar hoy. Para que la IA lo guíe necesita:

- los datos que ya se tienen sobre esa empresa,
- el historial de actividad comercial,
- información externa relevante.

Con la información de la cuenta y su dominio modelados como ontología, es mucho más fácil combinarla con información externa. En la pantalla de demostración, el panel "AI advice" funciona como un ChatGPT, pero **fundamentado en la ontología**: sin ella se obtiene una respuesta genérica; con ella, una mucho más precisa. Además, el historial de un vendedor senior con esa cuenta debe conectarse: los datos no pueden quedar aislados en silos.

### Caso 2: ERP y análisis de costos

Ventaja: el ERP ya parte de datos estructurados. Ejemplo con contabilidad de costos:

- Entender por qué los costos subieron o bajaron permite encontrar oportunidades de reducción; la gente con años en el área suele conocer las razones.
- Problema: el análisis mensual suele hacerse **solo tres o cuatro días antes del cierre**.
- En una gran empresa de semiconductores, con costos de materiales, sus fuentes y múltiples componentes, rastrear relación tras relación hace difícil determinar cómo y por qué subió el costo total.
- Con una ontología construida sobre esos datos, el análisis se simplifica.

**Simulaciones what-if**: muy demandadas hoy. Se usan **agentes de IA sobre la ontología**; con ontologías y agentes trabajando juntos, la simulación virtual se vuelve posible.

### Caso 3: planos de ingeniería

Los planos deben ir más allá de la simple digitalización hacia una **comprensión real**. Interpretados mediante grafos de conocimiento y ontologías, pueden conectarse con otros procesos y flujos de la planta.

Ejemplo en petroquímica:

- Si cambia el producto, pueden cambiar las tuberías y los procesos intermedios de refinación, lo que obliga a modificar la planta y revisar los planos.
- Tradicionalmente: enviar el diseño a revisión, esperar su regreso y obtener aprobaciones; un proceso muy complicado.
- Con los planos digitalizados en una capa que entiende su consistencia y relaciones, las tareas se conectan y simplifican: **una revisión de un mes podría reducirse a uno o dos días**.

### Caso 4: análisis de fallas en generación eléctrica y semiconductores

- Ante una falla en una generadora, hay que determinar de inmediato su origen, conectando información de otras plantas y sistemas de negocio.
- La ontología conecta sistemas y procesos distintos y establece información de referencia compartida, de modo que las relaciones, **incluidas las causales**, se entiendan de forma consistente y rápida.
- Permite identificar tanto el origen como el **alcance completo del impacto**.
- Responder más rápido a una falla en una planta eléctrica puede representar un valor financiero enorme; en procesos de displays o semiconductores, incluso un breve tiempo de inactividad genera costos operativos importantes.

## Conceptos clave

- **Capa semántica**: capa intermedia que hace utilizables por la IA los datos de los sistemas heredados, conectándolos por significado.
- **Ontología**: modelo formal del dominio compuesto por clases, relaciones, instancias y axiomas.
- **Clase**: concepto central y consensuado del dominio de negocio (por ejemplo, Cliente).
- **Relación**: vínculo entre conceptos del negocio.
- **Instancia**: dato real que pertenece a una clase (por ejemplo, Samsung Electronics como Cliente).
- **Axioma / regla de validación**: regla invariable del negocio sobre lo que debe o nunca debe existir.
- **Grafo de conocimiento**: estructura de nodos y relaciones sobre la que se apoya la ontología.
- **Simulación what-if**: escenario hipotético ejecutado por agentes de IA sobre la ontología.
- **Relaciones causales**: vínculos de causa-efecto que la ontología permite rastrear y que un lakehouse con metadatos no revela.

## Herramientas y referencias mencionadas

- Emphasis (empresa de soluciones de ontologías cuyos casos se presentan)
- RAG, grafos de conocimiento, IA neuro-simbólica
- Lakehouse, data mart, OLAP, herramientas de campañas
- CRM, ERP, ChatGPT
- Samsung Electronics (ejemplo de instancia)

## Referencias

- Transcripción: [[tul0H7hvKM8 - casos-de-uso-de-ontologias-crm-erp|Transcripción completa]]
- Video: [Ontology Use Cases: CRM, ERP and Engineering [TalkIT Global 198, INFOCZ]](https://www.youtube.com/watch?v=tul0H7hvKM8) — TalkIT Global
