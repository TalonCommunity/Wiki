---
sidebar_position: 1
---

# Basic Usage

:::info Talon Installation

There are a number of steps involved in the [installation of Talon](/docs/Resource%20Hub/Talon%20Installation/installation_guide.md).
Once you have completed that and entered a few letters as a test, you are ready for actually using Talon.

:::

:::docoscope community

:::

## Talon Modes

Talon has three main [modes](./talon-modes.md) (command, dictation and sleep), and when started it launches in command mode.
Specific commands are used to [switch](./talon-modes.md#mode-switching) between the different modes.

## Command Mode

It's recommended to first learn what can be said in [command mode](./Command%20Mode/command_mode.md):

- starting with the [alphabet](/docs/Basic%20Usage/Command%20Mode/single-characters.md),
- then get familiar with the keys, [symbols](/docs/Basic%20Usage/Command%20Mode/single-characters.md#symbols),
- saying [words and phrases](./Command%20Mode/words-and-phrases.md) (and how to format them),
- controlling the [mouse](./Command%20Mode/pc-control.md#mouse-commands), and
- [text and navigation](/docs/Basic%20Usage/Command%20Mode/text-and-navigation.md) commands.

Once you have the basics of text input down:

- try [copying some code](./writing-code/) from one window to another.
- explore using ordinal repetition for easily [repeating a command](./Command%20Mode/command_mode.md#chaining-and-repeating-commands) without pausing (e.g., saying `go up fifth` will go up five lines)
- window switching (`focus chrome`)

:::docotodo

Also look at controlling specific applications and application tags

:::

:::note vim

If you use vim, just start with the numbers and alphabet, otherwise look at generic_editor.talon as well at jetbrains, vscode, and any other integrations.

:::

## Dictation Mode

[Dictation mode](./dictation_mode.md) enables you to enter text using continuous speech.
Nearly everything spoken would be inserted literally. For example, saying the phrase `go up fifth` described above would enter those words literally rather than
causing the insertion point to move up five lines.

## Learning Tools

- [chaosparrot's talon practice website:](https://chaosparrot.github.io/talon_practice) a website with games and lessions to help you practice basic Talon commands.

## Additional Capabilities

Aside from all the features described in this wiki, additional extra capabilities may be added from time to time.

For example in the [beta version](/docs/Resource%20Hub/beta_talon.md) you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.
