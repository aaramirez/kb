---
title: "Transcripción: Harness Engineering: 4 Levers to Diagnose Any AI Agent"
type: transcripcion
channel: "Damian Galarza"
videoId: "ow3Es1AF5-Y"
source: "https://www.youtube.com/watch?v=ow3Es1AF5-Y"
language: "en-US"
playlistOrder: 21
created: 2026-10-10
tags:
  - arnes/transcripcion
related:
  - "[[cuatro-palancas-para-diagnosticar-agentes]]"
---

# Harness Engineering: 4 Levers to Diagnose Any AI Agent

> Video original: https://www.youtube.com/watch?v=ow3Es1AF5-Y
> Canal: Damian Galarza — duración 9:21 — idioma: inglés
> Nota estructurada: [[cuatro-palancas-para-diagnosticar-agentes]]

## Introducción: las cuatro palancas del harness

[0:00] Everyone is talking about AI agents right now, but agent has become one of those words that sounds precise until you try to build one. A chatbot, a workflow, and an actual agent might all use the same model, but they're designed for very different kinds of problems. That's where harness engineering comes in. It gives us a way to reason about the system around the model. Because once the model can choose actions over time, the question is no longer just, how good is the model? It's, what does the model see? What can it do? How does it run? And what boundaries does it have? Those are the four levers: context, tools, loop, and governance. And in this video, I want to show you how all four of those levers let you diagnose almost any agent failure in under a minute. If you've built one of these systems, or even just spent enough time in Claude Code, this probably sounds familiar. The model has the information somewhere, but doesn't use it.

## De funciones LLM a workflows y agentes

[0:48] It has the right tool, but reaches for the wrong one. It works for a while, and then loops, stalls, or confidently says it's done when it's not. It's tempting to call all of that the model being dumb. But most of the time, those are just different harness problems. So what actually makes something an agent? To understand this, we should look at how using an LLM has evolved. First we started with basic LLM features. This is where your application calls an LLM with a prompt and the model returns something back to the user. Maybe that's a summary, a classification, a rewritten email, or a list of fully extracted fields. The app owns the path and the model performs some kind of transformation. Instead of one model call, the code coordinates multiple LLM calls, tools, retries, and structured outputs to accomplish a goal. The model is doing more work, but the path is still mostly predetermined. Code is still driving it. But now we've moved to agents.

[1:36] What makes agents different is that the model owns part of the path. It has agency. It can decide what to inspect, which tool to call, whether the result was enough, and what to do next. That freedom is what makes agents powerful. But the more control you give the model, the more the surrounding system matters. That surrounding system is the harness. When building an agent, we can look at the model itself as the engine. It's the brains of the operation. All of the surrounding infrastructure is the rest of the car being built around that engine. This includes what information does the agent see? What actions can it take? How is the loop configured? And what boundaries keep the autonomy pointed in the right direction? That's the framework. Context, tools, loop, and governance. Before we dive into the framework, if this is the kind of practical AI systems breakdown you're looking for, please subscribe.

## Palanca 1: contexto

[2:26] That's what this channel is all about. Now, let's start with context. Context is everything the model can see at the moment it needs to make a decision. This includes the system prompt, conversation history, retrieved documents, memory files, codebase docs, screenshots, logs, and whatever state the agent has accumulated while working. It also includes the descriptions of the tools the agent has available, which matters because the model can only choose tools it understands. A context failure is not always that this information is missing, though. Often, the information exists somewhere, but it's just not being surfaced where the model is actually making the decision. Context can also fail in the opposite direction, too much information.

## Palanca 2: herramientas (funciones locales, MCP, CLI)

[3:13] When everything gets shoved into the context, the important signal can get buried. The model may technically have the right information, but it's not prominent enough to shape the decision. More context is not automatically better context. So the diagnostic question is, did the model have the right information, in the right shape, and at the right moment? If context is what the model can see, then tools are what the model can do. A model by itself can only generate text. Tools are how we let it affect the outside world. whether that's searching the web, querying a database, reading a file, creating a ticket, sending a message, or running a test or calling an internal API. There are different ways to expose tools to an agent. Sometimes tools are just local functions you write in your own code and pass directly to the model. These are usually domain-specific. Maybe that's checking availability, creating an invoice, updating a CRM record, fetching a campaign performance.

[4:06] Sometimes tools come through an MCP, which is a protocol for connecting agents to external systems. Instead of writing custom wiring for every integration, MCP gives the agent a common way to reach things like GitHub, Linear, Slack, databases, browsers, or internal services. And sometimes the tool service is a CLI or shell, where the agent can actually execute commands directly. These are extremely flexible but harder to constrain. From the model's perspective, these may all show up as actions it can choose from. But from a harness engineering perspective, they have different trade-offs. Local tools are controlled and domain-specific. MCPs are portable and reusable. CLIs are flexible, but harder to govern. So the tools question is not just does the agent have access. It's does the agent have the right action surface exposed in a way that the model can understand and use effectively.

## Palanca 3: el bucle y sus condiciones de parada

[4:58] The third lever is the loop itself. If context is what the model can see and tools are what it can do, the loop is how does the agent keep moving. A typical agent loop looks something like this. The model receives a prompt and the current context. It looks at the tools that are available and it decides whether it needs to take an action. If it does, it requests a tool call. The harness runs that tool or coordinates whatever needs to happen for that tool to run and then returns the result back to the model. Now the model has to interpret the result. Did that answer the question? Did it fail? Did it reveal a new problem? Does the agent need another tool call? Or should it return a final answer at this point? That cycle repeats until the task is done. The agent gets blocked or the harness stops it. This is why loop design matters.

## Palanca 4: gobernanza

[5:46] Without clear stopping conditions, agents can run away. They can keep calling tools, keep searching, keep retrying, or just keep checking one more thing. That's why harnesses often need controls like max steps, time limits, no progress detection, or explicit completion criteria. So the loop question is, does the agent have a clear process for deciding what to do next, when to continue, and when to stop. The fourth lever is governance. If context is what the model can see, tools are what it can do, and the loop is how it keeps moving, governance is what keeps that autonomy in check. This is the lever that separates a cool demo from something you can actually trust in production. Because once an agent can take actions, you have to decide which actions are safe to run automatically, which ones require approval, and which ones should be impossible. Reading a file is different from deleting a file.

[6:35] Drafting an email is different from sending an email. Suggesting a budget change is different from changing a live ad budget. Querying customer data is different from exporting it. Governance shows up as permissions, approval gates, sandboxing, audit logs, rate limits, environment boundaries, and blast radius design. A governance failure is when the agent is technically capable of doing something, but the harness has not decided whether it should be allowed to do it. Sometimes that means the agent is too constrained and can't finish the task. Other times, it means that the agent is too unconstrained and takes an action you did not intend. Both are governance problems. So the governance question is, what can the agent do automatically that requires approval, and what should be out of bounds entirely? This is why the four levers are useful.

## Diagnóstico: qué palanca se rompió

[7:24] When an agent fails, the useful question is not why is the model bad. It's which lever broke. Did it fail because the model didn't have the right context? Did it have the right context but the wrong action surface? Did it have the tools but the loop didn't know when to retry or stop? Or did the harness give it too much freedom or not enough freedom? This is also why model choice is only part of the story. A better harness can make a smaller or less capable model look much smarter than you'd expect because it gives the model the right context, the right tools, the right loop, and the right boundaries. The reverse is also true. A frontier model in a bad harness can still look surprisingly dumb. It can miss the important instructions, call the wrong tools, loop forever, or take an action it should never have been allowed to take.

[8:14] The model sets the ceiling, but the harness determines how much of that capability you actually get to use. So the next time an agent fails, don't stop at the model just messed up. Ask which part of the harness broke. Was it context? Did the model have the right information in the right shape and at the right moment? Was it tools? Did it have the right action surface exposed clearly and safely? Was it the loop? Did it know what to do next and when to continue and when to stop? Or was it governance? Did it have the right permissions, approval gates, and boundaries. That's the diagnostic. If you want to apply this to your own agent, I put together a simple worksheet that walks through the four levers. You can grab that in the link in the description. And if you're building one of these systems and want help thinking through the harness, this is also the core of the Agent Foundations program I'm running.

[9:05] Because the future of agents is not just picking better models, it's designing better harnesses.
