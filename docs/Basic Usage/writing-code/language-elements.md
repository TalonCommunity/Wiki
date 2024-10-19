# Language Elements

Where possible, common commands
## Comments

### Block Comments


| Command                                      | Description                                    | Example                     |
| -------------------------------------------- | ---------------------------------------------- | --------------------------- |
| `block comment [line]`                       | (no text selected)                             | inserts `/*  */`            |
| `block comment [line] <text> over`           | inserts the spoken text within a block comment | inserts `/* hello world */` |
| `block comment <text> over`                  |                                                |                             |
| `block comment <text>$`                      |                                                |                             |
| `(line \| inline) block comment <text> over` |                                                |                             |
| `(line \| inline) block comment <text>$`     |                                                |                             |
| `open block comment`                         |                                                | inserts `/* `               |
| `close block comment`                        |                                                | inserts ` */`               |

### Line Comments

| Command                                | Description        | Example                 |
| -------------------------------------- | ------------------ | ----------------------- |
| `comment [line]`                       | (no text selected) | inserts `//`            |
| `comment <text> over`                  | (no text selected) | inserts `//hello world` |
| `comment <text>$`                      | (no text selected) | inserts `//hello world` |
| `(line \| inline) comment <text> over` |                    |                         |
| `(line \| inline) comment <text>$`     |                    |                         |



### Documentation


| Command        | Example                                                              |
| -------------- | -------------------------------------------------------------------- |
| `dock comment` | inserts `""""""` (with the insertion point positioned in the middle) |

Note that the command may vary between programming languages, eg `dock string` in python.

