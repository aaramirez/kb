---
title: "Gestión Visual (Visual Management)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Gestión Visual
  - Visual Management
  - Visual Factory
  - Fábrica Visual
related:
  - "[[01-5s]]"
  - "[[02-andon]]"
  - "[[09-kanban]]"
  - "[[06-gemba]]"
  - "[[19-trabajo-estandarizado]]"
---

# Gestión Visual (Visual Management)

**Gestión Visual** es un sistema de [[Lean Manufacturing]] que utiliza **señales visuales** para comunicar información de forma que cualquier persona pueda entender el estado del proceso en segundos, sin necesidad de preguntar.

## Definición

La gestión visual es el uso de indicadores, señales y dispositivos visuales para hacer que:
- El **estado normal** sea visible
- Las **anomalías** sean inmediatamente detectables
- La **información** esté disponible para todos
- Las **acciones correctivas** se activen sin demora

> "Si necesitas preguntar cómo va el proceso, la gestión visual no está funcionando."

## Tipos de Señales Visuales

### 1. Indicadores (Displays)
Muestran el estado actual o tendencias.

| Tipo | Ejemplo | Uso |
|------|---------|-----|
| Tablero de producción | Número de unidades producidas vs meta | Medir rendimiento diario |
| Gráfico de tendencias | OEE semanal | Seguimiento de tendencias |
| Tablero de calidad | % defectos por turno | Alertar sobre calidad |
| Tablero de seguridad | Días sin accidentes | Reforzar seguridad |

### 2. Controles
Limitan o guían el comportamiento.

| Tipo | Ejemplo | Uso |
|------|---------|-----|
| [[09-kanban\|Kanban]] | Tarjetas de señal | Limitar producción |
| WIP Limits | Límite de trabajo en progreso | Controlar flujo |
| Lineas de piso | Zonas de tránsito vs trabajo | Organizar espacio |
| [[01-5s\|5S]] siluetas | Formas de herramientas | Mantener orden |

### 3. Señales (Andon)
Anuncian condiciones especiales.

| Tipo | Ejemplo | Uso |
|------|---------|-----|
| [[02-andon\|Luces Andon]] | Verde/amarillo/rojo | Estado de la máquina |
| Alarmas | Sonido de parada | Alertar problemas |
| Banderas | Señal de emergencia | Comunicar urgencia |

## Los 5 Principios de Gestión Visual

### 1. Estado Normal Visible
Cualquier persona debería poder distinguir entre normal y anormal.

### 2. Detección Rápida de Anomalías
El problema se detecta en segundos, no horas o días.

### 3. Acción Inmediata
La señal visual activa una respuesta automática.

### 4. Información Accesible
La información está disponible para todos, sin intermediarios.

### 5. Mejora Continua
Las señales visuales facilitan la identificación de oportunidades de [[02-Pilares/03-kaizen|Kaizen]].

## Herramientas de Gestión Visual

### En el Piso de Producción
- **Líneas de piso:** Zonas de trabajo, tránsito, almacenamiento
- **Tableros de producción:** Métricas diarias visibles para todos
- **Marcadores de inventario:** Niveles mínimos y máximos
- **Estaciones de trabajo estandarizadas:** [[19-trabajo-estandarizado|Standard Work]] visible

### En Equipos
- **[[02-andon|Luces Andon]]** en cada estación de trabajo
- **Manómetros y sensores** con rangos visuales
- **Etiquetas de estado** en máquinas

### En la Organización
- **Tableros de gestión diaria** (Daily Management Boards)
- **Tableros de seguridad** (Safety Boards)
- **Tableros de calidad** (Quality Boards)

## Beneficios

| Beneficio | Impacto |
|-----------|---------|
| Transparencia | Problemas visibles para todos |
| Detección temprana | Anomalías se detectan en segundos |
| Autogestión | El equipo actúa sin esperar instrucciones |
| Comunicación | Información accesible sin reuniones |
| Responsabilidad | Métricas visibles generan compromiso |
| Mejora continua | El estado actual siempre es visible |

## Gestión Visual y Otras Herramientas

- **[[01-5s|5S]]** — La base de toda gestión visual
- **[[02-andon|Andon]]** — Señalización visual de problemas
- **[[09-kanban|Kanban]]** — Sistema de señal visual para producción
- **[[06-gemba|Gemba]]** — La gestión visual facilita la observación
- **[[19-trabajo-estandarizado|Standard Work]]** — Estándares visibles en cada estación
- **[[16-oee|OEE]]** — Métricas OEE se muestran en tableros visuales

## Gestión Visual en Software

Aplicado a desarrollo:
- **Dashboards de CI/CD:** Estado de builds y deploys visible
- **Kanban boards:** Flujo de trabajo visual (Jira, Trello, Linear)
- **Monitoreo de sistemas:** Grafana, Datadog con alertas visuales
- **Code review status:** Estado de PRs visible al equipo
- **Sprint boards:** Progreso del sprint visible al equipo

## Errores Comunes

- Crear demasiadas señales (exceso de información = ruido)
- No mantener las señales actualizadas
- Diseñar para la dirección en vez de para el operador
- No explicar qué acción activa cada señal
- Usar colores sin sistema consistente

## Notas Relacionadas

- [[01-5s]] — Base de toda gestión visual
- [[02-andon]] — Señalización de problemas
- [[09-kanban]] — Sistema de señal para producción
- [[06-gemba]] — Facilitada por gestión visual
- [[19-trabajo-estandarizado]] — Estándares visibles en el piso
- [[16-oee]] — Métricas mostradas en tableros
- [[02-Pilares/03-kaizen|Kaizen]] — Mejora continua facilitada por transparencia
