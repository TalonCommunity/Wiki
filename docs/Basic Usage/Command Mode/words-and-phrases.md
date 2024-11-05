---
sidebar_position: 3.3
---

# Saying Words and Phrases

Whilst in command mode, it's easy to enter a single word or phrase at a time.

## Saying Individual Words

To enter a single word, prefix the word as follows:

| Command        | Capitalization           | Spacing                  | Example                                                      |
| -------------- | ------------------------ | ------------------------ | ------------------------------------------------------------ |
| `word <word>`  | lowercase                | none                     | saying `word application` inserts `application`              |
| `proud <word>` | first letter capitalized | none                     | saying `proud miscellaneous` inserts `Miscellaneous`         |
| `trot <word>`  | lowercase                | trailing space character | saying `trot hello` inserts `hello` ` ` (trailing space)     |
| `leap <word>`  | first letter capitalized | trailing space character | saying `leap forward` inserts `Forward` ` ` (trailing space) |

### Benefits of Saying Individual Words

After reading the section below on phrases, you might be wondering what is the benefit of Talon having the above voice commands
that only enable the user to enter a single word.

And there are disadvantages:

- The user needing to learn additional commands - `word` and `proud` for words and `say` and `sentence` for phrases
- Additional [cognitive load](/docs/Resource%20Hub/terminology.md#cognitive-load).
  Needing to decide before starting to speak whether or not you will be saying a single word or multiple words

Advantages:

- Using one of the single word voice commands is beneficial in increasing accuracy when saying a word that could be recognized as
  multiple words. - For example, if I say the command `say formatters` then depending on exactly how I say it, it can be recognized either correctly as
  `formatters`, or alternatively as `form matters` or `four matters`. - Saying `word formatters` is consistently recognized as `formatters`.
- The ability to intersperse words and voice commands, as described below

### Interspersing Words and Voice Commands

Words can be interspersed with other voice commands. For example, starting with the following line:

```
are two classes of aliens in science fiction
```

Saying `end colon home leap there` would transform this to:

```
There are two classes of aliens in science fiction:
```

## Saying Phrases

To enter a phrase, say the word `say` followed by the phrase itself.

For example, saying `say hello out there` will insert the text `hello out there`.

:::tip

When needing to dictate more than a few phrases, it might be more efficient to first switch to [dictation mode](../dictation_mode.md) described separately.

:::

### Formatters

The word `say` in the above example is known as the formatter name. To insert some text, say the name of the formatter followed by the text itself.

Formatters allow you to insert a word or words with specific capitalization and punctuation. There are many different formatters as described below,
some specifically crafted to make the entry of variable names etc more efficient.

### Formatter Classes

There are two classes of formatters. Prose formatters preserve hyphens and apostrophes, whilst non-prose (code) formatters strip punctuation instead, for example:

| Formatter Class | Formater | Phrase                  | Inserted Text    |
| --------------- | -------- | ----------------------- | ---------------- |
| Code            | hammer   | `hammer how's it going` | `HowsItGoing`    |
| Prose           | title    | `title how's it going`  | `How's It Going` |

### Code Formatters

| Formatter  | Capitalization                                              | Spacing                                      | Inserted Text           |
| ---------- | ----------------------------------------------------------- | -------------------------------------------- | ----------------------- |
| `all cap`  | Every word is all upper case                                | Normal                                       | `ONE TWO THREE`         |
| `all down` | Every word is all lower case                                | Normal                                       | `one two three`         |
| `camel`    | The first word is lowercase, subsequent words in title case | No spaces between words                      | `oneTwoThree`           |
| `cap`      | The first word is capitalized                               | Normal                                       | `One two three`         |
| `constant` | Every word is all upper case                                | Underscore between words                     | `ONE_TWO_THREE`         |
| `dotted`   | Normal                                                      | Dot between words                            | `one.two.three`         |
| `dunder`   | Normal                                                      | Two underscores between words                | `one__two__three`       |
| `hammer`   | Every word in title case                                    | No spaces between words                      | `OneTwoThree`           |
| `kebab`    | Normal                                                      | Dashes between words                         | `one-two-three`         |
| `list`     | Normal                                                      | `, ` between words                           | `one, two, three`       |
| `packed`   | Normal                                                      | `::` between words                           | `one::two::three`       |
| `padded`   | Normal                                                      | A space before, between and after words      | ` ` `one two three` ` ` |
| `slasher`  | Normal                                                      | A forward slash `/` before and between words | `/one/two/three`        |
| `smash`    | Normal                                                      | No spaces between words                      | `onetwothree`           |
| `snake`    | Normal                                                      | Underscore between words                     | `one_two_three`         |
| `unformat` | Normal                                                      | Normal                                       | `one two three`         |

There are also formatters to simplify string entry:

| Formatter    | Capitalization | Inserted Text     |
| ------------ | -------------- | ----------------- |
| `dub string` | Normal         | `"one two three"` |
| `string`     | Normal         | `'one two three'` |

Multiple formatters can be chained together — for example, `dubstring snake hello world` inserts "hello_world".

### Prose Formatters

These set of formatters are used for entering prose, and they all enter text with standard spacing.
There is no equivalent to `snake` for example, with underscores between words.

| Formatter        | Capitalization                                                     | Inserted Text   |
| ---------------- | ------------------------------------------------------------------ | --------------- |
| `say` or `speak` | Normal (no special formatting is applied)                          | `one two three` |
| `sentence`       | The first word is capitalized                                      | `One two three` |
| `title`          | Every word in title case (except for words such as `and` and `or`) | `one two three` |

### Reformat Existing Text

Reformat existing text with one or more formatters by selecting it, then saying the formatter name(s) followed by `that`.

For example, starting with the text:

```
This is the name of my heading
```

Select that text, and after saying `title that` Talon changes it:

```
This Is the Name of My Heading
```

### Help Formatters

`help formatters` displays available formatters with examples of their output when followed by `one two three`.

<img src="/img/help_formatters.png/"
     alt="screenshot of the output of the `help formatters` command"
 />

Note that prose formatters a marked with \* in the help window
