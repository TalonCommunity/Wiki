---
sidebar_position: 1
---

# TalonScript

There are a number of ways of [customizing talon](../overview.md). A key method is by using TalonScript, which can be used for the following purposes:

| Area                                                                 | Description                                                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Voice Commands](/docs/Resource%20Hub/terminology.md#voice-commands) | Create new [Voice Commands](/docs/Resource%20Hub/terminology.md#voice-commands) that makes use of existing [Talon Actions](/docs/Resource%20Hub/terminology.md#talon-actions), or modify existing voice commands. |
| [Settings](../settings.md)                                           | Change [settings](../settings.md) such as whether Talon should display help info using the dark mode theme.                                                                                         |
| [Tags](tag-activation.md)                                            | Activate [tags](tag-activation.md)                                                                                                                                                                  |
| [keyboard shortcuts](customize-kbd-shortcut.md)                      | Customize [keyboard shortcuts](customize-kbd-shortcut.md)                                                                                                                                           |

TalonScript are files with a `.talon` extension. And though they can be stored anywhere in your [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory),
you may wish to keep them in a `my-talon` subdirectory as a way to [manage your customizations](../managing-customizations.md).

In general Talon will automatically pick up and apply any changes to `.talon` or `.py` files in your Talon user directory, so you don't have to restart Talon each time you make a change.

:::docofeedback Fact Check

The original wording only mentioned changes to `.talon` or `.py`.
However, this seems to also apply to `.talon-list` and `.csv` files as well.

:::

## `.talon` File Syntax

TalonScript `.talon` files consist of two parts:

1. A [context header](./context-header.md) defining the circumstances in which the file is active.

2. A body that implements various behaviors within that context. 

The body is where you can define [voice commands](./voice-commands.md) and [keyboard shortcuts](./customize-kbd-shortcut.md), 
[activate registered tags](./tag-activation.md) and [change settings](../settings.md).

A line with a single hyphen `-` separates the context header from the body.

:::info Comments

\# Comments start with a # sign, and they must always be on their own line.

:::

Here is a sample `.talon` file. The context header specifies that the body should only be considered active if the window's title contains the text `Gmail`.

And the body defines three separate voice commands - `find on page`, `reload page` and `insert bold text`.

```talon
title: /Gmail/
-

# Define a voice command with an associated function
find on page: key(ctrl-f)

reload page:
    key(ctrl-r)

insert bold text:
    key(ctrl-b)
    insert("type in this text (it will be bolded)")
    key(ctrl-b)
```

### Body

The body can have several kinds of content. Most often you'll be defining voice commands, so that's all we'll talk about here.

Voice commands start with the actual words you want to speak followed by a ':' character. They then list out all the actions you want to perform as a result of that command. If you only want to perform a single action then you can put it on a single line as in the first 'find on page' command. If you have more than one action you must put each action on its own line. The actions associated with a command must be indented with spaces, but it doesn't matter how many you use. Separate voice commands with one or more blank lines.

## Examples

If you've read the above you should have some idea of how to make customizations to Talon, particularly using `.talon` files. 
This section contains a recipe list of some common/instructive customizations you might like to make.
