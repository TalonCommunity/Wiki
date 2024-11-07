---
sidebar_position: 1
---

# Talon Framework Overview

Talon is an accessibility platform that provides a scripting layer to connect a range of input hardware/methods to a cross-platform API for interacting with desktop applications. Let's start by talking about where your configuration/scripting files are stored.

When setting up Talon to respond to voice commands, you should have installed a set of files in your Talon `user` directory (e.g. `~/.talon/user/` in Linux/MacOS). For example, the [Talon Community](https://github.com/talonhub/community) user file set is the most common starting point. All of your Talon configuration/scripts go in this `user` directory and are formatted as either Talon (`.talon`) or Python (`.py`) files.

Talon doesn't care what names you give your `.py` or `.talon` files, or what folders you put them into; it will automatically try to load everything inside your `user` folder when it starts up. Any folders or file names you see in Talon user file sets (e.g. [Talon Community](https://github.com/talonhub/community)) were chosen by the authors of that package. Talon also monitors files in the `user` directory, and will automatically reload them if they're changed by printing a log message. This reloading is convenient when working on scripts/configuration as you generally don't have to restart Talon for it to pick up changes.

So why do we have two kinds of configuration/scripting files (`.py` and `.talon`)? Originally all Talon configuration/scripting was done using Python, but over time it was decided that the addition of a framework specific file type would be beneficial. To a first approximation `.talon` files provide a succinct way of mapping spoken commands to behaviour. `.py` files on the other hand provide the implementation of behaviour and other functionality used by .talon files.

# Talon Concepts

In order to script Talon it is useful to understand the abstractions it uses. Let's start by giving you a brief overview of how they fit together.

The first concept is the [Module](./modules_and_contexts.md). This is used to group behavior like settings, actions, or tags.

The [Context](modules_and_contexts.md) is a central feature of the Talon framework. A context is the circumstances under which a set of behaviour applies. For example we might only activate some voice commands when the title of the currently focussed window matches a given pattern. The concepts of [Tags](tags.md) and [Apps](apps.md), and less commonly [Modes](modes.md) and [Scopes](scopes.md) are all ways of providing information to match against in a Context.

The next key component is the implementation of behaviour via [Actions](actions.md). Two examples are moving the mouse cursor and pasting the contents of the clipboard. Talon comes with some built in actions, but most are defined and implemented in user scripts.

One of the primary modes of input to Talon is through voice commands defined in `.talon` files. To implement commands containing dynamic 'variables' (e.g. 'allcaps some arbitrary words') you can utilize [Lists and captures](lists.md)

In addition to the above we also have the concept of [Settings](/docs/Customization/settings.md). Built-in and custom settings are used by actions to configure their behaviour (e.g. to change the delay between key presses in the `insert()` action).
