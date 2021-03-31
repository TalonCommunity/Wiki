---
sidebar: true
order: 9
---

# Advanced Talon

## Alternative User Configurations

If you do not have anything specific in mind, start out using [knausj_talon](https://github.com/knausj85/knausj_talon), which has become the most shared Talon configuration.  Of course there are alternatives, but **only use one repository - they should not be mixed.**

| Talon Release | GitHub Repository | Description |
|-|-|
| **Public** | **[knausj85's knausj_talon](https://github.com/knausj85/knausj_talon)** | **The currently recommended go-to repository for general use** |
| Public | [Fidgetingbit's Talon Config](https://github.com/fidgetingbits/knausj_talon) | Fork of Knausj's config with VimSpeak support |
| Public | [mrob95's Talon Config](https://github.com/mrob95/MR-talon) | Mark Robert's Talon config with support for Windows dev tools (Windows Terminal, Mintty, Windows Workspaces) |

## Mouse Grid

A mouse grid can be used to control the mouse cursor with neither hands nor eye-tracking.  An implementation for Talon is included in the knausj_talon repository. There is a `settings.talon` file inside the knausj repository where you need to turn the mouse grid on if you want to use it.


## Notification for what Talon understands

If you'd like a notification to show you what Talon is hearing you say, add this [notify.py](https://github.com/TalonCommunity/Wiki/tree/gh-pages/extras/notify.py) in `~/.talon/user` (anywhere in the .talon/user folder is fine) or create your own notify.py file with its contents.


## Insert the plain command that Talon understood

Warning! This is a hack that could stop working tommorrow!

Talon makes extensive use of all the information it has on known and expected commands and words to guide the speech recognition: Impossible words won't be recognized, and this can help speech with slightly off pronounciation to still work just fine.

If you want to write down a specific full Talon phrase, for documentation or discussion, just dictating it regularly could be much more difficult than just saying the command, because in a free-text phrase Talon cannot make use of this information.  But! Using this little hack, you actually can dictate a Talon command!  No explanation, because: here be dragons!

**`keeper.talon`:**
```
^keeper: skip()
```

**`keeper.py`:**
```python
from talon import actions, speech_system
def fn(d):
    words = d['parsed']._unmapped
    if words[0] == 'keeper':
        actions.insert(' '.join(words[1:]))
        d['parsed']._sequence = []
speech_system.register('pre:phrase', fn)
```
