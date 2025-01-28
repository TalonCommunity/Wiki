---
sidebar_position: 1
---

# Basic customization

Once you have successfully [set up Talon](../Quickstart/getting_started.md) you may find that you would like to change some of how it behaves at a basic level.

## Customization overview

All customization consists of files with `.talon` or `.py` file extensions placed in the Talon user directory. The Talon user directory is where you put the [Talon Community](https://github.com/talonhub) user file set (`~/.talon/user/` on MacOS/Linux, `%APPDATA%\Talon\user` on Windows). Talon doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.

So why do we have two kinds of configuration/scripting files (`.py` and `.talon`)?

- `.talon` files provide a succinct way of mapping spoken commands to behaviour. `.talon` files are written in a language that is only used by Talon.
  - `.talon` files are designed to be simple and to provide good feedback if you make mistakes.
- `.py` files are Python scripts that provide the implementation of behaviour and other functionality used by `.talon` files.
  - You do not need to customize Python or know how to code to use Talon

## Managing your customizations

Talon is built to be a flexible and customizable system. This means that in addition to being able to add new voice commands you can also override the behavior of existing commands reasonably easily.

Given this flexibility, there are two ways you could approach customizing your Talon setup:

- Option A: Edit the `.talon` and `.py` files from the [Talon Community](https://github.com/talonhub/community) directly.
  - Can be easier to begin with, but may be difficult to keep up-to-date with upstream.
  - You need to work out what you modified and how to re-apply it to the [Talon Community](https://github.com/talonhub/community) user file set every time you update it.
- Option B: Maintain your own separate directory with your customizations that sits alongside the [Talon Community](https://github.com/talonhub/community). (**Recommended**)
  - The screenshot below shows a Talon user directory with multiple user file sets. The `community` directory contains the [Talon Community](https://github.com/talonhub/community) unchanged from the version on GitHub. The rest of the folders are other file sets that supplement the Talon Community file set.
  - For example, `my_talon` contains personal customizations, and `curserless-talon` contains the [Cursorless](https://github.com/cursorless-dev/cursorless).

![Screen shot of Talon user directory](/img/talon_user_folders.png)

### Backups

You will probably want to update your Talon Community user file set occasionally in order to pick up new features and bug fixes. Unfortunately changing Talon Commmunity may also sometimes add new bugs! If this happens you might want to go back the older version so you can keep working. Use `git` if you are familiar, and if you're not, then just making a `.zip` backup of the whole Talon user directory prior to making a potentially significant change also works.

## A simple .talon file

Let's make a new voice command that presses the key combination `cmd+a` or `control+a` when you say "select everything".

Open up a text editor and save an empty file called `simple_test.talon` somewhere in your Talon user directory. Next, right-click on the Talon icon in your status bar, choose 'Scripting', and then 'View log'. This will show a list of log messages from Talon, and in particular, will be where Talon tells us if there's a problem with what we write in `simple_test.talon`.

OK, let's get to defining the command. If you're running MacOS, copy/paste the following into your editor and save the file (ensure you have the spaces at the start of the 'key' line):

```talon
select everything:
    key(cmd-a)
```

If you're on Windows or Linux you can use this instead:

```talon
select everything:
    key(ctrl-a)
```

You should see a line like `2021-09-02 17:33:36 DEBUG [+] /home/normal/.talon/user/mystuff/simple_test.talon` printed in your Talon log. This indicates that Talon has picked up your new/updated file and has loaded it. In general, Talon will automatically pick up and apply any changes to `.talon` or `.py` files in your Talon user directory, so you don't have to restart Talon each time you make a change. If you don't see a line like that and can't figure it out, then you might want to ask for help on the [Talon slack](https://talonvoice.com/chat) in the #help channel.

Your command should now be defined, so if you focus your text editor and say "select everything" it should indeed select everything.

### Error messages

OK, let's now deliberately introduce an error so we can see how Talon tells us about that. Edit your file and remove the final ')' character so the last line is " key(cmd-a" or " key(ctrl-a". Save the file and look at your Talon log. For me, Talon writes out the following:

```
    2021-09-02 17:46:02 DEBUG [-] /home/normal/.talon/user/simple_test.talon
    2021-09-02 17:46:02 DEBUG [+] /home/normal/.talon/user/simple_test.talon
    2021-09-02 17:46:02 ERROR     8:                         talon/scripting/talon_script.py:705|
        7:                lib/python3.9/site-packages/lark/lark.py:561|
        6:    lib/python3.9/site-packages/lark/parser_frontends.py:107|
        5: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:41 |
        4: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:171|
        3: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:188|
        2: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:182|
        1: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:129|
    lark.exceptions.UnexpectedToken: Unexpected token Token('$END', '') at line 1, column 5.
    Expected one of:
        * RPAR


        1: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:126|
    KeyError: '$END'

    [The below error was raised while handling the above exception(s)]
    2021-09-02 17:46:02 ERROR Failed to parse TalonScript in "user.simple_test.talon" for "select everything"
       16:      lib/python3.9/threading.py:912* # cron thread
       15:      lib/python3.9/threading.py:954*
       14:      lib/python3.9/threading.py:892*
       13:                   talon/cron.py:155|
       12:                   talon/cron.py:106|
       11:                     talon/fs.py:64 |
       10:                     talon/fs.py:57 |
        9:         talon/scripting/rctx.py:233| # 'fs' main:on_change()
        8:         app/resources/loader.py:689|
        7:         app/resources/loader.py:639|
        6:         app/resources/loader.py:517|
        5:         app/resources/loader.py:501|
        4:      talon/scripting/context.py:520|
        3:      talon/scripting/context.py:436| # [stack splice]
        2: talon/scripting/talon_script.py:719|
        1: talon/scripting/talon_script.py:713|
    talon.scripting.talon_script.CompileError:   Line: 1, Column: 5 - unexpected token
          key(ctrl-a
              ^
      Expected: )
     in script at /home/normal/.talon/user/simple_test.talon:2:
      key(ctrl-a
```

So that's quite a lot of output. The useful bit is at the bottom:

```
    talon.scripting.talon_script.CompileError:   Line: 1, Column: 5 - unexpected token
          key(ctrl-a
              ^
      Expected: )
     in script at /home/normal/.talon/user/simple_test.talon:2:
      key(ctrl-a
```

You can see it has the "in script at /home/normal/.talon/user/simple_test.talon:2:" line. This tells us the file the problem occurred in, and also the (maybe approximate) line number the problem was on, '2' in our case. There is also some suggestive text indicating that Talon was expecting a ')' character. The error message you get will depend on the problem with what you've written, but it should always tell you which file has the problem in it, and also the approximate line the problem was on.

OK, we're finished with this file now so you can delete it.

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

The part above the '-' line is called the "context header" and the part below is the "body". The context header decides under what circumstances the rest of the file will be active. The body defines voice commands and other behaviour.

### Context header

The context header defines when the rest of the file will be active.

In this example, our context header says that the file is only active when the word 'Gmail' is in the window title. The context header is optional; if it is not included (as in our simple_test.talon example) then the file is always active.

### Body

The body can have several kinds of content. Most often you'll be defining voice commands, so that's all we'll talk about here.

Voice commands start with the actual words you want to speak followed by a ':' character. They then list out all the actions you want to perform as a result of that command. If you only want to perform a single action then you can put it on a single line as in the first 'find on page' command. If you have more than one action you must put each action on its own line. The actions associated with a command must be indented with spaces, but it doesn't matter how many you use. Separate voice commands with one or more blank lines.

### Actions in .talon files

You might have noticed that we've been using the key() and insert() actions in the example files so far. There are a number of built in actions, and extra actions can be defined in `.py` files. To get a complete list of defined actions you can do the following:

1. Right click on the Talon icon in your status bar, choose scripting, and then 'Console (REPL)'. This will open a terminal window where you type Python commands and the results of those commands are printed out.
2. Type `actions.list()` and press enter. This will list out all the available actions.
3. You might like to look at this list of actions in your text editor (so you can search them, for example). To put the full list into your clipboard, copy and paste this code into the talon console and press enter:

```python
import io;old=sys.stdout;sys.stdout = io.StringIO();actions.list();clip.set_text(sys.stdout.getvalue());sys.stdout = old
```

Some of the more useful actions are:

- `key(ctrl-a)` - Presses the keys within the parentheses. See the 'Add new keyboard shortcuts' recipe below for some more info about using this action.
- `insert("my text")` - Types in the text "my text"
- `sleep(100ms)` - Waits for 100 milliseconds. This can be useful if you need to wait for your target application to do something. Don't make the sleep too long because Talon will not respond to voice commands while sleeping.
- `mouse_move(100, 200)` - Moves the mouse to screen coordinates 100 pixels from the left and 200 from the top.
- `mouse_scroll(0, -10)` - Scrolls the mouse 10 'units' to the left. `mouse_scroll(10)` would scroll the mouse 10 'units' down. Note that the arguments are y, x rather than x, y.
- `mouse_click(0)` - Clicks the left mouse button at the cursor. `mouse_click(1)` right clicks.

## Recipes

If you've read the above you should have some idea of how to make customizations to Talon, particularly using `.talon` files. This section contains a recipe list of some common/instructive customizations you might like to make.

### Add new keyboard shortcuts

Often you will want to add a new voice command to press an application-specific keyboard shortcut. Let's choose the YouTube webpage as our example. The following `.talon` file defines two new voice commands:

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

Note the use of app.exe as the context matcher to match the filename of the active program. See the [unofficial docs](../Customization/talon-files.md#context-header) for a full list of available matchers.

#### Settings

`key_hold` isn't the only or necessarily the best setting for your keyboard issue. There are also many other settings for configuring other aspects of Talon's behaviour.

settings() blocks can be put in any `.talon` file and are used to change the value of settings given a matching context header. You can have multiple settings by putting each on its own indented line underneath the "settings():" line. You can include voice commands in the same file as a settings block.

You can paste the following code into the REPL to see a full list of available settings: `settings.list()`. A list of some of the more useful ones is [included here](../Customization/talon-files.md#tags-settings-and-other-capabilities). [Talon Community](https://github.com/talonhub/community) also has a list of some extra settings it defines in the `settings.talon` file.

### Keyboard shortcuts

You have the ability to set keyboard shortcuts in `.talon` files. The following `.talon` file toggles whether Talon is listening to speech when you press the ctrl + t key combination:

    key(ctrl-t): speech.toggle()

The shortcut is global since there's no context matcher in this `.talon` file restricting it to a particular application for example. You could replace speech.toggle() with the same types of things that you would use in a voice command.

### Overriding existing voice commands

One thing that may not be immediately obvious is that re-using voice commands is perfectly acceptable. You can just create a new `.talon` file with a new context header and redefine the command.

This also provides a simple way of overriding the behaviour of existing voice commands from the [Talon Community](https://github.com/talonhub/community) user file set. Let's say you wanted to change the behaviour of the `touch` command so that it didn't hide the mouse grid if it was open.

The existing code is in a `.talon` file without a context header called `mouse.talon`:

```talon
touch:
    mouse_click(0)
    # Close the mouse grid if open
    user.grid_close()
    # End any open drags
    # Touch automatically ends left drags so this is for right drags specifically
    user.mouse_drag_end()
```

We can see the `user.grid_close()` action is called to close the grid after clicking the mouse. Also, note the lines starting with '#' characters are called comments. They are just there for documentation and will not be otherwise processed by Talon.

If we wanted to stop the `user.grid_close()` behaviour we could just create a new `.talon` file and put in the following contents:

```talon
os: mac
-
touch:
    mouse_click(0)
    # End any open drags
    # Touch automatically ends left drags so this is for right drags specifically
    user.mouse_drag_end()
```

Notice that we've given it a context header. Because this context header is more specific (i.e. it has more rules in it) this implementation of "touch" will take precedence over the original. The implementation just has the `user.grid_close()` line and associated comment removed.

In general, you can use this technique by just making a version of the `.talon` file you want to override and putting in more redundant rules to make it the more specific version. In addition to "os: " some other redundant filters you can add are "mode: command" (assuming you want to define the command in the default 'command' mode) and "speech.engine: wav2letter" (assuming you're not using Dragon).

This is a simple way of overriding voice commands using `.talon` files. Many other parts of the system (such as the behaviour of actions) can also be overridden, but this requires editing `.py` files.
