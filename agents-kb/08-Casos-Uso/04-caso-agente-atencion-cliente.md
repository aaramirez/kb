---
title: "Caso: Agente de Atención al Cliente"
tags:
  - agents/casos
  - type/caso-uso
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Casos de Uso"
aliases:
  - "Customer Service Agent"
  - "CX Agent"
related:
  - "[[05-caso-monitoreo-red-agentes]]"
---

# Caso: Agente de Atención al Cliente

## Contexto

Una telco recibe 10,000+ interacciones diarias de clientes por múltiples canales (chat, email, teléfono, redes sociales).

## Problema

- Tiempo promedio de respuesta: 8 horas
- 70% de consultas son repetitivas
- Satisfacción del cliente: 3.1/5
- Costo por interacción: $15 USD

## Solución

### Arquitectura del Agente

```
Cliente ──▶ Canal ──▶ Agente N1 ──┬──▶ Respuesta (70%)
                                  │
                                  └──▶ Escalamiento ──▶ Agente N2
                                                          │
                                                          └──▶ Humano (10%)
```

### Capacidades
- Responde FAQs (horarios, planes, cobertura)
- Consulta estado de cuenta
- Crea tickets de soporte
- Ofrece soluciones de troubleshooting
- Escala a humano cuando es necesario

## Resultados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo de respuesta | 8 horas | < 2 min | -99% |
| Resolución sin humano | 0% | 65% | +65% |
| Satisfacción | 3.1/5 | 4.3/5 | +39% |
| Costo por interacción | $15 | $3 | -80% |

## Ver también

- [[04-Agentes-Clientes/README|Agentes para Clientes]]
- [[14-harness-atencion-cliente|Harness Atención Cliente]]
