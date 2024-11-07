# General PC Control

See also [help](/docs/Help/help-commands.md) for displaying information using Talon's inbuilt help system.

## Running applications

| Command             | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `focus "app name"`  | say "focus chrome" for example, to switch active window to chrome (where `app name` is the spoken form of the name) |
| `running list`      | see all active applications, and the and the spoken form of them                                                    |
| `launch "app name"` | say "launch chrome" for example, to open chrome; `launch music` will launch the music application (macOS only)      |
| `window close`      | closes the currently active window                                                                                  |

:::warning move the customization info to separate place

:::

Sample output from the `running list` command:
<img src="/img/running_list.png/"
     alt="screenshot of the output of the running list command"
 />

### Spoken Forms of Application Names

In the above screenshot we see that there are many different automatically generated permutations of the spoken form of `Windows PowerShell ISE`.
You can say `focus` followed by any of those spoken forms, and Talon will activate powershell.

<img src="/img/running_list_annotated.png/"
     alt="screenshot of the output of the running list command with some annotation"
/>

To customize the spoken forms for an app (or hide an app entirely from the list), edit the `app_name_overrides_<platform>.csv` files in the `core/app_switcher` directory.

For example, the list of entries in the running list for `Windows PowerShell ISE` can be simplified by updating `app_name_overrides.windows.csv` and adding:

```
powershell, Windows PowerShell ISE
```

Now the running list only shows a single entry for Windows PowerShell ISE:
<img src="/img/running_list2.png/"
     alt="screenshot of the output of the running list command"
/>

## Screenshot commands

Screenshots are either saved to a file or copied to the clipboard (`grab` commands that end in the word `clip`).

Files are stored in the directory specified by the `screenshot_folder` setting. If the setting is not specified, then
the default folder is operating system dependent. For example, `OneDrive\Pictures` on windows (if present) or the
`Pictures` subdirectory of the user document directory.

:::note
On windows, the standard `snip` application is invoked for `grab selection`.
It's options will determine where screenshots are saved.
:::

| Command                           | Destination                             |
| --------------------------------- | --------------------------------------- |
| `grab screen`                     | file                                    |
| `grab screen <number_small>`      | file                                    |
| `grab window`                     | file                                    |
| `grab selection`                  | file (but may be application dependent) |
| `grab screen clip`                | clipboard                               |
| `grab screen <number_small> clip` | clipboard                               |
| `grab window clip`                | clipboard                               |
| `grab selection clip`             | clipboard                               |
| `grab settings`                   | Mac only                                |

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

:::warning
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

| Command               | Mouse Button | Description  |
| --------------------- | ------------ | ------------ |
| `touch`               | left         | single click |
| `duke` or `dub click` | left         | double click |
| `trip click`          | left         | triple click |
| `mid click`           | mid          | single click |
| `righty`              | right        | single click |

:::note Using Modifier Keys
Modifier keys can be used in combination with the `touch`, `righty` mouse operations.
For example, `shift touch` will click the left mouse button
with the `shift` key depressed.
:::

Mouse Dragging

| Command                             | Mouse Button | Description     |
| ----------------------------------- | ------------ | --------------- |
| `drag`, `left drag` or `drag start` | left         | starts dragging |
| `right drag` or `righty drag`       | right        | start dragging  |
| `end drag` or `drag end`            |              | ends dragging   |

Miscellaneous

| Command               | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `curse yes`           | hides the mouse cursor for eye tracking                                                     |
| `curse no`            | shows the mouse cursor                                                                      |
| `copy mouse position` | copies the mouse position to the clipboard in the format `(x, y)`, for example `(1637, 15)` |
| `mouse hiss up`       | set the scroll direction to up for when a subsequent hiss sound is heard                    |
| `mouse hiss down`     | set the scroll direction to down for when a subsequent hiss sound is heard                  |

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
| `wheel right`  | scroll right                           |
| `wheel gaze`   | scroll according to the mouse position |
| `wheel upper`  | continually scroll up                  |
| `wheel downer` | continually scroll down                |
| `wheel stop`   | stop scrolling                         |

There are two words that can be used to modify the behavior of some of the `wheel` commands:

| Modifier Word | Description                                                        | Example           |
| ------------- | ------------------------------------------------------------------ | ----------------- |
| `tiny`        | scrolls by a small amount                                          | `wheel tiny left` |
| `here`        | move the mouse cursor to the center of the currently active window | `wheel stop here` |

## Mouse Grid

| Command                | Description                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `mouse grid`           | displays the mouse grid over the entire screen (screen one)                               |
| `grid win`             | displays the mouse grid over the currently active window                                  |
| `grid <number_key>+`   | displays the mouse grid, and sets its initial position according to the specified numbers |
| `grid screen <number>` | displays the mouse grid on the specified screen                                           |

These commands are available when the mouse grid is showing:

| Command                                 | Description                                                           |
| --------------------------------------- | --------------------------------------------------------------------- |
| `<number_key>`                          | narrows the mouse grid within the cell specified by the spoken number |
| `grid off`, `grid close` or `grid hide` | closes the mouse grid                                                 |
| `grid reset`                            | positions the grid to fill the entire screen                          |
| `grid back`                             | repositions the grid to how it was prior to the last narrowing        |

:::note Mouse Grid Alternatives

There are a few [alternatives](/docs/Integrations/integrations.md#mouse-alternatives) to the mouse grid described in this section.

:::

# Save

file save: edit.save()
file save all: edit.save_all()

## Customize Talon

These commands will open up a CSV or [Talon list](/docs/Customization/Data%20Files/talon_lists.md) file in your default text editor that you can edit to customize voice commands without needing to write Talon scripts.

| Command                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `customize additional words` | add additional words that Talon will recognize    |
| `customize words to replace` | remap or reformat words that Talon will recognize |
| `customize alphabet`         | change the default Talon alphabet                 |
| `customize websites`         | add websites that can be opened with Talon        |

## Miscellaneous Talon Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `command history` | show the command history         |
| `talon open log`  | open the talon log for debugging |
