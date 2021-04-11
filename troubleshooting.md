---
sidebar: true
order: 5
---

# Troubleshooting


## Talon does nothing when I speak

  * Check the microphone Talon selected, it's at the start of the log
e.g. `2020-03-04 15:27:53  INFO Activating Microphone: "Yeti Nano Analogue Stereo"`

If it's the wrong one, use the menu in the app tray to change it.

  * Check your speech engine has initialised by looking at the log e.g.
`2020-03-04 15:28:05  INFO (SpeechSystem) Activating speech engine: W2lEngine(en_US)`

If you're on Linux or Mac (without dragon), make sure you have set up [wav2letter][wav2letter-gen2.1].

[wav2letter-gen2.1]: https://talonvoice.slack.com/archives/G9YTMSZ2T/p1597793361100700?thread_ts=1597793171.100600&cid=G9YTMSZ2T "Wav2Letter Gen2.1"

Check you have some valid commands in `~/.talon/user`. If it's empty clone https://github.com/knausj85/knausj_talon and try saying the alphabet

"air bat cap drum".


## Talon crashes during use

Report it! Talon should recover from most errors itself, but if it crashes report it in Slack with the output log.

Originally published by @hbk619 https://github.com/hbk619/talon-docs/blob/master/faq.md.


## Talon seems to do the wrong thing all the time

Make sure that you are in the correct mode. `knausj_talon` has two modes: command mode and dictation mode.

* Use dictation mode for free-form speech dictation, like writing an email. (Switch by saying "dictation mode".)
* Use command mode for everything else, including dictating individual letters or writing code. (Switch by saying "command mode".)

## Talon has to be restarted for changes in configuration to take effect

Talon automatically tracks changes to files in `~/.talon/user`, so that one can change scripts on the fly. This breaks if `~/.talon` (or any other part of the path) is a symlink. On Linux, this can be fixed by replacing the symlink by a [bind mount][bind-mount-stackexchange]:

```sh
rm ~/.talon; mkdir ~/.talon  # or whichever part is a symlink
sudo mount --bind /path/to/dot/dir ~/.talon
```

[bind-mount-stackexchange]: https://unix.stackexchange.com/questions/198590/what-is-a-bind-mount

This can be made permanent by adding the following line to `/etc/fstab`:

```
/path/to/dot/dir	/home/<user>/.talon	none	bind
```
