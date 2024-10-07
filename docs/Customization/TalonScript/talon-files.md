---
sidebar_position: 3
---

# TalonScript

The primary way to extend talon is using `.talon` files placed anywhere in the [Talon user directory](/docs/Help/terminology.md#talon-user-directory). A talon file comes in two parts


1. A [context header](./context-header.md) defining the circumstances in which the file is active.
  - If there is no context header present, then Talon treats the file as being active at all times.
  (all operating systems, within all applications etc). This was the case with the [simple TalonScript example](./talon-script.md#a-simple-talonscript-example).


2. A body that implements various behaviors within that context which can:
  - Define [voice commands](#voice-commands).
  - Trigger actions on [keyboard shortcuts](#keyboard-shortcuts)
  - [Activate registered tags or apps and change settings](#tags-settings-and-other-capabilities).

## Operating System Specific Files

In the [simple TalonScript example](./talon-script.md#a-simple-talonscript-example) two files were defined,
one for MacOS and the other for Windows and Linux.

This is not ideal when needing to support multiple users on different operating systems.
Each user would need to copied the correct file depending on their own OS.

Instead, a context header can be included with each file, and Talon would use the correct file depending on the
operating system that was running.

The example can be modified to highlight this, by having both of the following files:

File `simple_test_mac.talon`

```talon
os: mac
-
select everything:
    key(cmd-a)
```

File `simple_test_win.talon`

```talon
os: windows
os: linux
-
select everything:
    key(ctrl-a)
```

An example `.talon` file might look like this:

```````talon
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
```````

## Context header



Additionally, you can create user `scope`s. `scope`s allow matching on additional arbitrary string information supplied by user scripts. For example you might write a `scope` called `slack_workspace_name`. You'd then be able to make .talon files that only matched a particular Slack workspace by putting a line like 'user.slack_workspace_name: Talon' in the header. See [the scope concept section](./Talon%20Framework/scopes) below for more information.

Each individual header line has the format `[and] [not] <requirement or scope name>: (<literal match value> | /<regex match value>/<python regex flags>)` where `[]` indicates an optional token, `(|)` indicates exclusive options, and `<>` a special segment. Some examples of valid lines are `title: foo`, `title: /foo/i`, `and tag: user.bar`, `not tag: /foo/`, and `and not tag: user.foo`.

We've already indicated what requirements and scopes are, so lets move on to the matcher part (on the right of the ':'). This can either be a literal string match like `title: foo` (matching a window whose entire title is 'foo'), or a regular expression. The regular expression engine essentially uses the Python `re.search()` function to see if the value of the requirement or scope matches. So for the `title: /foo/i` example we'd match any window whose title had the string 'foo' in it in a case insensitive manner (due to the 'i' flag). For requirement types that have multiple values (tag and mode), Talon iterates through each active tag or mode and matches the header line if any of those match the regex or string literal.



## Voice commands

A voice command has the format `RULE: BODY`, where `RULE` determines what words activate the command, and `BODY` defines what the command does when activated:

```talon
# -------- RULE ----------------  ------ BODY -------
([channel] unread next | goneck): key(alt-shift-down)
```

This command, for example, will press the shortcut alt-shift-down whenever you say either “channel unread next”, “unread next”, or “goneck”.

### Rules

Rules have a versatile syntax that is like a word based regex:

| Syntax                   | Description                           | Matches                   |
| ------------------------ | ------------------------------------- | ------------------------- |
| `foo`                    | Words                                 | “foo”                     |
| `[foo]`                  | Optional                              | “foo” or null (nothing)   |
| `foo*`                   | Zero or more                          | “”, “foo”, “foo foo”, ... |
| `foo+`                   | One or more                           | “foo”, “foo foo”, ...     |
| `foo             \| bar` | Choice                                | “foo”, “bar”              |
| `(foo)`                  | Precedence/grouping                   | “foo”                     |
| `{some_list}`            | [List](../Talon%20Framework/lists.md)    | Depends on the list.      |
| `<some_capture>`         | [Capture](../Talon%20Framework/lists.md) | Depends on the capture.   |
| `^foo`                   | Start anchor                          | See below                 |
| `foo$`                   | End anchor                            | See below                 |

Rules can be anchored or unanchored. Talon has a system that detects when a user is and isn't speaking which it uses to break up microphone input into a sequence of 'utterance blocks'. So if you said "first bit ... other ... bits" ('...' means a sufficiently long pause), then Talon might turn this into three utterance blocks: ["first bit", "other", "bits"]. Anchoring a rule requires that it occur at the start or end (or both) of an utterance block.

For example if the following command were added to the [Talon Community](https://github.com/talonhub/community) user file set `^my command: "first"` and you said "my command air bat cap" then Talon would insert "firstabc". "air bat cap my command" on the other hand would only produce "abc" (and maybe a misrecognition) because 'my command' was not at the start of your utterance. If `other command$: "second"` were defined and you said "air bat cap other command" you'd get "abcsecond". If you said "other command air bat cap" you'd just get "second". Because the command matched and had the $ suffix, the rest of your utterance was thrown away.

In general you shouldn't anchor rules since it prevents the user from chaining them together (like we were doing with our examples and the air bat cap commands). Aside from special circumstances you really only consider anchoring when you have a command you wouldn't chain (e.g. switching from command to dictation mode), or you really want to prevent the command from being called by accident.

### Talonscript Body

The BODY part of a command is implemented in Talonscript, a simple statically typed language. We'll discuss Talonscript and how it interracts with the RULE part of the command with reference to the following `.talon` file:

```talon
# The following captures are implemented in the https://github.com/talonhub/community user file set:
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

```talon
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

The most common usage after voice commands is to adjust [settings](./Talon%20Framework/settings). The following changes the given setting values when the context header matches:

```talon
title: /my app/
-
settings():
    some.setting = 123

    another.setting = 432
```

You can also activate [tags](./Talon%20Framework/tags). This snippet activates the `user.my_tag` tag when the context header matches. This is used reasonably often to enable extra sets of voice commands for the given context.

```talon
title: /my app/
-
tag(): user.my_tag
```

#### Keyboard Shortcuts

Another feature is the ability to bind keyboard shortcuts.

```talon
title: /my app/
-
# Show notification saying the key was pressed and prevent other apps from receiving the key event
key(f8): app.notify("f8 key pressed")

# One or more modifiers can be used with the matcher
key(ctrl-shift-alt-super-f8): app.notify("Lots of modifiers and the f8 key pressed. Note that alt is option on Mac. Use cmd modifier on Mac to use the apple key in a shortcut.")

key(f9:passive): app.notify("f9 pressed, and we won't stop any other apps from receiving the key")
key(f9:up): app.notify("show this balloon when the f9 key is released")
```

The list of available keys you can listen to isn't well defined, but it is likely a subset of the names on the [key() action](../Talon Library Reference/key_action.md) wiki page.

Aside from these, additional extra capabilities may be added from time to time. For example in the beta version you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.
