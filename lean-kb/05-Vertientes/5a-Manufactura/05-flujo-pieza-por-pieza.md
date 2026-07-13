---
title: "Flujo Pieza por Pieza (One-Piece Flow)"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/manufactura
created: 2026-07-12
updated: 2026-07-12
category: "Lean Manufacturing"
aliases:
  - One Piece Flow
  - Flujo de Una Pieza
related:
  - "[[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]]"
  - "[[05-Vertientes/5a-Manufactura/03-diseno-flujo-produccion]]"
  - "[[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]]"
---

# Flujo Pieza por Pieza (One-Piece Flow)

## Definición

One-Piece Flow es mover **un solo producto** a la vez a través de todas las estaciones de trabajo, completándolo antes de iniciar el siguiente. Es la forma más pura de [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull|producción pull]].

> *"Si pudieras producir pieza por pieza, todo el desperdicio se haría visible inmediatamente."* — Taiichi Ohno

## Beneficios

| Beneficio | Antes (lote) | Después (pieza por pieza) |
|-----------|-------------|--------------------------|
| Lead time | 5 días | 5 minutos |
| WIP | 500 unidades | 1 unidad |
| Defectos detectados | Al final del lote | En la siguiente estación |
| Espacio requerido | 200 m² | 50 m² |
| Flexibilidad | Baja | Alta |

## Requisitos para implementar

1. **Layout en célula** — [[05-Vertientes/5a-Manufactura/03-diseno-flujo-produccion|diseño U]] para facilitar el movimiento
2. **Trabajo estandarizado** — cada operación documentada y consistente
3. **Balanceo de línea** — tiempos de ciclo similares entre estaciones
4. **Calidad en la fuente** — cada operador inspecciona su trabajo
5. **Máquinas confiables** — [[03-Pilares/01-cero-defectos|OEE alto]] para no interrumpir el flujo
6. **Flexibilidad de operadores** — capacidad de múltiples skills (multi-process handling)

## Desafíos y soluciones

| Desafío | Solución |
|---------|----------|
| Tiempos de ciclo muy diferentes | Combinar estaciones o redistribuir trabajo |
| Cambios frecuentes de modelo | [[05-Vertientes/5a-Manufactura/07-cambio-rapido-smed-practico\|SMED]] para reducir setup |
| Operadores resistentes al cambio | Involucrar en el diseño y piloto gradual |
| Máquinas poco confiables | TPM como paso previo |
| Proveedores no confiables | [[05-Vertientes/5a-Manufactura/06-sistema-supermercado\|Supermercados]] como buffer |

## Métricas clave

- **Lead time** — tiempo desde inicio hasta entrega de una pieza
- **Takt time** — ritmo de producción = tiempo disponible / demanda
- **Tiempo de ciclo real** — tiempo que toma cada estación
- **Nivel de WIP** — piezas en proceso simultáneamente

## Proceso de implementación

1. Seleccionar una línea candidata (producto estable, demanda regular)
2. Medir estado actual (lead time, WIP, defectos)
3. Rediseñar layout en célula U
4. Establecer trabajo estandarizado
5. Balancear línea según takt time
6. Pilotar con reducción gradual de lote
7. Medir resultados y ajustar
8. Expandir a otras líneas

## Conexiones

- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Fundamentos de Lean Manufacturing
- [[05-Vertientes/5a-Manufactura/03-diseno-flujo-produccion]] — Layout de celda como prerequisito
- [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]] — Pull como sistema de control
- [[05-Vertientes/5a-Manufactura/07-cambio-rapido-smed-practico]] — SMED para viabilizar small lot production
- [[03-Pilares/01-cero-defectos]] — Calidad integrada en cada paso
- [[04-Mentalidad/01-kaizen-continuo]] — Mejora continua del flujo
