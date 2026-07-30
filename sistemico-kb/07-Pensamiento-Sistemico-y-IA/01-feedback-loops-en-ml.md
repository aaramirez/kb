---
title: Bucles de Feedback en Machine Learning
tags:
  - sistemico/ia
  - type/concepto
source: Widrow (1960), Sutton & Barto (2018), Amershi et al. (2019)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - ML Feedback Loops
  - Data Flywheel
  - Model Drift
---

# Bucles de Feedback en Machine Learning

El entrenamiento y la operación de sistemas de ML están gobernados por [[02-Conceptos-Clave/01-bucles-retroalimentacion|bucles de retroalimentación]]. Entenderlos es esencial para diseñar sistemas que aprendan bien y no degeneren.

## Tipos de Bucles

### 1. Data Flywheel (Bucle Reforzador R)
```
  Más usuarios → Más datos → Mejor modelo → Mejor producto → Más usuarios
```

**Riesgo**: Si el modelo tiene sesgos, el flywheel los amplifica. Más datos sesgados → modelo más sesgado → más decisiones sesgadas.

### 2. Feedback Loop de Producción (R o B según diseño)

Cuando un modelo en producción afecta los datos que recibe:

| Tipo | Comportamiento | Ejemplo |
|------|---------------|---------|
| **Exposición** (R) | El modelo muestra contenido X → usuarios consumen X → datos muestran que X funciona → más X | Recomendación de videos |
| **Corrección** (B) | Detección de spam → marca spam → menos spam → modelo mejora | Filtro de emails |
| **Sesgo auto-reforzado** (R) | Modelo recomienda hombres para puestos técnicos → más hombres contratados → datos confirman patrón → más recomendaciones sesgadas | Hiring AI |

### 3. Bucles de Entrenamiento (B)

```
  Loss → Backprop → Actualización → Loss menor → (repite)
```
El bucle fundamental del aprendizaje supervisado es un balanceador: minimiza la función de pérdida.

### 4. Exploration vs. Exploitation (R vs. B)

```
  Explotar (R) → Máximo beneficio inmediato → Ignora alternativas → Estancamiento
  Explorar (B) → Prueba alternativas → Aprende → Mejora a largo plazo
```

## Model Drift como Falla Sistémica

El drift ocurre cuando la relación entre inputs y outputs cambia —el sistema ya no refleja la realidad.

### Tipos de Drift
| Tipo | Descripción | Bucle asociado |
|------|-------------|----------------|
| **Concept drift** | La relación input-output cambia | El modelo predice basado en patrones obsoletos |
| **Data drift** | La distribución de inputs cambia | El modelo recibe datos diferentes al training |
| **Feedback drift** | El feedback loop distorsiona los datos | El modelo crea su propia realidad |

## Diseño Sistémico de Bucles

Para diseñar bucles saludables en sistemas de ML:

1. **Identifica el tipo de bucle**: ¿Reforzador o balanceador?
2. **Mide el drift**: Monitorea continuamente la distribución de datos
3. **Introduce balanceadores**: Mecanismos que contrarresten la amplificación de sesgo
4. **Acorta retardos**: Feedback más rápido → corrección más rápida
5. **Diseña para intervención**: El sistema debe permitir corrección humana

## Conexión con la KB

Este concepto conecta con:
- [[02-Conceptos-Clave/01-bucles-retroalimentacion]] — Los dos tipos fundamentales
- [[02-Conceptos-Clave/05-limites-y-retardos]] — Retardos en detección de drift
- [[02-Conceptos-Clave/02-arquetipos-sistemicos]] — Arquetipos en ML (desplazamiento de carga, límites del crecimiento)
- [[07-Pensamiento-Sistemico-y-IA/04-rlhf-como-sistema]] — RLHF como bucle balanceador

## Referencias

- Sutton, R. & Barto, A. (2018). *Reinforcement Learning: An Introduction.* MIT Press.
- Widrow, B. & Hoff, M. (1960). "Adaptive Switching Circuits." *IRE WESCON.*
- Amershi, S. et al. (2019). "Software Engineering for Machine Learning." *ICSE.*
- Sculley, D. et al. (2015). "Hidden Technical Debt in Machine Learning Systems." *NeurIPS.*
