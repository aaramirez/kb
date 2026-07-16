# Sistema de Plugins

## Idea central

Los plugins son la capa de extensibilidad más poderosa de opencode: módulos JS/TS que se ejecutan dentro del proceso de la herramienta y pueden interceptar, modificar o ampliar cualquier aspecto del sistema — desde tools y permisos hasta la UI y los providers de LLM.

## Plugins vs Skills vs Agentes vs Tools

Antes de profundizar, es importante distinguir estas cuatro capas:

| | Plugin | Skill | Agente | Tool |
|---|---|---|---|---|
| **Qué es** | Módulo JS/TS ejecutable | Markdown SKILL.md | Prompt + configuración | Función callable |
| **Ubicación** | `.opencode/plugins/` o npm | `.opencode/skills/<name>/SKILL.md` | `.opencode/agents/` o `opencode.json` | `.opencode/tools/` |
| **Runtime** | In-process JS | Inyectado on-demand al contexto | LLM system prompt | In-process JS |
| **Se activa** | Siempre al startup | Cuando el agente llama `skill(name)` | En sesión o bajo demanda | Cuando el LLM llama la tool |
| **Puede definir agentes?** | Sí (V2) | No | Define sí mismo | No |
| **Puede definir tools?** | Sí | No | No | Es una tool |
| **Puede definir skills?** | Sí (V2) | Es un skill | No | No |

**La clave**: el plugin es la **capa meta**. Puede crear y modificar agentes, skills, tools, modelos, comandos y auth. Los demás son *cosas que el plugin puede manipular*.

## Dos tipos de plugin

### Server Plugin

Se ejecuta en el backend de opencode. Intercepta eventos del ciclo de vida: ejecución de tools, llamadas al LLM, permisos, sesiones, shell, etc.

```js
export default {
  id: "mi-server-plugin",
  server: async (ctx) => {
    // ctx contiene: client, project, directory, worktree, $, serverUrl
    return {
      "tool.execute.before": async (input, output) => { /* ... */ },
    }
  }
}
```

### TUI Plugin

Se ejecuta en la interfaz de terminal. Extiende la UI con rutas, dialogs, keybindings, slots JSX, themes, etc.

```tsx
/** @jsxImportSource @opentui/solid */
export default {
  id: "mi-tui-plugin",
  tui: async (api) => {
    // api contiene: ui, route, keymap, slots, theme, state, kv, attention, etc.
    api.slots.register({
      slots: {
        home_logo: (ctx) => <text>Mi Logo</text>
      }
    })
  }
}
```

**Son mutuexclusivos por módulo**: un archivo exporta `server` O `tui`, no ambos. Si necesitas ambos, usa dos archivos separados.

## Estructura de un plugin

### Plugin npm (publicado)

```
opencode-mi-plugin/
├── package.json          # "type": "module", depende de @opencode-ai/plugin
├── src/
│   └── index.ts          # export default { id, server } o { id, tui }
└── README.md
```

```json
// package.json
{
  "name": "opencode-mi-plugin",
  "version": "1.0.0",
  "type": "module",
  "exports": "./src/index.ts",
  "dependencies": {
    "@opencode-ai/plugin": "next"
  }
}
```

### Plugin local (directorio)

```
.opencode/plugins/
└── mi-plugin/
    ├── index.js          # export default { id, server }
    └── package.json      # dependencias necesarias (opcional)
```

## Contexto de entrada (PluginInput)

Cuando opencode ejecuta un plugin server, le pasa un contexto:

```ts
type PluginInput = {
  client: OpencodeClient    // SDK client para interactuar con opencode
  project: Project          // Información del proyecto actual
  directory: string         // Directorio de trabajo actual
  worktree: string          // Raíz del worktree git
  $: BunShell               // Shell API de Bun para ejecutar comandos
  serverUrl: URL            // URL del servidor opencode
  experimental_workspace: {
    register(type: string, adapter: WorkspaceAdapter): void
  }
}
```

Para plugins TUI, el contexto (`TuiPluginApi`) es diferente y más rico en capacidades de UI (ver [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]]).

## Configuración

### Server plugins — opencode.json

```json
{
  "plugin": [
    "opencode-helicone-session",
    ["opencode-wakatime", { "apiKey": "abc" }],
    "./plugins/mi-plugin.js"
  ]
}
```

- Cadenas simples: plugins npm o paths locales
- Tuplas `[string, options]`: plugin con opciones custom
- Las opciones se pasan como segundo argumento al plugin

### TUI plugins — tui.json

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "plugin": [
    "./plugins/custom-logo.tsx"
  ]
}
```

### V2 (beta) — plugins field

```json
{
  "plugins": [
    "opencode-acme@1.2.0",
    "./plugins/local.ts",
    { "package": "./plugins/reviewer.ts", "options": { "agent": "reviewer" } },
    "-acme.reviewer"
  ]
}
```

Soporta versiones, paths locales, opciones, y directivas de desactivación (prefijo `-`).

## Descubrimiento y carga

### Dónde busca opencode plugins

| Ubicación | Alcance |
|-----------|---------|
| `~/.config/opencode/opencode.json` | Global |
| `opencode.json` (proyecto) | Proyecto |
| `~/.config/opencode/plugins/` | Global |
| `.opencode/plugins/` | Proyecto |

### Orden de carga

```
1. Config global (~/.config/opencode/opencode.json)
2. Config proyecto (opencode.json)
3. Plugin dir global (~/.config/opencode/plugins/)
4. Plugin dir proyecto (.opencode/plugins/)
```

Los plugins npm se instalan automáticamente via **Bun** al iniciar opencode. Se cachean en `~/.cache/opencode/node_modules/`. No se ejecutan lifecycle scripts del package.json (mitigación de supply chain).

Los plugins locales se cargan directamente del filesystem. Si necesitan dependencias npm, deben declararlas en `.opencode/package.json` y opencode ejecuta `bun install` al startup.

### Ejecución

Los plugins se cargan **eagerly al startup** — no hay lazy loading. Cada plugin se ejecuta una vez, retorna sus hooks/transforms, y estos se registran en cadena.

## Hot Reload

- Cambios en archivos de configuración (`opencode.json`, `tui.json`) → opencode recarga automáticamente los plugins afectados
- En V2, las scoped registrations se liberan y re-registran
- Cambios en versiones npm → requieren restart manual
- Cambios en dependencias locales → requieren restart si no cambió ningún archivo watched

## Seguridad

**No hay sandboxing**. Un plugin cargado tiene acceso completo al runtime de Node.js/Bun:

- Puede leer y escribir archivos
- Puede ejecutar comandos shell
- Puede interceptar y modificar cualquier tool call
- Puede cambiar permisos (via `permission.ask` hook)
- Puede modificar el system prompt
- Puede inyectar headers HTTP
- Puede acceder a credenciales del SDK client

Los plugins npm **no ejecutan lifecycle scripts** (una mitigación parcial), pero una vez en el proceso, tienen acceso total. Solo instala plugins de fuentes confiables.

## Lifecycle

```
opencode inicia
  → Descubre plugins (auto-scan + config)
  → Instala npm plugins (Bun, cache)
  → Ejecuta cada plugin con PluginInput
  → Plugin retorna hooks/transforms
  → Hooks se registran en cadena
  → ... opencode funciona ...
  → Cambio en config → hot reload (re-ejecuta plugins afectados)
  → opencode cierra → dispose() se llama en cada plugin
```

## Ejemplo mínimo

```js
// .opencode/plugins/hello-plugin/index.js
export default {
  id: "hello",
  server: async (ctx) => {
    console.log(`Plugin hello cargado en: ${ctx.directory}`)
    return {
      dispose: async () => {
        console.log("Plugin hello descargado")
      }
    }
  }
}
```

```json
// opencode.json (agregar)
{
  "plugin": ["./plugins/hello-plugin/index.js"]
}
```

## Siguientes pasos

- [[14-Hooks-Referencia-Completa|Hooks — Referencia Completa]] para el API completo de eventos
- [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]] para plugins de interfaz
- [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]] para herramientas custom
- [[17-Caso-Practico-Plugin-Completo|Caso Práctico — Plugin Completo]] para un ejemplo paso a paso

---

*Anterior: [[12-Poniendolo-Todo-Junto|Poniéndolo Todo Junto]]*
