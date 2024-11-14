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

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `^microphone show$` | shows a list of available microphones       |
| `^microphone pick <number_small>$` | selects the active microphone as specified by the number    |
| `^microphone close$`  |  |

<img src="/img/command_mode/microphone_selection.png/"
    alt="screenshot of the microphone selection panel"
/>

## Talon Command History

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `command history` | shows a panel with the recent commands recognized by talon      |
| `command history close` |   |
| `command history clear` |   |
| `command history less` |   |
| `command history more` |   |

The maximum number of commands in the history is configured by the `user.command_history_size` [setting](/docs/Customization/settings.md).

<img src="/img/command_mode/command_history.png/"
    alt="screenshot of the command history panel"
/>

:::docofeedback

Is there a more accurate phrase then "...commands recognized by talon"?
The history shown includes phrases said within dictation mode.

:::

:::docofeedback

It may be beneficial to have a section on privacy.
A person using talon may not be familiar with the command history feature, and therefore not realize that the last fifty commands
would be viewable by someone else.

Also to highlight the vulnerability caused by the talon platform's open nature and how it runs everything under the
talon user folder.  for example, that there is nothing stopping someone from adding a python file that performs a
`speech_system.register("phrase", on_phrase)` and logs everything or sends everything to the cloud...

Is there any mechanism in talon beta to lock things down?

:::

## Miscellaneous Talon Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `command history` | show the command history         |
| `talon open log`  | open the talon log for debugging |

