---
title: "Los Siete Niveles de Autoridad"
tags:
  - mgmt3/delegacion
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Delegación y Empoderamiento"
aliases:
  - "Seven Levels of Authority"
  - "Siete niveles de delegación"
related:
  - "[[02-delegation-poker]]"
  - "[[03-delegation-board]]"
  - "[[07-who-decides-what]]"
  - "[[12-matriz-decision-delegacion]]"
---

## Los Siete Niveles de Autoridad

Management 3.0 define **siete niveles progresivos de autoridad** que describen el espectro completo de delegación posible entre un manager y su equipo. Este modelo fue creado por Jurgen Appelo como alternativa al enfoque binario tradicional de "delegar o no delegar".

> **"La delegación no es un sí/no. Es un espectro con múltiples matices."**
> — Jurgen Appelo

## Los 7 niveles en detalle

### Nivel 1 — Decir (Tell)

El manager toma la decisión unilateralmente y comunica la decisión al equipo sin solicitar input. Es el nivel de autoridad más bajo para el equipo.

- **Cuándo usarlo**: Decisiones urgentes, emergencias, asuntos legales o de cumplimiento, decisiones triviales donde el costo de consultar es mayor que el beneficio
- **Ejemplo**: "Necesitamos cambiar la contraseña de producción hoy por un incidente de seguridad. El cambio se hace a las 3pm."
- **Riesgo**: Si se usa demasiado, el equipo se desvincula y pierde sentido de propiedad

### Nivel 2 — Vender (Sell)

El manager toma la decisión pero se toma el tiempo de explicar el razonamiento y "vender" la idea al equipo. Busca la comprensión, no necessarily la aprobación.

- **Cuándo usarlo**: Decisiones estratégicas donde la transparencia es importante pero la velocidad también, cambios que afectan al equipo pero que no requieren su consentimiento
- **Ejemplo**: "Vamos a migrar a Kubernetes en Q3. Déjenme explicar por qué esta es la mejor opción para nuestro crecimiento..."
- **Diferencia con Tell**: La intención es generar comprensión, no solo transmitir la decisión

### Nivel 3 — Consultar (Consult)

El manager busca la opinión del equipo antes de tomar la decisión final. El equipo aporta ideas y perspectivas, pero el manager retiene la autoridad última.

- **Cuándo usarlo**: Decisiones que afectan el trabajo diario del equipo, problemas técnicos donde el equipo tiene expertise que el manager no tiene, cuando se necesita buy-in sin perder agilidad
- **Ejemplo**: "Estoy considerando dos opciones para el pipeline de CI/CD. ¿Qué opinan? Yo decidiré, pero quiero entender sus perspectivas."
- **Clave**: El equipo debe sentir que su input genuinamente importa, no que es una formalidad

### Nivel 4 — Acordar (Agree)

El manager propone una decisión y busca el acuerdo explícito del equipo. Si el equipo no está de acuerdo, la decisión se retrabaja hasta encontrar consenso.

- **Cuándo usarlo**: Decisiones que requieren compromiso colectivo para ejecutarse, cambios de proceso, definiciones de estándares de calidad
- **Ejemplo**: "Propongo que adoptemos Trunk-Based Development. ¿Estamos todos de acuerdo? Si alguien tiene objeciones, necesitamos hablarlas."
- **Riesgo**: Puede generar decisiones diluidas si se busca consenso para todo

### Nivel 5 — Aconsejar (Advise)

El manager participa como consejero — aporta su perspectiva y experiencia pero el equipo toma la decisión final. El manager no tiene derecho de veto.

- **Cuándo usarlo**: Cuando el equipo tiene más contexto operativo que el manager, en dominios técnicos especializados, cuando se está construyendo la capacidad de auto-organización del equipo
- **Ejemplo**: "Les doy mi opinión sobre la arquitectura del módulo de pagos, pero la decisión es de ustedes. Yo solo aconsejo."
- **Transformación**: Este nivel marca el punto donde el equipo comienza a ser verdaderamente autor

### Nivel 6 — Preguntar (Inquire)

El manager solicita al equipo que investigue y presente una recomendación. El equipo tiene autoridad para investigar y proponer, y el manager acepta la recomendación a menos que tenga una objeción muy fuerte.

- **Cuándo usarlo**: Para decisiones que requieren investigación profunda, cuando se quiere desarrollar la capacidad de análisis del equipo, para decisiones de medium-term impact
- **Ejemplo**: "Investiguen las opciones para mejorar nuestro monitoreo y preséntenme una recomendación. Si no tengo objeciones críticas, avanzamos con su propuesta."
- **Matices**: El equipo sabe que el manager puede objetar, lo que mantiene un nivel de governancia

### Nivel 7 — Delegar (Delegate)

El equipo tiene autoridad completa para tomar la decisión en un dominio específico. El manager no participa en la decisión y acepta el resultado.

- **Cuándo usarlo**: Para dominios donde el equipo ha demostrado competencia y madurez, decisiones operativas del día a día, asuntos técnicos donde el equipo es claramente experto
- **Ejemplo**: "El dominio de testing es completamente de ustedes. Organícenlo como consideren mejor. Yo me enfoco en remover impedimentos."
- **Prerequisito**: Confianza construida a través de tiempo, competencia demostrada, y un marco de métricas claro

## ¿Cuándo usar cada nivel?

No existe un nivel "correcto" universal. La selección depende de:

1. **La urgencia de la situación** — Situaciones críticas tienden hacia niveles bajos (Tell/Sell)
2. **La competencia del equipo** — Equipos menos experimentados necesitan niveles más guiados
3. **El dominio de la decisión** — Asuntos legales requieren control central; decisiones técnicas favorecen la delegación
4. **La confianza acumulada** — La confianza se construye gradualmente a través de éxitos iterativos
5. **El impacto de la decisión** — Decisiones de alto impacto suelen empezar en niveles más conservadores

## La trampa del micromanagement

Cuando un manager opera consistentemente en niveles 1-3 para todo, crea una cultura de dependencia. El equipo deja de pensar estratégicamente, se limita a ejecutar instrucciones, y el manager se convierte en un cuello de botella. El objetivo a largo plazo es mover progresivamente más decisiones hacia niveles 5-7.

## La trampa del abandono

El extremo opuesto también es peligroso. Delegar completamente (nivel 7) sin haber construido la competencia necesaria genera ansiedad, errores costosos, y una sensación de abandono en el equipo. La delegación sin preparación no es empoderamiento — es irresponsabilidad.

Para herramientas que hacen este modelo tangible, consulta [[02-delegation-poker]] y [[03-delegation-board]].
