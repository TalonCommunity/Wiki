# Add new keyboard shortcuts

:::docoscope Talon Platform

:::

Often you will want to add a new voice command to press an application specific keyboard shortcut. Let's choose the YouTube webpage as our example. The following `.talon` file defines two new voice commands:

```talon
title: /YouTube/
-
toggle play: key("space")

search cats:
    key("/")
    sleep(100ms)
    insert("cats")
    key("enter")
```

These commands only apply when the window title has "YouTube" in it. "search cats" first presses the "/" key to focus the YouTube search box, then waits 100 milliseconds to make sure it has been focussed, then types in "cats" and presses enter.

### Keyboard shortcuts

You have the ability to set keyboard shortcuts in `.talon` files. The following `.talon` file toggles whether Talon is listening to speech when you press the `ctrl+t` key combination:

```
key(ctrl-t): speech.toggle()
```

The shortcut is global since there's no context matcher in this `.talon` file restricting it to a particular application for example.

You could replace speech.toggle() with the same types of things that you would use in a voice command.
