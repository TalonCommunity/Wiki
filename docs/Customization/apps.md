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

```config
app: fancyedit
-
my fancy editor command: key(ctrl-alt-shift-y)
```
