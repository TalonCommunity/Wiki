# Dictating Prose

You can dictate prose in dictation mode and when using commands that take prose input like the formatter commands. This lets you dictate words and use the following features for inserting characters.

## Punctuation

You can see the spoken forms for inserting punctuation characters by saying `help punctuation`.

## Spelling

You can see the spoken forms for letters by saying `help alphabet`. You can insert lowercase letters by saying `spell` followed by letters' spoken forms. For example, `spell air bat cap` inserts "abc". You can insert capital letters by saying `ship` — for example, `ship air bat cap` inserts "ABC".

## Numbers

You can insert a number by saying `numb` or `numeral` then the number. For example, saying `numb five` inserts "5". You can also include "negative", "point", "dot", "comma" or "colon" as in the additional examples below.

| Spoken Form                  | Inserted Text |
| ---------------------------- | ------------- |
| `numb three point five`      | 3.5           |
| `numb nineteen seventy five` | 1975          |
| `numb negative five`         | -5            |
| `numb three comma four`      | 3,4           |
| `numb three colon twenty`    | 3:20          |

## Percentages

You can insert a number followed by a percent sign by dictating the number then `percent`. For instance, saying `thirty five point nine percent` inserts "35.9%".

## Times of Day

You can insert times of day. For instance, saying `twelve thirty` inserts "12:30". Saying `two P M` inserts "2pm"; saying `five thirty am` inserts "5:30am".

## Currency

You can insert a monetary amount by saying a number followed by a currency, such as `twelve dollars` to insert "$12". Saying a number after the currency puts it after a decimal point, for example saying `twelve dollars fifty` inserts "$12.50". You can optionally say `and` after the currency and/or `cents` or `pence` at the end, for example `twelve dollars and fifty cents` inserts "$12.50".

## Abbreviations

You can insert an abbreviation by saying `brief` followed by the abbreviation. For instance, saying `brief statistic` inserts "stat". You can read and edit the list of abbreviations by saying `customize abbreviations`.

## Modifiers

You can use the following prose modifiers for manual formatting.

| Prose formatting options | Description                                         |
| ------------------------ | --------------------------------------------------- |
| `cap`                    | capitalize the next word                            |
| `no cap` or `no caps`    | the next word is in lowercase                       |
| `no space`               | the next word is inserted without a space before it |

For instance, saying `this is an cap example of no space formatting` inserts "This is an Example offormatting".

## Prose Snippets

You can use the following miscellaneous prose snippets when dictating prose.

| Spoken Form     | Text/Keystroke             |
| --------------- | -------------------------- |
| `spacebar`      | presses the space bar      |
| `new line`      | presses enter              |
| `new paragraph` | presses enter twice        |
| `open quote`    | inserts a space and then " |
| `close quote`   | inserts "                  |
| `smiley`        | inserts ':-)'              |
| `winky`         | inserts ';-)'              |
| `frowny`        | inserts ':-('              |

## Contacts

You can insert information about your contacts such as name and email. This is documented [in the contacts README.md](https://github.com/talonhub/community/blob/main/core/contacts/README.md).

## Pasting

You can say `clip clip` to insert the contents of the clipboard. For instance, if you have copied the text "hello there", saying `he sent me the message clip clip period` inserts "he sent me the message hello there."

## Notes for Technical Users

Community uses the `<user.prose>` and `<user.raw_prose>` captures to let the user dictate prose. `<user.raw_prose>` is used by dictation mode, whereas the `<user.prose>` capture is used by commands that take prose input. These captures allow dictating words and use the following lists and captures to offer more functionality.

| Capture/List                   | Purpose                          |
| ------------------------------ | -------------------------------- |
| `{user.punctuation}`           | punctuation characters           |
| `<user.prose_spell>`           | spelling with lowercase letters  |
| `<user.prose_ship>`            | spelling with upper case letters |
| `<user.number_prose_prefixed>` | numbers                          |
| `<user.prose_percent>`         | percentages                      |
| `<user.prose_time>`            | times of day                     |
| `<user.prose_currency>`        | currency amounts                 |
| `{user.abbreviation}`          | abbreviations                    |
| `<user.prose_modifier>`        | prose modifiers                  |
| `{user.prose_snippets}`        | miscellaneous prose snippets     |
| `<user.prose_contact>`         | contact information              |
| `<user.prose_clipboard>`       | the clipboard contents           |

Note that the prose modifiers are available in the `<user.prose>` capture and are available in dictation mode as commands.
