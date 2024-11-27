# line_commands

| Command           | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `go <number>`     | moves the insertion point to the beginning of the specified line |
| `go <number> end` | moves to the end of the specified line                           |

The following commands work on either a single line or a range of multiple lines
(see examples below):

`Voice Command` = `Command Name` `Command Suffix`

| Command Name               | Description                                                     |
| -------------------------- | --------------------------------------------------------------- |
| `(select \| cell \| sell)` | select the specified line(s)                                    |
| `clear`                    | clears the specified line(s)                                    |
| `copy`                     | copies the specified line(s) to the clipboard                   |
| `cut`                      | cuts the specified line(s) to the clipboard                     |
| `comment`                  | comment/uncomment the specified line(s)                         |
| `tab`                      | indents the specified line(s)                                   |
| `retab`                    | outdents the specified line(s)                                  |
| `drag down`                | moves specified line(s) one line down                           |
| `drag up`                  | moves specified line(s) one line up                             |
| `(paste \| replace)`       | replaces the specified lines with the contents of the clipboard |
| `clone`                    | clones the specified line                                       |

The command name must be followed by one of the following to specify a single line or a range of lines.


| Command Suffix            | Description                | Example           |
| ------------------------- | -------------------------- | ----------------- |
| `[line] <number>`         | specifies a single line    | `tab line 15` or `comments 10`     |
| `<number> until <number>` | specifies a range of lines | `cut 20 until 26` |


:::note Limitations

The paste command must be given a range of line numbers.

The clone command must be given a single line number only.

:::

The following commands work with the currently selected lines:

| Command            | Description |
| ------------------ | ----------- |
| `tab that`         |             |
| `retab that`       |             |
| `drag [line] down` |             |
| `drag [line] up`   |             |


