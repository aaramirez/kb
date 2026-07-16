# TUI — Customización y Dialogs

## Idea central

La TUI (Terminal User Interface) de opencode es SolidJS en terminal. Los plugins TUI pueden extender la interfaz con dialogs, toasts, rutas custom, keybindings, slots JSX, themes, y acceso completo al estado del sistema.

## Arquitectura

La TUI se construye con `@opentui/solid` — SolidJS renderizado en terminal. Los plugins TUI usan JSX para definir componentes de UI.

```tsx
/** @jsxImportSource @opentui/solid */
import type { TuiPlugin } from "@opencode-ai/plugin/tui"

const tui: TuiPlugin = async (api, options, meta) => {
  // api: TuiPluginApi — toda la capacidad de UI
  // options: parámetros del plugin
  // meta: id, source, spec, version, state
}

export default { id: "mi-plugin", tui }
```

**Diferencia clave con server plugins**: la config de TUI plugins va en `tui.json`, NO en `opencode.json`.

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "plugin": ["./plugins/mi-plugin.tsx"]
}
```

## Dialogs — Preguntas al usuario

### DialogAlert — Aviso con OK

```tsx
api.ui.DialogAlert({
  title: "Operación completada",
  message: "El archivo se guardó correctamente",
  onConfirm: () => { /* cerrar */ }
})
```

### DialogConfirm — Confirmar / Cancelar

```tsx
api.ui.DialogConfirm({
  title: "¿Eliminar archivo?",
  message: "Esta acción no se puede deshacer",
  onConfirm: () => { /* aceptar */ },
  onCancel: () => { /* cancelar */ }
})
```

### DialogPrompt — Input de texto

```tsx
api.ui.DialogPrompt({
  title: "Nombre del proyecto",
  description: () => <text fg="gray">Ingresa un nombre válido (sin espacios)</text>,
  placeholder: "mi-proyecto",
  value: "default-name",       // valor inicial
  busy: false,                  // mostrar spinner
  busyText: "Creando...",       // texto del spinner
  onConfirm: (value) => {
    console.log("El usuario escribió:", value)
  },
  onCancel: () => {}
})
```

### DialogSelect — Lista de opciones

```tsx
api.ui.DialogSelect({
  title: "Selecciona un framework",
  placeholder: "Buscar...",                    // placeholder del filtro
  options: [
    { title: "React", value: "react", description: "UI library", category: "Frontend" },
    { title: "Vue", value: "vue", description: "Progressive framework", category: "Frontend" },
    { title: "Express", value: "express", description: "HTTP server", category: "Backend" },
    { title: "Deprecated", value: "old", disabled: true }  // opción deshabilitada
  ],
  flat: false,              // agrupar por category
  skipFilter: false,        // deshabilitar búsqueda
  current: "react",         // pre-seleccionar
  onSelect: (option) => console.log("Seleccionó:", option.value),
  onMove: (option) => {},   // cursor se mueve
  onFilter: (query) => {}   // usuario escribe en búsqueda
})
```

### Control del stack de dialogs

```tsx
// Reemplazar el dialog actual por uno nuevo
api.ui.dialog.replace(() => <MiComponente />, onClose)

// Cerrar todos los dialogs
api.ui.dialog.clear()

// Cambiar tamaño
api.ui.dialog.setSize("large")  // "medium" | "large" | "xlarge"

// Estado actual
api.ui.dialog.open     // boolean — hay algún dialog abierto?
api.ui.dialog.depth    // number — cuántos dialogs apilados
```

## Toasts — Notificaciones efímeras

```tsx
api.ui.toast({
  message: "Archivo guardado correctamente",
  variant: "success",    // "info" | "success" | "warning" | "error"
  title: "Mi Plugin",
  duration: 3000         // ms, auto-dismiss (default: ~3000)
})
```

Ejemplos por variante:

```tsx
api.ui.toast({ message: "Proceso iniciado", variant: "info" })
api.ui.toast({ message: "Guardado exitoso", variant: "success", title: "Auto-save" })
api.ui.toast({ message: "Contexto casi lleno", variant: "warning" })
api.ui.toast({ message: "Error al compilar", variant: "error", title: "Build" })
```

## Rutas — Pantallas custom

Los plugins pueden registrar pantallas completas que se navigan como parte de la TUI.

```tsx
// Registrar pantalla
const unsub = api.route.register([{
  name: "mi-pantalla",       // NO usar "home" ni "session" (reservados)
  render: ({ params }) => (
    <box flexDirection="column" padding={1}>
      <text bold>Mi Pantalla Custom</text>
      <text>Parámetros: {JSON.stringify(params)}</text>
    </box>
  )
}])

// Navegar
api.route.navigate("mi-pantalla", { key: "value" })
api.route.navigate("session", { sessionID: "abc" })  // ir a sesión específica
api.route.navigate("home")                            // volver a home

// Dónde estamos
const current = api.route.current
// { name: "home" }
// { name: "session", params: { sessionID: "abc" } }
// { name: "mi-pantalla", params: { key: "value" } }
```

Nombres reservados: `home` y `session`. Si registras un plugin con uno de estos nombres, sobrescribe la pantalla nativa.

## Keybindings — Atajos de teclado

```tsx
api.keymap.registerLayer({
  commands: [
    {
      name: "mi-plugin.open",
      title: "Abrir Mi Plugin",
      category: "Plugin",
      namespace: "palette",           // aparece en command palette
      slashName: "mi-plugin",         // disponible como /mi-plugin
      run() {
        api.route.navigate("mi-pantalla")
      }
    },
    {
      name: "mi-plugin.action",
      title: "Acción rápida",
      run() { /* hacer algo */ }
    }
  ],
  bindings: [
    { key: "ctrl+shift+m", cmd: "mi-plugin.open", desc: "Abrir Mi Plugin" },
    { key: "ctrl+k", cmd: "mi-plugin.action", desc: "Acción rápida" },
  ]
})
```

### Modos

```tsx
const currentMode = api.mode.current()    // nombre del modo actual
const unsub = api.mode.push("mi-modo")    // push modo, retorna unsubscribe
```

## Slots — Inyectar JSX en la UI

Los slots son puntos de extensión donde un plugin puede inyectar contenido JSX.

### Slots built-in

| Slot | Dónde renderiza | Modo | Props |
|------|-----------------|------|-------|
| `app` | Toda la app | additivo | — |
| `app_bottom` | Parte inferior | additivo | — |
| `home_logo` | Logo en home | replace | `theme` |
| `home_prompt` | Prompt de home | replace | `theme`, `ref` |
| `home_prompt_right` | Derecha del prompt home | additivo | `theme` |
| `home_bottom` | Debajo del prompt home | additivo | `theme` |
| `home_footer` | Footer de home | single_winner | `theme` |
| `session_prompt` | Prompt de sesión | replace | `theme`, `session_id`, `visible`, `disabled`, `ref` |
| `session_prompt_right` | Derecha del prompt sesión | additivo | `theme`, `session_id` |
| `sidebar_title` | Título del sidebar | single_winner | `theme`, `session_id`, `title`, `share_url` |
| `sidebar_content` | Contenido del sidebar | additivo | `theme`, `session_id` |
| `sidebar_footer` | Footer del sidebar | single_winner | `theme`, `session_id` |

### Modos de renderizado

- **replace**: reemplaza el contenido del host (home_logo, home_prompt, session_prompt)
- **single_winner**: primer plugin que registra gana (home_footer, sidebar_title, sidebar_footer)
- **additivo** (default): se suma al contenido existente (app, sidebar_content, etc.)

### Ejemplo

```tsx
api.slots.register({
  id: "mi-plugin",
  order: 50,       // menor = antes
  slots: {
    home_logo(ctx) {
      return (
        <box flexDirection="column" alignItems="center">
          <text bold fg={ctx.theme.current.primary}>Mi Logo</text>
          <text fg={ctx.theme.current.textMuted}>v1.0.0</text>
        </box>
      )
    },
    sidebar_content(ctx) {
      return <text>Sesión: {ctx.session_id}</text>
    }
  }
})
```

## Theme — Colores y apariencia

```tsx
// Leer colores del tema actual
const colors = api.theme.current
// colors.primary, colors.error, colors.text, colors.background, colors.border, etc.
// Cada color es RGBA

// Operaciones
api.theme.selected    // "catppuccin-mocha" — nombre del tema activo
api.theme.mode()      // "dark" | "light"
api.theme.has("dracula")   // boolean — está instalado?
api.theme.set("dracula")   // cambiar tema
await api.theme.install("./mi-tema.json")  // instalar desde archivo
```

Tokens de color disponibles: `primary`, `secondary`, `accent`, `error`, `warning`, `success`, `info`, `text`, `textMuted`, `background`, `backgroundPanel`, `backgroundElement`, `backgroundMenu`, `border`, `borderActive`, `borderSubtle`, `diffAdded`, `diffRemoved`, `syntaxComment`, `syntaxKeyword`, `syntaxFunction`, `syntaxVariable`, `syntaxString`, y más.

## State — Leer estado de opencode

```tsx
// Sesiones
api.state.session.count()                              // número de sesiones
api.state.session.get("session-id")                    // Session | undefined
api.state.session.messages("session-id")               // Message[]
api.state.session.todo("session-id")                   // [{ content, status }]
api.state.session.diff("session-id")                   // [{ file, additions, deletions }]
api.state.session.status("session-id")                 // SessionStatus | undefined
api.state.session.permission("session-id")             // PermissionRequest[]
api.state.session.question("session-id")               // QuestionRequest[]

// LSP y MCP
api.state.lsp()    // [{ id, root, status }]
api.state.mcp()    // [{ name, status, error }]

// Paths
api.state.path.state      // ~/.local/share/opencode/...
api.state.path.config     // ~/.config/opencode/...
api.state.path.worktree
api.state.path.directory

// VCS
api.state.vcs.branch          // "main"
api.state.vcs.default_branch  // "main"

// Config completa
api.state.config
```

## KV Store — Persistencia simple

```tsx
api.kv.set("mi-contador", 42)
const count = api.kv.get<number>("mi-contador", 0)  // fallback si no existe
```

Almacenado en `state/kv.json`. **No está namespaced por plugin** — todos los plugins comparten el mismo store. Usa prefijos para evitar colisiones.

## Attention — Sonidos y notificaciones del sistema

```tsx
// Notificar con sonido
await api.attention.notify({
  title: "Tarea",
  message: "Compilación completada",
  notification: true,
  sound: { name: "done", volume: 0.8, when: "always" }
})

// Soundboard personalizado
const dispose = api.attention.soundboard.registerPack({
  id: "mi-pack",
  sounds: {
    default: "./sounds/default.mp3",
    error: "./sounds/error.mp3",
    done: "./sounds/success.mp3",
    question: "./sounds/question.mp3",
    permission: "./sounds/permission.mp3",
    subagent_done: "./sounds/subagent.mp3"
  }
})

api.attention.soundboard.activate("mi-pack")
api.attention.soundboard.list()
```

Sonidos built-in: `default`, `question`, `permission`, `error`, `done`, `subagent_done`.

## Event System

```tsx
api.event.on("session.created", (e) => {
  console.log("Nueva sesión:", e.properties.id)
})

api.event.on("message.updated", (e) => { /* ... */ })
api.event.on("tool.execute.after", (e) => { /* ... */ })
api.event.on("todo.updated", (e) => { /* ... */ })
api.event.on("permission.asked", (e) => { /* ... */ })
```

Eventos disponibles: `command.executed`, `file.edited`, `file.watcher.updated`, `installation.updated`, `lsp.client.diagnostics`, `lsp.updated`, `message.part.removed`, `message.part.updated`, `message.removed`, `message.updated`, `permission.asked`, `permission.replied`, `server.connected`, `session.created`, `session.compacted`, `session.deleted`, `session.diff`, `session.error`, `session.idle`, `session.status`, `session.updated`, `todo.updated`, `shell.env`, `tool.execute.after`, `tool.execute.before`, `tui.prompt.append`, `tui.command.execute`, `tui.toast.show`.

## Prompt Component

```tsx
let ref: TuiPromptRef | undefined

<api.ui.Prompt
  sessionID="abc"
  ref={(r) => ref = r}
  hint={<text fg="gray">Escribe / para comandos</text>}
  right={<text>info</text>}
  showPlaceholder={true}
  placeholders={{ normal: ["Ask me anything..."], shell: ["$ "] }}
/>

// Métodos del ref:
ref?.focus()
ref?.blur()
ref?.submit()
ref?.reset()
ref?.current  // TuiPromptInfo actual
```

## Plugin Management

```tsx
api.plugins.list()              // plugins instalados
api.plugins.activate("id")     // activar
api.plugins.deactivate("id")   // desactivar
api.plugins.add("spec")        // cargar en runtime
await api.plugins.install("npm-package", { global: false })
```

## Lifecycle

```tsx
const tui: TuiPlugin = async (api) => {
  api.lifecycle.onDispose(async () => {
    // cleanup al descargar el plugin
  })
  
  api.lifecycle.signal  // AbortSignal — se aborta antes de cleanup
}
```

## Renderer y SDK Client

```tsx
api.renderer   // CliRenderer — acceso raw al renderer de @opentui/core
api.client     // OpencodeClient — SDK client completo (session.create, session.prompt, etc.)
```

---

*Anterior: [[14-Hooks-Referencia-Completa|Hooks — Referencia Completa]] | Siguiente: [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]]*
