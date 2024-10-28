# Managing Customizations

Talon is built to be a flexible and customizable system. This means that in addition to being able to add new voice commands you can also override the behavior of existing commands reasonably easily.

Given this flexibility there are two ways you could approach customizing your Talon setup:

- Option A: Edit the `.talon` and `.py` files from the [Talon Community](https://github.com/talonhub/community) directly.
  - Can be easier to begin with, but may be difficult to keep up-to-date with upstream.
  - You need to work out what you modified and how to re-apply it to the [Talon Community](https://github.com/talonhub/community) user file set every time you update it.
- Option B: Maintain your own separate directory with your customizations that sits alongside the [Talon Community](https://github.com/talonhub/community). (**Recommended**)
  - The screenshot below shows a Talon user directory with multiple user file sets. The `community` directory contains the [Talon Community](https://github.com/talonhub/community) unchanged from the version on Github. The rest of the folders are other file sets that supplement the Talon Community file set.
  - For example, `my_talon` contains personal customizations, and `curserless-talon` contains the [Cursorless](https://github.com/cursorless-dev/cursorless).

![Screen shot of Talon user directory](/img/talon_user_folders.png)

## Refreshing Your Local Copy of the Community User File Set

You will probably want to update your Talon Community user file set occasionally in order to pick up new features and bug fixes.

Unfortunately changing Talon Commmunity may also sometimes add new bugs! If this happens you might want to go back the older version so you can keep working. Use `git` if you are familiar, and if you're not, then just making a `.zip` backup of the whole Talon user directory prior to making a potentially significant change also works.

## Overriding Existing Voice Commands and Lists

### Voice Commands

A key feature of Talon is its high level of customizability.
You can add new words and voice commands into new .talon files which can be placed anywhere underneath the [Talon User Directory](/docs/Resource%20Hub/terminology.md#talon-user-directory).
To simplify file management it is recommended that your files are kept in a separate directory to where you installed the [Talon Community User File Set](/docs/Resource%20Hub/terminology.md#talon-community-user-file-set).
Doing this means that you can obtain the latest version of the community file set without worrying about overwriting any of your personal customizations.

This is easy enough for new words and voice commands, and a similar method can also be used for overriding existing voice commands.
The difference being that you need to indicate to Talon to make use of your definitions rather than the standard community defined ones.

### Overriding Cleanly

Start off by copying the community defined file to your [personal talon directory](/docs/Resource%20Hub/terminology.md#personal-talon-directory).
Note that your personal file will need to be complete and include all entries from the community defined file relevant to you.
That is, the content of your file will be used by Talon instead of the community defined file, and not as an extension to it.

Apart from making any customizations to the list, you will also need to add an extra rule into the context header.

For example, the community defined `letter.talon-list` has the context header:

```talon
list: user.letter
-
```

You could set the context header of your file to:

```talon
list: user.letter
language: en
-
```

:::info How This Works

We take advantage of the way Talon determines priority - it chooses the implementation that is in the file with the most specific context header
(i.e. the one with the most rules in it).

:::

### Example - Overriding the `Touch` Command

Lets say you wanted to change the behaviour of the `touch` command so that it didn't hide the mouse grid if it was open.

The community code is in a `.talon` file without a context header called `mouse.talon`:

```talon
touch:
    mouse_click(0)
    # close the mouse grid if open
    user.grid_close()
    # End any open drags
    # Touch automatically ends left drags so this is for right drags specifically
    user.mouse_drag_end()
```

We can see the `user.grid_close()` action is called to close the grid after clicking the mouse. Also note the lines starting with '#' characters are called comments. They are just there for documentation and will not be otherwise processed by Talon.

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

Notice that we've given it a context header. Because this context headar is more specific (i.e. it has more rules in it) this implementation of "touch" will take precedence over the original. The implementation just has the `user.grid_close()` line and associated comment removed.

In addition to `language: en` and `os: ` examples, another redundant filter you can add is `mode: command` (assuming you want to define the command in the default 'command' mode).

This is a simple way of overriding voice commands using `.talon` files. Many other parts of the system (such as the behaviour of actions) can also be overridden, but this requires editing `.py` files.

### Example - Overriding the Names of the Modifier Keys

You can override Talon lists by creating a new `.talon-list` file of your own, rather than changing the existing list in the repository.

This reduces how much manual `git merge`-ing you'll have to do in the future, when you go to merge new versions of this repository (colloquially called "upstream") with your local changes. This is because _new_ files you create will almost never conflict with upstream changes, whereas changing an existing file (especially hot spots, like commonly-customized lists) frequently do.

Your override files can even live outside of the `community` repository (anywhere in the Talon user directory), if you prefer, further simplifying merging.
To do so, simply create a `.talon-list` file with a more specific [context header](https://talon.wiki/Customization/talon-files#context-header) than the default. (For example, `lang: en` or `os: mac` main). Talon ensures that the most specific header (your override file) wins.

For example, to override `user.modifier_key`, you could create a new file `modifier_keys_MYNAME.talon`:

```talon
list:  user.modifier_key
language: en
-

# My preferred modifier keys
rose: cmd
troll: control
shift: shift
alt: alt
```

### Limitations

The method described above works for both `.talon` and `.talon-list` files, as they both start with a context header.

However, some lists with multiple spoken forms/alternatives are instead provided as CSV files. As these file types do not contain a context header,
the above technique will not work.

You can customize common Talon list and CSV files with voice commands: say the word `customize` followed by `abbreviations`, `additional words`, `alphabet`, `homophones`, `search engines`, `Unix utilities`, `websites` or `words to replace`. These open the file in a text editor and move the insertion point to the bottom of the file so you can add to it.

You can also add words to the vocabulary or replacements (words_to_replace) by using the commands in `[edit_vocabulary.talon](core/vocabulary/edit_vocabulary.talon)`.

Note however that the `customize` command always modifies your local copy of the talon community user file set files.

Also note that some are in the `settings` folder and are not created until you launch Talon with `community` installed.
