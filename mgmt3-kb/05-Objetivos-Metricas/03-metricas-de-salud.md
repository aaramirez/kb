---
title: "Métricas de Salud del Sistema"
tags:
  - mgmt3/objetivos
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Objetivos y Métricas"
aliases:
  - "System Health Metrics"
  - "Happiness, Flow, Quality"
related:
  - "[[02-okrs-management-30]]"
  - "[[04-ecosistema-metricas]]"
  - "[[09-metricas-individuales-vs-equipos]]"
---

# Métricas de Salud del Sistema

## El modelo de salud de Management 3.0

Jurgen Appelo define tres dimensiones de salud para un equipo u organización:

```
        Salud del Sistema
       /       |        \
  Felicidad   Flujo   Calidad
```

Estas dimensiones no compiten entre sí. Un sistema saludable mantiene las tres en equilibrio.

## Las tres dimensiones

### 1. Felicidad (Happiness)

**¿Están las personas contentas con su trabajo y entorno?**

| Métrica | Cómo medir | Frecuencia |
|---------|------------|------------|
| eNPS (Employee Net Promoter Score) | "¿Recomendarías trabajar aquí?" (0-10) | Trimestral |
| Satisfacción del equipo | Encuesta de 1-5 en áreas clave | Mensual |
| Retención voluntaria | % de personas que se van por elección propia | Trimestral |
| Espacio de maniobra | ¿Tienen autonomía real? | En retro |

**Señales de alerta**: Alta rotación, ausentismo creciente, desinterés en retrospectivas, "presentismo" (estar físicamente pero no mentalmente).

### 2. Flujo (Flow)

**¿El trabajo fluye sin bloqueos ni cuellos de botella?**

| Métrica | Cómo medir | Frecuencia |
|---------|------------|------------|
| Lead Time | Tiempo desde idea hasta entrega | Por historia |
| Cycle Time | Tiempo desde que se empieza hasta que se entrega | Por historia |
| Throughput | Historias completadas por período | Semanal |
| WIP (Work in Progress) | Trabajo simultáneo en curso | Diario |
| Flujo de valor | % del tiempo que agrega valor vs esperas | Mensual |

**Señales de alerta**: WIP alto y creciente, historias "atascadas" por días,大量 de trabajo "casi listo" sin entregar.

### 3. Calidad (Quality)

**¿El producto funciona bien y se puede mantener?**

| Métrica | Cómo medir | Frecuencia |
|---------|------------|------------|
| Tasa de defectos | Defectos por功能 o por release | Por sprint |
| Cobertura de tests | % de código con tests automatizados | Semanal |
| Downtime | Tiempo fuera de servicio | Mensual |
| Deuda técnica | Horas estimadas para resolver deuda | Trimestral |
| Satisfacción del cliente | Encuestas, NPS, CSAT | Mensual o trimestral |

**Señales de alerta**: Defectos que aumentan, "heat fixes" frecuentes, tests desactivados, miedo a deployar.

## Indicadores líderes vs rezagados

| Tipo | Definición | Ejemplo |
|------|------------|---------|
| **Líder (Leading)** | Predictivo, adelanta tendencias | Satisfacción del equipo (si baja, la productividad caerá) |
| **Rezagado (Lagging)** | Confirmatorio, muestra resultados pasados | Revenue trimestral (ya pasó, no puedes cambiarlo) |

Management 3.0 prioriza indicadores líderes porque permiten **actuar antes** del problema, no después.

```
Indicadores líderes → Permiten ajustar → Mejores resultados rezagados
```

## Tablero de salud del sistema

Un tablero completo incluye al menos una métrica de cada dimensión:

```
┌─────────────────────────────────────────────┐
│           SALUD DEL SISTEMA                 │
├──────────────┬──────────────┬───────────────┤
│  FELICIDAD   │    FLUJO     │   CALIDAD     │
├──────────────┼──────────────┼───────────────┤
│ eNPS: 42     │ Lead: 8 días │ Defectos: 2   │
│ Satisf: 4.1  │ WIP: 5       │ Cobertura: 78%│
│ Retención:92%│ Throughput:12│ NPS cliente:65│
└──────────────┴──────────────┴───────────────┘
```

## Errores comunes

- **Solo medir output**: "Completamos 50 historias" no dice nada sobre calidad o felicidad.
- **Ignorar felicidad**: "No se puede medir" es falso. Hay herramientas probadas.
- **Mejorar una dimensión a costa de otra**: Más velocidad a costa de calidad es un mal trade-off.

## Referencias

- Appelo, J. (2011). *Management 3.0: Leading Agile Developers, Developing Agile Leaders*
- Anderson, D. (2010). *Kanban: Successful Evolutionary Change for Your Technology Business*
