---
sidebar_position: 6
---

# Improving Recognition Accuracy

Improving recognition accuracy never hurts. Many people even have to tweak something to get a good experience. Here we show you what you can do.

## Environment

A quiet room will always be better than a noisy one. A good microphone can mitigate this, but sometimes a $0 job will do. Move fans and air filters, rotate your sitting position such that air conditioning is not pointing toward the mic, close a door (and subsitute by taking more breaks for health and ventilation). Move your PC from above desk to below desk, move your PC speakers behind your mic, etc.

## Microphone

Make sure that you have a good microphone and sound card, as speech recognition software requires better hardware than is commonly built in to computers. Have a look at the [hardware page](/docs/Resource%20Hub/Hardware/hardware.md) for recommendations and correct setup.

## Keep a relaxed voice

Ensure that your voice is not tired, which will lead to poorer pronunciation.

- Drink some warm beverages throughout the day: warm water and tea are especially helpful.
- Try to speak in a natural tone as if you are talking with someone else. At first this will feel a little weird, but speaking in an unatural voice will tire you out quicker.
- Try to keep your speaking volume consistent and low, quality microphones can easily pick up any volume you talk at. Speaking with low volume should help keep you from getting tired out. You may need to increase the mic gain for optimal results.

## Pronounciation, and/or (non-native) accents

Controlling your computer by voice can be frustrating if your accent isn't recognized well; non-native speakers are especially prone to issues. While Talon's engine is improving with each version, in the meantime we can adapt our pronunciation.

[https://rachelsenglish.com/](https://rachelsenglish.com/) is an excellent resource. It features detailed videos and discussion of the mechanics behind the various sounds. At the risk of saying the obvious: you shouldn't try to change your accent if you don't want to.

## Some commands are barely ever recognized, or confused for another command

If only a few specific commands give you trouble, change those command words! Commands are almost exclusively mapped in `.talon` files: search for all occurrences of those words, and replace them with a word of your choosing: select one that is easy to pronounce, is not too similar to anything else, and is recognized well for you.

Some important commands are specified in `.py` files, like the alphabet. Changing it works the same way, but you need to be more careful about what you modify. If you are not a programmer, ask in the Talon Slack `#help` channel if you are unsure!

_Example:_ If the `close` in `tab close` does not work for you (but `tab open` etc. do), try out `tab wipe` or `tab quit` instead.

_Example:_ Your `zip` (letter Z) is always understood as `sit` (letter I), change `sit` to `ivy`, or alternatively change `zip` to `zone`.

## Talon cuts me off mid-command or mid-sentence

Talon lets you configure how long it will wait after you stop speaking before trying to interpret your command. As of March 2021, the default is 0.3 seconds; earlier versions had a default of 0.15 seconds. If you find that Talon is frequently cutting you off mid-command, you may want to try one or more of the following:

- Prepare your command in full before voicing it. This will help you speak fluently.

- Speak faster, especially after consonants like "p" that involve stopping airflow. In utterances like "stop it", there is a natural pause between "stop" and "it". Some people have just slightly longer stops than others, but can avoid it when preparing to talk fluently.

- Increase Talon's wait time. This has the disadvantage of making all commands react slower, but it _can_ eliminate the cutoffs. Do this by adding a `settings.talon` file to your user directory with the following content:
  ```talon
  settings():
      # minimum silence time (in seconds) before speech is cut off, default 0.3
      speech.timeout = 0.4
  ```
  Start with the value of 0.4, just slightly higher than the default, and increase only if necessary.

## Talon responds inconsistently or with a delay

Talon only processes your speech after its voice activity detector (VAD) detects silence of the length specified by `speech.timeout` above.

This issue is sometimes caused by background noise or non-speech sounds (e.g. breathing) being picked up by your microphone. To confirm this is happening, ensure Speech Recognition > Save Recordings from the Talon menu is checked, then reproduce the problem. Each utterance is saved to a separate FLAC file in the `recordings` folder inside the Talon home folder (Scripting > Open ~/.talon from the Talon menu). If the recordings seem longer than you expect, listen to them carefully or open them in an audio editor to see what is being recorded other than your voice.

If recordings appear to be the correct length, Talon may be stuck due to a long-running voice command or callback. Look in the [Talon log](/docs/Resource%20Hub/Troubleshooting/basic-issues.md#check-the-talon-logs) (Scripting > View Log from the Talon menu) for lines containing `[watchdog]` and `(stalled)`. If these don't make any sense to you, share your log on the Talon Slack.

## Help improving the Talon recognition engine

This will not help you today, but instead help to improve the talon engine for all of us in the future. You can do this by providing speech (and noise) samples:

- [Talon Speech Collection](https://speech.talonvoice.com/)
- [Talon Noise Collection](https://noise.talonvoice.com/)

## Collected alternatives to the default alphabet

Speakers of non-rhotic dialectics of English (i.e. your 'r's don't sound like an American's) may find it helpful to change the alphabet. The following is a list of alternatives users mentioned on Slack.

| [Talon Community](https://github.com/talonhub/community) | alternative |
| -------------------------------------------------------- | ----------- |
| air                                                      | arch        |
| bat                                                      | batch       |
| bat                                                      | bill        |
| each                                                     | birch       |
| fine                                                     | faint       |
| harp                                                     | ham         |
| look                                                     | little      |
| odd                                                      | oink        |
| odd                                                      | orange      |
| pit                                                      | pink        |
| quench                                                   | queen       |
| sit                                                      | ivy         |
| sit                                                      | ice         |
| jury                                                     | jail        |
| jury                                                     | judge       |
| jury                                                     | jane        |
| made                                                     | met         |
| whale                                                    | wet         |
| whale                                                    | whip        |
| zip                                                      | zone        |
| zip                                                      | zoo         |
