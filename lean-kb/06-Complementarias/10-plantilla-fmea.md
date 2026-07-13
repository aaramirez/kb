---
title: "Plantilla FMEA"
tags:
  - lean/complementarias
  - type/plantilla
  - difficulty/avanzado
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - Plantilla FMEA
  - FMEA Template
related:
  - "[[05-fmea-analisis-modos-falla]]"
  - "[[04-Herramientas/11-poka-yoke]]"
  - "[[01-six-sigma-vista-general]]"
  - "[[06-spc-control-estadistico]]"
  - "[[07-doe-diseno-experimentos]]"
  - "[[04-8d-resolucion-problemas]]"
---

# Plantilla FMEA

Plantilla completa para realizar un [[05-fmea-analisis-modos-falla|FMEA]] (Failure Mode and Effects Analysis) de diseño o proceso. Incluye todas las columnas necesarias y escalas de calificación.

## Información General

```
═══════════════════════════════════════════════════
FMEA — ANÁLISIS DE MODOS DE FALLA
═══════════════════════════════════════════════════
Tipo:           ☐ DFMEA (Diseño)  ☐ PFMEA (Proceso)
Proyecto:       [Nombre del proyecto]
Responsable:    [Nombre]
Fecha inicio:   [DD/MM/YYYY]
Fecha revisión: [DD/MM/YYYY]
Versión:        [1.0]
═══════════════════════════════════════════════════
```

## Tabla FMEA

| Paso/Componente | Función | Modo de Falla | Efecto de la Falla | S | Causa(s) | O | Controles Actuales | D | RPN | Acción Recomendada | Responsable | Fecha | S | O | D | RPN |
|-----------------|---------|---------------|---------------------|---|----------|---|---------------------|---|-----|---------------------|-------------|-------|---|---|---|-----|
| | | | | | | | | | | | | | | | | |

## Escalas de Calificación

### Severidad (S) — Impacto en el cliente

| Calificación | Efecto | Criterio |
|:---:|---------|----------|
| 10 | Peligro sin aviso | Riesgo de seguridad sin advertencia |
| 9 | Peligro con aviso | Riesgo de seguridad con advertencia |
| 8 | Mayor | Pérdida total de función, no operable |
| 7 | Mayor | Pérdida parcial de función, degradado |
| 6 | Menor | Operable pero con incomodidad |
| 5 | Menor | Operable pero con inconvenientes |
| 4 | Very Low | Apariencia defectuosa, cliente notaría |
| 3 | Very Low | Apariencia defectuosa, cliente probablemente notaría |
| 2 | Leve | Apariencia, cliente probablemente no notaría |
| 1 | Ninguno | Sin efecto |

### Ocurrencia (O) — Probabilidad de la causa

| Calificación | Descripción | Frecuencia aproximada |
|:---:|-------------|----------------------|
| 10 | Muy alta | ≥1 en 2 |
| 9 | Alta | 1 en 3 |
| 8 | Alta | 1 en 8 |
| 7 | Moderada-Alta | 1 en 20 |
| 6 | Moderada | 1 en 80 |
| 5 | Moderada-Baja | 1 en 400 |
| 4 | Baja | 1 en 2,000 |
| 3 | Baja | 1 en 15,000 |
| 2 | Muy Baja | 1 en 150,000 |
| 1 | Remota | ≤1 en 1,500,000 |

### Detección (D) — Capacidad de detección

| Calificación | Descripción | Capacidad de detección |
|:---:|-------------|----------------------|
| 10 | Imposible | No hay control que detecte |
| 9 | Muy Baja | Controles muy improbables |
| 8 | Baja | Controles con baja probabilidad |
| 7 | Baja-Moderada | Controles probablemente no detecten |
| 6 | Moderada | Controles pueden detectar |
| 5 | Moderada-Alta | Controles probablemente detecten |
| 4 | Alta | Controles con buena probabilidad |
| 3 | Alta | Controles muy probablemente detecten |
| 2 | Muy Alta | Controles casi seguros |
| 1 | Certeza | Controles seguros / prevención automática |

## Priorización por RPN

| RPN | Nivel de Riesgo | Acción Requerida |
|-----|-----------------|------------------|
| **1-50** | Bajo | Monitorear, no requiere acción inmediata |
| **51-100** | Medio | Planificar acciones de reducción |
| **101-200** | Alto | Acción correctiva requerida |
| **201-1000** | Crítico | Acción inmediata, detener si es necesario |

**Nota:** Algunas organizaciones usan **Action Priority (AP)** en lugar de RPN, clasificando como High/Medium/Low según la combinación de S, O y D.

## Proceso de Llenado

1. **Identificar** el alcance (DFMEA o PFMEA)
2. **Listar** funciones/modos de falla por componente o paso
3. **Evaluar** Severidad (S) para cada efecto
4. **Identificar** causas y evaluar Ocurrencia (O)
5. **Revisar** controles actuales y evaluar Detección (D)
6. **Calcular** RPN = S × O × D
7. **Priorizar** los ítems con mayor RPN
8. **Definir** acciones correctivas con responsable y fecha
9. **Re-evaluar** S, O, D después de la acción
10. **Documentar** la reducción de RPN lograda

## Ejemplo Rápido

| Componente | Falla | Efecto | S | Causa | O | Control | D | RPN |
|------------|-------|--------|---|-------|---|---------|---|-----|
| Tornillo M6 | Se afloja | Vibración | 7 | Falta de torque | 4 | Inspección visual | 6 | 168 |
| Tornillo M6 | Se afloja | Vibración | 7 | Falta de torque | 4 | Torquímetro | 3 | 84 |

**Reducción de RPN:** De 168 a 84 (50% de mejora) al cambiar el control de inspección visual a torquímetro.

## Notas Relacionadas

- [[05-fmea-analisis-modos-falla]] — Teoría completa de FMEA
- [[04-Herramientas/11-poka-yoke]] — Acciones típicas de reducción de RPN
- [[01-six-sigma-vista-general]] — Six Sigma usa FMEA en fase Analyze
- [[06-spc-control-estadistico]] — SPC para monitorear variables de FMEA
- [[07-doe-diseno-experimentos]] — DOE para validar reducciones de RPN
- [[04-8d-resolucion-problemas]] — 8D como complemento reactivo
- [[04-Herramientas/19-trabajo-estandarizado]] — Estándares para controles actuales
