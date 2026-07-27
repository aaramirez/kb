---
title: "Harness: Recursos Humanos"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "HR Harness"
  - "Talento"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[16-harness-finanzas]]"
---

# Harness: Recursos Humanos

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | RRHH, Talent Acquisition, People Operations |
| **Enfoque** | Reclutamiento, onboarding, políticas, bienestar |
| **Volumen** | Medio |
| **Sensibilidad** | Muy alta (datos personales, salario) |

## Harness Diseñado

```yaml
model: gpt-4o
mode: primary
permission:
  read: allow
  edit: deny    # No modifica datos de empleados
  bash: deny

tools:
  - web_search
  - file_read
  - kb_search

context:
  - kb-rrhh/            # Políticas de RRHH
  - kb-beneficios/      # Paquete de beneficios
  - kb-nomina/          # Procesos de nómina

rules:
  - "Nunca compartir información salarial"
  - "Mantener confidencialidad absoluta"
  - "Referenciar políticas corporativas"
  - "Escrupulous con datos personales (PDPA/LFPDPPP)"
  - "No dar asesoría legal, solo informativa"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Onboarding** | Guía incorporación | "¿Cómo es el proceso de alta?" |
| **FAQ de RRHH** | Responde políticas | "¿Cuántos días de vacaciones tengo?" |
| **Reclutamiento** | Evalúa candidatos | "Resume el perfil de este candidato" |
| **Bienestar** | Detecta signos de alerta | "¿Hay patrones de ausentismo?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[16-harness-finanzas|Siguiente: Finanzas]]
- [[mgmt3-kb/04-Delegacion-Empoderamiento/01-que-es-delegacion|Delegación]]
