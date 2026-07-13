---
title: "Arquitecturas de Agentes"
tags:
  - sf/ia-software
  - type/arquitectura
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "Agent Architectures"
  - "ReAct"
  - "Plan-and-Execute"
related:
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]"
  - "[[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]"
---

# Arquitecturas de Agentes

Existen múltiples patrones arquitectónicos para construir agentes. Cada uno tiene trade-offs diferentes en complejidad, control y capacidades.

## Panorama de Arquitecturas

```
┌─────────────────────────────────────────────────────┐
│              AGENT ARCHITECTURES                     │
├──────────────┬──────────────┬───────────────────────┤
│  SIMPLE      │  ADVANCED    │  RESEARCH             │
│              │              │                       │
│  ReAct       │ Plan+Execute │ Reflexion             │
│  Tool-use    │ LATS         │ LATS                  │
│  Chain       │ Hierarchical │ Self-improving        │
│  Prompt Ch.  │ Parallel     │ Adaptive              │
└──────────────┴──────────────┴───────────────────────┘
```

## 1. ReAct (Reasoning + Acting)

El patrón más usado. Alterna razonamiento y acción.

```
ReAct Loop:
────────────
┌──────────────────────────────────────┐
│  Thought: I need to find the user   │
│  model to understand the schema.    │
│                                      │
│  Action: search_code("User model")  │
│                                      │
│  Observation: Found User.ts with    │
│  fields: id, name, email, role      │
│                                      │
│  Thought: Now I need to see the     │
│  auth middleware to add JWT check.  │
│                                      │
│  Action: read_file("src/middleware/ │
│          auth.ts")                  │
│                                      │
│  Observation: [file contents]       │
│                                      │
│  Thought: I can extend this with    │
│  JWT verification. Let me implement.│
│                                      │
│  Action: edit_file(...)             │
│                                      │
│  ... continues until task complete  │
└──────────────────────────────────────┘
```

### Implementación (pseudo-código)

```python
def react_agent(task, tools, llm, max_iterations=10):
    """ReAct agent implementation."""
    history = []

    for i in range(max_iterations):
        # Reasoning step
        prompt = build_react_prompt(task, history)
        response = llm.generate(prompt)

        # Parse thought and action
        thought = parse_thought(response)
        action = parse_action(response)

        history.append({"thought": thought, "action": action})

        # Execute action
        if action.type == "finish":
            return action.result

        observation = execute_tool(action, tools)
        history.append({"observation": observation})

    return "Max iterations reached"
```

### Ventajas/Limitaciones

| Ventajas | Limitaciones |
|----------|-------------|
| Simple de implementar | Puede loops infinitos |
| Transparente (thoughts visibles) | No optimiza a largo plazo |
| Flexible con tools | Greedy (no backtrack) |
| Good for simple tasks | Struggle with complex planning |

## 2. Plan-and-Execute

Primero planifica todo, luego ejecuta paso a paso.

```
Plan-and-Execute:
─────────────────
Phase 1: PLANNING
┌──────────────────────────────────────┐
│  Task: Add user authentication       │
│                                      │
│  Plan:                              │
│  1. Read existing auth middleware    │
│  2. Add JWT token generation        │
│  3. Add token verification          │
│  4. Create login endpoint           │
│  5. Add protected route decorator   │
│  6. Write tests                     │
│  7. Run tests and fix issues        │
└──────────────────────────────────────┘

Phase 2: EXECUTION
┌──────────────────────────────────────┐
│  Step 1: read_file("middleware/auth.ts") ✅
│  Step 2: edit_file("middleware/auth.ts") ✅
│  Step 3: edit_file("middleware/auth.ts") ✅
│  Step 4: write_file("routes/auth.ts")   ✅
│  Step 5: edit_file("middleware/auth.ts") ✅
│  Step 6: write_file("tests/auth.test.ts")✅
│  Step 7: run_command("npm test")         ✅
│  All steps complete!                    │
└──────────────────────────────────────┘
```

### Implementación

```python
def plan_and_execute_agent(task, tools, llm):
    """Plan first, then execute."""
    # Phase 1: Planning
    plan_prompt = f"""
    Create a detailed step-by-step plan for: {task}
    Available tools: {tools.list()}
    Output: numbered list of steps
    """
    plan = llm.generate(plan_prompt)
    steps = parse_plan(plan)

    # Phase 2: Execution
    results = []
    for step in steps:
        # Execute with context of previous results
        result = execute_step(step, tools, results)
        results.append(result)

        # Replan if needed
        if result.failed:
            new_steps = replan(task, steps, results)
            steps = new_steps

    return compile_results(results)
```

### Comparison con ReAct

| Aspect | ReAct | Plan-and-Execute |
|--------|-------|------------------|
| Planning | Implicit (each step) | Explicit (full plan) |
| Flexibility | High (adapts per step) | Medium (replan on failure) |
| Complexity | Low | Medium |
| Multi-step tasks | Struggles | Excels |
| Token usage | Higher (repeated context) | Lower (focused execution) |
| Error recovery | Natural | Requires replanning |

## 3. Reflexion

Aprende de errores mediante auto-evaluación.

```
Reflexion Loop:
───────────────
┌──────────────────────────────────────┐
│  Attempt 1:                         │
│  → Execute task                     │
│  → Evaluate: "Tests failed at      │
│    line 23 - null pointer"          │
│  → Reflect: "I forgot to handle    │
│    empty array case"                │
│                                      │
│  Attempt 2:                         │
│  → Execute with fix                 │
│  → Evaluate: "All tests pass but   │
│    coverage is 60%"                 │
│  → Reflect: "Need more edge cases" │
│                                      │
│  Attempt 3:                         │
│  → Execute with full coverage       │
│  → Evaluate: "All tests pass,      │
│    coverage 85%" ✅                 │
└──────────────────────────────────────┘
```

### Implementación

```python
def reflexion_agent(task, tools, llm, max_attempts=3):
    """Reflexion agent with self-improvement."""
    reflections = []

    for attempt in range(max_attempts):
        # Execute with reflection context
        prompt = f"""
        Task: {task}
        Previous attempts: {reflections}
        Learn from past mistakes.
        """
        result = execute_with_llm(prompt, tools, llm)

        # Evaluate
        evaluation = evaluate_result(result, task)

        if evaluation.success:
            return result

        # Reflect on failure
        reflection = llm.generate(f"""
        Task failed. Analyze why:
        Result: {result}
        Evaluation: {evaluation}
        What went wrong and how to fix it?
        """)
        reflections.append(reflection)

    return "Max attempts reached"
```

## 4. LATS (Language Agent Tree Search)

Combina tree search con agentes para explorar múltiples caminos.

```
LATS Tree:
──────────
                    ┌──── Root Task ────┐
                    │                    │
            ┌───────┴───────┐    ┌──────┴──────┐
            │  Approach A   │    │  Approach B  │
            │  (Refactor)   │    │  (New code)  │
            └───────┬───────┘    └──────┬──────┘
               ┌────┴────┐         ┌────┴────┐
           ┌───┴──┐  ┌───┴──┐  ┌───┴──┐  ┌───┴──┐
           │ A1   │  │ A2   │  │ B1   │  │ B2   │
           │Good  │  │Great │  │OK    │  │Poor  │
           └──────┘  └──────┘  └──────┘  └──────┘

Selection: A2 (highest score) → Execute
```

### Ventajas

- Explora múltiples soluciones
- Backtracking cuando falla
- Encuentra mejores soluciones
- Más robusto que ReAct

### Limitaciones

- Más costoso (múltiples llamadas LLM)
- Más lento (explora branches)
- Complejidad de implementación

## 5. Tool-Use Patterns

### Sequential Tool Use

```
Tool 1 → Tool 2 → Tool 3 → Result
(read)  (analyze) (write)   (verify)
```

### Parallel Tool Use

```
┌──────────┐
│   Task   │
└─────┬────┘
  ┌───┴───┐
  │       │
Tool 1  Tool 2  (execute in parallel)
  │       │
  └───┬───┘
      │
   Merge → Result
```

### Conditional Tool Use

```
Task → Evaluate → Route:
  ├── Needs code? → Code tools
  ├── Needs data? → Data tools
  ├── Needs docs? → Doc tools
  └── Needs deploy? → Deploy tools
```

## Selección de Arquitectura

| Use Case | Recommended Architecture |
|----------|------------------------|
| Simple Q&A with tools | ReAct |
| Multi-step feature | Plan-and-Execute |
| Debugging complex bugs | Reflexion |
| Architecture decisions | LATS |
| CI/CD automation | Sequential Tool-use |
| Data analysis pipeline | Parallel Tool-use |
| Complex workflows | Hierarchical (multi-agent) |

Referencia: [[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]

## Relación con otros conceptos

- Visión general: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]
- Autonomía: [[../07-IA-Software/15-agentes-autonomos|Agentes Autónomos]]
- Orquestación: [[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]
- Multi-agente: [[../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]]
- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
