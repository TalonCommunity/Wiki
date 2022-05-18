## Basic Usage

The examples below are just a very small selection of common commands for working with apps, tabs, media, mouse, etc that should help you be productive with Talon right away.  These are based on the [knaus_talon](https://github.com/knausj85/knausj_talon) Talon user file set (see [the earlier section](#install-a-talon-user-file-set)). These commands may vary depending on your individual setup.


### Command history

`command history`
: Toggles the command history display, which shows the last few commands as Talon understood them; if you're not sure what Talon is doing, or if it understood you correctly, this is how to check it.


### Show available comands

`knausj_talon` has an integrated help.  It can show you a list of all defined commands, or just all commands that are available now.

`help alphabet`
: show the spelling alphabet for pressing individual keys

`help context`
: show all defined commands

`help active`
: show all currently available commands

`help next`, `help previous`
: go to the next or previous page of help items if there are a lot

`help close`
: hide any open help window again


### Switch between modes

Talon has three basic modes by default: command, dictation, and sleep.

In **command mode**, your speech will be interpreted as commands by default. In **dictation mode**, your speech will be transcribed as plain text by default (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems. In **sleep mode**, Talon will do nothing until it hears a commands that wakes it up.

There are currently no visual cues about the current mode. You can tell which mode you're in by running commands and seeing if they are transcribed literally.

`dictation mode`
: switch to dictation mode

`command mode`
: switch to command mode

`talon sleep`
: go to sleep, stop processing commands

`talon wake`
: wake up and return to previous mode


### Open and switch between windows in apps such as Chrome

```
window new
window next
window last
window close
```

### Working with applications

```
focus "app name"     (say "focus chrome" for example, to switch active window to chrome)
running list         (see all active applications)
running hide         (close the list of active applications)
```

If you are on Ubuntu or another Gnome-based Linux distribution, `focus` might not work consistently across different workspaces, popping up a notification rather than actually switching focus. [This extension](https://extensions.gnome.org/extension/1005/focus-my-window/) may help.

### Working with tabs

```
tab (open | new)
tab last
tab next
tab close
tab (reopen|restore)
go tab <number>
go tab final
```

### Working with media

```
mute
play next
play previous
(play | pause)
```

### Working with the Tobii eye tracker

```
control mouse (say "control mouse" to toggle on/off Tobii moving the mouse)
run calibration (say "run calibration" to start Tobii calibration)
```

### Working with text

```
copy that
cut that
paste that
undo that
redo that
```

### Working with the mouse and scrolling

```
dubclick (to double left click)
righty (to right click)
(page | scroll) up
(page | scroll) [down]
wheel down
wheel tiny [down]
wheel downer
wheel up
wheel tiny up
wheel upper
wheel gaze (for scrolling down) (this seems like it would use the Tobii eye tracker but it does not)
wheel stop
wheel left
wheel tiny left
wheel right
wheel tiny right
curse yes (shows cursor)
curse no (hides cursor)
drag
```
