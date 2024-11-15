---
sidebar_position: 30
---

# General PC Control

See also [help](/docs/Help/help-commands.md) for displaying information using Talon's inbuilt help system.

## Running applications

| Command             | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `focus "app name"`  | say "focus chrome" for example, to switch active window to chrome (where `app name` is the spoken form of the name) |
| `running list`      | see all active applications, and the and the spoken form of them                                                    |
| `launch "app name"` | say "launch chrome" for example, to open chrome; `launch music` will launch the music application (macOS only)      |
| `window close`      | closes the currently active window                                                                                  |

Sample output from the `running list` command shows:

- the application name of each running application
- the spoken form needed when using the `focus` or `launch` commands:

<img src="/img/command_mode/running_list3_annotated.png/"
     alt="screenshot of the output of the running list command"
/>

The spoken forms of application names can be [customized](#application-names). By default, the output from `running list`
might be quite messy, with many alternative spoken forms being displayed for some applications.

Customization can be used to enable tidier output, by specifying spoken forms of your choosing.

:::docotodo

There seems to be commands not described here that are present in:
`core\windows_and_tabs\window_management.talon`

```
window (new | open): app.window_open()
window next: app.window_next()
window last: app.window_previous()
window hide: app.window_hide()
focus <user.running_applications>: user.switcher_focus(running_applications)
# following only works on windows. Can't figure out how to make it work for mac. No idea what the equivalent for linux would be.
focus$: user.switcher_menu()
focus last: user.switcher_focus_last()
running close: user.switcher_hide_running()
launch <user.launch_applications>: user.switcher_launch(launch_applications)

snap <user.window_snap_position>: user.snap_window(window_snap_position)
snap next [screen]: user.move_window_next_screen()
snap last [screen]: user.move_window_previous_screen()
snap screen <number>: user.move_window_to_screen(number)
snap <user.running_applications> <user.window_snap_position>:
    user.snap_app(running_applications, window_snap_position)
snap <user.running_applications> [screen] <number>:
    user.move_app_to_screen(running_applications, number)
```

:::

## Screens and Screenshots

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

In a couple of the above commands, the screen number is required, which can be found by using the following command:

| Command          | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `screen numbers` | briefly shows a big number on each screen with its screen number |

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

| Command                  |
| ------------------------ |
| `volume up`              |
| `volume down`            |
| `set volume <number>`    |
| `(volume \| media) mute` |
| `[media] play next`      |
| `[media] play previous`  |
| `media (play \| pause)`  |

:::docofeedback

Regarding `set volume <number>: user.media_set_volume(number)`, I was trying to find the range of `number`,
but I couldn't find any reference to `media_set_volume` apart from when it is called in `media.talon`

:::

## Controlling the Tobii eye tracker

| Commands          | Description                          |
| ----------------- | ------------------------------------ |
| `run calibration` | start Tobii calibration              |
| `control mouse`   | toggle on/off Tobii moving the mouse |
| `zoom mouse`      | Toggle Control Mouse (Zoom).         |
| `control off`     | Turn the eye tracker off             |

:::docofeedback
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

There are a few [alternatives](/docs/Integrations/mouse-alternatives.md) to the mouse grid described in this section.

:::

## Zoom

Within certain applications, such as `vscode`, document zooming can be controlled with the following commands:

| Command      | Description                       |
| ------------ | --------------------------------- |
| `zoom in`    | zoom in                           |
| `zoom out`   | zoom out                          |
| `zoom reset` | reset magnification level to 100% |

# Save

| Command       |
| ------------- |
| file save     |
| file save all |

## Application Names

In the screenshot below we see that there are many different automatically generated permutations of the spoken form of `Windows PowerShell ISE`.
You can say `focus` followed by any of those spoken forms, and Talon will activate powershell.

<img src="/img/command_mode/running_list_annotated.png/"
     alt="screenshot of the output of the running list command with some annotation"
/>

To customize the spoken forms for an app (or hide an app entirely from the list), edit the `app_name_overrides_<platform>.csv` files in the `core/app_switcher` directory.

For example, the list of entries in the running list for `Windows PowerShell ISE` can be simplified by updating `app_name_overrides.windows.csv` and adding:

```
powershell, Windows PowerShell ISE
```

Now the running list only shows a single entry for Windows PowerShell ISE:
<img src="/img/command_mode/running_list2.png/"
     alt="screenshot of the output of the running list command"
/>
