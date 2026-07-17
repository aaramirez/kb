---
title: "Matrices de Competencia"
tags:
  - mgmt3/competencia
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Competencia y Habilidades"
aliases:
  - "Competence matrix"
  - "Skills matrix"
  - "Matriz de habilidades"
related:
  - "[[01-siete-enfoques-competencia]]"
  - "[[04-arboles-de-competencia]]"
  - "[[07-evaluacion-de-habilidades]]"
  - "[[08-planes-de-crecimiento]]"
---

# Matrices de Competencia

## Qué es

Una matriz de competencia es una tabla que cruza los miembros del equipo (filas) con las habilidades requeridas (columnas), usando una escala de niveles para indicar el dominio de cada persona en cada habilidad. Es la herramienta más directa para hacer visible lo invisible: quién sabe qué, dónde están los vacíos, y dónde están los riesgos de single point of failure.

## Niveles de competencia (escala sugerida)

| Nivel | Símbolo | Significado |
|-------|---------|-------------|
| 0 | — | Sin conocimiento |
| 1 | △ | Conocimiento básico, necesita supervisión |
| 2 | ◇ | Competente, puede trabajar de forma independiente |
| 3 | ★ | Experto, puede enseñar a otros |

Puedes adaptar la escala a tu contexto. Lo importante es que sea consistente y que todos la entiendan de la misma manera.

## Ejemplo de matriz

| Miembro | React | Node.js | PostgreSQL | DevOps | UX Design | Scrum |
|---------|-------|---------|------------|--------|-----------|-------|
| Ana | ★ | ◇ | △ | — | — | ★ |
| Carlos | ◇ | ★ | ◇ | △ | — | ◇ |
| María | △ | — | ★ | ◇ | — | ◇ |
| Pedro | — | ◇ | △ | ★ | △ | △ |
| Laura | ◇ | △ | — | — | ★ | ★ |

**Lectura inmediata:**
- DevOps: solo Pedro tiene nivel alto → riesgo si Pedro no está
- PostgreSQL: María es la única experta → single point of failure
- React: Ana puede enseñar, pero solo hay 3 personas con nivel ≥ competente
- UX: solo Laura tiene nivel competente o superior

## Guía paso a paso para crearla

### Paso 1: Definir las habilidades relevantes

Haz una lluvia de ideas con el equipo. ¿Qué habilidades necesita el equipo para entregar valor? Incluye tanto habilidades técnicas como de proceso y blandas. Preguntas útiles:
- ¿Qué tecnologías usamos diariamente?
- ¿Qué habilidades de proceso necesitamos (Scrum, Kanban, análisis)?
- ¿Qué habilidades blandas son críticas (comunicación, negociación, mentoring)?

### Paso 2: Acordar la escala de niveles

Define qué significa cada nivel en tu contexto. No uses solo números: describe comportamientos observables. "Nivel 2 en React" debería significar algo concreto como "puede desarrollar una feature completa sin supervisión usando React".

### Paso 3: Autoevaluación + Validación

Cada miembro se evalúa a sí mismo en la matriz. Luego, en una sesión grupal, se revisan las evaluaciones. La autoevaluación tiene sesgos (la gente tiende a subestimarse o sobreestimarse), así que la validación grupal es esencial.

**Consejo:** Que nadie se evalúe como nivel 3 (experto) auto-declaradamente. El nivel 3 solo se asigna cuando la persona puede demostrar que puede enseñar a otros con éxito.

### Paso 4: Identificar vacíos y riesgos

Busca patrones:
- **Single point of failure:** ¿Hay habilidades donde solo una persona tiene nivel ≥ 2?
- **Habilidades sin cubrir:** ¿Hay columnas donde nadie alcanza nivel 2?
- **Desequilibrios:** ¿Hay personas sobrecargadas de conocimiento crítico?

### Paso 5: Tomar acciones

Con base en los vacíos identificados:
- **Cross-training:** Emparejar a un experto con uno o dos novatos para transferir conocimiento
- **Inversión externa:** Enviar a personas clave a capacitación en habilidades críticas
- **Reclutamiento:** Si el vacío es estructural, considerar contratar la habilidad faltante
- **Rediseño de trabajo:** Asignar tareas que obliguen a desarrollar habilidades en áreas débiles

### Paso 6: Revisar periódicamente

La matriz no es un documento estático. Revísala al menos cada trimestre. Las personas crecen, los proyectos cambian, las tecnologías evolucionan.

## Errores comunes

- **Nunca usarla:** Crear la matriz y que se quede en un documento olvidado
- **Evaluar sin plan de acción:** La matriz sin un plan de desarrollo es solo un inventario de carencias
- **Confundir nivel con desempeño:** Nivel de competencia no es lo mismo que productividad. Alguien puede ser nivel 2 en una habilidad y ser el más productivo del equipo
- **Hacerla pública sin consentimiento:** Algunas personas se sienten expuestas con una evaluación pública. Asegúrate de que el equipo esté de acuerdo en el nivel de transparencia
- **Ignorar las habilidades blandas:** Las matrices suelen enfocarse en lo técnico, pero habilidades como comunicación, facilitación y resolución de conflictos son igualmente críticas
