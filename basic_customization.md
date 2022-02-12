# Basic customization

Once you have successfully [set up Talon](/getting_started) you may find that you would like to change some of how it behaves. This page aims to be a pragmatic guide for performing some common modifications and is aimed at a beginner audience, including non-programmers. A more complete treatment of Talon's capabilities can be found in the [unofficial Talon docs](/unofficial_talon_docs).

This page assumes that Talon is responding to your voice and you are using the knausj\_talon package.

If you are having trouble with anything here or in Talon more generally, the best way to get help is on the [Talon Slack](/).

## Customization overview

All customization consists of files with `.talon` or `.py` file extensions placed in the Talon user directory. The Talon user directory is where you put the knausj\_talon package/directory ("~/.talon/user/" on MacOS/Linux, "%APPDATA%\Talon\user" on Windows). Talon doesn't care how you organize your files within this directory, any subdirectories or file names are just there to make things easier to understand for you and others.

So why do we have two kinds of configuration/scripting files (`.py` and `.talon`)? Roughly speaking `.talon` files provide a succinct way of mapping spoken commands to behaviour. `.py` files on the other hand provide the implementation of behaviour and other functionality used by `.talon` files. `.py` files are written in the [Python programming language](https://www.python.org/) (one of the most popular programming languages in the world). `.talon` files are written in a language that is only used by Talon.

If you're not a programmer it may seem a little intimidating to be working with programming languages. The `.py` files may indeed be a little difficult to work with in the beginning, however `.talon` files are designed to be simple and to provide good feedback if you make mistakes. We'll provide some explanation for working with `.talon` files on this page. More extensive documentation about both `.talon` and `.py` files can be found at [unofficial talon docs](/unofficial_talon_docs).

## Managing your customizations

Talon is built to be a flexible and customizable system. This means that in addition to being able to add new voice commands you can also override the behavior of existing commands reasonably easily.

Given this flexibility there are two ways you could approach customizing your Talon setup:

* Option A: Edit the `.talon` and `.py` files within the knausj\_talon package/directory directly.
* Option B: Maintain your own separate directory with your customizations.

Option A can be easier to begin with, but makes it somewhat harder to keep your knausj\_talon up to date. This is because you need to work out what you modified and how to re-apply it to the knausj package every time you update it. We recommend using Option B with separate directories as much as possible, only resorting to direct editing when you have to.

The screenshot below shows my talon user directory. You can see that I have a knausj\_talon folder in the same way that you would. The rest of the folders are other 'packages' I'm using. All my personal customizations are in the 'mystuff' folder; knausj\_talon is completely unchanged from what I downloaded from github.

![Screen shot of Talon user directory](/media/basic_customization_folders.png)

Let's speak about versioning your configuration for a minute. You will probably want to update your knausj\_talon configuration occasionally in order to pick up new features and bug fixes. Unfortunately changing knausj\_talon may also sometimes add new bugs! If this happens you might want to go back the older version so you can keep working. If you're confident with the `git` program this is straightforward. If you're not, then just making a backup of the whole user directory prior to making a potentially significant change doesn't hurt.

With that out of the way we're going to work through a simple `.talon` file example to give you an idea of how to create them.

## A simple .talon file

Let's make a new voice command that presses the key combination cmd+a or control+a when you say "select everything". This will work in a similar way to the 'select all' command built in to knausj\_talon.

First let's get you an appropriate plain text editor. We're looking for something like Notepad in windows that just saves unformatted text files (so not Libreoffice or Microsoft Word). We can do much better than Notepad however. A simple editor which you can use on Windows, MacOS, or Linux is [Geany](https://www.geany.org/download/releases/).

Open up your editor and save an empty file called `simple_test.talon` somewhere in your Talon user directory. Next, right click on the Talon icon in your status bar, choose scripting, and then 'View log'. This will show a list of log messages from Talon, and in particular will be where Talon tells us if there's a problem with what we write in `simple_test.talon`.

OK, let's get to defining the command. If you're running MacOS, copy/paste the following into your editor and save the file (ensure you have the spaces at the start of the 'key' line):

    select everything:
      key(cmd-a)

If you're on Windows or Linux you can use this instead:

    select everything:
      key(ctrl-a)

You should see a line like `2021-09-02 17:33:36 DEBUG [+] /home/normal/.talon/user/mystuff/simple_test.talon` printed in your Talon log. This indicates that Talon has picked up your new/updated file and has loaded it. In general Talon will automatically pick up and apply any changes to `.talon` or `.py` files in your user directory, so you don't have to restart Talon each time you make a change. If you don't see a line like that and can't figure it out, then you might want to ask for help on the [Talon slack](/) in the #help channel.

Your command should now be defined, so if you focus your text editor and say "select everything" it should indeed select everything.

### Error messages

OK, let's now deliberately introduce an error so we can see how Talon tells us about that. Edit your file and remove the final ')' character so the last line is "  key(cmd-a" or "  key(ctrl-a". Save the file and look at your Talon log. For me, Talon writes out the following:

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

So that's quite a lot of output. The useful bit is at the bottom:


    talon.scripting.talon_script.CompileError:   Line: 1, Column: 5 - unexpected token
          key(ctrl-a
              ^
      Expected: )
     in script at /home/normal/.talon/user/simple_test.talon:2:
      key(ctrl-a

You can see it has the "in script at /home/normal/.talon/user/simple\_test.talon:2:" line. This tells us the file the problem occurred in, and also the (maybe approximate) line number the problem was on, '2' in our case. There is also some suggestive text indicating that Talon was expecting a ')' character. The error message you get will depend on the problem with what you've written, but it should always tell you which file has the problem in it, and also the approximate line the problem was on.

OK, we're finished with this file now so you can delete it.

## .talon file syntax

Talon files look something like this:

    title: /Gmail/
    -
    find on page: key(ctrl-f)

    reload page:
        key(ctrl-r)

    insert bold text:
      key(ctrl-b)
      insert("type in this text (it will be bolded)")
      key(ctrl-b)

The part above the '-' line is called the "context header" and the part below is the "body". The context header decides under what circumstances the rest of the file will be active. The body defines voice commands and other behaviour.

### Context header

The context header defines when the rest of the file will be active.

In this example our context header says that the file is only active when the word 'Gmail' is in the window title. The context header is optional; if it is not included (as in our simple\_test.talon example) then the file is always active.

### Body

The body can have several kinds of content. Most often you'll be defining voice commands, so that's all we'll talk about here.

Voice commands start with the actual words you want to speak followed by a ':' character. They then list out all the actions you want to perform as a result of that command. If you only want to perform a single action then you can put it on a single line as in the first 'find on page' command. If you have more than one action you must put each action on its own line. The actions associated with a command must be indented with spaces, but it doesn't matter how many you use. Separate voice commands with one or more blank lines.

A more complete guide to .talon files is included in the [unofficial docs](/unofficial_talon_docs).

### Actions in .talon files

You might have noticed that we've been using the key() and insert() actions in the example files so far. There are a number of built in actions, and extra actions can be defined in `.py` files. To get a complete list of defined actions you can do the following:

1. Right click on the Talon icon in your status bar, choose scripting, and then 'Console (REPL)'. This will open a terminal window where you type Python commands and the result of those commands are printed out.
2. Type `actions.list()` and press enter. This will list out all the available actions.
3. You might like to look at this list of actions in your text editor (so you can search them, for example). To put the full list into your clipboard, copy and paste this code into the terminal window and press enter: `import io;old=sys.stdout;sys.stdout = io.StringIO();actions.list();clip.set_text(sys.stdout.getvalue());sys.stdout = old`. You can then paste the list of actions wherever you like.

Some of the more useful actions are:

* `key(ctrl-a)` - Presses the keys within the parentheses. See the 'Add new keyboard shortcuts' recipe below for some more info about using this action.
* `insert("my text")` - Types in the text "my text"
* `sleep(100ms)` - Waits for 100 milliseconds. This can be useful if you need to wait for your target application to do something. Don't make the sleep too long because Talon will not respond to voice commands while sleeping.
* `mouse_move(100, 200)` - Moves the mouse to screen coordinates 100 pixels from the left and 200 from the top.
* `mouse_scroll(0, -10)` - Scrolls the mouse 10 'units' to the left. `mouse_scroll(10)` would scroll the mouse 10 'units' down. Note that the arguments are y, x rather than x, y.
* `mouse_click(0)` - Clicks the left mouse button at the cursor. `mouse_click(1)` right clicks.

## Recipes

If you've read the above you should have some idea of how to make customizations to Talon, particularly using `.talon` files. This section contains a recipe list of some common/instructive customizations you might like to make. The list isn't intended to be complete of course, we're trying to strike a balance between page length and usefulness.

As always, see the [unofficial docs](/unofficial_talon_docs) page for a much more complete understanding and for more advanced/powerful concepts.

### Add new keyboard shortcuts

Often you will want to add a new voice command to press an application specific keyboard shortcut. Let's choose the YouTube webpage as our example. The following `.talon` file defines two new voice commands:

    title: /YouTube/
    -
    toggle play: key("space")

    search cats:
        key("/")
        sleep(100ms)
        insert("cats")
        key("enter")

These commands only apply when the window title has "YouTube" in it. "search cats" first presses the "/" key to focus the YouTube search box, then waits 100 milliseconds to make sure it has been focussed, then types in "cats" and presses enter.

Keyboard shortcuts will almost always make use of the key() action. Here's some of the syntax you can use with that:

* key("f") - Presses the f key.
* key("ctrl-t") - Presses and holds down the control key, then presses t, then releases everything.
* key("\\"") - Presses the " key.
* key("ctrl-shift-alt-cmd-super-t") - Presses and holds down the control, shift, alt, super (windows key), and command keys, then presses t, then releases everything. Note how you can apply multiple modifiers by connecting them with hyphens.
* key("left delete") - Presses the left arrow key, then the delete key.
* key("ctrl:down") - Presses and holds the control key. You can use "ctrl:up" to release the key in a subsequent key() call.
* key("tab:3") - Presses the tab key three times.
* There isn't a full list of key names available unfortunately, but some useful or non-obvious ones are: enter, left/right/up/down, escape, pageup/pagedown, backspace, space, tab, delete, f12

### Slow down key presses

A reasonably common problem that comes up when using Talon with computer games is that the application only recognizes key presses intermittently or not at all. This can be because Talon presses and releases the keys too quickly. The following `.talon` file makes Talon hold down each key for 32 milliseconds before releasing it. You could try increasing the key\_hold value incrementally to find the smallest length of time you need to hold for the key to be recognized reliably:

    app.exe: my_game.exe
    -
    settings():
        key_hold = 32

Note the use of app.exe as the context matcher to match the filename of the active program. See the [unofficial docs](/unofficial_talon_docs/#context-header) for a full list of available matchers.

#### Settings

`key_hold` isn't the only or necessarily the best setting for your keyboard issue. There are also many other settings for configuring other aspects of Talon's behaviour.

settings() blocks can be put in any `.talon` file and are used to change the value of settings given a matching context header. You can have multiple settings by putting each on its own indented line underneath the "settings():" line. You can include voice commands in the same file as a settings block.

You can paste the following code into the REPL to see a full list of available settings: `settings.list()`. A list of some of the more useful ones are [included here](/unofficial_talon_docs#built-in-talon-settings). knausj\_talon also has a list of some extra settings it defines in the `settings.talon` file.

### Keyboard shortcuts

On MacOS only you have the ability to set keyboard shortcuts in `.talon` files. The following `.talon` file toggles whether Talon is enabled (listening to speech) if you press the cmd + t key combination:

    key(cmd-t): speech.toggle()

You could replace speech.toggle() with the same types of things that you would use in a voice command (e.g. insert() or key()). Since there's no context matcher in this `.talon` file the shortcut would be global.

### Overriding existing voice commands

One thing that may not be immediately obvious is that re-using voice commands is perfectly acceptable. You can just create a new `.talon` file with a new context header and redefine the command.

This also provides a simple way of overriding the behaviour of existing voice commands from the knausj\_talon repository. Lets say you wanted to change the behaviour of the `touch` command so that it didn't hide the mouse grid if it was open.

The existing code is in a `.talon` file without a context header called `mouse.talon`:

    touch: 
        mouse_click(0)
        # close the mouse grid if open
        user.grid_close()
            # End any open drags
        # Touch automatically ends left drags so this is for right drags specifically
        user.mouse_drag_end()

We can see the `user.grid_close()` action is called to close the grid after clicking the mouse. Also note the lines starting with '#' characters are called comments. They are just there for documentation and will not be otherwise processed by Talon.

If we wanted to stop the `user.grid_close()` behaviour we could just create a new `.talon` file and put in the following contents:

    os: mac
    -
    touch: 
        mouse_click(0)
            # End any open drags
        # Touch automatically ends left drags so this is for right drags specifically
        user.mouse_drag_end()

Notice that we've given it a context header. Because this context headar is more specific (i.e. it has more rules in it) this implementation of "touch" will take precedence over the original. The implementation just has the `user.grid_close()` line and associated comment removed.

In general you can use this technique by just making a version of the `.talon` file you want to override and putting in more redundant rules to make it the more specific version. In addition to "os: " some other redundant filters you can add are "mode: command" (assuming you want to define the command in the default 'command' mode) and "speech.engine: wav2letter" (assuming you're not using Dragon).

This is a simple way of overriding voice commands using `.talon` files. Many other parts of the system (such as the behaviour of actions) can also be overridden, but this requires editing `.py` files. See the [unofficial docs](/unofficial_talon_docs) for more information.
