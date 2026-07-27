---
title: "Caso: Harness Grupal Empresarial"
tags:
  - agents/casos
  - type/caso-uso
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Casos de Uso"
aliases:
  - "Enterprise Harness"
  - "Team Harness"
related:
  - "[[02-caso-agentes-pmo-portafolio]]"
---

# Caso: Harness Grupal Empresarial

## Contexto

Una empresa de telecomunicaciones con 200+ empleados en tecnología quiere implementar IA para todo su equipo de desarrollo.

## Problema

- Cada desarrollador configuraba su propio entorno de IA
- No había estándares de permisos ni seguridad
- Conocimiento disperso en múltiples repositorios
- Sin gobierno de IA

## Solución

### Fase 1: Estándares (Semana 1-2)
- Harness estándar por rol (dev, QA, arquitecto, DevOps)
- Knowledge base compartida del equipo
- Políticas de permisos y seguridad

### Fase 2: Piloto (Semana 3-6)
- 5 desarrolladores piloto
- 3 casos de uso: code review, documentación, testing
- Medición de productividad

### Fase 3: Escala (Semana 7-12)
- Rollout a todo el equipo (200+ personas)
- Centro de excelencia de 3 personas
- Integración con GitHub, CI/CD, documentación

## Resultados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo de code review | 2h/PR | 45min/PR | -63% |
| Documentación | Manual | 80% automática | +80% |
| Onboarding nuevo dev | 2 semanas | 3 días | -75% |
| Satisfacción del equipo | 3.2/5 | 4.5/5 | +41% |

## Lecciones Aprendidas

1. **Empezar con champions**: Los primeros 5 usuarios fueron clave
2. **Estándares tempranos**: Sin estándares, el caos es inevitable
3. **KB viva**: La knowledge base debe actualizarse semanalmente
4. **Gobierno ligero**: No sobrecargar con procesos

## Ver también

- [[03-Harness-Por-Rol/README|Harness por Rol]]
- [[02-Metodologia/README|Metodología]]
