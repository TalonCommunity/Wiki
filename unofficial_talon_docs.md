---
sidebar: true
order: 2
---
# Unofficial Talon Docs
## Talon Files

The primary way to extend talon is using `.talon` files placed in `~/.talon/user/` or its subdirectories. A talon file comes in two parts: a header defining the [context](/unofficial_talon_docs#contexts) in which it is active, and a body that implements various behaviors within that context. The body of a talon file can:

1. Define voice commands.
2. Implement/override the behavior of [actions](/unofficial_talon_docs#actions).
3. Adjust [settings](/unofficial_talon_docs#talon-settings).
4. Activate [tags](/unofficial_talon_docs#tags).

### Example file

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

### Context header

TODO: explain the syntax and meaning of the context header.

### Voice commands

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
| `{some_list}` | [List](/unofficial_talon_docs/#lists) | Depends on the list. |
| `<some_capture>` | [Capture](/unofficial_talon_docs/#captures) | Depends on the capture. |

NB. If you see a backslash in the syntax example for choice, `foo\|bar`, ignore it; a quirk of Github's markdown parsing makes it necessary.

TODO: Document the body syntax.

### Implementing actions

In place of an ordinary rule, you can also implement an [action](/unofficial_talon_docs#actions). In this case the rule has the form `action(NAME_OF_ACTION)`. The body syntax is the same. For example:

```
action(app.tab_next): key(ctrl-tab)
```

This means whenever this file's context applies and the action `app.tab_next` is invoked by a Talon voice command, it will press the shortcut ctrl-tab -- unless that action is overridden in some more specific context.

### Tags

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

Of course, the commands we defined in `tabs.talon` just invoke corresponding [actions](/unofficial_talon_docs#actions), so unless the default behavior of those actions is what we want, we'd also need to *implement* them in `firefox.talon`. Happily, in this case the default behavior suffices. Tags and actions often go together in this way.

### Settings

Talon files can also adjust settings; for more on this see [Talon Settings](/unofficial_talon_docs#talon-settings).

### Talon files vs Python files

Although Talon files are the primary way of extending Talon, there are some things that they can't do. In particular, they can't:

1. Declare [actions](/unofficial_talon_docs#actions), although they can implement and invoke them.
2. Declare or override [lists](/unofficial_talon_docs#lists), although they can use them in rules.
3. Declare or implement [captures](/unofficial_talon_docs#captures), although they can use them in rules.
4. Run arbitrary Python code.

For those things you need Python files, which may also be placed in `~/.talon/user/` or its subdirectories. A good way to start most Talon Python files is:

```
from talon import Module, Context
mod = Module()
ctx = Context()
```

This sets you up with a module `mod` for declaring actions, lists, and captures; and a context `ctx` for implementing or overriding actions, lists, and captures, and otherwise doing whatever you could do in a Talon file. For more documentation on this, see [Talon Concepts](/unofficial_talon_docs#talon-concepts/).

## Talon Concepts

In order to script Talon, it is useful to understand some of its basic concepts: modules, contexts, actions, lists, and captures.

### Modules

A *module* is a collection of related declarations. In particular, it can declare [actions](/unofficial_talon_docs#actions), [lists](/unofficial_talon_docs#lists), and [captures](/unofficial_talon_docs#captures). In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

TODO: are there any interesting arguments to Module?

### Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can depend on include your OS, the name of the current application, the title of the current window, and the currently activated [tags](/unofficial_talon_docs#tags). (TODO: is this everything?) Within a particular context, you can do everything you can do in a `.talon` file: define voice commands, implement/override the behavior of [actions](/unofficial_talon_docs#actions), adjust [settings](https://talon.wiki/talon-settings/), and activate [tags](/unofficial_talon_docs#tags).

In Python, you can construct a context like so:

```
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active. TODO: how do you add conditions in python?

### Actions

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

This declares the actions `user.find_reverse` and `user.mangle` (all user-defined actions are prefixed with `user.`). It also gives a default implementation for `user.mangle` that simply prepends `__` to the input. As in this example, all actions must come with a docstring and type annotations for their arguments and return value.

TODO: how can you override actions in a python file using a context?

TODO: document `@ctx.action_class('win')` & similar.

### Lists

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

### Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways.

TODO: give an example


## Talon Settings

In a `.talon` file, a `settings()` block can be used to alter settings, both for Talon and for user modules. For example:

```
app: Emacs
-
settings():
    key_wait = 1.5
```

will set the `key_wait` setting to 1.5 whenever the current application is emacs.

The remainder of this page describes various important settings that you might want to meddle with.

### insert_wait

This will add a delay in ms between keys pressed in `insert()` actions. The default is 0.

### key_wait

This is a multiplier that changes how long Talon waits between sending keypresses to the operating system. I believe the default is 1.

### speech.debug
Enabling this (`speech.debug = 1`) will display the VAD in console. This is useful for determining when Talon is picking up your voice or other background noises. The default value is 0.

### speech.engine

Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. This really needs a page explaining it all to itself.

### speech.timeout

This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

It is measured in seconds; the default is 0.150, i.e. 150 milliseconds.

Note: It has been mentioned in the Beta before that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.
