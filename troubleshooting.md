---
sidebar: true
order: 4
---
# Troubleshooting

## Talon is slow, why?

If you get slow recognition times and lots of pipes in your output
try lowering your input level on your mic, any small background noise
will make Talon wait before it starts processing

## Talon does nothing when I speak

  * Check the microphone Talon selected, it's at the start of the log
e.g. `2020-03-04 15:27:53  INFO Activating Microphone: "Yeti Nano Analogue Stereo"`

If it's the wrong one, use the menu in the app tray to change it.

  * Check your speech engine has initialised by looking at the log e.g.
`2020-03-04 15:28:05  INFO (SpeechSystem) Activating speech engine: W2lEngine(en_US)`

If you're on Linux or Mac (without dragon), make sure you have set up [w2l](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1589476668035000?thread_ts=1589476639.034500&cid=G9YTMSZ2T).

Check you have some valid commands in `~/.talon/user`. If it's empty clone https://github.com/knausj85/knausj_talon and try saying the alphabet

"air bat cap drum".

## Talon crashes a lot

Report it! Talon should recover from most errors itself
but if it crashes report it in Slack with the output log.

Originally published by @hbk619 https://github.com/hbk619/talon-docs/blob/master/faq.md.
