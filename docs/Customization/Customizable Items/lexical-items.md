---
sidebar_position: 1
---

# Lexical Items

| What                            | Format        | Community User File Set Location         |        |
| ------------------------------- | ------------- | ---------------------------------------- | ------ |
| [alphabet](#alphabet)           | `.talon-list` | `/core/keys/letter.talon-list`           | Note 1 |
| [vocabulary](#vocabulary)       | `.talon-list` | `/core/vocabulary/vocabulary.talon-list` | Note 2 |
| [homophones](#homophones)       | `.csv`        | `/core/homophones/homophones.csv`        | Note 3 |
| [abbreviations](#abbreviations) | `.csv`        | `/settings/abbreviations.csv`            | Note 4 |
| [words to replace]              | `.csv`        | `/settings/words_to_replace.csv`         | Note 4 |

:::warning

Before changing any of these files, it is recommended to first read the notes on [managing customizations](../managing-customizations.md)

:::

## Alphabet

Talon has its own [alphabet](/docs/Basic%20Usage/Command%20Mode/single-characters.md#talon-alphabet), a set of words that you say instead of individual letters.

This is something that you may need to use fairly regularly, and so it should be something that is both:

- recognized with a high degree of accuracy by Talon
- easy for you to say

If the defaults aren't suitable for you, then you may wish to try alternatives, with some [suggestions here](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md#alternatives-to-the-default-alphabet).

## Homophones

The `homophones.csv` file is the inbuilt file that comes with Talon community with the word list
used by the [homophones voice commands](/docs/Basic%20Usage/Command%20Mode/text-and-navigation.md#homophones).

This file is located within your local copy of Talon community user file set, and as described in [directory structure - limitations](../managing-customizations.md#limitations)
can only be edited in that location.

## Abbreviations

##

You can also add words to the vocabulary or replacements (words_to_replace) by using the commands in `[edit_vocabulary.talon](core/vocabulary/edit_vocabulary.talon)`.

Also note that some are in the `settings` folder and are not created until you launch Talon with `community` installed.
