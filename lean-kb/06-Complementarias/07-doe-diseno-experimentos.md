---
title: "DOE (Diseño de Experimentos)"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/avanzado
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - DOE
  - Design of Experiments
  - Diseño de Experimentos
related:
  - "[[01-six-sigma-vista-general]]"
  - "[[06-spc-control-estadistico]]"
  - "[[05-fmea-analisis-modos-falla]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/05-dmaic-analizar]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/06-dmaic-mejorar]]"
  - "[[04-Herramientas/10-pdca]]"
---

# DOE — Diseño de Experimentos

## ¿Qué es DOE?

DOE (Design of Experiments) es una metodología estadística para **planificar, ejecutar y analizar experimentos** de manera eficiente, determinando el efecto de múltiples variables sobre un resultado.

> *"DOE nos permite aprender más con menos experimentos."*

## ¿Por Qué DOE y No "Un Factor a la Vez"?

| Método | Ventaja | Desventaja |
|--------|---------|------------|
| **OFAT** (One Factor at a Time) | Simple de entender | No detecta interacciones, requiere muchos experimentos |
| **DOE** | Detecta interacciones, eficiente en número de pruebas | Requiere conocimiento estadístico |

Ejemplo: Con 3 factores a 2 niveles cada uno:
- OFAT: 7 experimentos (1 + 3×2)
- DOE factorial: 8 experimentos pero con información de **interacciones**

## Conceptos Clave

| Concepto | Definición |
|----------|------------|
| **Factor** | Variable que se modifica (temperatura, presión, tiempo) |
| **Nivel** | Valor específico del factor (bajo, alto) |
| **Respuesta** | Resultado medido (calidad, rendimiento, defectos) |
| **Interacción** | Efecto combinado de dos o más factores |
| **Rango** | Diferencia entre el efecto mayor y menor de un factor |

## Tipos de Diseños

### Diseño Factorial Completo
- Prueba **todas** las combinaciones de factores y niveles
- Ideal para pocos factores (2-4) y niveles (2-3)
- Captura todas las interacciones

### Diseño Factorial Fraccionado
- Prueba una **fracción** de las combinaciones
- Ideal para muchos factores (5+)
- Asume que algunas interacciones de alto orden son insignificantes

### Diseño de Taguchi
- Usa **arreglos ortogonales** para reducir experimentos
- Enfocado en **robustez** (minimizar efectos del ruido)
- Popular en manufactura y ingeniería de calidad

### Diseño de Superficie de Respuesta (RSM)
- Modela la **relación no lineal** entre factores y respuesta
- Ideal para optimización (encontrar el mejor punto operativo)
- Usa diseños como Central Composite o Box-Behnken

## Método de Taguchi

Genichi Taguchi desarrolló un enfoque particular:

1. **Definir** la característica de calidad a mejorar
2. **Seleccionar** factores y niveles
3. **Elegir** arreglo ortogonal apropiado (L4, L8, L9, L16...)
4. **Ejecutar** los experimentos según el arreglo
5. **Analizar** la respuesta usando ANOVA y gráficas de S/N (Signal-to-Noise)
6. **Verificar** la configuración óptima

## DOE en el Contexto DMAIC

DOE es una herramienta clave en [[05-Vertientes/5b-Lean-Six-Sigma/06-dmaic-mejorar|DMAIC — Improve]]:

- **Analyze** — DOE identifica qué variables afectan el resultado
- **Improve** — DOE encuentra la configuración óptima de esas variables
- Se usa junto con [[06-spc-control-estadistico|SPC]] para validar mejoras

## Cuándo Usar DOE

- Se necesita entender el efecto de múltiples variables simultáneamente
- Hay interacciones entre variables que OFAT no puede capturar
- Se busca optimizar un proceso o producto
- Se requiere robustez ante variables de ruido (Taguchi)
- El proyecto Six Sigma está en fase Analyze o Improve

## Notas Relacionadas

- [[01-six-sigma-vista-general]] — Six Sigma integra DOE como herramienta avanzada
- [[06-spc-control-estadistico]] — SPC monitorea, DOE experimenta
- [[05-fmea-analisis-modos-falla]] — FMEA identifica qué experimentar
- [[05-Vertientes/5b-Lean-Six-Sigma/05-dmaic-analizar]] — DOE en fase Analyze
- [[05-Vertientes/5b-Lean-Six-Sigma/06-dmaic-mejorar]] — DOE en fase Improve
- [[04-Herramientas/10-pdca]] — DOE como parte del ciclo de mejora
- [[07-doe-diseno-experimentos]] — Auto-referencia para búsquedas
