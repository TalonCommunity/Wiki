---
sidebar_position: 1
title: Customization Overview
---

# Overview

Once you have successfully [set up Talon](/docs/Resource%20Hub/Talon%20Installation/installation_guide.md)
and have at least some familiarity with [basic usage](/docs/Basic%20Usage/basic_usage.md), you may find that you would like to change some of how your Talon setup behaves.

Talon supports customization of many of its behaviors. And although making changes does require some care and attention,
this is intended to be achievable by users of all skill levels.

:::info Creating New Talon Actions

One area does require Python programming expertise, and that is in order to create new [talon actions](/docs/Resource%20Hub/terminology.md#talon-actions)
for use within [voice commands](./TalonScript/voice-commands.md). For all of the customization cases shown above, this is not required.

:::

## Notes

### Note 1

### Note 2 - `.talon-files` Under Directory `/core`

### Note 3 - `.csv` Under Directory `/core`

Customizations must be applied to the files within this directory.

Care needs to be taken if updating to a new version of the Talon community user file set,
as any changes you've made will be overwritten.

### Note 4 - files Under Directory `/settings`

Customizations must be applied to the files within this directory.

Files here are not included with the user file set, and so there is no risk of losing
customizations when updating to a new version of the user file set.

All customization consists of files placed in the [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory).

Talon itself doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.
However, there are some guidelines about [managing your customizations](./managing-customizations.md), which could make this easier long term.

:::note Additional Capabilities

Aside from these, additional extra capabilities may be added from time to time. For example in the [beta version](/docs/Resource%20Hub/beta_talon.md) you can currently define rules for matching facial expressions on OSX and user supplied noises (e.g. a whistle sound) via integration with parrot.py.
:::
