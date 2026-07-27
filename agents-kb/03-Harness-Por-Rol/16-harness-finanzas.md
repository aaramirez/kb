---
title: "Harness: Finanzas"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Finance Harness"
  - "Contabilidad"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[17-personalizacion-por-area]]"
---

# Harness: Finanzas

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Contador, Financial Analyst, Controller |
| **Enfoque** | Contabilidad, reportes financieros, presupuestos |
| **Volumen** | Bajo-Medio |
| **Sensibilidad** | Muy alta (datos financieros) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny    # No modifica registros financieros
  bash: deny

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-finanzas/        # Procesos financieros
  - kb-contabilidad/    # Políticas contables
  - kb-presupuestos/    # Presupuestos aprobados

rules:
  - "Nunca modificar registros contables"
  - "Validar datos contra fuentes oficiales"
  - "Incluir notas a pie de página"
  - "Seguir NIIF/IFRS para reportes"
  - "Mantener auditoría de todas las consultas"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Reportador Financiero** | Genera estados financieros | "Genera el balance del mes" |
| **Analista de Presupuesto** | Compara vs real | "¿Cómo vamos vs presupuesto?" |
| **Conciliador** | Concilia cuentas | "Concilia los pagos del banco" |
| **Auditor Interno** | Revisa compliance | "¿Hay irregularidades en este período?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[17-personalizacion-por-area|Personalización]]
- [[06-Arquitectura/05-seguridad-y-gobierno|Gobierno]]
