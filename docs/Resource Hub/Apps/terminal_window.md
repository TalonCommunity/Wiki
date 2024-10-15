# Terminal Windows

Many terminal applications are supported out of the box, but you may not want all the commands enabled.

To use command sets in your terminal applications, enable/disable the corresponding tags in the terminal application-specific .talon file.

```
tag(): user.file_manager
tag(): user.git
tag(): user.kubectl
tag(): user.tabs
```

For instance, kubectl commands (kubernetes) aren't relevant to everyone.

Note also that while some of the command sets associated with these tags are defined in talon files within [tags](tags), others, like git, are defined within [apps](apps). Commands for tabs are defined in [tabs.talon](core/windows_and_tabs/tabs.talon).