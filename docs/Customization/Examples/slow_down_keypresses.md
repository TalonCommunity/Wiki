# Slow down key presses

A reasonably common problem that comes up when using Talon with computer games is that the application only recognizes key presses intermittently or not at all. This can be because Talon presses and releases the keys too quickly. The following `.talon` file makes Talon hold down each key for 32 milliseconds before releasing it. You could try increasing the key_hold value incrementally to find the smallest length of time you need to hold for the key to be recognized reliably:

```talon
app.exe: my_game.exe
-
settings():
    key_hold = 32
```

Note the use of app.exe as the context matcher to match the filename of the active program. See the [context header](../TalonScript/context-header.md) for a full list of available matchers.

:::note

`key_hold` isn't the only or necessarily the best setting for your keyboard issue. There are also [many other settings](../settings.md) for configuring other aspects of Talon's behaviour.
