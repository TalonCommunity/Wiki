---
sidebar_position: 2
---

# Modules and Contexts

## Modules

A Module is a place for giving things names. In particular, it can declare [actions](actions.md), [lists and captures](lists_and_captures.md), [scopes](scopes.md), [tags](tags.md), [modes](modes.md), [settings](settings.md) and well-known [applications](apps.md). In Python, you can construct a module like so:

```python
from talon import Module
mod = Module()
```

All Actions, Lists etc. must first be declared via a Module before they can be referenced in `.talon` or `.py` files. See the concept sections linked above for how to do this in each case.

## Contexts

A _context_ specifies conditions under which to add new behavior or override existing behavior. A context can check for several properties like your OS, the name of the current application, etc. Within a particular context you can implement/override the behavior of [actions](/Customization/Python%20API%20Documentation/actions), adjust [settings](/Customization/Python%20API%20Documentation/settings), activate [tags](/Customization/Python%20API%20Documentation/tags), and redefine [lists and captures](lists_and_captures.md). Note that you cannot define new voice commands in Python, that can only be done in `.talon` files.

In Python, you can construct a context like so:

```python
from talon import Context
ctx = Context()
```

When initially constructed, a context has no conditions attached, and so it is always active.
You can make this context conditional by setting the `matches` property:

```python
ctx.matches = """
app: notepad_app
os: windows
"""
```

Multiple contexts can be active at any one time, we might have the one mentioned above as well as one with `ctx.matches = "os: windows"`. Since contexts can override behavior, Talon has a set of heuristics to work out which context should 'win' in the event that two or more override the same behavior. A useful approximation of these heuristics is that contexts with more matching rules will win. This concept can be used to make sure your overrides are used in preference to those implemented elsewhere (e.g. in [Talon Community](https://github.com/talonhub/community)). For example if we wanted a more specific matcher than the one above we might add in a `language: en` requirement:

```python
from talon import Context
more_specific_ctx = Context()

more_specific_ctx.matches = """
app: notepad_app
os: windows
language: en
"""
```

See examples in the [Actions](actions), [Lists, captures](./lists_and_captures.md), and [Tags](tags) sections for information about using Contexts with those features.
