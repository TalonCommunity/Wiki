# Tags

Besides concrete features like an application's name or a window's title, a context can also select for _tags_. Tags have a couple of main uses:

1. Tags can be used to activate additional voice commands within a particular context. For example [Talon Community](https://github.com/talonhub/community) has some tab management commands (e.g. tab new) that apply to many applications. Application specific contexts or `.talon` files can simply enable the tag (and potentially implement the relevant actions) to activate those voice commands.
2. Tags can be enabled from Python to activate a set of voice commands given certain conditions. For example the mouse grid activates a tag when it is visible. This tag enables the 'grid off' and 'grid reset' commands.

To make a tag available, it must first be declared in a module:

**`generic_application_features.py`:**

```python
from talon import Module

mod = Module()
# this declares a tag in the user namespace (i.e. 'user.tabs')
mod.tag("tabs", desc="basic commands for working with tabs within a window are available")
```

Next let's define a set of generic voice commands we think will apply to all applications with tabs:

**`tabs.talon`:**

```config
# This selects for the tag 'user.tabs'.
tag: user.tabs
-
(open | new) tab: app.tab_open()
last tab: app.tab_previous()
next tab: app.tab_next()
close tab: app.tab_close()
reopen tab: app.tab_reopen()
```

Finally, let's activate these voice commands for the firefox application:

**`firefox.talon`:**

```config
app: Firefox
-
# This activates the tag 'user.tabs'.
tag(): user.tabs
```

Of course, the commands we defined in `tabs.talon` just invoke corresponding [actions](unofficial_talon_docs#actions), so unless the default behavior of those actions is what we want, we'd also need to _implement_ them in a Python file (see [Actions](#actions)). Happily, in this case the default behavior suffices. Tags and actions often go together in this way.

There's also the option of enabling tags from within Python. To do that you can use a Context instance like this:

```python
from talon import Context

ctx = Context()
ctx.matches = "app: Firefox"
# You can alter the set of tags whenever you like within your Python
# code. The tags will only be applied if your Context is currently active
# and they are included in the tags property. Note that you must replace the entire
# set of tags at once, you can't individually add and delete them
ctx.tags = ["user.tabs"]
```

Tags are a commonly used part of the Talon framework. Related but less commonly used are [modes](#modes) and [scopes](#scopes).

