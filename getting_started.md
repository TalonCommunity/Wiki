---
sidebar: true
order: 1
published: true
---

# Getting Started

## Overview

The official installation and getting started instructions are available at [talonvoice.com/docs](https://talonvoice.com/docs/). We strongly recommend you follow the instructions there; this page contains additional advice only. The basic installation flow is as follows:

1. Install Talon.
1. Choose a [speech recognition engine](https://talon.wiki/getting_started/#speech-recognition-engine).
1. Download a [configuration set](https://talon.wiki/getting_started/#configuration), to make some commands available.
1. Optionally, join the [Talon Voice Slack](https://talonvoice.slack.com) for help, tips, and connecting with other Talon users.

## Install Talon

Talon has two mostly compatible current versions: public and beta. Both versions have support for Mac, Linux, and Windows.

### Public Version (free)

Follow [Getting Started](https://talonvoice.com/docs/index.html#getting-started) instructions in the Talon documentation.

### Beta Version (requires Patreon support)

The beta version has earlier access to new features and higher priority support. It is required for access to some speech engines. After becoming a [beta tier Patreon](https://www.patreon.com/join/lunixbochs), join the [Talon Voice Slack](https://talonvoice.slack.com) and request access to the `#beta` channel from `@aegis`, the developer of Talon. Download links and installation instructions can be found in the #beta channel's pinned messages.

## Configuration

Talon does not come with voice commands or eye-tracking out of the box - you must install some configuration scripts. To start out, we strongly recommend that you use the [knausj_talon](https://github.com/knausj85/knausj_talon) repository. The whole wiki assumes this repository is used, if not otherwise noted.

On **Linux/Mac**:
```
mkdir -p ~/.talon/user
cd ~/.talon/user
git clone https://github.com/knausj85/knausj_talon.git knausj_talon
```

On **Windows**:
```
md "%APPDATA%\Talon\user"
cd "%APPDATA%\Talon\user"
git clone https://github.com/knausj85/knausj_talon.git knausj_talon
```

If you don't have `git` available, and do not want to install it, download the [zip archive of knausj_talon](https://github.com/knausj85/knausj_talon/archive/master.zip) and extract it to the correct folder.


## Speech Recognition Engine

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** unless you already have Dragon, wav2letter (w2l) is recommended.

Engine | OS | Description | Installation | Price
--- | --- | --- | --- | ---
w2l gen2 | Win/Mac/Linux | The default. Very fast. Decent command accuracy. Dictation accuracy is lacking. | [Talon Docs](https://talonvoice.com/docs/#wav2letter-setup) | Free
w2l conformer | Win/Mac/Linux | Best paid option. Extremely good accuracy. Very new. | See pinned messages in #beta on Slack | Needs [Talon Beta](/getting_started#beta-version-requires-patreon-support)
Dragon | Win | Good accuracy for both commands and dictation. Has quirks which can't be fixed by us. Professional version is recommended. | [Buy and Install Dragon Professional](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html) | [$300-$500](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html)
Dragon remote | Win/Mac/Linux | Talon supports using Windows Dragon from another machine over the network. | [Buy and Install Dragon Professional](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html), then see pinned messages in #beta on Slack | [$300-$500](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html)

**Note:** The Professional version of Dragon for Windows is recommended (but not strictly required) because it can be run in [Command Mode](https://www.nuance.com/products/help/dragon/dragon-for-mac6/enx/Content/Introduction/RecognitionModes.html). Some users have been able to find less expensive copies of Dragon by either waiting for a sale or looking on eBay for older versions.

### Dictation Engines for Additional Language Support

As of March 2021, w2l only supports English. If you need to dictate text in another language, the Talon beta supports the following options:

| webspeech | Win/Mac/Linux | Excellent accuracy, but added latency. Uses your browser as a voice engine; requires an internet connection. Supports many non-English languages. | See pinned messages in #beta on Slack | Needs [Talon Beta](/getting_started#beta-version-requires-patreon-support)
| vosk | Win/Mac/Linux |  Supported languages: [https://alphacephei.com/vosk/.](https://alphacephei.com/vosk/) | See [Github Project](https://github.com/mqnc/talon_german) | Needs [Talon Beta](/getting_started#beta-version-requires-patreon-support)

Note that you cannot use webspeech or vosk standalone; they don't handle commands well, only dictation, so you need a command-mode speech recognition engine to use with them.

**Note:** The Mac Voice Control engine is technically supported for dictation in beta, but it's not recommended over conformer.


## Basic Usage

The examples below are just a very small selection of common commands for working with apps, tabs, media, mouse, etc that should help you be productive with Talon right away.  These are based on the [knaus_talon](https://github.com/knausj85/knausj_talon) repository (see [Configuration Setup](/getting_started#configuration)). These commands may vary depending on your individual setup.


### Command history

`command history`
: Toggles the command history display, which shows the last few commands as Talon understood them; if you're not sure what Talon is doing, or if it understood you correctly, this is how to check it.


### Show available comands

`knausj_talon` has an integrated help.  It can show you a list of all defined commands, or just all commands that are available now.

`help alphabet`
: show the spelling alphabet for pressing individual keys

`help context`
: show all defined commands

`help active`
: show all currently available commands

`help next`, `help previous`
: go to the next or previous page of help items if there are a lot

`help close`
: hide any open help window again


### Switch between modes

Talon has three basic modes by default: command, dictation, and sleep.

In **command mode**, your speech will be interpreted as commands by default. In **dictation mode**, your speech will be transcribed as plain text by default (although with some commands, like "comma" etc. for punctuation), similar to traditional speech recognition systems. In **sleep mode**, Talon will do nothing until it hears a commands that wakes it up.

There are currently no visual cues about the current mode. You can tell which mode you're in by running commands and seeing if they are transcribed literally.

`dictation mode`
: switch to dictation mode

`command mode`
: switch to command mode

`talon sleep`
: go to sleep, stop processing commands

`talon wake`
: wake up and return to previous mode


### Open and switch between windows in apps such as Chrome

```
window new
window next
window last
window close
```

### Working with applications

```
focus "app name"     (say "focus chrome" for example, to switch active window to chrome)
running list         (see all active applications)
running hide         (close the list of active applications)
```

If you are on Ubuntu or another Gnome-based Linux distribution, `focus` might not work consistently across different workspaces, popping up a notification rather than actually switching focus. [This extension](https://extensions.gnome.org/extension/1005/focus-my-window/) may help.

### Working with tabs

```
tab last
tab next
tab close
tab reopen
(page | scroll) up
(page | scroll) [down]
```

### Working with media

```
mute
play next
play previous
(play | pause)
```

### Working with the Tobii eye tracker

```
control mouse (say "control mouse" to toggle on/off Tobii moving the mouse)
run calibration (say "run calibration" to start Tobii calibration)
```

### Working with text

```
copy that
cut that
paste that
```

### Working with the mouse and scrolling

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


## Next Steps

Once the basics somewhat work for you, you'll likely want to improve your experience using Talon:

* [Improve Recognition Accuracy](/improving_recognition_accuracy): Better accuracy never hurts. Many people have to tweak something.
* [Unofficial Talon Docs](/unofficial_talon_docs): learn about how to configure talon to your liking.
