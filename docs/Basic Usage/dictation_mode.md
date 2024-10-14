# Dictation Mode

In **dictation mode**, your speech will be transcribed as plain text (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems.

To switch to dictation mode from command mode, simply say `dictation mode`. Now if you say `plex yank zip` then `plex yank zip` will be inserted, rather than the `xyz` that would be inserted if you were in command mode.

:::tip Insert Everything Literally

The rest of this section describes the commands available within dictation mode.
But if you want your phrase to be treated literally, then prefix it with the word `escape`.

For example, if you want to insert the words `new paragraph` (rather than pressing the `enter` key twice), say `escape new paragraph`.


:::



## Capitalization and Spacing

Whilst dictating, you might say a  phrase few words, have a little pause, then say  another phrase.

In general, one Wants a space before the words of the second phrase. For example, if you say the quick brown fox pause jumps over the lazy dog,
you want quick brown fox pause jumps over the lazy dograther than quick brown fox pause jumps over the lazy dog.

To make dictating more efficient  and natural, talon will automatically insert the space character before the second phrase without you having to say spaceBar.

Similarly, after saying "full Stop" typically you would want the next  word spoken to be capitalized. And talon will typically do this as well.

### Prose Modifier Words

However, if this is not wanted, then the following modifier words can be used:

| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `no cap` or `no caps`                  | don't capitalize the  next word   spoken                         |
| `no space`                  | don't insert a space character before the next word                          |
| `cap`                  | capitalize the  next word   spoken                          |
 
## Formatting Commands

The following commands work on the text inserted by the previous phrase.

| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `no cap that` or `no caps that`                  | remove capitalization from the previous phrase             |
| `cap that`                 | capitalize the first word of the previous phrase             |
| `no space that`                 | remove the space before the previous phrase             |


The following commands work on the currently selected text.

| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `formatted <user.format_text>`                 | what does this do?             |
| `format selection <user.formatters>`                 | formats the selected text with the specified [formatters](/docs/Basic%20Usage/formatters.md), `format selection snake`            |


## Special Words

There are some words that in dictation mode are not inserted literally, but rather insert the following:



| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `spacebar`                  | inserts a single space character                             |
| `new line`                  | inserts a new line character                                 |
| `new paragraph`             | inserts a new paragraph (two new line characters)            |
| `open quote`, `close quote` | inserts a double quote character                             |
| `smiley`, `winky`, `frowny` | inserts the relevant emoji characters `:-)`, `;-)` and `:-(` |

## Entering Letters, Numbers and Times

Whilst in dictation mode, saying `six colon forty five` will insert `six: forty five`.  
To enter `6:45` simply prefix with `numb`, so say `numb six colon forty five`. 
The following syntax is recognized:


| Command                                                                | Example Written Form | Spoken Form                                                  |
| ---------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| `(numb \| numeral) <user.number_string>`                               | `463`                | `numb four six three` or `numb four hundred and sixty three` |
| `(numb \| numeral) <user.number_string> (dot \| point) <digit_string>` | `3.1415`             | `numb three point one four one five`                         |
| `(numb \| numeral) <user.number_string> colon <digit_string>`          | `10:25`              | `numb ten colon twenty five`                                 |

The `press` command functions in the same way as in command mode, but in dictation mode the `press` must be at the beginning of the utterance. For example, `press red two drum two` for `r2d2`

Modifier keys can also be used with the `press` command, for example on windows `press control sun` we'll press the `control+s` key.

## Navigation Commands


| Command                                 | Example                  |
| --------------------------------------- | ------------------------------------------- |
| `go up <number_small> (line \| lines)`           | `go up five lines` |
| `go down <number_small> (line \| lines)`           | `go down three lines` |
| `go left <number_small> (word \| words)`           | `go left eight words` |
| `go right <number_small> (word \| words)`           | `go right eight words` |
| `go line start`           |  |
| `go line end`           |  |


## Selection Commands

| Command                                 | Example                  |
| --------------------------------------- | ------------------------------------------- |
| `select left <number_small> (word \| words)`           | `select left two words` |
| `select right <number_small> (word \| words)`           | `select right two words` |
| `select left <number_small> (character \| characters)`           | `select left seven characters` |
| `select right <number_small> (character \| characters)`           | `select right three characters` |
| `select that`           | selects the last phrase |

## Deletion Commands

| Command                                 | Example                  |
| --------------------------------------- | ------------------------------------------- |
| `clear left <number_small> (word \| words)`           | `clear left two words` |
| `clear right <number_small> (word \| words)`           | `clear right two words` |
| `clear left <number_small> (character \| characters)`           | `clear left seven characters` |
| `clear right <number_small> (character \| characters)`           | `clear right three characters` |
| `nope selection` or `scratch selection`           | deletes the currently selected text |
| `nope that` or `scratch that`           | deletes the last phrase |


## Undo/Redo

| Command                               | Description                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `undo that`                      | performs an undo                                   |
| `redo that`            | performs a redo |

