---
published: true
---
# key() action

The Talon `key()` action allows you to press, hold, and release virtual keyboard keys. You can use it in `.talon` files directly, and most of the time don't need to quote the argument. For example `key(ctrl-f)` is equivalent to `key("ctrl-f")` in .talon files. In Python you do need to quote the argument and can use the action like this:

```python
from talon import actions
actions.key("ctrl-f")
```

Here's some of the syntax you can use with the action:

* `key("f")` - Presses the f key.
* `key("ctrl-t")` - Presses and holds down the control key, then presses t, then releases everything.
* `key("\\"")` - Presses the " key.
* `key("ctrl-shift-alt-option-super-t")` - Presses and holds down the control, shift, alt, super (windows key or cmd key on mac), and option keys, then presses t, then releases everything. Note how you can apply multiple modifiers by connecting them with hyphens.
* `key("left delete")` - Presses the left arrow key, then the delete key.
* `key("ctrl:down")` - Presses and holds the control key. You can use "ctrl:up" to release the key later in the same or a a subsequent key() call.
* `key("tab:3")` - Presses the tab key three times.

Some key names are listed above, and some directly map to what is inserted (e.g. `key(1)` presses the number 1 key). Some key names are not obvious. A partial table of key names with descriptions follows.

| Key name(s) | Description |
| --- | --- |
| a z 0 9 - + ( ) etc. | Presses the key corresponding to the symbol |
| left right up down | Arrow keys |
| backspace bksp | The backspace key (delete character to left) |
| delete del | The delete key (delete character to right) |
| escape esc | The escape key |
| pgup pageup pgdown pagedown | The page up and page down keys |
| return enter | The enter key |
| tab space | The tab and space keys |
| home end | The home and end keys |
| alt super ctrl shift | Can be held down with e.g. `key("shift:down")` (and released with :up) |
| ralt rctrl rshift | The key on the right hand side of the keyboard |
| capslock scroll_lock insert | Persistent mode switch keys |
| f1 f2 ... f35 | The f1 to f35 keys, many of these are probably not on your keyboard, but are nonetheless available |
| mute voldown volup play stop play_pause prev next rewind fast_forward | Media keys |
| altgr | Can be combined with another key to add accents, e.g. `key("altgr:down e altgr:up")` produces "&eacute;". The dead_\* keys might suit you better though. |
| menu help sysreq printscr compose | Miscellaneous keys |
| brightness_up brightness_down | Screen brightness control |
| backlight_up backlight_down backlight_toggle | Maybe keyboard backlight controls? |
| keypad_0 keypad_1 ... keypad_9 | The number keys on a keypad |
| keypad_clear keypad_enter keypad_separator keypad_decimal keypad_plus keypad_multiply keypad_divide keypad_minus keypad_equals | Other keypad keys |
| dead_grave dead_acute dead_circumflex dead_tilde dead_macron dead_breve dead_abovedot dead_diaeresis dead_cedilla | Keys which causes the next key pressed to be accented. For example `key("dead_acute e")` produces "&eacute;". |
| dead_perispomeni dead_abovering dead_doubleacute dead_caron dead_ogonek dead_voiced_sound dead_semivoiced_sound dead_belowdot dead_hook dead_horn dead_iota dead_stroke dead_abovecomma dead_psili dead_abovereversedcomma dead_dasia dead_doublegrave dead_belowring dead_belowmacron dead_belowcircumflex dead_belowtilde dead_belowbreve dead_belowdiaeresis dead_invertedbreve dead_belowcomma dead_currency dead_lowline dead_aboveverticalline dead_belowverticalline dead_longsolidusoverlay dead_a dead_e dead_i dead_o dead_u dead_small_schwa dead_capital_schwa dead_greek | Other keys which accent the next key pressed |
