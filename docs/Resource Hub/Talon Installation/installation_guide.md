---
sidebar_position: 1.1
---

# Installation Guide

:::docoscope Talon Platform

Although much of this page is pertinent to the talon platform itself,
some steps are specific to the talon community user file set, and will be marked as such.

:::

## 1: Check System Requirements

Talon has various [system requirements](/docs/Resource%20Hub/Hardware/hardware.md), covering the computer hardware, operating system and microphone hardware.

## 2: Download & Install Talon

<details>
  <summary>Linux Users</summary>
  - Download [Talon for Linux](https://talonvoice.com)
  - Install by **To be completed**
:::note

- Talon, like many tools for automation or accessibility, **does not support Wayland**
  - You will have to select an X11 session from your login manager.
  - This is supported by Gnome and Plasma and many others, but some environments like sway are explicitly Wayland-only.
- To install the speech engine, you must use Talon's tray icon:
  - If you use stock Gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) to see it
  - If you use i3 or a system tray that doesn't support the `StatusNotifierItem` protocol, install [snixembed](https://git.sr.ht/~steef/snixembed) to add support.

:::

</details>

<details>
  <summary>Mac Users</summary>
  - Download [Talon for Mac](https://talonvoice.com)
  - Install by **To be completed**
</details>

<details>
  <summary>Windows Users</summary>
  - Download [Talon for Windows](https://talonvoice.com)
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
<img src="/img/talon_ui/talon_menu_speech_recognition_conformer.png"
     alt="screenshot of the Windows desktop showing the speech recognition menu"
 />
</details>

:::note
For other engine options, see the [speech engine page](/docs/Resource%20Hub/Speech%20Recognition/speech%20engines.md)
:::

## 4: Download the Talon user file set

:::important
Talon does not come with voice commands out of the box. So at this point in the installation process,
Talon can not do anything useful.

It requires a `user file set` and
for beginners, we strongly recommend that you use the [Talon Community](https://github.com/talonhub/community) user file set.

If you install a different user file set then portions of this wiki will not be relevant.
These will be marked as such.
:::




A `user file set` is simply a bunch of files that need to be downloaded and placed in the correct directory -
the [talon user directory](/docs/Resource%20Hub/terminology.md).

:::docoscope community

:::

This can be done one of two ways - either as a `zip` file or by using `git`.
Considerations in choosing between the two methods, as well as instructions, are described [here](./downloading-community.md).

## 5: Test your Talon Setup

If you have installed talon community, try a few [basic commands](/docs/Basic%20Usage/basic_usage.md).

If you have installed a different user file set, consult its documentation on usage.

## 6: Next steps

- If needed, try ways to [improve recognition accuracy](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md)
- [Customize Talon](/docs/Customization/overview.md): learn about how to configure Talon to your liking.
- In addition to [Talon Community](https://github.com/talonhub/community), you may want to consider installing any of the popular [Talon integrations](/docs/Integrations/integrations.md)
- If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the `#help` channel.
- For earlier access to new features, priority support, and access to additional [speech engines](/docs/Resource%20Hub/Speech%20Recognition/speech%20engines.md), install the [beta version](/docs/Resource%20Hub/beta_talon.md).
