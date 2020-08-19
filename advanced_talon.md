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
| Builtin macOS (10.11-10.14) | Stable/Beta  | macOS               | (Note that 10.15's speech recognition engine does NOT work.)         | |
| Dragon Dictate 6            | Stable/Beta  | Windows/macOS       | Must purchase separately.                                            | [Windows](/SettingUpTalonWindows10Dragon) |
| **wav2letter**              | Beta         | Windows/macOS/Linux | Included with Talon beta tier, separate download!                    | [Install instructions][wav2letter-gen2.1] |
| wav2letter large-b2         | Beta         | Windows/macOS/Linux | Newer experimental wav2letter model                                  | [Install instructions][wav2letter-large-b2] |
| wav2letter sconv-b5         | Beta         | Windows/macOS/Linux | Newer experimental wav2letter model                                  | [Install instructions][wav2letter-b5] |
| web2letter (deprecated)     | Beta         | Windows/macOS/Linux | Remote access to a server running outdated wav2letter gen2           | Ask `@aegis` in Slack for instructions |
| webspeech                   | Beta         | Windows/macOS/Linux | Uses chrome or firefox for speech recognition.                       | [Setup instructions][webspeech] |

[wav2letter-gen2.1]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1597793361100700?thread_ts=1597793171.100600&cid=G9YTMSZ2T "Wav2Letter Gen2.1"
[wav2letter-large-b2]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1595567914289200 "Wav2Letter Large Beta-2"
[wav2letter-b5]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1595566865283400 "Wav2Letter Beta-5"
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

If you do not have anything specific in mind, start out using [knausj_talon](https://github.com/knausj85/knausj_talon), which has become the most shared Talon beta configuration.  Of course there are alternatives, but **only use one repository - they should not be mixed.**

| Talon Release | GitHub Repository | Description |
|-|-|
| Beta | [knausj85's knausj_talon](https://github.com/knausj85/knausj_talon) | The go-to repository for beta users |
| Beta | [Fidgetingbit's Talon Config](https://github.com/fidgetingbits/knausj_talon) | Fork of Knausj's config with VimSpeak support |
| Beta | [mrob95's Talon Config](https://github.com/mrob95/MR-talon) | Mark Robert's Talon config with support for Windows dev tools (Windows Terminal, Mintty, Windows Workspaces) |
| Public | [lunixbochs's talon_starter_pack](https://github.com/lunixbochs/talon_starter_pack) | The go-to lite version of the talon_community repository containing only the essentials |
| Public | [dwiel's talon_community](https://github.com/dwiel/talon_community) | A larger configuration set with more niche modules |


## Mouse Grid

A mouse grid can be used to control the mouse cursor with neither hands nor eye-tracking.  An implementation for Talon is available from a community member at [github.com/timo/talon_scripts](https://github.com/timo/talon_scripts/tree/master/mousegrid).


## Notification for what Talon understands

If you'd like a notification to show you what Talon is hearing you say, add this [notify.py](https://github.com/TalonCommunity/Wiki/tree/gh-pages/extras/notify.py) in `~/.talon/user` (anywhere in the .talon/user folder is fine) or create your own notify.py file with its contents.
