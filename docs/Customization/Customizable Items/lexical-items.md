---
sidebar_position: 1
---
# Lexical Items


| What             | Format      | Community User File Set Location         |        |
| ---------------- | ----------- | ---------------------------------------- | ------ |
| [alphabet](#alphabet) | `.talon-list` | `/core/keys/letter.talon-list`  | Note 1 |
| [vocabulary](#vocabulary)       | `.talon-list` | `/core/vocabulary/vocabulary.talon-list` | Note 2 |
| homophones       | `.csv`        | `/core/homophones/homophones.csv`      | Note 3 |
| abbreviations    | `.csv`         | `/settings/abbreviations.csv`            | Note 4 |
| words to replace | `.csv`         | `/settings/words_to_replace.csv`         | Note 4 |

:::warning

Before changing any of these files, it is recommended to first read the notes on [managing customizations](../managing-customizations.md)

:::

## Alphabet

Talon has its own [alphabet](/docs/Basic%20Usage/Command%20Mode/single-characters.md#talon-alphabet), a set of words that you say instead of individual letters.

This is something that you may need to use fairly regularly, and so it should be something that is both:
- recognized with a high degree of accuracy by Talon
- easy for you to say

If the defaults aren't suitable for you, then you may wish to try alternatives, with some [suggestions here](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md#alternatives-to-the-default-alphabet).

## Vocabulary

The inbuilt vocabulary in the Conformer [speech recognition engine](/docs/Resource%20Hub/Speech%20Recognition/speech%20engines.md) can be supplemented by entries in this file.
each entry being on a separate line.

For example, for Talon to recognize the word "staycation", simply include a line in `vocabulary.talon-list` with the word:
```
staycation
```

This works as the spoken form and written form of the word are the same, and talon can cleverly infer how to recognize the word from its spelling.

:::warning Fact Check

Is this correct?
Does this also happen with other recognition engines?

:::

Where the spoken and written forms of the word are different, the entry needs to include both.

For example, Talon has difficulty recognizing the word "Woollahra" just from its spelling.
However, when written out as follows, and with slight adjustment to the pronunciation, it is recognized accurately:
```
wool lara: Woollahra
```

Note that as per this example, the written form is plain text and not surrounded by quotes.

:::tip Works in Dictation Mode

:::

Entries included in `vocabulary.talon-list` are recognized in: 
- [dictation mode](/docs/Basic%20Usage/dictation_mode.md)
- within a [word voice command](/docs/Basic%20Usage/Command%20Mode/words-and-phrases.md#saying-individual-words) 
  (eg saying `proud staycation` causes Talon to insert `Staycation`)
- within a [phrase](/docs/Basic%20Usage/Command%20Mode/words-and-phrases.md#saying-phrases) 
  (eg saying `where is wool lara` causes Talon to insert `where is Woollahra`)

## Still to Do

 technically , the filename is not important, what is important is that the file contains the







You can also add words to the vocabulary or replacements (words_to_replace) by using the commands in `[edit_vocabulary.talon](core/vocabulary/edit_vocabulary.talon)`.

Also note that some are in the `settings` folder and are not created until you launch Talon with `community` installed.

