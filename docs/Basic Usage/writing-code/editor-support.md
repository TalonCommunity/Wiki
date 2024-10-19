# Editor Support

Writing code is possible in any application by activating the language using voice commands.

The alternative of using [title tracking](language-activation.md#title-tracking) activates languages in supported applications such as:
- VSCode
- Visual Studio (requires plugin), and 
- Notepad++.

## Editor Requirements for Title Tracking

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `filename` action to correctly extract the filename from the window title. See the [Visual Studio Code implementation](apps/vscode/vscode.py#L137-L153) for an example.
