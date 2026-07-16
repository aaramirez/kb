# Plan: Complementar ia-kb con Plugins, Hooks y TUI

## Objective

Completar los gaps del curso "Desarrollo con IA" en la sección de OpenCode (Módulos 5 y 6) con contenido detallado sobre el sistema de plugins, hooks y TUI, que actualmente están cubiertos con una oración o no están cubiertos.

## Estado Actual

| Tema | Cobertura actual | Gap |
|------|------------------|-----|
| **Hooks** | 0% — Solo mención en glosario | Completamente ausente |
| **Plugins** | 5% — Una oración en Módulo 6.06 | Sin arquitectura, lifecycle, ejemplos |
| **TUI** | 15% — Atajos básicos en Módulo 5.02 | Sin customización, dialogs, routes, themes |
| **Glosario** | Definición de 1 línea para Plugin | Sin Hook, sin TUI, sin tipos de plugin |

## Requirements

1. Crear nota Módulo 6.13: Sistema de Plugins — high
2. Crear nota Módulo 6.14: Hooks — Referencia Completa — high
3. Crear nota Módulo 6.15: TUI — Customización y Dialogs — high
4. Crear nota Módulo 6.16: Creando Tools vía Plugins — medium
5. Crear nota Módulo 6.17: Caso Práctico — Plugin Completo — medium
6. Actualizar Glosario con definiciones de Hook, TUI, Plugin (tipos) — medium
7. Actualizar Index.md con las nuevas notas — medium
8. Actualizar Módulo 6.06 (Diseño de Superficie) para referenciar las nuevas notas — low
9. Actualizar Módulo 5.02 (TUI) con referencia a la nota avanzada — low

## Architecture

### Archivos a crear (5 notas nuevas)

```
ia-kb/Módulo 6 — Harness en OpenCode/
├── 13-Sistema-de-Plugins.md          # Nuevo
├── 14-Hooks-Referencia-Completa.md   # Nuevo
├── 15-TUI-Customizacion-y-Dialogs.md # Nuevo
├── 16-Creando-Tools-via-Plugins.md   # Nuevo
└── 17-Caso-Practico-Plugin-Completo.md # Nuevo
```

### Archivos a modificar (4 archivos)

```
ia-kb/Index.md                                    # Agregar 5 notas al temario
ia-kb/Recursos/Glosario.md                        # Expandir definiciones
ia-kb/Módulo 6 — Harness en OpenCode/06-Diseno-de-Superficie-de-Herramientas.md  # Agregar referencias
ia-kb/Módulo 5 — OpenCode desde cero/02-Comandos-esenciales-y-TUI.md            # Agregar referencia
```

## Contenido de cada nota

---

### 13 — Sistema de Plugins

**Ubicación**: Después de nota 12 (Poniéndolo Todo Junto)
**Público**: Usuarios que ya entienden harness y quieren extender opencode
**Extensión objetivo**: ~200-250 líneas

**Contenido**:
1. Qué es un plugin (definición formal, diferencia con skill/agent/tool)
2. Arquitectura: server plugin vs TUI plugin (mutuamente excluyentes)
3. Estructura de un módulo plugin (`PluginModule`, `TuiPluginModule`)
4. Contexto de entrada (`PluginInput`: client, project, directory, worktree, $)
5. Configuración en `opencode.json` (V1: `"plugin": [...]`) y `tui.json` (TUI)
6. Descubrimiento y carga: dirs auto-scan + npm
7. Orden de carga: global → proyecto → global plugins dir → project plugins dir
8. Instalación npm via Bun (auto-install, cache en `~/.cache/opencode/`)
9. Dependencias: `.opencode/package.json` para plugins locales
10. Hot reload vs restart
11. Seguridad: sin sandboxing, acceso total al runtime
12. Referencia a la nota 14 (Hooks) para el API de eventos
13. Referencia a la nota 15 (TUI) para plugins de UI
14. Tabla comparativa: Plugin vs Skill vs Agent vs Tool (ya cubierto parcialmente en nota 06, expandir)

**Formato**: Tablas, diagrama ASCII de carga, código de ejemplo mínimo

---

### 14 — Hooks — Referencia Completa

**Ubicación**: Después de nota 13
**Público**: Desarrolladores que van a crear plugins
**Extensión objetivo**: ~300-350 líneas (es la nota más densa)

**Contenido**:

**Sección A: Qué son los hooks**
1. Definición: callbacks event-driven que se retornan del plugin
2. Patrón input/output: mutación del segundo argumento
3. Cadena de ejecución: múltiples plugins en el mismo hook

**Sección B: Hooks de Interceptación (V1)**

| Hook | Cuándo | Qué muta |
|------|--------|----------|
| `tool.execute.before` | Antes de tool | `output.args` |
| `tool.execute.after` | Después de tool | `output.title`, `output.output`, `output.metadata` |
| `tool.definition` | Al enviar tools al LLM | `output.description`, `output.parameters` |
| `permission.ask` | Al pedir permiso | `output.status` (ask/deny/allow) |
| `shell.env` | Al lanzar shell | `output.env` |
| `chat.message` | Mensaje nuevo | `output.message`, `output.parts` |
| `chat.params` | Antes de LLM | `temperature`, `topP`, `topK`, `maxOutputTokens` |
| `chat.headers` | Antes de HTTP | `output.headers` |
| `command.execute.before` | Antes de comando | `output.parts` |

**Sección C: Hooks Experimentales**

| Hook | Propósito |
|------|-----------|
| `experimental.session.compacting` | Customizar prompt de compaction |
| `experimental.compaction.autocontinue` | Controlar auto-continue post-compaction |
| `experimental.chat.messages.transform` | Transformar historial completo |
| `experimental.chat.system.transform` | Inyectar al system prompt |
| `experimental.text.complete` | Modificar texto final |
| `experimental.provider.small_model` | Override de modelo pequeño |

**Sección D: Hooks de Configuración y Auth**
- `config` — modificar config al cargar
- `auth` — registrar OAuth/API auth para providers
- `provider` — registrar provider custom con modelos
- `event` — catch-all para cualquier evento del sistema
- `dispose` — cleanup al cerrar

**Sección E: Ejemplos prácticos (uno por hook principal)**
- Proteger `.env` (tool.execute.before)
- Auto-allow permisos específicos (permission.ask)
- Inyectar env vars (shell.env)
- Modificar temperature por agente (chat.params)
- Inyectar al system prompt (experimental.chat.system.transform)
- Customizar compaction (experimental.session.compacting)

**Sección F: V2 Preview (beta)**
- Transform hooks: agent.transform, catalog.transform, tool.transform, skill.transform
- Runtime hooks: ctx.tool.hook, ctx.session.hook, ctx.aisdk.hook
- Plugin.define() pattern

---

### 15 — TUI — Customización y Dialogs

**Ubicación**: Después de nota 14
**Público**: Usuarios que quieren personalizar la interfaz
**Extensión objetivo**: ~250-300 líneas

**Contenido**:

**Sección A: Arquitectura TUI**
- SolidJS en terminal (`@opentui/solid`)
- Server plugin vs TUI plugin (extensión de nota 13)
- Config en `tui.json` (NO `opencode.json`)

**Sección B: Dialogs**
1. `DialogAlert` — alerta con OK
2. `DialogConfirm` — confirmar/cancelar
3. `DialogPrompt` — input de texto con placeholder, busy state
4. `DialogSelect` — lista de opciones con filtro, categorías, disabled
5. Dialog stack control (`replace`, `clear`, `setSize`)

**Sección C: Toasts**
- Variantes: info, success, warning, error
- Duration, título, mensaje
- Ejemplo: notificación post-acción

**Sección D: Rutas Custom**
- `route.register()` — pantallas custom
- `route.navigate()` — navegación programática
- `route.current` — ruta actual
- Nombres reservados: `home`, `session`

**Sección E: Keybindings**
- `keymap.registerLayer()` — comandos + bindings
- Command palette integration (`namespace: "palette"`)
- Slash commands custom (`slashName`)
- Modos (`mode.push()`, `mode.current()`)

**Sección F: Slots — Inyectar JSX en la UI**
- Slots built-in: `home_logo`, `home_prompt`, `session_prompt`, `sidebar_*`, `app`, etc.
- Modos: replace, single_winner, additive
- `slots.register()` con order

**Sección G: Theme**
- `theme.current` — tokens de color (primary, error, text, border, etc.)
- `theme.selected`, `theme.set()`, `theme.install()`, `theme.mode()`

**Sección H: State**
- `state.session.*` — leer sesiones, messages, todos, diff, permissions
- `state.lsp()`, `state.mcp()` — estado de servidores
- `state.path`, `state.vcs`

**Sección I: KV Store, Attention, Lifecycle**
- `kv.get/set` — persistencia simple
- `attention.notify()` — sonidos + notificaciones del sistema
- `soundboard.registerPack()` — packs de sonido custom
- `lifecycle.onDispose()` — cleanup

**Sección J: Event System**
- `event.on()` — escuchar cualquier evento de opencode
- Lista de eventos disponibles

---

### 16 — Creando Tools vía Plugins

**Ubicación**: Después de nota 15
**Público**: Desarrolladores que quieren tools custom
**Extensión objetivo**: ~150-200 líneas

**Contenido**:

**Sección A: Tres formas de crear tools**
1. Standalone en `.opencode/tools/` (sin plugin)
2. Vía plugin V1 (`tool` en hooks, Zod schemas)
3. Vía plugin V2 (`ctx.tool.transform`, JSON Schema)

**Sección B: Tool standalone**
- Archivo en `.opencode/tools/`
- Importar `tool` de `@opencode-ai/plugin`
- `ToolContext`: sessionID, agent, directory, worktree, abort, metadata(), ask()
- Ejemplo completo

**Sección C: Tool via plugin V1**
- Definir en el return del plugin
- `tool.schema` es Zod
- Override de tools built-in (mismo nombre)
- Ejemplo: tool que consulta API

**Sección D: Tool via plugin V2**
- `ctx.tool.transform()` con JSON Schema
- Soporte `group` y `codemode`
- Ejemplo

**Sección E: Tool Context detallado**
- `context.abort` — AbortSignal
- `context.metadata()` — title + metadata
- `context.ask()` — pedir permiso con patterns
- `context.directory` vs `context.worktree`

**Sección F: Buenas prácticas**
- Validación con schema
- Manejo de errores
- Retorno con title/output/metadata
- Attachments (archivos)
- Cuándo usar tool vs bash

---

### 17 — Caso Práctico — Plugin Completo

**Ubicación**: Después de nota 16 (cierra el módulo)
**Público**: Todos los niveles
**Extensión objetivo**: ~200-250 líneas

**Contenido**:

**Caso: Plugin "SessionGuard"** — protege sesiones y notifica

1. **Objetivo**: Plugin que:
   - Bloquea lectura de `.env` (tool.execute.before)
   - Notifica cuando una sesión falla (event: session.error)
   - Inyecta contexto al system prompt (experimental.chat.system.transform)
   - Registra un toast de bienvenida (TUI plugin option)

2. **Paso 1**: Scaffold con template
   ```bash
   node .opencode/scripts/create-plugin.js --name session-guard --type local --path ./.opencode/plugins/session-guard
   ```

3. **Paso 2**: Implementar hooks (código completo paso a paso)

4. **Paso 3**: Registrar en `opencode.json`

5. **Paso 4**: Probar y verificar

6. **Variantes**: Cómo extender el mismo plugin con TUI (toast de bienvenida)

7. **Ejercicio**: Crear un plugin que registre una tool custom + notifique al usuario

---

## Modificaciones a archivos existentes

### Index.md

Agregar después de la línea 68 (nota 12):
```markdown
13. [[Módulo 6 — Harness en OpenCode/13-Sistema-de-Plugins|Sistema de Plugins]]
14. [[Módulo 6 — Harness en OpenCode/14-Hooks-Referencia-Completa|Hooks — Referencia Completa]]
15. [[Módulo 6 — Harness en OpenCode/15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]]
16. [[Módulo 6 — Harness en OpenCode/16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]]
17. [[Módulo 6 — Harness en OpenCode/17-Caso-Practico-Plugin-Completo|Caso Práctico — Plugin Completo]]
```

### Glosario.md

Agregar/expandir:
- **Hook** — Callback event-driven que un plugin suscribe para interceptar o modificar el comportamiento de opencode en puntos específicos del ciclo de vida.
- **Plugin (Server)** — Módulo JS/TS que se ejecuta dentro del proceso de opencode para interceptar eventos del backend (tools, LLM, permisos, sesiones).
- **Plugin (TUI)** — Módulo JSX/TS que extiende la interfaz de terminal con rutas, dialogs, keybindings, slots y themes custom.
- **TUI (Terminal User Interface)** — Interfaz de usuario basada en terminal, construida con SolidJS en opencode. Soporta JSX, themes, keybindings y navegación por teclado.
- **Slot** — Punto de extensión en la UI donde un plugin TUI puede inyectar contenido JSX (logo, sidebar, prompts, etc.).
- **KV Store** — Almacén key-value persistente disponible para plugins TUI para guardar estado entre sesiones.

### Módulo 6.06 (Diseño de Superficie)

Agregar al final, después de la sección "Plugins" (línea 42):
```markdown
> Para una guía completa del sistema de plugins, ver [[13-Sistema-de-Plugins|Sistema de Plugins]].
> Para el API de hooks, ver [[14-Hooks-Referencia-Completa|Hooks — Referencia Completa]].
> Para custom tools via plugins, ver [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]].
```

### Módulo 5.02 (TUI)

Agregar antes de "Buenas prácticas" (línea 76):
```markdown
## TUI Avanzada

La TUI de opencode se puede personalizar profundamente vía plugins: dialogs, rutas custom, themes, keybindings, y slots. Para detalles, ver [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]] en el Módulo 6.
```

## TDD Flow

1. Crear las 5 notas nuevas con contenido
2. Actualizar Index.md → verificar que los links Obsidian resuelven
3. Actualizar Glosario → verificar definiciones consistentes
4. Actualizar referencias cruzadas en 6.06 y 5.02
5. Verificar que no hay duplicación con contenido existente
6. Verificar que las notas enlazan entre sí correctamente (flujo lógico 13→14→15→16→17)

## Verification

- [ ] Index.md muestra las 5 nuevas notas en el temario del Módulo 6
- [ ] Glosario tiene definiciones completas para Hook, Plugin (server/TUI), TUI, Slot, KV Store
- [ ] Módulo 6.06 referencia las notas 13, 14 y 16
- [ ] Módulo 5.02 referencia la nota 15
- [ ] Las 5 notas nuevas existen y tienen contenido
- [ ] Flujo de lectura: 13 → 14 → 15 → 16 → 17 es coherente
- [ ] No hay contenido duplicado entre notas nuevas y existentes
- [ ] Ejemplos de código usan la API real de `@opencode-ai/plugin`
- [ ] Referencias Obsidian `[[...]]` resuelven correctamente

## Prioridad de ejecución

| Orden | Nota | Prioridad | Dependencia |
|-------|------|-----------|-------------|
| 1 | 13 — Sistema de Plugins | high | Ninguna |
| 2 | 14 — Hooks | high | Nota 13 |
| 3 | 15 — TUI | high | Nota 13 |
| 4 | 16 — Tools via Plugins | medium | Notas 13+14 |
| 5 | 17 — Caso Práctico | medium | Notas 13-16 |
| 6 | Actualizar Glosario | medium | Ninguna |
| 7 | Actualizar Index | medium | Notas 13-17 |
| 8 | Actualizar referencias | low | Notas 13-17 |
