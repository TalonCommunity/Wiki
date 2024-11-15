# Things to Do

Put references in each of the community library files (talon and python files) to the relevant part of this documentation
so that developers changing functionality will know where the documentation needs to be changed.

For example, in:
`C:\Users\ronny\AppData\Roaming\talon\user\talon-community\plugin\mouse\mouse.talon`

At a comment to say that the documentation is at:
`D:\github\talon-community-wiki\docs\Basic Usage\pc-control.md`

---

In the readme file, what should be done with these types of references:

```
C:\Users\ronny\AppData\Roaming\talon\user\talon-community\README.md

Formatter names (snake, dubstring) are defined `[here](core/text/formatters.py#L245)`. Formatter-related commands are defined in `[text.talon](core/text/text.talon#L8)`.

There could be useful information in there, even though I'm hoping that most of the content of that read me will be deleted
 as the information the useful information has been included in the wiki and should not be duplicated in the readme.

Check the original version of that file as I deleted some of those references before thinking that there was useful info in there.
```

# core

:::docotodo

Look at all of the files referenced

```
supported_csv_files = [
    CSVData(
        "user.git_argument",
        os.path.join("apps", "git", "git_arguments.csv"),
        os.path.join("apps", "git", "git_argument.talon-list"),
    ),
    CSVData(
        "user.git_command",
        os.path.join("apps", "git", "git_commands.csv"),
        os.path.join("apps", "git", "git_command.talon-list"),
    ),
    CSVData(
        "user.unix_utility",
        os.path.join("settings", "unix_utilities.csv"),
        os.path.join("tags", "terminal", "unix_utility.talon-list"),
    ),
    CSVData(
        "user.emoji",
        os.path.join("tags", "emoji", "emoji.csv"),
        os.path.join("tags", "emoji", "emoji.talon-list"),
        is_first_line_header=False,
        is_spoken_form_first=True,
    ),
    CSVData(
        "user.emoticon",
        os.path.join("tags", "emoji", "emoticon.csv"),
        os.path.join("tags", "emoji", "emoticon.talon-list"),
        is_first_line_header=False,
        is_spoken_form_first=True,
    ),
    CSVData(
        "user.kaomoji",
        os.path.join("tags", "emoji", "kaomoji.csv"),
        os.path.join("tags", "emoji", "kaomoji.talon-list"),
        is_first_line_header=False,
        is_spoken_form_first=True,
    ),
]
```

:::

# plugins

:::docotodo

Go through all remaining talon files under the plugins directory:

```
are_you_sure
cancel
datetimeinsert
desktops
draft_editor
gamepad
talon_draft_window
talon_helpers
text_navigation
then
eye_tracking_settings.py
paste_to_insert.py
README.md
```

:::


# tags

:::docotodo

Go through all remaining talon files under the tags directory:

```
browser
chapters
debugger
emoji
line_commands
messaging
multiple_cursors
pages
splits
terminal
```

:::

:::docotodo
Fix all references to `(https://github.com/talonhub/community/tree`
:::
