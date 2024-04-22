# Settings

Settings allow you to control some of the parameters of your python files by changing their value in a .talon file. This can be used to make a Talon user file set easier to customize for end users, such as exposing the background color of a UI element. It can also be useful to have certain settings change when the context changes, by setting them to different values in different .talon files.

Settings are defined on Modules. Each setting has a name, type, default value, and description. The following example shows how to define a setting in python and get its contextually dependent value.

`setting.py`

```python
from talon import Module, settings

mod = Module()

mod.setting(
    "my_user_file_set_horizontal_position",
    type=int,
    default=0,
    desc="Set the horizontal display position of some UI element",
)

value = settings.get("user.my_user_file_set_horizontal_position")
print("The current value of the setting is " + value)
```

Note that the name of the setting (the first argument to mod.setting) in the example included the prefix "my_user_file_set". All user defined settings names share the same namespace so it's important to avoid overly generic setting names that may conflict.

The following example shows how you would change the value for that setting in a .talon file. Any number of settings can be defined in a single settings block, but any invalid syntax will prevent the entire block from applying.

`setting.talon`

```talon
-
settings():
    user.my_user_file_set_horizontal_position = 50
    # Any number of other settings could be defined here
```

You can also set the value of a setting from Python:

`myfile.py`

```python
from talon import Context

ctx = Context()

ctx.settings["user.my_user_file_set_horizontal_position"] = 50
```

It is also possible to register a callback function to be called whenever a setting changes. This is done by calling settings.register() with a setting name and a function to call. If the name string is blank (like in the example below) then the callback function will be called whenever any setting is changed. When the name is not blank the function will only be called when a setting with a matching name is changed.

`listener.py`

```python
def settings_change_handler(*args):
    print("A setting has changed")

settings.register("", settings_change_handler)
```

## Built in Talon settings

In a `.talon` file, a `settings()` block can be used to alter settings, both for Talon and for user modules. For example:

```talon
app: Emacs
-
settings():
    key_wait = 1.5
```

will set the `key_wait` setting to 1.5 whenever the current application is emacs.

The remainder of this page describes various important settings that you might want to meddle with.

The following three settings, `insert_wait`, `key_hold`, and `key_wait`, can be used to slow down keypresses when dealing with applications that are behaving unreliably (e.g., key presses seem to be jumbled or dropped).

`insert_wait`
: Increase this if characters seem to be jumbled in a specific app when typing whole sentences. Default is 0.

`key_hold`
: Increase this if you're playing a game and some keys aren't registering at all. You should probably increase it in 16ms increments, e.g. set it to 16ms or 32ms.

`key_wait`
: Increase this if modifier keys are getting dropped or if key presses are misbehaving even with the other two settings (`insert_wait` and `key_hold`) tuned. `key_wait` should be the last resort because it results in the the slowest overall keypress rate. Default is 1.0 in milliseconds.

`speech.engine`
: Determines which speech engine talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'. See [speech recognition engines](../../Quickstart/Speech Engines/speech engines.md).

`speech.timeout`
: This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the the amount of time you can pause between saying 'phrase' and the following phrase.

It is measured in seconds; the default is 0.300, i.e. 300 milliseconds. It has been mentioned in #beta that this setting may not always be available as it was offered as a quick fix in Talon 1283 for Talon 1274 cutting input off too soon sometimes.
