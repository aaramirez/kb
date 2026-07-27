---
title: "Harness: Ingeniería de Redes"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Network Engineer Harness"
  - "Redes"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[06-harness-qa-testing]]"
---

# Harness: Ingeniería de Redes

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Ingeniero de Redes, Telecomunicaciones |
| **Enfoque** | Monitoreo, configuración, optimización de red |
| **Volumen** | Medio-Alto (alertas constantes) |
| **Sensibilidad** | Alta (infraestructura crítica) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny    # No modifica configuración de red directamente
  bash: deny    # No ejecuta comandos de red

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-redes/            # Documentación de red
  - kb-infraestructura/  # Topología y configuración
  - alertas-historial/   # Histórico de incidentes

rules:
  - "Nunca recomendar cambios sin validación humana"
  - "Siempre considerar impacto en servicios activos"
  - "Escalar alertas críticas inmediatamente"
  - "Documentar todos los hallazgos de red"
  - "Referenciar estándares de la industria (ITU, 3GPP)"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Monitoreo de Red** | Analiza métricas de red | "¿Cómo está el tráfico en el enlace X?" |
| **Diagnóstico de Fallas** | Ayuda a diagnosticar | "El cliente报告断续连接, ¿qué revisar?" |
| **Optimización** | Sugiere mejoras | "¿Cómo optimizar el tráfico VPN?" |
| **Documentación** | Mantiene docs de red | "Actualiza la topología de la red" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[06-harness-qa-testing|Siguiente: QA]]
- [[05-Automatizacion/02-agentes-de-gestion-de-red|Agentes de Red]]
