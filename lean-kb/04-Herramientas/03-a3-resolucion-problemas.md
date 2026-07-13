---
title: "A3 - Resolución de Problemas"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - A3
  - A3 Report
  - Informe A3
  - Resolución de Problemas A3
related:
  - "[[10-pdca]]"
  - "[[12-los-cinco-porques]]"
  - "[[06-gemba]]"
  - "[[02-andon]]"
  - "[[08-hoshin-kanri]]"
  - "[[11-poka-yoke]]"
---

# A3 - Resolución de Problemas

El **A3 Report** es una herramienta de [[Lean Manufacturing]] para resolver problemas de forma estructurada y colaborativa, todo documentado en una sola hoja de papel tamaño A3 (297 × 420 mm). Más que un formulario, el A3 es un **proceso de pensamiento**.

## Origen

El informe A3 fue desarrollado en Toyota como parte del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]]. El formato A3 impone disciplina: obliga a ser conciso, visual y estructurado. Fue una práctica común antes de que se formalizara como herramienta de gestión.

## Definición

El A3 es un enfoque estructurado para la resolución de problemas que sigue el ciclo [[10-pdca|PDCA]] y utiliza una sola hoja de papel para comunicar todo el proceso de análisis y solución.

**El nombre** proviene del tamaño de papel A3, que ofrece suficiente espacio para estructurar un análisis completo sin caer en documentos excesivamente largos.

## El Formato A3

Un A3 típico sigue esta estructura (lado izquierdo = análisis, lado derecho = plan):

### Lado Izquierdo — Entender el Problema

1. **Contexto / Antecedentes** — ¿Por qué es importante este problema? ¿Cómo se alinea con los objetivos?
2. **Condición Actual** — ¿Qué está pasando ahora? Datos, hechos, observaciones del [[06-gemba|Gemba]]
3. **Análisis** — ¿Cuál es la causa raíz? Uso de [[12-los-cinco-porques|5 Porqués]] u otros métodos
4. **Meta / Objetivo** — ¿Qué queremos lograr? Específico y medible

### Lado Derecho — Resolver el Problema

5. **Contramedidas** — ¿Qué acciones tomaremos para atacar la causa raíz?
6. **Plan de Implementación** — ¿Quién hace qué y cuándo? Timeline
7. **Seguimiento** — ¿Cómo verificaremos que funcionó? Indicadores
8. **Estandarización** — ¿Cómo aseguraremos que el problema no regrese?

## El A3 como Proceso de Pensamiento

El A3 **no es solo un formulario**. Es una metodología que incluye:

### 1. Ir al Gemba
El primer paso es siempre observar la realidad directamente. No resolver problemas desde el escritorio.

### 2. Dialogar (hansei)
El A3 se construye mediante discusión y feedback de múltiples partes interesadas. El mentor revisa el A3 con el autor.

### 3. Aprendizaje visual
Usar diagramas, gráficos, fotos y dibujos en lugar de solo texto. Un buen A3 es 70% visual.

### 4. Pensamiento basado en hechos
Cada afirmación debe estar respaldada por datos observados en el [[06-gemba|Gemba]].

## Conexión con PDCA

El A3 es la manifestación práctica del ciclo [[10-pdca|PDCA]]:

| Fase PDCA | Sección A3 |
|-----------|------------|
| **Plan** | Contexto → Condición Actual → Análisis → Meta |
| **Do** | Contramedidas → Plan de Implementación |
| **Check** | Seguimiento (verificar resultados) |
| **Act** | Estandarización (o nuevo ciclo A3) |

## Cuándo Usar A3

- Problemas recurrentes que no se resuelven
- Situaciones donde se necesita análisis profundo
- Proyectos de mejora que requieren aprobación
- Comunicación de problemas a la dirección
- Desarrollo de capacidades de resolución de problemas en el equipo

## Tips para A3s Efectivos

1. **Ir al Gemba primero** — No resolver problemas sin observar la realidad
2. **Ser visual** — Usar diagramas, no párrafos largos
3. **Limitar texto** — Si necesitas explicar mucho, no entiendes el problema
4. **Mostrar el proceso** — No solo la solución, sino cómo llegaste a ella
5. **Buscar feedback** — El A3 se mejora con la revisión de mentores
6. **Seguir el PDCA** — Cada sección debe ser lógica y conectada
7. **Incluir datos** — Hechos, no opiniones
8. **Mantener actualizado** — El A3 es un documento vivo

## Ejemplo Simplificado

```
╔══════════════════════════════════════════════════════╗
║  A3: Reducción de defectos en estación de soldadura   ║
╠══════════════════════════════════════════════════════╣
║ CONTEXTO: 15% defectos soldadura vs 3% objetivo      ║
║                                                      ║
║ CONDICIÓN ACTUAL:                                    ║
║ [Gráfico de tendencia de defectos]                   ║
║                                                      ║
║ ANÁLISIS (5 Porqués):                                ║
║ ¿Por qué defectos? → Porque hay porosidad            ║
║ ¿Por qué porosidad? → Gas protector insuficiente     ║
║ ¿Por qué insuficiente? → Fuga en manguera            ║
║ CAUSA RAÍZ: Fuga en manguera de gas protector        ║
║                                                      ║
║ META: Reducir defectos a <5% en 30 días              ║
╠══════════════════════════════════════════════════════╣
║ CONTRAMEDIDAS:                                       ║
║ 1. Reparar fugas en mangueras (Semana 1)             ║
║ 2. Inspección diaria de conexiones (Semana 2+)       ║
║ 3. Capacitación en detección de fugas (Semana 1)     ║
║                                                      ║
║ PLAN: [Gantt simple]                                 ║
║                                                      ║
║ SEGUIMIENTO: Gráfico semanal de defectos             ║
║                                                      ║
║ ESTANDARIZACIÓN: Checklist de inspección de gas      ║
╚══════════════════════════════════════════════════════╝
```

## A3 y Desarrollo de Personas

En Toyota, el A3 es también una herramienta de desarrollo. Un mentor guía al autor a través de un proceso de aprendizaje:
- El autor presenta el A3
- El mentor hace preguntas (no da respuestas)
- El autor regresa al [[06-gemba|Gemba]] para obtener más datos
- El ciclo se repite hasta que el A3 sea sólido

## Notas Relacionadas

- [[10-pdca]] — El motor detrás del proceso A3
- [[12-los-cinco-porques]] — Herramienta de análisis de causa raíz
- [[06-gemba]] — Observación antes de análisis
- [[02-andon]] — Las activaciones de Andon alimentan A3s
- [[08-hoshin-kanri]] — Los A3s estratégicos conectan con Hoshin Kanri
- [[11-poka-yoke]] — Contramedidas que pueden incluir Poka-Yoke
- [[02-Pilares/03-kaizen|Kaizen]] — El A3 es una herramienta de mejora continua
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
