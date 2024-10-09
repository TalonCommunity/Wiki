# Context Header

The context header of a [talon file](./talon-files.md) specifies when the body of the file will be activated. That is, only when the requirements of the header are met will the settings, tags, and commands in the body be available. This enables you to specify commands and behaviour that are only available for specific windows, applications, etc.

The following requirements can be set:

| Matcher         | Description                                                                                                                                                                         |
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

## Examples

### Operating System Specific Files

In the [simple TalonScript example](./talon-script.md#a-simple-talonscript-example) two files were defined,
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