---
sidebar_position: 1
---

# Getting Started

:::note

You can also install and run Talon by following the [official installation instructions](https://talonvoice.com/docs/). This info supplements that page.

:::

## 1: [Download Talon](https://talonvoice.com/)

<details>
  <summary>Notes for Linux Users</summary>
  - Talon, like many tools for automation or accessibility, __does not support Wayland__
     - You will have to select an X11 session from your login manager.
    - This is supported by Gnome and Plasma and many others, but some environments like sway are explicitly Wayland-only.
-  To install the speech engine, you must use Talon's tray icon:
   * If you use stock Gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) to see it
   * If you use i3 or don't have a system tray, install [snixembed](https://git.sr.ht/~steef/snixembed) for a lightweight system tray.

</details>

## 2: Install a speech recognition engine

Talon uses a local speech recognition engine that translates voice audio to text. To install your speech engine, click the Talon tray icon and select `Speech Recognition → Conformer D`. For other engine options, see the [speech engine page](./Speech%20Engines/speech%20engines.md)

## 3: Install a Talon user file set

Talon does not come with voice commands out of the box. To start, we strongly recommend that you use the [Talon Community](https://github.com/talonhub/community) user file set. The whole wiki assumes this repository is used if not otherwise noted.

See the [Talon Community README](https://github.com/talonhub/community?tab=readme-ov-file#installation) for installation instructions.

In addition to [Talon Community](https://github.com/talonhub/community), you may want to consider installing any of the [essential Talon integrations](../Integrations/essential-tools.md)

## 4: Test your Talon Setup

- Try a few [basic commands](../Basic%20Usage/basic_usage.md).
- If needed, try ways to [improve recognition accuracy](improving_recognition_accuracy.md)
- [Customize Talon](../Customization/basic_customization.md): learn about how to configure Talon to your liking.
- For earlier access to new features, priority support, and access to additional [speech engines](./Speech%20Engines/speech%20engines.md), install the [beta version](beta_talon.md).

## Join the Talon Slack

If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the `#help` channel.
