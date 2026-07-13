---
title: "Value Stream (Cadena de Valor)"
tags:
  - lean/fundamentos
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: "Fundamentos"
aliases:
  - "Cadena de Valor"
  - "Value Stream"
related:
  - "[[06-valor]]"
  - "[[08-flujo]]"
  - "[[05-cinco-principios-lean]]"
---

# Value Stream (Cadena de Valor)

## Definicion

La **Cadena de Valor** es el conjunto completo de actividades necesarias para llevar un producto o servicio desde el concepto hasta el cliente. Es el segundo de los [[05-cinco-principios-lean|5 principios de Lean]].

> **Cadena de Valor** = Todas las actividades que transforman el insumo en valor para el cliente

## Los Tres Flujos de Valor

En toda cadena de valor existen tres tipos de actividades:

### 1. Actividades que Agregan Valor (Value-Added)

- Transforman el producto/servicio
- El cliente esta dispuesto a pagar por ellas
- Se realizan correctamente a la primera
- Ejemplo: Ensamblar, pintar, codificar

### 2. Actividades Necesarias sin Valor (Business Value-Added)

- No agregan [[06-valor|valor]] directamente
- Son requeridas por regulaciones o politicas
- Deben minimizarse pero no eliminarse
- Ejemplo: Reportes regulatorios, inspeccion de calidad

### 3. Actividades sin Valor (Waste)

- No agregan [[06-valor|valor]]
- Son puro desperdicio (Muda)
- Deben eliminarse completamente
- Ejemplo: Esperas, movimientos innecesarios, defectos

## Current State vs Future State

Un aspecto fundamental de la [[07-cadena-de-valor|Cadena de Valor]] es la comparacion entre el estado actual y el futuro:

### Current State (Estado Actual)

- Documenta como funciona el proceso hoy
- Identifica todos los pasos y tiempos
- Revela desperdicios ocultos
- Establece la linea base para mejoras

### Future State (Estado Futuro)

- Describe como deberia funcionar el proceso
- Elimina pasos innecesarios
- Optimiza el [[08-flujo|flujo]]
- Establece objetivos de mejora

## Value Stream Mapping (VSM)

El Value Stream Mapping es la herramienta visual para analizar la [[07-cadena-de-valor|cadena de valor]]:

### Que Representa

- Flujo de materiales desde proveedor hasta cliente
- Flujo de informacion que controla el proceso
- Tiempos de ciclo y tiempos de espera
- Inventarios en cada etapa

### Datos Clave en un Mapa

- **Tiempo de ciclo (CT):** Tiempo para completar una unidad
- **Tiempo de cambio (CO):** Tiempo para cambiar de producto
- **Tiempo disponible (AT):** Tiempo de operacion disponible
- **Tiempo de entrega (LT):** Tiempo total desde pedido hasta entrega
- ** % Cumplimiento:** Porcentaje de productos sin defectos

### Pasos para Crear un VSM

1. Seleccionar un producto o familia de productos
2. Dibujar el flujo de informacion
3. Dibujar el flujo de materiales
4. Recoger datos en el Gemba
5. Calcular tiempos y lead times
6. Identificar oportunidades de mejora
7. Crear el estado futuro

## La Cadena de Valor Completa

La cadena de valor no se limita a una sola empresa:

- **Proveedores** - Materiales y servicios
- **Fabricacion** - Proceso de produccion
- **Distribucion** - Logistica y entrega
- **Cliente** - Uso final del producto

Cada enlace debe optimizarse para maximizar el [[06-valor|valor]] total.

## Cadena de Valor y los 5 Principios

La [[07-cadena-de-valor|Cadena de Valor]] conecta:

- El [[06-valor|valor]] (definicion)
- El [[08-flujo|flujo]] (optimizacion)
- El [[09-sistema-de-tiron|sistema de tiron]] (regulacion)
- La [[10-perfeccion|perfeccion]] (mejora continua)

## Ejemplo: Cadena de Valor en Software

| Actividad | Tipo | [[06-valor\|Valor]] |
|-----------|------|-----|
| Reuniones de requisitos | Necesaria | Parcial |
| Desarrollo de codigo | [[06-valor\|Valor]] | Si |
| Testing | [[06-valor\|Valor]] | Si |
| Deploy | [[06-valor\|Valor]] | Si |
| Espera aprobacion | Sin valor | No |
| Retrabajo por bugs | Sin valor | No |

## Errores Comunes

- Enfocarse solo en la manufactura, ignorando proveedores y clientes
- No ir al [[13-pensadores-lean-clave|Gemba]] para recoger datos reales
- Confundir actividad con [[06-valor|valor]]
- No crear el estado futuro (solo diagnosticar)
- Implementar mejoras sin medir el impacto
