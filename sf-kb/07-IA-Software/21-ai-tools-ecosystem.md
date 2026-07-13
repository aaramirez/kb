---
title: "Ecosistema de Herramientas AI"
tags:
  - sf/ia-software
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Tools Ecosystem"
  - "LangChain"
  - "LlamaIndex"
  - "Semantic Kernel"
related:
  - "[[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]"
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]"
  - "[[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]"
---

# Ecosistema de Herramientas AI

El ecosistema de herramientas AI para desarrollo es amplio y en constante evolución. Este artículo compara los frameworks principales.

## Panorama

```
┌─────────────────────────────────────────────────────┐
│           AI TOOLS ECOSYSTEM (2026)                  │
├──────────────┬──────────────┬───────────────────────┤
│  ORCHESTRATE │  RETRIEVE    │  BUILD                │
│              │              │                       │
│  LangChain   │ LlamaIndex   │ Semantic Kernel       │
│  LangGraph   │ Haystack     │ OpenAI SDK            │
│  CrewAI      │ Vectara      │ Anthropic SDK         │
│  AutoGen     │ Weaviate     │ Vercel AI SDK         │
│  Mastra      │ Pinecone     │ Google AI Edge        │
└──────────────┴──────────────┴───────────────────────┘
```

## 1. LangChain

### ¿Qué es?

Framework para construir aplicaciones powered por LLMs con components modulares.

```
LangChain Architecture:
────────────────────────
┌──────────────────────────────────────┐
│           LangChain Ecosystem        │
├──────────────────────────────────────┤
│  langchain-core    → Base components│
│  langchain         → Chains, agents │
│  langchain-community → Integrations │
│  langgraph         → Agent workflows│
│  langsmith         → Observability  │
└──────────────────────────────────────┘
```

### Ejemplo

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Simple chain
llm = ChatOpenAI(model="gpt-4o")
prompt = ChatPromptTemplate.from_template(
    "Explain {concept} to a {audience}"
)
parser = StrOutputParser()

chain = prompt | llm | parser
result = chain.invoke({"concept": "MCP", "audience": "junior developer"})
```

### Ventajas/Limitaciones

| Ventajas | Limitaciones |
|----------|-------------|
| Ecosistema enorme | Abstracciones pesadas |
| Muchas integraciones | Learning curve alta |
| LangSmith para debugging | Overhead de dependencias |
| Community activo | API cambia frecuentemente |

## 2. LlamaIndex

### ¿Qué es?

Framework especializado en RAG (Retrieval-Augmented Generation) y data indexing.

```
LlamaIndex Flow:
─────────────────
Documents → Index → Query → Context → LLM → Response
              │
              ├── Vector Store
              ├── Keyword Index
              └── Knowledge Graph
```

### Ejemplo

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai import OpenAI

# Load documents
documents = SimpleDirectoryReader("./docs").load_data()

# Create index
index = VectorStoreIndex.from_documents(documents)

# Query
query_engine = index.as_query_engine(llm=OpenAI(model="gpt-4o"))
response = query_engine.query("What is our API authentication method?")
print(response)
```

### Best for

- Document Q&A systems
- Knowledge bases
- Search with context
- Enterprise data integration

## 3. Semantic Kernel (Microsoft)

### ¿Qué es?

Framework de Microsoft para integrar LLMs en aplicaciones .NET/Python/Java.

```
Semantic Kernel:
─────────────────
┌──────────────────────────────────────┐
│  Kernel                              │
│  ├── Plugins (Functions)            │
│  │   ├── Native functions (code)    │
│  │   └── Semantic functions (prompt)│
│  ├── Memory                         │
│  ├── Planner                        │
│  └── AI Services                    │
│      ├── Chat completion            │
│      ├── Text generation            │
│      └── Embeddings                 │
└──────────────────────────────────────┘
```

### Ejemplo

```python
import semantic_kernel as sk
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion

kernel = sk.Kernel()
kernel.add_service(OpenAIChatCompletion("gpt-4o", api_key))

# Register a plugin
@sk.plugin
class MathPlugin:
    @sk.function(description="Add two numbers")
    def add(self, a: float, b: float) -> float:
        return a + b

kernel.add_plugin(MathPlugin(), "math")

# Use planner
planner = sk.FunctionCallingStepwisePlanner()
result = await planner.invoke(kernel, "What is 123 + 456?")
```

## 4. Haystack (deepset)

### Framework para NLP pipelines

```python
from haystack import Pipeline
from haystack.components.generators import OpenAIGenerator
from haystack.components.retrievers import InMemoryBM25Retriever
from haystack.components.writers import DocumentWriter

pipeline = Pipeline()
pipeline.add_component("retriever", InMemoryBM25Retriever())
pipeline.add_component("llm", OpenAIGenerator(model="gpt-4o"))
pipeline.connect("retriever", "llm")
```

## 5. Vercel AI SDK

### Para aplicaciones web

```typescript
import { generateText, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Simple generation
const { text } = await generateText({
  model: openai('gpt-4o'),
  prompt: 'Explain MCP protocol'
});

// Streaming
const stream = streamText({
  model: openai('gpt-4o'),
  prompt: 'Write a REST API'
});

for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}
```

## Comparison Matrix

| Feature | LangChain | LlamaIndex | Semantic Kernel | Haystack | Vercel AI |
|---------|-----------|------------|-----------------|----------|-----------|
| **Primary use** | Orchestration | RAG | Enterprise apps | NLP pipelines | Web apps |
| **Languages** | Python/JS | Python | .NET/Py/Java | Python | TypeScript |
| **Learning curve** | High | Medium | Medium | Medium | Low |
| **RAG support** | Good | Excellent | Good | Good | Basic |
| **Agent support** | Excellent (LangGraph) | Basic | Good | Basic | Basic |
| **MCP support** | Via LangChain | No | No | No | No |
| **Production ready** | Yes | Yes | Yes | Yes | Yes |
| **Cloud offering** | LangSmith | LlamaCloud | Azure AI | deepset Cloud | Vercel |
| **Community size** | Very large | Large | Large | Medium | Growing |
| **Best for** | Complex agents | Document search | Microsoft stack | Enterprise NLP | Next.js apps |

## Decision Framework

```
¿Qué necesitas construir?
──────────────────────────

¿Sistema de Q&A sobre documentos?
  → LlamaIndex (RAG especializado)

¿Agente complejo con múltiples tools?
  → LangChain + LangGraph

¿Aplicación .NET/Enterprise Microsoft?
  → Semantic Kernel

¿Pipeline de NLP production-grade?
  → Haystack

¿App web con AI streaming?
  → Vercel AI SDK

¿MCP integration?
  → LangChain o MCP SDK directo

¿Máxima flexibilidad?
  → Build with raw SDK (OpenAI/Anthropic)
```

## MCP Integration

```
MCP + Frameworks:
─────────────────
┌──────────────┐    ┌──────────┐
│  LangChain   │◀──▶│   MCP    │
│  (LangGraph) │    │  Server  │
└──────────────┘    └──────────┘
       OR
┌──────────────┐    ┌──────────┐
│  Custom      │◀──▶│   MCP    │
│  Agent       │    │  Server  │
└──────────────┘    └──────────┘
```

Referencia: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]

## Best Practices

1. **Evaluate antes de adoptar**: No usar el más popular, sino el más adecuado
2. **Start simple**: Raw SDK primero, frameworks si es necesario
3. **Observability**: Usar LangSmith o similar desde el día 1
4. **Testing**: Tests para chains, agents y tools
5. **Version pinning**: Lock versions en producción

## Relación con otros conceptos

- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Agentes: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]
- Herramientas: [[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]
- Scripts: [[../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización]]
