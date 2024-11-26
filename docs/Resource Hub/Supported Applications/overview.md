---
sidebar_position: 1
---

# Overview

:::docoscope Talon Community User File Set

:::

All applications on your PC can be controlled using speech when running talon.
This is done by using the general mechanisms described under [command mode](/docs/Basic%20Usage/Command%20Mode/command_mode.md),
as well as [dictation mode](/docs/Basic%20Usage/dictation_mode.md) if useful.

Additionally, Talon has support for certain [specific popular applications](./Apps/index.md).
This can make it easier and more efficient to operate them by voice.

For example, within firefox you could initiate a page reload by moving the cursor to over the reload icon and saying touch
or remembering and saying the keyboard shortcut `control r`. But as firefox is a supported application, then
you can simply say `reload it`, and talon will send the application a `control r` keypress.

## Application Tags

Where appropriate common applications have been tagged as being part of an application class,
for example firefox is tagged as a browser.

A common set of commands applies to all applications within that class. For example,
saying `go address` in a browser application takes the focus to the address bar regardless of which specific application
is running.

| Class                                        | Description                                     |
| -------------------------------------------- | ----------------------------------------------- |
| [browser](./App%20Tags/browsers.md)          | browsers, such as firefox, chrome, edge, safari |
| [file manager](./App%20Tags/file_manager.md) | example windows explorer and the mac finder     |

:::docotodo

Complete with all commands from under the tags directory

:::
