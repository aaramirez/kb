---
title: "Métricas Lean"
tags:
  - lean/implementacion
  - type/concepto
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Implementación"
aliases:
  - "Lean Metrics"
  - "Metricas Lean"
  - "Key Performance Indicators Lean"
related:
  - "[[17-dashboard-kpi-lean]]"
  - "[[04-sistema-gestion-diaria]]"
  - "[[15-contabilidad-lean]]"
  - "[[08-flujo]]"
  - "[[07-cadena-de-valor]]"
---

# Métricas Lean

Las **Métricas Lean** son los indicadores que permiten medir el desempeño de un sistema de producción o servicio desde la perspectiva del [[06-valor|valor]] para el cliente y la eliminación de [[03-Desperdicios/02-muda-desperdicio|desperdicios]].

## ¿Por Qué son Importantes?

Las métricas Lean:

- Hacen visible el [[08-flujo|flujo]] de valor
- Identifican oportunidades de mejora
- Sustentan la toma de decisiones
- Permiten comparar antes y después
- Mantienen el foco en lo que importa

## Métricas de Tiempo

### Lead Time (Tiempo de Entrega)

El tiempo total desde que el cliente hace un pedido hasta que lo recibe.

- Incluye: tiempo de procesamiento + tiempo de espera + tiempo de transporte
- Objetivo: reducir continuamente
- Fórmula: Tiempo de entrega = Procesamiento + Espera + Transporte

### Cycle Time (Tiempo de Ciclo)

El tiempo que toma completar un producto o servicio desde que inicia hasta que termina un paso del proceso.

- Mide la velocidad del proceso
- Debe compararse con el [[09-takt-time|Takt Time]]
- Se mide por cada paso del proceso

### Takt Time (Tiempo de Ritmo)

El ritmo al que se debe producir para satisfacer la demanda del cliente.

- Fórmula: Takt Time = Tiempo de trabajo disponible / Demanda del cliente
- Es el "metrónomo" de la producción
- Conecta demanda con capacidad

```
Ejemplo:
Tiempo disponible: 480 min/día
Pausas: 60 min
Tiempo neto: 420 min
Demanda: 210 unidades/día
Takt Time = 420 / 210 = 2 min/unidad
```

### Processing Time (Tiempo de Procesamiento)

El tiempo en que el valor se agrega realmente al producto o servicio.

- Es el tiempo que el cliente está dispuesto a pagar
- Debería ser la mayor parte del Lead Time
- Proporción: Valor agregado / Lead Time total

## Métricas de Calidad

### First Pass Yield (FPY)

Porcentaje de productos o servicios que pasan sin retrabajo en el primer intento.

- FPY = (Unidades correctas / Total unidades) × 100%
- Meta: 100% (perfección)
- Indica calidad en la fuente

### Defects Per Million Opportunities (DPMO)

Número de defectos por millón de oportunidades.

- Usado en Six Sigma y Lean Six Sigma
- Mide la capability del proceso
- Indica nivel de calidad relativo

### Cost of Poor Quality (COPQ)

Costo total de no hacer las cosas bien la primera vez.

- Incluye: retrabajo, scrap, garantías, quejas
- Debe medirse y reducirse continuamente
- Conecta calidad con resultados financieros

## Métricas de Eficiencia

### OEE (Overall Equipment Effectiveness)

Efectividad global del equipo.

- OEE = Disponibilidad × Rendimiento × Calidad
- Meta: 85%+ (world class)
- Descompone las pérdidas en categorías

| Componente | Descripción | Pérdidas típicas |
|------------|-------------|-----------------|
| Disponibilidad | Tiempo que el equipo está运作 | Paradas, cambios |
| Rendimiento | Velocidad real vs diseño | Velocidad reducida, micro-paradas |
| Calidad | Productos buenos vs total | Defectos, scrap |

### Inventory Turns (Rotación de Inventario)

Cuántas veces se renueva el inventario en un período.

- Vueltas = Costo de ventas / Inventario promedio
- Más vueltas = menos inventario estancado
- Indica eficiencia del [[09-sistema-de-tirón|sistema de tirón]]

### Process Cycle Efficiency (Eficiencia del Ciclo)

Proporción del tiempo de ciclo que agrega valor.

- Eficiencia = Tiempo de valor agregado / Tiempo total del ciclo
- Objetivo: >25% (muchas organizaciones están en 5-10%)
- Revela cuánto desperdicio hay en el proceso

## Leading vs Lagging Indicators

### Leading Indicators (Adelante)

Predictivos del futuro éxito:

- Número de ideas de mejora implementadas
- Horas de capacitación por empleado
- Frecuencia de [[06-gemba|Gemba walks]]
- Cumplimiento del [[11-trabajo-estandar-lider|trabajo estándar del líder]]

### Lagging Indicators (Atrás)

Resultados del pasado:

- Ventas
- Satisfacción del cliente
- Costos
- Calidad del producto

## Tabla Resumen de Métricas

| Métrica | Fórmula | Target típico |
|---------|---------|---------------|
| Lead Time | Espera + Procesamiento + Transporte | Minimizar |
| Cycle Time | Tiempo de un ciclo completo | ≤ Takt Time |
| Takt Time | Tiempo neto / Demanda | Igual a demanda |
| FPY | Buenos / Total × 100% | >99% |
| OEE | Disp × Rend × Calidad | >85% |
| Inventory Turns | Costo ventas / Inventario | >8 vueltas/año |

## Conexiones

- [[17-dashboard-kpi-lean|Dashboard KPI]] — Cómo visualizar estas métricas
- [[04-sistema-gestion-diaria|Gestión diaria]] — Donde se revisan las métricas
- [[08-flujo|Flujo]] — Las métricas de tiempo miden el flujo
- [[07-cadena-de-valor|Cadena de valor]] — Las métricas se asignan por cadena
- [[09-takt-time|Takt Time]] — El ritmo que guía la producción
- [[15-contabilidad-lean|Contabilidad Lean]] — La perspectiva financiera
- [[09-kanban|Kanban]] — Las métricas alimentan el sistema de tirón

## Lecturas Recomendadas

- *Learning to See* — Mike Rother, John Shook
- *Value Stream Mapping* — David Tanski
