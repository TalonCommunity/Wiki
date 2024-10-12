# Overriding Existing Voice Commands

One thing that may not be immediately obvious is that re-using voice commands is perfectly acceptable. You can just create a new `.talon` file with a new context header and redefine the command.

This also provides a simple way of overriding the behaviour of existing voice commands from the [Talon Community](https://github.com/talonhub/community) user file set. Lets say you wanted to change the behaviour of the `touch` command so that it didn't hide the mouse grid if it was open.

The existing code is in a `.talon` file without a context header called `mouse.talon`:

```talon
touch:
    mouse_click(0)
    # close the mouse grid if open
    user.grid_close()
    # End any open drags
    # Touch automatically ends left drags so this is for right drags specifically
    user.mouse_drag_end()
```

We can see the `user.grid_close()` action is called to close the grid after clicking the mouse. Also note the lines starting with '#' characters are called comments. They are just there for documentation and will not be otherwise processed by Talon.

If we wanted to stop the `user.grid_close()` behaviour we could just create a new `.talon` file and put in the following contents:

```talon
os: mac
-
touch:
    mouse_click(0)
    # End any open drags
    # Touch automatically ends left drags so this is for right drags specifically
    user.mouse_drag_end()
```

Notice that we've given it a context header. Because this context headar is more specific (i.e. it has more rules in it) this implementation of "touch" will take precedence over the original. The implementation just has the `user.grid_close()` line and associated comment removed.

In general you can use this technique by just making a version of the `.talon` file you want to override and putting in more redundant rules to make it the more specific version. In addition to "os: " some other redundant filters you can add are "mode: command" (assuming you want to define the command in the default 'command' mode) and "speech.engine: wav2letter" (assuming you're not using Dragon).

This is a simple way of overriding voice commands using `.talon` files. Many other parts of the system (such as the behaviour of actions) can also be overridden, but this requires editing `.py` files.

## 💡 Tip: Overriding cleanly

You can override Talon lists by creating a new `.talon-list` file of your own, rather than changing the existing list in the repository.
This reduces how much manual `git merge`-ing you'll have to do in the future, when you go to merge new versions of this repository (colloquially called "upstream") with your local changes. This is because _new_ files you create will almost never conflict with upstream changes, whereas changing an existing file (especially hot spots, like commonly-customized lists) frequently do.
Your override files can even live outside of the `community` repository (anywhere in the Talon user directory), if you prefer, further simplifying merging.
To do so, simply create a `.talon-list` file with a more specific [context header](https://talon.wiki/Customization/talon-files#context-header) than the default. (For example, `lang: en` or `os: mac` main). Talon ensures that the most specific header (your override file) wins.

For example, to override `user.modifier_key`, you could create `modifier_keys_MYNAME.talon`:

```talon
list:  user.modifier_key
language: en
-

# My preferred modifier keys
rose: cmd
troll: control
shift: shift
alt: alt
```
