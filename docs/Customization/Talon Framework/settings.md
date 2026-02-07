# Settings

Settings allow you to control behavior of your Python code by editing a .talon file. This can be used to make a Talon user file set easier to customize for end users, such as exposing the background color of a UI element. It can also be useful to have certain settings change when the context changes, by setting them to different values in different .talon files.

Declare a setting on a Module by calling its`.setting()` method. Each setting has a name, type, default value, and description. A setting's value can be obtained from Python by calling `settings.get()` with the setting name as the argument.

The following example shows how to define a setting in Python and get its context-dependent value. If you are using Community and Python is the active programming language, you can use the command `snip module setting` to define a setting. Because settings are undefined during Talon startup, only obtain setting values in a function registered to be called by Talon (e.g., `ready` callback) or an action.

`setting.py`

```python
from talon import Module, settings, actions

mod = Module()

mod.setting(
    "my_user_file_set_sleep_amount",
    type=int,
    default=200,
    desc="Set the amount of time to sleep in milliseconds",
)

@mod.action_class
class Actions:
    def my_user_file_set_paste_file_to_next_window():
        """Copy the text from the current file to the next window"""
        actions.edit.select_all()
        actions.edit.copy()
        actions.app.window_next()
        # Sleep to avoid  pasting during the window switching process
        value = settings.get("user.my_user_file_set_sleep_amount")
        print(f"The current value of the setting is {value}")
        actions.sleep(f"{value}ms")
        actions.edit.paste()
```

Note that the name of the setting (the first argument to mod.setting) in the example included the prefix "my_user_file_set". All user defined settings names share the same namespace so it's important to avoid overly generic setting names that may conflict.

The following example shows how you would change the value for that setting in a .talon file. Any number of settings can be defined in a single settings block, but any invalid syntax will prevent the entire block from applying.

`setting.talon`

```talon
-
settings():
    user.my_user_file_set_sleep_amount = 50
    # Any number of other settings could be defined here
```

You can also set the value of a setting from Python:

`myfile.py`

```python
from talon import Context

ctx = Context()

ctx.settings["user.my_user_file_set_sleep_amount"] = 50
```
