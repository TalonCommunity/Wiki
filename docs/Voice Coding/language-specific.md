---
sidebar_position: 5
---

# Miscellaneous Language Specific Commands

The community [lang directory](https://github.com/talonhub/community/tree/main/lang) contains folders implementing support for specific programming languages and programming language features.

`<language>/<language>.talon` files activate one or more tags. These tags enable commands shared across languages with similar features, meaning you have fewer commands to memorize if you code in multiple languages. The behavior of these commands depends on the active programming language. Descriptions of the commands activated by these tags are below.

This page leaves out functionality that is now better done with [snippets](snippets.md) than tag-based commands. For many languages, you will find additional language specific functionality in the `<language>/<language>.talon` and `<language>/<language>.py` files.

## user.code_data_bool

This activates the commands `state true` and `state false` for inserting true and false boolean literals respectively.

## user.code_object_oriented

This activates the commands `state self` for inserting the language equivalent of the keyword for referring to the "self" or "this" object and `self dot`, which does the equivalent of `state self` followed by inserting the object accessor operator (a dot in most languages).

## user.code_functions_common

This activates support for quickly inserting calls to commonly used functions in the syntax of the active language. `toggle funk` toggles showing available common functions with associated numbers. `funk <user.code_common_function>` will insert the specified function call. `funk wrap <user.code_common_function>` wraps the currently selected text inside the function call. While the available common functions are being displayed, `funk cell <number>` and `funk wrap <number>` can be used for calling a function or wrapping the selected text with a function call using the displayed function number instead of its name.

## user.code_data_null

This activates commands for dealing with null/none. `state (no | none | nil | null)` inserts the language specific representation of null/none. `is not (none | null)` inserts the language specific inequality comparison operator followed by the representation of null/none. `is (none | null)` inserts the language specific equality comparison operator followed by the representation of null/none.

## user.code_functions

This activates commands related to types and functions. `type <user.code_type>` inserts the specified data type. For instance when editing Python, saying `type integer` inserts `int`. For languages where a type annotation goes after the variable, `is type <user.code_type>` inserts the type annotation for the specified data type. For languages where a return type annotation is put somewhere after the function name, `returns [type] <user.code_type>` inserts a function return type notation for the specified data type.

## user.code_keywords

This activates support for dictating language keywords. `put <user.code_keyword>+` inserts the specified keywords. Keywords in the `user.code_keyword_unprefixed` list can be dictated without the put prefix. You can see the contents of the prefixed and unprefixed keyword lists for the active language with the commands `help keywords` and `help keywords unprefixed` respectively.

# Navigating the Language Directory Structure

While not strictly necessary for voice coding with community, understanding the directory structure is useful to discover functionality and when extending language support. Each subdirectory of the `lang` directory corresponds to a programming language, except for `tags`, which includes voice commands intended to be used across multiple languages. To understand the Talon concepts discussed in this section, please read the [Talon framework](/Customization/Talon%20Framework/talon-framework-overview) documentation.

## The `tags` Subdirectory

The .talon files in this directory define commands that become available when the tag at the top of the file is activated. Languages can activate these tags in their .talon file to make these commands available. The .py files in this directory declare the actions that need to be implemented in a per-language context in Python to make these commands actually useful. The .py files additionally declare lists and settings that can be defined on a per-language basis.

This structure allows defining generic commands, actions, and lists that can be relied on as long as the active programming language provides implementations. For instance, a user could use the following talon file to allow dictating a type name followed by a space:

```talon
tag: user.code_functions
-
strut <user.code_type>: '{code_type} '
```

If you look at the tags activated by a language's .talon file, you can find the corresponding commands activated by looking for that tag in the `tags` directory. You can find the corresponding action signatures there and see how they are implemented in the language's .py file.

## Understanding language specific .py files

Languages differ in how much support they have implemented. The following describes things you may find there.

There is usually an `Operators` object defining the operators that can be inserted.

There might be language specific actions, lists, and captures defined on a `Module` object.

Language specific implementations of generic functionality will be defined on a `Context` object.
