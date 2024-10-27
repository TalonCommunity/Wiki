---
sidebar_position: 3.2
---

# Letters, Numbers & Symbols

This section describes what needs to be said to enter the various keys on the keyboard.

Talon operates this way only whilst in [command mode](command_mode.md). Characters can be entered as written below,
or by saying a phrase with the first word being `press`.

For example, one could say either `pit` or `press pit` to enter the `p` character.

| Section          | Example                 |
| ---------------- | --------------------------- |
| [Talon Alphabet](#talon-alphabet)        | `air` for `a` |
| [Numbers](#numbers) | `press one` for `1` |
| [Symbols](#symbols) | `dollar sign` for `$` |
| [Function Keys](#function-keys) | `f2` |
| [Modifier Keys](#modifier-keys) | `shift air` for `A` |
| [Special Keys](#special-keys) | `home`, `escape` |
| [Arrow Keys](#arrow-keys) | `press down` for the down arrow |
| [Entering Multiple Characters](#entering-multiple-characters) | `press cap three pit odd` for `c3po` |


## Talon Alphabet

Talon has its own alphabet, a set of words that you say instead of individual letters.

For example, instead of saying `p` one would say the word `pit`.

The Talon alphabet can be displayed at any time by saying `help alphabet`.

<img src="/img/help_alphabet.png/"
     alt="screenshot of the talon alphabet, as shown by the `help alphabet` command"
 />

Try saying `air bat cap` to insert abc.

:::warning Improve Wording
the alphabet is defined in
[this Talon list file]`core/keys/letter.talon-list`.
:::

:::note Uppercase Letters
For uppercase letters, you say the word `shift` before the word for the letter. For example, to get an uppercase `Z` you would say `shift zip`.
:::

## Numbers

As one would expect, the following is displayed when `help numbers` is said:
<img src="/img/help_numbers.png/"
     alt="screenshot of the info provided by the `help numbers` command"
/>

:::warning Deprecation
Just saying the number itself will display the following message:

`The "<number>" command is deprecated. Instead, say: "numb <number>"`
:::

So you would need to say `numb one` for `1`.

Alternatively, the number could be preceded by the word `press`. For example `press one` for `1`.

| Prefix          | Note                 |
| ---------------- | --------------------------- |
| `numb`  | Large numbers, for example `numb two thousand and forty eight` will enter `2048` |
| `press` | Numbers can be interspersed with other characters, for example `press red two drum two` for `r2d2` |



## Symbols
Talon has a set of names for each of the punctuation and other symbols on the keyboard.

This can be shown at any time by saying `help symbols`.


<img src="/img/help_symbols.png/"
     alt="screenshot of the talon symbols, as shown by the `help symbols` command"
 />

:::note Alternate Forms
As shown above, for some characters, there are multiple ways the character can be said. For example, you can say either `hash sign` or `number sign` for the character `#`
:::




## Function Keys

To press a function key, simply say `f` followed by the function key number.

The following is displayed by saying `help function key`:
<img src="/img/help_function_key.png/"
     alt="screenshot of the info provided by the `help function key`"
 />

## Modifier Keys

Modifier keys are those that typically are pressed in combination with other keys.

For example `shift zip` and `control air` (or `command air` on a Mac).

To see the list of modifier keys available on your system, say `help modifiers`. These are the modifier keys on Windows.

<img src="/img/help_modifier_key.png/"
     alt="screenshot of the info provided by the `help modifier key` command on windows"
 />

As an example, on Windows, try commands such as:

- `control air` to press control+a and select all.
- `super-shift-sun` to press Win+Shift+s, triggering the screenshot application (Windows 10). Then try `escape` to exit.

On Mac, try commands such as:

- `command air` to press ⌘A and select all.
- `control shift command 4` to press ⌃⇧⌘4, copying a screenshot of the selected area to the clipboard. Then try `escape` to exit. Please note the order of the modifiers doesn't matter.

Modifier keys can be tapped using `press`, for example `press control` taps the control (⌃) key by itself.

## Special Keys

The following is displayed by saying `help special keys`:
<img src="/img/help_special_keys.png/"
     alt="screenshot of the info provided by the `help special keys` command"
 />

## Arrow Keys

The following is displayed by saying `help arrows`:
<img src="/img/help_arrow_key.png/"
     alt="screenshot of the info provided by the `help arrows` command"
 />

## Entering Multiple Characters

Multiple characters can be said in a single utterance.

For example, to write `(?![a-z])` you would say:

```
(          ?             !                [           a   -    z   ]            )
left paren question mark exclamation mark left square air dash zip right square right paren
```

Or slightly shorter:

```
(     ?             !                [        a   -    z   ]        )
paren question mark exclamation mark l square air dash zip r square r paren
```

:::tip It's Okay to Pause
There is no need to say all of that in one breath. You can also say it as:
- `paren question mark exclamation mark` (think, breathe)
- `l square` (scratch head)
- `air dash zip`
- `r square r paren`
:::

:::note
The characters can be from different character classes, and the example above
has both letters and symbols.

However, if the sequence includes any numbers, then the first word said must be `press`.

For example, `press red two drum two` for `r2d2`
:::


## Learning Tools

[Talon Practice Website](/docs/Help/Items/talon-practice-website.md) 

