---
sidebar_position: 1
---

# Command Groups

For some applications, there are many voice commands defined.

Generally, this isn't defined as one long list, but broken down into a set of `command groups`.

:::note Firefox Voice Command List

For example, the following voice commands are defined for firefox:

| What                                                                     | Example                   |
| ------------------------------------------------------------------------ | ------------------------- |
| a small number of firefox specific commands                              | `tab search accuracy`     |
| all the commands in the [browser](./browser.md) command group            | `go home`                 |
| all the commands in the [user.tabs](./tabs.md) command group             | `tab duplicate`           |
| all the commands in the [user.find](./find.md) command group             | `hunt next`               |
| all the commands in the [user.navigation](./navigation.md) command group | `go back`                 |

:::

Where appropriate common applications have been tagged as being part of an application class,
for example firefox is tagged as a browser.

A common set of commands applies to all applications within that class. For example,
saying `go address` in a browser application takes the focus to the address bar regardless of which specific application
is running.

| Class                                        | Description                                     |
| -------------------------------------------- | ----------------------------------------------- |
| [browser](./browser.md)          | browsers, such as firefox, chrome, edge, safari |
| [file manager](./file_manager.md) | example windows explorer and the mac finder     |

