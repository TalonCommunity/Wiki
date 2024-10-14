# Help Commands

Talon has an inbuilt help system to assist you knowing what to say instead of using the keyboard and mouse.

Some of these display information that is readily understandable. These include:

| Command                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `help alphabet`              | show the spoken [alphabet](/docs/Basic%20Usage/single-characters.md#talon-alphabet) for pressing individual letters          |
| `help arrows`              | show the spoken forms of the [arrow keys](/docs/Basic%20Usage/single-characters.md#arrow-keys)       |
| `help function keys`              | show the spoken forms of the [function keys](/docs/Basic%20Usage/single-characters.md#function-keys)       |
| `help formatters`, `help format`, `format help`  | show the spoken forms of the [function keys](/docs/Basic%20Usage/single-characters.md#function-keys)       |
| `help modifier`              | show the spoken forms of the [modifier keys](/docs/Basic%20Usage/single-characters.md#talon-alphabet)       |
| `help numbers`              | best to read [here](/docs/Basic%20Usage/single-characters.md#numbers) for help on numbers         |
| `help punctuation`              | show the spoken forms for the punctuation keys      |
| `help re formatters`, `help re format`, `re format help`              | show help for reformatting the currently selected text      |
| `help special keys`              | show the spoken forms for the [special keys](/docs/Basic%20Usage/single-characters.md#es-special-keys), such as `home`       |
| `help snip`              | show the snippet related commands       |
| `help symbols`              | show the spoken forms of [keyboard symbols](/docs/Basic%20Usage/single-characters.md#symbols), such as `dollar sign`       |

:::note

The information displayed by help commands is personalized.
For example, if you have customized the alphabet then saying `help alphabet` will show those customizations.

:::

## Help Commands

Apart from the help commands shown above, there are the following commands as well:

| Command                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `help help`                  | show all the help commands available                          |
| `help active`                | show all currently available commands (available in the frontmost application)                            |
| `help context`               | shows all commands including context info  |
| `help context <help_contexts>`  | shows help about the specified contexts - for example, `help context vscode` |
| `help search <phrase>`       | shows help about all commands related to the specified phrase - for example, `help search tab` displays all tab-related commands  |
| `help scope`                 | show the currently active modes, tags, and miscellaneous status info                |

### Help Scope

This shows the currently active modes, tags, and miscellaneous status info.

For example, under `Modes` we see that `command` is listed. This shows that we are in [command mode](/docs/Basic%20Usage/command_mode.md),
and if we were in [dictation mode](/docs/Basic%20Usage/dictation_mode.md) this would show `dictation` instead.

Under Tags we see that [browser](/docs/Resource%20Hub/Apps/App%20Classes/browsers.md) is listed. This shows that Talon has recognized that the active application
(which we can see from further down is firefox), is [classified](/docs/Resource%20Hub/Apps/overview.md#application-classes) as a browser.

<img src="/img/help_scope.png/"
     alt="screenshot of the output of the help scope command"
 />

If running `notepad++` and with the file `something.cs` open, we can note the following in the `help scope` window:

Talon has recognized that the `win.file_ext` is `.cs`, and that the `code.language` is `csharp`.

<img src="/img/help_scope_notepad_csharp.png"
     alt="screenshot of the output of the help scope command"
 />

## Navigating Help Windows

Once say help window is open, the following commands are available:

| Command                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `help next`, `help previous` | go to the next or previous page of help items if there are a lot |
| `help close`                 | hide any open help window again                                  |
| `help <number>`                 | shows detailed help about the numbered item - for example `help eleven` to open the item numbered 11    |
| `help return`                 | when showing detailed help, this returns to showing the main help page    |
