---
title: "Paperclip: un meta-harness para dirigir agentes como una empresa"
tags:
  - arnes/nota
  - type/nota
  - arnes/orquestacion-multiagente
  - arnes/frameworks
channel: "NetworkChuck"
speaker: "NetworkChuck (Chuck Keith); aparece Dota, creador de Paperclip"
videoId: "7RVf25Rg0Mc"
source: "https://www.youtube.com/watch?v=7RVf25Rg0Mc"
language: "en"
playlistOrder: 50
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "you need to try Paperclip RIGHT NOW!"
related:
  - "[[7RVf25Rg0Mc - paperclip|Transcripción]]"
---

# Paperclip: un meta-harness para dirigir agentes como una empresa

NetworkChuck muestra, en un tutorial práctico y desenfadado (en inglés), **Paperclip**: un *meta-harness* que reúne agentes de distintos arneses (Claude Code, Codex, Hermes, OpenClaw, Pi) en una "empresa" donde los agentes son empleados con managers, organigrama, tareas, rutinas y trazabilidad. Aparecen breves intervenciones de Dota, creador de Paperclip. El hilo conductor es un problema real del estudio: cada vez que alguien tira de la cadena del inodoro, todos pierden la conexión al NAS. Para resolverlo, Chuck monta un "departamento de TI agéntico".

Para el harness engineering, el video ilustra una capa por encima del arnés individual: la orquestación de varios agentes heterogéneos mediante tareas intencionales (no conversación libre), jerarquía con escalamiento, aprobaciones humanas ("la junta directiva"), artefactos compartidos, secretos y rutinas programadas.

## Resumen

- **Meta-harness**: Paperclip no es un arnés de agente; ejecuta otros arneses (Claude Code, Codex, Hermes, Pi…) y los integra en una misma organización. Es "harness maxing": cualquier arnés o modelo nuevo se puede incorporar.
- **Agentes como empleados**: se "contratan" agentes con rol, manager y organigrama; el usuario es la junta directiva y aprueba contrataciones y decisiones.
- **Comunicación a través de tareas**: los agentes hablan entre sí mediante tareas, de forma intencional y enfocada, no en una "sala de conferencias" de agentes.
- **Escalamiento jerárquico**: si un agente se bloquea, devuelve el problema a su manager (el CEO); solo si este no lo resuelve llega al humano.
- **Trazabilidad**: actividad, línea de tiempo, artefactos y decisiones quedan registrados y son consultables por todos los agentes.
- **Rutinas**: tareas programadas con disparadores (por ejemplo, revisar el almacenamiento cada día o hacer el stand-up diario de los agentes).
- **Secretos y skills**: claves de API asignadas a agentes concretos y skills por agente (como una skill de Flare).
- **Portabilidad**: la organización completa (agentes, rutinas, tareas, adjuntos) se puede exportar e importar.
- **Resultado del caso**: los agentes no confirmaron la causa del inodoro, pero identificaron cuatro enlaces de fibra con transceptores SFP de un lote defectuoso (50 % de fallos en servicio), con miles de caídas de enlace.

## Contenido estructurado

### El problema: gestionar muchos agentes

Chuck tiene ocho agentes en su empresa. Gestionarlos es difícil: ¿cómo se habla con ellos?, ¿pueden hablar entre sí?, ¿quién hace qué?, ¿quién lleva el registro?, ¿qué pasa con la seguridad? En Paperclip, los agentes se convierten en empleados con managers y tareas, y se comunican a través de las tareas.

> Dota: "No he visto mucho valor real en una sala de conferencias de agentes o un pueblo de agentes donde simplemente los pones a hablar entre ellos."

### Plan: un departamento de TI agéntico

- **Dónde ejecutarlo**: para probar, en tu propio equipo (Mac, Linux o WSL2 en Windows). Para algo serio, en un servidor propio: una VM en Proxmox o un VPS en la nube.
- **Organigrama planeado**:
  - CEO: "Dumbledore", con Claude Code.
  - CTO: Ron (agente Hermes remoto).
  - Bajo Ron: Fred (ingeniero de redes) y George (ingeniero de almacenamiento), ambos Hermes.
  - Extras: un ingeniero de seguridad con Codex y uno de helpdesk con un modelo local.
- Los agentes Hermes ya existen, viven en sus propias VMs y tienen sus skills: "los contraté de LinkedIn, básicamente".

> "Estamos haciendo harness maxing. Salga el arnés o el modelo que salga, Paperclip es un meta-harness: podemos traerle cualquier otro arnés o modelo."

(Incluye un segmento patrocinado de Flare, una plataforma de inteligencia de amenazas centrada en identidad que vigila la dark web, Telegram y foros en busca de credenciales filtradas, cookies de sesión y logs de infostealers. Chuck lo retoma al final para integrarla con Paperclip.)

### Instalación y primer agente

1. Descargar el script de instalación y ejecutarlo (dos comandos; similar en Mac, Linux o WSL2).
2. En una VM, elegir la configuración avanzada (acceso por la red local); para la mayoría, *quick start*.
3. Abrir `localhost` (o la IP o dominio) en el puerto **3100**, crear la empresa y la primera cuenta.
4. Crear el CEO y elegir su arnés (Claude Code). Los arneses se ejecutan en la máquina donde corre Paperclip, así que hay que instalarlos allí: el primer intento falló porque Claude Code no estaba instalado; tras instalarlo e iniciar sesión, "retry".
5. El CEO arranca con una tarea de onboarding (con cuestionario opcional) y deja un elemento en la bandeja de entrada.

### Contratación y comunicación por tareas

- Para contratar a Ron, Paperclip genera un prompt que se le pasa al agente Hermes; llega una solicitud de aprobación y, al aprobarla, Ron queda contratado. Ron dice que espera la aprobación "de la junta": la junta es el usuario.
- Prueba: una tarea a Dumbledore para que pruebe a Ron. Dumbledore crea y asigna una subtarea a Ron, espera a que termine y confirma. Es la primera vez que un humano habla con un agente y un agente habla con otro.
- Dumbledore contrata al resto mediante tareas. Él mismo eligió nombres como Arthur Weasley (Codex) y Mad-Eye Moody (revisor de seguridad, Codex); otros: Watchdog, Helpdesk y Scanner, en **Pi** (otro arnés, bueno con modelos locales).
- Los agentes tienen una **skill de Paperclip**: se les puede hablar desde su propio canal (por ejemplo, pedirle a Ron vía Hermes que asigne una tarea a Mad-Eye Moody) y actúan en Paperclip.
- La organización ofrece organigrama, actividad y líneas de tiempo: "todo es rastreable".

### Proyectos, tareas, casos y escalamiento

- Se crea un proyecto para el problema y una tarea con todos los detalles, asignada al CEO.
- Dumbledore usa una función experimental, **cases** (casos), y reparte subtareas a Arthur, George, Fred y al scanner.
- Opciones de una tarea: pausar el subárbol, cancelar, ocultar; propiedades con tareas bloqueantes, tarea padre, revisores, aprobadores, monitores, watchdogs y casos; modos y proyectos.
- Escalamiento: si un agente se bloquea, no molesta al humano; se lo devuelve a Dumbledore, y solo si él no puede resolverlo llega a la junta.
- Chuck admite que no todo funciona perfecto (un agente sufría timeouts), pero el trabajo avanza.

### Artefactos, decisiones y línea de tiempo

- **Artefactos**: todo lo que producen los agentes (por ejemplo, el informe en markdown de Fred tras entrar en los switches y mapear la red del estudio).
- Arthur construyó un arnés para capturar los eventos y pidió a Mad-Eye Moody una revisión de seguridad.
- **Decisiones**: el CEO plantea preguntas al humano (¿todos pierden la conexión a la vez?, ¿hacer una prueba de descarga controlada?, ¿reemplazar el óptico?) y continúa con las respuestas.
- Un hallazgo intermedio: el SFP del Mac registró seis eventos de caída y subida de enlace en el día, sin eventos en el almacenamiento: "no es el storage". Apareció además un failover del día anterior que Chuck desconocía y para el que abrió un ticket.

### Rutinas

Una rutina es como una tarea programada:
- Ejemplo: "Cada día, revisa el almacenamiento del servidor Ceph y busca problemas de salud; informa del espacio restante y, si algo está bajo, crea una decisión para Chuck". Responsable: Fred.
- Disparadores (por ejemplo, cada día a las 10:00), además de secretos y variables. También se puede ejecutar a demanda ("run now").
- Resultado inmediato: una decisión sobre poca capacidad en el nivel SSD (20 TB libres).
- Chuck usa rutinas para el **stand-up diario** de sus agentes.

### Veredicto: no es el inodoro (según los agentes)

- Primer informe: no es el NAS, ni el router, ni spanning tree, ni un puerto defectuoso que arrastre a los demás. No pueden nombrar el disparador; un evento físico externo compartido tumba cuatro enlaces de fibra concretos del switch MikroTik en menos de 2 segundos, 36 veces en la semana registrada. La descarga del inodoro encaja, pero también una puerta, el compresor del aire acondicionado o una silla golpeando el gabinete.
- Tras investigar más: cuatro enlaces llevaban 15 meses rotos. Son **dos fallas superpuestas**:
  - Los puertos 3, 5, 13 y 19 no tienen margen y pierden sincronía unas 56 veces al día; el puerto 5 registra 20.052 caídas desde el arranque del switch, frente a 123 de un puerto comparable.
  - Algo ligado a la ocupación del edificio tumba de dos a cuatro de ellos en el mismo segundo, siete veces por día laborable.
- Causa raíz: transceptores SFP de terceros comprados en lotes en Amazon; todos los puertos afectados son de un lote con un 50 % de fallos en servicio. Solución: reemplazarlos por SFP oficiales de MikroTik (otro fabricante, otro lote).
- Chuck sigue creyendo que es el inodoro ("es mejor historia") y lo verificará en una o dos semanas.

### Integración con Flare: secretos y skills

1. Pide a Dumbledore que contrate a un agente con Claude Code (Opus 5); este contrata a "Filch".
2. En *Settings → Secrets* crea el secreto `Flare API key` y se lo asigna a Filch; más tarde añade `Flare tenant ID`, que el propio agente pidió mediante una decisión.
3. Filch tiene además una skill de Flare. Ejecuta el barrido, encuentra problemas y reparte tareas: Ron, restablecer contraseñas; Mad-Eye Moody, revisar.
4. Si un agente hace algo que no debería, se puede **pausar** su trabajo.

### Exportar la organización y stand-ups

- Desde la vista de organización se puede **exportar e importar** todo (agentes, rutinas, tareas, adjuntos): "es nuestra empresa".
- En otra instancia, con 10 agentes (incluida Luna, su agente de miniaturas), el stand-up diario es una rutina: cada agente cuenta lo que hizo y se hacen preguntas cruzadas (por ejemplo, Taylor pregunta a Hermione por las copias de seguridad de grabaciones que estaban expirando).

## Conceptos clave

- **Meta-harness**: capa que orquesta y ejecuta otros arneses de agentes (Claude Code, Codex, Hermes, Pi) sin ser un arnés en sí.
- **Harness maxing**: aprovechar cualquier arnés o modelo nuevo incorporándolo a la misma organización.
- **Agentes como empleados**: rol, manager, organigrama y contratación con aprobación humana.
- **Junta directiva**: el humano, en la cima de la jerarquía; aprueba contrataciones y responde decisiones.
- **Comunicación por tareas**: la colaboración entre agentes ocurre en tareas y subtareas, intencionales y enfocadas, no en chat libre.
- **Escalamiento**: los bloqueos suben por la jerarquía antes de llegar al humano.
- **Decisiones**: preguntas estructuradas del agente al humano que desbloquean el trabajo.
- **Rutinas**: tareas recurrentes con disparadores programados o ejecución a demanda.
- **Artefactos**: productos de los agentes, almacenados y accesibles para toda la organización.

## Herramientas y referencias mencionadas

- Paperclip (creador: Dota) y su función experimental *cases*
- Arneses: Claude Code, Codex, Hermes, OpenClaw, Pi; modelo Claude Opus 5
- Infraestructura: Ubuntu, Proxmox, VPS, WSL2, MikroTik, Ceph, transceptores SFP
- Flare (patrocinador, inteligencia de amenazas de identidad); Entra ID

## Referencias

- Transcripción: [[7RVf25Rg0Mc - paperclip|Transcripción completa]]
- Video: [you need to try Paperclip RIGHT NOW!](https://www.youtube.com/watch?v=7RVf25Rg0Mc) — NetworkChuck
