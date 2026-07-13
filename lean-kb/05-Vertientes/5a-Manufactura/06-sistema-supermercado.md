---
title: "Sistema Supermercado"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/manufactura
created: 2026-07-12
updated: 2026-07-12
category: "Lean Manufacturing"
aliases:
  - Sistema Supermercado
  - Supermarket System
related:
  - "[[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]]"
  - "[[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]]"
  - "[[01-Glosario/G-02-kanban]]"
---

# Sistema Supermercado

## ¿Qué es un supermercado en Lean?

Un supermercado es un **punto de inventario pequeño** ubicado entre dos procesos. Funciona igual que un supermercado real: el cliente (proceso downstream) toma lo que necesita y el proveedor (proceso upstream) repone lo consumido.

> *"El supermercado es el buffer más pequeño que permite flujo continuo entre procesos con tiempos de ciclo diferentes."*

## Cómo funciona

```
Proceso A ──→ [ SUPERMARKET ] ──→ Proceso B
  (upstream)    ↑ inventario       (downstream)
                 │ reposición
                 └── kanban de señal
```

1. Proceso B toma una pieza del supermercado
2. Se genera un kanban de reposición
3. Proceso A produce exactamente lo que se tomó
4. El kanban regresa al supermercado con la pieza nueva

## Diseño del supermercado

| Parámetro | Criterio | Consideración |
|-----------|----------|---------------|
| **Capacidad máxima** | Espacio físico disponible | No exceder ni un item |
| **Capacidad mínima** | Tiempo de reposición × demanda | Nunca quedarse sin stock |
| **Cantidad de reorden** | Lote de producción del upstream | Equilibrar con SMED |
| **Política de reposición** | FIFO estricto | Primeras entradas = primeras salidas |
| **Ubicación** | Punto de uso en la línea | Acceso fácil, sin caminata |

## Tipos de supermercados

### Supermercado de componentes
- Materie prima o partes compradas
- Reposición desde almacén o proveedor
- Kanban electrónico o físico

### Supermercado de subensambles
- Productos semiterminados
- Reposición desde célula upstream
- Vinculado con [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull|kanban de producción]]

### Supermercado de finished goods
- Productos terminados listos para envío
- Último buffer antes del cliente
- Base para [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull|sistema pull]] completo

## Implementación

1. **Analizar flujo** — mapear con [[02-Fundamentos/02-cadena-de-valor|Value Stream Mapping]]
2. **Identificar discontinuidades** — procesos con tiempos de ciclo diferentes
3. **Calcular cantidades** — fórmula basada en demanda, lead time y frecuencia
4. **Diseñar espacio** — ubicación física, señalización visual
5. **Definir reglas** — quién repone, cuándo, cuánto
6. **Pilotar** — empezar con un solo supermercado
7. **Reducir tamaño** — iterativamente, forzando mejora

## Errores comunes

- Supermercado demasiado grande (oculta problemas de variación)
- No respetar FIFO (genera obsolescencia)
- Reposición manual sin señal kanban
- No medir rotación de inventario

## Conexiones

- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Fundamentos de Lean Manufacturing
- [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]] — Pull como filosofía del supermercado
- [[01-Glosario/G-02-kanban]] — Kanban como señal de reposición
- [[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza]] — One-Piece Flow como alternativa al supermercado
- [[05-Vertientes/5a-Manufactura/07-cambio-rapido-smed-practico]] — SMED reduce tamaño de supermercado
- [[01-Glosario/G-01-desperdicio]] — Inventario como desperdicio a minimizar
