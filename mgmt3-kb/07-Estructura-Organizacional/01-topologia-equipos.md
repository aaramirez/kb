---
title: "Topología de Equipos"
tags:
  - mgmt3/estructura
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Estructura Organizacional"
aliases:
  - "Team Topologies"
  - "Topología"
related:
  - "[[06-equipos-cruzados]]"
  - "[[08-escalabilidad-equipos]]"
  - "[[README]]"
---

# Topología de Equipos

Team Topologies es un marco de referencia para diseñar estructuras organizacionales que optimizan el flujo de entrega de software. Define cuatro tipos de equipos y tres modos de interacción.

## Los cuatro tipos de equipos

### 1. Stream-aligned (Alineados al flujo)
- Alineados con un flujo de negocio, producto o servicio.
- Son los equipos principales de la organización.
- Tienen capacidad de entregar valor de forma independiente.
- Ejemplo: un equipo dedicado a la funcionalidad de pagos.

### 2. Enabling (Habilitadores)
- Ayudan a otros equipos a adquirir nuevas capacidades.
- Son temporales por naturaleza: entran, habilitan, salen.
- Ejemplo: un equipo de DevOps que ayuda a migrar pipelines.

### 3. Complicated Subsystem ( subsistema complejo)
- Manejan componentes que requieren conocimiento profundo y especializado.
- Ejemplo: un equipo de algoritmos de machine learning.

### 4. Platform (Plataforma)
- Ofrecen servicios internos que simplifican el trabajo de otros equipos.
- Ejemplo: un equipo de plataforma que gestiona infraestructura compartida.

## Los tres modos de interacción

| Modo | Descripción | Ejemplo |
|------|-------------|---------|
| **Colaboración** | Trabajo conjunto intenso entre equipos | Equipo stream + enabling durante una migración |
| **X-as-a-Service** | Un equipo ofrece un servicio a otro con mínimo acoplamiento | Plataforma ofrece CI/CD como servicio |
| **Facilitación** | Un equipo facilita el aprendizaje de otro | Enabling team enseña prácticas de testing |

## Cómo elegir la topología adecuada

1. **Identifica tu flujo de valor principal**: ¿qué productos o servicios genera tu organización?
2. **Mapea los equipos existentes**: ¿qué tipo de equipo es cada uno actualmente?
3. **Identifica los cuellos de botella**: ¿dónde se frena el flujo de entrega?
4. **Diseña las interacciones**: ¿cómo deben relacionarse los equipos?
5. **Itera**: la topología no es estática, evoluciona con la organización.

## Errores comunes

- **Too many stream-aligned teams**: si hay demasiados, la coordinación se vuelve imposible.
- **Enabling teams que nunca se van**: si se quedan permanentemente, crean dependencia.
- **Plataformas que no escuchan**: si la plataforma no entiende las necesidades de sus usuarios, falla.
- **Ignorar las interacciones**: el tipo de interacción entre equipos es tan importante como los equipos mismos.
