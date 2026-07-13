---
title: "Flow (Flujo)"
tags:
  - lean/fundamentos
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: "Fundamentos"
aliases:
  - "Flujo"
  - "Flujo Continuo"
  - "Continuous Flow"
related:
  - "[[09-sistema-de-tiron]]"
  - "[[07-cadena-de-valor]]"
  - "[[06-valor]]"
---

# Flow (Flujo)

## Definicion

El **[[08-flujo|Flujo]]** es el tercer principio de los [[05-cinco-principios-lean|5 principios de Lean]]. Se refiere a hacer que el [[06-valor|valor]] fluya sin interrupciones a traves de la [[07-cadena-de-valor|cadena de valor]].

> **Flujo** = Mover el producto/servicio continuamente sin esperas ni cuellos de botella

## Flujo Continuo vs Procesamiento por Lotes

La diferencia fundamental entre ambos enfoques:

### Procesamiento por Lotes (Batch)

- Procesar grandes cantidades antes de pasar al siguiente paso
- Alto inventario entre estaciones
- Problemas ocultos hasta el final
- Largos tiempos de entrega
- Ejemplo: Hacer 100 piezas en estacion 1, luego 100 en estacion 2

### Flujo Continuo (Single-Piece Flow)

- Mover una pieza a la vez entre estaciones
- Inventario minimo entre pasos
- Problemas visibles inmediatamente
- Cortos tiempos de entrega
- Ejemplo: Ensamblar una unidad completa de principio a fin

## Single-Piece Flow (Flujo de Una Pieza)

El ideal del [[08-flujo|flujo]] es el Single-Piece Flow:

- Cada pieza se mueve al siguiente paso inmediatamente
- No hay inventario entre estaciones
- Los problemas se detectan al instante
- La calidad se construye en el proceso

### Beneficios del Single-Piece Flow

- Reduccion dramatica de tiempos de entrega
- Deteccion inmediata de defectos
- Mayor flexibilidad para cambios
- Reduccion de espacio necesario
- Mejor comunicacion entre pasos

## Eliminando Interrupciones al Flujo

Los principales obstaculos para el [[08-flujo|flujo]] son:

### Tiempos de Espera

- Espera por material
- Espera por aprobacion
- Espera por informacion
- Espera por mantenimiento

### Cuellos de Botella

- Capacidad limitada en un paso
- Recursos compartidos
- Procesos manuales lentos
- Cambios de herramienta largos

### Variabilidad

- Tiempos de ciclo inconsistentes
- Calidad variable
- Demanda fluctuante
- Ausentismo del personal

## Como Crear Flujo

Estrategias para establecer [[08-flujo|flujo]] continuo:

1. **Reducir tamano de lote** - Producir menos a la vez
2. **Reducir tiempos de cambio (SMED)** - Cambios mas rapidos
3. **均衡化 (Heijunka)** - Nivelar la produccion
4. **Estandarizar el trabajo** - Procesos consistentes
5. **Diseñar para el flujo** - Layouts celulares
6. **Balancer la linea** - Distribuir carga equitativamente

## Flujo y los Demas Principios

El [[08-flujo|flujo]] funciona en conjunto con:

- [[06-valor|Valor]] - Sabe que debe fluir
- [[07-cadena-de-valor|Cadena de valor]] - Define por donde fluye
- [[09-sistema-de-tiron|Pull]] - Regula cuando fluye
- [[10-perfeccion|Perfeccion]] - Mejora el flujo continuamente

## Flujo en Diferentes Contextos

### Manufactura

- Lineas de ensamblaje celulares
- Procesos de una pieza
- Layouts en forma de U

### Servicios

- Atencion al cliente sin transferencias
- Procesos de documento sin esperas
- Flujos de aprobacion optimizados

### Software (DevOps)

- Pipelines de integracion continua
- Despliegue continuo (CD)
- Flujo de trabajo en Kanban

## El Flujo Revela Problemos

Una de las ventajas mas importantes del [[08-flujo|flujo]] es que hace visibles los problemas:

- Cuando no hay inventario, los problemas no se pueden ocultar
- La presion por mantener el flujo fuerza la resolucion
- Cada interrupcion es una oportunidad de mejora
- La transparencia es total

## Ejemplo Practico

Considera un proceso de facturacion:

**Sin flujo:**
1. Recibir solicitud (5 min)
2. Esperar 2 horas
3. Verificar datos (10 min)
4. Esperar 1 hora
5. Generar factura (5 min)
6. Esperar aprobacion (4 horas)
7. Enviar (5 min)

**Con flujo:**
1. Recibir solicitud (5 min)
2. Verificar datos (10 min)
3. Generar factura (5 min)
4. Aprobacion inmediata (2 min)
5. Enviar (5 min)

**Total: 27 minutos vs 8 horas 25 minutos**
