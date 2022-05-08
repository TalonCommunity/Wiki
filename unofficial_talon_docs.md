# Unofficial Talon Docs

This page provides community documentation of the central concepts used for the customization of Talon behaviour. If you want to implement more complicated functionality in Talon or work out how some existing scripts work, then this is the right page. The page assumes you have successfully [configured Talon](/getting_started) to respond to voice commands.

## Overview of Talon framework

Talon is an accessibility platform that provides a scripting layer to connect a range of input hardware/methods to a cross-platform API for interacting with desktop applications. Let's start by talking about where your configuration/scripting files are stored.

When setting up Talon to respond to voice commands you would have installed some existing user file sets (probably `knausj_talon`) in to your Talon `user` directory (e.g. `~/.talon/user/` in Linux/MacOS). All of your Talon configuration/scripts go in this `user` directory and are formatted as either Talon (`.talon`) or Python (`.py`) files.

Talon doesn't care what names you give your `.py` or `.talon` files, or what folders you put them into; it will automatically try to load everything inside your `user` folder when it starts up. Any folders or file names you see in Talon user file sets (e.g. `knausj_talon`) were chosen by the authors of that package. Talon also monitors files in the `user` directory, and will automatically reload them if they're changed (printing a [log message](/unofficial_talon_docs#repl-and-logging)). This reloading is convenient when working on scripts/configuration as you generally don't have to restart Talon for it to pick up changes.

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
: require specific operating systems; currently either `linux`, `mac`, or `windows`

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

Additionally, you can create user `scope`s. `scope`s allow matching on additional arbitrary string information supplied by user scripts. For example you might write a `scope` called `slack_workspace_name`. You'd then be able to make .talon files that only matched a particular Slack workspace by putting a line like 'user.slack\_workspace\_name: Talon' in the header. See [the scope concept section](/unofficial_talon_docs#scopes) below for more information.

Each individual header line has the format `[and] [not] <requirement or scope name>: (<literal match value> | /<regex match value>/<python regex flags>)` where `[]` indicates an optional token, `(|)` indicates exclusive options, and `<>` a special segment. Some examples of valid lines are `title: foo`, `title: /foo/i`, `and tag: user.bar`, `not tag: /foo/`, and `and not tag: user.foo`.

We've already indicated what requirements and scopes are, so lets move on to the matcher part (on the right of the ':'). This can either be a literal string match like `title: foo` (matching a window whose entire title is 'foo'), or a regular expression. The regular expression engine essentially uses the Python `re.search()` function to see if the value of the requirement or scope matches. So for the `title: /foo/i` example we'd match any window whose title had the string 'foo' in it in a case insensitive manner (due to the 'i' flag). For requirement types that have multiple values (tag and mode), Talon iterates through each active tag or mode and matches the header line if any of those match the regex or string literal.

The next thing to talk about is what happens when we have multiple lines in the context header. Talon lets you combine these together as a composite matcher following specific rules. In the following examples the comment contains an expression describing what the rule will match, e.g. `paint_app or (windows and not notepad_app)`. In this case the expression would match the when the app `paint_app` must is active or the operating system is `windows` and the app `notepad_app` is not active.

```
# paint_app or notepad_app
app: paint_app
app: notepad_app
```

```
# (paint_app or notepad_app) and windows
app: paint_app
os: windows
app: notepad_app
```

```
# (paint_app and windows) or notepad_app
app: paint_app
and os: windows
app: notepad_app
```

```
# paint_app and not windows
app: paint_app
not os: windows
```

So without modifiers, requirements of the same type (e.g. two apps) are OR-ed together. Requirements of different types (e.g. 'app' and 'os') are AND-ed together. The 'and' modifier looks at the previous requirement and merges with it to make a compound expession. The 'not' modifier just negates the condition.

### Voice commands

A voice command has the format `RULE: BODY`, where `RULE` determines what words activate the command, and `BODY` defines what the command does when activated:

```
# -------- RULE ----------------  ------ BODY -------
([channel] unread next | goneck): key(alt-shift-down)
```

This command, for example, will press the shortcut alt-shift-down whenever you say either “channel unread next”, “unread next”, or “goneck”.

#### Rules

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
| `^foo` | Start anchor | See below |
| `foo$` | End anchor | See below |

Rules can be anchored or unanchored. Talon has a system that detects when a user is and isn't speaking which it uses to break up microphone input into a sequence of 'utterance blocks'. So if you said "first bit ... other ... bits" ('...' means a sufficiently long pause), then Talon might turn this into three utterance blocks: ["first bit", "other", "bits"]. Anchoring a rule requires that it occur at the start or end (or both) of an utterance block.

For example if the following command were added to the knausj Talon user file set `^my command: "first"` and you said "my command air bat cap" then Talon would insert "firstabc". "air bat cap my command" on the other hand would only produce "abc" (and maybe a misrecognition) because 'my command' was not at the start of your utterance. If `other command$: "second"` were defined and you said "air bat cap other command" you'd get "abcsecond". If you said "other command air bat cap" you'd just get "second". Because the command matched and had the $ suffix, the rest of your utterance was thrown away.

In general you shouldn't anchor rules since it prevents the user from chaining them together (like we were doing with our examples and the air bat cap commands). Aside from special circumstances you really only consider anchoring when you have a command you wouldn't chain (e.g. switching from command to dictation mode), or you really want to prevent the command from being called by accident.

#### Talonscript Body

The BODY part of a command is implemented in Talonscript, a simple statically typed language. We'll discuss Talonscript and how it interracts with the RULE part of the command with reference to the following `.talon` file:

```
-
# The following captures are implemented in the knausj_talon Talon user file set:
#
# <user.letter> is a list mapping words like 'plex' or 'gust' to latin letters like 'x' or 'g'
# <user.number_string> is a capture mapping words like 'five' to number strings like '5'
# <digits> is a capture that maps a variable length phrase like
#   "one two three" onto an integer 123
#
# The following list does not exist (it's made up for this example):
#
# {user.address_book} maps the names 'sally', 'frank' etc. to their email addresses (sally@example.com, frank@example.com)

# Saying "double letter plex" presses ctrl+a then inserts "x." then "x"
double letter <user.letter>:
    modified = letter + "."
    key(ctrl-a)
    insert(modified)
    insert(letter)

# Saying "defaultable plex" inserts "x", saying "defaultable" inserts "default"
defaultable [<user.letter>]:
    insert(letter or "default")

# Saying "choose plex" inserts "x", saying "choose five" inserts "5"
choose (<user.letter>|<user.number_string>):
    insert(letter or number_string)

# Saying "join plex and gust" or "join plex gust" inserts "xg"
join <user.letter> [and] <user.letter>:
    insert(letter_1 + letter_2)

# Saying "add one two three and four five six" inserts "579"
add <digits> and <digits>:
    insert(digits_1 + digits_2)

# Saying "insert lots plex gust plex" inserts "['x', 'g', 'x']"
insert lots <user.letter>+:
    insert(letter_list)

# Saying "type email sally" inserts "sally@example.com"
# Lists can be used in exactly the same way as captures
type email {user.address_book}:
    insert(address_book)
```

In the above we can see that the lists and captures in the rule part are bound to variables in the Talonscript based on the name of the list/capture. If we use the same lists/capture in a rule multiple times then each use gets a corresponding \_1, \_2 suffix. If we make a list/capture optional then we have to handle the case where it isn't included using "or". Similarly if we have a choice of matches we have to handle the cases where the alternative was picked. Finally, if we match multiple captures/lists (e.g. with '+'), then we can refer to the lot of them with the \_list suffix. Individual items from the multiple match can be referred to with the \_1, \_2 suffix as well.

In terms of the Talonscript itself, the syntax can be thought of as a very limited subset of Python. Consider the following file which (as of writing) demonstrates all available syntax. See the inline comments for what everything does:

```
# Comments must be on their own line (optionally preceeded by whitespace)
some [<user.letter>] command:
    # or operator is used to deal with optional or alternative command parts. It works as the null
    # coalescing operator, not like boolean or.
    letter_defaulted = letter or "default"

    # Local variable assignment
    a = 2.2
    b = "foo"
    c = "interpolate the {letter_defaulted} and {b} variables into the string"
    c = """
    multiline string
    """
    # Only a single mathematical operation per line
    d = 2
    a = a + d
    a = a - d
    a = a * d
    a = a / d
    a = a % d

    # Sleep is a built in function and takes arguments of the (<float>|<integer><suffix>) form.
    # Float allows specifying (fractions) of a second. The <integer><suffix> form can be '1m', '5s', '500ms', '1000000us' etc.
    # Be aware sleeping in this way will prevent Talon from processing voice commands until the
    # sleep is over
    sleep(2s)

    # Repeats the previous line the given number of times, so in this case we'd sleep for a further 4 seconds
    repeat(2)

    # The key() action. Allows pressing, holding, and repeating individual key presses.
    # See the "key() action" wiki page for more details
    key(ctrl-f)

    insert("type in this literal string")
    auto_insert("process this string with the auto_format action, then type it in with insert()")

    # Stylistically we only recommend the following shorthand if it is the only action being
    # performed by the command.
    "type in this string using auto_insert()"
    """
    type in this
    multiline
    string using auto_insert()
    """

    # Call built in or user defined actions
    app.notify("show this in a notification balloon")
    user.grid_activate()
```

### Tags, settings, and other capabilities

.talon files can do a few other things aside from defining voice commands.

The most common usage after voice commands is to adjust [settings](/unofficial_talon_docs#settings). The following changes the given setting values when the context header matches:

```
title: /my app/
-
settings():
    some.setting = 123

    another.setting = 432
```

You can also activate [tags](/unofficial_talon_docs#tags). This snippet activates the `user.my_tag` tag when the context header matches. This is used reasonably often to enable extra sets of voice commands for the given context.

```
title: /my app/
-
tag(): user.my_tag
```

Another feature is the ability to bind keyboard shortcuts. Note that Linux and Windows support is only in the beta as of writing (not in stable version v0.2.3). In the beta there are still a few operating system specific quirks.

```
title: /my app/
-
# Show notification saying the key was pressed and prevent other apps from receiving the key event
key(f8): app.notify("f8 key pressed")

# One or more modifiers can be used with the matcher
key(ctrl-shift-alt-super-f8): app.notify("Lots of modifiers and the f8 key pressed. Note super is the same as cmd.")

# :passive and :up don't work on Windows currently
key(f9:passive): app.notify("f9 pressed, and we won't stop any other apps from receiving the key")
key(f9:up): app.notify("show this balloon when the f9 key is released")
```

The list of available keys you can listen too isn't well defined, but it is likely a subset of the names on the [key() action](/unofficial_talon_docs/key_action) wiki page.

Aside from these, additional extra capabilities may be added from time to time. For example in the beta version you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.

## Talon Concepts

In order to script Talon it is useful to understand the abstractions it uses. Let's start by giving you a brief overview of how they fit together.

As we have already seen, the [Context](/unofficial_talon_docs#contexts) is a central feature of the Talon framework. A context is the circumstances under which a set of behaviour applies. For example we might only activate some voice commands when the title of the currently focussed window matches a given pattern. The concepts of [Tags](/unofficial_talon_docs#tags) and [Apps](/unofficial_talon_docs#apps), and less commonly [Modes](/unofficial_talon_docs#modes) and [Scopes](/unofficial_talon_docs#scopes) are all ways of providing information to match against in a Context.

The next key component is the implementation of behaviour via [Actions](/unofficial_talon_docs#actions). Two examples are moving the mouse cursor and pasting the contents of the clipboard. Talon comes with some built in actions, but most are defined and implemented in user scripts.

One of the primary modes of input to Talon is through voice commands defined in `.talon` files. To implement commands containing dynamic 'variables' (e.g. 'allcaps some arbitrary words') you can utilize [Lists](/unofficial_talon_docs#lists) and [Captures](/unofficial_talon_docs#captures).

In addition to the above we also have the concept of [Settings](/unofficial_talon_docs#settings). Built-in and custom settings are used by actions to configure their behaviour (e.g. to change the delay between key presses in the `insert()` action).

The final concept is the Module. This is used to register particular instances of the above concepts with Talon, and to give them unique names.

### Modules

A Module is a place for giving things names. In particular, it can declare [actions](/unofficial_talon_docs#actions), [lists](/unofficial_talon_docs#lists), [captures](/unofficial_talon_docs#captures), [scopes](/unofficial_talon_docs#scopes), [tags](/unofficial_talon_docs#tags), [modes](/unofficial_talon_docs#modes), [settings](/unofficial_talon_docs#settings) and well-known [applications](/unofficial_talon_docs#apps). In Python, you can construct a module like so:

```
from talon import Module
mod = Module()
```

All Actions, Lists etc. must first be declared via a Module before they can be referenced in `.talon` or `.py` files. See the concept sections linked above for how to do this in each case.

### Contexts

A *context* specifies conditions under which to add new behavior or override existing behavior. A context can check for [several properties](/unofficial_talon_docs#context-header) like your OS, the name of the current application, etc.  Within a particular context, you can define voice commands, implement/override the behavior of [actions](/unofficial_talon_docs#actions), adjust [settings](/unofficial_talon_docs#talon-settings), activate [tags](/unofficial_talon_docs#tags), and redefine [lists](#lists) and [captures](#captures). Note that you cannot define new voice commands in Python, that can only be done in `.talon` files.


In Python, you can construct a context like so:

```python
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active.
You can make this context conditional by setting the `matches` property:

```python
ctx.matches = """
app: notepad_app
os: windows
"""
```

See examples in the [Actions](#actions), [Lists](#lists), [Captures](#captures), and [Tags](#tags) sections for information about using Contexts with those features.

### Actions

An action is a function that can be called by Talon voice commands and whose behavior can be overridden within different contexts. This is useful when the same operation has different keybindings in different applications. For example, the built-in Talon action `edit.save` is intended to perform the "save file" operation. In most applications this is performed via `ctrl-s`, but in Emacs it's `ctrl-x ctrl-s`.

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

It's pretty common to want to overwrite actions for a particular application (or other context). Taking the example of Emacs mentioned earlier let's say we want to override the edit.save action and also implement/override the two actions we declared above. The following example shows two equivalent ways of doing that.

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
        if s == "special":
            return "emacs__" + s
        else:
            # This will call the next most specific action implementation (in our case the
            # default one specified on the module). This can be used to just override
            # actiion behaviour in certain circumstances.
            return actions.next(s)
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

**`exceptions.talon`:**
```
exception {user.exception_class}: insert(user.exception_class)
```

We make use of our list in the above .talon file by referring to it with the curly brace syntax. See the [voice commands](#voice-commands) section for more details about using lists in .talon files.

Given the above files, if we said "exception null pointer" when the "code.language: java" selector was active we'd get the string "NullPointerException" typed in. Saying "exception generic exception" would do nothing in this context, and nor would "exception value".

One other fact of interest is that there's no merging of lists if multiple contexts match. This would mean that if the "code.language: java" selector was active, then our list would not contain the "generic exception" item (it would only have "null pointer" and "illegal argument").

Because list contents can only be replaced in their entirety, end users can have a harder time overriding the list if they want to add one or two more entries. They would need to copy paste the contents of the source list and then add their entries to the end. See the captures section below for a pattern you can use to make this use case easier.

### Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways. They are also a more extensible option than lists in your public Talon user file sets (see later in this section for more detail).

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

In this example we have only set up a simple capture. The 'rule' parameter in the `@mod.capture` annotation actually has the same capabilities as the rule component of a .talon file command. The type of the 'm' parameter passed to your capture method behaves similarly to the body in a .talon file. You can use syntax like `m.my_list_2` to access the second usage of `user.my_list` in your rule expression for example. The `m` parameter can also be accessed as an array of its subcomponents. This was done in the above example (using the `in` operator to search the array).

#### Captures vs lists in voice commands

It was mentioned earlier that using captures in the voice commands of your public Talon user file sets is a better option than lists. To see why, consider the `<user.symbol_key>` capture from `knausj_talon`. This capture is used in a voice command that lets you press a key by just saying its name (e.g. saying "dot" produces "."). A partial implementation of that capture is included below:

```python
from talon import Module, Context, actions, app
mod = Module()
ctx = Context()

mod.list("symbol_key", desc="All symbols from the keyboard")

ctx.lists["user.symbol_key"] = {
    "dot": ".",
    "quote": "'",
    "paren": "(",
    # ... 100 other key names
}

@mod.capture(rule="{user.symbol_key}")
def symbol_key(m) -> str:
    "One symbol key"
    return m.symbol_key
```

This capture is doing nothing but wrap the symbol_key list, so why is this useful? The reason in this case is the end user might want to extend the list of available keys in all voice commands that are using this capture. If the commands used a list like `{user.symbol_key}: key(symbol_key)`, then to add an extra key they'd need to copy that 100 item list to their new context. Because a capture is used instead (`<user.symbol_key>: key(symbol_key)`) we can add to the voice command using a file like this:

```python
from talon import Module, Context

mod = Module()
mod.list("mystuff_symbol_key", desc="extra symbol keys")

ctx = Context()
ctx.matches = "app: my_app"
ctx.lists["user.mystuff_symbol_key"] = {
    "semi": ";",
}

@ctx.capture("user.symbol_key", rule="{user.symbol_key} | {user.mystuff_symbol_key}")
def symbol_key(m):
    return str(m)
```

Note that all I needed to do was implement the capture with a new rule parameter to have the extra 'semi' option be available to the command in the context of `app: my_app`.

### Tags

Besides concrete features like an application's name or a window's title, a context can also select for *tags*. Tags have a couple of main uses:

1. Tags can be used to activate additional voice commands within a particular context. For example `knausj_talon` has some tab management commands (e.g. tab new) that apply to many applications. Application specific contexts or `.talon` files can simply enable the tag (and potentially implement the relevant actions) to activate those voice commands.
2. Tags can be enabled from Python to activate a set of voice commands given certain conditions. For example the mouse grid activates a tag when it is visible. This tag enables the 'grid off' and 'grid reset' commands.

To make a tag available, it must first be declared in a module:

**`generic_application_features.py`:**
```python
from talon import Module

mod = Module()
# this declares a tag in the user namespace (i.e. 'user.tabs')
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

There's also the option of enabling tags from within Python. To do that you can use a Context instance like this:

```python
from talon import Context

ctx = Context()
ctx.matches = "app: Firefox"
# You can alter the set of tags whenever you like within your Python
# code. The tags will only be applied if your Context is currently active
# and they are included in the tags property. Note that you must replace the entire
# set of tags at once, you can't individually add and delete them
ctx.tags = ["user.tabs"]
```

Tags are a commonly used part of the Talon framework. Related but less commonly used are [modes](#modes) and [scopes](#scopes).

### Apps

Talon allows you to give a 'well-known' name to an app. This lets you decouple the app matcher logic from the places it is used.

Register and identify the 'fancyedit' app via a Talon Module in Python - **`fancyedit.py`:**
```python
from talon import Module
mod = Module()
mod.apps.fancyedit = """
os: mac
and app.bundle: com.example.fancyedit
"""
# you can specify the same app several times; this is the same as specifying several match statements that are OR'd together
mod.apps.fancyedit = """
os: windows
and app.exe: fancyed.exe
"""
```

Add another possible matcher for fancyedit in a different file than the one the well-known name was defined in - **`fancyedit_custom.py`:**
```python
from talon import Context
ctx = Context()
ctx.matches = """
os: linux
app: Xfce4-terminal
title: /fancyed - tmux/
"""

ctx.apps = ['fancyedit']
```

Use the well-known app - **`fancyedit.talon`:**
```
app: fancyedit
-
my fancy editor command: key(ctrl-alt-shift-y)
```


### Modes

Modes are property you can match in your `.talon` file context header. They are intended for switching on and off large sets of Talon functionality. For example Talon includes the 'command', 'dictation', and 'sleep' modes by default along with a few others. Multiple modes can be active at once.

The built in 'command' mode is special in that it is an implicit requirement in all `.talon` files that haven't explicitly specified a mode. So this `.talon` file would be active in command mode:

```
-
insert test: "command mode active"
```

Whereas this one would only be active in dictation mode:

```
mode: dictation
-
insert mode: "dictation mode active"
```

You can create custom modes but this is uncommon as [Tags](#tags) are better suited for most purposes. Like tags, multiple modes can be active at once. Unlike Tags, modes cannot be scoped to a particular context; modes always apply globally. The intent is that there should be a small enough number of them that they could be toggled using a short popup menu.

So why might you add a custom mode? The main reason is because you want to disable all normal voice commands so only the ones in your mode are active. An example might be where you were using a full screen computer game, and wanted to eliminate potential conflicts with commands outside the game context.

First you would declare the new mode in Python:

```python
from talon import Module

mod = Module()
mod.mode("single_application", desc="Non-multitasking mode (e.g. computer games)")
```

Then you might make a couple of generic 'mode entry' and 'mode exit' commands:

```
^single application mode$:
    mode.enable("user.single_application")
    mode.disable("command")
```

```
mode: user.single_application
-
^command mode$:
    mode.disable("user.single_application")
    mode.enable("command")
```

Note that I've shadowed the existing `command mode` command from `knausj_talon` so that it does the right thing when our mode is active.

After that we could define a set of commands which would be available in our game:

```
mode: user.single_application
title: /My Game/
-
attack: key(enter)
```

### Scopes

Scopes allow you to supply additional properties that can be matched in the header of `.talon` files or by the `Context.matches` string in Python. This could be used to make the window title from your current virtual machine window available to Talon for example. Another might be to tell Talon which mode your full-screen computer game is in. In practise they are not used very often.

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

You may have noticed that scopes can emulate the behaviour of [tags](#tags), except you have to manage any context switches yourself. In practise tags are used far more often than scopes as they're both simpler to use, and are also self documenting. This leads to the recommendation that if you are able to use a tag for your use-case, then generally you would do that. If you need the string matching behaviour of scopes then you might consider those.

### Settings

Settings allow you to control some of the parameters of your python files by changing their value in a .talon file. This can be used to make a Talon user file set easier to customize for end users, such as exposing the background color of a UI element. It can also be useful to have certain settings change when the context changes, by setting them to different values in different .talon files.

Settings are defined on Modules. Each setting has a name, type, default value, and description. The following example shows how to define a setting in python, and save its value in a variable. You can call .get() on the variable to access the current value of the setting.

`setting.py`
```
from talon import Module

mod = Module()

horizontal_position = mod.setting(
    "my_user_file_set_horizontal_position",
    type=int,
    default=0,
    desc="Set the horizontal display position of some UI element",
)

print("The current value of the setting is " + str(horizontal_position.get()))
```

Note that the name of the setting (the first argument to mod.setting) in the example included the prefix "my_user_file_set". All user defined settings names share the same namespace so it's important to avoid overly generic setting names that may conflict.

The following example shows how you would change the value for that setting in a .talon file. Any number of settings can be defined in a single settings block, but any invalid syntax will prevent the entire block from applying.

`setting.talon`
```
-
settings():
    user.my_user_file_set_horizontal_position = 50
    # Any number of other settings could be defined here
```

It is also possible to register a callback function to be called whenever a setting changes. This is done by calling settings.register() with a setting name and a function to call. If the name string is blank (like in the example below) then the callback function will be called whenever any setting is changed. When the name is not blank the function will only be called when a setting with a matching name is changed.

`listener.py`
```
def settings_change_handler(*args):
    print("A setting has changed")

settings.register("", settings_change_handler)
```

## Tips and tricks

This section contains some additional miscellaneous information which may be useful for developing and debugging Talon scripts.

### REPL and logging

Talon comes with a Python Read Eval Print Loop (REPL) which can be accessed from the Scripting menu. This lets you try out actions and use the introspection functions mentioned below.

There is also a `repl` executable in the `bin` subdirectory of your Talon home folder. You can pipe REPL commands into that and they will be executed in the running Talon environment. This is often used as a RPC interface to Talon. For example executing a line like this on Linux would toggle whether Talon is listening to the microphone: `bash -c "echo 'actions.speech.toggle()' | ~/.talon/bin/repl"`.

Talon also has basic logging functionality. If you have run Talon from the terminal you will have seen the output, but it can also be viewed using the 'Scripting -> View log' menu item or directly in the `talon.log` file in your Talon home folder. To add to the log from your script simply use the Python `print()` function, though in general this is only used for debugging.

### Introspection functions

This section lists some built in methods which are useful for developing or debugging Talon behaviour. The following are all imported by default into the REPL and aren't really meant to be used outside that context.

* `sim("tab close")` - Finds the .talon file that would handle the given command in the current context. If the command is not active in the current context, then it prints an error. Useful for finding the relevant code for a voice command. You might want to paste something like `import time;time.sleep(5);sim("tab close")` in to the REPL to give you a chance to switch to the appropriate context.
* `mimic("say hello world")` - Executes the given voice command like you spoke it in to the microphone. Can be useful to re-run voice commands while editing them so you don't have to keep saying the same thing.
* `actions.find("string")` - Searches the name, documentation, and code implementing an action for the given substring. Prints out a list of matches.
* `actions.list("edit")` - Prints out all registered actions matching the given prefix. If no argument is supplied then lists all actions. See the [basic customisation page](/basic_customization/#actions-in-talon-files) for a trick to copy this output into your clipboard.
* `events.tail()` - If you're not getting enough information about what Talon is doing from the log file you can take a look at this method. It prints out Talon internal events, user actions called, scope changes etc. to the REPL. For even more logging try the `events.tail(noisy=True)` flag. You can also print out historical events and filter the events, run `help(events.tail)` to see the options.

### API functions

Talon provides an API under the `talon` package allowing you to perform various actions from Python. Some examples are window management and drawing overlays. Talon is closed source, but does provide class, method, and module signatures as `.pyi` files in the `resources/python/lib/python3.9/site-packages/talon/` folder. These files can also be linked to by your IDE to provide autocompletion etc. Note that many of the `.pyi` files are internally facing, but it's generally fairly clear what's intended to be stable and used by user scripts.

A quick pointer to some APIs follows:

* `__init__.pyi` - The main API functionality is imported here (e.g. Module, Context, actions). This is what you import when you include `import talon` in your code.
* `ui.pyi` - window and workspace management functionality and focus change events. OS specific functionality is imported at the top of the file from `(linux|mac|windows)/ui.pyi`.
* `clip.pyi` - Cross platform clipboard monitoring and management.
* `cron.pyi` - Periodic tasks, use this for polling or background tasks so as not to block the main Talon thread.
* `screen.pyi` - Monitor/screen management querying functionality (e.g. get dimensions of screen), also screenshot functions.
* `imgui.pyi` - A simple GUI system for drawing basic floating windows including text and buttons.
* `canvas.pyi` - A floating canvas implementation with transparency that optionally captures mouse and keyboard events. See also the `talon.skia` package which provides the drawing functions (based on [the Skia library](https://skia.org/docs/)).
* `noise.pyi` - Register for pop and hiss noise events.
* `experimental/` - This package contains experimental APIs which may change in signature or be removed.
* `ctrl.pyi` - 'Low level' mouse and keyboard event injection. You should prefer using the exposed mouse/keyboard actions rather than this.
* `fs.pyi` - Watch files and folders for changes.

You are also able to use almost all of the CPython standard library. So you can use that do do network requests, maths operations, or execute subprocesses for example. Other Python packages like numpy may be included in the Talon distribution as an implementation detail, but are not guaranteed to be included forever.

An escape hatch for this kind of thing is the `.venv` folder in your Talon home directory. The `pip` executable in the `bin` subdirectory of your Talon home directory allows you to install arbitrary Python packages in to that. You're generally a bit on your own with this and may have difficulty building binary packages. For this reason it is discouraged to ask users of any public package you build to install things in their venv.

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

`speech.engine`
: Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. See [speech recognition engines](/getting_started/#configure-a-speech-recognition-engine).

`speech.timeout`
: This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

  It is measured in seconds; the default is 0.150, i.e. 150 milliseconds. It has been mentioned in #beta that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.
