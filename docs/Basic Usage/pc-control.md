# General PC Control

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


:::question
Should the `camera overlay` command be mentioned here? It calls `tracking.control_debug_toggle()`
:::

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

Button Clicking

| Command      | Mouse Button | Description                             |
| ------------ | ------------ | --------------------------------------- |
| `touch`      | left         | single click                            |
| `duke` or `dub click`  | left         | double click                            |
| `trip click` | left         | triple click                            |
| `mid click`  | mid          | single click                            |
| `righty`     | right        | single click                            |

:::note Using Modifier Keys
Modifier keys can be used in combination with the `touch`, `righty` mouse operations. 
For example, `shift touch` will click the left mouse button
with the `shift` key depressed.
:::

Mouse Dragging

| Command      | Mouse Button | Description                             |
| ------------ | ------------ | --------------------------------------- |
| `drag`, `left drag` or `drag start`       | left         | starts dragging  |
| `right drag` or `righty drag`     | right        | start dragging                         |
| `end drag` or `drag end` | | ends dragging |

Miscellaneous

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `curse yes`  | hides the mouse cursor for eye tracking |
| `curse no`   | shows the mouse cursor                  |
| `copy mouse position` | copies the mouse position to the clipboard in the format `(x, y)`, for example `(1637, 15)` |
| `mouse hiss up` | set the scroll direction to up for when a subsequent hiss sound is heard |
| `mouse hiss down` | set the scroll direction to down for when a subsequent hiss sound is heard |

To scroll with a hiss sound, set `mouse_enable_hiss_scroll` to true in settings.talon


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
| `wheel right`   | scroll right                            |
| `wheel gaze`   | scroll according to the mouse position |
| `wheel upper`  | continually scroll up                  |
| `wheel downer` | continually scroll down                |
| `wheel stop`   | stop scrolling                         |

There are two words that can be used to modify the behavior of some of the `wheel` commands:

| Modifier Word        | Description                            | Example |
| -------------- | -------------------------------------- | - |
| `tiny`    | scrolls by a small amount | `wheel tiny left`             |
| `here` | move the mouse cursor to the center of the currently active window | `wheel stop here` |

## Mouse Grid

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `mouse grid`    | displays the mouse grid over the entire screen (screen one)                |
| `grid win`    | displays the mouse grid over the currently active window                |
| `grid <number_key>+`    | displays the mouse grid, and sets its initial position according to the specified numbers                |
| `grid screen <number>`    | displays the mouse grid on the specified screen                |

These commands are available when the mouse grid is showing:


| Command        | Description                            |
| -------------- | -------------------------------------- |
| `<number_key>`    | narrows the mouse grid within the cell specified by the spoken number                |
| `grid off`, `grid close` or `grid hide`    | closes the mouse grid                |
| `grid reset`    | positions the grid to fill the entire screen                |
| `grid back`    | repositions the grid to how it was prior to the last narrowing               |


# Save
file save: edit.save()
file save all: edit.save_all()