# Modes

Modes are property you can match in your `.talon` file context header. They are intended for switching on and off large sets of Talon functionality. For example Talon includes the 'command', 'dictation', and 'sleep' modes by default along with a few others. Multiple modes can be active at once.

The built in 'command' mode is special in that it is an implicit requirement in all `.talon` files that haven't explicitly specified a mode. So this `.talon` file would be active in command mode:

```config
-
insert test: "command mode active"
```

Whereas this one would only be active in dictation mode:

```config
mode: dictation
-
insert mode: "dictation mode active"
```

You can create custom modes but this is uncommon as [tags](tags) are better suited for most purposes. Like tags, multiple modes can be active at once. Unlike Tags, modes cannot be scoped to a particular context; modes always apply globally. The intent is that there should be a small enough number of them that they could be toggled using a short popup menu.

So why might you add a custom mode? The main reason is because you want to disable all normal voice commands so only the ones in your mode are active. An example might be where you were using a full screen computer game, and wanted to eliminate potential conflicts with commands outside the game context.

First you would declare the new mode in Python:

```python
from talon import Module

mod = Module()
mod.mode("single_application", desc="Non-multitasking mode (e.g. computer games)")
```

Then you might make a couple of generic 'mode entry' and 'mode exit' commands:

```config
^single application mode$:
    mode.enable("user.single_application")
    mode.disable("command")
```

```config
mode: user.single_application
-
^command mode$:
    mode.disable("user.single_application")
    mode.enable("command")
```

Note that I've shadowed the existing `command mode` command from [Talon Community](https://github.com/talonhub/community) so that it does the right thing when our mode is active.

After that we could define a set of commands which would be available in our game:

```config
mode: user.single_application
title: /My Game/
-
attack: key(enter)
```
