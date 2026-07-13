---
title: "Evolución de la Software Factory"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Evolución SF"
  - "Historia de la Software Factory"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|¿Qué es una SF?]]"
  - "[[../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]]"
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
---

# Evolución de la Software Factory

La transformación de talleres artesanales a fábricas de software productivas sigue una trayectoria de más de 70 años.

## Línea de tiempo

```
1950s ──── 1970s ──── 1990s ──── 2000s ──── 2010s ──── 2020s
  │          │          │          │          │          │
Mainframes  Waterfall  CMM/CMMI   Agile    DevOps     AI-Native
```

## 1950s–1960s: La era de los Mainframes

- Programadores como artesanos individuales
- Código en lenguajes de máquina y ensamblador
- **No existía** el concepto de proceso de ingeniería
- Cada sistema era único y artesanal

**Características clave:**
- Desarrollo sin metodología formal
- Documentación mínima
- Dependencia total del programador

## 1970s: Waterfall y los primeros procesos

Winston Royce (1970) formalizó el modelo de cascada:

```
Requisitos → Diseño → Implementación → Testing → Mantenimiento
```

**Logros:**
- Primera formalización del proceso de software
- Separación de fases
- Documentación como entregable

**Limitaciones:**
- Rigidez ante cambios
- Feedback tardío (el cliente ve el producto al final)
- Integración como bottleneck

## 1980s–1990s: CMM y la medición de madurez

El [[../01-Fundamentos/05-modelos-madurez|CMMI]] (Capability Maturity Model) introdujo:

| Nivel | Nombre | Descripción |
|-------|--------|-------------|
| 1 | Inicial | Procesos ad-hoc |
| 2 | Repetible | Gestión de proyectos básica |
| 3 | Definido | Procesos estandarizados |
| 4 | Gestionado | Métricas y control cuantitativo |
| 5 | Optimizado | Mejora continua |

**Impacto:**
- Las organizaciones empezaron a medir su madurez
- Surgieron las primeras "fábricas de software" en India y Latinoamérica
- Outsourcing y nearshoring crecieron

## 2000s: Agile rompe el molde

El [[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]] (2001) cambió las reglas:

**Valores fundacionales:**
- Individuos y interacciones > procesos y herramientas
- Software funcionando > documentación extensiva
- Colaboración con cliente > negociación de contratos
- Responder al cambio > seguir un plan

**Frameworkes que emergieron:**
- Scrum (1995, formalizado 2001)
- XP (Extreme Programming, 1999)
- Kanban (adaptado para software, 2000s)

## 2010s: DevOps y la automatización

[[../01-Fundamentos/07-devops-filosofia|DevOps]] unificó desarrollo y operaciones:

- **CI/CD**: integración y despliegue continuo
- **Infraestructura como Código** (IaC): Terraform, Ansible
- **Containerización**: Docker, Kubernetes
- **Monitoring**: observabilidad como práctica estándar

**Resultado:** time-to-market reducido de meses a horas.

## 2020s: AI-Native y la nueva frontera

La [[../01-Fundamentos/03-era-ia-contexto|Era de la IA]] redefine la factory:

- **Coding assistants**: GitHub Copilot, Claude, GPT
- **AI agents**: generación autónoma de código y tests
- **Automatización de decisiones**: architecture suggestions, code review
- **Prompt engineering** como skill fundamental

| Era | Paradigma | Rol del humano |
|-----|-----------|----------------|
| 1950s | Artesanal | Programador único |
| 1970s | Procesado | Ingeniero de proceso |
| 1990s | Medido | Gerente de calidad |
| 2000s | Ágil | Colaborador |
| 2010s | Automatizado | Orquestador |
| 2020s | AI-Native | Estratega y supervisor |

## Lecciones de la evolución

1. **Los procesos maduran**, pero no deben volverse burocracia
2. **La automatización** siempre acelera, pero requiere gobernanza
3. **La cultura** importa tanto como las herramientas
4. **La medición** es necesaria pero no suficiente
5. **La adaptabilidad** es la única constante

## Relación con la SF moderna

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory actual]] integra todas estas etapas:

- Procesos del CMMI para gobernanza
- Agilidad para iteración
- DevOps para automatización
- IA para multiplicar capacidades
- [[../01-Fundamentos/16-lean-software|Lean]] para eliminar desperdicio
