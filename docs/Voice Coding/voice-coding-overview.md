---
sidebar_position: 1
---

# Voice Coding Overview

Talon community offers commands for inserting code in numerous languages. [Formatters](formatters.md) make dictating identifiers easier. [Operator commands](operators.md) support dictating things like variable assignment, mathematical operators, and comparison operators. [Snippets](snippets.md) allow efficiently dictating formulaic code patterns and are used for things like control flow statements, class and function definitions, return statements and more. [Additional commands](language-specific.md) exist on a per language basis to make common tasks easier.

[Cursorless](https://www.cursorless.org/docs/user/installation/) offers the state of the art approach to editing code by voice.

Talon support for specific programming languages may be activated by voice commands, or via title tracking.

The command `force (language name)` will activate the commands for the specified language globally, e.g. they'll work in any application. This will also disable the title tracking method until the `clear language modes` voice command is used to return to using automatic language activation.


By default, title tracking activates languages in supported applications such as VSCode, Visual Studio (requires plugin), and Notepad++ by automatically using the extension of the active file to infer the active programming language.

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `filename` action to correctly extract the filename from the window title. See the `filename` action implementation in the [Visual Studio Code python file](https://github.com/talonhub/community/blob/main/apps/vscode/vscode.py) for an example.