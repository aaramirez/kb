---
title: Cómo Usar Este Knowledge Base
tags:
  - sf/indice
  - type/guia
created: 2026-07-13
updated: 2026-07-13
category: Guía
aliases:
  - Guía de Navegación
  - Manual de Uso
---

# Cómo Usar Este KB

Esta guía te ayudará a sacar el máximo provecho de la Software Factory Knowledge Base.

## Fundamentos de Obsidian

### Wikilinks

Conecta notas usando doble corchete:

```markdown
[[nombre-de-la-nota]]
[[nombre-de-la-nota|Texto personalizado]]
[[seccion/nombre-de-la-nota]]
```

### Graph View

La vista de grafo (`Cmd/Ctrl + G`) muestra todas las notas como nodos y las conexiones como líneas.

### Backlinks

Los backlinks muestran qué notas enlazan a la nota actual. Útiles para navegar el conocimiento de forma inversa.

## Navegación por Secciones

El vault tiene 13 secciones principales:

- **01-Fundamentos**: Qué es, historia, principios
- **02-Estructura**: Roles, equipos, gobernanza
- **03-Procesos**: SDLC, Agile, DevOps
- **04-Prácticas**: Clean Code, TDD, estándares
- **05-Herramientas**: IDEs, CI/CD, AI tools
- **06-Métricas**: DORA, velocity, calidad
- **07-IA Software**: Agentes, MCP, tools, auto-código
- **08-Calidad-Seguridad**: QA, testing, DevSecOps
- **09-DevOps-Infra**: IaC, K8s, SRE
- **10-Gestión-Proyectos**: Estimación, OKRs, SLAs
- **11-Cultura-Equipo**: Cultura, remoto, mentoring
- **12-Casos-Aplicación**: Transformación, checklists
- **13-Fabricas-con-IA**: Videos sobre software factories habilitadas por IA — cada uno con nota en español (`02-Notas/`, enlazada a las notas conceptuales relacionadas) y transcripción fiel (`01-Transcripciones/`)

### Agregar videos a la sección 13

1. Obtener la transcripción en el idioma original siguiendo el skill `youtube` (sección "Descargas en lote: siempre en modo lento").
2. Crear la transcripción legible en `13-Fabricas-con-IA/01-Transcripciones/<videoId> - <slug>.md` (timestamps `[M:SS]` y secciones `##`, contenido fiel).
3. Crear la nota en `13-Fabricas-con-IA/02-Notas/<slug>.md` con `## Resumen`, `## Contenido estructurado`, `## Conceptos clave`, `## Relación con el SF KB` (2–5 notas conceptuales de las secciones 01–12) y `## Referencias`.
4. Registrar el video en `13-Fabricas-con-IA/README.md`.
5. Validar: `node tests/test-sf-kb.js`

## Sistema de Tags

### Tags de Sección
- `sf/fundamentos`, `sf/estructura`, `sf/procesos`, `sf/practicas`
- `sf/herramientas`, `sf/metricas`, `sf/ia-software`, `sf/calidad`
- `sf/devops`, `sf/gestion`, `sf/cultura`, `sf/casos`
- `sf/fabricas-ia` — notas y transcripciones de videos de la sección 13 (combinado con 1–3 tags de sección)

### Tags de Tipo
- `type/concepto` — Definición y explicación
- `type/herramienta` — Herramienta o técnica
- `type/guia` — Instrucciones paso a paso
- `type/checklist` — Lista de verificación
- `type/framework` — Marco de referencia
- `type/agente` — Agente de IA
- `type/arquitectura` — Arquitectura o patrón
- `type/protocolo` — Protocolo o estándar
- `type/nota` — Nota de un video (sección 13)
- `type/transcripcion` — Transcripción fiel de un video (sección 13)

### Niveles de Dificultad
- `difficulty/principiante` — Sin prerrequisitos
- `difficulty/intermedio` — Requiere conocimientos básicos
- `difficulty/avanzado` — Profundiza en temas complejos

## Rutas de Aprendizaje

### Ruta Fundamentos (2-3 horas)
[[01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]] → [[01-Fundamentos/02-evolucion-software-factory|Evolución]] → [[01-Fundamentos/03-era-ia-contexto|Era IA]] → [[01-Fundamentos/04-principios-ingenieria-software|Principios]]

### Ruta DevOps (4-6 horas)
[[03-Procesos/01-sdlc|SDLC]] → [[03-Procesos/05-ci-cd-pipeline|CI/CD]] → [[09-DevOps-Infra/01-devops-ciclo|DevOps]] → [[09-DevOps-Infra/03-infrastructure-as-code|IaC]] → [[09-DevOps-Infra/05-kubernetes-orchestration|K8s]]

### Ruta IA (4-6 horas)
[[07-IA-Software/01-ia-en-ingenieria|Panorama IA]] → [[07-IA-Software/14-agentes-ia-vision-general|Agentes]] → [[07-IA-Software/16-arquitectura-agentes|Arquitecturas]] → [[07-IA-Software/19-mcp-protocol|MCP]] → [[07-IA-Software/20-mcp-servers-tools|MCP Tools]]

### Ruta Calidad (3-4 horas)
[[04-Practicas/03-test-driven-development|TDD]] → [[08-Calidad-Seguridad/02-testing-piramide|Pirámide Testing]] → [[08-Calidad-Seguridad/07-devsecops|DevSecOps]] → [[08-Calidad-Seguridad/11-quality-gates|Quality Gates]]
