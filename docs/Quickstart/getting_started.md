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

## 4: Install a Talon user file set

:::important
Talon does not come with voice commands out of the box. So at this point in the installation process,
Talon can not do anything useful.

It requires a `user file set` and
for beginners, we strongly recommend that you use the [Talon Community](https://github.com/talonhub/community) user file set. 

The whole wiki assumes this repository is used if not otherwise noted.
:::


See the [Talon Community README](https://github.com/talonhub/community?tab=readme-ov-file#installation) for installation instructions.



## 5: Test your Talon Setup

- Try a few [basic commands](../Basic%20Usage/basic_usage.md).

## 6: Next steps

- If needed, try ways to [improve recognition accuracy](improving_recognition_accuracy.md)
- [Customize Talon](../Customization/basic_customization.md): learn about how to configure Talon to your liking.
- In addition to [Talon Community](https://github.com/talonhub/community), you may want to consider installing any of the [essential Talon integrations](../Integrations/essential-tools.md)
- If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the `#help` channel.
- For earlier access to new features, priority support, and access to additional [speech engines](./Speech%20Engines/speech%20engines.md), install the [beta version](beta_talon.md).


