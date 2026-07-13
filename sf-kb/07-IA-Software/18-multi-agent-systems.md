---
title: "Sistemas Multi-agente"
tags:
  - sf/ia-software
  - type/arquitectura
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "Multi-agent Systems"
  - "CrewAI"
  - "AutoGen"
  - "LangGraph"
related:
  - "[[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]"
  - "[[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]"
---

# Sistemas Multi-agente

Los sistemas multi-agente coordinan múltiples agentes independientes para resolver tareas complejas que un solo agente no podría manejar.

## Frameworks Principales

### Comparison Matrix

| Feature | CrewAI | AutoGen | LangGraph | Swarm |
|---------|--------|---------|-----------|-------|
| **Paradigm** | Role-based | Conversation | Graph-based | Handoff |
| **Complexity** | Low-Medium | Medium | High | Low |
| **Learning curve** | Easy | Medium | Steep | Easy |
| **Flexibility** | Medium | High | Very High | Low |
| **Production ready** | Yes | Yes | Yes | No (experimental) |
| **Memory** | Built-in | Built-in | Custom | Limited |
| **Tool support** | Excellent | Good | Excellent | Basic |
| **LangSmith integration** | Yes | No | Yes | No |
| **Best for** | Teams, roles | Research, debate | Complex workflows | Simple delegation |

## 1. CrewAI

### Concept

CrewAI modela agentes como "miembros de un equipo" con roles específicos.

```
CrewAI Architecture:
─────────────────────
┌──────────────────────────────────────────┐
│                 CREW                      │
├──────────────────────────────────────────┤
│                                           │
│  ┌─────────────┐  Task: "Create API"     │
│  │   Agent 1   │  Role: Architect        │
│  │  (Architect)│  Goal: Design API       │
│  └──────┬──────┘  Backstory: Senior eng  │
│         │                                │
│         ▼                                │
│  ┌─────────────┐  Task: "Implement API"  │
│  │   Agent 2   │  Role: Developer        │
│  │ (Developer) │  Goal: Write code       │
│  └──────┬──────┘  Backstory: Full-stack  │
│         │                                │
│         ▼                                │
│  ┌─────────────┐  Task: "Review code"    │
│  │   Agent 3   │  Role: Reviewer         │
│  │  (Reviewer) │  Goal: Ensure quality   │
│  └──────┬──────┘  Backstory: QA lead     │
│         │                                │
│         ▼                                │
│  ┌─────────────┐                         │
│  │   Output    │                         │
│  └─────────────┘                         │
│                                           │
└──────────────────────────────────────────┘
```

### Ejemplo de código

```python
from crewai import Agent, Task, Crew

# Define agents
architect = Agent(
    role="Software Architect",
    goal="Design scalable API architecture",
    backstory="Senior architect with 15 years experience",
    tools=[read_file_tool, search_code_tool],
    llm="gpt-4o"
)

developer = Agent(
    role="Senior Developer",
    goal="Implement clean, testable code",
    backstory="Full-stack developer expert in TypeScript",
    tools=[read_file_tool, write_file_tool, run_tests_tool],
    llm="claude-3-opus"
)

reviewer = Agent(
    role="Code Reviewer",
    goal="Ensure code quality and security",
    backstory="Security-focused QA engineer",
    tools=[read_file_tool, search_code_tool],
    llm="gpt-4o"
)

# Define tasks
design_task = Task(
    description="Design REST API for user management",
    expected_output="API spec with endpoints, schemas",
    agent=architect
)

implement_task = Task(
    description="Implement the API based on the design",
    expected_output="Working API with tests",
    agent=developer,
    context=[design_task]
)

review_task = Task(
    description="Review implementation for issues",
    expected_output="List of issues and suggestions",
    agent=reviewer,
    context=[design_task, implement_task]
)

# Create and run crew
crew = Crew(
    agents=[architect, developer, reviewer],
    tasks=[design_task, implement_task, review_task],
    verbose=True
)

result = crew.kickoff()
```

## 2. AutoGen (Microsoft)

### Concept

AutoGen usa conversaciones entre agentes para resolver tareas.

```
AutoGen Conversation:
─────────────────────
┌──────────────────────────────────────────┐
│  User Proxy ←→ Assistant Agent           │
│       ↕              ↕                   │
│  Code Executor ←→ Critic Agent           │
│                                           │
│  Flow:                                   │
│  1. User defines task                    │
│  2. Assistant proposes solution          │
│  3. Code Executor runs code             │
│  4. Critic evaluates result             │
│  5. Iterate until satisfactory          │
└──────────────────────────────────────────┘
```

### Ejemplo

```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat

# Create agents
assistant = AssistantAgent(
    name="coder",
    system_message="You are an expert Python developer.",
    llm_config={"model": "gpt-4o"}
)

critic = AssistantAgent(
    name="critic",
    system_message="You review code and suggest improvements.",
    llm_config={"model": "gpt-4o"}
)

user_proxy = UserProxyAgent(
    name="user",
    human_input_mode="NEVER",
    code_execution_config={"work_dir": "coding"}
)

# Group chat
group_chat = GroupChat(
    agents=[user_proxy, assistant, critic],
    messages=[],
    max_round=10
)

# Start conversation
user_proxy.initiate_chat(
    group_chat,
    message="Create a REST API with FastAPI"
)
```

## 3. LangGraph

### Concept

LangGraph modela agentes como nodos en un grafo con edges condicionales.

```
LangGraph Graph:
─────────────────
┌──────────────────────────────────────────┐
│                                           │
│  ┌─────────┐     ┌─────────────┐         │
│  │  Plan   │────▶│   Execute   │         │
│  │  Node   │     │    Node     │         │
│  └─────────┘     └──────┬──────┘         │
│                          │                │
│                    ┌─────┴─────┐          │
│                    ▼           ▼          │
│              ┌──────────┐ ┌──────────┐   │
│              │ Validate │ │  Retry   │   │
│              │   Node   │ │   Node   │   │
│              └────┬─────┘ └────┬─────┘   │
│                   │            │          │
│                   ▼            │          │
│              ┌──────────┐      │          │
│              │ Complete │◀─────┘          │
│              │   Node   │                 │
│              └──────────┘                 │
│                                           │
└──────────────────────────────────────────┘
```

### Ejemplo

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated

class AgentState(TypedDict):
    task: str
    plan: list
    results: list
    attempt: int

def plan_node(state: AgentState):
    # Create plan
    plan = create_plan(state["task"])
    return {"plan": plan}

def execute_node(state: AgentState):
    # Execute current step
    result = execute_step(state["plan"][0])
    return {"results": state["results"] + [result]}

def validate_node(state: AgentState):
    # Validate results
    if all_valid(state["results"]):
        return "complete"
    return "retry"

def retry_node(state: AgentState):
    # Retry failed steps
    return {"attempt": state["attempt"] + 1}

# Build graph
graph = StateGraph(AgentState)
graph.add_node("plan", plan_node)
graph.add_node("execute", execute_node)
graph.add_node("validate", validate_node)
graph.add_node("retry", retry_node)

graph.add_edge("plan", "execute")
graph.add_edge("execute", "validate")
graph.add_conditional_edges("validate", {
    "complete": END,
    "retry": "retry"
})
graph.add_edge("retry", "execute")

app = graph.compile()
result = app.invoke({"task": "Add auth", "plan": [], "results": [], "attempt": 0})
```

## Multi-agent Patterns

### Sequential (Pipeline)

```
Agent A → Agent B → Agent C → Result
(Plan)   (Code)   (Review)
```

### Parallel (Fan-out/Fan-in)

```
         ┌→ Agent A ─┐
Split ── ├→ Agent B ─┼── Merge → Result
         └→ Agent C ─┘
```

### Hierarchical (Tree)

```
         ┌→ Team A ─→ Agent A1
Leader ──├→ Team B ─→ Agent B1
         └→ Team C ─→ Agent C1
```

### Debate/Consensus

```
Agent A ←→ Agent B ←→ Agent C
   ↓           ↓           ↓
   └───── Consensus ──────┘
```

## Casos de Uso en Software Factory

| Use Case | Pattern | Framework |
|----------|---------|-----------|
| Feature implementation | Sequential | CrewAI |
| Code review + fix | Debate | AutoGen |
| Complex refactoring | Hierarchical | LangGraph |
| Multi-service deployment | Parallel | LangGraph |
| Architecture decision | Debate | AutoGen |
| Bug investigation | Sequential | CrewAI |
| Documentation + testing | Parallel | CrewAI |

## Best Practices

1. **Start simple**: Un solo agente primero, escalar después
2. **Clear roles**: Cada agente tiene un propósito claro
3. **Minimize handoffs**: Menos comunicaciones = menos errores
4. **Shared context**: Estado compartido entre agentes
5. **Error isolation**: Un agente fallando no debe parar todo
6. **Cost control**: Monitor token usage por agente
7. **Observability**: Log de todas las interacciones

## Relación con otros conceptos

- Orquestación: [[../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]
- Arquitecturas: [[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]
- Visión general: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]
- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
