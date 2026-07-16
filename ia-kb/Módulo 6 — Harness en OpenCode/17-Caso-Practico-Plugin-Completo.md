# Caso Práctico — Plugin Completo

## Idea central

Vamos a construir un plugin real paso a paso: **SessionGuard** — un plugin server que protege archivos sensibles, notifica errores de sesión, inyecta contexto al system prompt, y registra una tool custom. Luego veremos cómo extenderlo con una variante TUI.

## Objetivo

Un plugin que:
1. Bloquea lectura de archivos `.env` y `.env.*`
2. Notifica al usuario cuando una sesión falla
3. Inyecta reglas al system prompt del agente
4. Registra una tool `session-status` que muestra estado de la sesión actual

## Paso 1: Scaffold

```bash
node .opencode/scripts/create-plugin.js \
  --name session-guard \
  --type local \
  --path ./.opencode/plugins/session-guard \
  --output ./opencode.json
```

Esto crea:

```
.opencode/plugins/session-guard/
└── index.js
```

Y agrega `"plugin": ["./plugins/session-guard/index.js"]` a `opencode.json`.

## Paso 2: Implementar el plugin base

```js
// .opencode/plugins/session-guard/index.js
import { tool } from "@opencode-ai/plugin"

export default {
  id: "session-guard",
  server: async (ctx) => {
    console.log(`[session-guard] Plugin activo en: ${ctx.directory}`)

    return {
      // Hook 1: Proteger archivos .env
      "tool.execute.before": async (input, output) => {
        if (input.tool === "read") {
          const path = output.args.filePath || ""
          if (path.includes(".env") && !path.includes(".env.example")) {
            throw new Error(
              "[session-guard] Lectura de archivo .env bloqueada. " +
              "Usa .env.example como referencia."
            )
          }
        }
      },

      // Hook 2: Notificar errores de sesión
      event: async (input) => {
        if (input.event.type === "session.error") {
          console.error("[session-guard] Error en sesión:", input.event.properties)
        }
      },

      // Hook 3: Inyectar reglas al system prompt
      "experimental.chat.system.transform": async (input, output) => {
        output.system.push(
          "## Reglas de seguridad (SessionGuard)\n" +
          "- Nunca incluyas credenciales en el código\n" +
          "- Usa variables de entorno para secrets\n" +
          "- Valida siempre la entrada del usuario"
        )
      },

      // Tool custom: session-status
      tool: {
        "session-status": tool({
          description: "Muestra el estado actual de la sesión y estadísticas",
          args: {},
          async execute(args, context) {
            return {
              title: "Estado de sesión",
              output: [
                `Sesión: ${context.sessionID}`,
                `Agente: ${context.agent}`,
                `Directorio: ${context.directory}`,
                `Worktree: ${context.worktree}`,
              ].join("\n")
            }
          }
        })
      },

      // Cleanup
      dispose: async () => {
        console.log("[session-guard] Plugin descargado")
      }
    }
  }
}
```

## Paso 3: Verificar

1. Reinicia opencode (o cambia `opencode.json` para hot reload)
2. Verifica en la consola: `[session-guard] Plugin activo en: /tu/directorio`
3. Intenta leer un `.env`: debería bloquearse con error
4. Lanza una tool `session-status`: debería mostrar la info
5. El system prompt del agente debería incluir las reglas de seguridad

## Paso 4: Extender con TUI (variante)

Si quieres agregar un toast de bienvenida cuando opencode inicia, necesitas un **segundo archivo** TUI (recuerda: server y TUI son mutuexclusivos por módulo).

```tsx
// .opencode/plugins/session-guard-tui.tsx
/** @jsxImportSource @opentui/solid */
import type { TuiPlugin } from "@opencode-ai/plugin/tui"

const tui: TuiPlugin = async (api) => {
  // Toast de bienvenida
  api.ui.toast({
    message: "SessionGuard activo — archivos .env protegidos",
    variant: "success",
    title: "SessionGuard"
  })

  // Registrar keybinding para ver estado rápido
  api.keymap.registerLayer({
    commands: [{
      name: "session-guard.status",
      title: "Session Status",
      category: "Plugin",
      namespace: "palette",
      run() {
        api.ui.toast({
          message: `Sesiones: ${api.state.session.count()}`,
          variant: "info",
          title: "SessionGuard"
        })
      }
    }],
    bindings: [{
      key: "ctrl+shift+s",
      cmd: "session-guard.status",
      desc: "Ver estado de sesión"
    }]
  })
}

export default { id: "session-guard-tui", tui }
```

Registrar en `tui.json`:

```json
{
  "plugin": ["./plugins/session-guard-tui.tsx"]
}
```

## Flujo del plugin

```
opencode inicia
  → Carga session-guard/index.js
  → Carga session-guard-tui.tsx
  
Durante la ejecución:
  → tool.execute.before: verifica si es .env → bloquea
  → event: escucha session.error → notifica
  → experimental.chat.system.transform: inyecta reglas
  → session-status: tool custom disponible
  → TUI: toast de bienvenida + keybinding
  
Al cerrar:
  → dispose: cleanup
```

## Ejercicio

Crea un plugin **"CommitReminder"** que:

1. **Hook `tool.execute.before`**: cuando el agente va a ejecutar `build` o `deploy`, verifica si hay commits sin push (via `git log origin/main..HEAD --oneline`)
2. **Si hay commits sin push**: lanza un toast de warning
3. **Hook `experimental.chat.system.transform`**: inyecta la regla "Siempre hacer commit antes de deployar"
4. **Tool custom `git-status`**: muestra resumen de archivos modificados, commits sin push, y branches

Pista: usa `ctx$\`git ...\`` para ejecutar comandos git dentro del plugin.

## Patrones comunes en plugins reales

| Plugin | Hooks que usa | Para qué |
|--------|---------------|----------|
| **envsitter-guard** | `tool.execute.before` | Bloquear lectura de .env |
| **opencode-notify** | `event` | Notificar en `session.idle` y `session.error` |
| **opencode-helicone-session** | `chat.headers` | Inyectar headers de Helicone |
| **opencode-vibeguard** | `tool.execute.before` | Redactar secrets antes de enviar al LLM |
| **opencode-wakatime** | `event` | Registrar tiempo de uso |
| **opencode-dynamic-context-pruning** | `experimental.session.compacting` | Customizar compactación |

## Recursos

- [[13-Sistema-de-Plugins|Sistema de Plugins]] — arquitectura y carga
- [[14-Hooks-Referencia-Completa|Hooks — Referencia Completa]] — API completo de hooks
- [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]] — plugins de UI
- [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]] — tools custom
- Template: https://github.com/sifex/opencode-plugin-template
- Awesome plugins: https://github.com/awesome-opencode/awesome-opencode

---

*Anterior: [[16-Creando-Tools-via-Plugins|Creando Tools vía Plugins]] | Inicio: [[Index|Curso de Desarrollo con IA]]*
