---
title: "Teoría de Restricciones (TOC)"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - TOC
  - Theory of Constraints
  - Teoría de Restricciones
related:
  - "[[08-toc-cinco-pasos]]"
  - "[[04-Herramientas/04-analisis-de-cuellos-de-botella]]"
  - "[[01-six-sigma-vista-general]]"
  - "[[03-tqm-gestion-calidad-total]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]]"
  - "[[04-Herramientas/05-flujo-continuo]]"
---

# Teoría de Restricciones (TOC)

## ¿Qué es TOC?

La Teoría de Restricciones (Theory of Constraints) es un paradigma de gestión que establece que **todo sistema tiene al menos una restricción** que limita su desempeño, y que el improvement continuo debe enfocarse en esa restricción.

> *"El throughput de un sistema está determinado por su recurso más limitado."* — Eliyahu Goldratt

## Origen

| Año | Evento |
|-----|--------|
| 1984 | Eliyahu Goldratt publica "The Goal" |
| 1990 | Desarrollo de Drum-Buffer-Rope (DBR) |
| 1999 | Publicación de "Necessary but not Sufficient" |
| 2000s | Expansión a服务业, software y cadena de suministro |

"The Goal" es una novela empresarial que explica TOC a travése la historia de Alex Rogo, un gerente de planta que debe salvar su fábrica aplicando los principios de Goldratt.

## Los 5 Pasos de Enfoque

TOC se estructura en cinco pasos iterativos:

1. **Identificar** la restricción del sistema
2. **Explotar** la restricción (maximizar sin inversión)
3. **Subordinar** todo lo demás a la restricción
4. **Elevar** la restricción (aumentar capacidad)
5. **Prevenir** la inercia — repetir si cambia la restricción

Ver detalle en [[08-toc-cinco-pasos]].

## Drum-Buffer-Rope (DBR)

DBR es el sistema de planificación y ejecución de TOC:

- **Drum** — El ritmo de la restricción (el tambor que marca el paso)
- **Buffer** — Protección de tiempo/material antes de la restricción
- **Rope** — Señal de liberación de trabajo sincronizada con el drum

```
Entrada → [Rope] → Buffer → [Drum/Restricción] → Salida
                ↑                    │
                └────────────────────┘
```

## Throughput Accounting

TOC propone un sistema contable alternativo al costeo tradicional:

| Concepto | Definición |
|----------|------------|
| **Throughput (T)** | Dinero que entra por ventas menos materiales directos |
| **Inventory (I)** | Todo el dinero invertido en el sistema |
| **Operating Expense (OE)** | Todo el dinero necesario para convertir I en T |

> **Regla:** Aumentar T, reducir I, mantener o reducir OE.

## TOC vs Lean

| Aspecto | TOC | Lean |
|---------|-----|------|
| **Enfoque** | Restricción del sistema | Desperdicios en todo el flujo |
| **Mejora** | Localizada en la restricción | Distribuida en todo el proceso |
| **WIP** | Controlado por la restricción | Minimizado globalmente |
| **Planificación** | Basada en el drum | Basada en la demanda (pull) |

## Conexión con Lean

TOC y Lean se complementan naturalmente:

- TOC identifica **dónde** enfocar la mejora (la restricción)
- Lean proporciona **cómo** mejorar (herramientas de eliminación de desperdicios)
- Ambos buscan **flujo continuo** pero desde ángulos diferentes
- TOC resuelve el problema de "mejorar donde no hay cuello de botella"

En [[04-Herramientas/04-analisis-de-cuellos-de-botella]] se presenta la aplicación práctica de TOC dentro de Lean.

## Cuándo Usar TOC

- Existe un cuello de botella claro y conocido
- La capacidad total del sistema está limitada por un recurso
- Se necesita maximizar throughput sin grandes inversiones
- El sistema tiene cuellos de botella móviles (cambian después de resolver uno)

## Notas Relacionadas

- [[08-toc-cinco-pasos]] — Los 5 pasos en detalle con ejemplos
- [[04-Herramientas/04-analisis-de-cuellos-de-botella]] — Análisis práctico de restricciones
- [[01-six-sigma-vista-general]] — Six Sigma como complemento estadístico
- [[03-tqm-gestion-calidad-total]] — TQM como filosofía de soporte
- [[04-Herramientas/05-flujo-continuo]] — Flujo continuo y restricciones
- [[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]] — Lean Six Sigma
- [[11-mapa-metodologias-comparativo]] — Comparativa de todas las metodologías
