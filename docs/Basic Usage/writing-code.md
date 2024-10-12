# Writing Code


### Programming languages

Specific programming languages may be activated by voice commands, or via title tracking.

Activating languages via commands will enable the commands globally, e.g. they'll work in any application. This will also disable the title tracking method (code.language in .talon files) until the "clear language modes" voice command is used.

Commands for enabling languages are defined in [language_modes.talon](core/modes/language_modes.talon).

By default, title tracking activates languages in supported applications such as VSCode, Visual Studio (requires plugin), and Notepad++.

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

