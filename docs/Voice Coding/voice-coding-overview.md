---
sidebar_position: 1
---

# Voice Coding Overview

Talon community offers commands for inserting code in numerous languages. [Formatters](formatters.md) make dictating identifiers easier. [Operator commands](operators.md) support dictating things like variable assignment, mathematical operators, and comparison operators. [Symbol](symbols.md) commands allow greater flexibility and handling paired delimiters like parentheses. [Snippets](snippets.md) allow efficiently dictating formulaic code patterns and are used for things like control flow statements, class and function definitions, return statements and more. [Additional commands](language-specific.md) exist on a per language basis to make common tasks easier.

[Cursorless](https://www.cursorless.org/docs/user/installation/) offers the state of the art approach to editing code by voice.

## Activating Languages

Community support for specific programming languages may be activated by voice commands, or via title tracking.

The command `force {user.language_mode}`, where \{user.language_mode\} is a supported language name, activates support for the specified language. For example, `force python` makes Python the active programming language. This disables language detection through title tracking until you say `clear language modes`.

By default, title tracking activates languages in supported applications such as VSCode, Visual Studio (requires plugin), and Notepad++ by automatically using the extension of the active file to infer the active programming language.

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `win.filename` action to correctly extract the filename from the window title. See the `win.filename` action implementation in the [Visual Studio Code Python file](https://github.com/talonhub/community/blob/7bab2d1e3a4548fafbd5a2a4612b021c3a10d926/apps/vscode/vscode.py#L186) for an example.
