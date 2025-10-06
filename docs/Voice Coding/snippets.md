---
sidebar_position: 4
---

# Snippets

Snippets insert text with placeholders. Jump to the next placeholder using the `snip next` command. Insert a snippet by saying `snip {user.snippet}`, where \{user.snippet\} is a snippet name.

[This video](https://www.youtube.com/watch?v=icXH-o3mwTU) demonstrates snippets.

You can find the snippets available for the active programming language with the `help snip` command.

Snippets are further documented in the community snippets folder [README](https://github.com/talonhub/community/blob/main/core/snippets/README.md), which describes the snippet file syntax and useful VSCode extensions for writing snippets.

## Editor Support

Snippets can be inserted directly through the VSCode snippet system if you have the [command server VSCode extension](https://marketplace.visualstudio.com/items?itemName=pokey.command-server) installed. This also lets `snip next` use VSCode's support for getting to the next snippet placeholder.

[Cursorless](https://www.cursorless.org/docs/user/installation/) is required to wrap code in snippets (see the video or read me for details on wrapping with snippets).

## Without Editor Support

Without editor support, `snip next` assumes that the cursor is on the same line as the current snippet placeholder. If you move the cursor to another line first and then use `snip next`, the cursor may be moved to the wrong position.

Community will try to insert snippets manually without editor support. Depending on your editor's settings, inserting a snippet may insert extra delimiters and disrupt indentation. You can set the `user.snippet_raw_text_paste` setting to true to always insert snippets (in contexts without editor support) through pasting, which will get correct formatting in some editors. You can also change the `user.snippet_raw_text_spaces_per_tab` setting to determine how many spaces to use per tab; in most cases, you should set this to -1 to use tabs instead of spaces. Most code editors will automatically expand tabs to spaces when pasting code, if so configured. Note that you should probably adjust these settings on a per-editor basis in a separate [.talon file](../Customization/talon-files.md) for each editor. You might be able to further address some formatting issues from your editor not supporting snippets by using an automatic code formatting extension.

## Snippet Actions

The community snippet actions can be useful for custom commands.

`user.insert_snippet` takes the body of a snippet as its argument and inserts the snippet. The following example uses this action to insert a c++ static cast operation. This does not require defining a snippet inside a snippet file. Example:

```talon
static cast: user.insert_snippet("static_cast<$1>($0)")
```

`user.insert_snippet_by_name` takes the name of a snippet as its first argument and a dictionary of substitutions as an optional second argument. This can be used to insert snippets defined in .snippet files using the names from the `name: ` field. Example:

```talon
return: user.insert_snippet_by_name("returnStatement")
```

The substitution dictionary for the second argument can be used to replace snippet stops programmatically before inserting a snippet. The following example shows replacing the `$1` and `$0` snippet stops programmatically. The dictionary maps the stop names to their string replacements. You omit the $ in the stop names.

```python
	def code_insert_function(text: str, selection: str):
        substitutions = {"1": text}
        if selection:
            substitutions["0"] = selection
        actions.user.insert_snippet_by_name("functionCall", substitutions)
```

The `user.insert_snippet_by_name_with_stop_at_end` action is the same as the `user.insert_snippet_by_name` action but adds a final snippet stop at the end of the snippet before insertion unless the snippet already ends with a final stop. This is the default action used by community for inserting snippets by name with the `snip {user.snippet}` command. Note that when defining snippets, spaces at the end of a line gets removed, which means that if you want a final stop to get added after spaces at the end of a line, that will not work.

The `user.insert_snippet_by_name_with_phrase` action takes 2 arguments: the name of the snippet to insert and then a phrase. This is used when inserting snippets that can take a phrase argument, such as `snip funk` using the dictated phrase as the function name. 

The `user.insert_snippet_by_name_with_phrase_and_stop_at_end` action does the same thing as `user.insert_snippet_by_name_with_phrase` but adds a final stop at the end of the snippet before insertion unless the snippet already ends with a final stop. 

The `user.move_cursor_to_next_snippet_stop` action moves the cursor to the next snippet stop.