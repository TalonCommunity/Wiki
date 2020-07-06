# Talon Settings

In a `.talon` file, a `settings()` block can be used to alter settings, both for Talon and for user modules. For example:

```
app: Emacs
-
settings():
    key_wait = 1.5
```

will set the `key_wait` setting to 1.5 whenever the current application is emacs.

The remainder of this page describes various important settings that you might want to meddle with.

## insert_wait

This will add a delay in ms between keys pressed in `insert()` actions. The default is 0.

## key_wait

This is a multiplier that changes how long Talon waits between sending keypresses to the operating system. I believe the default is 1.

## speech.debug
Enabling this (`speech.debug = 1`) will display the VAD in console. This is useful for determining when Talon is picking up your voice or other background noises. The default value is 0.

## speech.engine

Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. This really needs a page explaining it all to itself.

## speech.timeout

This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase. 

It is measured in seconds; the default is 0.150, i.e. 150 milliseconds.

Note: It has been mentioned in the Beta before that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.


