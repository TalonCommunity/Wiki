---
sidebar_position: 30
---

# General PC Control

:::docotodo

Are any of the commands listed here only available within certain applications?

:::

See also [help](/docs/Help/help-commands.md) for displaying information using Talon's inbuilt help system.

## Running applications

| Command             | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `running list`      | opens a panel to see all active applications, and the and the spoken form of them                                   |
| `running close`     | closes the running list panel                                                                                       |
| `focus "app name"`  | say "focus chrome" for example, to switch active window to chrome (where `app name` is the spoken form of the name) |
| `focus$`            | open a menu of running apps to switch to                                                                            |
| `focus last`        | makes the last active application (ie the one that was active prior to the current one) active again                |
| `launch "app name"` | say "launch chrome" for example, to open chrome; `launch music` will launch the music application (macOS only)      |
| `window close`      | closes the currently active window                                                                                  |

:::note

`focus` is used for switching to an already running application.
`launch` is used for starting an application that isn't already running.

:::

Sample output from the `running list` command shows:

- the application name of each running application
- the spoken form needed when using the `focus` or `launch` commands:

<img src="/img/command_mode/running_list3_annotated.png/"
     alt="screenshot of the output of the running list command"
/>

The spoken forms of application names can be [customized](#application-names). By default, the output from `running list`
might be quite messy, with many alternative spoken forms being displayed for some applications.

Customization can be used to enable tidier output, by specifying spoken forms of your choosing.


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

## Working with Windows

### Switching between different application instances

In this context a window is an instance of a running application.
For example, if you had three separate instances of vscode running, then there would be three windows for it.
Or if you had four documents open in Microsoft word, each would be a separate window.

| Command                           | Destination                             |
| --------------------------------- | --------------------------------------- |
| `window (new \| open)`            |                                     |
| `window next`            |                                     |
| `window last`            |                                     |
| `window hide`            |                                     |

Note that the behavior is very application dependent. For example, in notepad++ saying `window new`
simply opens a new tab within the application, and not a whole new application instance.

### Easily positioning windows using snap

Operates on the currently active window:

| Command                           | Destination                             |
| --------------------------------- | --------------------------------------- |
| `snap <user.window_snap_position>`    | moves and resizes the active window according to the specified [snap position](#window-snap-position),<br/>eg `snap left`    |
| `snap next [screen]`    | moves the active window to the next screen    |
| `snap last [screen]`    | moves the active window to the previous screen    |
| `snap screen <number>`    | moves the active window to the specified screen    |

Operates on the specified applications:

| Command                           | Destination                             |
| --------------------------------- | --------------------------------------- |
| `snap <user.running_applications> <user.window_snap_position>`    | moves and resizes the specified application according to the given snap position, eg `snap firefox right`    |
| `snap <user.running_applications> [screen] <number>`    | moves the specified application to the specified screen    |
| `snap <user.window_split_position> <user.running_applications>+`    | moves the specified applications to the specified [split position](#window-split-position)    |



### Window Snap Position

Halves:

```
.------.-------.     .--------.
|      |       |     |  top   |
| left | right |  &  |--------|
|      |       |     | bottom |
'------'-------'     '--------'
```

Thirds:

```
.-------------.--------------.-------------.
| left third  | center third | right third |
.-------------.--------------.-------------.
```

Two thirds:
```
.-------------.----------------------------.
| left third  |    right two thirds        |
.-------------.----------------------------.

.----------------------------.-------------.
|         left two third     | right third |
.----------------------------.-------------.
```

Quarters:
```
'-------------'--------------'
|  top left   |  top right   |
|-------------|--------------|
| bottom left | bottom right |
'-------------'--------------'
```

Sixths:
```
'-------------------'---------------------'--------------------'
|  top left third   |  top center third   |  top right third   |
|-------------------|---------------------|--------------------|
| bottom left third | bottom center third | bottom right third |
'-------------------'---------------------'--------------------'

'-----------------------------------------'--------------------'
|          top left two thirds            |  top right third   |
|-----------------------------------------|--------------------|
|          bottom left two thirds         | bottom right third |
'-----------------------------------------'--------------------'

'-------------------'------------------------------------------'
|  top left third   |          top right two thirds            |
|-------------------|------------------------------------------|
| bottom left third |        bottom right two thirds           |
'-------------------'------------------------------------------'
```

Special descriptors:


| Word                  | 
| --------------------- | 
| `center`              | 
| `full`                | 
| `fullscreen`          | 


:::note Alternative Forms

You might find these alternative spoken forms easier to say.

| Word                  | Alternative Form                                                       |
| --------------------- | ---------------------------------------------------------------------- |
| `third`               | `small` (eg `top left small` instead of `top left third`)              |
| `two thirds`          | `large` (eg `bottom right large` instead of `bottom right two thirds`) |


:::


### Window Split Position

| Name           | Number of Applications Specified | Window Snap Positions                 |
| -------------- | -------------------------------- | ------------------------------------- |
| `split`        | 2                                | left, right                           |
| `split`        | 3                                | left third, center third, right third |
| `clock`        | 3                                | left, top right, bottom right         |
| `counterclock` | 3                                | right, top left, bottom left          |


## Working with tabs

:::docotodo

reference

:::

## Working with media

| Command                  |
| ------------------------ |
| `volume up`              |
| `volume down`            |
| `(volume \| media) mute` |
| `[media] play next`      |
| `[media] play previous`  |
| `media (play \| pause)`  |

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
