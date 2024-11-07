---
sidebar_position: 1
---

# Command Mode

The examples below are just a very small selection of common commands for working with Talon. These are based on the [Talon Community](https://github.com/talonhub/community) user file set.

:::note Switching Modes
See [Mode Switching](/docs/Basic%20Usage/talon-modes.md) for info about switching modes
:::

The following can be performed in command mode:

| Action                                                                                                                                                     | Example                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Enter any [single character](./single-characters.md)                                                                                                       | for `a` say `air`, `$` say `dollar sign`, function key f2 say `f2`, for the home key say `home` |
| Enter a [sequence of characters](./single-characters.md#entering-multiple-characters)                                                                      | for `c3po` say `press cap three pit odd`                                                        |
| Enter a [single word](./words-and-phrases.md#saying-individual-words)                                                                                      | for `miscellaneous` say `word miscellaneous`                                                    |
| Enter a [phrase](./words-and-phrases.md#saying-phrases) with control over formatting                                                                       | for `my_variable` say `snake my variable`, for `yourVariable` say `camel your variable`         |
| Navigate a [document](./text-and-navigation.md#navigation), [select text](./text-and-navigation.md#selecting) within it                                    | `go left`, `go down five times`, `select word left`                                             |
| [Clipboard](./text-and-navigation.md#cut-copy-and-paste) commands, [clearing and duplicating text](./text-and-navigation.md#deleting-and-duplicating-text) | `cut that`, `clear word left`, `clone line`                                                     |
| [Controlling applications](./pc-control.md#working-with-applications), [tabs within apps](./pc-control.md#working-with-tabs)                               | `focus chrome`, `tab new`                                                                       |
| Controlling the [mouse](./pc-control.md#mouse-commands) and using the [mouse grid](./pc-control.md#mouse-grid)                                             | `dub click`, `left drag`, `mouse grid`                                                          |

## Chaining and Repeating Commands

With only a few specific exceptions, commands can be chained.
This means that multiple commands can be said as a single utterance without a pause between them.

For example, instead of saying (with a pause at the end of each line):

```
go address (within a browser window moves to the address bar)
copy that
focus code (makes the VSCode application active)
paste that
```

It could all be said as a single utterance:

```
go address copy that focus code paste that
```

Commands can also be easily repeated, by saying the following after the command to be repeated.

| Commands                              | Repeats the Previous Command                                                     |
| ------------------------------------- | -------------------------------------------------------------------------------- |
| `<ordinals>`                          | the specified number of times (eg `second`, `third`, `fourth`, ..., `twentieth`) |
| `<numbers_small> times`               | the specified number of times (eg `twenty times`)                                |
| `repeat that` or `twice`              | once                                                                             |
| `repeat that <numbers_small> [times]` | the specified number of times                                                    |

These commands can be used in both of the following ways:

- Within the same utterance as the command, eg `asterisk ten times`
- As a separate utterance after the command, eg `asterisk` (pause, Talon inserts a single asterisk), followed by `ten times` (whereby talon inserts a further nine -
  so that there is a total of ten)

:::note
Anything that can be said in command mode, is considered a "command".
For example, even though one would not typically consider a letter or symbol as a "command", in Talon, they are.

And therefore they can be repeated - `asterisk ten times` produces `**********`.
:::

You might find the syntax that uses `<numbers_small>` more natural than the one that uses `<ordinals>`.
Although slightly quicker to say, `asterisk tenth` takes more practice than the equivalent `asterisk ten times`
