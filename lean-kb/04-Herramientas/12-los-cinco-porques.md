---
title: "Los 5 Porqués (5 Whys)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - 5 Porques
  - 5 Whys
  - Cinco Porques
  - Cinco Por qué
related:
  - "[[03-a3-resolucion-problemas]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
  - "[[02-andon]]"
  - "[[04-analisis-de-cuellos-de-botella]]"
  - "[[11-poka-yoke]]"
---

# Los 5 Porqués (5 Whys)

**Los 5 Porqués** (5 Whys) es una técnica simple pero poderosa de [[Lean Manufacturing]] para encontrar la **causa raíz** de un problema preguntando "¿por qué?" repetidamente. Fue desarrollado por [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] en Toyota.

## Definición

La técnica consiste en preguntar "¿por qué?" sucesivamente sobre un problema, normalmente 5 veces, hasta llegar a la causa raíz que está bajo nuestro control para cambiar.

> "La primera respuesta al porqué de un problema nunca es la causa raíz." — Taiichi Ohno

## Origen

[[01-Fundamentos/01-historia-lean|Taiichi Ohno]] de Toyota describió la técnica en su libro "Toyota Production System": "Cuando ocurre un problema, preguntar '¿por qué?' cinco veces. Por ejemplo:

1. **¿Por qué se detuvo la máquina?** — Porque el fusible se quemó por sobrecarga.
2. **¿Por qué hubo sobrecarga?** — Porque el rodamiento no estaba lubricado adecuadamente.
3. **¿Por qué no estaba lubricado?** — Porque la bomba de lubricación no funcionaba bien.
4. **¿Por qué no funcionaba bien?** — Porque el eje de la bomba estaba desgastado.
5. **¿Por qué estaba desgastado?** — Porque no tenía filtro y entraron partículas de metal.

**Causa raíz:** Ausencia de filtro en la bomba de lubricación. Solución: instalar un filtro (no solo cambiar el fusible)."

## La Técnica Explicada

### El Proceso

```
Problema: "El deploy falló"
    │
    ▼ ¿Por qué? → "Porque un test unitario falló"
    │
    ▼ ¿Por qué? → "Porque una función retorna null"
    │
    ▼ ¿Por qué? → "Porque no valida input del usuario"
    │
    ▼ ¿Por qué? → "Porque no hay especificación de validación"
    │
    ▼ ¿Por qué? → "Porque el proceso de diseño no incluye validación"
    │
    ▼ CAUSA RAÍZ: Falta un paso de especificación en el proceso de diseño
```

### Cuándo Parar

**5 es una guía, no una regla estricta.** Parar cuando:
- Se llega a una causa que está **bajo nuestro control** para cambiar
- Se llega a un proceso o sistema, no a una persona
- Las respuestas se vuelven repetitivas o no productivas
- Se llega a un límite práctico (no siempre 5 es necesario)

## Características de una Buena Causa Raíz

Una causa raíz es adecuada cuando:
1. **Es actionable** — Se puede hacer algo al respecto
2. **Es específica** — No es vaga ("falta comunicación")
3. **Es un proceso, no una persona** — "No hay estándar" en vez de "Juan se equivocó"
4. **Al corregirla, el problema no regresa** — No es solo un síntoma

## 5 Porqués y Otras Herramientas

### Con A3
Los 5 Porqués son una herramienta clave en la sección de **Análisis** del [[03-a3-resolucion-problemas|A3 Report]]:

```
Sección A3: Análisis
├── ¿Por qué? → ...
├── ¿Por qué? → ...
├── ¿Por qué? → ...
├── ¿Por qué? → ...
└── ¿Por qué? → CAUSA RAÍZ
```

### Con PDCA
Los 5 Porqués se usan en la fase **Plan** del ciclo [[10-pdca|PDCA]], antes de diseñar la contramedida.

### Con Andon
Las activaciones de [[02-andon|Andon]] se analizan con 5 Porqués para encontrar por qué ocurrió el problema.

### Con Gemba
Los 5 Porqués se responden con datos del [[06-gemba|Gemba]], no con suposiciones desde la oficina.

## Limitaciones

Los 5 Porqués tienen limitaciones importantes:

| Limitación | Descripción |
|-----------|-------------|
| Linealidad | Asume una cadena causal lineal (un problema puede tener múltiples causas) |
| Superficialidad | Puede llegar a causas demasiado simples |
| Subjetividad | Las respuestas dependen de quién las da |
| No estadístico | No usa datos para validar la causa raíz |

### Cuándo Usar Otras Herramientas

- **Problemas complejos con múltiples causas:** Usar Diagrama de Ishikawa (Espina de Pescado)
- **Problemas estadísticos:** Usar análisis de regresión o análisis de Pareto
- **Problemas de sistema:** Usar [[04-analisis-de-cuellos-de-botella|Análisis de Cuellos de Botella]]
- **Cuando los 5 Porqués no son suficientes:** Complementar con Ishikawa

## Ejemplo en Software

**Problema:** Los usuarios reportan que no pueden iniciar sesión

1. **¿Por qué?** — Porque la contraseña no se valida correctamente
2. **¿Por qué?** — Porque hay un bug en la función de hashing
3. **¿Por qué?** — Porque se actualizó la librería de hashing sin actualizar el código
4. **¿Por qué?** — Porque no hay tests de integración para la autenticación
5. **¿Por qué?** — Porque el proceso de desarrollo no incluye tests de integración obligatorios

**Causa raíz:** Falta un paso en el proceso de desarrollo (tests de integración obligatorios).

**Solución:** Agregar tests de integración al pipeline de CI/CD ([[11-poka-yoke|Poka-Yoke]]).

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Simplicidad | Cualquier persona puede usarla |
| Accesibilidad | No requiere herramientas especiales |
| Efectividad | Va al fondo del problema |
| Educativa | Ayuda a entender el proceso |
| Prevención | Al atacar causa raíz, el problema no regresa |

## Notas Relacionadas

- [[03-a3-resolucion-problemas]] — El A3 usa 5 Porqués en su análisis
- [[10-pdca]] — PDCA se basa en entender la causa raíz
- [[06-gemba]] — Los 5 Porqués se responden con datos del Gemba
- [[02-andon]] — Las activaciones se analizan con 5 Porqués
- [[04-analisis-de-cuellos-de-botella]] — Cuellos de botella se analizan con 5 Porqués
- [[11-poka-yoke]] — Las contramedidas pueden ser Poka-Yoke
- [[02-Pilares/03-kaizen|Kaizen]] — Kaizen comienza con encontrar la causa raíz
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
