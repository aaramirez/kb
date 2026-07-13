---
title: "SMED (Single-Minute Exchange of Die)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - SMED
  - Cambio Rápido
  - Single Minute Exchange of Die
  - Cambio Rápido de Herramienta
related:
  - "[[07-heijunka]]"
  - "[[05-flujo-continuo]]"
  - "[[10-pdca]]"
  - "[[16-oee]]"
  - "[[15-tpm]]"
  - "[[22-seis-grandes-perdidas]]"
  - "[[17-vsm]]"
---

# SMED (Single-Minute Exchange of Die)

**SMED** (Single-Minute Exchange of Die) es un método de [[Lean Manufacturing]] para **reducir el tiempo de cambio y preparación** de máquinas a un dígito decimal (menos de 10 minutos). Desarrollado por Shigeo Shingo en Toyota.

## Origen

Shigeo Shingo observó que los tiempos de cambio en prensas de Toyota eran de horas. Su análisis reveló que solo una pequeña parte del cambio requería que la máquina estuviera detenida. La mayoría de las tareas podían realizarse con la máquina en operación.

> "La clave no es trabajar más rápido, sino separar lo que se hace con la máquina detenida de lo que se puede hacer mientras funciona."

## El Problema que Resuelve

Los tiempos de cambio largos generan:
- **Lotes grandes** — para "amortizar" el tiempo de cambio
- **Inventario elevado** — exceso de producción para cubrir esperas
- **Falta de flexibilidad** — imposibilidad de responder a demanda variable
- **Desperdicio de espera** — la máquina está ociosa durante el cambio

## Concepto Clave: Setup Interno vs Externo

La distinción fundamental de SMED es separar dos tipos de actividades:

| Tipo | Definición | Ejemplo |
|------|-----------|---------|
| **Setup Externo** | Se realiza con la máquina **encendida** | Preparar herramientas, documentación, materiales |
| **Setup Interno** | Solo se puede hacer con la máquina **detenida** | Cambiar la herramienta de corte, ajustar calibres |

**El principio SMED:** Convertir tanto como sea posible de interno a externo, y luego reducir el tiempo de lo que permanece interno.

## El Proceso SMED en 4 Pasos

### Paso 1: Separar Interno y Externo
Documentar cada paso del cambio y clasificarlo como interno o externo. Muchas tareas que se hacían con la máquina parada pueden trasladarse al tiempo de preparación.

**Ejemplo:** Buscar herramientas durante el cambio (interno) → preparar las herramientas antes del cambio (externo).

### Paso 2: Convertir Interno a Externo
Reemplazar operaciones internas por externas. Preparar todo lo necesario antes de detener la máquina.

**Ejemplo:** En vez de medir piezas después del cambio, medir un estándar de referencia antes del cambio.

### Paso 3: Reducir el Tiempo Interno
Optimizar las operaciones internas restantes: estandarizar movimientos, usar herramentales rápidos, paralelizar tareas.

**Ejemplo:** Reemplazar tornillos por abrazaderas de liberación rápida (quick-release clamps).

### Paso 4: Reducir el Tiempo Externo
Optimizar las operaciones externas para que la preparación sea más eficiente, reduciendo el tiempo total del ciclo.

## Beneficios

| Beneficio | Impacto |
|-----------|---------|
| Reducción de inventario | Lotes más pequeños = menos stock |
| Mayor flexibilidad | Cambios más frecuentes entre productos |
| Mejor OEE | Menos downtime por cambios |
| Capacidad adicional | Máquinas disponibles más horas |
| Menor lead time | Producción más responsive |
| Habilita Heijunka | Nivelación posible con cambios rápidos |

## Ejemplo Numérico

```
ANTES:
- Tiempo de cambio: 60 minutos
- Lote mínimo: 500 unidades
- Inventario promedio: 2,500 unidades

DESPUÉS (SMED):
- Tiempo de cambio: 8 minutos (reducción de 87%)
- Lote mínimo: 80 unidades
- Inventario promedio: 400 unidades
```

## SMED y Otras Herramientas

- **[[07-heijunka|Heijunka]]** — Cambios rápidos permiten nivelar la producción por mezcla
- **[[05-flujo-continuo|Flujo Continuo]]** — Menos inventario entre procesos
- **[[16-oee|OEE]]** — Mejora directa en la disponibilidad
- **[[15-tpm|TPM]]** — Complementa con mantenimiento que reduce preparación
- **[[22-seis-grandes-perdidas|Seis Grandes Pérdidas]]** — Ataca directamente la pérdida por setup/ajuste
- **[[17-vsm|VSM]]** — El tiempo de cambio es un dato clave en el mapeo

## Aplicación en Software

En desarrollo de software, SMED se aplica como:
- **Reducir tiempo de deployment:** CI/CD automatizado (interno → externo)
- **Reducir tiempo de cambio de contexto:** Feature flags, branches cortos
- **Preparación de entorno:** Scripts de setup que ejecutan antes del trabajo
- **Reducir tiempo de testing:** Tests automatizados, data factories

## Errores Comunes

- No documentar cada paso antes de intentar reducir
- Confundir "mover tareas de interno a externo" con "Eliminar tareas"
- No involucrar a los operadores que realizan el cambio
- Implementar una sola vez sin mejora continua
- No estandarizar los nuevos procedimientos

## Notas Relacionadas

- [[07-heijunka]] — Habilita la nivelación de producción
- [[05-flujo-continuo]] — Menos inventario entre procesos
- [[10-pdca]] — Mejora continua del proceso de cambio
- [[16-oee]] — Mejora la disponibilidad del equipo
- [[15-tpm]] — Complemento con mantenimiento productivo
- [[22-seis-grandes-perdidas]] — Ataca pérdida por setup
- [[17-vsm]] — Dato clave en el mapeo de cadena de valor
