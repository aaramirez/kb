---
title: "Gemelos Digitales y Lean"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/lean-4
created: 2026-07-12
updated: 2026-07-12
category: "Vertientes"
aliases:
  - Digital Twins
  - Gemelos Digitales
related:
  - "[[01-lean-4-vista-general]]"
  - "[[03-iot-en-manufactura-lean]]"
  - "[[04-ia-mejora-continua]]"
  - "[[../../04-Herramientas/03-value-stream-mapping]]"
  - "[[../../03-Metodologias/01-lean-manufacturing]]"
---

# Gemelos Digitales y Lean

## ¿Qué es un gemelo digital?

Un **gemelo digital** (Digital Twin) es una réplica virtual de un proceso, producto o sistema físico que se actualiza en tiempo real con datos del mundo real.

## Aplicación en Lean

### Virtual Value Stream Mapping

El gemelo digital transforma el VSM clásico:

| VSM Clásico | VSM Digital |
|-------------|-------------|
| Hoja estática | Modelo dinámico |
| Datos capturados manualmente | Datos en tiempo real via IoT |
| Análisis puntual | Simulación continua |
| Mejoras hipotéticas | Mejoras validadas virtualmente |

### Simulación de escenarios

Permite probar cambios antes de implementarlos:

1. **Modelar** el proceso actual con datos reales
2. **Simular** cambios (nuevos límites WIP, redistribución de recursos)
3. **Evaluar** impacto sin riesgo operativo
4. **Implementar** solo lo validado

## Casos de uso

- **Línea de producción**: simular cambios en layout antes de reconfigurar
- **Cadena de suministro**: modelar impacto de nuevos proveedores
- **Procesos de oficina**: visualizar flujos de trabajo y cuellos de botella
- **Mantenimiento**: predecir fallas y optimizar calendarios

## Herramientas disponibles

- **Siemens Tecnomatix** — simulación de manufactura
- **Azure Digital Twins** — plataforma cloud de Microsoft
- **GE Digital** — gemelos para activos industriales
- **AnyLogic** — simulación multimétodo

## Retos

- **Calidad de datos**: un gemelo solo es tan bueno como sus datos
- **Costo de implementación**: requiere inversión en sensores e infraestructura
- **Complejidad**: no todo proceso necesita un gemelo digital
- **Resistencia**: el equipo debe confiar en el modelo

## Ver también

- [[../../04-Herramientas/03-value-stream-mapping]] - VSM como herramienta base
- [[03-iot-en-manufactura-lean]] - IoT como fuente de datos
- [[01-lean-4-vista-general]] - Marco Lean 4.0
