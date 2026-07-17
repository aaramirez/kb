---
title: "Feedback Wall"
tags:
  - mgmt3/cambio
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Gestión del Cambio"
aliases:
  - "Muro de Retroalimentación"
  - "Tablero de Feedback"
related:
  - "[[06-dialogos-de-mejora]]"
  - "[[07-corporate-huddles]]"
  - "[[02-celebration-grids]]"
  - "[[03-experimentacion-organizacional]]"
---

## Feedback Wall

El Feedback Wall es una herramienta de Management 3.0 para **recoger, organizar y actuar sobre retroalimentación** de forma continua. A diferencia de las encuestas periódicas, el Feedback Wall está siempre disponible y permite que las personas contribuyan cuando la retroalimentación es fresca y relevante.

> **"La retroalimentación que llega tarde es retroalimentación que llega muerta."**

## Cuándo usarlo

- **Permanente**: Como canal abierto de retroalimentación continua
- **En proyectos**: Para capturar feedback durante un proyecto
- **En transiciones**: Cuando hay cambios significativos en el equipo
- **En onboarding**: Para que los nuevos expresen sus primeras impresiones
- **Después de eventos**: Workshops, presentaciones, capacitaciones

## Formato físico vs digital

### Físico

| Aspecto | Descripción |
|---------|-------------|
| **Ubicación** | Pared visible en el área del equipo |
| **Material** | Pizarra, cartulina o panel de corcho |
| **Entradas** | Post-its de diferentes colores |
| **Ventajas** | Tangible, visible, bajo esfuerzo |
| **Desventajas** | Limitado a presencia física, no anónimo por defecto |

### Digital

| Aspecto | Descripción |
|---------|-------------|
| **Herramientas** | Miro, Mural, Notion, Slack, Teams |
| **Entradas** | Formularios, mensajes, notas digitales |
| **Ventajas** | Remoto, anónimo opcional, persistente, buscable |
| **Desventajas** | Menos espontáneo, requiere acceso a herramienta |

### Híbrido

Combina ambos: un panel físico en la oficina con un espejo digital para el equipo remoto. Sincroniza periódicamente.

## Setup paso a paso

### Paso 1: Diseña la estructura (10 min)

Organiza el muro en categorías que sean relevantes para tu equipo:

```
┌──────────────────────────────────────────────────────────────┐
│                      FEEDBACK WALL                           │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ 💡 IDEAS │  │ ⚠️ BLOQUEOS│ │ 😊 LO QUE│  │ 🔧 MEJORAS│   │
│  │          │  │          │  │ FUNCIONA │  │          │    │
│  │          │  │          │  │          │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 📊 ACCIONES TOMADAS                                  │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Vota con un punto azul en el post-it que más te resuene     │
└──────────────────────────────────────────────────────────────┘
```

### Categorías sugeridas

| Categoría | Icono | Para qué |
|-----------|-------|----------|
| **Ideas** | 💡 | Nuevas formas de hacer las cosas |
| **Bloqueos** | ⚠️ | Lo que impide avanzar |
| **Lo que funciona** | 😊 | Prácticas que deberían mantenerse |
| **Mejoras** | 🔧 | Cosas que podrían ser mejores |
| **Acciones tomadas** | 📊 | Qué se hizo con el feedback anterior |

### Paso 2: Define las reglas (5 min)

Comunica al equipo:
- **Anonimato**: Opcional pero recomendado. Nadie debe temer represalias
- **Frecuencia**: El muro está siempre abierto. Revisión semanal
- **Votación**: Usa puntos para priorizar (cada persona tiene 3 puntos)
- **Seguimiento**: Cada feedback recibe respuesta en la revisión semanal
- **Tono**: Constructivo, específico, orientado a la acción

### Paso 3: Lanza el muro (15 min)

1. **Presenta** el muro al equipo
2. **Explica** las categorías y reglas
3. **Contribuye primero** como facilitador para demostrar que es seguro
4. **Invita** a todos a contribuir
5. **Agenda** la primera revisión semanal

## Cómo funciona en la práctica

### Contribuir (2 min por persona)

1. Toma un post-it
2. Escribe tu feedback (manténlo corto y específico)
3. Colócalo en la categoría correcta
4. Opcionalmente: agrega tu nombre o mantente anónimo

### Ejemplos de feedback

| Categoría | Ejemplo bueno | Ejemplo malo |
|-----------|--------------|--------------|
| 💡 Idea | "Probar standup de 10 min los viernes" | "Las reuniones son malas" |
| ⚠️ Bloqueo | "Esperando aprobación de arquitectura desde hace 3 semanas" | "Hay problemas" |
| 😊 Lo que funciona | "Pair programming en features complejas reduce bugs" | "Todo bien" |
| 🔧 Mejora | "El code review podría tener un SLA de 24h" | "Hay que mejorar" |

### Revisión semanal (15-20 min)

1. **Leer** todos los post-its nuevos (3 min)
2. **Votar** — Cada persona asigna sus puntos (3 min)
3. **Discutir** los más votados (10 min)
4. **Decidir** acciones concretas (5 min)
5. **Mover** los post- procesados a "Acciones tomadas" con la fecha

### Tabla de seguimiento

| Post-it | Votos | Acción | Responsable | Fecha | Estado |
|---------|-------|--------|-------------|-------|--------|
| "Standup 10 min viernes" | 5 | Probar 2 semanas | Scrum Master | 2026-07-20 | En curso |
| "SLA code review 24h" | 8 | Definir política | Tech Lead | 2026-07-17 | Completado |
| "Pair programming" | 3 | Mantener práctica | Equipo | — | Ya implementado |

## Ciclo de vida del feedback

```
Contribución → Revisión → Votación → Decisión → Acción → Cierre
     │              │          │          │         │        │
     │              │          │          │         │        └─ Se documenta
     │              │          │          │         └─ Se ejecuta
     │              │          │          └─ Se asigna responsable
     │              │          └─ Se prioriza
     │              └─ Se lee y discute
     └─ Se escribe en post-it
```

## Mantenimiento

| Frecuencia | Acción |
|-----------|--------|
| **Continua** | Las personas contribuyen cuando quieren |
| **Semanal** | Revisión y votación del equipo |
| **Mensual** | Análisis de tendencias: ¿Qué temas recurrentes hay? |
| **Trimestral** | Evaluar si el muro sigue siendo útil y relevante |

## Errores comunes

1. **No revisar regularmente** — Si el feedback se acumula sin respuesta, la gente deja de participar
2. **No tomar acciones** — La crítica más grande es "preguntan pero no hacen nada"
3. **Hacer personal el feedback** — El muro es sobre el sistema, no sobre personas
4. **No priorizar** — Si todo es urgente, nada es urgente
5. **Olvidar el seguimiento** — Cada feedback debe recibir una respuesta, aunque sea "no podemos ahora"
6. **Solo feedback negativo** — Recordar incluir la categoría "Lo que funciona"

## Feedback Wall vs Encuesta

| Aspecto | Feedback Wall | Encuesta |
|---------|--------------|----------|
| Frecuencia | Continua | Periódica |
| Espontaneidad | Alta | Baja (programada) |
| Anonimato | Opcional | Generalmente sí |
| Profundidad | Superficial-moderada | Moderada-profunda |
| Acción | Inmediata | Post-encuesta |
| Cultura | Abierta, informal | Formal, estructurada |

Ambas son complementarias. El Feedback Wall para el pulso constante, las encuestas para análisis profundos.

Para conversaciones más estructuradas sobre el feedback, consulta [[06-dialogos-de-mejora]].
