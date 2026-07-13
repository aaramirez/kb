---
title: "El Manifiesto Ágil y sus 12 Principios"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Manifiesto Ágil"
  - "Agile Manifesto"
  - "12 Principios Ágiles"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
---

# El Manifiesto Ágil y sus 12 Principios

En febrero de 2001, 17 profesionales de software se reunieron en Snowbird, Utah y crearon el **Agile Manifesto**. Este documento fundamental cambió la forma en que el mundo construye software.

## Los 4 valores del Manifiesto

> Estamos descubriendo mejores formas de desarrollar software haciendo
> primero y luego ayudando a otros a hacerlo.

| Valor izquierdo (valoramos más) | Valor derecho (pero también valoramos) |
|----------------------------------|----------------------------------------|
| **Individuos e interacciones** sobre procesos y herramientas | Procesos y herramientas |
| **Software funcionando** sobre documentación extensiva | Documentación extensiva |
| **Colaboración con el cliente** sobre negociación de contratos | Negociación de contratos |
| **Respuesta ante el cambio** sobre seguir un plan | Seguir un plan |

**Nota:** Los valores de la derecha tienen valor, pero valoramos más los de la izquierda.

## Los 12 Principios

### Prioridad al cliente

1. Nuestra máxima prioridad es satisfacer al cliente mediante la entrega temprana y continua de software valioso.

2. Los cambios en los requerimientos se bienvenidos, incluso tarde en el desarrollo. Los procesos ágiles aprovechan el cambio para ventaja competitiva del cliente.

3. Entregar software funcionando frecuentemente, desde un par de semanas a un par de meses, con preferencia a un plazo más corto.

### Construir equipos

4. Las personas que interactúan con el negocio deben trabajar juntamente con los ingenieros de software durante todo el proyecto.

5. Construir proyectos alrededor de individuos motivados. Darles el entorno y soporte necesarios, y confiar en que harán el trabajo.

6. La comunicación cara a cara es el método más eficiente y efectivo dentro de un equipo.

### Calidad técnica

7. El software funcionando es la medida principal de progreso.

8. Los procesos ágiles promueven un desarrollo sostenible. Los patrocinadores, desarrolladores y usuarios deben ser capaces de mantener un ritmo constante indefinidamente.

9. La atención continua a la excelencia técnica y al buen diseño mejora la agilidad.

### Mejora continua

10. La simplicidad — el arte de maximizar la cantidad de trabajo no realizado — es esencial.

11. Las mejores arquitecturas, requerimientos y diseños emergen de equipos auto-organizados.

12. A intervalos regulares, el equipo reflexiona sobre cómo ser más efectivo y ajusta su comportamiento en consecuencia.

## Aplicabilidad hoy

### ¿Sigue vigente?

**Sí**, pero con matices:

| Principio | Relevancia 2026 | Adaptación |
|-----------|-----------------|------------|
| Customer collaboration | Alta | Integrar AI como canal |
| Working software | Alta | CI/CD como estándar |
| Respond to change | Crítica | AI para pivotar rápido |
| Individuals & interactions | Alta | Remote-first, async |

### Frameworks ágiles actuales

- **Scrum**: iteraciones de 1-4 semanas
- **Kanban**: flujo continuo, WIP limits
- **SAFe**: escalado para grandes organizaciones
- **Shape Up**: ciclos de 6 semanas
- **Trunk-based**: desarrollo continuo en main

## Errores comunes de implementación

1. **"Agile" = Scrum**: Agile es una filosofía, no un framework
2. **Sin retrospectivas**: pierdes la mejora continua
3. **Over-engineering**: viola el principio de simplicidad
4. **Sin definición de Done**: calidad inconsistente
5. **Micro-management**: contradice auto-organización

## Agile + DevOps + IA

La combinación de estos tres pilares crea la [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] moderna:

```
        Agile
       /     \
      /       \
   DevOps ←→ IA
```

- **Agile** provee el mindset y los valores
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] provee la automatización
- La [[../01-Fundamentos/03-era-ia-contexto|IA]] provee la aceleración

## Relación con otros conceptos

- Complementa [[../01-Fundamentos/16-lean-software|Lean Software Development]]
- Se integra con [[../01-Fundamentos/07-devops-filosofia|DevOps]]
- Se soporta en [[../01-Fundamentos/04-principios-ingenieria-software|principios de ingeniería]]
- Se mide con [[../06-Metricas/README|métricas ágiles]]
