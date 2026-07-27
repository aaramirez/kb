---
title: "Caso: Agentes PMO Portafolio"
tags:
  - agents/casos
  - type/caso-uso
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Casos de Uso"
aliases:
  - "PMO Agents"
  - "Portfolio Management"
related:
  - "[[01-caso-harness-grupal-empresarial]]"
---

# Caso: Agentes PMO Portafolio

## Contexto

La oficina de gestión de proyectos (PMO) supervisa 30+ proyectos simultáneos en diferentes estados.

## Problema

- Status updates manuales cada semana
- Bloqueos detectados tarde
- Dificultad para ver el panorama completo
- Reportes inconsistentes entre proyectos

## Solución

### Agentes Implementados

1. **Tracker de Portafolio**
   - Monitorea GitHub Projects diariamente
   - Detecta bloqueos > 48 horas
   - Alerta al equipo de PMO

2. **Generador de Reportes**
   - Crea one-pager quincenal automáticamente
   - Actualiza dashboards de Power BI
   - Genera minutas de comité

3. **Gestor de Solicitudes**
   - Procesa formularios de Microsoft Forms
   - Crea issues en GitHub Projects
   - Notifica al equipo en Teams

4. **Integrador GitHub-Teams**
   - Sincroniza estado de issues
   - Notifica cambios relevantes
   - Mantiene Planner actualizado

## Resultados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo de status update | 4h/semana | Automático | -100% |
| Detección de bloqueos | 5+ días | < 48 horas | -60% |
| Tiempo de reportes | 6h/quincena | 15min | -96% |
| Satisfacción stakeholders | 3.0/5 | 4.2/5 | +40% |

## Ver también

- [[03-Harness-Por-Rol/07-harness-agilidad-pmo|Harness PMO]]
- [[07-Retos-Soluciones/README|Retos]]
