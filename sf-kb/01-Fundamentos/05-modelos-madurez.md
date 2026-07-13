---
title: "Modelos de Madurez"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "CMMI"
  - "SPICE"
  - "ISO 33000"
related:
  - "[[../01-Fundamentos/02-evolucion-software-factory|Evolución]]"
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../06-Metricas/README|Métricas]]"
---

# Modelos de Madurez: CMMI, SPICE, ISO/IEC 33000

Los modelos de madurez permiten a las organizaciones evaluar y mejorar sus procesos de ingeniería de software de forma estructurada.

## ¿Qué es un modelo de madurez?

Un modelo de madurez define un conjunto de **prácticas esperadas** para cada nivel de capacidad organizacional. Permite:

- **Evaluar** el estado actual de procesos
- **Planificar** mejoras incrementales
- **Compararse** con estándares de la industria
- **Certificarse** ante clientes y socios

## CMMI — Capability Maturity Model Integration

Desarrollado por el Software Engineering Institute (SEI) de Carnegie Mellon.

### Niveles de madurez

| Nivel | Nombre | Descripción | Prácticas clave |
|-------|--------|-------------|-----------------|
| 1 | **Inicial** | Procesos impredecibles | Heroísmo individual |
| 2 | **Gestionado** | Proyectos gestionados | Planificación, seguimiento |
| 3 | **Definido** | Procesos estandarizados | Organización, capacitación |
| 4 | **Cuantitativamente Gestionado** | Métricas y control | Análisis estadístico |
| 5 | **Optimizado** | Mejora continua | Innovación, optimización |

### Áreas de proceso (examples)

**Gestión de Proyectos:**
- Planificación de proyectos (PP)
- Seguimiento y control (PMC)
- Gestión de riesgos (RSKM)

**Ingeniería:**
- Desarrollo de requerimientos (RD)
- Solución técnica (TS)
- Integración del producto (PI)

**Soporte:**
- Gestión de configuración (CM)
- Aseguramiento de calidad (PPQA)
- Análisis y resolución (AR)

### Pros y contras del CMMI

| Pros | Contras |
|------|---------|
| Framework completo y probado | Costoso de implementar |
| Reconocimiento internacional | Enfoque en documentación |
| Enfoque en procesos | Puede generar burocracia |
| Aplicable a múltiples dominios | Certificación expensive |

## SPICE — Software Process Improvement

ISO/IEC 33000 es la estandarización internacional de SPICE (Software Process Improvement and Capability dEtermination).

### Estructura de process assessment

| Dimensión | Descripción |
|-----------|-------------|
| **Procesos** | Qué se hace (process reference model) |
| **Capacidad** | Qué tan bien se hace (niveles 0-5) |
| **Resultados** | Qué evidencia existe (process outcomes) |

### Niveles de capacidad SPICE

| Nivel | Nombre |
|-------|--------|
| 0 | Proceso incompleto |
| 1 | Proceso realizado |
| 2 | Proceso gestionado |
| 3 | Proceso establecido |
| 4 | Proceso predecible |
| 5 | Proceso en optimización |

### SPICE vs CMMI

| Aspecto | SPICE | CMMI |
|---------|-------|------|
| **Enfoque** | Process assessment | Process improvement |
| **Uso** | Evaluación objetiva | Guiar mejora |
| **Flexibilidad** | Más modular | Más integral |
| **Adopción** | Europa, Asia | Global |

## ISO/IEC 33000

La familia ISO 33000 reemplaza y armoniza los modelos existentes:

- **ISO/IEC 33001**: Concepts and terminology
- **ISO/IEC 33002**: Requirements for process assessment
- **ISO/IEC 33004**: Requirements for process reference models
- **ISO/IEC 33020**: Process measurement framework

## Comparación de modelos

| Característica | CMMI | SPICE/ISO 33000 | ISO 9001 |
|----------------|------|------------------|----------|
| **Dominio** | Software/Services | Software/Services | General |
| **Enfoque** | Madurez + Capacidad | Capacidad | Sistema QA |
| **Certificación** | SCAMPI Appraisal | Formal Assessment | Auditoría |
| **Coste** | Alto | Medio | Medio |
| **Actualización** | CMMI v2.0 (2018) | ISO 33000 (2015) | ISO 9001:2015 |

## ¿Cuándo usar cada modelo?

- **CMMI**: Organizaciones grandes que buscan transformación de procesos
- **SPICE/ISO 33000**: Evaluación objetiva para comparar capacidades
- **ISO 9001**: Complemento para gestión de calidad general
- **Ninguno**: Startups y equipos pequeños pueden beneficiarse de prácticas ágiles sin formalización pesada

## Relación con la Software Factory

Los modelos de madurez son especialmente relevantes para la [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] porque:

1. Establecen **baseline** de procesos
2. Habilitan **medición** objetiva
3. Facilitan **mejora continua**
4. Soportan **gobernanza** organizacional
5. Complementan [[../01-Fundamentos/06-manifiesto-agile|Agile]] con estructura

## En la era de la IA

Con la [[../01-Fundamentos/03-era-ia-contexto|Era de la IA]], los modelos de madurez evolucionan:

- **AI-ready processes**: procesos preparados para automatización
- **AI-assisted assessment**: evaluaciones asistidas por IA
- **Nuevo nivel 6** (propuesto): AI-augmented processes
