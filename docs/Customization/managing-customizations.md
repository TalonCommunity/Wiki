---
sidebar_position: 30
---

# Managing Customizations

Talon is built to be a flexible and customizable system. This means that in addition to being able to add new voice commands you can also override the behavior of existing commands reasonably easily.

All customization consists of files placed somewhere under the [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory).

The Talon Platform itself doesn't care how you organize your files within this directory - any subdirectories or file names are just there to make things easier to understand for you and others.
However, there are some guidelines on this page about managing your customizations, which could make this easier long term.

## Directory Structure Options

There are two ways you could approach customizing your Talon setup:

### Option A: Directly Edit Talon Community Files

Edit the `.talon`, `.talon-lists` and `.py` files within the `talon/user/community` directory directly.

- Can be easier to begin with, but may be fiddly to keep up-to-date with the latest version of the [community user file set](https://github.com/talonhub/community) (aka `upstream`).
- You need to work out what you modified and how to re-apply it to the [Talon Community](https://github.com/talonhub/community) user file set every time you update it.

This is only really an issue if you [downloaded](/docs/Resource%20Hub/Talon%20Installation/downloading-community.md) Talon community as a zip file.
If you used `git` to perform the download, and are familiar with pulling and merging operations then using Option A should be reasonably straightforward.

```
talon/
└── user/
    └── community
```

:::note

For brevity, only files and folders relevant to each point are shown in diagrams on this page.

:::

### Option B: Have a Separate Directory With Your Customizations (**Recommended**)

Maintain your own separate directory with your customizations that sits alongside the [Talon Community](https://github.com/talonhub/community) directory.
For example, in the `my-talon` directory as shown in the diagram below.

```
talon/
└── user/
    ├── community
    └── my-talon
```

:::note

As described below in [overriding cleanly](#overriding-cleanly), your personal file will need to be complete and include all entries from the community defined file relevant to you.
That is, the content of your file will be used by Talon instead of the community defined file, and not as an extension to it.

:::

#### Limitations

Note that there are certain files to which this recommendation does not apply.
The following files can only be modified within the community directory structure, and cannot be customized outside of it.

```
talon/
└── user/
    └── community/
        ├── core/
        │   ├── homophones/
        │   │   └── homophones.csv
        │   └── app_switcher/
        │       ├── app_name_overrides.linux.csv
        │       ├── app_name_overrides.mac.csv
        │       └── app_name_overrides.windows.csv
        └── settings/
            ├── abbreviations.csv
            ├── file_extensions.csv
            └── words_to_replace.csv
```

:::note

The files under `core` are present within the community user file set. This means that care needs to be taken
when updating your local copy of the user file set.

The files under `settings` are not present within the community user file set. Files with default content
are created dynamically when first needed.

:::

## Refreshing Your Local Copy of the Community User File Set

You will probably want to update your Talon Community user file set occasionally in order to pick up new features and bug fixes.

Unfortunately changing Talon Commmunity may also sometimes add new bugs! If this happens you might want to go back the older version so you can keep working. Use `git` if you are familiar, and if you're not, then just making a `.zip` backup of the whole Talon user directory prior to making a potentially significant change also works.

## Overriding Existing Voice Commands and Lists

### Voice Commands

A key feature of Talon is its high level of customizability.
You can add new words and voice commands into new `.talon` files which can be placed anywhere underneath the [Talon User Directory](/docs/Resource%20Hub/terminology.md#talon-user-directory).
To simplify file management, as discussed under `Option B` above, it is recommended that your files are kept in a separate directory to where you installed the [Talon Community User File Set](/docs/Resource%20Hub/terminology.md#talon-community-user-file-set).
Doing this means that you can obtain the latest version of the community file set without worrying about overwriting any of your personal customizations.

This is easy enough for new words and voice commands, and a similar method can also be used for overriding existing voice commands.
There is however an additional step when overriding existing voice commands.
You need to indicate to Talon to make use of your definitions rather than the standard community defined ones.

### Overriding Cleanly

Start off by copying the community defined file to your [personal talon directory](/docs/Resource%20Hub/terminology.md#personal-talon-directory).
Note that your personal file will need to be complete and include all entries from the community defined file relevant to you.
That is, the content of your file will be used by Talon instead of the community defined file, and not as an extension to it.

:::docofeedback

It seems that individual settings (for example those in subtitles.talon) can be overridden without the need to copy the entire file first.
Is that correct?

:::

Apart from making any customizations to the list, you will also need to add an extra rule into the [context header](/docs/Customization/TalonScript/context-header.md).

For example, the community defined `letter.talon-list` has the context header:

```talon
list: user.letter
-
```

You could set the context header of your file to:

```talon
list: user.letter
language: en
-
```

:::info How This Works

This takes advantage of the way Talon determines priority - it chooses the implementation that is in the file with the most specific context header
(i.e. the one with the most rules in it).

:::

:::tip Examples

See the examples of using this technique - [overriding the touch command](./Examples/overriding_touch.md) and [overriding the names of the modifier keys](./Examples/modifier_key_names.md).

:::

### Limitations

The method described above works for both `.talon` and `.talon-list` files, as they both start with a context header.

However, some lists with multiple spoken forms/alternatives are instead provided as `.csv` files. As these file types do not contain a context header,
the above technique will not work.

## The Customize Command

You can customize common `.talon-list` and `.csv` files with voice commands. Say the phrase `customize {file_type}` where `file_type` is one of the following:

- `abbreviations`
- `additional words`
- `alphabet`
- `homophones`
- `search engines`
- `Unix utilities`
- `websites`
- `words to replace`

These open the file in a text editor and move the insertion point to the bottom of the file so you can add to it.

:::warning The Customize Command

Note however that the `customize` command always opens your local copy of the talon community user file set files.
It does not open your personal copy, and therefore should not be used if you have the `Option B` directory structure.

:::
