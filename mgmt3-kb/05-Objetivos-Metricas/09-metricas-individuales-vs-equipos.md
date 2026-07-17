---
title: "Métricas Individuales vs de Equipos"
tags:
  - mgmt3/objetivos
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Objetivos y Métricas"
aliases:
  - "Team vs Individual Metrics"
  - "Sub-optimization"
related:
  - "[[03-metricas-de-salud]]"
  - "[[09-metricas-individuales-vs-equipos]]"
  - "[[10-evaluaciones-360]]"
---

# Métricas Individuales vs de Equipos

## El principio fundamental

Management 3.0 favorece las **métricas de equipo** sobre las individuales porque los equipos que trabajan juros son los que entregan valor, no individuos aislados.

> "Nadie recibe un cheque de un cliente por una línea de código. El valor se entrega en equipo."

## El problema de las métricas individuales

### Sub-optimización

Cuando se mide individuos, cada persona optimiza **su** métrica, no el **resultado del equipo**:

| Métrica individual | Consecuencia no intencionada |
|-------------------|----------------------------|
| Líneas de código | Código inflado, duplicado, innecesario |
| Bugs cerrados | Se cierran bugs fáciles, se evitan los difíciles |
| Horas trabajadas | Presentismo, burnout, calidad baja |
| Historias completadas | Se toman tareas fáciles, se evitan las complejas |
| Velocidad individual | Competencia interna, no colaboración |

### Efecto en la cultura

Las métricas individuales crean:
- **Competencia interna** en vez de colaboración
- **Miedo a fallar** en vez de aprendizaje
- **Optimización local** en vez de optimización del sistema
- **Desconfianza** en vez de transparencia

## Métricas de equipo que funcionan

| Métrica | Qué mide | Por qué importa |
|---------|----------|-----------------|
| **Velocidad del equipo** | Cuánto entrega el equipo por sprint | Refleja capacidad real del sistema |
| **Lead time** | Tiempo desde idea hasta entrega | Incluye toda la cadena, no solo coding |
| **Calidad del producto** | Defectos, satisfacción del cliente | Resultado del trabajo colectivo |
| **eNPS del equipo** | Felicidad del equipo | El equipo es la unidad de trabajo |
| **Throughput** | Entregas por período | Resultado del flujo, no del esfuerzo individual |

## El modelo de "equipos, no héroes"

```
MODELO TRADICIONAL:
  Gerente → Desarrollador A (mide sus bugs)
           → Desarrollador B (mide sus horas)
           → Desarrollador C (mide sus historias)

MODELO M3.0:
  Propósito → Equipo (mide su impacto colectivo)
              ├── Miembro A (aporta al resultado del equipo)
              ├── Miembro B (aporta al resultado del equipo)
              └── Miembro C (aporta al resultado del equipo)
```

## ¿Cuándo son válidas métricas individuales?

No todas las métricas individuales son malas. Son útiles cuando:

1. **Son formativas, no sumativas**: Para crecimiento personal, no para evaluación de desempeño.
2. **Son auto-elegidas**: La persona define qué quiere mejorar.
3. **No se usan para comparar**: Nunca "Juan entregó 20, María solo 12."
4. **Son temporales**: Para un período de aprendizaje específico.

### Ejemplo válido

> "María quiere mejorar sus habilidades de presentación. Se mide: número de veces que presenta al equipo por sprint."

Esto es formativo, auto-elegido y no se compara con otros.

## Gestión por excepción

En vez de medir a todos, Management 3.0 recomienda **gestión por excepción**:

1. Mide métricas de equipo
2. Si hay una anomalía, investiga la causa raíz
3. Solo entonces mira datos individuales si es necesario
4. Aborda el problema como problema del sistema, no del individuo

```
Métrica de equipo normal → No hacer nada, dejar que el equipo se autogestione
Métrica de equipo anómala → Investigar causa raíz
  └── ¿Es un problema del equipo? → Facilitar conversación
  └── ¿Es un problema individual? → Coaching, no métrica
```

## Tabla resumen

| Aspecto | Métrica individual | Métrica de equipo |
|---------|-------------------|-------------------|
| **Propósito** | Evaluar persona | Evaluar sistema |
| **Riesgo** | Sub-optimización | Responsabilidad difusa |
| **Cultura** | Competencia | Colaboración |
| **Feedback** | De gerente a persona | Del equipo para el equipo |
| **Uso recomendado** | Formación personal | Toma de decisiones |

## Errores comunes

- **Medir individuos para "motivar"**: La competencia interna destruye la colaboración.
- **Comparar personas**: Casi nunca es útil y casi siempre es dañino.
- **Ignorar el contexto**: Un desarrollador en un equipo disfuncional no rinde igual que en uno sano.
- **Usar métricas individuales para promociones**: Sesga las decisiones hacia comportamientos individualistas.

## Referencias

- Appelo, J. (2011). *Management 3.0*
- DeMarco, T. & Lister, T. (2001). *Peopleware*
- Hackman, J. R. (2002). *Leading Teams*
