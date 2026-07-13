---
title: "Desperdicio: Inventario"
tags:
  - lean/desperdicios
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Lean Manufacturing
aliases:
  - Inventario
  - Inventory
related:
  - "[[02-muda-desperdicio]]"
  - "[[05-desperdicio-sobreproduccion]]"
  - "[[06-desperdicio-espera]]"
  - "[[07-desperdicio-transporte]]"
  - "[[01-marco-3m]]"
  - "[[14-estrategias-eliminacion-desperdicios]]"
---

# Desperdicio: Inventario

**Inventario** como desperdicio se refiere al exceso de materia prima, trabajo en progreso (WIP) o producto terminado que no está agregando valor.

## Definición

El inventario se convierte en desperdicio cuando:
- Excede lo necesario para el flujo continuo
- Se acumula como buffer ante problemas
- Ocupa espacio y capital sin generar valor
- Oculta problemas subyacentes en el proceso

## Costos Ocultos del Inventario

El inventario excesivo genera costos que no siempre son visibles:

| Costo | Descripción |
|-------|-------------|
| Almacenamiento | Espacio, clima controlado, seguridad |
| Obsolescencia | Productos que caducan o quedan obsoletos |
| Manejo | Traslado, conteo, organización |
| Capital inmovilizado | Dinero "atrapado" en materiales |
| Daño | Roturas, deterioro, contaminación |
| Calidad | Los defectos se detectan tarde |

## Por qué se Acumula

### Sobreproducción
El origen principal — producir más de lo que se necesita. Ver [[05-desperdicio-sobreproduccion]].

### Tiempos de Preparación Largos
Se producen lotes grandes para compensar cambios de modelo lentos.

### Falta de Confianza
Se mantiene inventario de seguridad "por si acaso".

### Problemas de Calidad
Se produce extra para compensar defectos esperados.

### Lead Times Largos
Se pedantic materials con anticipación por tiempos de entrega largos.

## Contraerrestantes

### JIT (Just In Time)
Recibir y producir solo lo necesario, cuando se necesita.

### [[Kanban]]
Sistema de señalización que controla el flujo de materiales.

### Flujo Continuo (One-Piece Flow)
Mover una pieza a la vez, eliminando la acumulación.

### Reducción de Tiempos de Preparación (SMED)
Permitir lotes más pequeños sin penalización.

## El Inventario como Muleta

El inventario excesivo enmascara problemas reales. Reducir inventario expone problemas que deben resolverse:

```
Inventario alto → Procesos parecen estables
Inventario bajo  → Problemas se hacen visibles → Se resuelven
```

## Ejemplo

Un almacén contiene 30 días de inventario. Se reducen a 5 días y se descubren problemas de calidad, proveedores poco confiables y tiempos de setup largos. Resolviendo estos problemas, se alcanza 2 días de inventario con mayor estabilidad.

## Prerrequisitos

- [[02-muda-desperdicio]] — Los 8 desperdicios
- [[01-marco-3m]] — Marco conceptual 3M
