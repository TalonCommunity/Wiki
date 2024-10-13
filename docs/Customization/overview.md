---
sidebar_position: 1
---

# Overview

Once you have successfully [set up Talon](../Quickstart/getting_started.md) you may find that you would like to change some of how it behaves at a basic level.

## Customization overview

Talon supports three methods for customizing it's functionality.


| Method | User Skill              | Description | 
| ---------------- | ---------------------- | - | 
| [TalonScript](./TalonScript/talon-script.md)      | All Users | Create new [Voice Commands](./TalonScript/voice-commands.md), change [settings](./settings.md) and more | 
| [Python](./python.md)          | Programmers | Create new [Talon Actions](/docs/Help/terminology.md#talon-actions) for use within [Voice Commands](/docs/Help/terminology.md#voice-commands) | 



All customization consists of files with `.talon` or `.py` file extensions placed in the [Talon user directory](/docs/Help/terminology.md#talon-user-directory). 

Talon doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.

:::note Additional Capabilities

Aside from these, additional extra capabilities may be added from time to time. For example in the [beta version](/docs/Help/terminology.md#beta-version) you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.
:::

## Managing your customizations

Talon is built to be a flexible and customizable system. This means that in addition to being able to add new voice commands you can also override the behavior of existing commands reasonably easily.

Given this flexibility there are two ways you could approach customizing your Talon setup:

- Option A: Edit the `.talon` and `.py` files from the [Talon Community](https://github.com/talonhub/community) directly.
  - Can be easier to begin with, but may be difficult to keep up-to-date with upstream.
  - You need to work out what you modified and how to re-apply it to the [Talon Community](https://github.com/talonhub/community) user file set every time you update it.
- Option B: Maintain your own separate directory with your customizations that sits alongside the [Talon Community](https://github.com/talonhub/community). (**Recommended**)
  - The screenshot below shows a Talon user directory with multiple user file sets. The `community` directory contains the [Talon Community](https://github.com/talonhub/community) unchanged from the version on Github. The rest of the folders are other file sets that supplement the Talon Community file set.
  - For example, `my_talon` contains personal customizations, and `curserless-talon` contains the [Cursorless](https://github.com/cursorless-dev/cursorless).

![Screen shot of Talon user directory](/img/talon_user_folders.png)

## Refreshing Your Local Copy of the Community User File Set

You will probably want to update your Talon Community user file set occasionally in order to pick up new features and bug fixes. 

Unfortunately changing Talon Commmunity may also sometimes add new bugs! If this happens you might want to go back the older version so you can keep working. Use `git` if you are familiar, and if you're not, then just making a `.zip` backup of the whole Talon user directory prior to making a potentially significant change also works.


## Backups

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
