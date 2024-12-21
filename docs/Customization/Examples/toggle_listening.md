# Toggle listening

If you want to completely prevent Talon from listening, so not even the wake up commands are active, you can do that by changing the microphone to `"None"`:

To list available microphone names. Either used the voice command `"microphone show"` or click `Microphone` in the Talon menu.

```talon
key(f9):
    sound.set_microphone("None")

key(f10):
    sound.set_microphone("System Default")
```
