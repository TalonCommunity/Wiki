# Getting Started

## Install Talon

You can install and run Talon by following the [official installation instructions](https://talonvoice.com/docs/). The rest of this page provides some additional information to supplement the information provided there.

1. Run the Talon app.

**Notes on Linux installation**:
If you use Gnome, you need to install [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) in order to be able to see Talon's tray icon - which is the only way of configuring it without speech/code.

Talon, like many tools for automation or accessibility, does not support Wayland. You will have to select an X11 session from your login manager. This is supported by Gnome and Plasma and many others, but some environments like sway are explicitly Wayland-only.

## Configure a Speech Recognition Engine

Talon uses a speech recognition engine that translates voice audio to text. To install your speech engine, open the Talon menu and select `Speech Recognition -> Conformer`.

**Note:** The Conformer speech engine is recommended, but it is possible to use Talon with other speech engines, for example, if you already use Dragon or need an engine with support additional languages other than English. For information about additional speech engines, see the [speech engine page](speech_engines.md).

## Install a Talon user file set

Talon does not come with voice commands out of the box - you must install some additional files. To start out, we strongly recommend that you use the [Talon Community](https://github.com/talonhub/community) user file set. The whole wiki assumes this repository is used if not otherwise noted.

See the [Talon Community README](https://github.com/talonhub/community?tab=readme-ov-file#installation) for installation instructions.

In addition to [Talon Community](https://github.com/talonhub/community), you may want to consider installing:

- [Cursorless](https://www.cursorless.org/) for programming and text editing
- [Rango](https://github.com/david-tejada/rango) for browser navigation
- [gaze-ocr](https://github.com/wolfmanstout/talon-gaze-ocr) for advanced cursor control using eye tracking and text recognition (OCR)
- [AXKit](https://github.com/phillco/talon-axkit) (macOS only) to enhance Talon with native OS accessibility integrations
- [Other user file sets](../Integrations/talon_user_file_sets)

## Test your Talon Setup

Test your Talon setup with a few [basic commands](basic_usage.md).

## Join the Talon Slack

If at any point you need help with your Talon setup, join the [Talon Voice Slack](https://talonvoice.com/chat) and ask in the #help channel.

## Next Steps

Once the basics somewhat work for you, you'll likely want to improve your experience using Talon:

- For users who want earlier access to new features, priority support, and access to additional [speech engines](speech_engines.md), install the [beta version](beta_talon.md).
- [Improve Recognition Accuracy](improving_recognition_accuracy): Better accuracy never hurts. Many people have to tweak something.
- [Unofficial Talon Docs](../Talon-Scripting/unofficial_talon_docs): learn about how to configure Talon to your liking.
- [Talon-Related Resources](../Integrations/talon_related_resources): a varied list of resources for Talon uses.
- [Software that Pairs Well with Talon](../Integrations/other_integrations): Many users augment their Talon setup with other software (e.g., Vimium, aka vim for the browser)
