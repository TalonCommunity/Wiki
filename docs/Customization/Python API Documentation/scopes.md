# Scopes

Scopes allow you to supply additional properties that can be matched in the header of `.talon` files or by the `Context.matches` string in Python. This could be used to make the window title from your current virtual machine window available to Talon for example. Another might be to tell Talon which mode your full-screen computer game is in. In practise they are not used very often.

You need to write custom Python code to keep your scope information up to date. The following example implements a scope that makes the current time available as a matcher property.

`test.py`

```python
import datetime
from talon import Module, cron

mod = Module()

@mod.scope
def my_scope_updater():
    # Sets the user.current_time scope to something like "04:12 PM"
    return {"current_time": datetime.datetime.now().strftime("%I:%M %p")}

# Re-run the above code every minute to update the scope. You can run
# <scope function>.update() from anywhere you like to trigger an update.
cron.interval("1m", my_scope_updater.update)
```

`test.talon`

```config
# This matcher can either be a plain string or a regex
user.current_time: /AM$/
-
is it morning: "yes it is!"
```

`scopes` are 'global' in the sense that you can't override them for particular contexts in the same way as actions. Any file can simply overwrite a particular scope's value by implementing some python code like the above.

You may have noticed that scopes can emulate the behaviour of [tags](#tags), except you have to manage any context switches yourself. In practise tags are used far more often than scopes as they're both simpler to use, and are also self documenting. This leads to the recommendation that if you are able to use a tag for your use-case, then generally you would do that. If you need the string matching behaviour of scopes then you might consider those.
