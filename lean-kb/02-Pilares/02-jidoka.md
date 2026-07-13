---
title: Jidoka (Autonomation)
tags:
  - lean/pilares
  - type/concepto
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Pilares
aliases:
  - Jidoka
  - Autonomation
  - Autonamación
---

# Jidoka (Autonomation)

**Jidoka** es el segundo pilar del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]]. Se traduce como **autonomation** o **autonamación**: automatización con un toque humano. La idea es que las máquinas y las personas puedan **detectar anomalías y detenerse automáticamente** para corregir problemas antes de que se propaguen.

## Definición

Jidoka significa construir la **calidad en el proceso**, no inspeccionarla al final. Cuando un defecto se detecta, la línea se detiene inmediatamente. Nadie produce sobre un defecto. Esto convierte cada problema en una oportunidad de aprendizaje.

> Jidoka = Detectar → Detener → Corregir → Aprender

## Origen Histórico

Jidoka nació en 1924 con [[01-Fundamentos/01-historia-lean|Sakichi Toyoda]], fundador de Toyota Industries. Inventó un telar mecánico que se detenía automáticamente cuando detectaba una ruptura de hilo. Antes, los operadores tenían que vigilar múltiples máquinas simultáneamente, perdiendo tejido defectuoso.

Este principio se trasladó de los telares a los automóviles, convirtiéndose en uno de los dos pilares fundamentales del TPS junto con [[02-Pilares/01-just-in-time|Just-in-Time]].

## Jidoka vs Automatización Total

| Jidoka | Automatización Total |
|--------|---------------------|
| La máquina se detiene ante una anomalía | La máquina continúa produciendo |
| El operador es parte del proceso de calidad | El operador solo carga y descarga |
| Los defectos se detectan al instante | Los defectos se detectan en inspección final |
| Aprendizaje continuo del equipo | Sin retroalimentación al sistema |

Jidoka no es eliminar a las personas; es **empoderarlas** para que tomen decisiones cuando algo sale mal.

## El Sistema Andon

Andon es el mecanismo visual que soporta Jidoka. Consiste en una señal luminosa (generalmente un tablero con luces verde, amarilla y roja) que indica el estado de la línea:

- **Verde**: Todo opera normalmente
- **Amarillo**: Un operador necesita ayuda o hay una anomalía
- **Rojo**: La línea se ha detenido por un problema

Cuando un operador tira de la cuerda de Andon, toda la línea puede detenerse. Esta presión para resolver problemas rápidamente genera un ciclo de aprendizaje constante. Ver [[04-Herramientas/02-andon|Andon]] para más detalles.

## Construir Calidad en el Proceso

Jidoka invierte la lógica tradicional de calidad:

- **Tradicional**: Producir → Inspeccionar → Separar buenos/malos
- **Jidoka**: Detectar anomalía → Detener → Corregir en la raíz → Producir bien desde el inicio

Esto se logra con herramientas como:

- [[04-Herramientas/11-poka-yoke|Poka-Yoke]] — Mecanismos a prueba de errores
- **Autonomación** — Máquinas que detectan sus propios defectos
- **Estandarización** — Procesos estandarizados que hacen los desviaciones visibles

## Cultura de Detener y Corregir

En una cultura Jidoka, **detener la línea no es un fracaso, es una oportunidad**. Cuando un operador detiene la producción:

1. El equipo se reúne inmediatamente para resolver el problema
2. Se busca la **causa raíz**, no se aplica un parche temporal
3. Se implementa una solución permanente para que el problema no se repita
4. El aprendizaje se comparte con toda la organización

Este ciclo fortalece el [[02-Pilares/03-kaizen|Kaizen]] y la [[02-Pilares/04-respeto-por-las-personas|Respeto por las Personas]] al confiar en el criterio del operador.

## Jidoka como Fundamento de Calidad

Sin Jidoka, el [[02-Pilares/01-just-in-time|Just-in-Time]] es frágil. Si un defecto se propaga en un sistema de flujo continuo sin inventario de seguridad, toda la cadena se afecta. Jidoka asegura que el flujo JIT solo mueva **productos de calidad**.

## Notas Relacionadas

- [[02-Pilares/01-just-in-time|Just-in-Time]] — El pilar complementario
- [[02-Pilares/05-casa-del-lean|La Casa del Lean]] — Jidoka como columna del techo
- [[02-Pilares/08-jit-vs-jidoka-comparativa|JIT vs Jidoka]] — Comparativa detallada
- [[04-Herramientas/11-poka-yoke|Poka-Yoke]] — Mecanismos a prueba de error
- [[04-Herramientas/02-andon|Andon]] — Sistema de señales visuales
- [[04-Herramientas/12-los-cinco-porques|5 Por Qué]] — Método de causa raíz para resolver problemas
