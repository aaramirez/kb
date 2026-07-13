---
title: "OEE (Overall Equipment Effectiveness)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - OEE
  - Efectividad Global de Equipos
  - Overall Equipment Effectiveness
related:
  - "[[15-tpm]]"
  - "[[22-seis-grandes-perdidas]]"
  - "[[14-takt-time]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
---

# OEE (Overall Equipment Effectiveness)

**OEE** (Overall Equipment Effectiveness) es la métrica estándar de [[Lean Manufacturing]] para medir la **efectividad global de los equipos de producción**. Cuantifica cuánto tiempo una máquina produce realmente a su máximo potencial, con la calidad correcta.

## Definición

OEE mide el porcentaje de tiempo en que una máquina está produciendo piezas buenas a la velocidad correcta. Es la métrica más utilizada en [[15-tpm|TPM]] para evaluar el rendimiento de los equipos.

> "OEE no es solo un número. Es una fotografía de las pérdidas ocultas en tu producción."

## Fórmula

```
OEE = Disponibilidad × Rendimiento × Calidad
```

### 1. Disponibilidad (Availability)

```
Disponibilidad = Tiempo de Operación / Tiempo de Planificación
```

Mide el porcentaje del tiempo planificado en que la máquina estuvo disponible y produciendo. Pierde puntos por paradas no planificadas y cambios de herramienta.

**Ejemplo:**
- Tiempo planificado: 480 minutos
- Paradas no planificadas: 30 minutos
- Cambios de herramienta: 20 minutos
- Tiempo de operación: 430 minutos

```
Disponibilidad = 430 / 480 = 89.6%
```

### 2. Rendimiento (Performance)

```
Rendimiento = (Tiempo de Operación × Velocidad Ideal) / Tiempo de Operación
```

Mide la velocidad real vs la velocidad teórica máxima. Pierde puntos por reducción de velocidad y paradas menores.

**Ejemplo:**
- Tiempo de operación: 430 minutos
- Velocidad ideal: 1 unidad/minuto
- Unidades reales: 380

```
Rendimiento = 380 / 430 = 88.4%
```

### 3. Calidad (Quality)

```
Calidad = Unidades Buenas / Unidades Totales Producidas
```

Mide el porcentaje de unidades sin defectos. Pierde puntos por defectos de proceso y arranques defectuosos.

**Ejemplo:**
- Unidades totales: 380
- Unidades defectuosas: 8

```
Calidad = (380 - 8) / 380 = 97.9%
```

### OEE Total

```
OEE = 89.6% × 88.4% × 97.9% = 77.6%
```

## Las 6 Grandes Pérdidas

OEE se descompone en las [[22-seis-grandes-perdidas|Seis Grandes Pérdidas]] de producción:

| Pérdida | Componente OEE | Ejemplo |
|---------|----------------|---------|
| Averías | Disponibilidad | Rotura de cadena |
| Setup/Ajuste | Disponibilidad | Cambio de molde |
| Paradas menores | Rendimiento | Sensor bloqueado |
| Reducción de velocidad | Rendimiento | Motor desgastado |
| Defectos de proceso | Calidad | Piezas fuera de tolerancia |
| Arranques defectuosos | Calidad | Primeras piezas malas |

## Benchmarks de OEE

| Nivel | OEE | Interpretación |
|-------|-----|----------------|
| **Mundial** | 85%+ | Objetivo a largo plazo |
| **Bueno** | 70-85% | Competitivo |
| **Promedio** | 55-70% | Hay oportunidad de mejora |
| **Bajo** | <55% | Mejoras significativas necesarias |

**Nota:** El OEE "mundial" del 85% se descompone en:
- Disponibilidad: 90%
- Rendimiento: 95%
- Calidad: 99.9%

## Cómo Medir y Mejorar OEE

### Paso 1: Establecer Línea Base
Medir OEE actual durante 1-2 semanas sin hacer cambios.

### Paso 2: Identificar Pérdidas
Clasificar cada minuto de downtime según las 6 grandes pérdidas.

### Paso 3: Atacar Mayor Pérdida
Usar [[10-pdca|PDCA]] para atacar la pérdida más grande primero.

### Paso 4: Repetir
Cada ciclo reduce las pérdidas y mejora el OEE.

## OEE y Otras Herramientas

- **[[15-tpm|TPM]]** — OEE es la métrica principal de TPM
- **[[22-seis-grandes-perdidas|Seis Grandes Pérdidas]]** — OEE las cuantifica
- **[[14-takt-time|Takt Time]]** — OEE mide la capacidad real vs la demandada
- **[[10-pdca|PDCA]]** — Ciclo para mejorar OEE continuamente
- **[[06-gemba|Gemba]]** — Observar el Gemba para entender las pérdidas
- **[[13-smed|SMED]]** — ReduceSetup/ajuste, mejora la disponibilidad

## OEE en Software

Aplicado a infraestructura de software:
- **Disponibilidad:** % tiempo que los servidores están operacionales (Uptime)
- **Rendimiento:** Throughput real vs capacidad teórica
- **Calidad:** % de requests exitosos (sin errores 5xx)

**Ejemplo:**
- Uptime: 99.5%
- Throughput: 85% de capacidad
- Calidad: 99.9%

```
OEE Software = 99.5% × 85% × 99.9% = 84.5%
```

## Errores Comunes

- Medir OEE sin actuar sobre los resultados
- Enfocarse en alcanzar un número alto sin reducir pérdidas reales
- Usar OEE como métrica de castigo en vez de mejora
- No desglosar en las 3 componentes (solo mirar el total)
- Ignorar la variabilidad entre turnos y máquinas

## Notas Relacionadas

- [[15-tpm]] — TPM es el programa que mejora OEE
- [[22-seis-grandes-perdidas]] — Pérdidas que componen el OEE
- [[14-takt-time]] — Capacidad real vs demanda
- [[10-pdca]] — Mejora continua de OEE
- [[06-gemba]] — Observar para entender las pérdidas
- [[13-smed]] — Reduce tiempo de cambio
- [[02-Pilares/01-just-in-time|JIT]] — OEE es prerrequisito para JIT confiable
