# Dictation Mode

In **dictation mode**, your speech will be transcribed as plain text (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems.

To switch to dictation mode from command mode, simply say `dictation mode`. Now if you say `plex yank zip` then `plex yank zip` will be inserted, rather than the `xyz` that would be inserted if you were in command mode.

## Commands Available within Dictation Mode

:::tip Insert Everything Literally

The rest of this section describes the commands available within dictation mode.
But if you want your phrase to be treated literally, then prefix it with the word `escape`.

For example, if you want to insert the words `new paragraph` (rather than pressing the `enter` key twice), say `escape new paragraph`.

:::

### Capitalization and Spacing

Whilst dictating, you might say a phrase few words, have a little pause, then say another phrase.

In general, one wants a space before the words of the second phrase. For example, if you say:

- `the quick brown fox` (pause) `jumps over the lazy dog`,
  you want:
- `the quick brown fox jumps over the lazy dog`
  rather than:
- `the quick brown foxjumps over the lazy dog`

To make dictating more efficient and natural, talon will automatically insert the space character before the second phrase without you having to say `spacebar`.

Similarly, after saying `full stop` typically you would want the next word spoken to be capitalized. And talon will typically do this as well.

### Prose Modifier Words

However, if this is not wanted, then the following modifier words can be used:

| Command               | Description                                         |
| --------------------- | --------------------------------------------------- |
| `no cap` or `no caps` | don't capitalize the next word spoken               |
| `no space`            | don't insert a space character before the next word |
| `cap`                 | capitalize the next word spoken                     |

### Formatting Commands

The following commands work on the text inserted by the previous phrase.

| Command                         | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `no cap that` or `no caps that` | remove capitalization from the previous phrase   |
| `cap that`                      | capitalize the first word of the previous phrase |
| `no space that`                 | remove the space before the previous phrase      |

The following commands work on the currently selected text.

| Command                              | Description                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formatted <user.format_text>`       | what does this do?                                                                                                                                      |
| `format selection <user.formatters>` | formats the selected text with the specified [formatters](/docs/Basic%20Usage/Command%20Mode/words-and-phrases.md#formatters), `format selection snake` |

### Special Words

There are some words that in dictation mode are not inserted literally, but rather insert the following:

| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `spacebar`                  | inserts a single space character                             |
| `new line`                  | inserts a new line character                                 |
| `new paragraph`             | inserts a new paragraph (two new line characters)            |
| `open quote`, `close quote` | inserts a double quote character                             |
| `smiley`, `winky`, `frowny` | inserts the relevant emoji characters `:-)`, `;-)` and `:-(` |

As mentioned above, if you want to literally insert the text `new line` you would say `escape new line`.

### Entering Letters, Numbers and Times

Whilst in dictation mode, saying `six colon forty five` will insert `six: forty five`.
To enter `6:45` simply prefix with `numb`, so say `numb six colon forty five`.
The following syntax is recognized:

| Command                                                                | Action                  | Spoken Form                                                  |
| ---------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `^press <user.modifiers>$`                                             | `shift` key pressed     | `press shift`                                                |
| `^press <user.keys>$`                                                  | insert `r2d2`           | `press red two drum two`                                     |
|                                                                        | `control+s` key pressed | `press control sun`                                          |
| `(numb \| numeral) <user.number_string>`                               | insert `463`            | `numb four six three` or `numb four hundred and sixty three` |
| `(numb \| numeral) <user.number_string> (dot \| point) <digit_string>` | insert `3.1415`         | `numb three point one four one five`                         |
| `(numb \| numeral) <user.number_string> colon <digit_string>`          | insert `10:25`          | `numb ten colon twenty five`                                 |

:::note

The `press` command functions in the same way as in command mode, but in dictation mode the `press` must be at the beginning of the utterance.

:::

### Navigation Commands

| Command                                   | Example                |
| ----------------------------------------- | ---------------------- |
| `go up <number_small> (line \| lines)`    | `go up five lines`     |
| `go down <number_small> (line \| lines)`  | `go down three lines`  |
| `go left <number_small> (word \| words)`  | `go left eight words`  |
| `go right <number_small> (word \| words)` | `go right eight words` |
| `go line start`                           |                        |
| `go line end`                             |                        |

### Selection Commands

| Command                                                 | Example                         |
| ------------------------------------------------------- | ------------------------------- |
| `select left <number_small> (word \| words)`            | `select left two words`         |
| `select right <number_small> (word \| words)`           | `select right two words`        |
| `select left <number_small> (character \| characters)`  | `select left seven characters`  |
| `select right <number_small> (character \| characters)` | `select right three characters` |
| `select that`                                           | selects the last phrase         |

### Deletion Commands

| Command                                                | Example                             |
| ------------------------------------------------------ | ----------------------------------- |
| `clear left <number_small> (word \| words)`            | `clear left two words`              |
| `clear right <number_small> (word \| words)`           | `clear right two words`             |
| `clear left <number_small> (character \| characters)`  | `clear left seven characters`       |
| `clear right <number_small> (character \| characters)` | `clear right three characters`      |
| `nope selection` or `scratch selection`                | deletes the currently selected text |
| `nope that` or `scratch that`                          | deletes the last phrase             |

### Undo/Redo

| Command     | Description      |
| ----------- | ---------------- |
| `undo that` | performs an undo |
| `redo that` | performs a redo  |

## Vocabulary Customization

The inbuilt vocabulary in the Conformer [speech recognition engine](/docs/Resource%20Hub/Speech%20Recognition/speech%20engines.md) can be supplemented by entries in
the `/core/vocabulary/vocabulary.talon-list` file.
Each entry must appear on a separate line.

:::warning Managing Customizations

Before changing the vocabulary file, it is recommended to first read the notes on [managing customizations](/docs/Customization/managing-customizations.md)

:::

For example, for Talon to recognize the word "staycation", simply include a line in `vocabulary.talon-list` with the word:

```
staycation
```

This works as the spoken form and written form of the word are the same, and talon can cleverly infer how to recognize the word from its spelling.

:::docofeedback Fact Check

Is this correct?
Does this also happen with other recognition engines?

:::

Where the spoken and written forms of the word are different, the entry needs to include both.

For example, Talon has difficulty recognizing the name "Woollahra" just from its spelling.
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
  (eg saying `say where is wool lara` causes Talon to insert `where is Woollahra`)

:::docotodo

There seems to be commands from here that still need to be documented:
`core\vocabulary\edit_vocabulary.talon`

for example `copy to vocab [as <phrase>]$: user.add_selection_to_vocabulary(phrase or "")`

:::

## Replacement Words

:::docofeedback

ronzulu: I am unclear about the purpose of `words_to_replace.csv` and how it differs to `vocabulary.talon-list`.
The default file has the following entries:

```
January,january
February,february
April,april
June,june
July,july
August,august
September,september
October,october
November,november
December,december
```

However if I delete the entries from `settings/words_to_replace.csv`, restart talon for good measure, and from dictation mode say
any of those, the text is inserted correctly capitalized. For example when saying "I wonder what I'll be doing in December"
the word December is correctly capitalized.

:::
