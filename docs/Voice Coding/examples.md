---
sidebar_position: 7
---

# Voice Coding Examples

The following are examples of code and the Community commands used to dictate them. These examples could have been made shorter using some cursorless commands, but they only use Community commands for the sake of example.

Within every utterance, each individual command is surrounded with double quotes. A command argument constrained to a limited list is in bold. A command argument that can be any word is an italics, and a command argument that can be any arbitrary phrase is in underlined.

## Adding Even Values

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
even_total = add_even_values(example_values)
print(even_total)
```

commands:

"snip <b>funk</b> <u>add even values</u>"

```python
def add_even_values():

```

"word <i>values</i>" "snip next"

```python
def add_even_values(values):

```

"word <i>total</i>" "op <b>equals</b>" "numb <b>zero</b>"

```python
def add_even_values(values):
    total = 0
```

"slap" "snip <b>for each</b>" "vest"

```python
def add_even_values(values):
    total = 0
    for v in :

```

"snip next" "word <i>values</i>" "snip next"

```python
def add_even_values(values):
    total = 0
    for v in values:

```

"snip <b>if</b>" "vest" "op <b>mod</b>" "numb <b>two</b>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2:

```

"is <b>equal</b>" "numb <b>zero</b>" "snip next"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:

```

"word <i>total</i>" "op <b>plus equals</b>" "vest"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
```

"slap" "wipe" "twice" "snip <b>return</b>" "word <i>total</i>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
```

"slap" "wipe" "snake <u>example values</u>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values
```

"op <b>equals</b>" "box" "numb <b>one</b>" "comma" "space"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, ]
```

"numb <b>three</b>" "comma" "space" "numb <b>two</b>" "comma" "space" "numb <b>four</b>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
```

"slap" "snake <u>even total</u>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
even_total
```

"op <b>equals</b>" "snake <u>add even values</u>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
even_total = add_even_values
```

"round" "snake <u>example values</u>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
even_total = add_even_values(example_values)
```

"funk <b>print</b>" "snake <u>even total</u>"

```python
def add_even_values(values):
    total = 0
    for v in values:
        if v % 2 == 0:
            total += v
    return total
example_values = [1, 3, 2, 4]
even_total = add_even_values(example_values)
print(even_total)
```
