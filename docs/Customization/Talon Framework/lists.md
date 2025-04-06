---
sidebar_position: 3
---

# Lists

A list associates sequences of spoken words with strings that can be used in voice commands. This is useful for commands that permit a choice from a list of options. For example, imagine you wanted to say "exception EXCEPTION" and have Talon type in a programming language appropriate exception class name. You could do that using a list as follows:

**`exceptions.py`:**

```python
from talon import Module, Context

mod = Module()
mod.list("exception_class", desc="Exception classes")

ctx_default = Context()
ctx_default.lists["user.exception_class"] = {
    "generic exception": "Exception"
}

ctx_python = Context()
# code.language is a Talon defined scope which can be set to indicate
# the programming language you're currently editing
ctx_python.matches = "code.language: python"
ctx_python.lists["user.exception_class"] = {
    "runtime": "RuntimeError",
    "value": "ValueError",
}

ctx_java = Context()
ctx_java.matches = "code.language: java"
ctx_java.lists["user.exception_class"] = {
    "null pointer": "NullPointerException",
    "illegal argument": "IllegalArgumentException",
}
```

This sets up a list which matches a list of standard exceptions for the target programming language. Note that we can have a different set of item keys in the list for different contexts. Note also that our list (like user defined actions) is prefixed with `user.` to identify it as custom code.

**`exceptions.talon`:**

```talon
exception {user.exception_class}: insert(exception_class)
```

We make use of our list in the above .talon file by referring to it with the curly brace syntax.

Given the above files, if we said "exception null pointer" when the "code.language: java" selector was active we'd get the string "NullPointerException" typed in. Saying "exception generic exception" would do nothing in this context, and nor would "exception value".

One other fact of interest is that there's no merging of lists if multiple contexts match. This would mean that if the "code.language: java" selector was active, then our list would not contain the "generic exception" item (it would only have "null pointer" and "illegal argument").

Because list contents can only be replaced in their entirety, end users can have a harder time overriding the list if they want to add one or two more entries. They would need to copy paste the contents of the source list and then add their entries to the end. See the captures section below for a pattern you can use to make this use case easier.

## Advanced List Features

### Dynamic Lists

Dynamic lists are an advanced Talon feature that as of Talon 0.4 are currently **beta-only**. They are used for generating lists of items for voice commands at runtime. For example, you can use dynamic lists to create voice commands specific to the names of elements currently on the screen. Without dynamic lists you would otherwise have to poll and constantly update a normal Talon list. Dynamic lists can also return [selection lists](#selection-lists) to dynamically match voice commands to substrings.

If you do not need the list to be constructed during the voice command, you should use a regular Talon list instead.

The following code creates a dynamic list such that if the user says `test hello` it will insert `world`. While this example is trivial, dynamic lists can call any function during the process of generating the list, and can thus be quite powerful.

```talon
test {user.dynamic}: insert(dynamic)
```

```python
mod.list("dynamic")

# This function is called generates the list whenever used in a voice command
@ctx.dynamic_list("user.dynamic")
def dynamic() -> dict[str, str]:
    # Any function that returns a dictionary can be used here
    return {"hello": "world"}
```

The code above is equivalent to the following non-dynamic context list below.

```python
ctx.lists["user.dynamic"] = {"hello": "world"}
```

### Selection Lists

Selection lists are another feature that as of Talon 0.4 are currently **beta-only**. They are used for matching substrings instead of a key value mapping like a normal talon list. For instance:

```python
ctx.selections["user.sample_selection"] = """
the dog is brown and fast
"""
```

```talon
test {user.sample_selection}: insert(sample_selection)
```

This code would allow you to say `test the`, `test the dog`, `test brown and fast`, or any other substring of the original text and have it insert `the`, `the dog`, or `brown and fast` respectively. If you did not match a substring, the command would not work.

Selection lists can include multiple strings from which to select from. To use this feature, each line of should be separated by two newline characters (\n\n). For example:

```python
ctx.selections["user.sample_selection"] = """
the dog is brown and fast


the cat is black and slow
"""
```

That would match on phrases from both lines, such as `brown and fast` or `cat is black`, among other substrings. (However, it would not match on phrases like `fast the cat` that span multiple separate lines.) Since the selection returns what was said and not the original text, you should search the original text to find which line was matched, if you need this info.

Selection lists pair well with dynamic lists. To return a selection list instead of a dynamic list, simply return the multiline string instead of the dictionary mapping, and change the function signature to return a `str` instead of a `dict[str,str]`. As an example, you could use a dynamic list to dynamically construct a list of all the elements on the screen, using a selection list to match on any substring of the element you want to interact with. (i.e. if the element names are too verbose or contain special characters that are hard to say).
