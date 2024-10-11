# Formatters

Formatters allow you to insert a word or words with consistent capitalization and punctuation. 

This section refers to inserting text whilst in [command mode](command_mode.md). Dictating whilst in [dictation mode](dictation_mode.md) is described separately.

To insert some text, say the name of the formatter followed by the text itself.

A simple example uses the `say` formatter. Saying `say hello world` will insert the text `hello world`.

## Formatter Classes

There are two classes of formatters. Prose formatters preserve hyphens and apostrophes, whilst non-prose (code) formatters strip punctuation instead, for example:

| Formatter Class | Phrase                  | Inserted Text    |
| -------------- | ----------------------- | ---------------- |
| Code           | `hammer how's it going` | `HowsItGoing`    |
| Prose          | `title how's it going`  | `How's It Going` |


## Code Formatters

| Formatter  | Capitalization                                              | Spacing                                      | Inserted Text     |
| ---------- | ----------------------------------------------------------- | -------------------------------------------- | ----------------- |
| `all cap`  | Every word is all upper case                                | Normal                                       | `ONE TWO THREE`     |
| `all down` | Every word is all lower case                                | Normal                                       | `one two three`     |
| `camel`    | The first word is lowercase, subsequent words in title case | No spaces between words                      | `oneTwoThree` |
| `cap`      | The first word is capitalized                               | Normal                      | `One two three`     |
| `constant` | Every word is all upper case                                | Underscore between words                     | `ONE_TWO_THREE` |
| `dotted`   | Normal                                                      | Dot between words                            | `one.two.three` |
| `dunder`   | Normal                                                      | Two underscores between words                | `one__two__three` |
| `hammer`   | Every word in title case                                    | No spaces between words                      | `OneTwoThree` |
| `kebab`    | Normal                                                      | Dashes between words                         | `one-two-three` |
| `list`     | Normal                                                      | `, ` between words                           | `one, two, three`   |
| `packed`   | Normal                                                      | `::` between words                           | `one::two::three` |
| `padded`   | Normal                                                      | A space before, between and after words      | ` ` `one two three` ` ` |
| `slasher`  | Normal                                                      | A forward slash `/` before and between words | `/one/two/three` |
| `smash`    | Normal                                                      | No spaces between words                      | `onetwothree` |
| `snake`    | Normal                                                      | Underscore between words                     | `one_two_three` |
| `unformat` | Normal                                                      | Normal                                       | `one two three`     |

There are also formatters to simplify string entry:

| Formatter    | Capitalization                                                     | Inserted Text   |
| ------------ | ------------------------------------------------------------------ | --------------- |
| `dub string` | Normal                                                             | `"one two three"` |
| `string`     | Normal                                                             | `'one two three'` |

Multiple formatters can be chained together — for example, `dubstring snake hello world` inserts "hello_world".



## Prose Formatters

These set of formatters are used for entering prose, and they all enter text with standard spacing.
There is no equivalent to `snake` for example, with underscores between words.


| Formatter        | Capitalization                            | Inserted Text   |
| ---------------- | ----------------------------------------- |--------------- |
| `say` or `speak` | Normal (no special formatting is applied) | `one two three`     |
| `sentence`       | The first word is capitalized             | `One two three`     |
| `title`          | Every word in title case (except for words such as `and` and `or`)   | `one two three`     |


## Reformat Existing Text

Reformat existing text with one or more formatters by selecting it, then saying the formatter name(s) followed by `that`. 

For example, starting with the text:
```
This is the name of my heading
```
Select that text, and after saying `title that` Talon changes it:
```
This Is the Name of My Heading
```

## Help Formatters

`help formatters` displays available formatters with examples of their output when followed by `one two three`.

<img src="/img/help_formatters.png/"
     alt="screenshot of the output of the `help formatters` command"
 />

Note that prose formatters a marked with \* in the help window

