---
sidebar_position: 1
---

# Talon API Overview

This page provides community documentation of the central concepts used for the customization of Talon behaviour. If you want to implement more complicated functionality in Talon or work out how some existing scripts work, then this is the right page. You may prefer the [basic usage](../Basic%20Usage/basic_usage.md) or [basic customization](basic_customization.md) pages if you are a beginner.

The page assumes you have successfully [configured Talon](../Quickstart/getting_started) to respond to voice commands.

## Overview of Talon framework

Talon is an accessibility platform that provides a scripting layer to connect a range of input hardware/methods to a cross-platform API for interacting with desktop applications. Let's start by talking about where your configuration/scripting files are stored.

When setting up Talon to respond to voice commands, you should have installed a set of files in your Talon `user` directory (e.g. `~/.talon/user/` in Linux/MacOS). For example, the [Talon Community](https://github.com/talonhub/community) user file set is the most common starting point. All of your Talon configuration/scripts go in this `user` directory and are formatted as either Talon (`.talon`) or Python (`.py`) files.

Talon doesn't care what names you give your `.py` or `.talon` files, or what folders you put them into; it will automatically try to load everything inside your `user` folder when it starts up. Any folders or file names you see in Talon user file sets (e.g. [Talon Community](https://github.com/talonhub/community)) were chosen by the authors of that package. Talon also monitors files in the `user` directory, and will automatically reload them if they're changed (printing a [log message](unofficial_talon_docs#repl-and-logging)). This reloading is convenient when working on scripts/configuration as you generally don't have to restart Talon for it to pick up changes.

So why do we have two kinds of configuration/scripting files (`.py` and `.talon`)? Originally all Talon configuration/scripting was done using Python, but over time it was decided that the addition of a framework specific file type would be beneficial. To a first approximation `.talon` files provide a succinct way of mapping spoken commands to behaviour. `.py` files on the other hand provide the implementation of behaviour and other functionality used by .talon files.

# Talon Concepts

In order to script Talon it is useful to understand the abstractions it uses. Let's start by giving you a brief overview of how they fit together.

The [Context](unofficial_talon_docs#contexts) is a central feature of the Talon framework. A context is the circumstances under which a set of behaviour applies. For example we might only activate some voice commands when the title of the currently focussed window matches a given pattern. The concepts of [Tags](unofficial_talon_docs#tags) and [Apps](unofficial_talon_docs#apps), and less commonly [Modes](unofficial_talon_docs#modes) and [Scopes](unofficial_talon_docs#scopes) are all ways of providing information to match against in a Context.

The next key component is the implementation of behaviour via [Actions](unofficial_talon_docs#actions). Two examples are moving the mouse cursor and pasting the contents of the clipboard. Talon comes with some built in actions, but most are defined and implemented in user scripts.

One of the primary modes of input to Talon is through voice commands defined in `.talon` files. To implement commands containing dynamic 'variables' (e.g. 'allcaps some arbitrary words') you can utilize [Lists](unofficial_talon_docs#lists) and [Captures](unofficial_talon_docs#captures).

In addition to the above we also have the concept of [Settings](unofficial_talon_docs#settings). Built-in and custom settings are used by actions to configure their behaviour (e.g. to change the delay between key presses in the `insert()` action).

The final concept is the Module. This is used to register particular instances of the above concepts with Talon, and to give them unique names.
