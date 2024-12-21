If you want to completely prevent Talon from listening so not even the wake up commands are active you can do that by setting the microphone.

```talon
key(f9):
    sound.set_microphone("None")

key(f10):
    sound.set_microphone("System Default")
```
