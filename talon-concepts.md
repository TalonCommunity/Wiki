# Talon Concepts

In order to script Talon, it is useful to understand some of its basic concepts: Talon files, Python files, modules, tags, contexts, actions, lists, and captures.

## Talon files

The primary way to extend talon is using `.talon` files placed in
`~/.talon/user/` or its subdirectories. A talon file comes in two parts: a
header defining the [context](#contexts) in which it is active, and a body that implements various behaviors within that context. The body of talon file can:

1. Define voice commands.
2. Implement/override the behavior of [actions](#actions).
3. Adjust [settings](/talon-settings).
4. Activate [tags](#tags).

An example talon file might look like this:

```
# This header defines the context in which this file applies.
os: windows
os: linux
app: Slack
app: slack.exe
app: Teams
-
# Anything below the dash is part of the body.
# If there is no header/dash then the body starts immediately.

# These define voice commands.
([channel] unread next | goneck): key(alt-shift-down)
insert code fragment:
    # A single command can perform a sequence of actions.
    insert("``````")
    key(left left left)
    key(shift-enter)
    key(shift-enter)
    key(up)

# This says how to implement the action app.tab_next.
action(app.tab_next): key(ctrl-tab)

# This activates the tag 'tabs'.
tag(): tabs
```

TODO: example of adjusting `settings()`.

### Voice command syntax

A voice command has the format `RULE: BODY`, where `RULE` determines what words activate the command, and `BODY` defines what the command does when activated:

```
# -------- RULE ----------------  ------ BODY -------
([channel] unread next | goneck): key(alt-shift-down)
```

This command, for example, will press the shortcut alt-shift-down whenever you say either “channel unread next”, “unread next”, or “goneck”.

Rules have a quite versatile syntax, similar to [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form), or regular expressions (but word- rather than character-oriented):

| Syntax | Description | Matches |
| --- | --- | --- |
| `foo` | Words | “foo” |
| `[foo]` | Optional | “foo” or “” (nothing) |
| `foo*` | Zero or more | “”, “foo”, “foo foo”, ... |
| `foo+` | One or more | “foo”, “foo foo”, ... |
| `foo\|bar` | Choice | “foo”, “bar” |
| `(foo)` | Grouping/precedence | “foo” |
| `{some_list}` | [List](#lists) | Depends on the list. |
| `<some_capture>` | [Capture](#captures) | Depends on the capture. |

TODO: Document the body syntax.

### Action syntax

In place of an ordinary rule, you can also implement an [action](#actions). In this case the rule has the form `action(NAME_OF_ACTION)`. The body syntax is the same. For example:

```
action(app.tab_next): key(ctrl-tab)
```

This means that whenever this file's context applies and the action `app.tab_next` is invoked, e.g. by being called by a Talon voice command, it will press the shortcut ctrl-tab. Unless, of course, the action is overridden in another, more specific, context.

### Activating tags and altering settings

TODO: describe how tags work


## Python files

Although Talon files are the primary way of extending Talon, there are some things that they can't do. In particular, they can't:

1. Declare [actions](#actions), although they can implement them.
2. Declare or override [lists](#lists), although they can use them in rules.
3. Declare or implement [captures](#captures), although they can use them in rules.
4. Run arbitrary Python code.

For those things you need Python files, which may also be placed in `~/.talon/user/` or its subdirectories. A good way to start most Talon Python files is:

```
from talon import Module, Context
mod = Module()
ctx = Context()
```

TODO: explain all this


## Modules

A *module* is a collection of related declarations. In particular, it can declare [actions](#actions), [lists](#lists), and [captures](#captures); for which, see below. In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

TODO: are there any interesting arguments to Module?

## Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can depend on include your OS, the name of the current application, the title of the current window, and the currently activated [tags](#tags). (TODO: is this everything?) Within a particular context, you can do everything you can do in a `.talon` file: define voice commands, implement/override the behavior of [actions](#actions), adjust [settings](/talon-settings), and activate [tags](#tags). For how to do this, see below.

In Python, you can construct a context like so:

```
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active. TODO: how do you add conditions in python?

## Actions

An action is a function that can be called by Talon voice commands, whose behavior can be overridden within different contexts. This is useful when the same operation has different keybindings in different applications. For example, the built-in Talon action `edit.save` is intended to perform the "save file" operation. In most applications this is performed via `ctrl-s`, but in Emacs it's `ctrl-x ctrl-s`.

Some actions, like `edit.save`, are built into Talon. But you can also declare your own actions from Python. Given a module `mod`, you can use `mod.action_class` to declare several actions:

```
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

A list associates sequences of spoken words with strings that can be used in voice commands. This is useful for commands that permit a choice from a list of options. TODO: give an example

Like actions, lists are defined by modules and can be overridden within specific contexts. 

## Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways.

TODO: give an example

## Tags

TODO: describe how tags work
