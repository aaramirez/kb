---
title: "Organización Típica de una Software Factory"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Estructura Organizacional SF"
  - "组织结构"
related:
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../02-Estructura/02-roles-equipo|Roles del Equipo]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[../02-Estructura/11-estructura-matricial|Estructura Matricial]]"
---

# Organización Típica de una Software Factory

Cómo se estructura una Software Factory a nivel organizacional: jerarquía, departamentos, tamaño y líneas de reporte.

## Modelo Jerárquico Estándar

La mayoría de Software Factories siguen un patrón jerárquico que equilibra交付能力 con agilidad organizacional.

```
CEO / Director General
├── VP de Ingeniería
│   ├── Director de Arquitectura
│   ├── Director de Desarrollo (múltiples squads)
│   ├── Director de QA / Quality
│   └── Director de DevOps / Platform
├── VP de Producto
│   ├── Product Managers
│   └── UX/UI Designers
├── VP de Operaciones
│   ├── Project Managers
│   └── Resource Management
└── VP de Negocio
    ├── Business Analysts
    └── Client Relations
```

## Departamentos Típicos

| Departamento | Responsabilidad principal | Tamaño típico (SF mediana) |
|---|---|---|
| Engineering | Desarrollo de software, code review, technical decisions | 60-70% del personal |
| Quality Assurance | Testing, automation, quality gates | 10-15% |
| DevOps / SRE | CI/CD, infraestructura, observabilidad | 5-10% |
| Product | Backlog, roadmap, user research | 5-8% |
| Design | UX/UI, design system, research | 3-5% |
| Architecture | Standards, ADRs, tech radar | 3-5% |
| PMO | Gestión de proyectos, reporting, process improvement | 3-5% |

## Líneas de Reporte

### Modelo funcional (tradicional)
- Reporte vertical por especialidad
- Los devs reportan a un Engineering Manager
- QA reporta a un QA Manager
- **Ventaja**: profundidad técnica, carrera clara
- **Desventaja**: silos, comunicación cruzada lenta

### Modelo por producto
- Equipos multidisciplinarios dedicados a un producto
- Cada equipo tiene dev, QA, design, PO
- **Ventaja**: ownership, velocidad de decisión
- **Desventaja**: duplicación de roles especializados

### Modelo matricial (híbrido)
- Reporte dual: funcional + por proyecto/producto
- El individual contributor tiene dos jefes
- **Ventaja**: flexibilidad de recursos
- **Desventaja**: conflicto de prioridades, complejidad

Ver [[../02-Estructura/11-estructura-matricial|Estructura Matricial]] para análisis detallado.

## Tamaños Típicos por Etapa

| Etapa | Total empleados | Ingenieros | Ratio eng:soporte |
|---|---|---|---|
| Startup SF | 10-30 | 8-25 | 4:1 |
| SF mediana | 50-200 | 35-140 | 3.5:1 |
| SF grande | 200-500 | 140-350 | 3:1 |
| Enterprise | 500+ | 350+ | 2.5:1 |

> A medida que la SF crece, la proporción de roles de soporte (management, HR, operations) aumenta.

## Conway y la Organización

La [[../01-Fundamentos/10-conway-ley|Ley de Conway]] establece que los sistemas reflejan la estructura organizacional. Esto implica:

- Si tienes silos, el software tendrá acoplamiento entre módulos
- Si tienes equipos autónomos, tenderás a microservicios
- Los boundaries de equipo deben mapear a los boundaries del sistema

## Patrones Organizacionales Comunes

| Patrón | Cuándo usarlo | Ejemplo |
|---|---|---|
| Feature Team | Producto con features frecuentes | Equipo de pagos, equipo de notificaciones |
| Platform Team | Múltiples equipos consumiendo infra | Equipo de platform engineering |
| Enabling Team | Transiciones técnicas temporales | Migración a Kubernetes |
| Complicated Subsystem | Componente con alta complejidad | Motor de ML, motor de reglas fiscales |

Ver [[../02-Estructura/13-arbol-deportes|Team Topologies]] para el framework completo.

## Métricas de Salud Organizacional

| Métrica | Rango saludable | Señal de alerta |
|---|---|---|
| Lead time | < 5 días | > 15 días |
| Deploy frequency | > 1/semana | < 1/mes |
| Team satisfaction (eNPS) | > 30 | < 0 |
| Bus factor por squad | >= 3 | = 1 |
| Time to onboard | < 30 días | > 90 días |

Ver [[../06-Metricas/README|Métricas]] para mediciones detalladas.

## Anti-patrones Organizacionales

1. **Conway invertido**: forzar la organización a copiar la arquitectura actual
2. **Hero culture**: dependencia de individuos clave en lugar de procesos
3. **Committee-driven architecture**: decisiones técnicas por consenso burocrático
4. **Resource pooling**: asignar personas a múltiples proyectos simultáneamente
5. **Zero support staff**: ingenieros haciendo tareas de ops, admin, o soporte

## Referencias

- [[../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]]
- [[../01-Fundamentos/15-producto-vs-proyecto|Producto vs Proyecto]]
- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]
- [[../11-Cultura-Equipo/README|Cultura de Equipo]]
