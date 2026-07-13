---
title: "Poka-Yoke (Error-Proofing)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Poka-Yoke
  - Error-Proofing
  - A prueba de errores
  - Mistake Proofing
related:
  - "[[02-andon]]"
  - "[[10-pdca]]"
  - "[[12-los-cinco-porques]]"
  - "[[01-5s]]"
  - "[[05-flujo-continuo]]"
  - "[[03-a3-resolucion-problemas]]"
---

# Poka-Yoke (Error-Proofing)

**Poka-Yoke** (ポカヨケ, "a prueba de errores") es una herramienta de [[Lean Manufacturing]] que previene o detecta errores humanos antes de que se conviertan en defectos. Fue desarrollada por **Shigeo Shingo** como parte del sistema [[02-Pilares/02-jidoka|Jidoka]].

## Definición

Poka-Yoke es cualquier mecanismo que hace imposible que un error se cometa, o que lo detecta inmediatamente si ocurre. El objetivo es **cero defectos** mediante el diseño de procesos que no permiten errores.

> "El ser humano comete errores. El sistema debe estar diseñado para que los errores no se conviertan en defectos." — Shigeo Shingo

## Origen

Shigeo Shingo, ingeniero de Toyota, desarrolló el concepto de Poka-Yoke en los años 1960. Shingo observó que los errores humanos son inevitables, pero los defectos son prevenibles. Su enfoque fue cambiar los procesos para que los errores sean imposibles, en lugar de confiar en la atención del trabajador.

## Tipos de Poka-Yoke

### 1. Prevención (Prevention)
Diseñar el proceso para que el error **no pueda ocurrir**.

**Ejemplos:**
- USB tipo C: solo entra de una manera (imposible insertar al revés)
- software que no permite guardar sin campos obligatorios completos
- Enchufe eléctrico con forma asimétrica
- Interruptor que solo funciona con la tapa cerrada

### 2. Detección (Detection)
Diseñar el proceso para **detectar el error inmediatamente** cuando ocurre.

**Ejemplos:**
- Sensor que detecta si una pieza está en la orientación correcta
- Alarma cuando una temperatura excede un límite
- Check automático de código (linter) que detecta errores de estilo
- Test automatizado que falla si el código no funciona

## Clasificación Funcional

### Contact Method (Método de Contacto)
Usar forma física para detectar errores. Ejemplo: pin que no entra si la pieza está mal orientada.

### Fixed-Value Method (Método de Valor Fijo)
Verificar que un número específico de acciones se completó. Ejemplo: tornillo que requiere exactamente 5 vueltas.

### Motion-Step Method (Método de Paso)
Verificar que cada paso del proceso se realizó en orden. Ejemplo: checklist que debe completarse en secuencia.

### Sequence Method (Método de Secuencia)
Verificar que las acciones se realizaron en el orden correcto. Ejemplo: software que no permite saltar pasos en un workflow.

## Ejemplos en Diferentes Contextos

### Manufactura
- **Dispositivos de fijación** que solo permiten orientación correcta
- **Sensores** que detectan presencia/ausencia de componentes
- **Jigs y moldes** con forma que impide posicionamiento incorrecto
- **Limitadores de torque** en herramientas de apriete

### Software
- **Type systems** que previenen errores de tipo en compilación
- **Required fields** en formularios web
- **Input validation** que rechaza datos inválidos
- **Code review automática** (linting, static analysis)
- **Feature flags** que permiten rollback inmediato

### Procesos Administrativos
- **Templates** con campos obligatorios
- **Workflows secuenciales** que no permiten saltar pasos
- **Aprobaciones automáticas** antes de acciones críticas
- **Double-entry** para datos importantes

## Conexión con Jidoka y Calidad

Poka-Yoke es una herramienta esencial del pilar [[02-Pilares/02-jidoka|Jidoka]]:

| Componente | Función |
|-----------|---------|
| **Jidoka** | Filosofía: automatización con toque humano |
| **[[02-andon\|Andon]]** | Señal: detectar y alertar sobre problemas |
| **Poka-Yoke** | Prevención: hacer imposible el error |
| **Autonomación** | Acción: detener y corregir automáticamente |

Jidoka dice "detecta problemas". Poka-Yoke dice "previene que los problemas ocurran".

## Pasos de Implementación

1. **Identificar el error** — ¿Qué errores ocurren con frecuencia?
2. **Analizar la causa** — ¿Por qué ocurre el error? (usar [[12-los-cinco-porques|5 Porqués]])
3. **Diseñar la contramedida** — ¿Cómo prevenir o detectar el error?
4. **Implementar** — Instalar el mecanismo Poka-Yoke
5. **Verificar** — Confirmar que el error ya no genera defectos
6. **Estandarizar** — Documentar y replicar en procesos similares

**Relación con [[10-pdca|PDCA]]:** Cada implementación de Poka-Yoke sigue un ciclo PDCA.

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Cero defectos (objetivo) | Eliminar la posibilidad de errores |
| Menos retrabajo | No hay defectos que corregir |
| Mayor productividad | Sin tiempo perdido en correcciones |
| Calidad integrada | La calidad está en el proceso, no en la inspección |
| Confianza del equipo | Los trabajadores saben que el sistema los apoya |

## Errores Comunes

- **Confiar solo en la atención humana** — La gente se cansa y comete errores
- **No escalar Poka-Yokes simples** — Un sensor simple puede prevenir defectos costosos
- **Ignorar errores "menores"** — Los errores pequeños se acumulan
- **No involucrar al equipo** — Quienes hacen el trabajo conocen los errores mejor que nadie

## Notas Relacionadas

- [[02-andon]] — Detección vs prevención de errores
- [[10-pdca]] — Ciclo para implementar Poka-Yoke
- [[12-los-cinco-porques]] — Analizar causa raíz del error
- [[01-5s]] — Espacio organizado facilita Poka-Yoke
- [[05-flujo-continuo]] — Poka-Yoke protege el flujo de defectos
- [[03-a3-resolucion-problemas]] — Documentar Poka-Yoke en un A3
- [[02-Pilares/02-jidoka|Jidoka]] — Poka-Yoke es herramienta de Jidoka
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
