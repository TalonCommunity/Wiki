---
sidebar: true
order: 9
---

# Advanced Talon

## Speech Recognition Engines

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** Only if you are already using Dragon, you might want to start out with Dragon. Otherwise, Talon's own engine _wav2letter_ is recommended.

Again, in case you want to know your options:

| Name                        | Availability | Operating Systems   | Description                                                          | Link                            |
|-----------------------------|--------------|---------------------|----------------------------------------------------------------------|---------------------------------|
| Builtin macOS (10.11-10.14) | Public       | macOS                   | (Note that 10.15's speech recognition engine does NOT work.)         | |
| Dragon Dictate 6            | Public       | Windows/macOS           | Must purchase separately.                                            | [Windows](/SettingUpTalonWindows10Dragon) |
| **wav2letter**              | **Public**   | **Windows/macOS/Linux** | **Currently recommended engine for general use**                     | [Install instructions][wav2letter-gen2.1] |
| wav2letter large-b2         | Beta         | macOS/Linux             | Newer experimental wav2letter model, not yet available for Windows   | [Install instructions][wav2letter-large-b2] |
| wav2letter sconv-b6         | Beta         | macOS/Linux             | Newer experimental wav2letter model, not yet available for Windows   | [Install instructions][wav2letter-b6] |
| web2letter (deprecated)     | Beta         | Windows/macOS/Linux     | Remote access to a server running outdated wav2letter gen2           | Ask `@aegis` in Slack for instructions |
| webspeech                   | Beta         | Windows/macOS/Linux     | Uses chrome or firefox for speech recognition.                       | [Setup instructions][webspeech] |

[wav2letter-gen2.1]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1597793361100700?thread_ts=1597793171.100600&cid=G9YTMSZ2T "Wav2Letter Gen2.1"
[wav2letter-large-b2]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1595567914289200 "Wav2Letter Large Beta-2"
[wav2letter-b6]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1602339473085300 "Wav2Letter Beta-6"
[webspeech]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1591830066339600 "Webspeech Instructions"

Builtin macOS and Dragon support work automatically when available and active, for wav2letter please follow the instructions at the links.

### New wav2letter models

The newer wav2letter models use better training data and training methodology compared to the classic version.  They improve speech recognition in many areas, but they are not yet polished and optimized.  That means, you have to expect some worse performance, or some odd behavior now and then.  That being said, many Talon users report significant improvements.

To reduce the download burden, the files for the newer wav2letter models only include the updated voice model, but not the language model (`lm-ngram.bin`).  You have to copy or link that file.  So the basic procedure is (details may vary, see the links from the table!):

1. Update to latest Talon (at least v1419)
2. Download the new model (see links in the table above)
3. Extract the compressed model file to `~/.talon/`. It will create a new folder similar named like `w2l/en_US-MODELNAME/`.
4. Copy or link the missing files (`lm-ngram.bin` and sometimes `lexicon.txt`) from `w2l/en_US` to `w2l/en_US-MODELNAME/`.
5. Edit your existing `user/w2l.py` by commenting out the other model and add a new line pointing to the new model:
```
#engine = W2lEngine(model='en_US', debug=True)
engine = W2lEngine(model='en_US-MODELNAME', debug=True)
```
6. Restart Talon.


## Alternative User Configurations

If you do not have anything specific in mind, start out using [knausj_talon](https://github.com/knausj85/knausj_talon), which has become the most shared Talon configuration.  Of course there are alternatives, but **only use one repository - they should not be mixed.**

| Talon Release | GitHub Repository | Description |
|-|-|
| **Public** | **[knausj85's knausj_talon](https://github.com/knausj85/knausj_talon)** | **The currently recommended go-to repository for general use** |
| Public | [Fidgetingbit's Talon Config](https://github.com/fidgetingbits/knausj_talon) | Fork of Knausj's config with VimSpeak support |
| Public | [mrob95's Talon Config](https://github.com/mrob95/MR-talon) | Mark Robert's Talon config with support for Windows dev tools (Windows Terminal, Mintty, Windows Workspaces) |

## Mouse Grid

A mouse grid can be used to control the mouse cursor with neither hands nor eye-tracking.  An implementation for Talon is available from a community member at [github.com/timo/talon_scripts](https://github.com/timo/talon_scripts/tree/master/mousegrid).


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
