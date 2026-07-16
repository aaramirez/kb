# Glosario

## A

**Agente (Agent)** — Instancia de IA con acceso a herramientas y un contexto definido. Puede operar en modo primary (autónomo) o subagent (especializado).

**ADR (Architectural Decision Record)** — Documento que registra una decisión arquitectónica importante, incluyendo contexto, opciones consideradas y justificación.

## C

**CLI (Command Line Interface)** — Interfaz de línea de comandos. Forma de interactuar con programas mediante texto en la terminal.

**Commander** — Librería Node.js para construir interfaces de línea de comandos.

**Conventional Commit** — Convención para mensajes de commit: `tipo(scope): descripción`. Ej: `feat(auth): add login endpoint`.

## E

**ESM (ECMAScript Modules)** — Sistema de módulos nativo de JavaScript/Node.js usando `import`/`export`.

## G

**Glob** — Patrón para buscar archivos usando comodines (ej: `**/*.js`).

## H

**Hook** — Callback event-driven que un plugin suscribe para interceptar o modificar el comportamiento de opencode en puntos específicos del ciclo de vida (tools, LLM, permisos, sesiones, shell). Cada hook recibe un `input` (contexto) y un `output` (objeto mutable). Ver [[14-Hooks-Referencia-Completa|Hooks — Referencia Completa]].

## I

**Issue** — Tarea, bug o mejora registrada en un sistema de tracking (GitHub Issues, Jira, etc.).

## K

**KV Store** — Almacén key-value persistente disponible para plugins TUI. Almacenado en `state/kv.json`. No está namespaced por plugin — todos comparten el mismo store. Ver [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]].

## M

**MCP (Model Context Protocol)** — Protocolo estándar para conectar agentes de IA con herramientas externas. Permite que los agentes interactúen con APIs, navegadores, bases de datos, etc.

**Multiagente** — Arquitectura donde múltiples agentes especializados colaboran para completar tareas complejas.

## O

**Opencode** — Herramienta open-source de codificación asistida por IA, similar a Claude Code pero con más control sobre configuración, agentes y permisos.

## P

**Plugin** — Módulo JS/TS que se ejecuta dentro del proceso de opencode para extender sus capacidades. Existen dos tipos:
- **Plugin (Server)**: intercepta eventos del backend (tools, LLM, permisos, sesiones). Se configura en `opencode.json`.
- **Plugin (TUI)**: extiende la interfaz de terminal con rutas, dialogs, keybindings, slots y themes. Se configura en `tui.json`.
Ver [[13-Sistema-de-Plugins|Sistema de Plugins]].

**Prompt** — Instrucción o pregunta que se le da a un modelo de IA para generar una respuesta.

**PR (Pull Request)** — Solicitud de fusión de cambios en un repositorio Git.

## S

**Skill** — Conjunto de instrucciones especializadas en formato SKILL.md que se carga bajo demanda cuando el agente la invoca. Las skills son reutilizables y se almacenan en `.opencode/skills/<nombre>/SKILL.md`. Ver [[10-Skills-y-Aprendizaje-Bajo-Demanda|Skills y Aprendizaje Bajo Demanda]].

**Slot** — Punto de extensión en la UI de opencode donde un plugin TUI puede inyectar contenido JSX. Slots built-in incluyen `home_logo`, `session_prompt`, `sidebar_content`, etc. Ver [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]].

**Spec (Specification)** — Documento detallado que describe qué debe hacer una funcionalidad, incluyendo criterios de aceptación.

**Subagente** — Agente especializado con permisos limitados que se ejecuta dentro del contexto de un agente principal.

## T

**Tool (Herramienta)** — Capacidad que tiene un agente para interactuar con el entorno: leer/escribir archivos, ejecutar comandos, hacer peticiones web, etc. Las tools se definen con JSON Schema o Zod y se ejecutan en el contexto del agente. Ver [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]].

**TUI (Terminal User Interface)** — Interfaz de usuario basada en terminal, construida con SolidJS en opencode. Soporta JSX, themes, keybindings, navegación por teclado, dialogs, y personalización vía plugins. Ver [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]].
