# File Managers

The commands described here apply to all applications that are classified as a file manager
(technically, those `.talon` files that have the line `tag: file_manager`).

This includes the mac finder and windows explorer.

A key feature is being able to navigate a file system efficiently without a mouse.

:::note

For the file manager commands described in this section to work, your file manager must display the full folder path in the title bar.
See the [setup](#system-setup) section below for details.

:::

The command descriptions below refer to the following screenshot:

<img src="/img/file_manager_panels.png/"
    alt="screenshot of the file manager panels on windows"
/>

## Commands

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `title force`     | refresh the title                                      |
| `manager show`    | shows the file manager panels                          |
| `manager close`   |                                                        |
| `manager refresh` |                                                        |
| `properties show` | shows the properties of the selected file or directory |
| `terminal here`   | opens a terminal with the current directory set        |

### Directory Related Commands

| Command                                                   | Description                                                                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `go <user.system_path>`                                   | sets the directory to that specified, for example `go talon home`                                                |
| `go parent` or `go daddy`                                 |                                                                                                                  |
| `follow numb <number_small>`                              | sets the directory to that specified, for example `follow numb ten`, would change to the mouse_grid subdirectory |
| `follow {user.file_manager_directories}`                  | sets the directory to that specified, for example `follow file extensions`                                       |
| `(select \| cell) folder {user.file_manager_directories}` | selects the specified named directory, for example `select folder modes`                                         |
| `folder numb <number_small>`                              | selects the directory to that specified, but does not enter it                                                   |
| `folder new <user.text>`                                  | creates a new directory with the specified name                                                                  |
| `folder next`, `folder last`                              | if there are many subdirectories, these commands will show the next or previous page                             |

### File Related Commands

| Command                                           | Description                                                                                                             |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `open <number_small>`                             | opens the specified file, for example `open ten` would open the `README.md` file                                        |
| `file numb <number_small>`                        | selects the specified file but does not open it, for example `file numb fourteen` would select `tags.py`                |
| `file {user.file_manager_files}`                  | selects the specified named file but does not open it, for example `file dragon engine` would select `dragon_engine.py` |
| `(select \| cell) file {user.file_manager_files}` | selects the specified named file, for example `select file noise`                                                       |
| `file next`, `file last`                          | if there are many files in the current directory, these commands will show the next or previous page                    |

## user.system_path

The following system paths are defined, and can be used in the `go <user.system_path>` command.

- user
- desktop
- desk
- documents
- docks
- downloads
- music
- pictures
- videos
- talon home
- talon recordings
- talon user

:::note Windows

For window systems that have OneDrive installed, the following folders are set to subdirectories of OneDrive.

`desktop`, `documents`, `pictures`

Otherwise, they are set as subdirectories of the user folder

:::

### Customizing the System Path List

The list of system paths known to talon is kept in the file `/core/system_paths-{hostname}.talon-list`.

This can be updated to include your frequently used directories, so that it can be used with the `go <user.system_path>` voice command.

:::note

Before changing this file, it is recommended to first read the notes on [managing customizations](/docs/Customization/managing-customizations.md#overriding-cleanly)

:::

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

To implement support for a new program, implement the relevant file manager actions for your application and assert the `user.file_manager` tag. There are a number of example implementations in the repository. `[Finder](apps/finder/finder.py)` is a good example to copy and mdoify.
