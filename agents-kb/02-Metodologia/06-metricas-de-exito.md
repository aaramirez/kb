---
title: "Métricas de Éxito"
tags:
  - agents/metodologia
  - type/referencia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Metodología"
aliases:
  - "KPIs"
  - "ROI"
related:
  - "[[01-framework-de-adopcion]]"
  - "[[05-fase-madurez]]"
---

# Métricas de Éxito

## Framework de Métricas

### Nivel 1: Desempeño del Agente

| Métrica | Fórmula | Target |
|---------|---------|--------|
| **Tasa de Resolución** | Casos resueltos / Total casos | > 70% |
| **Tiempo Promedio de Respuesta** | Tiempo total / # interacciones | < 30s |
| **Tasa de Escalamiento** | Casos escalados / Total casos | < 30% |
| **Satisfacción del Usuario** | Encuesta post-uso (1-5) | > 4.0 |
| **Tasa de Error** | Errores / Total interacciones | < 5% |

### Nivel 2: Impacto en el Negocio

| Métrica | Fórmula | Target |
|---------|---------|--------|
| **Ahorro de Tiempo** | (Tiempo antes - Tiempo después) / Tiempo antes | > 30% |
| **Reducción de Costos** | (Costo antes - Costo después) / Costo antes | > 20% |
| **Mejora en Calidad** | Errores antes vs después | > 50% reducción |
| **Velocidad de Respuesta** | Tiempo antes vs después | > 50% mejora |

### Nivel 3: ROI

```
ROI = (Beneficio - Costo) / Costo × 100

Beneficio = Ahorro de tiempo × Costo hora × # usuarios
          + Reducción de errores × Costo error
          + Mejora en satisfacción × Valor lifetime

Costo = Costo LLM (tokens)
      + Costo infraestructura
      + Costo de implementación
      + Costo de mantenimiento
```

## Dashboard de Métricas

### Semanal
- Total de interacciones
- Tasa de resolución
- Errores principales
- Feedback de usuarios

### Mensual
- ROI acumulado
- Comparativa con baseline
- Tendencias de uso
- Costos de LLM

### Trimestral
- Impacto en KPIs del área
- Satisfacción del empleado
- Nuevos casos de uso
- Evolución de la madurez

## Métricas por Fase

| Fase | Métrica Principal | Target |
|------|-------------------|--------|
| **Piloto** | Tasa de resolución | > 60% |
| **Escala** | # de agentes activos | > 10 |
| **Madurez** | ROI acumulado | > 5x |

## Ver también

- [[01-framework-de-adopcion|Framework]]
- [[05-fase-madurez|Madurez]]
- [[08-Casos-Uso/README|Casos de Uso Reales]]
