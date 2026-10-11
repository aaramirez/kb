---
title: "Matriz problema → conocimiento"
tags:
  - arnes/meta
  - type/matriz
created: 2026-10-11
updated: 2026-10-11
category: "Arnés"
related:
  - "[[Index|Arnés]]"
  - "[[como-usar-este-kb]]"
---

# Matriz problema → conocimiento

Mapea problemas concretos al construir u operar un agente con las notas de `02-Notas/` que aplican. Las notas resumen videos: cita siempre la nota y el ponente/canal, y salta a la transcripción para verificar el dato.

| Problema | Notas que aplican | Qué aportan |
|----------|-------------------|-------------|
| Entender qué es un harness y en qué se diferencia del modelo, el prompt o un framework | [[que-es-harness-engineering]], [[que-es-un-agent-harness-y-como-construirlo]], [[arquitectura-de-ia-no-todo-es-un-agente]], [[de-prompt-engineering-a-harness-engineering]], [[harness-engineering-en-22-minutos]] | Definiciones (contexto, herramientas, memoria, bucle, verificación), analogía motor/coche, harness vs. framework |
| Elegir un modelo mental de componentes o capas del harness | [[masterclass-de-harness-engineering]], [[que-es-un-agent-harness-y-como-construirlo]], [[el-harness-es-dueno-de-tu-ia]], [[harness-engineering-forward-deployed]], [[memoria-de-agentes-y-harness-engineering]] | Diez primitivas, nueve componentes, cinco capas del stack, cinco pilares, siete capas |
| El agente falla y no sé si es el modelo o el harness | [[cuatro-palancas-para-diagnosticar-agentes]], [[de-prompt-engineering-a-harness-engineering]], [[el-harness-importa-mas-que-el-modelo]], [[el-auge-del-harness-engineering]] | Diagnóstico por palancas (contexto, herramientas, bucle, gobernanza); evidencia de que el harness decide el resultado con los mismos pesos |
| Construir un harness desde cero (bucle, tools, permisos) | [[construir-un-harness-de-codigo-desde-cero]], [[construyendo-mi-propio-arnes-de-ia]], [[harnesses-en-ia-a-fondo-ibm]], [[harness-en-codigo-real-en-20-minutos]], [[que-es-un-harness-construido-en-vivo]] | Tutoriales paso a paso en Python y Go, implementaciones de referencia |
| Decidir si construir un harness propio, extender uno existente o usar un framework | [[cuando-construir-tu-propio-harness]], [[deja-de-promptear-haz-harness-engineering]], [[agentes-con-eve-y-nextjs]], [[por-que-cancele-claude-code]], [[flujo-de-ingenieria-agentica-del-creador-de-pi]] | Middleware sobre el bucle básico, harness de dominio sobre Claude Code, lock-in y harnesses agnósticos al modelo |
| Gestionar contexto y memoria (context rot, compactación, memoria episódica/procedimental) | [[memoria-de-agentes-y-harness-engineering]], [[harness-engineering-a-fondo]], [[harness-y-loop-engineering-en-19-minutos]], [[harness-engineering-antigravity-claude-code-cursor]], [[tau-el-port-de-pi-en-python]] | Capas de memoria, archivos vs. bases de datos, contexto justo a tiempo, sesiones en árbol |
| Recuperar información para el agente (RAG, búsqueda, índices) | [[alternativa-a-bases-de-datos-vectoriales]], [[harness-engineering-a-fondo]], [[harness-en-codigo-real-en-20-minutos]] | BM25 y búsqueda agéntica primero, vectores para lo difuso, conectores en vivo, puerta de recuperación |
| Diseñar herramientas, sandbox y permisos seguros | [[demo-practica-de-harness-engineering]], [[construir-un-harness-de-codigo-desde-cero]], [[flujo-agentico-de-matt-pocock]], [[meta-harness-para-ejecutar-agentes]], [[alternativa-construible-a-jev]] | Políticas deterministas, confirmación humana, auditoría, sandboxes AFK, proxy de secretos, tool calls restringidas |
| Hacer fiable un agente sin cambiar prompt ni modelo | [[demo-practica-de-harness-engineering]], [[harnesses-en-ia-a-fondo-ibm]], [[ontologias-para-sistemas-agenticos]], [[ryan-lopopolo-humanos-dirigen-agentes-ejecutan]] | Guardrails, verificación determinista, validación con ontologías, cada comentario de revisión se vuelve un control |
| Medir y mejorar el agente con evals | [[evals-fluidez-en-ia]], [[loop-de-5-pasos-agente-legal]], [[construir-un-harness-con-jev]], [[cuando-construir-tu-propio-harness]] | Tareas y verificadores binarios, entornos aislados, experimentos A/B, LLM como juez y jueces rápidos |
| Que el agente mejore su propio harness | [[agentes-automejorables-evolucionar-el-harness]], [[code-loops-y-harness-autodidacta]], [[el-harness-importa-mas-que-el-modelo]], [[harness-y-loop-engineering-en-19-minutos]] | Superficie editable, held-in/held-out, PR con aprobación humana, escepticismo sobre los resultados |
| Orquestar varios agentes o subagentes | [[adaptando-claude-code-para-sdd]], [[paperclip]], [[meta-harness-para-ejecutar-agentes]], [[anthropic-y-el-fin-de-los-harnesses]], [[socio-creativo-autonomo-a-largo-plazo]], [[orquestadores-de-ia-2026]] | Roles autor/implementador/revisor, agentes como empleados, meta-harness, planificador-generador-evaluador |
| Organizar el flujo de trabajo diario con agentes de código | [[flujo-agentico-de-matt-pocock]], [[29-consejos-de-harness-engineering]], [[flujo-de-ingenieria-agentica-del-creador-de-pi]], [[adaptando-claude-code-para-sdd]] | Skills como procedimientos, colas en vez de loops, specs con casillas, Ralph Loop |
| Montar una fábrica de software (agentes que escriben el código) | [[como-construir-una-fabrica-de-software]], [[humanos-dirigen-agentes-ejecutan-openai]], [[por-que-fallan-las-fabricas-de-software]] | Métricas de autonomía, requisitos no funcionales como trabajo humano, por qué fallan las lights-out |
| Llevar un agente a producción | [[seis-pilares-de-un-harness-para-produccion]], [[jaula-de-produccion-para-agentes-de-dominio]], [[construir-un-agente-con-eve]], [[harness-event-sourced-con-stream-processors]] | Seis pilares, escalar componentes por separado, despliegue con aprobaciones y evals, arquitectura event-sourced |
| Dar al agente conocimiento estructurado del negocio | [[ontologias-para-sistemas-agenticos]], [[casos-de-uso-de-ontologias-crm-erp]] | Ontologías como capa semántica y validador en el loop (CRM, ERP) |
| Saber qué partes del harness sobran a medida que mejoran los modelos | [[anthropic-y-el-fin-de-los-harnesses]], [[el-auge-del-harness-engineering]], [[flujo-de-ingenieria-agentica-del-creador-de-pi]] | Cada componente codifica una suposición que caduca; quitar estructura también es harness engineering |

Si un problema no encaja en ninguna fila, elige notas por tags de tema (ver [[Index]]) y considera añadir la fila aquí.
