---
sidebar_position: 2
---

# Talon Modes

Talon has three basic modes:

| Mode                                             | Description                                                                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [command mode](./Command%20Mode/command_mode.md) | Your speech will be interpreted as commands by default.                                                                                                                       |
| [dictation mode](./dictation_mode.md)            | Your speech will be transcribed as plain text by default (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems. |
| sleep mode                                       | Talon will do nothing until it hears a commands that wakes it up.                                                                                                             |

:::info Terminology

The word mode refers to how Talon will respond differently to the same speech input depending on its current mode.
For example, saying `go top` in command mode will move the insertion point to the top of the document,
whilst in dictation mode the words `go top` will be inserted literally into the document.

:::

## Mode Switching

<!--- the source is in diagrams\basic_talon_modes.graphml --->

<img src="/img/basic_talon_modes.png/"
     alt="diagram showing the different Talon modes, and the voice commands used to switch between them"
 />

| Command          | Description                 |
| ---------------- | --------------------------- |
| `wake up`        | Enable speech recognition.  |
| `talon wake`     | Enable speech recognition.  |
| `go to sleep`    | Disable speech recognition. |
| `talon sleep`    | Disable speech recognition. |
| `dictation mode` | Switch to dictation mode.   |
| `command mode`   | Switch to command mode.     |

## Mode indicator

A [visual indicator](./talon-ui.md#visual-status-indicator) of the current mode is also available.

## Automatic Sleeping

It is possible to have Talon automatically go into sleep mode if no commands are spoken for a defined period of time.
To enable this, set the `user.listening_timeout_minutes` [setting](/docs/Customization/settings.md).

## Secondary Modes

Although command and dictation are considered the main modes, there are secondary modes as well.

For example, the current code language mode effects how Talon translates the spoken form of coding elements
into the written form. Saying `state case` whilst in `csharp` mode performs:

```talon
    actions.insert("case \nbreak;")
    actions.edit.up()
```

Whilst in ruby mode:

```talon
    actions.insert("when ")
```
