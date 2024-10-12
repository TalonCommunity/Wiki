# File Manager Command

## System Setup

For the file manager commands described in this section to work, your file manager must display the full folder path in the title bar. tags/file_manager/file_manager.talon

For the Mac Finder, run this command in Terminal to display the full path in the window title:

```
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES
```

For Windows Explorer, [follow these directions](https://www.howtogeek.com/121218/beginner-how-to-make-explorer-always-show-the-full-path-in-windows-8/).

For the Windows command line, the `refresh title` command will force the title to the current directory, and all directory commands (`follow 1`) will automatically update the title.

Notes:

- Both Windows Explorer and Finder hide certain files and folders by default, so it's often best to use the imgui to list the options before issuing commands.

- If there no hidden files or folders, and the items are displayed in alphabetical order, you can typically issue the `follow <number>`, `file <number>` and `open <number>` commands based on the displayed order.

To implement support for a new program, implement the relevant file manager actions for your application and assert the `user.file_manager` tag. There are a number of example implementations in the repository. [Finder](apps/finder/finder.py) is a good example to copy and mdoify.

