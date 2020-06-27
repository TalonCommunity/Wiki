# Speech Recognition Engines

Here are a list of speech recognition engines available for use with Talon.

| Name                        | Availability | Operating Systems   | Description                                                          | Link                                                                                          |
|-----------------------------|--------------|---------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Builtin macOS (10.11-10.14) | Normal       | macOS               | (Notably note that 10.15's speech recognition engine does NOT work.) | n/a                                                                                           |
| Dragon Dictate 6            | Normal/Beta  | Windows/macOS       |                                                                      | Windows instructions here: https://talon.wiki/SettingUpTalonWithWindows10AndDragonDictate/    |
| sconv2                      | Beta         | Windows/macOS/Linux | Slow decode times. Better dictation mode than default Talon.         | https://talonvoice.slack.com/archives/G9YTMSZ2T/p1590953241451100?thread_ts=1590953241.451100 |
| sconv3                      | Beta         | Windows/macOS/Linux | Faster decode times than sconv2. Spuriously recognizes numbers.      | https://talonvoice.slack.com/archives/G9YTMSZ2T/p1592537896169500?thread_ts=1592537896.169500 |
| sconv4                      | Beta         | Windows/macOS/Linux | Spuriously recognizes numbers less often than sconv3.                | https://talonvoice.slack.com/archives/G9YTMSZ2T/p1593080845371600?thread_ts=1593080845.371600 |
| wav2letter                  | Beta         | macOS/Linux         |                                                                      | n/a                                                                                           |
| web2letter                  | Beta         | Windows             | Uses hosted speech recognition.                                      | https://talonvoice.slack.com/archives/G9YTMSZ2T/p1592322134388800                             |
