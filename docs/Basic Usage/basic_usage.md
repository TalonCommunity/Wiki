# Basic Usage

[applications](/docs/Resource%20Hub/Apps/overview.md)
:::warning fix wording enter
:::



## Talon Modes

Talon has three basic modes by default:

| Mode          | Description                 |
| ---------------- | --------------------------- |
| **command mode**        | Your speech will be interpreted as commands by default.  |
| **dictation mode**        | Your speech will be transcribed as plain text by default (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems.  |
| **sleep mode** | Talon will do nothing until it hears a commands that wakes it up.|


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

There are the following ways to keep track of what mode you are in with a visual icon:

1. Enable the [mode indicator feature](https://github.com/talonhub/community/tree/main/plugin/mode_indicator) in the community repository.

2. Install the [Talon HUD](/docs/Integrations/Details/talon-hud.md) 

:::warning
Fix all references to `(https://github.com/talonhub/community/tree`
:::

