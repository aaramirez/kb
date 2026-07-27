---
title: "Harness: Comercial / Ventas"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Sales Harness"
  - "Comercial"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[14-harness-atencion-cliente]]"
---

# Harness: Comercial / Ventas

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Ejecutivo de Ventas, Account Manager, Marketing |
| **Enfoque** | Prospección, propuestas, seguimiento, análisis |
| **Volumen** | Alto |
| **Sensibilidad** | Media (datos de clientes, pricing) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: allow   # Puede crear propuestas
  bash: deny

tools:
  - web_search
  - file_read
  - file_write
  - kb_search

context:
  - kb-comercial/       # Catálogo de productos
  - kb-precios/         # Políticas de pricing
  - kb-clientes/        # Info de clientes (no sensible)
  - kb-mercado/         # Análisis competitivo

rules:
  - "Nunca ofrecer descuentos sin autorización"
  - "Incluir ROI en propuestas"
  - "Personalizar según necesidad del cliente"
  - "Incluir casos de éxito relevantes"
  - "Respetar políticas de pricing"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Generador de Propuestas** | Crea propuestas comerciales | "Crea una propuesta para empresa X" |
| **Analista de Oportunidades** | Evalúa deals | "¿Cuál es la probabilidad de cerrar este deal?" |
| **Seguimiento de Leads** | Automatiza follow-up | "¿Qué leads están fríos?" |
| **Competitive Intel** | Analiza competencia | "¿Qué están ofreciendo los competidores?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[14-harness-atencion-cliente|Siguiente: Atención Cliente]]
- [[01-Fundamentos/04-casos-de-uso-en-telco|Casos Telco]]
