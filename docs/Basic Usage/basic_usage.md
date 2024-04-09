# Basic Usage

The examples below are just a very small selection of common commands for working with Talon. These are based on the [Talon Community](https://github.com/talonhub/community) user file set.

## Mode Switching

Talon has three basic modes by default:

- In **command mode**, your speech will be interpreted as commands by default.
- In **dictation mode**, your speech will be transcribed as plain text by default (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems.
- In **sleep mode**, Talon will do nothing until it hears a commands that wakes it up.

To keep track of what mode you are in with a visual icon, enable the [mode indicator feature](https://github.com/talonhub/community/tree/main/plugin/mode_indicator) in the community repository.

| Command          | Description                 |
| ---------------- | --------------------------- |
| `wake up`        | Enable speech recognition.  |
| `talon wake`     | Enable speech recognition.  |
| `go to sleep`    | Disable speech recognition. |
| `talon sleep`    | Disable speech recognition. |
| `dictation mode` | Switch to dictation mode.   |
| `command mode`   | Switch to command mode.     |

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

## Dictating Text

Say a formatter then the text. (i.e. `say "hello world"`) to dictate while in command mode

| Formatter         | Description                             |
| ----------------- | --------------------------------------- |
| `say`             | no special formatting is applied        |
| `sentence`        | the first word is capitalized           |
| `title`           | every word starts with a capital letter |
| `all down`        | every word is all lower case            |
| `smash`           | no spaces between words                 |
| `kebab`           | dashes instead of spaces                |
| `help formatters` | show all available formatters           |

## Customize Talon

These commands will open up a csv in your default text editor that you can edit to customize voice commands without needing to write Talon scripts.

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

## Controller the Tobii eye tracker

| Commands          | Description                          |
| ----------------- | ------------------------------------ |
| `run calibration` | start Tobii calibration              |
| `control mouse`   | toggle on/off Tobii moving the mouse |
| `zoom mouse`      | Toggle Control Mouse (Zoom).         |
| `control off`     | Turn the eye tracker off             |

## Working with text

| Command        | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| `copy that`    |                                                                           |
| `control cap`  | copy via the keyboard shortcut using the talon alphabet (`cap` for `c`)   |
| `paste that`   |                                                                           |
| `control vest` | paste via the keyboard shortcut using the talon alphabet (`vest` for `v`) |
| `cut that`     |                                                                           |
| `undo that`    |                                                                           |
| `redo that`    |                                                                           |
| `scratch that` | undo Talon dictation                                                      |

## Mouse Commands

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `touch`      | single click                            |
| `duke`       | double click                            |
| `trip click` | triple click                            |
| `drag`       | hold down the mouse. Repeat to release  |
| `curse yes`  | hides the mouse cursor for eye tracking |
| `curse no`   | shows the mouse cursor                  |
| `righty`     | right click                             |

## Scrolling

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `page down`    | press the page down key                |
| `page up`      | press the page up key                  |
| `scroll down`  | scroll down                            |
| `scroll up`    | scroll up                              |
| `wheel down`   | scroll down                            |
| `wheel up`     | scroll up                              |
| `wheel left`   | scroll left                            |
| `wheel gaze`   | scroll according to the mouse position |
| `wheel upper`  | continually scroll up                  |
| `wheel downer` | continually scroll down                |
| `wheel stop`   | stop scrolling                         |
