# Talon Concepts

In order to script Talon, it is useful to understand some of its basic concepts: modules, contexts, actions, lists, and captures.

## Modules

A *module* is a collection of related declarations. In particular, it can declare [actions](#actions), [lists](#lists), and [captures](#captures). In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

TODO: are there any interesting arguments to Module?

## Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can depend on include your OS, the name of the current application, the title of the current window, and the currently activated [tags](#tags). (TODO: is this everything?) Within a particular context, you can do everything you can do in a `.talon` file: define voice commands, implement/override the behavior of [actions](#actions), adjust [settings](https://talon.wiki/talon-settings/), and activate [tags](https://talon.wiki/talon-files/#tags).

In Python, you can construct a context like so:

```
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active. TODO: how do you add conditions in python?

## Actions

An action is a function that can be called by Talon voice commands, whose behavior can be overridden within different contexts. This is useful when the same operation has different keybindings in different applications. For example, the built-in Talon action `edit.save` is intended to perform the "save file" operation. In most applications this is performed via `ctrl-s`, but in Emacs it's `ctrl-x ctrl-s`.

Some actions, like `edit.save`, are built into Talon. But you can also declare your own actions from Python. Given a module `mod`, you can use `mod.action_class` to declare several actions:

```python
@mod.action_class
class Actions:
    def find_reverse(): "Begins a reverse search."
    def mangle(s: str) -> str:
        "Mangles the input string in the appropriate manner."
        return "__" + s
```

This declares the actions `user.find_reverse` and `user.mangle` (all user-defined actions are prefixed with `user.`). It also gives a default implementation for `user.mangle` that simply prepends "__" to the input. As in this example, all actions must come with a docstring and type annotations for their arguments and return value.

TODO: how can you override actions in a python file using a context?

TODO: document `@ctx.action_class('win')` & similar.

## Lists

A list associates sequences of spoken words with strings that can be used in voice commands. This is useful for commands that permit a choice from a list of options. for example, if you wanted to say "launch APPNAME" in order to launch one of several applications, you could do it using a list, like so (assuming you have a module `mod` and a context `ctx`):

```python
mod.list('launch', desc='Launchable applications')
ctx.lists['self.launch'] = {
    "firefox": "firefox",
    "terminal": "gnome-terminal",
    "emacs": "emacsclient -nc",
}
```

This sets up a list that recognizes the words "firefox", "terminal", and "emacs", and maps them to the corresponding commands. We can use this list in a talon file to define the desired voice command: 

```
launch {user.launch}: user.system_command(user.launch)
```

We refer to our new list as `{user.launch}`; curly braces are the syntax for using lists, and all user-defined lists are named `user.WHATEVER`. The value that our list produced, in this case, the command for our application, is available in the body of the command as `user.launch`, or just as `launch`.

TODO: explain in more detail how variable binding works here. What if we had done `{user.launch}+` instead? or `({user.launch} | foo)`?

Like actions, lists are declared by modules and can be overridden within specific contexts. TODO: explain why this would be useful.

## Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways.

TODO: give an example
