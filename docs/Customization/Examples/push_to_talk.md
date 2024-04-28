# Listen Only While a Key is Pressed

The example below activates push-to-talk when the f9 key is pressed. You can switch f9 for the key of your choice, but make sure that it does not conflict with your other hotkeys.

```talon
key(f9:down):
    speech.enable()

key(f9:up):
    speech.disable()
```

To toggle Talon on one key press, instead of holding it down:

```talon
key(f9):
    speech.toggle()

```
