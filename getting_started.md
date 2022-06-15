# Getting Started

## Install Talon
1. Download and install [Talon](https://talonvoice.com) for your operating system. **Note:** For users who want earlier access to new features, priority support, and access to additional [speech engines](/speech_engines.md), install the [beta version](/beta_talon.md).
1. Run the Talon app.

**Note:** There are installation and getting started instructions available at [talonvoice.com/docs](https://talonvoice.com/docs/) which are maintained by the developer of Talon. This wiki is community maintained and aims to provide richer detail for a wider set of users, but may not always be as freshly updated with changes.

**Notes on Linux installation**:
If you use Gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) in order to be able to see Talon's tray icon - which is the only way of configuring it without speech/code.

If you use Wayland, you might encounter the following error:
```
ERROR cannot get _NET_CURRENT_DESKTOP
```
In which case it is necessary to switch to Xorg. (Your distribution might support this through a cog wheel on the login screen.)

## Configure a Speech Recognition Engine

Talon uses a speech recognition engine that translates voice audio to text. To install your speech engine, open the Talon menu and select `Speech Recognition -> Conformer`.

**Note:** The Conformer speech engine is recommended, but it is possible to use Talon with other speech engines, for example, if you already use Dragon or need an engine with support additional languages other than English. For information about additional speech engines, see the [speech engine page](/speech_engines.md).

## Install a Talon user file set

Talon does not come with voice commands out of the box - you must install some additional files. To start out, we strongly recommend that you use the [knausj_talon](https://github.com/knausj85/knausj_talon) Talon user file set. The whole wiki assumes this repository is used, if not otherwise noted.

Install the [Talon user file set](https://github.com/knausj85/knausj_talon) in the `user` folder of the Talon Home directory, which can be opened using the Talon menu in the system tray (near the clock) using the shortcut `Scripting -> Open ~/.talon`. The Talon Home directory is located on the filesystem at `%APPDATA%\Talon` on Windows, and `~/.talon` on macOS/Linux.

### Install using a ZIP File
 Download the [zip archive of knausj_talon](https://github.com/knausj85/knausj_talon/archive/master.zip) and extract the files. (If you don’t know how to extract zip files, a quick google search for "extract zip files" may be helpful). Place these extracted files inside the `user` folder of the Talon Home directory.

### Install using the Command Line
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

## Test your Talon Setup
Test your Talon setup with a few [basic commands](/basic_usage.md).

## Join the Talon Slack
If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the #help channel.

## Next Steps
Once the basics somewhat work for you, you'll likely want to improve your experience using Talon:
* [Improve Recognition Accuracy](/improving_recognition_accuracy): Better accuracy never hurts. Many people have to tweak something.
* [Unofficial Talon Docs](/unofficial_talon_docs): learn about how to configure Talon to your liking.
* [Talon-Related Resources](/talon_related_resources): a varied list of resources for Talon uses.
* [Software that Pairs Well with Talon](/other_integrations): Many users augment their Talon setup with other software (e.g., Vimium, aka vim for the browser)
