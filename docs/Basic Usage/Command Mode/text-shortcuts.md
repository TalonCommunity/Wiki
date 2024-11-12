---
sidebar_position: 25
---

# Text Shortcuts

## Miscellaneous Text Commands

| Command                              | Description                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `new line above`                     | inserts a new line above the current one                                                                           |
| `new line below` or `slap`           | inserts a new line below the current one                                                                           |
| `pad` or `padding`                   | inserts two spaces and moves the insertion point between them                                                      |
| (`pad` or `padding`) `<symbol_key>+` | inserts the specified symbol keys, with a space character before and after, saying `pad colon` inserts ` ` `:` ` ` |
| `indent` or `indent more`            | indents the current line                                                                                           |
| `out dent` or `indent less`          | outdents the current line                                                                                          |

## Delimiters - Quotes and Brackets

### Insert a Pair of Delimiters

These commands insert a pair of delimiters and places the insertion point between them.

| Command                                                           | Delimiter   |
| ----------------------------------------------------------------- | ----------- |
| `empty string`, `inside quotes` or `inside string`                | `'`         |
| `empty dub string`, `inside double quotes` or `inside dub quotes` | `"`         |
| `empty escaped string`                                            | `\\'`       |
| `empty escaped dub string`, `empty escaped dub quotes`            | `\\"`       |
| `inside graves`, `inside back ticks`                              | `\``        |
| `inside parens`, `args`                                           | `(` and `)` |
| `inside squares`, `inside brackets`, `square brackets` or `list`  | `[` and `]` |
| `inside braces`, `inside curly brackets`                          | `{` and `}` |
| `inside percent`                                                  | `%`         |

### Surround Selected Text With Delimiter

| Command                                                | Delimiter   |
| ------------------------------------------------------ | ----------- |
| `quote that`                                           | `'`         |
| `double quote that` or `dub quote that`                | `"`         |
| `empty escaped string`                                 | `\\'`       |
| `empty escaped dub string`, `empty escaped dub quotes` | `\\"`       |
| `grave that`, `back tick that`                         | `\``        |
| `parens that`, `args that`                             | `(` and `)` |
| `angle that`                                           | `<` and `>` |
| `square that`, `bracket that`, `square bracket that`   | `[` and `]` |
| `braces that`, `curly brackets that`                   | `{` and `}` |
| `percent that`                                         | `%`         |

## Multi Character Shortcuts

| Command                 | Written Form                                  |
| ----------------------- | --------------------------------------------- |
| `double dash`           | `--`                                          |
| `triple quote`          | `'''`                                         |
| `dot dot`               | `..`                                          |
| `ellipsis`              | `...`                                         |
| `dot dot`               | `..`                                          |
| `comma and` or `spamma` | `, ` (with a space character after the comma) |
| `arrow`                 | `->`                                          |
| `dub arrow`             | `=>`                                          |

## Abbreviations

| Command                            | Description                                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `brief <abbreviation_spoken_form>` | inserts the abbreviated form, for example saying `brief as far as I know` inserts `afaik`     |

:::info Personalization File Locations

The list of abbreviations recognized are stored in the file `settings/abbreviations.csv` and can be customized.
It is recommended to first read [managing customizations](/docs/Customization/managing-customizations.md)  prior to making changes to this file.

:::

## Homophones

> one of two or more words pronounced alike but different in meaning or derivation or spelling 
> (such as the words _to_, _too_, and _two_)
>
> - https://www.merriam-webster.com/dictionary/homophone

As the homophones are all pronounced the same, the speech recognition engine will not be able to consistently
insert the correct word.

For example, if the recognition engine hears the sound for the word `tail`, it cannot know if it should be entering the text `tail` or `tale`.

### The `Phones That` Command

Talon provides a feature for helping in these situations. Select the word, in this case `tale`, say `phones that`, and Talon will
replace it with `tail`. Similarly, if you selected `tail` and said `phones that`, Talon will replace it with `tail`.

The switch occurs automatically in the case where there are two words with the same sound.

If there are more, then you will be presented with a selection to choose from.

For example, if you said `console`, but Talon entered `consul`, saying `phones that` will display the following:

<img src="/img/homophones-choice.png/"
     alt="screenshot of the homophone selection menu, after saying `console`"
 />

### Command List

In the following description, `homophone action` means automatically switching the word if there are only two homophones.
If there are more than two, then showing the homophone selection menu.

| Command                                    | Description                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `phones that`                              | This performs the homophone action for the selected word                                                                                                |
| `phones <user.homophones_canonical>`       | This shows the homophone selection menu for the spoken word. For example, saying `phones right` will display `rite`, `write`, `right`.                  |
| `phones force <user.homophones_canonical>` | ronzulu: not sure how this is different to the phones command without `force`                                                                           |
| `phones force`                             | Shows the homophone selection menu for the selected word. Unlike `phones that`, the selection menu always appears even if there are only two homophones |
| `phones word`                              | This performs the homophone action for the selected word                                                                                                |
| `phones [<user.ordinals>] word left`       | This performs the homophone action for the nth word to the left of the current insertion point location                                                 |
| `phones [<user.ordinals>] word right`      | This performs the homophone action for the nth word to the right of the current insertion point location                                                |

:::note Customizing the Homophone Word List

The homophone file is located within your local copy of Talon community user file set, and as described in
[directory structure - limitations](/docs/Customization/managing-customizations.md#limitations) can only be edited in that location.

:::

## File Extensions

By their nature, file extensions would be cumbersome to spell out just using the talon alphabet.
For example, to insert `.gzip`, one would need to say `dot gust zip sit pit`

The community user file set provides a feature to simplify entering in file extensions.

For any of the file extensionsIn the list below comma simply say its associated name full stock.
For example, simply say `dot julia` to insert `.jl`

```
File extension,Name
.py,dot pie
.talon,dot talon
.md,dot mark down
.sh,dot shell
.vim,dot vim
.c,dot see
.cs,dot see sharp
.com,dot com
.net,dot net
.org,dot org
.us,dot us
.us,dot U S
.co.uk,dot co dot UK
.exe,dot exe
.bin,dot bin
.bin,dot bend
.json,dot jason
.json,dot jay son
.js,dot J S
.js,dot java script
.ts,dot TS
.ts,dot type script
.csv,dot csv
.csv,totssv
.csv,tot csv
.csv,dot cassie
.txt,dot text
.jl,dot julia
.jl,dot J L
.html,dot html
.css,dot css
.sass,dot sass
.svg,dot svg
.png,dot png
.wav,dot wave
.flac,dot flack
.doc,dot doc
.docx,dot doc x
.pdf,dot pdf
.tar,dot tar
.gz,dot g z
.gzip,dot g zip
.zip,dot zip
.toml,dot toml
.java,dot java
.class,dot class
.log,dot log
```

:::info Personalization File Locations

The list of file extensions recognized are stored in the file `settings/file-extensions.csv` and can be customized.
It is recommended to first read [managing customizations](/docs/Customization/managing-customizations.md)  prior to making changes to this file.

:::

## Macro Recorder

Talon community has an inbuilt feature for recording and playing back macros.
It records all voice commands and dictation said after `macro record` and until `macro stop`.

:::warning Temporary Macros

Macros recorded are only temporarily held by talon. They are not saved to permanent storage
and will not reappear  after talon is restarted.

:::

| Command                                    | Description                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `macro record` | starts recording |
| `macro stop` | stops recording |
| `macro play [{user.saved_macros}]` | plays the specified named macro, or the last one recorded if no name specified |
| `macro copy [{user.saved_macros}]` | copies the specified named macro to the clipboard, or the last one recorded if no name specified |
| `macro copy as <user.text>` | |
| `macro save as <user.text>` | saves the last recorded macro with the specified name |
| `macro list` | displays a panel that lists all recorded macros (since talon was started) |
| `macro list close` | |

For example, if the following was said:
```
macro record
go top
tab previous 
tab next 
macro stop
```
and then:
``` 
macro copy
```

Then the following will be placed onto the clipboard:
```
last macro command:
	mimic("go top")
	mimic("tab previous")
	mimic("tab next")
```

:::note Only Records Talon

The macro recorder only records the spoken phrases that talon recognizes.
It does not for example record any keystrokes or mouse movements performed.

:::

