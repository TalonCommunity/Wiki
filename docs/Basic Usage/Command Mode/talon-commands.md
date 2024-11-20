# Talon Commands

## Customize Talon

These commands will open up a CSV or [Talon list](/docs/Customization/Data%20Files/talon_lists.md) file in your default text editor that you can edit to customize voice commands without needing to write Talon scripts.

| Command                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `customize additional words` | add additional words that Talon will recognize    |
| `customize words to replace` | remap or reformat words that Talon will recognize |
| `customize alphabet`         | change the default Talon alphabet                 |
| `customize websites`         | add websites that can be opened with Talon        |

## Changing the Active Microphone

| Command                            | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| `^microphone show$`                | shows a list of available microphones                    |
| `^microphone pick <number_small>$` | selects the active microphone as specified by the number |
| `^microphone close$`               |                                                          |

<img src="/img/command_mode/microphone_selection.png/"
    alt="screenshot of the microphone selection panel"
/>

## Talon Command History

| Command                 | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `command history`       | shows a panel with the recent commands recognized by talon |
| `command history close` |                                                            |
| `command history clear` |                                                            |
| `command history less`  |                                                            |
| `command history more`  |                                                            |

The maximum number of commands in the history is configured by the `user.command_history_size` [setting](/docs/Customization/settings.md).

<img src="/img/command_mode/command_history.png/"
    alt="screenshot of the command history panel"
/>

:::note More than Just Commands

Although this he is called `command history`, it does include other talon items.
For example, the history shown includes phrases said within dictation mode.

:::

## Miscellaneous Talon Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `talon open log`  | open the talon log for debugging |
