---
title: Diagramas de Bucles Causales (CLD)
tags:
  - sistemico/system-dynamics
  - type/herramienta
source: Sterman (2000), Meadows (2008)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Causal Loop Diagrams
  - CLD
---

# Diagramas de Bucles Causales (CLD)

Los **Causal Loop Diagrams (CLD)** son la herramienta fundamental de la System Dynamics para mapear las relaciones causales y los [[02-Conceptos-Clave/01-bucles-retroalimentacion|bucles de retroalimentación]] de un sistema.

## Elementos

### Variables
Nodos que representan elementos del sistema. Deben ser **nombres sustantivados** (no acciones).

```
Bien: "Precio", "Demanda", "Calidad del código"
Mal:  "Incrementar precio", "Mejorar calidad"
```

### Flechas Causales
```
Precio ──(+)──> Demanda    (relación directa)
Precio ──(−)──> Demanda    (relación inversa)
```

| Símbolo | Significado | Ejemplo |
|---------|-------------|---------|
| (+) | Misma dirección | +Precio → −Demanda: el signo va en la flecha |
| (−) | Dirección opuesta | +Precio → −Demanda |

### Bucles
```
B ──(+)──> C ──(+)──> A ──(−)──> B
         ╰─── Refuerzo (+) o Balance (−)
```

## Convención de Signos

Para determinar si un bucle es reforzador (R) o balanceador (B):

1. Cuenta los signos negativos (−) en el bucle
2. **Par**: Bucle balanceador (B)
3. **Impar**: Bucle reforzador (R)

```
Ejemplo:
A ──(+)──> B ──(+)──> C ──(+)──> A
(0 negativos = par = Balanceador)

A ──(−)──> B ──(+)──> C ──(+)──> A
(1 negativo = impar = Reforzador)
```

## Ejemplo: Crecimiento de Usuarios

```
                  ┌──────────────┐
                  │  Usuarios    │
                  └──────┬───────┘
                         │ (+)
                         v
                  ┌──────────────┐
           ┌──────│   Reviews    │
           │      └──────┬───────┘
           │             │ (+)
           │             v
           │      ┌──────────────┐
           │      │  Visibilidad │
           │      └──────────────┘
           ╰──────────(+)────────╯
                  (Bucle R: Crecimiento)
```

## Guía Práctica

1. **Define el propósito** — ¿Qué problema o comportamiento quieres entender?
2. **Identifica variables clave** — 5 a 15 variables como máximo
3. **Traza relaciones** — Conecta con flechas y signos
4. **Identifica bucles** — Marca R (reforzador) y B (balanceador)
5. **Busca retardos** — Marca con `||` las conexiones con delay
6. **Itera** — El modelo mejora al contrastarlo con la realidad

## Errores Comunes

| Error | Corrección |
|-------|------------|
| Usar verbos en variables | Usar sustantivos |
| Demasiadas variables | Máximo 15 para un CLD inicial |
| Mezclar indicadores con acciones | Separar métricas de decisiones |
| Ignorar retardos | Marcar delays explícitamente |

## Conexión con IA

Los CLDs son ideales para modelar [[07-Pensamiento-Sistemico-y-IA/01-feedback-loops-en-ml|bucles de retroalimentación en ML]]:

- Data flywheel: Usuarios → Datos → Modelo → Producto → Usuarios (R)
- Content moderation: Contenido → Detección → Revisión → Decisión → Contenido (B)
- Model drift: Predicciones → Feedback → Re-entrenamiento → Predicciones (B)

## Referencias

- Sterman, J. (2000). *Business Dynamics.* McGraw-Hill.
- Meadows, D. (2008). *Thinking in Systems.*
- Kim, D. (1992). *Systems Archetypes: Diagnosing Systemic Issues.*
