---
title: "Pull System (Sistema de Tiron)"
tags:
  - lean/fundamentos
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: "Fundamentos"
aliases:
  - "Sistema de Tiron"
  - "Pull System"
related:
  - "[[08-flujo]]"
  - "[[07-cadena-de-valor]]"
  - "[[02-toyota-production-system]]"
---

# Pull System (Sistema de Tiron)

## Definicion

El **Sistema de Tiron** es el cuarto principio de los [[05-cinco-principios-lean|5 principios de Lean]]. Es un sistema de produccion donde cada paso solo produce lo que el siguiente paso necesita, cuando lo necesita.

> **Sistema de Tiron** = Producir solo lo que el cliente demanda, cuando lo demanda

## Pull vs Push

La diferencia fundamental entre ambos enfoques:

### Push (Empuje)

- La produccion se basa en pronosticos
- Se produce por anticipacion a la demanda
- Alto inventario entre pasos
- Problemas ocultos por el inventario
- Basado en "creo que se va a vender"

### Pull (Tiron)

- La produccion se basa en demanda real
- Se produce solo cuando hay necesidad
- Inventario minimo entre pasos
- Problemas visibles inmediatamente
- Basado en "se que se necesita"

## Kanban: El Mecanismo de Tiron

El Kanban es la herramienta mas comun para implementar el [[09-sistema-de-tiron|sistema de tiron]]:

### Que es un Kanban

- Señal visual que indica "producir" o "mover"
- Tarjeta, señal o signal que autoriza la produccion
- Regula el flujo de materiales e informacion
- Limita el trabajo en progreso (WIP)

### Tipos de Kanban

- **Kanban de produccion:** Autoriza producir una unidad
- **Kanban de movimiento:** Autoriza mover material
- **Kanban de proveedor:** Solicita material al proveedor
- **E-Kanban:** Version digital del sistema

### Reglas del Kanban

1. No producir sin Kanban
2. Producir exactamente la cantidad indicada
3. El producto defectuoso no se mueve
4. Reducir el numero de Kanbans con el tiempo
5. Kaizen para optimizar el sistema

## El Concepto de Supermercado

El supermercado es un tipo de [[09-sistema-de-tiron|sistema de tiron]] donde:

- Se mantiene un inventario limitado de cada producto
- Cuando el inventario baja a un nivel minimo, se reabastece
- El cliente "tira" del producto del estante
- El sistema "tira" del siguiente proceso para reponer

### Como Funciona

1. Cliente toma producto (consume)
2. Señal de reposicion se activa
3. Proceso anterior produce solo lo necesario
4. Inventario se mantiene en nivel optimo

## TPS y el Sistema de Tiron

En el [[02-toyota-production-system|Toyota Production System]], el [[09-sistema-de-tiron|sistema de tiron]] es fundamental:

- Kanban como mecanismo principal
- Vinculado al [[08-flujo|flujo continuo]]
- Regulado por el Takt Time
- Complementado por Heijunka

## Pull en Diferentes Industrias

El [[09-sistema-de-tiron|sistema de tiron]] no es exclusivo de la manufactura:

### Manufactura

- Produccion por demanda
- Inventario supermercado
- Kanban visual

### Servicios

- Colas de atencion
- Gestion de tickets
- Procesamiento de documentos

### Software (Agile/Scrum)

- Sprint backlog
- Kanban boards
- Work in Progress (WIP) limits

### Salud

- Gestion de farmacia
- Solicitud de pruebas
- Programacion de citas

## Beneficios del Sistema de Tiron

- **Reduccion de inventario** - No se produce por anticipacion
- **Deteccion temprana de problemas** - Sin inventario que oculte
- **Mayor flexibilidad** - Responder rapido a cambios
- **Menor obsolescencia** - Producir solo lo necesario
- **Mejor calidad** - Problemas visibles inmediatamente

## Implementacion Basica

Pasos para implementar un [[09-sistema-de-tiron|sistema de tiron]]:

1. Identificar el producto familia
2. Determinar el Takt Time
3. Establecer el [[08-flujo|flujo continuo]]
4. Crear puntos supermercado
5. Implementar Kanbans
6. Medir y ajustar continuamente

## El Sistema de Tiron y la Perfeccion

El [[09-sistema-de-tiron|sistema de tiron]] se conecta con la [[10-perfeccion|perfeccion]] al:

- Hacer visibles todos los problemas
- Forzar la resolucion inmediata
- Crear una cultura de mejora continua
- Acercar la organizacion al ideal Lean
