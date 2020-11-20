---
sidebar: true
order: 10
---

# Improving Recognition Accuracy

Improving recognition accuracy never hurts.  Many people even have to tweak something to get a good experience.  Here we show you what you can do.


## Environment

A quiet room will always be better than a noisy one.  A good microphone can mitigate this, but sometimes a $0 job will do.  Move fans and air filters, rotate your sitting position such that air conditioning is not pointing toward the mic, close a door (and subsitute by taking more breaks for health and ventilation).  Move your PC from above desk to below desk, move your PC speakers behind your mic, etc.


## Microphone

Make sure that you have a good microphone and sound card, as speech recognition software requires better hardware than is commonly built in to computers. Have a look at the [hardware page](/hardware) for recommendations and correct setup.


## Keep a relaxed voice

Ensure that your voice is not tired, which will lead to poorer pronunciation.

- Drink some warm beverages throughout the day: warm water and tea are especially helpful.
- Try to speak in a natural tone as if you are talking with someone else.  At first this will feel a little weird, but speaking in an unatural voice will tire you out quicker.
- Try to keep your speaking volume consistent and low, quality microphones can easily pick up any volume you talk at.  Speaking with low volume should help keep you from getting tired out.  You may need to increase the mic gain for optimal results.


## Pronounciation, and/or (non-native) accents

Controlling your computer by voice can be frustrating if your accent isn't recognized well; non-native speakers are especially prone to issues.  While Talon's engine is improving with each version, in the meantime we can adapt our pronunciation.

[https://rachelsenglish.com/](https://rachelsenglish.com/) is an excellent resource. It features detailed videos and discussion of the mechanics behind the various sounds. At the risk of saying the obvious: you shouldn't try to change your accent if you don't want to.


## Some commands are barely ever recognized, or confused for another command

If only a few specific commands give you trouble, change those command words!  Commands are almost exclusively mapped in `.talon` files: search for all occurrences of those words, and replace them with a word of your choosing: select one that is easy to pronounce, is not too similar to anything else, and is recognized well for you.

Some important commands are specified in `.py` files, like the alphabet.  Changing it works the same way, but you need to be more careful about what you modify.  If you are not a programmer, ask in the Talon Slack `#help` channel if you are unsure!

_Example:_  If the `close` in `tab close` does not work for you (but `tab open` etc. do), try out `tab wipe` or `tab quit` instead.

_Example:_ Your `zip` (letter Z) is always understood as `sit` (lette I), change `sit` to `ivy`, or alternatively change `zip` to `zone`.


## Talon cuts me off mid-command or mid-sentence

Talon only waits a short amount of time before trying to interpret your command.  If you pause even a wee bit longer, Talon will split your utterance into separate phrases.

* Prepare your command in full before voicing it.  This will help you speak fluently.
* Speak faster, especially after stops.  In utterances like "stop it", there is a natural pause between "stop" and "it".  Some people have just slightly longer stops than others, but can avoid it when preparing to talk fluently.
* Increase Talon's wait time.  This comes with the distinct disadvantage of making all commands react slightly slower, but it _can_ eliminate the cutoffs.  Do this by adding a `settings.talon` file to your user directory with the following content:
  ```
  settings():
      # (unstable) minimum silence time (in seconds) before speech is cut off, default 0.150
      speech.timeout = 0.200
  ```
  Start with the value of 0.2, just slightly higher than the default, and increase only if necessary.  Beware that this setting uses a private API, and might be modified or removed in future versions.  Report your issue in `#help` so that we are aware that some people are still having issues with being cut off mid-command/mid-sentence.


## Many commands work badly

If all the above isn't enough, a few more heavyweight changes are still available:

* Remove all unused commands: Talon does a great job making use of the limited vocabulary to improve recognition.
* Remove unused aliases for commands: Some commands and keys have several names.  Remove those you don't use.
* Liberally use prefixes: To speed up typing with Talon, keys and formatters etc. are always directly available, without any command word. By using prefixed command words (like `spell <user.key>+` instead of just `<user.key>`) you again reduce the number of words to recognize, giving Talon more chance to guide recognition.

Finally:


## Help improving the Talon recognition engine

This will not help you today, but instead help to improve the talon engine for all of us in the future.  You can do this by providing speech (and noise) samples:

* [Talon Speech Collection](https://speech.talonvoice.com/)
* [Talon Noise Collection](https://noise.talonvoice.com/)


## Collected alternatives to the default alphabet

TODO: review and extend

* Speakers of non-rhotic dialectics of English (i.e. your 'r's don't sound like an American's) may find it helpful to change `air` from the alphabet; e.g., someone from the UK on the Slack uses `arch` instead.
* I (ym) have personally found that `met` works well as a replacement for `made`.
* And if you struggle with `whale`, there's also `whip`.
