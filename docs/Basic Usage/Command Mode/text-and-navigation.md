#  Text and Navigation

## Navigation



| Command                                  | Description                                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `go left`, `go right` | move the insertion point one character left or right                                              |
| `go up`, `go down` | move the insertion point one line up or down                                             |
| `go line start`, `go way left` or `head` | move the insertion point to the start of the current line                                              |
| `go line end`, `go way right` or `tail`  | move the insertion point to the end of the current line                                                |
| `go top` or `go way up`                  | move the insertion point to the beginning of the document                                              |
| `go bottom` or `go way down`             | move the insertion point to the end of the document                                                    |
| `go page up`                             | scroll the document up by one page; here are some other ways of [scrolling](./pc-control.md#scrolling) |
| `go page down`                           | scroll the document down by one page                                                                   |

As with all commands, the `go` commands can be [chained or repeated](./command_mode.md#chaining-and-repeating-commands).

| Command                                 | Description                  |
| --------------------------------------- | ------------------------------------------- |
| `go top go down`           | move to the second line from the top of the document (an example of standard chaining) |
| `go up five times`           | an example of standard command repetition|

Additionally, the `go` command supports its own more compact syntax.

| Command                                 | Description                  |
| --------------------------------------- | ------------------------------------------- |
| `go down down right`           | move down two lines and then right one character |
| `go two words left`           |  |
| `go two down five words right`           |  |


<details>
  <summary>In some applications, 'go way left' can behave slightly differently to  'go line start' and 'head'.</summary>
    <p>In some applications, 'go way left' can behave slightly differently to  'go line start' and 'head'.</p>
    <p>For example in 'vscode', with the following text:</p>

    <img src="/img/insertion_points_on_line.png/"
        alt="screenshot of text within VSCode"
    />

    <p>If the insertion point is at (3), saying 'go line start' will move the insertion point to (2), 
    whilst saying 'go way left' will move it to (1)</p>
</details>

## Selecting



| Command                                 | Extend the Text Selection                   |
| --------------------------------------- | ------------------------------------------- |
| `select left`, `select right`           | by one character in the specified direction |
| `select up`, `select down`              | by one line in the specified direction      |
| `select word left`, `select word right` | by one word in the specified direction      |
| `select way left`                       | to the start of the current line            |
| `select way right`                      | to the end of the current line              |
| `select way up`                         | to the start of the document                |
| `select way down`                       | to the end of the document                  |

As another example of using command repetition, saying `select up third` will press `shift+up` three times to select several lines of text.

## Cut, Copy and Paste


| Command                             | Description                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `copy that`                         | copies the currently selected text to the clipboard                                                            |
| `copy word left`, `copy word right` | copies the word to the left/right of the insertion point                                                       |
| `cut that`                          | cuts the currently selected text to the clipboard                                                              |
| `cut word left`, `cut word right`   | cuts the word to the left/right of the insertion point                                                         |
| `paste that` or `pace that`         | paste the contents of the clipboard                                                                            |
| `paste enter`                       | paste the contents of the clipboard, and press the enter key                                                   |
| `paste match`                       | (in supported applications) paste the contents of the clipboard matching the text style at the insertion point |


## Deleting and Duplicating Text



| Command                               | Description                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `clear left`, `clear right`           | deletes the character to the left or right of the insertion point           |
| `clear up`, `clear down`              | deletes the characters from the insertion point, either up or down one line |
| `clear word left`, `clear word right` | delete the word to the left/right of the insertion point                    |
| `clear way left`                      | deletes from the current position to the start of the current line          |
| `clear way right`                     | deletes from the current position to the end of the current line            |
| `clear way up`                        | deletes from the current position to the start of the document              |
| `clear way down`                      | deletes from the current position to the end of the document                |
| `clone that`                          | replaces the currently selected text with two copies of it                  |
| `clone line`                          | replaces the current line with two copies of it                             |


## Undo/Redo

| Command                               | Description                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `undo that`                      | performs an undo                                   |
| `redo that`            | performs a redo |


## Searching

| Command    | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `find it`  | bring up the application's find dialog box                  |
| `next one` | select the next occurrence that matches the search criteria |

## Miscellaneous Text Commands

| Command                               | Description                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `new line above`                      | inserts a new line above the current one                                    |
| `new line below` or `slap`            | inserts a new line below the current one                                    |
| `pad` or `padding`                    | inserts two spaces and moves the insertion point between them               |
| (`pad` or `padding`) `<symbol_key>+`  | inserts the specified symbol keys, with a space character before and after, saying `pad colon` inserts ` ` `:` ` `  |
| `indent` or `indent more`             | indents the current line                                                    |
| `out dent` or `indent less`           | outdents the current line                                                   |

Insert a Pair of Delimiters

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

Surround Selected Text With Delimiter


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



## Abbreviations and Shortcuts

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


| Command                            | Description                                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `brief <abbreviation_spoken_form>` | inserts the abbreviated form, for example saying `brief as far as I know` inserts `afaik`     |
| `<file_extension_spoke_in_form>`   | inserts the common form of the spoken file extension, saying `dot markdown` will insert `.md` |

:::info Personalization File Locations

The following personalization files are located within the [settings directory](/docs/Resource%20Hub/terminology.md).

| Item                                        | Filename              |
| ------------------------------------------- | --------------------- |
| spoken and written forms of abbreviations   | `abbreviation.csv`    |
| spoken and written forms of file extensions | `fall_extensions.csv` |

Note that not all csv files are stored in the settings directory.
For example, the `homophones.csv` file is contained under the core directory.
:::

## Homophones

:::note To Be Completed

:::



## Zoom

Within certain applications, such as `vscode`, document zooming can be controlled with the following commands:

| Command      | Description                       |
| ------------ | --------------------------------- |
| `zoom in`    | zoom in                           |
| `zoom out`   | zoom out                          |
| `zoom reset` | reset magnification level to 100% |
