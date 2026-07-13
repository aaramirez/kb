---
title: "Andon - Sistema de Señalización Visual"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Andon
  - Sistema Andon
  - Señalización Visual
related:
  - "[[01-5s]]"
  - "[[09-kanban]]"
  - "[[05-flujo-continuo]]"
  - "[[11-poka-yoke]]"
  - "[[06-gemba]]"
  - "[[03-a3-resolucion-problemas]]"
---

# Andon - Sistema de Señalización Visual

**Andon** (提灯, "linterna") es un sistema de [[Lean Manufacturing]] que proporciona retroalimentación visual en tiempo real sobre el estado de un proceso de producción. Es una de las herramientas más poderosas para hacer visibles los problemas y empower a los trabajadores.

## Origen

Andon fue desarrollado en Toyota como parte del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]]. La palabra proviene del término japonés para "linterna" o "farol". Originalmente era un sistema de luces que indicaba el estado de la línea de producción.

El concepto fue impulsado por [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] y se convirtió en un componente esencial del pilar [[02-Pilares/02-jidoka|Jidoka]] (automatización con toque humano).

## Definición

Andon es un sistema visual que comunica el **estado actual** de una operación o proceso de forma inmediata y comprensible para todos. Su función principal es hacer que los problemas sean **visibles** tan pronto como ocurren.

> "El problema más grande no es el problema en sí, sino que nadie sepa que existe." — Principio Andon

## Componentes del Sistema Andon

### 1. Señales de Luz (Luces Andon)

El indicador más básico y común:

| Color | Significado | Acción |
|-------|-------------|--------|
| 🟢 Verde | Proceso funcionando normalmente | Continuar operando |
| 🟡 Amarillo | Atención requerida, desviación menor | Supervisor se acerca |
| 🔴 Rojo | Detención necesaria, problema grave | Detener línea, resolver |

### 2. Tablero Andon

Un panel visual que muestra:
- Estado de cada estación de trabajo
- Métricas de producción en tiempo real
- Causas de las interrupciones
- Tiempo de resolución de problemas

### 3. Cuerda de Tiro (Pull Cord)

Cable que el operador puede tirar para detener la línea. Es el mecanismo de activación más directo y poderoso.

### 4. Señales Audibles

Alarmas o tonos que complementan las señales visuales para áreas ruidosas o cuando no se puede ver la luz.

## Cómo Andon Empodera a los Trabajadores

En el sistema Andon, **cualquier operador** puede:
1. Detectar una anomalía o calidad defectuosa
2. Activar la señal (tirar la cuerda, presionar botón)
3. Detener la línea si es necesario
4. Recibir apoyo del supervisor y equipo de soporte
5. Resolver el problema antes de continuar

Esto representa un cambio fundamental: el trabajador de línea tiene la **autoridad y la responsabilidad** de detener la producción si detecta un problema.

**Relación con [[02-Pilares/02-jidoka|Jidoka]]:** Andon es la herramienta que hace posible la detección y corrección automática de problemas, que es la esencia de Jidoka.

## Tipos de Andon

### Andon Físico
- Luces en la línea de producción
- Tableros magnéticos o de pizarra
- Cuerdas de tiro mecánicas
- Más tradicional, usado en manufactura

### Andon Digital
- Pantallas LED de alto contraste
- Sistemas de monitoreo con cámaras
- Dashboards en tiempo real
- Integrado con SCADA o MES

### Andon de Software
- Dashboards de build (🟢 passing, 🔴 failing)
- Status boards de deploy
- Alertas de monitoring (PagerDuty, Datadog)
- Kanban digital con estados visuales

## Flujo de Proceso Andon

```
Operador detecta problema
         │
         ▼
Activa señal Andon
         │
         ├─── Señal Amarilla → Supervisor responde
         │                      ├── Resuelto → Continuar
         │                      └── No resuelto → Escalar
         │
         └─── Señal Roja → Detener línea
                           ├── Equipo de soporte acude
                           ├── Resolver problema
                           └── Reiniciar línea
```

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Detección inmediata | Los problemas se ven al momento de ocurrir |
| Menos defectos | Se evita que productos defectuosos avancen |
| Empoderamiento | Los trabajadores tienen autoridad sobre la calidad |
| Aprendizaje organizacional | Cada activación es una oportunidad de mejora |
| Reducción de tiempo de respuesta | Problemas se resuelven en minutos, no horas o días |

## Conexión con Otras Herramientas

- [[01-5s|5S]] — Un área con 5S permite detectar problemas más fácilmente
- [[09-kanban|Kanban]] — Andon complementa las señales de Kanban con estado de calidad
- [[11-poka-yoke|Poka-Yoke]] — Poka-Yoke previene errores; Andon detecta cuando ocurren
- [[03-a3-resolucion-problemas|A3]] — Las activaciones de Andon alimentan el análisis A3
- [[06-gemba|Gemba]] — Los paseos Gemba incluyen observar el estado Andon
- [[05-flujo-continuo|Flujo Continuo]] — Andon protege el flujo continuo de defectos

## Andon en Software

En desarrollo de software, Andon se manifiesta como:
- **CI/CD pipelines** que cambian de verde a rojo cuando fallan
- **Feature flags** que permiten "detener" una funcionalidad defectuosa
- **Monitoring dashboards** que alertan sobre problemas en producción
- **Rollback automático** cuando los indicadores críticos fallan

## Notas Relacionadas

- [[01-5s]] — Base visual para Andon
- [[09-kanban]] — Sistema de señalización complementario
- [[05-flujo-continuo]] — Flujo que Andon protege
- [[11-poka-yoke]] — Prevención vs detección de errores
- [[03-a3-resolucion-problemas]] — Análisis post-activación
- [[06-gemba]] — Observación en el lugar de los hechos
- [[02-Pilares/02-jidoka|Jidoka]] — El pilar que Andon soporta
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
