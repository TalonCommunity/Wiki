# Language Activation

Specific programming languages may be activated by explicit voice commands, or automatically detected using a technique called title tracking.

By default, title tracking activates languages in supported applications such as VSCode, Visual Studio (requires plugin), and Notepad++.

### Voice Commands

Voice commands will activate the specified language globally across all applications. Simply say `force` prior to the language name, for example
`force typescript`.

This method might be useful if for example writing documentation in Microsoft Word and title tracking cannot be used.

Note that using voice commands to specify the language, disables the title tracking method until the `clear language modes` voice command is used.

### Title Tracking

In title tracking mode, Talon attempts to determine the coding language from the window's title. This requires that the filename (including extension)
is included in the window's title.

The extensions recognized by talon are listed for each [programming language](programming-languages.md).

## Current Language

The current language is shown in the output of the [help scope](/docs/Help/help-commands.md#help-scope) command.

It can also be optionally shown by the [Talon HUD](/docs/Integrations/Details/talon-hud.md) integration.

<img src="/img/talon_hud_cs.png/"
     alt="diagram showing the talon hud integration whilst ay sea sharp file is being edited"
 />
