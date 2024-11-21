
# Talon seems to do the wrong thing

### Check the Quality of the Sound Input

If your computer is receiving sound input, that doesn't necessarily mean the sound is of good quality. To confirm the sound quality, make a recording of yourself saying Talon commands and play it back. There should be no distortion of the sound and it should be at an optimum volume (not too loud, not too quiet). If you hear any distortion or the volume seems too low or high, check the microphone [gain](#check-the-gain).

### Check the Gain

If you are new to using microphone equipment and are not familiar with microphone gain, check out this podcasting blog [What is microphone gain?](https://podcastarticles.com/what-is-microphone-gain/). In simple terms, gain is the _input_ volume of your audio. If the gain is too low, the audio will sound very quiet and Talon may cut you off or hear you at all. If the gain is too high, then sound may get distorted by [clipping](https://youtu.be/8Px0UReBI60) and Talon may not understand your commands.

One way to test your gain settings is to make an audio recording and listen to how it sounds. The sound should not be overly quiet nor should it sound like you are shouting. Listen for clipping distortions and reduce the gain until there are no distortions.

One tool to make a recording is [Audacity](https://www.audacityteam.org), a free and open-source audio editor and recorder that supports Windows, macOS, GNU/Linux. To make a recording with Audacity:

1. Install and start _Audacity_,
2. set the correct microphone, and
3. press _Record_, utter an upbeat "Hello there!", and stop the recording.
4. Listen to the playback: Your voice should sound clear. If it's too low, increase the gain, if it's distorted, reduce it.

Some audio recording software may also provide visual feedback about whether your gain is at the right level. Look for waveforms that react to your voice. The waveforms should be as big as possible without maxing out.

Each microphone and piece of ancillary microphone equipment (audio interface, preamp, audio adapter, etc.) will have a different personality. Because of that, trust your ears more than the dB reading or the graph of Audacity.

### Check that Talon is in the correct mode

Talon user file sets can be configured to have multiple modes, which will have a different set of functionality. Most commonly, like in the [Talon Community](https://github.com/talonhub/community) user file set, there will be two modes: command mode and dictation mode. In command mode, your speech will be mapped to the commands you have configured in your user file set. In dictation mode, your speech will be typed out literally, which is useful if you want to dictate text, like in an email or document.

- Use dictation mode for free-form speech dictation, like writing an email. (Switch by saying "dictation mode".)
- Use command mode for everything else, including dictating individual letters using the alphabet or writing code. (Switch by saying "command mode".)

### Check your Speech Engine

Check that your speech engine has been initialized by looking in the [talon log file](#check-the-talon-logs) You should see a line that looks like this:

```
2020-03-04 15:28:05  INFO (SpeechSystem) Activating speech engine: W2lEngine(en_US)
```

### Check your Talon user file sets

Check you have some valid commands in `~/.talon/user`. If it's empty, install the [Talon Community](https://github.com/talonhub/community) user file set and test with some [basic commands](/docs/Basic%20Usage/basic_usage.md). Install the entire repository, not just individual files. This user file set can be combined with other Talon user file sets, though it is common that most of the functionality will be provided by [Talon Community](https://github.com/talonhub/community). Additional file sets are commonly used to customize the default behavior provided by [Talon Community](https://github.com/talonhub/community) or add additional features not already included.

Talon automatically tracks changes to files in `~/.talon/user`, so that one can change scripts on the fly. This breaks if `~/.talon` (or any other part of the path) is a symlink.

### Check out Tips for Improving Accuracy

If commands are intermittently working, check out these tips for [improving accuracy](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md).

### Check the Talon Logs

Talon emits debug information to a log file in your Talon home directory, Windows: `%APPDATA%\Talon` Mac: `~/.talon`. Look for a file with the `.log` extension, probably named `talon.log`. The logs will contain useful debug information, like the Talon version or which microphone Talon is using. Syntax errors will also show up in these logs, which make them useful for debugging your Talon user file sets.

```
2021-04-10 17:56:28  INFO Activating Microphone: "d:vice MMA-A"
2021-04-10 15:19:58 DEBUG Talon Version: 0.1.5
```
