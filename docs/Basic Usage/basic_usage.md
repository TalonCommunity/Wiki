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

### Formatters

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

`help symbols` shows the commands for dictating symbols. Numbers can be dictated in command or dictation mode by saying `numb <number>`, i.e. `numb 2000` to dictate "2000". Individual letters can be dictated with the alphabet commands, which can be seen by saying `help alphabet`. A single capital letter can be dictated by saying `shift <user.letter>`, such as saying `shift air` to dictate "A". Multiple capital letters can be dictated in command or dictation mode by saying `ship` before the letters, such as saying `ship air bat cap` to dictate "ABC".

#### Dictating Characters in Dictation Mode

In dictation mode, lowercase letters can be dictated by saying `spell` and then the letters, such as `spell air bat cap` to dictate "abc". Keys can be pressed in dictation mode by saying `press` and then the key stroke. This can allow dictating symbols, such as `press tilde` to dictate "~". `help punctuation` shows how to dictate punctuation symbols in dictation mode without the press prefix.

The commands for dictating uppercase letters and numbers are the same as in command mode and are documented in the previous section.

### Dictating Words in Dictation Mode

In dictation mode, words that are not commands are typed as text. To dictate words that would otherwise get interpreted as dictation mode commands, you can say `escape` followed by the words you want transcribed, such as saying `escape press air` to dictate the text "press air".

The following commands are available for overriding the default formatting:

| Command                                   | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `cap`                                     | capitalize the next word                                  |
| `no cap` or `no caps`                     | make the next word lowercase                              |
| `no space`                                | do not put a space before the next word                   |
| `cap that`                                | make the first word of the last dictated text capitalized |
| `no cap that` or `no caps that`           | make the first word of the last dictated text lowercase   |
| `formatted <user.formatters> <user.text>` | apply formatter to the dictated text                      |

The formatted command works with the formatters documented above. To give an example, saying `formatted title this is dictation` inserts the text "This Is Dictation".

To improve automatic spacing and capitalization in dictation mode, you can enable the user.context_sensitive_dictation setting. You can enable this globally in the settings.talon file, which you can open by saying `customize settings`. Context sensitive dictation may be slow and may not work in some applications because it relies on selecting and copying the text near the cursor, so you may want to enable this on a per-application basis. See [this page on .talon files](Customization/talon-files.md) if you want to understand how to modify settings on a per context basis and create custom commands.

## Pressing Keys

Saying `help alphabet` shows the command for each letter key.

Saying `help symbols` shows the command for each symbol key.

Keys can be combined with modifier keys, i.e., saying `shift up` presses <kbd>Shift</kbd> and the up arrow key <kbd>⇧</kbd>. Saying `help modifiers` shows the word to refer to each modifier key. The `super` key refers to the operating system specific modifier. This is used for the Windows logo key <kbd>⌘</kbd> on Windows and offers one way to refer to the<kbd>Command</kbd> key on MacOS.

In a keystroke, number keys can be dictated without prefix. For instance, saying `control one` presses the <kbd>control</kbd> and <kbd>1</kbd> keys at the same time.

Keys can be pressed in dictation mode by saying `press` followed by the key stroke, such as saying `press shift up` to press <kbd>Shift</kbd> and the up arrow key <kbd>⇧</kbd>. The `press` command can also be used in command or dictation mode to press modifier keys by themselves, such as `press control` to press the <kbd>Control</kbd> key.

Saying `help arrows` shows the names for referring to the arrow keys, which are just the direction names up, down, left, right. These can be used with a modifier or the `press` command but not by themselves.

Saying `help special keys` shows the commands for other keys you can press, such as <kbd>Page Up</kbd> and <kbd>Escape</kbd>.

Function keys, like <kbd>f1</kbd>, can be dictated by saying `f` and then the key number.

### Dictation Mode Editing and Navigation

Dictation mode provides some convenience commands for editing and navigating text.

| Command                                                 | Description                                                                          |
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

#### Edit/Navigation Actions and Modifiers

Command mode provides flexible editing and navigation commands where an editing/navigation command can be followed by a modifier to apply it to.

Saying the name of one of these actions followed by the name of a modifier applies the action to the target referred to by the modifier. For instance, saying `select line` selects the current line. A number between 1 and 99 can be dictated between the name of an action and a repeatable modifier to apply that modifier the specified number of times. For instance, saying `copy 3 right` copies the three characters to the right of the cursor.

| Action    | Description                                       |
| --------- | ------------------------------------------------- |
| select    | select the target                                 |
| go before | go before the target                              |
| go after  | go after the target                               |
| copy      | copy the text at the target                       |
| paste     | paste the contents of the clipboard to the target |
| clear     | delete the target                                 |

| Modifier   | What the action gets applied to |
| ---------- | ------------------------------- |
| all        | the document                    |
| paragraph  | the paragraph                   |
| line       | the line                        |
| line start | the start of line               |
| way left   | the start of line               |
| line end   | the end of line                 |
| way right  | the end of line                 |
| file start | the start of file               |
| way up     | the start of file               |
| file end   | the end of file                 |
| way down   | the end of file                 |

| Repeatable Modifier | The action gets applied to the specified number of |
| ------------------- | -------------------------------------------------- |
| word left           | words to the left of the cursor                    |
| word right          | words to the right of the cursor                   |
| word                | words to the right of the cursor                   |
| up                  | lines up starting at the cursor                    |
| down                | lines down starting at the cursor                  |
| left                | characters to the left of the cursor               |
| right               | characters to the right of the cursor              |

#### Scrolling

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `page down`    | press the Page Down key                |
| `page up`      | press the Page Up key                  |
| `scroll down`  | scroll down                            |
| `scroll up`    | scroll up                              |
| `wheel down`   | scroll down with the mouse             |
| `wheel up`     | scroll up with the mouse               |
| `wheel left`   | scroll left with the mouse             |
| `wheel right`  | scroll right with the mouse            |
| `wheel gaze`   | scroll according to the mouse position |
| `wheel upper`  | continually scroll up with the mouse   |
| `wheel downer` | continually scroll down with the mouse |
| `wheel stop`   | stop scrolling                         |

#### Working with text

| Command      | Description    |
| ------------ | -------------- |
| `copy that`  | copy selection |
| `paste that` | paste          |
| `cut that`   | cut selection  |
| `undo that`  | undo           |
| `redo that`  | redo           |

#### Working With Tabs

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `tab new`         | open a new tab                                 |
| `tab last`        | go to the previous tab                         |
| `tab next`        | go to the next tab                             |
| `tab close`       | close the current tab                          |
| `tab restore`     | reopen the most recently closed tab            |
| `go tab <number>` | go to the tab specified by the dictated number |
| `go tab final`    | go to the final tab                            |

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

## Mouse Commands

### Controlling the Tobii eye tracker

| Commands          | Description                          |
| ----------------- | ------------------------------------ |
| `run calibration` | start Tobii calibration              |
| `control mouse`   | toggle on/off Tobii moving the mouse |
| `zoom mouse`      | Toggle Control Mouse (Zoom).         |
| `control off`     | Turn the eye tracker off             |

### Clicking

| Command      | Description                            |
| ------------ | -------------------------------------- |
| `touch`      | single click                           |
| `duke`       | double click                           |
| `trip click` | triple click                           |
| `drag`       | hold down the mouse. Repeat to release |
| `righty`     | right click                            |

### Mouse Grid

The mouse grid lets you move the mouse by dictating numbers. You use one of the below commands to open the grid. This divides the area you made the grid around into 9 rectangles. Picking one of the numbers recreates the grid within that rectangle and moves the mouse to the center of that rectangle. The clicking commands and `grid close` close the mouse grid.

| Command                   | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| `mouse grid`              | open the mouse grid                                                               |
| `grid win`                | open the mouse grid on the window                                                 |
| `grid screen <number>`    | open the mouse grid on the specified screen                                       |
| `grid <user.number_key>+` | open the mouse grid and narrow it using the numbers from the dictated number keys |
| `grid close`              | close the mouse grid                                                              |

### Cursor Hide/Show Commands

| Command     | Description                             |
| ----------- | --------------------------------------- |
| `curse yes` | hides the mouse cursor for eye tracking |
| `curse no`  | shows the mouse cursor                  |

These commands require activating the `user.mouse_cursor_commands_enable` tag (see Community settings.talon).

## Working With Media

| Command         | Description                   |
| --------------- | ----------------------------- |
| `volume mute`   | toggle muting sound           |
| `volume up`     | increase volume               |
| `volume down`   | decrease volume               |
| `play next`     | press the <kbd>next</kbd> key |
| `play previous` | press the <kbd>prev</kbd> key |
| `media play`    | play or pause media           |
