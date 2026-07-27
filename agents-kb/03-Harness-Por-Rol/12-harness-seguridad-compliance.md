---
title: "Harness: Seguridad / Compliance"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Security Harness"
  - "Compliance"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[13-harness-comercial-ventas]]"
---

# Harness: Seguridad / Compliance

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Seguridad de la Información, Compliance Officer |
| **Enfoque** | Auditoría, políticas, cumplimiento regulatorio |
| **Volumen** | Bajo-Medio |
| **Sensibilidad** | Muy alta (acceso a logs, auditorías) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny    # Solo lectura para auditoría
  bash: deny

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-seguridad/       # Políticas de seguridad
  - kb-compliance/      # Marco regulatorio
  - kb-auditorias/      # Histórico de auditorías

rules:
  - "Nunca modificar logs o registros de auditoría"
  - "Reportar hallazgos con evidencia"
  - "Referenciar marcos regulatorios aplicables"
  - "Clasificar hallazgos por severidad"
  - "Mantener confidencialidad de la auditoría"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Auditor de Seguridad** | Revisa compliance | "¿Cumplimos con ISO 27001?" |
| **Monitor de Logs** | Analiza logs de seguridad | "¿Hay intentos de acceso sospechosos?" |
| **Gestor de Políticas** | Actualiza políticas | "¿Esta política está vigente?" |
| **Reportador de Incidentes** | Documenta brechas | "Genera un reporte de incidente de seguridad" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[13-harness-comercial-ventas|Siguiente: Comercial]]
- [[06-Arquitectura/05-seguridad-y-gobierno|Seguridad y Gobierno]]
