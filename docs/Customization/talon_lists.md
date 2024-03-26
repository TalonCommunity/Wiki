---
sidebar_position: 3
---

# `.talon-list` Files

`.talon-list` files are a special type of `.talon` file. They are used solely to define lists of strings that can be used in voice commands or your Talon Python scripts. They can do exactly the same things as a Python Context with only a matches property and a single list on it. They are primarily intended for reducing verbosity and making list configuration easier for end users. If you are looking to configure settings it is better to use a `settings()` block in a `.talon` file as a settings block more clearly communicates that it is an internal setting and not part of a capture rule (like a `.talon-list` file would likely be).

A `.talon-list` doesn't require a `:` if the key is the same as the value. The right hand side of the key value pair is a string with or without quotes. It uses the same parser as `.talon` files and the syntax is a strict subset of the `.talon` file syntax, except for the ability to skip the colon and just have a word by itself. You can use tags and scopes in `.talon-list` files just like normal `.talon` files. In the context header, you should declare the name by which the list will be referred to in voice commands or Python by typing `list:` followed by the name within the `user` namespace. Everything declared in a particular `.talon-list` ends up in a single list.

The following example shows a `.talon-list` file that defines a few special characters. Note how the string doesn't need to be wrapped in quotations and can either be just itself or a mapping to a different string.

```config
list: user.key_special
-
enter
tab
delete
page up:                    pageup
page down:                  pagedown
```

We then need to initialize the list within a Talon module object. This is important for giving the list an associated comment. This is done within a Python file in our user directory. As one can see, it is a similar process to declaring a normal context list except for the fact that all the context matching is now done within the `.talon-list` file and we no longer need to do our context matching within Python.

```python
from talon import Module

mod = Module()

mod.list("key_special", "The list of special keys we can input through voice commands")
```

We could then use this list in a `.talon` file like so:

```config
{user.key_special}:              key(symbol)
```
