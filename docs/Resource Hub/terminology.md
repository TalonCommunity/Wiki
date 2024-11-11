---
sidebar_position: 60
---

# Terminology

## Beta Version

See [Talon beta version](./beta_talon.md).

## Cognitive Load

In the context of using talon, "cognitive load" could be thought of as the additional brainpower
required by the user on top of what would be needed if just using a keyboard.

For example, if a programmer wanted to write the following in a C# file:
```
class TempStorage
```

For someone new to talon, there could be fair cognitive load whilst working out what to say, for example:
- Should I say `word class space`, `trot class`, or the talon programming related command `state class`?
- How do I write `Temp` with the correct capitalization? Should I first add it to my vocabulary? Or should I just spell it letter by letter?
- Maybe I'll just say it letter by letter... `shift trap`, `edge made pit`
- And finally `hammer storage`
- (need a little rest now)

And this becomes quite easy for an experienced user that has already added `temp` to the vocabulary:
- `state class hammer t e m p storage`

## Community

Depending on context:
- The [talon community user file set](#talon-community-user-file-set)
- The group of users that support [talon on slack](../Help/talon-slack.md)

## CSV Files

Files with a `.csv` extension store data in a text format with "[Common Separated Values](/docs/Customization/Data%20Files/csv_files.md)". 

## imgui

The name of the simple GUI system used by talon.

## Personal Talon Directory



## Settings Directory

This is the `settings` subdirectory within the [talon user directory](#talon-community-directory).
It stores personal lists such as `abbreviations.csv`, `file_extensions.csv` and `words_to_replace.csv`.

## Settings.talon

This file contains the settings described [here](/docs/Customization/settings.md) and is located in the
[talon user directory](#talon-community-directory).

:::note

Not that this means that the file is not located within the [settings directory](#settings-directory).

:::

## Talon Actions

## Talon Community Directory

This is the subdirectory inside the [talon user directory](#talon-user-directory) in which you downloaded the
[talon community user file set](#talon-community-user-file-set).

The directory is often called `talon-community` or simply `community`.

## Talon Community User File Set

This is the [user file set](#user-file-set) that provides all the functionality that is the subject of this wiki.
It is downloaded into the [talon community directory](#talon-community-directory).

_(Originally called `knausj_talon`, after [its original creator :superhero:](https://github.com/knausj85))_

## Talon Directory Structure

```
talon/                          | Talon Home Directory
├── user/                       | Talon User Directory
│   ├── community/              | Talon Community Directory
│   │   ├── settings/           | Community Settings Directory
│   │   └── settings.talon      | Community Settings File
│   └── my-talon                | Personal Customizations Directory
└── talon.log                   | Talon Log File
```

## Talon Home Directory

The Talon home directory is located at:

| Operating System | Directory         |
| ---------------- | ----------------- |
| MacOS/Linux      | `~/.talon/`       |
| Windows          | `%APPDATA%\Talon` |

:::note %APPDATA%

This is a windows environment variable, typically referring to the folder `C:\Users\{username}\AppData\Roaming`
where `{username}` is the username of the currently logged in user.

:::

The directory can be opened into the system's file explorer by using the `Open Talon Home` menu item from the `Scripting` menu.

<img src="/img/talon_menu_open_talon_home.png/"
     alt="screenshot of the Talon scripting menu"
/>

## Talon Log File

The [talon log file](/docs/Customization/TalonScript/talon-log-file.md) resides under the [talon home directory](#talon-home-directory).

It may contain useful information when [troubleshooting](/docs/Resource%20Hub/Troubleshooting/basic-issues.md) or 
[debugging](/docs/Resource%20Hub/Troubleshooting/debugging.md).

## Talon Platform



## Talon User Directory

The Talon user directory is located at:

| Operating System | Directory              |
| ---------------- | ---------------------- |
| MacOS/Linux      | `~/.talon/user/`       |
| Windows          | `%APPDATA%\Talon\user` |


This is the directory in which you put the directory with the [Talon Community User File Set](#talon-community-user-file-set) during [installation](/docs/Resource%20Hub/Talon%20Installation/installation_guide.md).

Talon doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.

## TalonScript

## 

## User File Set

## Voice Commands

## Voice Command Sets
