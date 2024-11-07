# Voice Commands

## A simple voice command example

Let's make a new voice command that presses the key combination `cmd+a` or `control+a` when you say "select everything".

Open up a text editor and save an empty file called `simple_test.talon` somewhere in your [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory).

OK, let's get to defining the command.

:::note Spacing is Important
Spacing is important in TalonScript. For example, ensure you have the spaces at the start of the 'key' line.
:::

If you're running MacOS, copy/paste the following into your editor and save the file.

```talon
select everything:
    key(cmd-a)
```

If you're on Windows or Linux you can use this instead:

```talon
select everything:
    key(ctrl-a)
```

Your command should now be defined, so if you focus your text editor and say "select everything" it should indeed select everything.

:::note
[Context headers](./context-header.md) can be used so that the correct definition will be applied depending on the
running operating system.
:::

:::tip The Talon Log File

The [Talon log file](./talon-log-file.md) contains information helpful to troubleshoot issues in `.talon` files.
You may wish to become familiar with the log file now that the most basic TalonScript file has been created.
:::

## Voice commands defined

The general structure of a [TalonScript file](./talon-script.md) consists of an optional context header, and the file body
(Separated by a `-` line if the context header is present).

The file body consists of one or more voice commands, each with the format `RULE: BODY`, where:

- `RULE` determines what words activate the command, and
- `BODY` defines what the command does when activated:

```talon
# ------ RULE ---  --- BODY --
select everything: key(ctrl-a)
```

:::note The Term Body
The term `body` refers to either the body of a TalonScript file, or the body of a voice command.
Which applies, hopefully clear from context.
:::

This command, for example, will press the `ctrl-a` key whenever you say either `select everything`.

## Rules

The rule specifies what word (or words) activate the command, and has a versatile syntax.

For example, to have the `select everything` command also activate if `select all` is said,
there is no need to have two separate commands. The following syntax can be used:

```
select (everything | all): key(ctrl-a)
```

:::note
Non-technical users might find the syntax unintuitive and unfriendly. However it is very succinct and precise,
and has been modeled after a common concept in the programming world of `regex`:
:::

| Example                          | Description          | Matches                              |
| -------------------------------- | -------------------- | ------------------------------------ |
| `foo`                            | Word or words        | “foo”                                |
| `foo [bar]`                      | Optional             | “foo”, “foo bar”                     |
| `foo bar*`                       | Zero or more         | “foo”, “foo bar”, “foo bar bar”, ... |
| `foo+ bar`                       | One or more          | “foo bar”, “foo bar bar”, ...        |
| `foo             \| bar`         | Choice               | “foo”, “bar”                         |
| `(foo)`                          | Precedence/grouping  | “foo”                                |
| `type email {user.address_book}` | [List](#lists)       | email sally                          |
| `double letter <user.letter>`    | [Capture](#captures) | double letter plex                   |
| `^foo`                           | Start anchor         | See below                            |
| `foo$`                           | End anchor           | See below                            |

### Lists

Using Talon's "list" functionality, it is possible to separate out simple tables of strings away from
the voice commands in `.talon` files, and into separate [.talon-list](../Data%20Files/talon_lists.md) files.

:::
Check if talon list files can be standalone or if they need the accompanying python file.
:::

Information for python programmers is available [here](/docs/Customization/Python%20Programming/Talon%20Framework/lists.md).

### Captures

:::note Terminology
The term `capture` comes from the programming world of `regex`.
It could be thought of as a "subrule".
:::

Similar to lists, `captures` also enable the defining of reusable components that can be used
in voice commands. Also similar to lists, `captures` provide a mapping between a spoken form and a written form.

Here is a simple example that makes use of the `<user.letter>` capture.

```talon
double letter <user.letter>:
    insert(letter)
    insert(".")
    insert(letter)
```

Saying `double letter plex` will cause `x.x` to be inserted by Talon. Where `plex` is the spoken form of `<user.letter>`
and `x` is the written form.

Here are some community defined captures:

| Name              | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `<letter>`        | The [Talon alphabet](/docs/Basic%20Usage/Command%20Mode/single-characters.md) |
| `<ordinal>`       | `first`, `second`, `third`, ..., `twentieth`                                  |
| `<number_string>` | Entering [numbers](/docs/Basic%20Usage/Command%20Mode/single-characters.md)   |
| `<numbers_small>` | A small number                                                                |

### Anchoring

Rules can be anchored or unanchored. Talon has a system that detects when a user is and isn't speaking which it uses to break up microphone input into a sequence of 'utterance blocks'.

So if you said:

```
first bit ... other ... more complex bits and pieces
```

(where '...' means a sufficiently long pause), then Talon might turn this into three utterance blocks: `first bit`, `other` and `more complex bits and pieces`.

Anchoring a rule requires that it occur at the start or end (or both) of an utterance block, depending on the usage of the `^` and `$` characters.

#### Start Anchor

For example, using the start anchor symbol `^` with the voice command:

```
^my command: "first"
```

| Spoken                   | Action                                                                       |
| ------------------------ | ---------------------------------------------------------------------------- |
| `my command air bat cap` | Talon inserts `firstabc`                                                     |
| `air bat cap my command` | Talon ignores `my command` as it didn't appear at the start of the utterance |

#### End Anchor

Similarly, using the end anchor symbol `$` with the voice command:

```
other command$: "second"
```

| Spoken                      | Action                                                                        |
| --------------------------- | ----------------------------------------------------------------------------- |
| `air bat cap other command` | Talon inserts `abcsecond`                                                     |
| `other command air bat cap` | Talon ignores `other command` as it didn't appear at the end of the utterance |

#### Guideline

In general you shouldn't anchor rules since it prevents the user from chaining them together (like we were doing with our examples and the air bat cap commands).
Aside from special circumstances you really only consider anchoring when you have a command you wouldn't chain (e.g. switching from command to dictation mode),
or you really want to prevent the command from being called by accident.

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

In the above we can see that the lists and captures in ofthe rule part are bound to variables in the Talonscript based on the name of the list/capture. If we use the same lists/capture in a rule multiple times then each use gets a corresponding \_1, \_2 suffix. If we make a list/capture optional then we have to handle the case where it isn't included using "or". Similarly if we have a choice of matches we have to handle the cases where the alternative was picked. Finally, if we match multiple captures/lists (e.g. with '+'), then we can refer to the lot of them with the \_list suffix. Individual items from the multiple match can be referred to with the \_1, \_2 suffix as well.

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

The most common usage after voice commands is to adjust [settings](../Talon%20Framework/settings). The following changes the given setting values when the context header matches:

```talon
title: /my app/
-
settings():
    some.setting = 123

    another.setting = 432
```

### Actions

You might have noticed that we've been using the `key()` and `insert()` actions in the example files so far.

Some of the more useful actions are:

- `key(ctrl-a)` - Presses the keys within the parentheses. See the 'Add new keyboard shortcuts' recipe below for some more info about using this action.
- `insert("my text")` - Types in the text "my text"
- `sleep(100ms)` - Waits for 100 milliseconds. This can be useful if you need to wait for your target application to do something. Don't make the sleep too long because Talon will not respond to voice commands while sleeping.
- `mouse_move(100, 200)` - Moves the mouse to screen coordinates 100 pixels from the left and 200 from the top.
- `mouse_scroll(0, -10)` - Scrolls the mouse 10 'units' to the left. `mouse_scroll(10)` would scroll the mouse 10 'units' down. Note that the arguments are y, x rather than x, y.
- `mouse_click(0)` - Clicks the left mouse button at the cursor. `mouse_click(1)` right clicks.

:::note
See [complete action list](/docs/Customization/Python%20Programming/Talon%20Library%20Reference/Actions/list-all-actions.md) to obtain the complete list.
:::

:::info
Some of the actions come with the [Base Talon Installation](/docs/Resource%20Hub/terminology.md#base-talon-installation),
and others are defined in the `.py` files that come with the [Talon Community User File Set](/docs/Resource%20Hub/terminology.md#talon-community-user-file-set).
:::
