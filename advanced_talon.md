---
sidebar: true
order: 9
---

# Advanced Talon

## Speech Recognition Engines

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** If you are on Windows or already use Dragon, you be likely want to start out with Dragon. Otherwise, Talon's own engine _wav2letter_ is recommended.

Again, in case you want to know your options:

| Name                        | Availability | Operating Systems   | Description                                                          | Link                                                              |
|-----------------------------|--------------|---------------------|----------------------------------------------------------------------|-------------------------------------------------------------------|
| Builtin macOS (10.11-10.14) | Normal       | macOS               | (Note that 10.15's speech recognition engine does NOT work.)         | n/a                                                               |
| Dragon Dictate 6            | Normal/Beta  | Windows/macOS       | Must purchase separately.                                            | [Windows](/SettingUpTalonWindows10Dragon) |
| wav2letter                  | Beta         | macOS/Linux         | Included with Talon beta tier, separate download!                    | [wav2letter](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1589476668035000?thread_ts=1589476639.034500&cid=G9YTMSZ2T)                                                               |
| wav2letter sconv-b5         | Beta         | macOS/Linux         | Newer beta model. Better dictation than the default Talon model, but potentially has some issues.  | [link](#new-sconv-b5-model) |
| web2letter                  | Beta         | Windows/macOS/Linux | Ping `@aegis` in Slack for instructions                              | n/a                             |
| webspeech                   | Beta         | Windows/macOS/Linux | Uses chrome or firefox for speech recognition.                       | [link](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1591830066339600) |

Builtin macOS and Dragon support work automatically when available and active, for wav2letter please follow the instructions at the links.

### New wav2letter model sconv-b5

If you're on wav2letter now and would like to test out the new voice model, here are the instructions for macOS and Linux only. This does NOT work with web2letter:

1. Update to latest Talon (at least v1419)
2. Download tarball: [link to URL in beta channel](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1595566865283400)
3. Extract tarball to `~/.talon/`. It will create `w2l/en_US-sconv-beta5/`
4. Edit your existing `user/w2l.py` by commenting out the other model and add a new line):
```
#engine = W2lEngine(language='en_US', debug=True)
engine = W2lEngine(language='en_US-sconv-beta5', debug=True)
```
7. Restart Talon.


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
