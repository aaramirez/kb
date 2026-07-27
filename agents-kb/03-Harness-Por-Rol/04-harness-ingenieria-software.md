---
title: "Harness: Ingeniería de Software"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "Developer Harness"
  - "Desarrollador"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[05-harness-ingeneringia-redes]]"
---

# Harness: Ingeniería de Software

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Desarrollador Full-Stack, Frontend, Backend, Mobile |
| **Enfoque** | Código, debugging, testing, documentación |
| **Volumen** | Alto de interacciones |
| **Sensibilidad** | Media (código, no datos de producción) |

## Harness Diseñado

```yaml
model: claude  # Mejor para código
mode: primary
permission:
  read: allow
  edit: allow   # Puede modificar código
  bash: allow   # Puede ejecutar tests y builds

tools:
  - web_search
  - context7     # Documentación de frameworks
  - file_read
  - file_write
  - bash

context:
  - kb-codigo/          # Estándares de código
  - kb-arquitectura/    # Arquitectura del sistema
  - repo-actual/        # Código del proyecto

rules:
  - "Seguir convenciones del proyecto existente"
  - "Escribir tests para código nuevo"
  - "No commitear secrets o credenciales"
  - "Explicar cambios significativos en commits"
  - "Priorizar claridad sobre cleverness"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Code Review** | Revisa PRs | "Revisa este PR para bugs y best practices" |
| **Debugger** | Ayuda a encontrar errores | "¿Por qué este test falla?" |
| **Documentador** | Genera docs de código | "Documenta esta API REST" |
| **Tester** | Escribe tests | "Escribe tests unitarios para esta función" |

## Skills Recomendados

- **code-review**: Revisión de código y auditoría
- **testing**: Flujo de trabajo de testing
- **git**: Operaciones y convenciones de git

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[05-harness-ingenieria-redes|Siguiente: Redes]]
- [[03-harness-devops-infraestructura|DevOps]]
