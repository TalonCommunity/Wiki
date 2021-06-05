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
# Note that implementing actions in .talon files is deprecated. See the Actions section below for the supported syntax.
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

1. Declare [actions](/unofficial_talon_docs#actions), although they can invoke them. They can also currently implement them, but this is deprecated.
2. Declare or override [lists](/unofficial_talon_docs#lists), although they can use them in rules.
3. Declare or implement [captures](/unofficial_talon_docs#captures), although they can use them in rules.
4. Run arbitrary Python code.

For those things you need Python files, which may also be placed in `~/.talon/user/` or its subdirectories. A good way to start most Talon Python files is:

```python
from talon import Module, Context
mod = Module()
ctx = Context()
```

This sets you up with a module `mod` for declaring actions, lists, and captures; and a context `ctx` for implementing or overriding actions, lists, and captures. For more documentation on this, see [Talon Concepts](/unofficial_talon_docs#talon-concepts/).

## Talon Concepts

In order to script Talon, it is useful to understand some of its basic concepts: modules, contexts, actions, lists, and captures. Much less commonly, you may also want to use scopes.

### Modules

A *module* is a collection of related declarations. In particular, it can declare [actions](/unofficial_talon_docs#actions), [lists](/unofficial_talon_docs#lists), [captures](/unofficial_talon_docs#captures), [scopes](/unofficial_talon_docs#scopes), tags and well-known applications. In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

TODO: are there any interesting arguments to Module?

### Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. The conditions a context can check for [several properties](/unofficial_talon_docs#context-header), like your OS, the name of the current application, etc.  Within a particular context, you can define voice commands, implement/override the behavior of [actions](/unofficial_talon_docs#actions), adjust [settings](/unofficial_talon_docs#talon-settings), and activate [tags](/unofficial_talon_docs#tags). Note that you cannot define new voice commands in Python, that can only be done in `.talon` files.

In Python, you can construct a context like so:

```python
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active.
You can make this context conditional by setting `matches`:

```python
ctx.matches = "mode: command"
```

See examples in the Actions, Lists, and Captures sections below for information about using Contexts with those features.

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
