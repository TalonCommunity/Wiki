# Miscellaneous Programming Commands Available for Some Languages
If you look in the community lang directory, you will find folders containing support for specific programming languages. In the corresponding .talon file for a programming language, you will see several tags activated. These tags activate part of the general programming grammar. Descriptions of the commands activated by these tags are available below.

This page leaves out functionality that is now better done with [snippets](snippets.md) than the tag based grammer.

## user.code_data_bool
This activates the commands `state true` and `state false` for inserting true and false boolean literals respectively.

## user.code_object_oriented
This activates the commands `state self` for inserting the language equivalent of the keyword for referring to the containing class and `self dot`, which does the equivalent of `state self` and inserting the object accessor operator (which is a dot in most languages). 

## user.code_functions_common
This activates support for quickly calling commonly used functions in the active language. `funk toggle` toggles showing the available common functions. `funk (function name)` will insert the specified function call. `funk wrap (function name)` wraps the currently selected text inside the function call. While the available common functions are being displayed, `funk cell (function number)` and `funk wrap (function number)` can be used for calling a function or wrapping the selected text with a function call using the function number instead of the function name.

## user.code_data_null
This activates commands for dealing with null/none. `state (no | none | nil | null)` inserts the language specific representation of null/none. `is not (none | null)` inserts the language specific inequality comparison operator followed by the representation of null/none. `is (none | null)` inserts the language specific equality comparison operator followed by the representation of null/none. 
