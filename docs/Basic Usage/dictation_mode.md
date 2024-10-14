# Dictation Mode

In **dictation mode**, your speech will be transcribed as plain text (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems.

To switch to dictation mode from command mode, simply say `dictation mode`. Now if you say `plex yank zip` then `plex yank zip` will be inserted, rather than the `xyz` that would be inserted if you were in command mode.

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
 


## Special Words

There are some words that in dictation mode are not inserted literally, but rather insert the following:



| Command                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `spacebar`                  | inserts a single space character                             |
| `new line`                  | inserts a new line character                                 |
| `new paragraph`             | inserts a new paragraph (two new line characters)            |
| `new paragraph`             | inserts a new paragraph (two new line characters)            |
| `open quote`, `close quote` | inserts a double quote character                             |
| `smiley`, `winky`, `frowny` | inserts the relevant emoji characters `:-)`, `;-)` and `:-(` |

## Entering Numbers and Times

Whilst in dictation mode, saying `six colon forty five` will insert `six: forty five`.  
To enter `6:45` simply prefix with `numb`, so say `numb six colon forty five`. 
The following syntax is recognized:


| Command                                                                | Example Written Form | Spoken Form                                                  |
| ---------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| `(numb \| numeral) <user.number_string>`                               | `463`                | `numb four six three` or `numb four hundred and sixty three` |
| `(numb \| numeral) <user.number_string> (dot \| point) <digit_string>` | `3.1415`             | `numb three point one four one five`                         |
| `(numb \| numeral) <user.number_string> colon <digit_string>`          | `10:25`              | `numb ten colon twenty five`                                 |

