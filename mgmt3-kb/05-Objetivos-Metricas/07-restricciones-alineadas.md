---
title: "Restricciones Alineadas"
tags:
  - mgmt3/objetivos
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Objetivos y Métricas"
aliases:
  - "Aligned Constraints"
  - "Enabling Constraints"
related:
  - "[[08-matrices-de-restricciones]]"
  - "[[01-significado-proposito]]"
  - "[[09-metricas-individuales-vs-equipos]]"
---

# Restricciones Alineadas

## La paradoja de la restricción

Parece contradictorio:Management 3.0 promueve la autonomía pero también habla de restricciones. La clave es que **las restricciones correctas habilitan la libertad, no la eliminan**.

> "La libertad sin restricciones es caos. Las restricciones sin propósito son opresión."

## Tipos de restricciones

### Restricciones habilitantes (Enabling Constraints)

**Definición**: Límites que canalizan la energía y la creatividad hacia resultados valiosos.

| Ejemplo | Cómo habilita |
|---------|---------------|
| Time-box de 2 semanas | Fuerza a priorizar y entregar valor incremental |
| Presupuesto fijo | Estimula creatividad para hacer más con menos |
| Equipo autogestionado | Elimina burocracia de aprobación |
| Arquitectura de microservicios | Permite despliegues independientes |

### Restricciones de protección (Governing Constraints)

**Definición**: Límites que previenen daño al sistema o a las personas.

| Ejemplo | Qué protege |
|---------|-------------|
| Límites de WIP | Previene sobrecarga y multitasking |
| Definición de done | Asegura calidad mínima |
| Reglas de seguridad | Protegen datos y sistemas |
| Horarios de producción | Protegen tiempo de descanso |

### Restricciones inertes (Inert Constraints)

**Definición**: Reglas que existen pero nadie sabe por qué. No habilitan ni protegen.

| Ejemplo | Problema |
|---------|----------|
| "Aprobación del gerente para todo" | Frenos innecesarios |
| "Reportes semanales obligatorios" | Nadie los lee |
| "Horario estricto de entrada" | No importa si el trabajo se entrega |

**Management 3.0 recomienda**: Identificar y eliminar las restricciones inertes.

## El marco de restricciones alineadas

### Preguntas para cada restricción

1. **¿Sirve al propósito?** — ¿Conecta con el "por qué" de la organización?
2. **¿Habilita o bloquea?** — ¿Aumenta o reduce la capacidad del equipo?
3. **¿Es proporcional?** — ¿El costo de la restricción es menor que el beneficio?
4. **¿Es clara?** — ¿Todos la entienden de la misma manera?
5. **¿Es revisable?** — ¿Se puede ajustar cuando las circunstancias cambian?

### Decisiones posibles

| Si la restricción... | Acción |
|----------------------|--------|
| Sirve al propósito y habilita | **Mantener** y comunicar |
| Sirve pero bloquea | **Modificar** para que habilite |
| No sirve al propósito | **Eliminar** |
| Es clara pero no revisable | **Agregar ciclo de revisión** |

## Autonomía dentro de restricciones

Management 3.0 usa el modelo de **autonomía con guardrails**:

```
                    PROPÓSITO
                       │
              ┌────────┴────────┐
              │   RESTRICCIONES │
              │   alineadas     │
              └────────┬────────┘
                       │
            ┌──────────┴──────────┐
            │     AUTONOMÍA       │
            │   del equipo        │
            └──────────┬──────────┘
                       │
              ┌────────┴────────┐
              │   DECISIONES    │
            │  del equipo       │
            └───────────────────┘
```

El equipo es **libre de tomar cualquier decisión** que no viole las restricciones alineadas. Las restricciones definen el espacio, no el camino.

## Ejemplo práctico

**Organización**: Empresa de software financiero

| Restricción | Tipo | Justificación |
|-------------|------|---------------|
| Datos financieros cifrados en tránsito y reposo | Protección | Cumplimiento regulatorio |
| Deploy solo con tests passing | Habilitante | Confianza para entregar rápido |
| 3 deployes por semana mínimo | Habilitante | Fuerza a pensar incremental |
| Aprobación de arquitecto para cada cambio | Inerte | Eliminar — genera cuellos de botella |
| Horario de oficina 9-5 | Inerte | Revisar — ¿realmente se necesita? |

## Errores comunes

- **Restricciones ocultas**: Si la gente no las conoce, no pueden respetarlas.
- **Restricciones contradictorias**: "Sé creativo pero usa esta plantilla exacta."
- **Restricciones sin fecha de revisión**: Se convierten en inertes con el tiempo.
- **Demasiadas restricciones**: Más de 5-7 generan parálisis.

## Referencias

- Appelo, J. (2011). *Management 3.0*
- Purple, D. (2018). *Constraints Enable Creativity*
