# Context Header

The context header of a [talon file](../TalonScript/index.md#talon-file-syntax) specifies when the body of the file will be activated. 

That is, only when the requirements of the header are met will the settings, tags, and commands in the body be available. This enables you to specify commands and behaviour that are only available for specific windows, applications, etc.

Some simple examples are:
- `os: mac`
- `code.language: csharp`
- `mode: dictation`

The end of the context however is signified by a line comprising a single hyphen: `-`.

## Requirement Types

The following requirement types can be specified:

| Requirement Type | Description                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `os`            | require specific operating systems; currently either `linux`, `mac`, or `windows`                                                                                                   |
| `tag`           | require a specific tag                                                                                                                                                              |
| `mode`          | only active for specific talon modes (like `command`, `dictation`, `sleep` et al.)                                                                                                  |
| `app`           | match applications by explicitly declared, well-known name                                                                                                                          |
| `app.name`      | match applications by name (TODO where does Talon read this out?)                                                                                                                   |
| `app.exe`       | match applications by executable, like `/usr/lib/firefox/firefox` or `firefox.exe`                                                                                                  |
| `app.bundle`    | match applications by their MacOS bundle, like `com.mozilla.Firefox`                                                                                                                |
| `title`         | match a window title                                                                                                                                                                |
| `code.language` | specify a currently active programming language                                                                                                                                     |
| `language`      | specify the particular human language (e.g. `pt_BR`, `en`) for the file. Defaults to `en` if not specified. Currently only needed for multilingual webspeech.                       |
| `hostname`      | match the 'hostname' of your machine (from the `hostname` CLI command on Linux/Mac). Useful if you want to have a single set of custom config but have some machine-specific parts. |

## Header Line Syntax

As per the example above, often a context header line can be quite simple - eg `os: mac`.

To support more complex context criteria, each individual header line has the format:
```
[and] [not] (<requirement-type | <scope-name>): (<literal-match-value> | <regex-spec>)
```

Where:

| Item                                       | Description                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `and`                                      | optional, described in the section below                                                             |
| `not`                                      | optional, described in the section below                                                             |
| `(<requirement> \| <scope name>)`          | either `<requirement type>` or `<scope name>`                                                        |
| `<requirement-type>`                       | where the requirement type is one of those listed in the above table, such as `os`                   |
| `<scope-name>`                             | scope name, described below                                                                          |
| `(<literal-match-value> \| /<regex-spec>)` | either `<literal-match-value>` or `<regex-spec>`                                                     |
| `<literal-match-value>`                    | a literal string (not surrounded by quotes)                                                          |
| `<regex-spec>`                             | `/<regex-match-value>/<python-regex-flags>` (with the `/` being the standard python regex delimiter) |
| `<regex-match-value>`                      | standard python regex string                                                                         |
| `<python-regex-flags>`                     | optional python regex flags                                                                          |


Examples:


| Item                                       | Description                                                                                          |
| ------------------| ---------------------------------------------------------------------------------------------------- |
| `title: foo`     | the window title must literally be `foo`                                                      |
| `title: /foo/i`  | the window title must match the regular expression `/foo/i`, ie contain the string `foo` (the `i` flag specifying a case insensitive match) |

:::

:::info Advanced: Scopes

Additionally, you can create user `scope`s. `scope`s allow matching on additional arbitrary string information supplied by user scripts. For example you might write a `scope` called `slack_workspace_name`. You'd then be able to make `.talon` files that only matched a particular Slack workspace by putting a line like 'user.slack_workspace_name: Talon' in the header. See [the scope concept section](../Python%20Programming/Talon%20Framework/scopes.md) below for more information.

:::

### Regular Expressions

Even simple regular expressions can look intimidating if you are not familiar with them.

If you need precise control over what strings should be considered a match, 
it is likely that a regular expression could be defined that would match in the manner you require.

If you think that you may need to use a regular expression, but don't know where to start, a resource such as
[Learn RegEx with Real Life Examples](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/)  may be helpful.

Otherwise reach out on [talon slack](/docs/Help/talon-slack.md).

The regular expression engine essentially uses the Python `re.search()` function to see if the value of the requirement or scope matches. For requirement types that have multiple values (tag and mode), Talon iterates through each active tag or mode and matches the header line if any of those match the regex or string literal.


## Multiple conditions

Talon supports multiple conditions within the context header of a single file. It supports both AND-ing and OR-ing conditions together.

Without the `and` modifier, requirements of the same type (e.g. two `app`'s) are OR-ed together.

```talon
# paint_app or notepad_app
app: paint_app
app: notepad_app
```

Requirements of different types (e.g. `app` and `os`) are AND-ed together.

```talon
# (paint_app or notepad_app) and windows
app: paint_app
os: windows
app: notepad_app
```

The `and` modifier looks at the requirement on the previous line and merges with it to make a compound expession.

```talon
# (paint_app and windows) or notepad_app
app: paint_app
and os: windows
app: notepad_app
```

The `not` modifier just negates the condition.

```talon
# paint_app and not windows
app: paint_app
not os: windows
```

## Empty Context Header

The context header is optional. If it is not included then the file is always active (all operating systems, within all applications etc). 

## Examples

### Operating System Specific Files

In the [simple TalonScript example](./voice-commands.md#a-simple-voice-command-example) two files were defined,
one for MacOS and the other for Windows and Linux.

This is not ideal when needing to support multiple users on different operating systems.
Each user would need to copy the correct file depending on their own OS.

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
