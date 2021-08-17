---
sidebar: true
order: 2
published: true
---
# Unofficial Talon Docs

This page provides community documentation of the central concepts used for the customization of Talon behaviour. If you want to implement more complicated functionality in Talon or work out how some existing scripts work, then this is the right page. The page assumes you have successfully [configured Talon](/getting_started) to respond to voice commands.

## Overview of Talon framework

Talon is an accessibility platform that provides a scripting layer to connect a range of input hardware/methods to a cross-platform API for interacting with desktop applications. Let's start by talking about where your configuration/scripting files are stored.

When setting up Talon to respond to voice commands you would have installed some existing scripts (e.g. `knausj_talon`) in to your Talon `user` directory (e.g. `~/.talon/user/` in Linux/MacOS). All of your Talon configuration/scripts go in this `user` directory and are formatted as either Talon (`.talon`) or Python (`.py`) files.

Talon doesn't care what names you give your `.py` or `.talon` files, or what folders you put them into; it will automatically try to load everything inside your `user` folder when it starts up. Any folders or file names you see in Talon packages (e.g. `knausj_talon`) were chosen by the authors of that package. Talon also monitors files in the `user` directory, and will automatically reload them if they're changed (printing a [log message](/unofficial_talon_docs#repl-and-logging)). This reloading is convenient when working on scripts/configuration as you generally don't have to restart Talon for it to pick up changes.

So why do we have two kinds of configuration/scripting files (`.py` and `.talon`)? Originally all Talon configuration/scripting was done using Python, but over time it was decided that the addition of a framework specific file type would be beneficial. To a first approximation `.talon` files provide a succinct way of mapping spoken commands to behaviour. `.py` files on the other hand provide the implementation of behaviour and other functionality used by .talon files.

## .talon Files

The primary way to extend talon is using `.talon` files placed in the `user` directory. A talon file comes in two parts: a [context header](/unofficial_talon_docs#context-header) defining the circumstances in which the file is active, and a body that implements various behaviors within that context. The body of a talon file can:

* Define [voice commands](/unofficial_talon_docs#voice-commands).
* Define [keyboard shortcuts](/unofficial_talon_docs#other-capabilities).
* [Activate registered tags or apps and change settings](/unofficial_talon_docs#tags-apps-and-settings).
* Implement/override the behavior of [actions](/unofficial_talon_docs#actions). However, this is **deprecated**; you should implement actions in Python files instead.

An example `.talon` file might look like this:

```
# Comments start with a # sign, and they must always be on their own line.
#
# This part, the context header, defines under which circumstances this file applies.
os: windows
os: linux
app: Slack
app: Teams
# Anything above this (single!) dash is part of the context header.
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

# This activates the tag 'user.tabs'.
tag(): user.tabs

# This adjusts settings (within this file's context).
settings():
    key_wait = 1.5
```

### Context header

The context header specifies when the body of the file will be activated. That is, only when the requirements of the header are met will the settings, tags, and commands in the body be available. This enables you to specify commands and behaviour that are only available for specific windows, applications, etc.

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

Additionally, you can create user `scope`s. `scope`s allow matching on additional arbitrary string information supplied by user scripts. For example you might write a `scope` called `slack.workspace_name`. You'd then be able to make .talon files that only matched a particular Slack workspace. See [the scope concept section](/unofficial_talon_docs#scopes) below for more information.

`os`, `tag`, and `mode` are (usually? necessarily?) matched literally (like `os: windows`), whereas some like `app.exe`, `title`, and user scopes can also be matched by regular expression, like `title: /- Visual Studio Code/`. The regular expression only needs to match some part of the text, it does not require a total match. For example, the title `firefox.talon - Visual Studio Code` is matched by the regex `/Visual Studio Code/`.

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
| `[foo]` | Optional | “foo” or null (nothing) |
| `foo*` | Zero or more | “”, “foo”, “foo foo”, ... |
| `foo+` | One or more | “foo”, “foo foo”, ... |
| `foo|bar` | Choice | “foo”, “bar” |
| `(foo)` | Precedence/grouping | “foo” |
| `{some_list}` | [List](/unofficial_talon_docs/#lists) | Depends on the list. |
| `<some_capture>` | [Capture](/unofficial_talon_docs/#captures) | Depends on the capture. |

The BODY part of a command is implemented in Talonscript, a simple statically typed language. We'll discuss Talonscript and how it interracts with the RULE part of the command with reference to the following `.talon` file:

```
-
# The following lists and captures are implemented in the knausj_talon repo
# {user.letter} is a list mapping words like 'plex' or 'gust' to latin letters like 'x' or 'g'
# {user.number} is a list mapping words like 'five' to number strings like '5'
# <digits> is a capture that maps a variable length phrase like
#   "one two three" onto an integer 123

# Saying "double letter plex" presses ctrl+a then inserts "x." then "x"
double letter {user.letter}:
    modified = letter + "."
    key(ctrl-a)
    insert(modified)
    insert(letter)

# Saying "defaultable plex" inserts "x", saying "defaultable" inserts "default"
defaultable [{user.letter}]:
    insert(letter or "default")

# Saying "choose plex" inserts "x", saying "choose five" inserts "5"
choose ({user.letter}|{user.number}):
    insert(letter or number)

# Saying "join plex and gust" or "join plex gust" inserts "xg"
join {user.letter} [and] {user.letter}:
    insert(letter_1 + letter_2)

# Saying "add one two three and four five six" inserts "579"
add <digits> and <digits>:
    insert(digits_1 + digits_2)

# Saying "insert lots plex gust plex" inserts "['x', 'g', 'x']"
insert lots {user.letter}+:
    insert(letter_list)
```

In the above we can see that the lists and captures in the rule part are bound to variables in the Talonscript based on the name of the list/capture. If we use the same lists/capture in a rule multiple times then each use gets a corresponding _1, _2 suffix. If we make a list/capture optional then we have to handle the case where it isn't included using "or". Similarly if we have a choice of matches we have to handle the cases where the alternative was picked. Finally, if we match multiple captures/lists (e.g. with '+'), then we can refer to the lot of them with the _list suffix. Individual items from the multiple match can be referred to with the _1, _2 suffixe as well.

In terms of the Talonscript itself, it only has quite basic operations. We have variable assignment, invocation of actions, arithmetic, some boolean operators, and concatenation of strings.

TODO: What are the full capabilities of Talonscript?

### Tags, apps, and settings

TODO: Explain how you can override tags and settings in .talon files

### Other capabilities

TODO: Explain how you can make hotkeys on Mac

## Talon Concepts

In order to script Talon it is useful to understand the abstractions it uses. Let's start by giving you a brief overview of how they fit together.

As we have already seen, the [Context](/unofficial_talon_docs#contexts) is a central feature of the Talon framework. A context is the circumstances under which a set of behaviour applies. For example we might only activate some voice commands when the title of the currently focussed window matches a given pattern. The concepts of [Tags](/unofficial_talon_docs#tags), [Apps](/unofficial_talon_docs#apps), [Modes](/unofficial_talon_docs#modes), and [Scopes](/unofficial_talon_docs#scopes) are all ways of providing information to match against in a Context.

One of the primary modes of input to Talon is through voice commands defined in `.talon` files. To implement commands containing dynamic 'variables' (e.g. 'allcaps some arbitrary words') you can utilize [Lists](/unofficial_talon_docs#lists) and [Captures](/unofficial_talon_docs#captures).

The next key component is the implementation of behaviour via [Actions](/unofficial_talon_docs#actions). Talon comes with some built in actions, but most are defined and implemented in user scripts.

In addition to the above we also have the concept of [Settings](/unofficial_talon_docs#settings). Built-in and custom settings are used by actions to configure their behaviour (e.g. to change the delay between key presses in the `insert()` action).

Talon is a modular framework as far as user scripting is concerned. The intention is for user scripts to exist as packages defining and implementing behaviour which can then be used and overridden by end users. In order to define the 'source' of particular Actions, Captures etc. we have the idea of the [Module](/unofficial_talon_docs#modules).

### Modules

A *module* is a collection of related declarations. In particular, it can declare [actions](/unofficial_talon_docs#actions), [lists](/unofficial_talon_docs#lists), [captures](/unofficial_talon_docs#captures), [scopes](/unofficial_talon_docs#scopes), [tags](/unofficial_talon_docs#tags), [modes](/unofficial_talon_docs#modes), [settings](/unofficial_talon_docs#settings) and well-known [applications](/unofficial_talon_docs#apps). In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

All Actions, Lists etc. must first be declared via a Module before they can be referenced in `.talon` or `.py` files.

### Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can check for [several properties](/unofficial_talon_docs#context-header), like your OS, the name of the current application, etc.  Within a particular context, you can define voice commands, implement/override the behavior of [actions](/unofficial_talon_docs#actions), adjust [settings](/unofficial_talon_docs#talon-settings), and activate [tags](/unofficial_talon_docs#tags). Note that you cannot define new voice commands in Python, that can only be done in `.talon` files.


In Python, you can construct a context like so:

```python
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active.
You can make this context conditional by setting the `matches` property:

```python
ctx.matches = "mode: command"
```

See examples in the [Actions](#actions), [Lists](#lists), [Captures](#captures), and [Tags](#tags) sections for information about using Contexts with those features.

### Actions

An action is a function that can be called by Talon voice commands, whose behavior can be overridden within different contexts. This is useful when the same operation has different keybindings in different applications. For example, the built-in Talon action `edit.save` is intended to perform the "save file" operation. In most applications this is performed via `ctrl-s`, but in Emacs it's `ctrl-x ctrl-s`.

Some actions, like `edit.save`, are defined by Talon (but not implemented). You can also declare your own custom actions from Python. Given a module `mod`, you can use `mod.action_class` to declare several actions:

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

As mentioned earlier it's pretty common to want to overwrite actions for a particular application (or other context). Taking the example of Emacs mentioned earlier let's say we want to override the edit.save action and also implement/override the two actions we declared above. The following example shows two equivalent ways of doing that.

```python
from talon import Context, actions

ctx = Context()
ctx.matches = "app: Emacs"

# Note we don't have to specify type annotations or a docblock when
# overriding actions since those are inherited from the definition.

# Override a single action within the given Context
@ctx.action("edit.save")
def emacs_save():
    actions.key("ctrl-x ctrl-s")

# Override multiple "user." actions within the given context. The names of the class functions correspond to the actions we're overriding.
@ctx.action_class("user")
class MyEmacsActions:
    def find_reverse():
        actions.key("ctrl-r")

    def mangle(s):
        return "emacs__" + s
```

So now when we use the `user.mangle("some string")` action in a `.talon` file or `actions.user.mangle("some string")` in a `.py` file then by default we'll get `"__some string"`, but if our "app: Emacs" context matches then we'll get `"emacs__some string"`.

Actions are self-documenting. A list of all loaded actions can be accessed via the Talon Console with `actions.list()`.

### Lists

A list associates sequences of spoken words with strings that can be used in voice commands. This is useful for commands that permit a choice from a list of options. For example, imagine you wanted to say "exception EXCEPTION" and have Talon type in a programming language appropriate exception class name. You could do that using a list as follows:

**`exceptions.py`:**
```python
from talon import Module, Context

mod = Module()
mod.list("exception_class", desc="Exception classes")

ctx_default = Context()
ctx_default.lists["user.exception_class"] = {
    "generic exception": "Exception"
}

ctx_python = Context()
# code.language is a Talon defined scope which can be set to indicate
# the programming language you're currently editing
ctx_python.matches = "code.language: python"
ctx_python.lists["user.exception_class"] = {
    "runtime": "RuntimeError",
    "value": "ValueError",
}

ctx_java = Context()
ctx_java.matches = "code.language: java"
ctx_java.lists["user.exception_class"] = {
    "null pointer": "NullPointerException",
    "illegal argument": "IllegalArgumentException",
}
```

This sets up a list which matches a list of standard exceptions for the target programming language. Note that we can have a different set of item keys in the list for different contexts. Note also that our list (like user defined actions) is prefixed with `user.` to identify it as custom code.

One other fact of interest is that there's no merging of lists if multiple contexts match. This would mean that if the "code.language: java" selector was active, then our list would not contain the "generic exception" item (it would only have "null pointer" and "illegal argument").

**`exceptions.talon`:**
```
exception {user.exception_class}: insert(user.exception_class)
```

We make use of our list in the above .talon file by referring to it with the curly brace syntax. See the [voice commands](#voice-commands) section for more details about using lists in .talon files.

Given the above files, if we said "exception null pointer" when the "code.language: java" selector was active we'd get the string "NullPointerException" typed in. Saying "exception generic exception" would do nothing in this context, and nor would "exception value".

### Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways.

An example is defining a grammar for playing computer games where a character moves around on a square grid using a d-pad type interface (up, down, up right etc.). We might like to be able say something like "move north east" or "attack west". This could be implemented as follows:

**`directions.py`**:
```python
from typing import Dict
from talon import Module, actions

mod = Module()


@mod.capture(rule="((north | south) [(east | west)] | east | west)")
def dpad_input(m) -> Dict[str, bool]:
    """
    Matches on a basic compass direction to return which keys should
    be pressed.
    """

    return {
        "up": "north" in m,
        "down": "south" in m,
        "right": "east" in m,
        "left": "west" in m
    }

@mod.action_class
class GameActions:
    def dpad_keydown(direction: Dict[str, bool]):
        "Holds down the keys corresponding to the given direction"

        # Press all the indicated keys down, exploiting the fact
        # that the key names in our dictionary match the arrow key
        # names on the keyboard
        for key, pressed in direction.items():
            if pressed:
                actions.key(f"{key}:down")

    def dpad_keyup(direction: Dict[str, bool]):
        "Releases the keys corresponding to the given direction"
        for key, pressed in direction.items():
            if pressed:
                actions.key(f"{key}:up")

    def dpad_move(direction: Dict[str, bool]):
        "Moves the character in the given direction"

        actions.user.dpad_keydown(direction)
        actions.user.dpad_keyup(direction)

    def dpad_attack(direction: Dict[str, bool]):
        "Makes the game character attack in the indicated direction"

        actions.user.dpad_keydown(direction)
        # Assume space is a common 'perform attack' key
        actions.key("space")
        actions.user.dpad_keyup(direction)
```

This code first implements a new capture which matches on any of the compass directions, parses that and returns a data structure describing which directions were indicated. There is also a set of actions included which take this data structure and use it to press the appropriate keys.

**`game_one.talon`**:
```
move <user.dpad_input>: user.dpad_move(user.dpad_input)
attack <user.dpad_input>: user.dpad_attack(user.dpad_input)
```

The above .talon file uses the angle bracket syntax to indicate we want to use the named capture. With these files you could then say something like "move north east" and the up and right keys would be pressed and released, moving your character up and to the right.

In this example we have only set up a simple capture. The 'rule' parameter in the `@mod.capture` annotation actually has the same capabilities as the rule component of a .talon file command. The type of the 'm' parameter passed to your capture method behaves similarly to the body in a .talon file. You can use syntax like `m.my_list_2` to access the second usage of `user.my_list` in your rule expression for example. Note that you don't have to supply the 'user.' prefix. See the [voice commands](#voice-commands) section for a complete listing of the available syntax.

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

Next let's define a set of generic voice commands we think will apply to all applications with tabs:

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

Finally, let's activate these voice commands for the firefox application:

**`firefox.talon`:**
```
app: Firefox
-
# This activates the tag 'user.tabs'.
tag(): user.tabs
```

Of course, the commands we defined in `tabs.talon` just invoke corresponding [actions](/unofficial_talon_docs#actions), so unless the default behavior of those actions is what we want, we'd also need to *implement* them in a Python file (see [Actions](#actions)). Happily, in this case the default behavior suffices. Tags and actions often go together in this way.

There's also the option of enabling tags from within Python. This lets you define more complicated rules for enabling voice commands. For example the Talon draft window enables a tag when the window is visible so it can be controlled even if it doesn't have focus. To enable tags from Python you can use a Context instance like this:

```python
from talon import Context

ctx = Context()
ctx.matches = "app: Firefox"
# You can alter the set of tags whenever you like within your Python
# code. The tags will only be applied if they are included in the
# set and the ctx.matches selector is active also.
ctx.tags.add("user.tabs")
```

### Modes

TODO: Describe what modes are, what they're good for, and how to set them up

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
my fancy editor command: key(ctrl-alt-shift-y)
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

### Scopes

Scopes allow you to supply additional properties that can be matched in the header of `.talon` files or by the `Context.matches` string in Python. This could be used to make the window title from your current virtual machine window available to Talon for example. Another might be to tell Talon which mode your full-screen computer game is in.

You need to write custom Python code to keep your scope information up to date. The following example implements a scope that makes the current time available as a matcher property.

`test.py`
```python
import datetime
from talon import Module, cron

mod = Module()

@mod.scope
def my_scope_updater():
    # Sets the user.current_time scope to something like "04:12 PM"
    return {"current_time": datetime.datetime.now().strftime("%I:%M %p")}

# Re-run the above code every minute to update the scope. You can run
# <scope function>.update() from anywhere you like to trigger an update.
cron.interval("1m", my_scope_updater.update)
```

`test.talon`
```
# This matcher can either be a plain string or a regex
user.current_time: /AM$/
-
is it morning: "yes it is!"
```

`scopes` are 'global' in the sense that you can't override them for particular contexts in the same way as actions. Any file can simply overwrite a particular scope's value by implementing some python code like the above.

### Settings

TODO: Describe how to make custom settings

## Tips and tricks

This section contains some additional miscellaneous information which may be useful for developing and debugging Talon scripts.

### REPL and logging

TODO: What is the REPL, how do you get and use logging?

### Introspection functions

This section lists some built in methods which are useful for developing or debugging Talon behaviour. See also the `speech.debug` and `speech.record_all` settings described in the [Built in Talon settings](#) section.


`actions.find('user.my_action')`
`actions.list()`
`sim('tab close')`
`mimic('say hello world')`

### Built in Talon settings

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
: Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. See [speech recognition engines](/getting_started/#configure-a-speech-recognition-engine).

`speech.timeout`
: This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

  It is measured in seconds; the default is 0.150, i.e. 150 milliseconds. It has been mentioned in #beta that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.

`speech.record_all`
: If set to 1, all phrases Talon hears will be stored in a `.flac` file on your computer.  You can use this to analyze microphone issues, or it might be useful to analyze speech engine issues. The default value is 0.
