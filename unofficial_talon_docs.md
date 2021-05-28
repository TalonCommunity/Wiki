---
sidebar: true
order: 2
published: true
---
# Unofficial Talon Docs

## Talon Files

The primary way to extend talon is using `.talon` files placed in `~/.talon/user/` or its subdirectories. A talon file comes in two parts: a header defining the [context](/unofficial_talon_docs#contexts) in which it is active, and a body that implements various behaviors within that context. The body of a talon file can:

* Define voice commands.
* Implement/override the behavior of [actions](/unofficial_talon_docs#actions).
* Adjust [settings](/unofficial_talon_docs#talon-settings).
* Activate registered [tags](/unofficial_talon_docs#tags).
* Activate registered [apps](/unofficial_talon_docs#apps)

### Example file

An example talon file might look like this:

```
# Comments start with a # sign, and they must always be on their own line.
#
# This part, the context header, defines under which circumstances this file applies.
os: windows
os: linux
app: Slack
app: Teams
# Anything above this (single!) dash is part of the header.
-
# Anything below the dash is part of the body.
# If there is no dash, then the body starts immediately.

# These define voice commands.
([channel] unread next | goneck): key(alt-shift-down)
insert code fragment:
    # A single command can perform a sequence of actions.
    insert("``````")
    key(left left left)
    # the number of times the key should be pressed can be specified after a colon
    key(shift-enter:2)
    key(up)

# This says how to implement the actions app.tab_next and app.tab_previous.
action(app.tab_next): key(ctrl-tab)
action(app.tab_previous): key(shift-ctrl-tab)

# This activates the tag 'user.tabs'.
tag(): user.tabs

# This adjusts settings (within this file's context).
settings():
    key_wait = 1.5
```

### Context header

The context header specifies when the body of the file will be activated. That is, only when the requirements of the header are met, the settings, tags, actions and commands in the body will be available. This enables you to specify commands that are only available for specific windows, applications, etc.

The following requirements can be set:

`os`
: require specific operating systems; currently either `linux`, `mac`, `windows`

`tag`
: require a specific tag

`mode`
: only active for specific talon modes (like `command`, `dictation`, `sleep` et al.)

`app`
: match applications by explicitly declared, well-known name

`app.name`
: match applications by name (TODO where does Talon read this out?)

`app.exe`
: match applications by executable, like `/usr/lib/firefox/firefox` or `firefox.exe`

`app.bundle`
: match applications by their MacOS bundle, like `com.mozilla.Firefox`

`title`
: match a window title

`code.language`
: specify a currently active programming language

Additionally, you can create user `scope`s. TODO: add a reference for user scopes

`os`, `tag`, and `mode` are (usually? necessarily?) matched literally (like `os: windows`), whereas `app.exe`, `title` etc. can also be matched by regular expression, like `title: /- Visual Studio Code/`. The regular expression only needs to match some part of the text, it does not require a total match. For example, the title `firefox.talon - Visual Studio Code` is matched by the regex `/Visual Studio Code/`.

Each kind of requirement can be listed several times. Entries of the same kind of requirement are `OR`'d together, and of different kinds are `AND`'d. For example:

```
os: linux
os: windows
app: Code
app: notepad++
```

This reads: "If OS is either linux or windows, for an app that has a well-known identifier of either Code or notepad++". Code on windows would match, notepad++ on windows would match, and so on; but Code on mac or Sublime on windows would not.

```
mode: user.talon
mode: command
and code.language: talon
```

This one reads "If either mode is user.talon, or else if mode is command at the same time as code.language is talon".

TODO: there is some support for more complex boolean expressions using `and` and `not`. Test and describe that.

### Voice commands

A voice command has the format `RULE: BODY`, where `RULE` determines what words activate the command, and `BODY` defines what the command does when activated:

```
# -------- RULE ----------------  ------ BODY -------
([channel] unread next | goneck): key(alt-shift-down)
```

This command, for example, will press the shortcut alt-shift-down whenever you say either “channel unread next”, “unread next”, or “goneck”.

Rules have a versatile syntax that is like a word based regex:

| Syntax | Description | Matches |
| --- | --- | --- |
| `foo` | Words | “foo” |
| `[foo]` | Optional | “foo” or “” (nothing) |
| `foo*` | Zero or more | “”, “foo”, “foo foo”, ... |
| `foo+` | One or more | “foo”, “foo foo”, ... |
| `foo|bar` | Choice | “foo”, “bar” |
| `(foo)` | Precedence/grouping | “foo” |
| `{some_list}` | [List](/unofficial_talon_docs/#lists) | Depends on the list. |
| `<some_capture>` | [Capture](/unofficial_talon_docs/#captures) | Depends on the capture. |

### Implementing actions

In place of an ordinary rule, you can also implement an [action](/unofficial_talon_docs#actions). In this case the rule has the form `action(NAME_OF_ACTION)`. The body syntax is the same. For example:

```
action(app.tab_next): key(ctrl-tab)
```

This means whenever this file's context applies and the action `app.tab_next` is invoked by a Talon voice command, it will press the shortcut ctrl-tab -- unless that action is overridden in some more specific context.

### Tags

Besides concrete features like an application's name or a window's title, a context can also select for *tags*. Tags can represent features many different applications may have, enough that it would be difficult to list all such applications in advance. For example, the tag `user.tabs` indicates the presence of tabs. Browsers have tabs, but so do some text editors, chat applications, terminals, etc.

Using tags, we can define a set of tab-related voice commands in one Talon file, and other application-specific Talon files can opt in to these commands by providing the `user.tabs` tag.

To make a tag available, it first must be declared in a module:

**`generic_application_features.py`:**
```python
from talon import Module

mod = Module()
# this declares a tag in the user namespace
mod.tag("tabs", desc="basic commands for working with tabs within a window are available")
```


**`tabs.talon`:**
```
# This selects for the tag 'user.tabs'.
tag: user.tabs
-
(open | new) tab: app.tab_open()
last tab: app.tab_previous()
next tab: app.tab_next()
close tab: app.tab_close()
reopen tab: app.tab_reopen()
```

**`firefox.talon`:**
```
app: Firefox
-
# This activates the tag 'user.tabs'.
tag(): user.tabs
```

Of course, the commands we defined in `tabs.talon` just invoke corresponding [actions](/unofficial_talon_docs#actions), so unless the default behavior of those actions is what we want, we'd also need to *implement* them in `firefox.talon`. Happily, in this case the default behavior suffices. Tags and actions often go together in this way.


### Apps

Talon can activate a context based on which application is active.  It's not unlikely that important apps are part of several .talon files.  Because one and the same app may need to be identified in several different ways (based on platform or app version), Talon allows to register well-known apps, and specify the detailed logic of how to match an app only once.  In all the other places, only the well-known name needs to be used.


Register and identify the app via a Talon Module in Python - **`fancyedit.py`:**
```python
from talon import Module
mod = Module()
# to reduce typing, you can reference the app registry through a local variable
apps = mod.apps
apps.fancyedit = '''
os: mac
and app.bundle: com.example.fancyedit
os: windows
and app.exe: fancyed.exe
'''
apps.terminal = 'app.bundle: com.apple.Terminal'
# you can specify the same app several times; this is the same as specifying several match statements that are OR'd together
apps.firefox = 'app.bundle: com.mozilla.Firefox'
apps.firefox = 'app.exe: firefox.exe'
```

Use the well-known app - **`fancyedit.talon`:**
```
app: fancyed
-
action(edit.find): key(ctrl-alt-shift-y)
```

Identify the already registered app via a .talon file - **`fancyedit_linux.talon`:**
```
os: linux
app.exe: /opt/ecorp/fancyed
-
app(): fancyedit
```

Identify the already registered app via a Talon Context in Python  - **`fancyedit_custom.py`:**
```python
from talon import Context
ctx = Context()
ctx.matches = '''
os: linux
app: Xfce4-terminal
title: /fancyed - tmux/
'''
ctx.apps = ['fancyedit']
```


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

A *module* is a collection of related declarations. In particular, it can declare [actions](/unofficial_talon_docs#actions), [lists](/unofficial_talon_docs#lists), and [captures](/unofficial_talon_docs#captures), scopes, tags and well-known applications. In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

TODO: are there any interesting arguments to Module?

### Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can check for [several properties](/unofficial_talon_docs#context-header), like your OS, the name of the current application, etc.  Within a particular context, you can do everything you can do in a `.talon` file: define voice commands, implement/override the behavior of [actions](/unofficial_talon_docs#actions), adjust [settings](https://talon.wiki/talon-settings/), and activate [tags](/unofficial_talon_docs#tags).

In Python, you can construct a context like so:

```
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active.
You can make this context conditional by setting `matches`:

```
ctx.matches = "mode: command"
```

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

The following three settings, `insert_wait`, `key_hold`, and `key_wait`, can be used to slow down keypresses when dealing with applications that are behaving unreliably (e.g., key presses seem to be jumbled or dropped).

`insert_wait`
: Increase this if characters seem to be jumbled in a specific app when typing whole sentences. Default is 0.

`key_hold`
: Increase this if you're playing a game and some keys aren't registering at all. You should probably increase it in 16ms increments, e.g. set it to 16ms or 32ms.

`key_wait`
: Increase this if modifier keys are getting dropped or if key presses are misbehaving even with the other two settings (`insert_wait` and `key_hold`) tuned. `key_wait` should be the last resort because it results in the the slowest overall keypress rate. Default is 1.0 in milliseconds.

`speech.debug`
: Enabling this (`speech.debug = 1`) will display the VAD in console. This is useful for determining when Talon is picking up your voice or other background noises. The default value is 0.

`speech.engine`
: Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. See [speech recognition engines](/getting_started/#speech-recognition-engine).

`speech.timeout`
: This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

  It is measured in seconds; the default is 0.150, i.e. 150 milliseconds. It has been mentioned in #beta that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.

`speech.record_all`
: If set to 1, all phrases Talon hears will be stored in a `.flac` file on your computer.  You can use this to analyze microphone issues, or it might be useful to analyze speech engine issues. The default value is 0.
