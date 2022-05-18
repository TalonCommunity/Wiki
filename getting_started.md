# Getting Started

The setup flow:

1. Install Talon.
1. Choose a [speech recognition engine](#configure-a-speech-recognition-engine).
1. Install a [Talon user file set](#install-a-talon-user-file-set), to make some commands available.
1. Try some [basic commands](#basic-usage)
1. If at any point you need help, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the #help channel.

**Note:** There are installation and getting started instructions available at [talonvoice.com/docs](https://talonvoice.com/docs/) which are maintained by the primary (and only) Talon engineer. This wiki is community maintained and aims to provide richer detail for a wider set of users, but may not always be as freshly updated with changes.

## Install Talon
1. Download and install [Talon](https://talonvoice.com) for your operating system.
1. Run the Talon app.
1. Open the Talon Home directory. This is `%APPDATA%\Talon` on Windows, and `~/.talon` on macOS/Linux. **Note:** For those who are not friendly with the command line, Talon has a menu in the system tray near the clock. You can use `Scripting -> Open ~/.talon` in this menu as a shortcut to open the Talon Home folder.

### Beta Version
For priority features, install the beta version. The beta version has support for Mac, Linux, and Windows.

* **Beta Version (requires Patreon support):** The beta version has earlier access to new features and higher priority support. It is required for access to some speech engines. After becoming a [beta tier Patreon](https://www.patreon.com/join/lunixbochs), join the [Talon Voice Slack](https://talonvoice.com/chat) and request access to the `#beta` channel from `@aegis`, the developer of Talon. Download links can be found in the #beta channel's pinned messages.

### Notes on Linux Installation
#### Gnome
If you use gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) in order to be able to see Talon's tray icon - which is the only way of configuring it without speech/code.

#### Wayland
You might encounter the following error:
```
ERROR cannot get _NET_CURRENT_DESKTOP
```
In which case it is necessary to switch to Xorg. (Your distro might support this through a cog wheel on the login screen.)

## Configure a Speech Recognition Engine

Talon uses a speech recognition engine that translates voice audio to text. There are multiple options for speech engines, and you will need to choose one. **Starting out:** unless you already have Dragon, wav2letter (w2l conformer) is recommended.

Engine | OS | Description | Installation | Price
--- | --- | --- | --- | ---
w2l conformer | Win/Mac/Linux | Best option for new users. Excellent accuracy and speed for both commands and dictation. Even lower latency for Talon beta users due to ongoing performance optimisations. | [Talon Docs](https://talonvoice.com/docs/#getting-started) | Free
w2l gen2 | Win/Mac/Linux | Speech engine used prior to conformer. Decent command accuracy. Dictation accuracy is lacking. | [Talon Docs](https://talonvoice.com/docs/#wav2letter-setup) | Free
Dragon | Win | Good accuracy for both commands and dictation. Has quirks which can't be fixed by us. Professional version is recommended over home version (home version doesn't have command mode). | [Buy and Install Dragon Professional](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html) | [$300-$500](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html)

**Note:** The Professional version of Dragon for Windows is recommended (but not strictly required) because it can be run in [Command Mode](https://www.nuance.com/products/help/dragon/dragon-for-mac6/enx/Content/Introduction/RecognitionModes.html). Some users have been able to find less expensive copies of Dragon by either waiting for a sale or looking on eBay for older versions.

### Dictation Engines for Additional Language Support

As of March 2021, w2l only supports English. If you need to dictate text in another language, the Talon beta supports the following options:

| webspeech | Win/Mac/Linux | Excellent accuracy, but added latency. Uses your browser as a voice engine; requires an internet connection. Supports many non-English languages. | See pinned messages in #beta on Slack | Needs [Talon Beta](/getting_started#beta-version-requires-patreon-support)
| vosk | Win/Mac/Linux |  Supported languages: [https://alphacephei.com/vosk/.](https://alphacephei.com/vosk/) | See [Github Project](https://github.com/mqnc/talon_german) | Needs [Talon Beta](/getting_started#beta-version-requires-patreon-support)

Note that you cannot use webspeech or vosk standalone; they don't handle commands well, only dictation, so you need a command-mode speech recognition engine to use with them.

**Note:** The Mac Voice Control engine is technically supported for dictation in beta, but it's not recommended over conformer.


## Install a Talon user file set

Talon does not come with voice commands out of the box - you must install some additional files. To start out, we strongly recommend that you use the [knausj_talon](https://github.com/knausj85/knausj_talon) Talon user file set. The whole wiki assumes this repository is used, if not otherwise noted.

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

## Test your Talon Setup
Test your Talon setup with a few [basic commands](/basic_usage.md).

## Next Steps

Once the basics somewhat work for you, you'll likely want to improve your experience using Talon:
* [Improve Recognition Accuracy](/improving_recognition_accuracy): Better accuracy never hurts. Many people have to tweak something.
* [Unofficial Talon Docs](/unofficial_talon_docs): learn about how to configure Talon to your liking.
* [Talon-Related Resources](/talon_related_resources): a varied list of resources for Talon uses.
* [Software that Pairs Well with Talon](/other_integrations): Many users augment their Talon setup with other software (e.g., Vimium, aka vim for the browser)
