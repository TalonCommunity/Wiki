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

```config
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

