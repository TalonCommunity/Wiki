# Actions

An action is a specially registered Python function that can be called by Talon voice commands. The code in `.talon` files ends up using built in or user defined actions for all its behavior. Consider this example:

```config
my command:
    text = "hello"
    mangled_text = user.mangle(text)
    insert(mangled_text)
    edit.save()
```

In this case the `my command` voice command calls three actions: `user.mangle`, `insert`, and `edit.save()`. A few actions like `insert` are defined and implemented by Talon. Other actions, like `edit.save`, are defined by Talon but not implemented (more on this later). You can also define your own custom actions like `user.mangle`. Note that you can't just call arbitrary Python functions from `.talon` files, they need to be defined as actions first. This can be done as follows:

```python
from talon import Module

mod = Module()

@mod.action_class
class Actions:
    def find_reverse(): "Begins a reverse search."
    def mangle(s: str) -> str:
        "Mangles the input string in the appropriate manner."
        return "__" + s
```

This declares the actions `user.find_reverse` and `user.mangle` (all user-defined actions are prefixed with `user.`). It also gives a default implementation for `user.mangle` that simply prepends `__` to the input. As in this example, all actions must come with a docstring and type annotations for their arguments and return value.

We are also able to override the implementation of actions depending on the context in which they are used. This is useful when the same operation has different keybindings in different applications. For example, the built-in Talon action `edit.save` is intended to perform the "save file" operation. In most applications this is performed via `ctrl-s`, but in Emacs it's `ctrl-x ctrl-s`. Let's say we want to override the edit.save action to make it work properly in Emacs and also wanted to implement/override the two actions we declared above. This shows how you can do that:

```python
from talon import Context, actions

# Define a context that applies when we have an Emacs window focussed
ctx = Context()
ctx.matches = "app: Emacs"

# Override a single action within the given Context.
# Note we don't have to specify type annotations or a docblock when
# overriding actions since those are inherited from the definition.
@ctx.action("edit.save")
def emacs_save():
    actions.key("ctrl-x ctrl-s")

# Override multiple "user." actions within the given context. The names of the class functions correspond to the actions we're overriding.
@ctx.action_class("user")
class MyEmacsActions:
    def find_reverse():
        actions.key("ctrl-r")

    def mangle(s):
        if s == "other string":
            return "emacs__" + s
        else:
            # This will call the next most specific action implementation (in our case the
            # default one specified on the module). This lets you selectively override
            # existing behavior.
            return actions.next(s)
```

So now when we use the `user.mangle("some string")` action in a `.talon` file or `actions.user.mangle("some string")` in a `.py` file then we'll get `"__some string"` by default. However if our "app: Emacs" context matches and the argument is 'other string' then we'll get `"emacs__other string"`.

Actions are self-documenting. A list of all defined actions can be accessed via the Talon Console with `actions.list()`.