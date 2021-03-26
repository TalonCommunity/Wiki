---
sidebar: true
order: 9
---

# Advanced Talon

## Speech Recognition Engines

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** If you are already using Dragon, you might want to start out with Dragon. Otherwise, Talon's own engine _wav2letter_ is recommended.

All Engines have their quirks. Some models are under rapid development and this list is subject to change. **Last Updated:** 3/25/2021

| Name                             | Operating Systems   | Description                                                                                                                                                                                                                                                 | Setup Instructions                                                                                               | Cost                                                                                          |
| -------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| wav2letter gen2                  | Windows/macOS/Linux | This is best free option, and recommended for people on a budget. This is the default engine/model; it's very fast and has decent command accuracy. Best for short commands and programming, but dictation accuracy suffers.                                | [https://talonvoice.com/docs/index.html#getting-started](https://talonvoice.com/docs/index.html#getting-started) | Free                                                                                          |
| wav2letter conformer             | macOS/Linux         | Currently recommended paid option. Accuracy is extremely good for both dictation and commands. This engine is very new, but strongly recommended by early adopters.                                                                                         | See pinned messages in #beta for setup instructions                                                              | Requires Talon beta; see https://www.patreon.com/join/lunixbochs for pricing                  |
| Dragon                           | Windows             | Good for non-English and general all around command and dictation. Dragon is discontinued for Mac, so basically just available for Windows. Very good baseline quality for both dictation and commands. Has quirks, and you can't do much about the quirks. | [Windows](https://talon.wiki/SettingUpTalonWindows10Dragon)                                                      | Requires Dragon; see [https://www.nuance.com/dragon.html](https://www.nuance.com/dragon.html) |
| web2letter conformer             | Windows/macOS/Linux | This is the preferred option for Windows users that want the improved accuracy of wav2letter conformer. Requires remote access (or local via a VM) to a server running wav2letter conformer.                                                                | Ask @aegis in Slack for instructions                                                                             | Requires Talon beta; see https://www.patreon.com/join/lunixbochs for pricing                  |
| wav2letter sconv large-b2        | macOS/Linux         | Legacy choice, mostly superceded by conformer. Significantly better dictation accuracy than gen2, has some quirks around command recognition.                                                                                                               | See pinned messages in #beta for setup instructions                                                              | Requires Talon beta; see https://www.patreon.com/join/lunixbochs for pricing                  |
| wav2letter sconv-b6              | macOS/Linux         | Legacy choice, mostly superceded by conformer. Significantly better dictation accuracy than gen2, has some quirks around command recognition.                                                                                                               |                                                                                                                  | Requires Talon beta; see https://www.patreon.com/join/lunixbochs for pricing                  |
| Dragon over a local area network | macOS/Linux         | This option is uncommon but allows using a Windows version of Dragon from a Mac (Dragon for Mac is discontinued). If you have the Windows version of Dragon, Talon beta can connect to Dragon on your Windows machine/VM from your Mac.                     | See pinned messages in #beta for setup instructions                                                              | Requires Talon beta; see https://www.patreon.com/join/lunixbochs for pricing                  |


## Dictation Engines

You might choose to use one of these if:
- you would like to dictate in a language other than English
- you are using a command engine from the table above that doesn't have great dictation support

| Name           | Operating Systems   | Description                                                                                                                                                                                         | Setup Instructions                                  | Cost                                                                         |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------- |
| webspeech      | Windows/macOS/Linux | Excellent accuracy, but added latency because speech is sent to Google for processing. Offers support for many non-English languages.                                                               | See pinned messages in #beta for setup instructions | Requires talon beta; see https://www.patreon.com/join/lunixbochs for pricing |
| Built-in macOS | macOS               | Works for some folks but isn't the best engine available so it is not commonly used.                                                                                                                |                                                     | Requires talon beta; see https://www.patreon.com/join/lunixbochs for pricing |
| vosk           |                     | Popular amoung Talon users who speak German and want to run their Talon installation without internet. Supports many languages, see [https://alphacephei.com/vosk/.](https://alphacephei.com/vosk/) |                                                     | Requires talon beta; see https://www.patreon.com/join/lunixbochs for pricing |

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
