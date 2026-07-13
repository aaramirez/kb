---
title: "Mapa Comparativo de Metodologías"
tags:
  - lean/complementarias
  - type/comparativa
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - Methodology Comparison
  - Comparativa Metodologías
related:
  - "[[01-six-sigma-vista-general]]"
  - "[[02-teoria-de-restricciones]]"
  - "[[03-tqm-gestion-calidad-total]]"
  - "[[04-8d-resolucion-problemas]]"
  - "[[05-fmea-analisis-modos-falla]]"
  - "[[06-spc-control-estadistico]]"
  - "[[08-toc-cinco-pasos]]"
---

# Mapa Comparativo de Metodologías

Comparación integral de las principales metodologías complementarias a [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]], incluyendo sus fortalezas, limitaciones y cuándo usar cada una.

## Tabla Comparativa General

| Aspecto | Lean | Six Sigma | TOC | TQM | 8D |
|---------|------|-----------|-----|-----|----|
| **Origen** | Toyota (1950s) | Motorola (1986) | Goldratt (1984) | Deming/Juran (1950s) | Ford (1980s) |
| **Enfoque** | Eliminar desperdicios | Reducir variabilidad | Gestionar restricciones | Calidad total | Resolver problemas |
| **Naturaleza** | Sistema de producción | Metodología | Paradigma | Filosofía | Herramienta |
| **Datos** | Cualitativos + cuantitativos | Altamente cuantitativos | Moderados | Moderados | Mixtos |
| **Velocidad** | Rápido (semanas) | Medio (meses) | Rápido (semanas) | Lento (años) | Medio (30-90 días) |
| **Cultura** | Kaizen | Belt system | TOC thinking | Calidad como hábito | Trabajo en equipo |
| **Alcance** | Procesos | Proyectos específicos | Todo el sistema | Organización completa | Problema específico |

## Fortalezas y Limitaciones

### Lean
| Fortalezas | Limitaciones |
|------------|-------------|
| Elimina desperdicios visibles | Débil en análisis estadístico profundo |
| Resultados rápidos | Puede ignorar variabilidad del proceso |
| Herramientas prácticas y simples | Requiere cultura Kaizen para sostener |
| Enfoque en flujo de valor | No提供 framework formal de resolución de problemas |

### Six Sigma
| Fortalezas | Limitaciones |
|------------|-------------|
| Reduce variabilidad con datos | Proyectos largos y costosos |
| Decisiones basadas en evidencia | Requiere personal capacitado (Belts) |
| Resultados medibles y sostenibles | Puede ser excesivo para problemas simples |
| Framework DMAIC estructurado | Enfoque en proyectos, no en flujo diario |

### TOC
| Fortalezas | Limitaciones |
|------------|-------------|
| Enfoca esfuerzo donde más impacta | Puede ignorar desperdicios en no-restricciones |
| Resultados rápidos sin inversión | La restricción puede ser difícil de identificar |
| Maximiza throughput del sistema | Menos herramientas prácticas que Lean |
| Ciclo de mejora continua | No aborda calidad directamente |

### TQM
| Fortalezas | Limitaciones |
|------------|-------------|
| Transformación cultural profunda | Lento de implementar |
| Compromiso de toda la organización | Difícil de medir resultados |
| Enfoque holístico | Puede quedar en teoría sin acción |
| Base para cualquier otra metodología | Requiere liderazgo fuerte y constante |

### 8D
| Fortalezas | Limitaciones |
|------------|-------------|
| Estructura clara y repetible | Reactivo (después del problema) |
| Documentación formal para auditorías | Puede ser burocrático para problemas simples |
| Contención inmediata al cliente | No siempre llega a la causa raíz real |
| Funciona bien en industria regulada | No previene, solo resuelve |

## Cuándo Usar Cada Metodología

```
¿Cuál es tu situación?
         │
         ├── Hay desperdicios visibles en el flujo
         │         → LEAN
         │
         ├── El proceso tiene mucha variabilidad
         │         → SIX SIGMA
         │
         ├── Hay un cuello de botella claro
         │         → TOC
         │
         ├── Se necesita transformar la cultura de calidad
         │         → TQM
         │
         ├── Ocurrió un problema específico y urgente
         │         → 8D
         │
         ├── Se necesita evaluar riesgos de diseño/proceso
         │         → FMEA
         │
         ├── Se necesita monitorear procesos continuamente
         │         → SPC
         │
         └── Se necesita optimizar variables de proceso
                   → DOE
```

## Combinaciones Populares

| Combinación | Qué Aporta |
|-------------|-----------|
| **Lean Six Sigma** | Velocidad de Lean + Precisión de Six Sigma |
| **Lean TOC** | Eliminación de desperdicios + Enfoque en restricciones |
| **TQM + Lean** | Filosofía de calidad + Herramientas de flujo |
| **8D + FMEA** | Resolución reactiva + Análisis preventivo |
| **SPC + FMEA** | Monitoreo continuo + Prevención de fallas |

## Flujo de Decisión

```
START → ¿Qué necesitas?
   │
   ├── Mejorar flujo y eliminar desperdicios → LEAN
   │
   ├── Reducir variabilidad y defectos → SIX SIGMA
   │
   ├── Maximizar throughput del sistema → TOC
   │
   ├── Crear cultura de calidad → TQM
   │
   ├── Resolver un problema específico → 8D
   │
   ├── Evaluar riesgos → FMEA
   │
   ├── Monitorear calidad → SPC
   │
   └── Optimizar parámetros → DOE

¿Necesitas más de uno?
   │
   ├── Lean + Six Sigma = Lean Six Sigma
   ├── Lean + TOC = Lean TOC
   └── 8D + FMEA = Ciclo completo preventivo-reactivo
```

## Relación con los Pilares de Lean

```
               Lean Manufacturing
                      │
         ┌────────────┼────────────┐
         ▼            ▼            ▼
       JIT         Jidoka       Kaizen
         │            │            │
    ┌────┴────┐  ┌────┴────┐  ┌───┴───┐
    │ TOC     │  │ SPC     │  │ TQM   │
    │(flujo)  │  │(calidad)│  │(cultura)│
    └─────────┘  └─────────┘  └───────┘
                      │
              ┌───────┴───────┐
              ▼               ▼
            8D              FMEA
         (reactivo)      (preventivo)
```

## Notas Relacionadas

- [[01-six-sigma-vista-general]] — Six Sigma en detalle
- [[02-teoria-de-restricciones]] — TOC en detalle
- [[03-tqm-gestion-calidad-total]] — TQM en detalle
- [[04-8d-resolucion-problemas]] — 8D en detalle
- [[05-fmea-analisis-modos-falla]] — FMEA en detalle
- [[06-spc-control-estadistico]] — SPC en detalle
- [[08-toc-cinco-pasos]] — Los 5 pasos de TOC
- [[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]] — Lean Six Sigma como vertiente
