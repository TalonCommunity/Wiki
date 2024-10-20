# Common Language Commands

There is some standardization in the voice commands available, for language elements that are
common to multiple coding languages.

For example when you say the voice command such as `state case`, Talon inserts the appropriate characters for the
[currently activated](language-activation.md) coding language. Saying `state case` whilst in `csharp` mode performs:

```talon
    actions.insert("case \nbreak;")
    actions.edit.up()
```

Whilst in ruby mode:
```talon
    actions.insert("when ")
```


## Comments

**Block Comments**


| Command                                      | Description                                    | Example                     |
| -------------------------------------------- | ---------------------------------------------- | --------------------------- |
| `block comment [line]`                       | block comments                             | C++'s `/* */`            |
| `block comment [line] <text> over`           | inserts the spoken text within a block comment | inserts `/* hello world */` |
| `block comment <text> over`                  |                                                |                             |
| `block comment <text>$`                      |                                                |                             |
| `(line \| inline) block comment <text> over` |                                                |                             |
| `(line \| inline) block comment <text>$`     |                                                |                             |
| `open block comment`                         |                                                | inserts `/* `               |
| `close block comment`                        |                                                | inserts ` */`               |

**Line Comments**

| Command                                | Description        | Example                 |
| -------------------------------------- | ------------------ | ----------------------- |
| `comment [line]`                       | (no text selected) | inserts `//`            |
| `comment <text> over`                  | (no text selected) | inserts `//hello world` |
| `comment <text>$`                      | (no text selected) | inserts `//hello world` |
| `(line \| inline) comment <text> over` |                    |                         |
| `(line \| inline) comment <text>$`     |                    |                         |

**Documentation**


| Command        | Example                                                              |
| -------------- | -------------------------------------------------------------------- |
| `dock comment` | e.g., Java's `/** */` |

Note that the command may vary between programming languages, eg `dock string` in python.


## Data Types and Constants

| Command                                | Description        | Example                 |
| -------------------------------------- | ------------------ | ----------------------- |
| `state false`                       | (no text selected) | C#'s `false`            |
| `state true`                       | (no text selected) | C#'s `true`            |
| `state (no \| none \| nil \| null)`                       | (no text selected) | typescript's `null`            |

## Operators

Note that in some commands, for example C#'s `op equals` surrounding space characters are also
inserted. This can make it more efficient, in this case compared with `space equals space`.

### Math & Bitwise

| Command                                                            | Example                                           |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| `op (minus \| subtract)`                                           | typescript's ` - `                                |
| `op (plus \| add)`                                                 | typescript's ` + `                                |
| `op (times \| multiply)`                                           | typescript's ` * `                                |
| `op divide`                                                        | typescript's ` / `                                |
| `op mod`                                                           | typescript's ` % `                                |
| `(op (power \| exponent) \| to the power [of])`                    | typescript's ` ** `                               |
| `[op] bitwise and`                                                 | C#'s ` & `                                        |
| `[op] bitwise or`                                                  | C#'s ` | `                                        |
| `(op \| logical \| bitwise) (ex \| exclusive) or`                  | C#'s ` ^ `                                        |
| `(op \| logical \| bitwise) (right shift \| shift right)`          | C#'s ` >> `                                       |

### Comparisons

| Command                                                            | Example                                           |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| `(op \| is) equal`                                                 | typescript's ` == `                               |
| `(op \| is) not equal`                                             | typescript's ` != `                               |
| `(op \| is) (greater \| more)`                                     | typescript's ` > `                                |
| `(op \| is) (less \| below) [than]`                                | typescript's ` < `                                |
| `(op \| is) greater [than] or equal`                               | typescript's ` >= `                               |
| `(op \| is) less [than] or equal`                                  | typescript's ` <= `                               |
| `is (none \| null)`                                                | typescript's ` === null`                          |
| `is not (none \| null)`                                            | typescript's ` !== null`                          |
| `(op \| is) in`                                                    | typescript's ` in `                               |
| `(op \| is) not in`                                                | typescript's ` not in `                           |

### Assignment

| Command                                                            | Example                                           |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| `op (equals \| assign)`                                            | C#'s ` = `                                        |
| `op or equals`                                                     |                                                   |
| `op (minus \| subtract) equals`                                    | C#'s ` -= `                                       |
| `op (plus \| add) equals`                                          | `plex op plus equals numb five` for C#'s `x += 5` |
| `op (times \| multiply) equals`                                    | C#'s ` *= `                                       |
| `op divide equals`                                                 | C#'s ` /= `                                       |
| `op mod equals`                                                    | C#'s ` %= `                                       |
| `[op] increment`                                                   |                                                   |
| `[op] bit [wise] and equals`                                       | c's ` &= `                                        |
| `[op] bit [wise] or equals`                                        | c's ` \|= `                                       |
| `(op \| logical \| bitwise) (ex \| exclusive) or equals`           | c's ` ^= `                                        |
| `[(op \| logical \| bitwise)] (left shift \| shift left) equals`   | c's ` <<= `                                       |
| `[(op \| logical \| bitwise)] (right shift \| shift right) equals` | c's ` >>= `                                       |

### Collections

| Command                                                            | Example                                           |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| `op subscript`                                                     | C#'s `[]`                                         |


## Imperative

| Command                                | Example                 |
| -------------------------------------- | ----------------------- |
| `block`                       |            |
| `state if` | |
| `state else if` | |
| `state else` | |
| `state while` | |
| `state loop` | |
| `state for` | |
| `state for in` | |
| `state (switch \| match)` | |
| `state case` | |
| `state do` | |
| `state goto` | |
| `state return` | |
| `state break` | |
| `state (continue \| next)` | |

## Object Oriented

| Command                                | Example                 |
| -------------------------------------- | ----------------------- |
| `self dot`                       | C#'s `this.`           |
| `state self`                       | C#'s `this`           |
| `state class`                       | C#'s `class `           |

## Anonymous Functions


| Command     | Example   |
| ----------- | --------- |
| `op lambda` | C#'s `=>` |


## Pointers

| Command          | Example  |
| ---------------- | -------- |
| `op dereference` | C's `*`  |
| `op address of`  | C's `&`  |
| `op arrow`       | C's `->` |

## Libraries

| Command          | Example  |
| ---------------- | -------- |
| `toggle imports` | displays the panel that lists common import libraries  |

## Functions

| Command                                 | Example |
| --------------------------------------- | ------- |
| `toggle funk`                           |         |
| `funk <user.code_common_function>`      |         |
| `funk cell <number>`                    |         |
| `funk wrap <user.code_common_function>` |         |
| `funk wrap <number>`                    |         |
