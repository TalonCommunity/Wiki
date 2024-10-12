---
sidebar_position: 1
---
# TalonScript

| Area | Description | 
| ---------------- | ---------------------- |
| [Voice Commands](/docs/Help/terminology.md#voice-commands) | Create new [Voice Commands](/docs/Help/terminology.md#voice-commands) for existing [Talon Actions](/docs/Help/terminology.md#talon-actions), or modify existing voice commands. | 
| [Settings](./settings.md) | Change [settings](./settings.md) such as whether Talon should display help info using the dark mode theme. | 
| [Tags](tag-activation.md)     | Activate [tags](tag-activation.md) |
| [keyboard shortcuts](customize-kbd-shortcut.md) | Customize [keyboard shortcuts](customize-kbd-shortcut.md) |

TalonScript are files with a `.talon` extension and stored somewhere in your [Talon user directory](/docs/Help/terminology.md#talon-user-directory). 

In general Talon will automatically pick up and apply any changes to `.talon` or `.py` files in your Talon user directory, so you don't have to restart Talon each time you make a change. 

## .talon file syntax

Talon files look something like this:

```talon
title: /Gmail/
-

# Define a voice command with an associated function
find on page: key(ctrl-f)

reload page:
    key(ctrl-r)

insert bold text:
    key(ctrl-b)
    insert("type in this text (it will be bolded)")
    key(ctrl-b)
```

The part above the '-' line is called the [context header](./context-header.md) and the part below is the [body](./)). The context header specifies under what circumstances the rest of the file will be active. The body defines voice commands and other behaviour.

### Context header

The context header defines when the rest of the file will be active.

In this example our context header says that the file is only active when the word 'Gmail' is in the window title. The context header is optional; if it is not included (as in our simple_test.talon example) then the file is always active.

### Body

The body can have several kinds of content. Most often you'll be defining voice commands, so that's all we'll talk about here.

Voice commands start with the actual words you want to speak followed by a ':' character. They then list out all the actions you want to perform as a result of that command. If you only want to perform a single action then you can put it on a single line as in the first 'find on page' command. If you have more than one action you must put each action on its own line. The actions associated with a command must be indented with spaces, but it doesn't matter how many you use. Separate voice commands with one or more blank lines.



## Recipes

If you've read the above you should have some idea of how to make customizations to Talon, particularly using `.talon` files. This section contains a recipe list of some common/instructive customizations you might like to make.

### Add new keyboard shortcuts

Often you will want to add a new voice command to press an application specific keyboard shortcut. Let's choose the YouTube webpage as our example. The following `.talon` file defines two new voice commands:

```talon
title: /YouTube/
-
toggle play: key("space")

search cats:
    key("/")
    sleep(100ms)
    insert("cats")
    key("enter")
```

These commands only apply when the window title has "YouTube" in it. "search cats" first presses the "/" key to focus the YouTube search box, then waits 100 milliseconds to make sure it has been focussed, then types in "cats" and presses enter.

### Slow down key presses

A reasonably common problem that comes up when using Talon with computer games is that the application only recognizes key presses intermittently or not at all. This can be because Talon presses and releases the keys too quickly. The following `.talon` file makes Talon hold down each key for 32 milliseconds before releasing it. You could try increasing the key_hold value incrementally to find the smallest length of time you need to hold for the key to be recognized reliably:

```talon
app.exe: my_game.exe
-
settings():
    key_hold = 32
```

Note the use of app.exe as the context matcher to match the filename of the active program. See the [unofficial docs](./talon-files.md#context-header) for a full list of available matchers.

#### Settings

`key_hold` isn't the only or necessarily the best setting for your keyboard issue. There are also many other settings for configuring other aspects of Talon's behaviour.

settings() blocks can be put in any `.talon` file and are used to change the value of settings given a matching context header. You can have multiple settings by putting each on its own indented line underneath the "settings():" line. You can include voice commands in the same file as a settings block.

You can paste the following code into the REPL to see a full list of available settings: `settings.list()`. A list of some of the more useful ones are [included here](./talon-files.md#tags-settings-and-other-capabilities). [Talon Community](https://github.com/talonhub/community) also has a list of some extra settings it defines in the `settings.talon` file.

### Keyboard shortcuts

You have the ability to set keyboard shortcuts in `.talon` files. The following `.talon` file toggles whether Talon is listening to speech when you press the ctrl + t key combination:

    key(ctrl-t): speech.toggle()

The shortcut is global since there's no context matcher in this `.talon` file restricting it to a particular application for example. You could replace speech.toggle() with the same types of things that you would use in a voice command.
