---
sidebar_position: 4
---

# Captures

Captures parse some user-spoken words and run arbitrary Python code to produce an associated result that can be used in voice commands. This is useful for defining reusable "chunks" of grammar that parse your speech in interesting ways. They are also a more extensible option than lists in your public Talon user file sets (see later in this section for more detail).

An example is defining a grammar for playing computer games where a character moves around on a square grid using a d-pad type interface (up, down, up right etc.). We might like to be able say something like "move north east" or "attack west". This could be implemented as follows:

**`directions.py`**:

```python
from typing import Dict
from talon import Module, actions

mod = Module()


@mod.capture(rule="((north | south) [(east | west)] | east | west)")
def dpad_input(m) -> Dict[str, bool]:
    """
    Matches on a basic compass direction to return which keys should
    be pressed.
    """

    return {
        "up": "north" in m,
        "down": "south" in m,
        "right": "east" in m,
        "left": "west" in m
    }

@mod.action_class
class GameActions:
    def dpad_keydown(direction: Dict[str, bool]):
        "Holds down the keys corresponding to the given direction"

        # Press all the indicated keys down, exploiting the fact
        # that the key names in our dictionary match the arrow key
        # names on the keyboard
        for key, pressed in direction.items():
            if pressed:
                actions.key(f"{key}:down")

    def dpad_keyup(direction: Dict[str, bool]):
        "Releases the keys corresponding to the given direction"
        for key, pressed in direction.items():
            if pressed:
                actions.key(f"{key}:up")

    def dpad_move(direction: Dict[str, bool]):
        "Moves the character in the given direction"

        actions.user.dpad_keydown(direction)
        actions.user.dpad_keyup(direction)

    def dpad_attack(direction: Dict[str, bool]):
        "Makes the game character attack in the indicated direction"

        actions.user.dpad_keydown(direction)
        # Assume space is a common 'perform attack' key
        actions.key("space")
        actions.user.dpad_keyup(direction)
```

This code first implements a new capture which matches on any of the compass directions, parses that and returns a data structure describing which directions were indicated. There is also a set of actions included which take this data structure and use it to press the appropriate keys.

**`game_one.talon`**:

```talon
move <user.dpad_input>: user.dpad_move(user.dpad_input)
attack <user.dpad_input>: user.dpad_attack(user.dpad_input)
```

The above .talon file uses the angle bracket syntax to indicate we want to use the named capture. With these files you could then say something like "move north east" and the up and right keys would be pressed and released, moving your character up and to the right.

In this example we have only set up a simple capture. The 'rule' parameter in the `@mod.capture` annotation actually has the same capabilities as the rule component of a .talon file command. The type of the 'm' parameter passed to your capture method behaves similarly to the body in a .talon file. You can use syntax like `m.my_list_2` to access the second usage of `user.my_list` in your rule expression for example. The `m` parameter can also be accessed as an array of its subcomponents. This was done in the above example (using the `in` operator to search the array).

#### Captures vs lists in voice commands

It was mentioned earlier that using captures in the voice commands of your public Talon user file sets is a better option than lists. To see why, consider the `<user.symbol_key>` capture from [Talon Community](https://github.com/talonhub/community). This capture is used in a voice command that lets you press a key by just saying its name (e.g. saying "dot" produces "."). A partial implementation of that capture is included below:

```python
from talon import Module, Context, actions, app
mod = Module()
ctx = Context()

mod.list("symbol_key", desc="All symbols from the keyboard")

ctx.lists["user.symbol_key"] = {
    "dot": ".",
    "quote": "'",
    "paren": "(",
    # ... 100 other key names
}

@mod.capture(rule="{user.symbol_key}")
def symbol_key(m) -> str:
    "One symbol key"
    return m.symbol_key
```

This capture is doing nothing but wrap the symbol_key list, so why is this useful? The reason in this case is the end user might want to extend the list of available keys in all voice commands that are using this capture. If the commands used a list like `{user.symbol_key}: key(symbol_key)`, then to add an extra key they'd need to copy that 100 item list to their new context. Because a capture is used instead (`<user.symbol_key>: key(symbol_key)`) we can add to the voice command using a file like this:

```python
from talon import Module, Context

mod = Module()
mod.list("mystuff_symbol_key", desc="extra symbol keys")

ctx = Context()
ctx.matches = "app: my_app"
ctx.lists["user.mystuff_symbol_key"] = {
    "semi": ";",
}

@ctx.capture("user.symbol_key", rule="{user.symbol_key} | {user.mystuff_symbol_key}")
def symbol_key(m):
    return str(m)
```

Note that all I needed to do was implement the capture with a new rule parameter to have the extra 'semi' option be available to the command in the context of `app: my_app`.
