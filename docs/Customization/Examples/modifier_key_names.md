# Overriding the Names of the Modifier Keys

You can override Talon lists by creating a new `.talon-list` file of your own, rather than changing the existing file in the repository.

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
