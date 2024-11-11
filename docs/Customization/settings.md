---
sidebar_position: 35
---

# Settings

Talon's behavior can be changed by changing the value of settings within a `.talon` file inside a `settings():` block.

```talon
# Example talon file
settings():
    # Enable the Talon mode indicator
    user.mode_indicator_show = true
```

:::tip

Talon settings can be applied from any `.talon` file in the user directory, regardless of the filename or location.

:::

:::warning need to fix

The community user file set read me says something different, that there is a single settings file...
Several options are configurable via a `single settings file` out of the box. Any setting can be made context specific as needed (e.g., per-OS, per-app, etc).

:::

:::important

If the same setting is defined multiple times, Talon will use the setting value in the `.talon` file with the most specific context match.

:::

## Community Settings

| Setting                              | Example Value | Description                                                                                                                                             |
| ------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user.file_manager_auto_show_pickers  | false         | If `true`, automatically show the picker GUI when the file manager has focus                                                                            |
| user.help_max_command_lines_per_page | 50            | Set the number of command lines to display per help page                                                                                                |
| user.help_max_contexts_per_page      | 20            | Set the number of contexts to display per help page                                                                                                     |
| user.mouse_continuous_scroll_amount  | 80            | Set the scroll amount for continuous scroll/gaze scroll                                                                                                 |
| user.mouse_enable_pop_stops_scroll   | true          | If `true`, stop continuous scroll/gaze scroll with a pop                                                                                                |
| user.mouse_enable_pop_click          | 1             | Choose how pop click should work in 'control mouse' mode (0 = off, 1 = on with eyetracker but not zoom mouse mode, 2 = on but not with zoom mouse mode) |
| user.mouse_enable_hiss_scroll        | false         | If `true`, use a hissing noise to scroll continuously                                                                                                   |
| user.mouse_hide_mouse_gui            | false         | If `true`, hide the continuous scroll/gaze scroll GUI                                                                                                   |
| user.mouse_wake_hides_cursor         | false         | If `true`, hide the cursor when enabling zoom mouse                                                                                                     |
| user.mouse_wheel_down_amount         | 120           | Set the amount to scroll up/down                                                                                                                        |
| user.mouse_wheel_horizontal_amount   | 40            | Set the amount to scroll left/right                                                                                                                     |
| user.grids_put_one_bottom_left       | true          | If `true`, start mouse grid numbering on the bottom left (vs. top left)                                                                                 |
| user.command_history_display         | 10            | Set the default number of command history lines to display                                                                                              |
| user.command_history_size            | 50            | Set the total number of command history lines to display                                                                                                |
| user.mode_indicator_show             | false         | Enable the mode indicator                                                                                                                               |
| user.mode_indicator_x                | 1             | X Position for the mode indicator when it is enabled                                                                                                    |
| user.mode_indicator_y                | 0             | Y Position for the mode indicator when it is enabled                                                                                                    |
| user.listening_timeout_minutes       | 3             | Puts Talon into sleep mode if no commands are spoken for a defined period of time.                                                                      |

:::note Python Programmers

To add your own additional custom settings for changing Talon behavior, see [the settings customization page](./Python%20Programming/Talon%20Framework/custom_settings.md)

:::

## Core Talon Settings

| Setting         | Example Value | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| imgui.scale     | 1.5           | Adjust the scale of all imgui-based windows (help, history, etc). This is simply a scale factor, 1.3 = 130%.windows                                                                                                                                                                                                                                                                           |
| imgui.dark_mode | false         | If `true` enable dark mode for talon imgui menus (used for help menus in community)                                                                                                                                                                                                                                                                                                           |
| insert_wait     | 0             | Increase this if characters seem to be jumbled in a specific app when typing whole sentences. Default is 0.                                                                                                                                                                                                                                                                                   |
| key_hold        | 16            | Increase this if you're playing a game and some keys aren't registering at all. You should probably increase it in 16ms increments, e.g. set it to 16ms or 32ms.                                                                                                                                                                                                                              |
| key_wait        | 1             | Increase this if modifier keys are getting dropped or if key presses are misbehaving even with the other two settings (`insert_wait` and `key_hold`) tuned. `key_wait` should be the last resort because it results in the slowest overall keypress rate. Default is 1.0 in milliseconds.                                                                                                     |
| speech.engine   |               | Determines which [speech engine](/docs/Resource%20Hub/Speech%20Recognition/speech%20engines.md) talon uses to recognize input. This is useful for configuring dictation mode to use a different speech engine; for example, 'webspeech'.                                                                                                                                                      |
| speech.timeout  |               | This determines how long a pause Talon waits for before deciding you've finished speaking and interpreting what you've just said as a sequence of commands. This parameter is generally very important; for example, it determines the amount of time you can pause between saying 'phrase' and the following phrase. It is measured in seconds; the default is 0.300, i.e. 300 milliseconds. |

## Complete List of Settings

You can paste the following code into the [REPL](/docs/Resource%20Hub/Troubleshooting/debugging.md#repl) to see a full list of available settings: 

```
settings.list()
```
