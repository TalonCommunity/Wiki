# Toggle listening

If you want to completely prevent Talon from listening, so not even the wake up commands are active, you can do that by changing the microphone to `"None"`:

You can see available microphone names in the "Microphone" submenu in the Talon menu; or issue the voice command `"microphone show"`.

```talon
key(f9):
    sound.set_microphone("None")

key(f10):
    sound.set_microphone("System Default")
```
