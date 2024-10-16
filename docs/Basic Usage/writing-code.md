

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

In title tracking mode, Talon attempts to determine the coding language from the window's title.

### Current Language

The current language is shown in the output of the [help scope](/docs/Help/help-commands.md#help-scope) command.

It can also be optionally shown by the [Talon HUD](/docs/Integrations/Details/talon-hud.md) integration.

<img src="/img/talon_hud_cs.png/"
     alt="diagram showing the talon hud integration whilst ay sea sharp file is being edited"
 />

- 
### Programming languages

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `filename` action to correctly extract the filename from the window title. See the [Visual Studio Code implementation](apps/vscode/vscode.py#L137-L153) for an example.

Python, C#, Talon and JavaScript language support is broken up into multiple tags in an attempt to standardize common voice commands for features available across languages. Each tag is defined in a .talon file named after a `user.code_` tag (e.g., `user.code_functions` → `functions.talon`) containing voice commands and a Python file declaring the actions that should be implemented by each concrete language implementation to support the voice commands. These files include:

- `lang/tags/comment_block.{talon,py}` - block comments (e.g., C++'s `/* */`)
- `lang/tags/comment_documentation.{talon,py}` - documentation comments (e.g., Java's `/** */`)
- `lang/tags/comment_line.{talon,py}` - line comments (e.g., Python's `#`)
- `lang/tags/data_null.{talon,py}` - null & null checks (e.g., Python's `None`)
- `lang/tags/data_bool.{talon,py}` - booleans (e.g., Haskell's `True`)
- `lang/tags/functions.{talon,py}` - functions and definitions
- `lang/tags/functions_common.{talon,py}` - common functions (also includes a GUI for picking functions)
- `lang/tags/imperative.{talon,py}` - statements (e.g., `if`, `while`, `switch`)
- `lang/tags/libraries.{talon,py}` - libraries and imports
- `lang/tags/libraries_gui.{talon,py}` - graphical helper for common libraries
- `lang/tags/object_oriented.{talon,py}` - objects and classes (e.g., `this`)
- `lang/tags/operators_array.{talon,py}` - array operators (e.g., Ruby's `x[0]`)
- `lang/tags/operators_assignment.{talon,py}` - assignment operators (e.g., C++'s `x += 5`)
- `lang/tags/operators_bitwise.{talon,py}` - bitwise operators (e.g., C's `x >> 1`)
- `lang/tags/operators_lambda.{talon,py}` - anonymous functions (e.g., JavaScript's `x => x + 1`)
- `lang/tags/operators_math.{talon,py}` - numeric, comparison, and logical operators
- `lang/tags/operators_pointer.{talon,py}` - pointer operators (e.g., C's `&x`)

Language-specific implementations of the above features are in files named `lang/{your-language}/{your-language}.py`.

To add support for a new language, ensure appropriate extension is added/uncommented in the [`language_extensions` dictionary in language_modes.py](core/modes/language_modes.py#L9). Then create the following files:

- `lang/{your-language}/{your-language}.py`
- `lang/{your-language}/{your-language}.talon`

Activate the appropriate tags in `{your-language}.talon` and implement the corresponding actions in `{your-language}.py`, following existing language implementations. Put additional voice commands for your language (not shared with other languages) in `{your-language}.talon`.

