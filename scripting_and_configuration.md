---
sidebar: true
order: 3
---
# Scripting and Configuration
## Pop to click

By default, the knausj repo allows using the 'pop' sound to enact a mouse click only while Tobii eyetracking's control mouse is active.
To enable pop to click with or without Tobii, edit code/mouse.py and modify lines 190-194 to the following:

```python
def on_pop(active):
    if (gaze_job or scroll_job):
        if settings.get("user.mouse_enable_pop_stops_scroll") >= 1:
            stop_scroll()
    else:
        if settings.get("user.mouse_enable_pop_click") >= 1:
            ctrl.mouse_click(button=0, hold=16000)
```
Previously, pop to click would continue to work when Talon was asleep, but a [recent PR](https://github.com/knausj85/knausj_talon/pull/164) changed the behavior to turn off pop to click when Talon is asleep.

*NOTE* If you use knausj, please be sure to not also use noise.py from another place like the talon examples repo!

## Activating your language

If talon is scripted to support your language, activating language support is as easy as focusing a file with the correct extension. For example, opening a file with the extension `.ts` will enable TypeScript support.

If for some reason you are not in a file with the correct extension, you can manually activate the language with the commands defined in **modes/modes.talon**. For example, to activate TypeScript support say the command `force type script`. This will activate the correct mode for as long as you want until you say the command `clear language modes`.

### Where are my languages defined?
There are some commands that are defined at a high level for all programming languages. 

Common language commands are defined as below: 

|File|Purpose|
|---|---|
|lang/programming.talon|Commands for functions, loops, and other common control structures |
|lang/operators.talon|Commands for logical, bitwise, and other common operators|
|lang/comment.talon|Commands for comments|


The functionality for the common commands is implemented in each language-specific script, for example TypeScript support is defined in **lang/typescript.talon**.

Any language-specific commands are also defined in the language-specific script, for example **lang/typescript.talon**.

### Some command examples

Some examples of high-level programming concepts that are implemented in TypeScript are given below. See **lang/programming.talon** and **lang/typescript.talon** for more high-level commands.

|Command|Output (TypeScript, as example)|
|---|---|
|state class|`class `|
|state if|`if ()`|
|funky foo|`private foo()`|
|pro funky foo|`protected foo()`|
|pub funky foo|`public foo()`|

Some examples of language-specific commands defined in TypeScript are given below. See **code/typescript.talon** for more language-specific commands. 

|Command|Output (TypeScript as example)|
|---|---|
|state const|`const `|
|state let|`let `|
|funky var|`var `|
|state map|`.map()`|
|state spread|`...`|
