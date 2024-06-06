# Apps

Talon allows you to give a 'well-known' name to an app. This lets you decouple the app matcher logic from the places it is used.

Register and identify the 'fancyedit' app via a Talon Module in Python - **`fancyedit.py`:**

```python
from talon import Module
mod = Module()
mod.apps.fancyedit = """
os: mac
and app.bundle: com.example.fancyedit
"""
# you can specify the same app several times; this is the same as specifying several match statements that are OR'd together
mod.apps.fancyedit = """
os: windows
and app.exe: fancyed.exe
"""
```

Add another possible matcher for fancyedit in a different file than the one the well-known name was defined in - **`fancyedit_custom.py`:**

```python
from talon import Context
ctx = Context()
ctx.matches = """
os: linux
app: Xfce4-terminal
title: /fancyed - tmux/
"""

ctx.apps = ['fancyedit']
```

Use the well-known app - **`fancyedit.talon`:**

```talon
app: fancyedit
-
my fancy editor command: key(ctrl-alt-shift-y)
```

## Non-Explicit App Header Matching

Explicitly defining an `app` match to a well-known name, as described above, is the prefered approach. With that said,
it's worth noting that talon will match against `app: ...` even if something hasn't already been explicitly declared.
Using the the Gnome `clocks` GUI application on Linux as an example, where no existing explicit `app` declared,  talon
debug window will show `app.app = org.gnome.clocks`. In this case, `app.app` matches what talon has in `app.name`. As
such, you can add `app: org.gnome.clocks` in your talon file context header and it will match. This type of non-explicit
matching should be avoided when contributing code to the community repo.
