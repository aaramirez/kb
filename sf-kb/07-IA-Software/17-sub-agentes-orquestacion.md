---
title: "Sub-agentes y Orquestación"
tags:
  - sf/ia-software
  - type/arquitectura
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "Sub-agents"
  - "Agent Orchestration"
  - "Supervisor Pattern"
related:
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]"
  - "[[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]"
  - "[[../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]]"
---

# Sub-agentes y Orquestación

Los sub-agentes permiten delegar tareas especializadas a agentes más pequeños y enfocados, coordinados por un agente supervisor.

## ¿Por qué Sub-agentes?

```
Single Agent Problems:
──────────────────────
┌──────────────────────────────────────┐
│  One agent doing everything:         │
│  • Tool overload (too many tools)    │
│  • Context window overflow           │
│  • Conflicting instructions          │
│  • Error propagation                 │
│  • Hard to debug                     │
└──────────────────────────────────────┘

Solution: Sub-agentes
──────────────────────
┌──────────────────────────────────────┐
│  Supervisor Agent                    │
│  ├── Coding Sub-agent                │
│  │   └── Tools: read, write, edit    │
│  ├── Testing Sub-agent               │
│  │   └── Tools: run tests, coverage  │
│  ├── Security Sub-agent              │
│  │   └── Tools: scan, analyze        │
│  └── Documentation Sub-agent         │
│      └── Tools: generate docs        │
└──────────────────────────────────────┘
```

## Patterns de Orquestación

### 1. Supervisor Pattern

```
┌─────────────────────────────────────────────┐
│            SUPERVISOR PATTERN                │
├─────────────────────────────────────────────┤
│                                              │
│           ┌──────────────┐                  │
│           │  Supervisor  │                  │
│           │    Agent     │                  │
│           └──────┬───────┘                  │
│         ┌────────┼────────┐                 │
│         ▼        ▼        ▼                 │
│    ┌─────────┐┌─────────┐┌─────────┐       │
│    │ Coder   ││ Tester  ││ Reviewer│       │
│    │ Agent   ││ Agent   ││ Agent   │       │
│    └─────────┘└─────────┘└─────────┘       │
│                                              │
│  Flow:                                      │
│  1. Supervisor receives task                │
│  2. Decomposes into subtasks                │
│  3. Delegates to appropriate sub-agent      │
│  4. Collects results                        │
│  5. Integrates and delivers                 │
│                                              │
└─────────────────────────────────────────────┘
```

### Implementation

```python
class SupervisorAgent:
    def __init__(self, llm):
        self.llm = llm
        self.agents = {
            "coder": CoderAgent(llm),
            "tester": TesterAgent(llm),
            "reviewer": ReviewerAgent(llm),
        }

    async def execute(self, task: str):
        # Plan
        plan = await self.plan(task)

        results = {}
        for step in plan.steps:
            agent = self.agents[step.agent_type]
            context = self.build_context(step, results)
            result = await agent.execute(step.task, context)
            results[step.id] = result

        return self.compile(results)

    async def plan(self, task: str) -> Plan:
        prompt = f"""
        Decompose this task for specialized agents:
        Task: {task}
        Available agents: {list(self.agents.keys())}

        Output: list of (agent_type, subtask, dependencies)
        """
        return await self.llm.generate(prompt)
```

### 2. Hierarchical Pattern

```
┌─────────────────────────────────────────────┐
│         HIERARCHICAL PATTERN                 │
├─────────────────────────────────────────────┤
│                                              │
│           ┌──────────────┐                  │
│           │    Lead      │                  │
│           │    Agent     │                  │
│           └──────┬───────┘                  │
│         ┌────────┼────────┐                 │
│         ▼        ▼        ▼                 │
│    ┌─────────┐┌─────────┐┌─────────┐       │
│    │ Team    ││ Team    ││ Team    │       │
│    │ Lead A  ││ Lead B  ││ Lead C  │       │
│    └────┬────┘└────┬────┘└────┬────┘       │
│       ┌─┴─┐      ┌─┴─┐      ┌─┴─┐         │
│       ▼   ▼      ▼   ▼      ▼   ▼         │
│     Sub  Sub   Sub  Sub   Sub  Sub         │
│     agent agent agent agent agent agent    │
│                                              │
└─────────────────────────────────────────────┘
```

### 3. Sequential Pipeline

```
Input → Agent 1 → Agent 2 → Agent 3 → Output
         (Plan)    (Code)    (Test)
```

### 4. Parallel Fan-out

```
              ┌→ Agent A (Frontend) ─┐
Input → Split ├→ Agent B (Backend)  ─┼→ Merge → Output
              └→ Agent C (DevOps)  ─┘
```

## Delegation Strategies

### Task-based delegation

```python
DELEGATION_RULES = {
    "code_generation": "coder_agent",
    "test_writing": "tester_agent",
    "code_review": "reviewer_agent",
    "documentation": "docs_agent",
    "security_scan": "security_agent",
    "deployment": "devops_agent",
}
```

### Capability-based delegation

```python
class CapabilityRouter:
    def route(self, task: Task) -> Agent:
        capabilities = self.analyze_capabilities(task)

        if capabilities.needs_code:
            return self.coder_agent
        if capabilities.needs_testing:
            return self.tester_agent
        if capabilities.needs_review:
            return self.reviewer_agent

        return self.general_agent
```

## Communication Patterns

### Message passing

```python
# Agents communicate via structured messages
@dataclass
class AgentMessage:
    sender: str
    recipient: str
    type: str  # "task", "result", "question", "feedback"
    content: dict
    context: dict
```

### Shared state

```python
# All agents share a common state store
class SharedState:
    def __init__(self):
        self.codebase = {}
        self.test_results = {}
        self.review_feedback = {}
        self.metrics = {}

    def update(self, key: str, value: Any):
        self.state[key] = value

    def get(self, key: str) -> Any:
        return self.state.get(key)
```

### Event-driven

```python
# Agents emit and listen to events
class EventBus:
    def __init__(self):
        self.listeners = {}

    def on(self, event: str, handler: Callable):
        self.listeners.setdefault(event, []).append(handler)

    def emit(self, event: str, data: dict):
        for handler in self.listeners.get(event, []):
            handler(data)
```

## Error Handling

```
Error Handling in Sub-agents:
──────────────────────────────
┌─────────────────────────────────────┐
│  Scenario: Sub-agent fails          │
│                                     │
│  Options:                          │
│  1. Retry with same agent          │
│  2. Retry with different agent     │
│  3. Skip and continue              │
│  4. Escalate to supervisor         │
│  5. Abort pipeline                 │
│                                     │
│  Strategy:                         │
│  - Transient errors → Retry (3x)  │
│  - Agent failure → Switch agent   │
│  - Critical failure → Escalate    │
│  - Budget exceeded → Abort        │
└─────────────────────────────────────┘
```

## Ejemplo Completo

```
Task: "Implement user registration with email verification"

Supervisor Plan:
────────────────
1. [Coder Agent] Create User model + migration
2. [Coder Agent] Create registration endpoint
3. [Coder Agent] Create email verification service
4. [Tester Agent] Write unit tests for all new code
5. [Reviewer Agent] Security review of auth flow
6. [Docs Agent] Generate API documentation
7. [Coder Agent] Address review findings

Execution:
──────────
Step 1: Coder creates User.ts + migration ✅
Step 2: Coder creates POST /register ✅
Step 3: Coder creates EmailService.ts ✅
Step 4: Tester generates 12 test cases ✅
Step 5: Reviewer finds 2 issues:
  - Missing rate limiting on registration
  - No email format validation
Step 6: Docs generates OpenAPI spec ✅
Step 7: Coder fixes both issues ✅

Result: Feature complete with tests, review, and docs
```

## Best Practices

1. **Clear responsibilities**: Cada sub-agente tiene un scope definido
2. **Minimal tool access**: Solo las tools que necesita
3. **Structured communication**: Messages con schema definido
4. **Checkpoint & rollback**: Ability to undo sub-agent changes
5. **Budget limits**: Max tokens/time per sub-agent
6. **Monitoring**: Log de todas las interacciones

## Relación con otros conceptos

- Visión general: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes: Visión General]]
- Arquitecturas: [[../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]
- Multi-agente: [[../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]]
- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
