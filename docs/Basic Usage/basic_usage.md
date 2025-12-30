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
| `go to sleep`    | Disable speech recognition. |
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
| `talon open log`             | open the Talon log for debugging                                 |

## Dictating Text

###  Formatters

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

### Dictating Individual Characters

#### Dictating Characters in Command Mode

`help symbols` shows the commands for dictating symbols. Numbers can be dictated in command or dictation mode by saying `numb <number>`, i.e. `numb 2000` to dictate `2000`. Individual letters can be dictated with the alphabet commands, which can be seen by saying `help alphabet`. A single capital letter can be dictated by saying `shift <user.letter>`, such as saying `shift air` to dictate `A`. Multiple capital letters can be dictated in command or dictation mode by saying `ship` before the letters, such as saying `ship air bat cap` to dictate `ABC`. 

#### Dictating Characters in Dictation Mode
In dication mode, lower case letters can be dictated by saying `spell` and then the letters, such as `spell air bat cap` to dictate `abc`. Keys can be pressed in dictation mode by saying `press` and then the key stroke. This can allow dictating symbols, such as `press tilde` to dictate `~`. `help punctuation` shows how to dictate punctuation symbols in dictation mode without the press prefix. 

The commands for dictating upper case letters and numbers are the same as in command mode and are documented in the previous section.

### Dictating Words in Dictation Mode
In dictation mode, words that are not commands are typed as text. To dictate words that would otherwise get interpreted as dictation mode commands, you can say `escape` followed by the words you want transcribed, such as saying `escape press air` to dictate the text `press air`. 

The following commands are available for overwriting the default formatting

| Command                                   | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `cap`                                     | capitalize the next word                                  |
| `no cap` or `no caps`                     | make the next word lowercase                              |
| `no space`                                | do not put a space before the next word                   |
| `cap that`                                | make the first word of the last dictated text capitalized |
| `no cap that` or `no caps that`           | make the first word of the last dictated text lowercase   |
| `formatted <user.formatters> <user.text>` | apply formatter to the dictated text                      |

The formatted command works with the formatters documented above. To give an example, saying `formatted title this is dictation` inserts the text `This Is Dictation`. 

## Pressing Keys
Saying `help alphabet` shows the command for each letter key. 

Saying `help symbols` shows the command for each symbol key.

Keys can be combined with modifier keys, i.e saying `shift up` presses shift and up. Saying `help modifiers` shows the word to refer to each modifier key. The `super` key refers to the operating system specific modifier. This is used for the `windows` key on Windows and offers one way to refer to the `command` key on MacOS. 

In a keystroke, number keys can be dictated without prefix. For instance, saying `control-1` presses the control and 1 keys at the same time.

Keys can be pressed in dictation mode by saying `press` followed by the key stroke, such as saying `press shift up` to press shift and up. The `press` command can also be used in command or dictation mode to press modifier keys by themselves, such as `press control` to press the control key.

Saying `help arrows` shows the names for referring to the arrow keys, which are just the direction names up, down, left, right. These can be used with a modifier or the `press` command but not by themselves. 

Saying `help special keys` shows the commands for other keys you can press, such as pageup and escape.

Function keys, like `f1`, can be dictated by saying `f` and then the key number. 

### Dictation Mode Editing and Navigation
Dictation mode provides some convenience commands for editing and navigating text. 

| Command                                                 |             Description                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `scratch that`                                          | delete the last dictated phrase assuming the cursor has not moved after dictating it |
| `select that`                                           | select the last dictated phrase assuming the cursor has not moved after dictating it |
| `go line start`                                         | move the cursor to the start of the line                                             |
| `go line end`                                           | move the cursor to the end of the line                                               |
| `go up <number_small> (line or lines)`                  | move the cursor up the specified number of lines                                     |
| `go down <number_small> (line or lines)`                | move the cursor down the specified number of lines                                   |
| `go left <number_small> (word or words)`                | move the cursor left the specified number of words                                   |
| `go right <number_small> (word or words)`               | move the cursor right the specified number of words                                  |
| `select left <number_small> (word or words)`            | select the specified number of words to the left                                     |
| `select right <number_small> (word or words)`           | select the specified number of words to the right                                    |
| `select left <number_small> (character or characters)`  | select the specified number of characters to the left                                |
| `select right <number_small> (character or characters)` | select the specified number of characters to the right                               |
| `clear left <number_small> (word or words)`             | delete the specified number of words to the left                                     |
| `clear right <number_small> (word or words)`            | delete the specified number of words to the right                                    |
| `clear left <number_small> (character or characters)`   | delete the specified number of characters to the left                                |
| `clear right <number_small> (character or characters)`  | delete the specified number of characters to the right                               |

For example, saying `go up 10 lines` moves the cursor up 10 lines.

### Command Mode Editing and Navigation

Command mode provides flexible editing and navigation commands where an editing/navigation command can be followed by a modifier to apply it to.

| Action                      | Description                                       |
| --------------------------- | ------------------------------------------------- |
| select                      | select the target                                 |
| go before                   | go before the target                              |
| go after                    | go after the target                               |
| copy                        | copy the text at the target                       |
| paste                       | paste the contents of the clipboard to the target |
| clear                       | delete the target                                 |

| Modifier                      | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| all                           | apply the action to the document                  |
| paragraph                     | apply the action to the paragraph                 |
| line                          | apply the action to the line                      |
| line start                    | apply the action to the start of line             |
| way left                      | apply the action to the start of line             |
| line end                      | apply the action to the end of line               |
| way right                     | apply the action to the end of line               |
| file start                    | apply the action to the start of file             |
| way up                        | apply the action to the start of file             |
| file end                      | apply the action to the end of file               |
| way down                      | apply the action to the end of file               |

| Repeatable Modifier           | Description                            |
| ----------------------------- | -------------------------------------- |
| word | apply the action to the specified number of words
| word left | apply the action to the specified number of words left
| word right | apply the action to the specified number of words right
| up | apply the action to the specified number of lines up |
| down | apply the action to the specified number of lines down |
| left | apply the action to the specified number of characters to the left |
| right | apply the action to the specified number of characters to the right |


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
| `media mute`    |
| `play next`     |
| `play previous` |
| `media play`    |

## Controlling the Tobii eye tracker

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
| `control cap`  | copy via the keyboard shortcut using the Talon alphabet (`cap` for `c`)   |
| `paste that`   |                                                                           |
| `control vest` | paste via the keyboard shortcut using the Talon alphabet (`vest` for `v`) |
| `cut that`     |                                                                           |
| `undo that`    |                                                                           |
| `redo that`    |                                                                           |
| `scratch that` | undo Talon dictation                                                      |

## Mouse Commands

### Clicking

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `touch`      | single click                            |
| `duke`       | double click                            |
| `trip click` | triple click                            |
| `drag`       | hold down the mouse. Repeat to release  |
| `curse yes`  | hides the mouse cursor for eye tracking |
| `curse no`   | shows the mouse cursor                  |
| `righty`     | right click                             |

### Mouse Grid

The mouse grid lets you move the mouse by dictating numbers. You use one of the below commands to open the grid. This divides the area you made the grid around into 9 rectangles. Picking one of the numbers recreates the grid within that rectangle and moves the mouse to the center of that rectangle. The clicking commands and  `grid close` close the mouse grid.

| Command                   | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| `mouse grid`              | open the mouse grid                                                               |
| `grid win`                | open the mouse grid on the window                                                 |
| `grid screen <number>`    | open the mouse grid on the specified screen                                       |
| `grid <user.number_key>+` | open the mouse grid and narrow it using the numbers from the dictated number keys |

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
