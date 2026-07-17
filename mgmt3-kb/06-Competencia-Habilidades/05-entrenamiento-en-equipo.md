---
title: "Entrenamiento en Equipo"
tags:
  - mgmt3/competencia
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Competencia y Habilidades"
aliases:
  - "Team training"
  - "Aprendizaje en equipo"
  - "Cross-training"
related:
  - "[[01-siete-enfoques-competencia]]"
  - "[[03-matrices-competencia]]"
  - "[[08-planes-de-crecimiento]]"
  - "[[10-comunidad-aprendizaje]]"
---

# Entrenamiento en Equipo

## El principio fundamental

En Management 3.0, el entrenamiento no es un evento que le pasa a un individuo: es una práctica que fortalece al equipo. Cuando una persona aprende algo nuevo y ese conocimiento permanece solo en ella, la organización invirtió y no obtuvo retorno completo. El entrenamiento en equipo asegura que el conocimiento se distribuya, se internalice colectivamente y se aplique de forma inmediata al trabajo.

## Prácticas de entrenamiento en equipo

### Pair Programming

Dos personas, una estación de trabajo, un objetivo compartido. No es solo una técnica de revisión: es un mecanismo de transferencia de conocimiento en tiempo real. El "driver" escribe código; el "navigator" revisa, piensa en el siguiente paso y comparte contexto. Después de un tiempo, rotan.

**Cuándo usarlo:**
- Cuando un miembro nuevo necesita incorporarse rápidamente al código
- Para tareas complejas donde dos perspectivas mejoran la calidad
- Cuando se necesita transferir conocimiento de un experto a un novato

**Anti-patrón:** Usar pair programming solo para Juniors. Los pares más productivos suelen ser dos personas con habilidades complementarias, no un experto y un principiante.

### Mob Programming

Todo el equipo trabajando en la misma cosa, al mismo tiempo, en una misma estación. Suena ineficiente hasta que lo ves funcionar: un equipo de 5-6 personas resolviendo un problema complejo en una hora en lugar de que 5 personas trabajen en silos durante un día.

**Cuándo usarlo:**
- Arquitectura y diseño de sistemas complejos
- Incidentes críticos donde se necesita toda la cognición disponible
- Onboarding intensivo de un nuevo miembro

### Learning Hours / Tech Talks internas

Bloques de tiempo protegidos (típicamente 1-2 horas semanales o quincenales) donde un miembro del equipo enseña algo que domina. No es una presentación formal: es una conversación técnica donde el equipo aprende junto.

**Formatos efectivos:**
- **Show & Tell:** Alguien muestra algo que construyó o aprendió
- **Kata coding:** Ejercicios de programación en grupo para practicar habilidades
- **Paper reading:** Leer y discutir un paper técnico relevante
- **Incident post-mortem formativo:** Analizar un incidente no como blame session sino como oportunidad de aprendizaje

### Code Reviews como herramienta de enseñanza

No se trata de aprobar o rechazar un pull request. Un code review bien hecho es una micro-sesión de entrenamiento: el reviewer explica por qué sugiere un cambio, el autor aprende una nueva perspectiva, y ambos crecen. Si los code reviews son solo "LGTM" o "fix this", se está desperdiciando una oportunidad de aprendizaje diaria.

### Rotación de tareas

Asignar periódicamente tareas que normalmente haría otra persona. Un backend developer que hace un ticket de frontend, un QA que escribe un script de deploy. La rotación rompe silos de conocimiento y crea empatía entre roles.

**Cuidado:** La rotación debe ser intencional y con soporte. No es "tú haz esto porque no hay quien más lo haga"; es "voy a aprender esto porque fortalece al equipo".

## Beneficios documentados

- **Reducción de bus factor:** Si dos personas saben hacer X, la ausencia de una no detiene al equipo
- **Mejora de calidad:** Múltiples perspectivas sobre el mismo problema producen mejores soluciones
- **Mayor velocidad a largo plazo:** Un equipo que puede rotar roles es más resiliente y rápido que uno con roles rígidos
- **Satisfacción laboral:** Las personas disfrutan aprender cosas nuevas y sentir que crecen
- **Onboarding más rápido:** Un equipo que practica cross-training puede incorporar nuevos miembros más rápidamente

## Crear la cultura

El entrenamiento en equipo no funciona si se impone. Funciona cuando:

1. **El liderazgo lo modela:** Si el manager nunca participa en pair programming o learning hours, nadie lo hará
2. **El tiempo está protegido:** Si cada sprint se cancela el learning hour por "urgencias", el mensaje es claro: el aprendizaje no importa
3. **El error es seguro:** Si aprender algo nuevo implica riesgo de ser juzgado, la gente no va a exponer sus lagunas
4. **Se reconoce el esfuerzo:** Celebrar cuando alguien aprendió algo nuevo, no solo cuando entregó output
