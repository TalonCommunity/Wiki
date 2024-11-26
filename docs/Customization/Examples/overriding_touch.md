# Overriding the Touch Command

:::docoscope Talon Community User File Set

:::

Lets say you wanted to change the behaviour of the `touch` command so that it didn't hide the mouse grid if it was open.

The community code is in a `.talon` file without a context header called `mouse.talon`:

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

Notice that we've given it a context header. Because this context headar is more specific (i.e. it has more rules in it) this implementation of "touch" will take precedence over the original.
The implementation just has the `user.grid_close()` line and associated comment removed.

In addition to `language: en` and `os: ` examples, another redundant filter you can add is `mode: command` (assuming you want to define the command in the default 'command' mode).

This is a simple way of overriding voice commands using `.talon` files. Many other parts of the system (such as the behaviour of actions) can also be overridden, but this requires editing `.py` files.
