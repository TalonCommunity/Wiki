# Customize Keyboard Shortcuts

Another feature is the ability to customize (or `bind`) keyboard shortcuts.

:::note
The primary purpose of Talon is to support hands-free input replacement for the keyboard and mouse.
This feature is different and allows users with the ability to use the keyboard to define shortcuts.
:::

```talon
title: /my app/
-
# Show notification saying the key was pressed and prevent other apps from receiving the key event
key(f8): app.notify("f8 key pressed")

# One or more modifiers can be used with the matcher
key(ctrl-shift-alt-super-f8): app.notify("Lots of modifiers and the f8 key pressed. Note that alt is option on Mac. Use cmd modifier on Mac to use the apple key in a shortcut.")

key(f9:passive): app.notify("f9 pressed, and we won't stop any other apps from receiving the key")
key(f9:up): app.notify("show this balloon when the f9 key is released")
```

The list of available keys you can customize isn't well defined, but it is likely a subset of the names on the [key() action](/docs/Customization/Talon%20Library%20Reference/Actions/key_action.md) wiki page.
