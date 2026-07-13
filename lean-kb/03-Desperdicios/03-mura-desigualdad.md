---
title: "Mura (Desigualdad/Inconsistencia)"
tags:
  - lean/desperdicios
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Lean Manufacturing
aliases:
  - Mura
  - Desigualdad
  - Inconsistencia
  - Unevenness
related:
  - "[[01-marco-3m]]"
  - "[[02-muda-desperdicio]]"
  - "[[04-muri-sobrecarga]]"
  - "[[05-desperdicio-sobreproduccion]]"
  - "[[06-desperdicio-espera]]"
  - "[[01-Fundamentos]]"
---

# Mura (Desigualdad/Inconsistencia)

**Mura** se refiere a la irregularidad, variabilidad e inconsistencia en los procesos, volúmenes de trabajo, tiempos de ciclo o demanda. Es una de las tres partes del [[01-marco-3m|Marco 3M]].

## Definición

Mura ocurre cuando hay fluctuaciones en:
- La cantidad de trabajo recibido
- Los tiempos de ciclo entre procesos
- El volumen de producción solicitado
- La calidad de las entradas de un proceso

## Fuentes Principales de Mura

### Fluctuación de la Demanda
La demanda del cliente no es constante. Hay temporadas altas y bajas, pedidos grandes y pequeños, y cambios frecuentes en prioridades.

### Variación en los Procesos
Diferentes operadores realizan el mismo trabajo con variaciones. Los tiempos de preparación (setup) varían. Los materiales llegan con inconsistencias.

### Falta de Estandarización
Cuando no hay procedimientos estandarizados, cada persona ejecuta el proceso a su manera, creando variación.

## Consecuencias de Mura

Mura es particularmente dañina porque genera los otros dos M:

- **Genera [[02-muda-desperdicio|Muda]]** — La irregularidad produce [[06-desperdicio-espera|espera]], [[05-desperdicio-sobreproduccion|sobreproducción]] e [[09-desperdicio-inventario|inventario]] de seguridad excesivo
- **Genera [[04-muri-sobrecarga|Muri]]** — Los picos de trabajo sobrecargan a las personas y máquinas

## Contraerrestante: Heijunka

**Heijunka** (nivelación de producción) es la herramienta principal para combatir mura. Consiste en:

1. Promediar el volumen de producción en períodos de tiempo
2. Mezclar diferentes productos en la secuencia de producción
3. Nivelar tanto el volumen como la mezcla de productos

```
Sin Heijunka:  AAAA BBBB CCCC (producción en lotes)
Con Heijunka:  ABC ABC ABC ABC (producción nivelada)
```

## Ejemplo

Una planta recibe pedidos de 100 unidades lunes y martes, pero solo 20 miércoles y jueves. Esto genera:
- Exceso de inventario a fin de semana (muda)
- Trabajadores ociosos miércoles (muda)
- Turnos extras lunes y martes (muri)

Con [[Heijunka]], se promedian 60 unidades diarias, eliminando las fluctuaciones.

## Prerrequisitos

- [[01-marco-3m]] — Marco conceptual 3M
- [[01-Fundamentos]] — Conceptos básicos de [[Lean Manufacturing]]
