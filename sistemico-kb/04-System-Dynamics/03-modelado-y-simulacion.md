---
title: Modelado y Simulación en System Dynamics
tags:
  - sistemico/system-dynamics
  - type/guia
source: Sterman (2000), Forrester (1961)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Simulation Modeling
  - Modelado Sistémico
---

# Modelado y Simulación en System Dynamics

## El Ciclo de Modelado

Forrester estableció un proceso iterativo para construir modelos de sistemas:

```
  1. Articular Problema
         │
  2. Formular Hipótesis Dinámica
         │
  3. Formular Modelo (CLD + Stock & Flow)
         │
  4. Simular
         │
  5. Validar y Refinar
         │
  6. Diseñar Intervenciones
         │
  ──→ Volver al paso 1 ──→ (iterar)
```

## Principios

### 1. El Problema, no el Sistema
No modelas "la empresa", modelas **un problema específico**: por qué los costos crecen más que los ingresos, o por qué la calidad no mejora.

### 2. Hipótesis Dinámica
Una teoría sobre **qué estructura genera el comportamiento observado**. Ejemplo: "El crecimiento de usuarios está limitado por capacidad de soporte, no por falta de demanda."

### 3. Modelo Mínimo Viable
Comenzar con el modelo más simple que pueda explicar el comportamiento. Agregar complejidad solo cuando sea necesario.

### 4. Validación Continua
El modelo se valida contra:
- **Comportamiento real**: ¿Genera los mismos patrones?
- **Robustez**: ¿Se comporta razonable bajo condiciones extremas?
- **Sensibilidad**: ¿Cambia drásticamente con pequeñas variaciones?

## Errores Comunes en Modelado

| Error | Consecuencia |
|-------|-------------|
| Modelar todo (sin límite) | Modelo inmanejable |
| Datos insuficientes | Falsa precisión |
| Confundir correlación con causalidad | Estructura incorrecta |
| Ignorar retardos | Simulación irrelevante |
| Validar solo con ajuste histórico | Sobre-ajuste |

## Simulación

La simulación permite experimentar con el sistema sin consecuencias reales. Preguntas típicas:

- ¿Qué pasa si duplicamos la inversión?
- ¿Cuánto tardaría en recuperarse si ocurre X?
- ¿Qué punto de apalancamiento tiene mayor impacto?

## Conexión con IA

El ciclo de modelado de System Dynamics es directamente análogo al ciclo de desarrollo de sistemas de IA:

1. **Articular problema** → Definir tarea y métricas
2. **Hipótesis dinámica** → ¿Qué arquitectura funcionará?
3. **Formular modelo** → Construir pipeline de datos + modelo
4. **Simular** → Evaluar en test set, validación cruzada
5. **Validar** → Monitoreo en producción, detección de drift
6. **Intervenir** → Re-entrenar, ajustar, rediseñar

En [[07-Pensamiento-Sistemico-y-IA/06-diseno-sistemas-ai-native|sistemas AI-Native]], este ciclo debe ser **continuo**: el modelo nunca está "terminado", está permanentemente en iteración.

## Referencias

- Sterman, J. (2000). *Business Dynamics.* McGraw-Hill.
- Forrester, J. (1961). *Industrial Dynamics.* MIT Press.
- Richardson, G. & Pugh, A. (1981). *Introduction to System Dynamics Modeling.*
