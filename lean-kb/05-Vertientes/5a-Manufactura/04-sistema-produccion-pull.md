---
title: "Sistema de Producción Pull"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/manufactura
created: 2026-07-12
updated: 2026-07-12
category: "Lean Manufacturing"
aliases:
  - Produccion Pull
  - Pull Production
related:
  - "[[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]]"
  - "[[05-Vertientes/5a-Manufactura/06-sistema-supermercado]]"
  - "[[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza]]"
---

# Sistema de Producción Pull

## Pull vs Push

| Aspecto | Push (empuje) | Pull (jalo) |
|---------|---------------|-------------|
| **Disparador** | Pronóstico/plan maestro | Demanda real del cliente |
| **Inventario** | Alto — se produce "por si acaso" | Bajo — solo lo necesario |
| **Flexibilidad** | Baja — compromete recursos | Alta — se adapta a cambios |
| **Problemas** | Ocultos bajo inventario | Visibles inmediatamente |
| **Ejemplo** | Producir 1000 y esperar ventas | Producir solo lo pedido |

> *"Pull significa que nada se produce hacia adelante en el sistema hasta que el cliente downstream lo demanda."*

## Kanban — Señal de Pull

[[01-Glosario/G-02-kanban|Kanban]] es la herramienta más conocida para implementar pull. Un kanban puede ser:

- **Tarjeta física** — se mueve entre estaciones como señal de producción
- **Bin kanban** — contenedor vacío que indica necesidad de reposición
- **Electrónico** — señal digital en un sistema MES/ERP

### Reglas básicas de Kanban
1. No producir sin kanban
2. Producir exactamente la cantidad del kanban
3. El defecto se reporta al origen
4. Reducir número de kanban gradualmente (forzar mejora)

## Supermarket system

El [[05-Vertientes/5a-Manufactura/06-sistema-supermercado|sistema supermercado]] es un tipo de pull donde se mantiene un inventario pequeño entre procesos. Cuando el proceso downstream consume, el upstream repone.

### Diseño del supermercado
- **Cantidad máxima** — no exceder el espacio asignado
- **Cantidad mínima** — señal de reposición
- **Reposición FIFO** — primero en entrar, primero en salir
- **Visual** — nivel de inventario visible a simple vista

## Implementación paso a paso

1. **Identificar el flujo** — mapear cadena de valor con [[02-Fundamentos/02-cadena-de-valor|Value Stream Mapping]]
2. **Definir pacers** — ¿quién dispara la producción? (celda final, shipping)
3. **Diseñar kanban** — tipo, cantidad, contenido
4. **Calcular cantidades** — fórmula: Q = D × LT × (1 + safety) / replenishment freq
5. **Pilotar** — empezar con un solo producto/línea
6. **Reducir kanban** — iterar y mejorar

## Errores comunes

- Usar pull sin haber eliminado los desperdicios primero
- Kanban demasiado grande (oculta problemas)
- No respetar las reglas de pull cuando hay presión
- Confundir pull con simplemente "producir menos"

## Conexiones

- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Fundamentos de Lean Manufacturing
- [[05-Vertientes/5a-Manufactura/06-sistema-supermercado]] — Supermercados como mecanismo de pull
- [[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza]] — One-Piece Flow es pull en su forma más pura
- [[01-Glosario/G-02-kanban]] — Definición completa de kanban
- [[02-Fundamentos/02-cadena-de-valor]] — Value Stream Mapping para diseñar pull
- [[03-Pilares/01-cero-defectos]] — Pull expone problemas de calidad
