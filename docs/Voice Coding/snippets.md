---
sidebar_position: 4
---

# Snippets

Snippets insert text with placeholders such that you can get the next placeholder using the `snip next` command. You insert a snippet by saying `snip {user.snippet}`, where a snippet name can be used in place of {user.snippet}.

[This video](https://www.youtube.com/watch?v=icXH-o3mwTU) demonstrates snippets.

You can find the snippets available for the active programming language with the `help snip` command.

Snippets are further documented in the community snippets folder [README](https://github.com/talonhub/community/blob/main/core/snippets/README.md), which describes the snippet file syntax and useful VSCode extensions for writing snippets.

## Editor Support

Snippets can be inserted directly through the VSCode snippet system if you have the [command server VSCode extension](https://marketplace.visualstudio.com/items?itemName=pokey.command-server) installed. This also lets `snip next` use VSCode's support for getting to the next snippet placeholder.

[Cursorless](https://www.cursorless.org/docs/user/installation/) is required to wrap code in snippets (see the video or read me for details on wrapping with snippets).

## Without Editor Support

Without editor support, `snip next` assumes that the cursor is on the same line as the current snippet placeholder. If you move the cursor to another line first and then use `snip next`, the cursor may be moved to the wrong position.

Community will try to insert snippets manually without editor support. Depending on your editor's settings, inserting a snippet may insert extra delimiters and disrupt indentation. You can set the `user.snippet_raw_text_paste` setting to true to always insert snippets (in contexts without editor support) through pasting, which will get correct formatting in some editors. You can also change the `user.snippet_raw_text_spaces_per_tab` setting to determine how many spaces to use per tab; in most cases, you should set this to -1 to use tabs instead of spaces. Most code editors will automatically expand tabs to spaces when pasting code, if so configured. Note that you should probably adjust these settings on a per-editor basis in a separate [.talon file](../Customization/talon-files.md) for each editor. You might be able to further address some formatting issues from your editor not supporting snippets by using an automatic code formatting extension.
