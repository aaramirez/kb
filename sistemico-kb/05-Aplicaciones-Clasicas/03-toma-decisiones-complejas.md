---
title: Toma de Decisiones en Entornos Complejos
tags:
  - sistemico/aplicaciones
  - type/concepto
source: Dörner (1996), Sterman (2000)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Decision Making under Complexity
  - Toma de Decisiones Complejas
---

# Toma de Decisiones en Entornos Complejos

[[03-Grandes-Pensadores/06-dietrich-dorner|Dietrich Dörner]] demostró experimentalmente que los humanos tenemos **limitaciones cognitivas predecibles** al tomar decisiones en sistemas complejos.

## Los 7 Pecados Capitales de la Decisión Compleja

### 1. Pensamiento Lineal
Asumir que A→B sin considerar efectos secundarios o bucles de retroalimentación.

**Antídoto**: Usar [[04-System-Dynamics/01-diagramas-bucles-causales|diagramas causales]] para visualizar relaciones.

### 2. Focalización Hipotecaria
Concentrarse en un problema y descuidar todo lo demás, hasta que los problemas descuidados se vuelven críticos.

**Antídoto**: Monitorear indicadores del sistema completo, no solo del problema focal.

### 3. Reparación Simbólica
Hacer cambios que parecen soluciones pero no alteran la estructura del sistema.

**Antídoto**: Preguntar "¿esto cambia la estructura subyacente o solo el síntoma?"

### 4. Negación de Retardos
Actuar como si los efectos fueran inmediatos, sobre-reaccionando o abandonando antes de ver resultados.

**Antídoto**: Modelar los [[02-Conceptos-Clave/05-limites-y-retardos|retardos]] del sistema antes de intervenir.

### 5. Escalada del Compromiso
Duplicar la apuesta en una estrategia fallida en lugar de reconocer el error.

**Antídoto**: Predefinir criterios de aborto y revisión periódica de supuestos.

### 6. Ilusión de Comprensión
Creer que entendemos el sistema cuando solo vemos la punta del iceberg.

**Antídoto**: Explicitar los modelos mentales y contrastarlos con la realidad.

### 7. Autorrefuerzo del Error
Un error inicial lleva a decisiones cada vez peores porque el sistema ya está desestabilizado.

**Antídoto**: Detenerse, diagnosticar la estructura, no solo el síntoma.

## Marco de Decisión Sistémica

```
1. Define los límites del sistema (¿qué incluye, qué excluye?)
2. Identifica las variables clave y sus relaciones
3. Mapea los bucles de retroalimentación
4. Identifica los retardos relevantes
5. Simula mentalmente el efecto de la decisión
6. Considera efectos secundarios en múltiples dimensiones
7. Decide e implementa con monitoreo continuo
```

## El Rol de la IA en la Decisión Compleja

La IA puede compensar las limitaciones identificadas por Dörner:

| Limitación Humana | Cómo la IA Puede Ayudar |
|------------------|------------------------|
| Focalización hipotecaria | Monitoreo multidimensional continuo |
| Negación de retardos | Modelado predictivo de consecuencias |
| Pensamiento lineal | Simulación sistémica de escenarios |
| Ilusión de comprensión | Exposición de patrones ocultos en datos |

Sin embargo, la IA también puede **amplificar** estos errores si se entrena con decisiones humanas sesgadas (ver [[07-Pensamiento-Sistemico-y-IA/01-feedback-loops-en-ml|feedback loops en ML]]).

## Referencias

- Dörner, D. (1996). *The Logic of Failure.*
- Sterman, J. (2000). *Business Dynamics.*
- Kahneman, D. (2011). *Thinking, Fast and Slow.*
- Klein, G. (1998). *Sources of Power: How People Make Decisions.*
