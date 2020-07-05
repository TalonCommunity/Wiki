# Talon Files

The primary way to extend talon is using `.talon` files placed in `~/.talon/user/` or its subdirectories. A talon file comes in two parts: a header defining the [context](https://talon.wiki/talon-concepts/#contexts) in which it is active, and a body that implements various behaviors within that context. The body of talon file can:

1. Define voice commands.
2. Implement/override the behavior of [actions](https://talon.wiki/talon-concepts/#actions).
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

# These define voice commands.
([channel] unread next | goneck): key(alt-shift-down)
insert code fragment:
    # A single command can perform a sequence of actions.
    insert("``````")
    key(left left left)
    key(shift-enter)
    key(shift-enter)
    key(up)

# This says how to implement the action app.tab_next within this context.
action(app.tab_next): key(ctrl-tab)

# This activates the tag 'tabs'.
tag(): tabs
```

TODO: example of adjusting `settings()`.

## Voice commands

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
| `{some_list}` | [List](https://talon.wiki/talon-concepts/#lists) | Depends on the list. |
| `<some_capture>` | [Capture](https://talon.wiki/talon-concepts/#captures) | Depends on the capture. |

TODO: Document the body syntax.

## Implementing actions

In place of an ordinary rule, you can also implement an [action](/talon-concepts/#actions). In this case the rule has the form `action(NAME_OF_ACTION)`. The body syntax is the same. For example:

```
action(app.tab_next): key(ctrl-tab)
```

This means that whenever this file's context applies and the action `app.tab_next` is invoked, e.g. by being called by a Talon voice command, it will press the shortcut ctrl-tab. Unless, of course, the action is overridden in another, more specific, context.

## Tags

TODO: describe how tags work

## Settings

TODO: describe how settings work

## Talon files vs Python files

Although Talon files are the primary way of extending Talon, there are some things that they can't do. In particular, they can't:

1. Declare [actions](https://talon.wiki/talon-concepts/#actions), although they can implement them.
2. Declare or override [lists](https://talon.wiki/talon-concepts/#lists), although they can use them in rules.
3. Declare or implement [captures](https://talon.wiki/talon-concepts/#captures), although they can use them in rules.
4. Run arbitrary Python code.

For those things you need Python files, which may also be placed in `~/.talon/user/` or its subdirectories. A good way to start most Talon Python files is:

```
from talon import Module, Context
mod = Module()
ctx = Context()
```

This sets you up with a module `mod` for declaring actions, lists, and captures; and a context `ctx` for implementing or overriding actions, lists, and captures, and otherwise doing whatever you could do in a Talon file. For more documentation on this, see [Talon Concepts](https://talon.wiki/talon-concepts/).
