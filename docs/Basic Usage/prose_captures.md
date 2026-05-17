# The `<user.prose>` and `<user.raw_prose>` Capture

Community uses the `<user.prose>` and `<user.raw_prose>` capures to let the user dictate prose. `<user.raw_prose>` is used by dictation mode, and the `<user.prose>` capture is used by commands that take prose input like the formatter commands. These captures allow dictating words and use the following lists and captures to offer more functionality.

## `{user.punctuation}`

The `{user.punctuation}` list allows inserting punctuation symbols. You can see the spoken forms for the symbols by saying `help punctuation`.

## `<user.prose_spell>` and `<user.prose_ship>`

The `<user.prose_spell>` capture allows inserting letters by saying `spell <user.letters>`. You can see the spoken forms for letters by saying `help alphabet`. With base Community, you could say `spell abc` to insert "abc". The `<user.prose_ship>` capture allows inserting capital letters by saying `ship <user.letters>`, such as by saying `ship air bat cap` to insert "ABC".

## `<user.number_prose_prefixed>`

The `<user.number_prose_prefixed>` capture allows inserting a number by saying `numb` or `numeral` and then a number. Saying `numb five` inserts "5". The following table has more examples.

| Spoken Form               | Inserted Text |
| ------------------------- | ------------- |
| `numb three point five`   | 3.5           |
| `numb nineteen seventy five`   | 1975           |
| `numb negative five`      | -5            |
| `numb three comma four`   | 3,4           |
| `numb three colon twenty` | 3:20          |

## `<user.prose_percent>`

The `<user.prose_percent>` capture allows inserting a number followed by a percent sign by dictating a number and then `sign`. For instance, saying `thirty five point nine percent` inserts "35.9%".

## `<user.prose_time>`

The `<user.prose_time>` capture allows inserting a time of day. For instance, saying `twelve thirty` inserts "12:30". Saying `two pm` inserts "2pm" and saying `five thirty am` inserts "5:30am".

## `<user.prose_currency>`

The `<user.prose_currency>` capture allows inserting an amount of money by saying a number followed by a currency, such as by saying `twelve dollars` to insert "$12". Saying a number after the currency puts the second number after a decimal point, such as saying `twelve dollars fifty` to insert "$12.50". You can optionally say `and` after the currency and `cents` or `pence` at the end, such as saying `twelve dollars and fifty cents` to insert "$12.50".

## `<user.abbreviation>`

The `<user.abbreviation>` capture allows inserting an abbreviation by saying `brief {user.abbreviation}`. For instance, saying `brief statistic` inserts "stat". You can read and edit the list of abbreviations by saying `customize abbreviations`.

## `<user.prose_modifier>`

The following prose modifiers are available in the `<user.prose>` capture and are available in dictation mode as commands.

| Prose formatting options | Description                               |
| ------------------------ | ----------------------------------------- |
| `cap`                    | capitalize the next word                  |
| `no cap` or `no caps`    | the next word is in lowercase             |
| `no space`               | no space is inserted before the next word |

For instance, saying `this is an cap example of no space formatting` inserts "This is an Example offormatting".

## `{user.prose_snippets}`

The `{user.prose_snippets}` list supports inserting the symbols and performing the key presses shown in the following table.

| Spoken Form     | Text/Keystroke             |
| --------------- | -------------------------- |
| `spacebar`      | presses the spacebar       |
| `new line`      | presses enter              |
| `new paragraph` | presses enter twice        |
| `open quote`    | inserts a space and then " |
| `close quote`   | inserts "                  |
| `smiley`        | inserts ':-)'              |
| `winky`         | inserts ';-)'              |
| `frowny`        | inserts ':-('              |

## `<user.prose_contact>`

The `<user.prose_contact>` capture supports inserting information about your contacts such as name and email. This is documented [in the contacts README.md](https://github.com/talonhub/community/blob/main/core/contacts/README.md).

## `<user.prose_clipboard>`
The `<user.prose_clipboard>` capture lets you say `clip clip` to insert the contents of the clipboard. For instance, if you have copied the text "hello there", saying `he sent me the message clip clip period` inserts "he sent me the message hello there.".