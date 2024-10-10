# Formatters

Formatters allow you to insert a word or words with consistent capitalization and punctuation. 

This section refers to inserting text whilst in [command mode](command_mode.md). Dictating whilst in [dictation mode](dictation_mode.md) is described separately.

To insert some text, say the name of the formatter followed by the text itself.

A simple example uses the `say` formatter. Saying `say hello world` will insert the text `hello world`.

Prose formatters (marked with \* in the help window) preserve hyphens and apostrophes. Non-prose (code) formatters strip punctuation instead, for example to generate a valid variable name. `title how's it going` inserts "How's It Going"; `hammer how's it going` inserts "HowsItGoing".



## Code Formatters



| Formatter         | Capitalization                                              | Spacing                         | Inserted Text    |
| ----------------- | ----------------------------------------------------------- | ------------------------------- | --- |
| `all cap`         | Every word is all upper case                                | Normal                          |     |
| `all down`        | Every word is all lower case                                | Normal                          |     |
| `camel`           | The first word is lowercase, subsequent words in title case | No spaces between words         |     |
| `smash`           | Normal                                                      | No spaces between words         |     |
| `snake`           | Normal                                                      | Single underscore between words |     |
| `kebab`           | Normal                                                      | Dashes between words            |     |
| `help formatters` | show all available formatters                               |                                 |     |

## Prose Formatters

These set of formatters are used for entering prose, and they all enter text with standard spacing.
There is no equivalent to `snake` for example, with underscores between words.


| Formatter        | Capitalization                            |
| ---------------- | ----------------------------------------- |
| `say` or `speak` | Normal (no special formatting is applied) |
| `sentence`       | The first word is capitalized             |
| `title`          | Every word starts with a capital letter   |


Try using a formatter by saying `snake hello world`. This inserts "hello_world".

Multiple formatters can be chained together — for example, `dubstring snake hello world` inserts "hello_world".

`help format` displays available formatters with examples of their output when followed by `one two three`.

Reformat existing text with one or more formatters by selecting it, then saying the formatter name(s) followed by `that`. Say `help reformat` to display how each formatter reformats `one_two_three`.

Say a formatter then the text. (i.e. `say "hello world"`) to dictate while in command mode

