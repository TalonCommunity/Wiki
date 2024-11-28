---
sidebar_position: 1
---

# Customization Overview

Once you have successfully [set up Talon](/docs/Resource%20Hub/Talon%20Installation/installation_guide.md)
and have at least some familiarity with [basic usage](/docs/Basic%20Usage/basic_usage.md), you may find that you would like to change some of how your Talon setup behaves.

Talon supports customization of many of its behaviors. It is intended that most types of changes can be made
by users of all skill levels.


:::docoscope

Some pages under ""Customization" pertain to the talon platform itself, and is not dependent on the
talon community user file set being installed. Some are only relevant if talon community is installed.
See the individual pages for details.

:::


## Customizable Items

| Category                                                        | User Skill  | Description                                                                |
| --------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| [Community items](#customizing-community-items)                 | All         | the talon alphabet, vocabulary, known websites etc                         |
| [Voice commands](./TalonScript/voice-commands.md)               | All         | create new voice commands that when heard perform a set of actions         |
| [Settings](./settings.md)                                       | All         | settings such as Talon dark mode, the mouse grid numbering orientation etc |
| [Create new actions in Python](./Python%20Programming/index.md) | Programmers | create building blocks that can be used within voice commands              |

:::tip Examples

Here are some [customization examples](./Examples/index.md)

:::

## Customizing Community Items

:::docoscope Talon Community User Files Set

:::

The talon community user file set comes with default entries for various important items, such as the alphabet
and the list of common websites.

The default entries for the items listed below can all be customized.

:::warning Managing Customizations

Before changing any of these files, it is recommended to first read the notes on [managing customizations](./managing-customizations.md)

:::

### Lexical Items

| What                                                                                | Format        | Community User File Set Location         |
| ----------------------------------------------------------------------------------- | ------------- | ---------------------------------------- |
| [alphabet](/docs/Basic%20Usage/Command%20Mode/single-characters.md#talon-alphabet)  | `.talon-list` | `/core/keys/letter.talon-list`           |
| [vocabulary](/docs/Basic%20Usage/dictation_mode.md#vocabulary-customization)        | `.talon-list` | `/core/vocabulary/vocabulary.talon-list` |
| [homophones](/docs/Basic%20Usage/Command%20Mode/text-shortcuts.md#homophones)       | `.csv`        | `/core/homophones/homophones.csv`        |
| [abbreviations](/docs/Basic%20Usage/Command%20Mode/text-shortcuts.md#abbreviations) | `.csv`        | `/settings/abbreviations.csv`            |
| [replacement words](/docs/Basic%20Usage/dictation_mode.md#replacement-words)        | `.csv`        | `/settings/words_to_replace.csv`         |

### Aliases & Text Shortcuts

| What                                                                                                       | Format        | Community User File Set Location                             |
| ---------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------ |
| [search engines](/docs/Resource%20Hub/Supported%20Applications/Command%20Groups/browser.md#search-engines-list) | `.talon-list` | `/core/websites_and_search_engines/search_engine.talon-list` |
| [websites](/docs/Resource%20Hub/Supported%20Applications/Command%20Groups/browser.md#website-list)              | `.talon-list` | `/core/websites_and_search_engines/website.talon-list`       |
| [application names](/docs/Basic%20Usage/Command%20Mode/pc-control.md#application-names)                    | `.csv`        | `/core/app_switcher/app_name_overrides.<platform>.csv`       |
| [file extensions](/docs/Basic%20Usage/Command%20Mode/text-shortcuts.md#file-extensions)                    | `.csv`        | `/settings/file_extensions.csv`                              |
| [system paths](/docs/Resource%20Hub/Supported%20Applications/Command%20Groups/file_manager.md#usersystem_path)   | `.talon-list` | `/core/system_paths-{hostname}.talon-list`                   |
