---
title: RLHF como Sistema
tags:
  - sistemico/ia
  - type/concepto
source: Christiano et al. (2017), Ouyang et al. (2022)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Reinforcement Learning from Human Feedback
  - RLHF
  - Alineamiento por Feedback
---

# RLHF como Sistema

RLHF (Reinforcement Learning from Human Feedback) es una técnica de entrenamiento que funciona como un **sistema cibernético** donde humanos y máquinas forman un bucle de retroalimentación.

## El Sistema Completo

```
  ┌──────────┐    Genera    ┌──────────┐   Evalúa   ┌──────────┐
  │  Modelo  │──────────────►│ Respuestas│◄───────────│ Humano   │
  │  (LM)    │               │           │            │(Feedback)│
  └────┬─────┘               └──────────┘            └────┬─────┘
       │                                                  │
       │            ┌──────────────┐                       │
       └────────────│ Reward Model │◄──────────────────────┘
                    │  (preferencias)│
                    └───────┬───────┘
                            │
                            ▼
                    ┌──────────────┐
                    │   PPO/Train │ (actualiza el modelo)
                    └──────────────┘
```

## Componentes

### 1. Modelo Base (LM)
Genera respuestas. El actor del sistema.

### 2. Reward Model (RM)
Codifica las preferencias humanas. Aprende a predecir qué respuesta preferirá un humano.

### 3. Política de Entrenamiento (PPO)
Algoritmo que actualiza el modelo base para maximizar el reward.

### 4. Humano
Fuente de retroalimentación. El "controlador" del sistema, aunque descentralizado.

## Bucles en RLHF

### Bucle Balanceador Principal
```
  Modelo genera → Humano evalúa → Reward Model → Actualización → Modelo mejora (B)
```
El sistema converge hacia comportamientos que el humano prefiere.

### Bucles Reforzadores (Riesgos)
```
  Reward Model aprende atajos → Modelo explota atajos → Más datos de atajos → Reward se degenera (R)
  (Reward hacking)
```

### Retardo Crítico
El feedback humano tiene un **retardo** significativo (horas o días). Durante ese tiempo, el modelo puede estar aprendiendo en la dirección equivocada. Ver [[02-Conceptos-Clave/05-limites-y-retardos]].

## Arquetipos Aplicados

| Arquetipo | En RLHF |
|-----------|---------|
| **Desplazamiento de la carga** | Confiar ciegamente en RM en lugar de evaluar directamente |
| **Límites del crecimiento** | El RM mejora hasta que choca con inconsistencia humana |
| **Soluciones rápidas** | Over-optimización de reward → comportamientos no deseados |

## Conexión con la KB

RLHF es un caso de estudio de cómo los conceptos clásicos de pensamiento sistémico se aplican a la IA moderna:

- [[02-Conceptos-Clave/01-bucles-retroalimentacion]] — Bucle balanceador humano-máquina
- [[02-Conceptos-Clave/05-limites-y-retardos]] — Retardo del feedback humano
- [[02-Conceptos-Clave/02-arquetipos-sistemicos]] — Reward hacking como arquetipo
- [[02-Conceptos-Clave/03-puntos-apalancamiento]] — ¿Dónde intervenir para mejorar alineamiento?
- [[03-Grandes-Pensadores/03-jay-forrester]] — RLHF como sistema de control cibernético
- [[03-Grandes-Pensadores/04-russell-ackoff]] — ¿Estamos optimizando el reward correcto?

## Referencias

- Christiano, P. et al. (2017). "Deep Reinforcement Learning from Human Preferences." *NeurIPS.*
- Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS.*
- Stiennon, N. et al. (2020). "Learning to summarize with human feedback." *NeurIPS.*
- Casper, S. et al. (2023). "Open Problems and Fundamental Limitations of RLHF." *arXiv.*
