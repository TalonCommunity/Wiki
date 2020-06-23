## Talon Settings

In a `.talon` file, a `settings()` block can be used to alter settings, both for Talon and for user modules. For example:

```
app: Emacs
-
settings():
    key_wait = 1.5
```

will set the `key_wait` setting to 1.5 whenever the current application is emacs.

The remainder of this page describes various important settings that you might want to meddle with.

### speech.timeout

This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a command. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

It is measured in milliseconds; the default is 0.150.

### key_wait

This is a multiplier that changes how long Talon waits between sending keypresses to the operating system. I believe the default is 1.

### speech.engine

Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. This really needs a page explaining it all to itself.
