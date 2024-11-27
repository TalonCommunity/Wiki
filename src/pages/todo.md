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

Explain how some command groups specify other command groups

:::

:::docotodo
Fix all references to `(https://github.com/talonhub/community/tree`
:::

:::docotodo Important

Check to see if there are any recent updates on GitHub for the community wiki then need to be
incorporated into this branch

:::

:::docotodo

https://talonvoice.slack.com/archives/C7ENXA7C4/p1732604856994179?thread_ts=1732589441.958129&cid=C7ENXA7C4

```
Two main reasons for misrecognitions: (1) Saying a command that doesn't exist (2) Pausing for too long mid-sentence | You can diagnose (1) with talon test last and talon open log, or help search <command>, or search for it on https://search.talonvoice.com/search/?repo=talonhub/community. You can mitigate (2) by setting speech.timeout to a longer value like 0.750.
```

How to make recordings
:::

# Privacy


It may be beneficial to have a section on privacy.
A person using talon may not be familiar with the command history feature, and therefore not realize that the last fifty commands
would be viewable by someone else.

Also to highlight the vulnerability caused by the talon platform's open nature and how it runs everything under the
talon user folder. for example, that there is nothing stopping someone from adding a python file that performs a
`speech_system.register("phrase", on_phrase)` and logs everything or sends everything to the cloud...

Is there any mechanism in talon beta to lock things down?



