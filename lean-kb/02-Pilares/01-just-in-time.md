---
title: Just-in-Time (JIT)
tags:
  - lean/pilares
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Pilares
aliases:
  - JIT
  - Just in Time
  - Producción Justo a Tiempo
---

# Just-in-Time (JIT)

**Just-in-Time** es el primer pilar del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]] y del pensamiento Lean. Su principio fundamental es simple: entregar **lo correcto**, en la **cantidad correcta**, en el **momento correcto**.

## Definición y Origen

JIT fue desarrollado por [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] en Toyota durante los años 1950. Se inspiró en el sistema de aprovisionamiento de supermercados estadounidenses: los estantes se reabastecen solo cuando un cliente retira un producto, no antes.

La clave es **producir solo lo que se necesita**, eliminando el exceso de inventario que escond [[03-Desperdicios/02-muda-desperdicio|desperdicios]] como sobreproducción, inventario excesivo y tiempos de espera.

## Concepto Central

JIT se basa en tres elementos interconectados:

### 1. Continuous Flow (Flujo Continuo)

Procesar uno a uno, de inicio a fin, sin acumular inventario entre estaciones. El flujo continuo es lo opuesto a procesar en lotes grandes. Cuando el flujo es continuo, los problemas se hacen visibles inmediatamente.

### 2. Pull System (Sistema de Tirón)

Producir solo cuando hay demanda real. En un sistema de tirón, cada estación de trabajo **solicita** material a la anterior cuando lo necesita, en lugar de recibir material de forma automática ([[03-Desperdicios/02-muda-desperdicio|push system]]).

### 3. Takt Time (Tiempo de Ritmo)

El ritmo al cual debemos producir para satisfacer la demanda del cliente. Se calcula dividiendo el tiempo de trabajo disponible entre la demanda del cliente. Takt Time sincroniza todo el proceso con la velocidad del mercado.

## Herramientas que Sostienen JIT

- [[04-Herramientas/09-kanban|Kanban]] — Señales visuales que regulan el flujo de material
- [[04-Herramientas/07-heijunka|Takt Time]] — Cálculo del ritmo de producción
- [[02-Pilares/02-jidoka|Jidoka]] — Calidad integrada para que el flujo no se interrumpa con defectos
- [[04-Herramientas/07-heijunka|Heijunka]] — Nivelación de la producción para suavizar fluctuaciones

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Reducción de inventario | Menos materiales almacenados = menos capital inmovilizado |
| Entrega más rápida | Tiempos de ciclo cortos = respuesta ágil al cliente |
| Mejora de calidad | Los defectos se detectan al instante en flujo continuo |
| Menor desperdicio | Sin sobreproducción ni exceso de stock |
| Mayor flexibilidad | Capacidad de adaptarse a cambios de demanda |

## Riesgos y Mitigación

JIT expone la operación a riesgos por la ausencia de inventario de seguridad:

- **Interrupciones de proveedores** → Diversificar fuentes y construir relaciones de confianza
- **Fallas de equipo** → Mantenimiento Productivo Total ([[04-Herramientas/07-heijunka|TPM]])
- **Problemas de calidad** → [[02-Pilares/02-jidoka|Jidoka]] detecta defectos antes de que se propaguen
- **Demanda inestable** → [[04-Herramientas/07-heijunka|Heijunka]] suaviza las fluctuaciones

JIT no funciona como una isla. Requiere [[02-Pilares/02-jidoka|Jidoka]] para calidad, [[02-Pilares/03-kaizen|Kaizen]] para mejorar continuamente, y [[02-Pilares/04-respeto-por-las-personas|Respeto]] para que las personas estén comprometidas con el sistema.

## En Resumen

> JIT es producir lo necesario, cuando se necesita, en la cantidad necesaria — sin exceso, sin espera, sin desperdicio.

## Notas Relacionadas

- [[02-Pilares/02-jidoka|Jidoka]] — El otro pilar que complementa JIT
- [[02-Pilares/05-casa-del-lean|La Casa del Lean]] — JIT como columna del techo
- [[02-Pilares/08-jit-vs-jidoka-comparativa|JIT vs Jidoka]] — Comparativa detallada
- [[04-Herramientas/09-kanban|Kanban]] — Herramienta clave de JIT
- [[04-Herramientas/07-heijunka|Takt Time]] — Ritmo de producción
- [[04-Herramientas/07-heijunka|Heijunka]] — Nivelación de producción
