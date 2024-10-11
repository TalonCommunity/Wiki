# Command Mode

The examples below are just a very small selection of common commands for working with Talon. These are based on the [Talon Community](https://github.com/talonhub/community) user file set.

:::note Switching Modes
See [Mode Switching](./basic_usage.md#mode-switching) for info about switching modes
:::



## Help Commands

| Command                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `help alphabet`              | show the spelling alphabet for pressing individual keys          |
| `help context`               | show all defined commands                                        |
| `help active`                | show all currently available commands                            |
| `help next`, `help previous` | go to the next or previous page of help items if there are a lot |
| `help close`                 | hide any open help window again                                  |
| `command history`            | show the command history                                         |
| `talon open log`             | open the talon log for debugging                                 |



## Customize Talon

These commands will open up a CSV or [Talon list](Customization/talon_lists.md) file in your default text editor that you can edit to customize voice commands without needing to write Talon scripts.

| Command                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `customize additional words` | add additional words that Talon will recognize    |
| `customize words to replace` | remap or reformat words that Talon will recognize |
| `customize alphabet`         | change the default Talon alphabet                 |
| `customize websites`         | add websites that can be opened with Talon        |

## Working with applications

| Command             | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `focus "app name"`  | say "focus chrome" for example, to switch active window to chrome |
| `running list`      | see all active applications                                       |
| `launch "app name"` | say "launch chrome" for example, to open chrome                   |
| `window close`      | closes the currently active window                                |

## Working with tabs

| Command           |
| ----------------- |
| `tab new`         |
| `tab last`        |
| `tab next`        |
| `tab close`       |
| `tab restore`     |
| `go tab <number>` |
| `go tab final`    |

## Working with media

| Command         |
| --------------- |
| `mute`          |
| `play next`     |
| `play previous` |
| `play`          |

## Controlling the Tobii eye tracker

| Commands          | Description                          |
| ----------------- | ------------------------------------ |
| `run calibration` | start Tobii calibration              |
| `control mouse`   | toggle on/off Tobii moving the mouse |
| `zoom mouse`      | Toggle Control Mouse (Zoom).         |
| `control off`     | Turn the eye tracker off             |

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

| Commands                              | Repeats the Previous Command  |
| ------------------------------------- | ----------------------------- |
| `<ordinals>`                          | the specified number of times |
| `<numbers_small> times`               | the specified number of times |
| `repeat that` or `twice`              | once                          |
| `repeat that <numbers_small> [times]` | the specified number of times |

:::note
Anything that can be said in command mode, is considered a "command".
For example, even though one would not typically consider a letter or symbol as a "command", in Talon, they are.

And therefore they can be repeated - `asterisk ten times` produces `**********`.
:::

You might find the syntax that uses `<numbers_small>` more natural than the one that uses  `<ordinals>`.
Although slightly quicker to say, `asterisk tenth` takes more practice than the equivalent `asterisk ten times`

