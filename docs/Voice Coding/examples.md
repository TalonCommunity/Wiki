---
sidebar_position: 7
---

# Voice Coding Examples

The following are examples of dictating code with Community commands. Cursorless could have simplified some these examples, but was not used so the examples stay simple and for those users who don't use an editor that supports Cursorless.

Within every utterance, each voice command is surrounded by “double quotes”. **Bold** indicates an argument constrained to a list of options (e.g., available snippets). _Italics_ indicates any word and  <u>underlining</u> indicates any phrase can be substituted.

Note that you do not have to pause between voice commands when using Talon (“continuous command recognition”).

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

"slap" "funk <b>print</b>" "snake <u>even total</u>"

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
