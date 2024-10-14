---
sidebar_position: 1
---

# Getting Started

## 1: Check System Requirements

Talon has various [system requirements](Hardware/hardware.md), covering the computer hardware, operating system and microphone hardware.

## 2: Download & Install Talon

<details>
  <summary>Linux Users</summary>
  - Download [Talon for Linux](https://talonvoice.com/dl/latest/talon-linux.tar.xz)
  - Install by **To be completed**
:::note

- Talon, like many tools for automation or accessibility, __does not support Wayland__
     - You will have to select an X11 session from your login manager.
    - This is supported by Gnome and Plasma and many others, but some environments like sway are explicitly Wayland-only.
-  To install the speech engine, you must use Talon's tray icon:
   * If you use stock Gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) to see it
   * If you use i3 or a system tray that doesn't support the `StatusNotifierItem` protocol, install [snixembed](https://git.sr.ht/~steef/snixembed) to add support.

:::

</details>

<details>
  <summary>Mac Users</summary>
  - Download [Talon for Mac](https://talonvoice.com/dl/latest/talon-mac.dmg)
  - Install by **To be completed**
</details>

<details>
  <summary>Windows Users</summary>
  - Download [Talon for Windows](https://talonvoice.com/dl/latest/talon-windows.exe)
  - Install Talon by running `talon-windows.exe`
:::note
It is recommended that Talon is installed as described above.
However, please note that the application is also available as a [portable zip file](https://talonvoice.com/dl/latest/talon-windows.zip)
:::
</details>

## 3: Install a speech recognition engine

Talon uses a local speech recognition engine that translates voice audio to text.

One recognition engine that comes with Talon is known as `Conformer D`. To install it:

- Run the Talon app
- Click the Talon tray icon and select `Speech Recognition → Conformer D`.

<details>
  <summary>Screenshot</summary>
<img src="/img/talon_menu_speech_recognition.png"
     alt="screenshot of the Windows desktop showing the speech recognition menu"
 />
</details>

:::note
For other engine options, see the [speech engine page](./Speech%20Engines/speech%20engines.md)
:::

## 4: Download the Talon user file set

:::important
Talon does not come with voice commands out of the box. So at this point in the installation process,
Talon can not do anything useful.

It requires a `user file set` and
for beginners, we strongly recommend that you use the [Talon Community](https://github.com/talonhub/community) user file set.

The whole wiki assumes this repository is used if not otherwise noted.
:::

A `user file set` is simply a bunch of files that need to be downloaded and placed in the correct directory - 
the [talon user directory](/docs/Help/terminology.md).

This can be done one of two ways -  either as a `zip` file or by using `git`

<details>
  <summary>`zip` versus `git`</summary>
<p>The background to this choice is that if you use Talon for any period of time,
you can expect the following:</p>
<ul>
  <li>The community will update the `user file set` with bug fixes and new features, and you will want
to update your local copy of it.</li>
  <li>You might make your own changes to some of these files.</li>
</ul> 
<p>The benefit of `git`, is that it makes it easy to obtain the latest files without losing any changes you've made in the meantime. </p>
<p>If downloading `zip` files, you will manually need to keep track of any changes you may make to your copy of the files.</p>
<p>If you are not particularly comfortable using a command terminal, and if you are just wanting to explore the suitability of Talon
you may wish to use the simpler method of downloading `zip` files. You will always be able to switch to using `git` down the track.</p>
</details>

<details>
  <summary>Using the `zip` method</summary>
<p>If you wish to install `community` by downloading and extracting a zip file, proceed as follows:</p>
 <ol>
  <li>Download the [zip archive of community](https://github.com/talonhub/community/archive/refs/heads/main.zip)</li>
  <li>Extract the files. If you don’t know how to extract zip files, a quick google search for "extract zip files" may be helpful.</li>
  <li>Place these extracted files inside the `user` folder of the Talon Home directory. You can find this folder by right-clicking the Talon icon in the taskbar (Windows) or clicking the Talon icon in the menu bar (Mac), clicking Scripting > Open ~/talon, and navigating to `user`.</li>
</ol> 
</details>

<details>
  <summary>Using the `git` method</summary>
<p>If you wish to install `community` by using git, proceed as follows:</p>
#### Linux & Mac

1. Install [`git`](https://git-scm.com/)
1. Open a terminal ([Mac](https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) / [Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners#3-opening-a-terminal))
1. Paste the following into the terminal window then press Enter/Return:

```bash
cd ~/.talon/user
git clone https://github.com/talonhub/community community
```

#### Windows

1. Install [`git`](https://git-scm.com/)
2. Open a [command prompt](https://www.wikihow.com/Open-the-Command-Prompt-in-Windows)
3. Paste the following into the command prompt window then press Enter:

```
cd %AppData%\Talon\user
git clone https://github.com/talonhub/community community
```
</details>



## 5: Test your Talon Setup

- Try a few [basic commands](../Basic%20Usage/basic_usage.md).

## 6: Next steps

- If needed, try ways to [improve recognition accuracy](improving_recognition_accuracy.md)
- [Customize Talon](../Customization/overview.md): learn about how to configure Talon to your liking.
- In addition to [Talon Community](https://github.com/talonhub/community), you may want to consider installing any of the [essential Talon integrations](../Integrations/essential-tools.md)
- If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the `#help` channel.
- For earlier access to new features, priority support, and access to additional [speech engines](./Speech%20Engines/speech%20engines.md), install the [beta version](beta_talon.md).
