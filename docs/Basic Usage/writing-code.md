# Writing Code

Although it may be possible to write code only with the features described in command mode,
there are additional features in Talon community to make this more efficient.

When you say the voice command for a programming element such as `state case`, Talon inserts the appropriate characters
for your current coding language. Saying `state case` whilst in `csharp` mode performs:

```talon
    actions.insert("case \nbreak;")
    actions.edit.up()
```

Whilst in ruby mode:
```talon
    actions.insert("when ")
```

This means that Talon must know what is the current programming language.
see the section below on language activation for details.

Before that, there may be setup required for your development environment, see below for details.

:::tip Videos and Demonstrations

Here are some [videos and demonstrations](/docs/Resource%20Hub/talon_related_resources.md) of using Talon to write code.
Don't worry if it appears overwhelming, some were made by very experienced users
highlighting how efficiently coding using Talon can be.

:::

## Language Activation


Specific programming languages may be activated by explicit voice commands, or automatically detected using a technique called title tracking.

By default, title tracking activates languages in supported applications such as VSCode, Visual Studio (requires plugin), and Notepad++.

### Voice Commands

Voice commands will activate the specified language globally across all applications. Simply say `force` prior to the language name, for example
`force typescript`.

This method might be useful if for example writing documentation in Microsoft Word  and  title tracking cannot be used.

Note that using voice commands to specify the language, disables the title tracking method until the `clear language modes` voice command is used.

There is no special system setup required when using this technique.

### Title Tracking

In title tracking mode, Talon attempts to determine the coding language from the window's title. This requires that the filename (including extension)
is included in the window's title.

## Current Language

The current language is shown in the output of the [help scope](/docs/Help/help-commands.md#help-scope) command.

It can also be optionally shown by the [Talon HUD](/docs/Integrations/Details/talon-hud.md) integration.

<img src="/img/talon_hud_cs.png/"
     alt="diagram showing the talon hud integration whilst ay sea sharp file is being edited"
 />

## Video Demonstrations
## IDE Setup

### Programming languages

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `filename` action to correctly extract the filename from the window title. See the [Visual Studio Code implementation](apps/vscode/vscode.py#L137-L153) for an example.
