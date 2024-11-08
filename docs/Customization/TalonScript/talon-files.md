---
sidebar_position: 3
---

# TalonScript


```````talon
# Comments start with a # sign, and they must always be on their own line.
#
# This part, the context header, defines under which circumstances this file applies.
os: windows
os: linux
app: Slack
app: Teams
# Anything above this (single!) dash is part of the context header.
-
# Anything below the dash is part of the body.
# If there is no dash, then the body starts immediately.

# These define voice commands.
([channel] unread next | goneck): key(alt-shift-down)
insert code fragment:
    # A single command can perform a sequence of actions.
    insert("``````")
    key(left left left)
    # the number of times the key should be pressed can be specified after a colon
    key(shift-enter:2)
    key(up)

# This activates the tag 'user.tabs'.
tag(): user.tabs

# This adjusts settings (within this file's context).
settings():
    key_wait = 1.5
```````

## Context header

Additionally, you can create user `scope`s. `scope`s allow matching on additional arbitrary string information supplied by user scripts. For example you might write a `scope` called `slack_workspace_name`. You'd then be able to make .talon files that only matched a particular Slack workspace by putting a line like 'user.slack_workspace_name: Talon' in the header. See [the scope concept section](../Talon%20Framework/scopes) below for more information.

We've already indicated what requirements and scopes are, so lets move on to the matcher part (on the right of the ':'). This can either be a literal string match like `title: foo` (matching a window whose entire title is 'foo'), or a regular expression. The regular expression engine essentially uses the Python `re.search()` function to see if the value of the requirement or scope matches. So for the `title: /foo/i` example we'd match any window whose title had the string 'foo' in it in a case insensitive manner (due to the 'i' flag). For requirement types that have multiple values (tag and mode), Talon iterates through each active tag or mode and matches the header line if any of those match the regex or string literal.
