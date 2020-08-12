---
sidebar: true
order: 1
published: true
---

# Getting Started

Our first goal is that you have a working Talon installation and configuration, such that when you say out loud "phrase hello world", Talon will literally type "hello world" into the currently open window.  To get to that using the beta version of Talon, you need to follow a few steps:

1. Sign up for the beta at https://www.patreon.com/join/lunixbochs.
2. Join the [Talon Voice Slack](https://talonvoice.slack.com), and message `@aegis` for access to the #beta channel.
3. In the #beta channel's pinned messages, find the download for your OS (mac, linux, windows), and download and install it on your computer.
4. Download a [configuration set](https://talon.wiki/getting_started/#configuration), to make some commands available.
5. Choose a [speech recognition engine](https://talon.wiki/getting_started/#speech-recognition-engine).

We describe below: Why the beta, and what exactly is going on at each step?


## Beta vs. Public

There are currently two different versions of Talon, the public release and the beta. The public release is free and has been used by many Talon users, but it is not likely to undergo significant development as users are transitioning to the beta version of Talon (the "new API"). The beta version has many new features and a new configuration syntax. It supports more operating systems and has integration with the new wav2letter voice engine, an alternative to Dragon, created because [Dragon was discontinued for Mac](https://www.nuance.com/dragon/support/professional-individual-for-mac-eol.html#). The beta requires donation to the beta tier of the [Talon Patreon](https://www.patreon.com/lunixbochs).

**The public release of Talon is only available for Mac.**
**The beta release of Talon is available for Mac, Windows, and Linux.**

The content in this wiki is for the beta version.


## Getting Access

After [joining the beta tier](https://www.patreon.com/join/lunixbochs) and [Talon Voice Slack](https://talonvoice.slack.com), write a message to `@aegis` requesting access to the `#beta` channel.  He is the developer of Talon, and will grant you access as soon as he's back at work on Talon.  The #beta channel is the place where all new versions of Talon are announced and linked for download.  It is also the channel where you can ask for help if you get stuck with the beta version.


## Installation

In the #beta channel's pinned messages, find the latest download for your OS (mac, linux, windows).

- For **Windows**, follow the instruction on [Installing Dragon](/InstallingDragonWindows) and [Setup Talon on Windows 10 with Dragon](/SettingUpTalonWindows10Dragon).

- On **Mac**, open the `.dmg` and drag&drop it to your Applications.

- For **Linux**, extract the `.tar.xz` file to a directory of your choosing, for instance `~/bin/`.  This will make Talon available for starting via `~/bin/talon/run.sh`.

We are not done yet!


## Configuration

Talon does not come with voice commands or eye-tracking out of the box - you must install some configuration scripts into your `~/.talon/user` directory (that is `C:\Users\<username>\AppData\Roaming\talon\user` on Windows). To start out, we strongly recommend that you use [knausj85's knausj_talon](https://github.com/knausj85/knausj_talon). The whole wiki assumes this repository is used, if not otherwise noted.

```
mkdir -p ~/.talon/user
cd ~/.talon/user
git clone https://github.com/knausj85/knausj_talon.git knausj_talon
```

One final step before we can test out Talon.


## Speech Recognition Engine

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** If you are on Windows or already use Dragon, you be likely want to start out with Dragon. Otherwise, Talon's own engine _wav2letter_ is strongly recommended.

**Dragon set-up**: If you have Dragon installed, ensure that it is running, and is actively listening to your microphone.  Talon will automatically recognize Dragon and use it.

**Wav2Letter set-up**: (Linux and MacOS only) Follow the [description in Slack](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1589476668035000?thread_ts=1589476639.034500&cid=G9YTMSZ2T): download and extract a file, then everything is ready to go.


## Testing out the basics

Now start/restart Talon. Talon's icon (TODO: show how it looks like) should show up in the tray area.  (If not, recheck the installation, and if all seems in order, ask for help on #beta). Then say "help alphabet" and "help close". That should open and close a window showing you Talon's spelling alphabet. Or open any text editor of your liking, and say "phrase hello world". Talon should type `hello world` into the text editor.  You can also try saying

- "enter" (which presses Enter)
- "air bat cap" (which types `abc`)

If the voice commands do nothing, the culprit could be the microphone setting.  A right click on Talon's icon will open a menu; check in "Microphone" that the correct mic is selected.  Make sure the microphone is not muted, and that the gain (or volume slider) of the mic is not too low.

Should that not help, check out [Troubleshooting](/troubleshooting), and ask for help in #beta.

TODO: per-OS guide plus dragon specifics on how to check for correct microphone.


## Basic Usage

The examples below are just a very small selection of common commands for working with apps, tabs, media, mouse, etc that should help you be productive with Talon right away.  These are based on [knausj85's knaus_talon](https://github.com/knausj85/knausj_talon) repository (see [Configuration Setup](/getting_started#configuration)). These commands may vary depending on your individual setup. 


### Command History

* `command history show`: show the last few commands as Talon understood them; if you are not sure what Talon is doing, if it understood you correctly, this is how to check it.
* `command history hide`: close the command history window again


### Show available comands

`knausj_talon` has an integrated help.  It can show you a list of all defined commands, or just all commands that are available now.

* `help alphabet`: show the spelling alphabet for pressing individual keys
* `help context`: show all defined commands
* `help active`: show all currently available commands
* `help next`, `help previous`: go to the next or previous page of help items if there are a lot
* `help close`: hide any open help window again


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

### Switch between dictation and command mode

```
dictation mode
command mode
```

In command mode, your speech will be interpreted as commands by default; in dictation mode, your speech will be transcribed as plain text by default (although with some commands, like "comma" etc for punctuation), similar to traditional speech recognition systems.

There are currently no visual cues about the current mode. You can tell which mode you're in by running commands and seeing if they are transcribed literally.

### Working with the mouse and scrolling

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


## Next Steps

Once the basics somewhat work for you, you'll likely want to improve your experience using Talon:

* [Improve Recognition Accuracy](/improving_recognition_accuracy): Better accuracy never hurts. Many people have to tweak something.
* Check the [advanced talon collection](/advanced_talon) for alternative speech recognition engines, configurations, and other stuff.
* [Unofficial Talon Docs](/unofficial_talon_docs): learn about how to configure talon to your liking.
