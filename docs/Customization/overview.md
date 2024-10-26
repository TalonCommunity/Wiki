---
sidebar_position: 1
---

# Overview

Once you have successfully [set up Talon](/docs/Resource%20Hub/Talon%20Installation/installation_guide.md)
and have at least some familiarity with [basic usage](/docs/Basic%20Usage/basic_usage.md), you may find that you would like to change some of how your Talon setup behaves.

## Customization overview

Talon supports three methods for customizing it's functionality.


| Method | User Skill              | Description | 
| ---------------- | ---------------------- | - | 
| [TalonScript](./TalonScript/talon-script.md)      | All Users | Create new [Voice Commands](./TalonScript/voice-commands.md), change [settings](./settings.md) and more | 
| [Python](./Python/api-functions.md)          | Programmers | Create new [Talon Actions](/docs/Resource%20Hub/terminology.md#talon-actions) for use within [Voice Commands](/docs/Resource%20Hub/terminology.md#voice-commands) | 



All customization consists of files placed in the [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory). 

Talon itself doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.
However, there are some guidelines about [managing your customizations](./managing-customizations.md), which could make this easier long term.

:::note Additional Capabilities

Aside from these, additional extra capabilities may be added from time to time. For example in the [beta version](/docs/Resource%20Hub/terminology.md#beta-version) you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.
:::

