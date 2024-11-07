---
sidebar_position: 10
---

# Text Navigation & Selection

## Navigation

| Command                                  | Description                                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `go left`, `go right`                    | move the insertion point one character left or right                                                   |
| `go up`, `go down`                       | move the insertion point one line up or down                                                           |
| `go line start`, `go way left` or `head` | move the insertion point to the start of the current line                                              |
| `go line end`, `go way right` or `tail`  | move the insertion point to the end of the current line                                                |
| `go top` or `go way up`                  | move the insertion point to the beginning of the document                                              |
| `go bottom` or `go way down`             | move the insertion point to the end of the document                                                    |
| `go page up`                             | scroll the document up by one page; here are some other ways of [scrolling](./pc-control.md#scrolling) |
| `go page down`                           | scroll the document down by one page                                                                   |

As with all commands, the `go` commands can be [chained or repeated](./command_mode.md#chaining-and-repeating-commands).

| Command            | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| `go top go down`   | move to the second line from the top of the document (an example of standard chaining) |
| `go up five times` | an example of standard command repetition                                              |

Additionally, the `go` command supports its own more compact syntax.

| Command                        | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `go down down right`           | move down two lines and then right one character |
| `go two words left`            |                                                  |
| `go two down five words right` |                                                  |

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
