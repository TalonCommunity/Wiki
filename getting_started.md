---
sidebar: true
order: 1
---

# Getting Started

## Beta vs. Public

There are currently two different versions of Talon, the public release and the beta. The public release is free and has been used by many Talon users, but it is not likely to undergo significant development as users are transitioning to the beta version of Talon (the "new API"). The beta version has many new features and a different syntax. It supports more operating systems and has integration with the new wav2letter voice engine that will eventually replace Dragon, since [Dragon was discontinued for Mac](https://www.nuance.com/dragon/support/professional-individual-for-mac-eol.html#). The beta requires donation to the beta tier of the [Talon Patreon](https://www.patreon.com/lunixbochs). The content in this wiki is mostly for the beta version.

**The public release of Talon is only available for Mac.**
**The beta release of Talon is available for Mac, Windows, and Linux.**

## Installation

### Windows
- [Installing Dragon](/InstallingDragonWindows)
- [Setup Talon on Windows 10 with Dragon](/SettingUpTalonWindows10Dragon)

### Beta instructions
1. Sign up for the beta at https://www.patreon.com/join/lunixbochs.  
2. Join the [Talon Voice Slack](https://talonvoice.slack.com) message @aegis for access to the beta channel.
3. In the #beta channel pinned messages, find the download for your OS (mac, linux, windows). After installation you'll have a new directory called .talon (hidden) in your home directory.  
4. Download a [configuration set](https://talon.wiki/getting_started/#configuration-setup).
5. Choose a [speech recognition engine](https://talon.wiki/getting_started/#speech-recognition-engine)

## Configuration Setup

Talon does not come with voice commands or eye tracking out of the box - you must install some configuration scripts into your `~/.talon/user` directory. You can start from scratch and write all your own configuration, but we strongly recommend that you start with an existing configuration set. Here are some recommended configuration sets to start from (pick one):

| Talon Release | GitHub Repository | Description |
|-|-|
| Beta | [knausj85's knaus_talon](https://github.com/knausj85/knausj_talon) | The go-to repository for beta users |
| Beta | [Fidgetingbit's Talon Config](https://github.com/fidgetingbits/knausj_talon) | Fork of Knausj's config with VimSpeak support |
| Beta | [mrob95's Talon Config](https://github.com/mrob95/MR-talon) | Mark Robert's Talon config with support for Windows dev tools (Windows Terminal, Mintty, Windows Workspaces) |
| Public | [lunixbochs's talon_starter_pack](https://github.com/lunixbochs/talon_starter_pack) | The go-to lite version of the talon_community repository containing only the essentials |
| Public | [dwiel's talon_community](https://github.com/dwiel/talon_community) | A larger configuration set with more niche modules |

**Only clone one repository - they should not be mixed.**

## Speech Recognition Engine

Behind Talon, there is a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. Here is a list of speech recognition engines available for use with Talon:

| Name                        | Availability | Operating Systems   | Description                                                          | Link                                                                                          |
|-----------------------------|--------------|---------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Builtin macOS (10.11-10.14) | Normal       | macOS               | (Note that 10.15's speech recognition engine does NOT work.) | n/a                                                                                           |
| Dragon Dictate 6            | Normal/Beta  | Windows/macOS       | Must purchase separately.                                            | [Windows](/SettingUpTalonWindows10Dragon)    |
|(new!) sconv-b5                      | Beta         | Windows/macOS/Linux | Another beta model. Better dictation than the default Talon model, but potentially has some issues. Better at recognizing faster speech and higher accuracy than sconv-b4.                | [link](#new-sconv-b5-model) |
| wav2letter                  | Beta         | macOS/Linux         | Included with beta Talon by default.                                 | n/a                                                                                           |
| web2letter                  | Beta         | Windows/macOS/Linux | Ping `@aegis` in Slack for instructions                                     | n/a                             |
| webspeech                  | Beta         | Windows/macOS/Linux | Uses chrome or firefox for speech recognition.                 | [link](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1591830066339600) |

#### New sconv-b5 model

If you're on wav2letter now and would like to test out the new voice model, here are the instructions for macOS and Linux only. This does NOT work with web2letter:

1. Update to latest Talon (at least v1419)
2. Download tarball: [link to URL in beta channel](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1595566865283400)
3. Extract tarball to `~/.talon/`. It will create `w2l/en_US-sconv-beta5/`
4. Copy `lm-ngram.bin` from your existing `w2l/en_US` directory into `en_US-sconv-beta5`.
5. Copy `lexicon.txt` from your existing `w2l/en_US` directory into `en_US-sconv-beta5`.
6. Edit your existing `user/w2l.py` by commenting out the other model and add a new line):
```
#engine = W2lEngine(language='en_US', debug=True)
engine = W2lEngine(language='en_US-sconv-beta5', debug=True)
```
7. Restart Talon.

## Hardware

### Microphone Recommendations

Check out the `#hardware` channel in Slack
Speech recognition will be vastly improved with a better microphone. In all cases, USB is strongly recommended.

  * Blue Yeti Nano (USB 3) - desktop, affordable and pretty good recognition. Can be attached to an arm for increased recognition. Useful if you're trying out speech recognition for the first time and don't want to spend a lot
  * DPA d:fine 4188 or 4288 (nearly equivalent) with a DPA d:vice interface - expensive but highly recommend for full time use
[DPA d:fine™ Headset mic voice isolation comparison video](https://youtu.be/35GvWlRirxI)
  * Stenomask - useful for open plan offices as it covers your mouth

### Eye Tracker

Check out the `#eye-tracking` channel in Slack
  * Tobii 4C is the most commonly used and recommended eye tracker. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.
  * [Tobii 5](https://gaming.tobii.com/product/eye-tracker-5/) support coming soon.

## Basic Usage

#### What does Talon hear?
If you'd like a notification to show you what Talon is hearing you say, add this [notify.py](https://github.com/TalonCommunity/Wiki/tree/gh-pages/extras/notify.py) in users/yourusername/.talon/user (anywhere in the .talon/user folder is fine) or create your own notify.py file with the contents:  
```    
    #This file will add a notification to tell you what Talon heard you say
    from talon import app, speech_system
    def on_phrase(j):
        app.notify('' ''.join(j['phrase']))
    speech_system.register('phrase', on_phrase)
``` 

### List of common commands to get started with Talon

The examples below are based on [knausj85's knaus_talon](https://github.com/knausj85/knausj_talon) repository (see [Configuration Setup](/getting_started#configuration-setup)). These commands may vary depending on your individual setup.

#### Open and switch between windows in apps such as Chrome (these are controlled in misc/window_management.talon)

```
new window
next window
last window
close window
```

#### Working with applications

```
focus "app name"     (say "focus chrome" for example, to switch active window to chrome)
list running    (say "list running" to see all active applications)
hide running    (say "hide running" to close the list of active applications)
(open | new)
```

#### Working with tabs (these are controlled in misc/tabs.talon)

```
last tab
next tab
close tab
reopen tab
(page | scroll) up
(page | scroll) [down]
```

#### Working with media

```
mute
play next
play previous
(play | pause)
```

#### Working with the Tobii eye tracker

```
control mouse (say "control mouse" to toggle on/off Tobii moving the mouse)
run calibration (say "run calibration" to start Tobii calibration)
```

#### Working with text (misc/standard.talon)

```
copy that
cut that
paste that
```

### Switch between dictation and command mode

```
Say "dictation mode"
Say "command mode"
```

#### Working with the mouse and scrolling

[How to click with the pop sound](/scripting_and_configuration#pop-to-click)

```
dubclick (to double left click)
righty (to right click)
(page | scroll) up
(page | scroll) [down]
wheel down
wheel tiny [down]
wheel downer
wheel up
wheel tiny up
wheel upper
wheel gaze (for scrolling down) (this seems like it would use the Tobii eye tracker but it does not)
wheel stop
wheel left
wheel tiny left
wheel right
wheel tiny right
curse yes (shows cursor)
curse no (hides cursor)
drag
```

## Tips
### Non-US Accents

Dictating and controlling your computer with voice can be frustrating if your accent isn't a US one, and especially so if it is not even Anglophone. This page aims to collate tips and resources for such speakers.

#### If you're looking for resources to sound more like someone from the US ...

* [https://rachelsenglish.com/](https://rachelsenglish.com/) is an excellent resource. Features detailed videos and discussion of the mechanics behind the various sounds. (At the risk of saying the obvious: you shouldn't try to change your accent if you don't want to. This is meant only as a tip for those who want to do so.)

#### Alternatives to the default alphabet

* Speakers of non-rhotic dialectics of English (i.e. your 'r's don't sound like an American's) may find it helpful to change `air` from the alphabet; e.g., someone from the UK on the Slack uses `arch` instead.
* I (ym) have personally found that `met` works well as a replacement for `made`.
* And if you struggle with `whale`, there's also `whip` --- though it may not be the best idea to make that change if you plan to use Talon in public.

### Improve Speech Recognition Accuracy

1. Make sure that you have a good microphone and sound card. Speech recognition software requires better hardware than is commonly built in to computers.
[Selection guides](https://www.speechrecsolutions.com/MicGuide.htm) are available to choose the best microphones at each price point.

    a. Good hardware will not only improve accuracy, but also latency: bad hardware may pick up background noise, which makes it harder for Talon to determine when you are done speaking so it can begin executing commands.

    b. Ensure that the microphone is placed a consistent distance away from your mouth. For headset microphones, most speech recognition documentation recommends that you place the boom of the microphone approximately one inch from your face. For table microphones, somewhere between six and twelve inches works best.

    c. Increase the input volume of your microphone all the way up in your operating system settings.

2. Make sure that you are in the correct mode. `knausj_talon` has two modes: command mode and dictation mode.

    a. Use dictation mode for free-form speech dictation, like writing an email. (Switch by saying "dictation mode".)

    b. Use command mode for everything else, including dictating individual letters or writing code. (Switch by saying "command mode".)

3. Some people have problems with similar words such as "four" and "fourth" being misrecognized.

    a. One easy solution is too simply switch one of the words to be less phonetically similar: grep the `.talon` files for the similar word and change to a less common one.

    b. Enunciation guides are also available on the internet, which may help if you are not correctly enunciating all syllables.

4. Ensure that your voice is not tired, which will lead to poorer pronunciation.

    a. Make sure to drink plenty of liquids throughout the day: warm water and tea are especially helpful.

    b. Try to speak in a natural tone as if you are talking with someone else. At first this will feel a little weird, but speaking in an unatural voice will tire you out quicker.

    c. Try to keep your speaking volume consistent and low, quality microphones can easily pick up any volume you talk at. Speaking with low volume should help keep you from getting tired out.
