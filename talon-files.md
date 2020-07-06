# Talon Files

The primary way to extend talon is using `.talon` files placed in `~/.talon/user/` or its subdirectories. A talon file comes in two parts: a header defining the [context](https://talon.wiki/talon-concepts/#contexts) in which it is active, and a body that implements various behaviors within that context. The body of a talon file can:

1. Define voice commands.
2. Implement/override the behavior of [actions](https://talon.wiki/talon-concepts/#actions).
3. Adjust [settings](/talon-settings).
4. Activate [tags](#tags).

## Example file

An example talon file might look like this:

```
# This header defines the context in which this file applies.
os: windows
os: linux
app: Slack
app: slack.exe
app: Teams
# Anything above this dash is part of the header.
-
# Anything below the dash is part of the body.
# If there is no dash, then the body starts immediately.

# These define voice commands.
([channel] unread next | goneck): key(alt-shift-down)
insert code fragment:
    # A single command can perform a sequence of actions.
    insert("``````")
    key(left left left)
    key(shift-enter)
    key(shift-enter)
    key(up)

# This says how to implement the actions app.tab_next and app.tab_previous.
action(app.tab_next): key(ctrl-tab)
action(app.tab_previous): key(shift-ctrl-tab)

# This activates the tag 'tabs'.
tag(): tabs

# This adjusts settings (within this file's context).
settings():
    key_wait = 1.5
```

## Context header

TODO: explain the syntax and meaning of the context header.

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
| `(foo)` | Precedence/grouping | “foo” |
| `{some_list}` | [List](https://talon.wiki/talon-concepts/#lists) | Depends on the list. |
| `<some_capture>` | [Capture](https://talon.wiki/talon-concepts/#captures) | Depends on the capture. |

NB. If you see a backslash in the syntax example for choice, `foo\|bar`, ignore it; a quirk of Github's markdown parsing makes it necessary.

TODO: Document the body syntax.

## Implementing actions

In place of an ordinary rule, you can also implement an [action](https://talon.wiki/talon-concepts/#actions). In this case the rule has the form `action(NAME_OF_ACTION)`. The body syntax is the same. For example:

```
action(app.tab_next): key(ctrl-tab)
```

This means whenever this file's context applies and the action `app.tab_next` is invoked by a Talon voice command, it will press the shortcut ctrl-tab -- unless that action is overridden in some more specific context.

## Tags

Besides concrete features like an application's name or a window's title, a context can also select for *tags*. Tags can represent features many different applications may have, enough that it would be difficult to list all such applications in advance. For example, the tag `tabs` indicates the presence of tabs. Browsers have tabs, but so do some text editors, chat applications, terminals, etc.

Using tags, we can define a set of tab-related voice commands in one Talon file, and other application-specific Talon files can opt in to these commands by providing the `tabs` tag. Here's how that would look. In `tabs.talon`:

```
# This selects for the tag 'tabs'.
tag: tabs
-
(open | new) tab: app.tab_open()
last tab: app.tab_previous()
next tab: app.tab_next()
close tab: app.tab_close()
reopen tab: app.tab_reopen()
```

And then, in `firefox.talon`:

```
app: Firefox
-
# This activates the tag 'tabs'.
tag(): tabs
```

Of course, the commands we defined in `tabs.talon` just invoke corresponding [actions](https://talon.wiki/talon-concepts/#actions), so unless the default behavior of those actions is what we want, we'd also need to *implement* them in `firefox.talon`. Happily, in this case the default behavior suffices. Tags and actions often go together in this way.

## Settings

Talon files can also adjust settings; for more on this see [Talon Settings](https://talon.wiki/talon-settings/).

## Talon files vs Python files

Although Talon files are the primary way of extending Talon, there are some things that they can't do. In particular, they can't:

1. Declare [actions](https://talon.wiki/talon-concepts/#actions), although they can implement and invoke them.
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
