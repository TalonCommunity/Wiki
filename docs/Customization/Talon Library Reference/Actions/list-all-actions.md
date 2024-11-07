# Complete Action List

To get a complete list of defined actions you can do the following:

1. Right click on the Talon icon in your status bar, choose scripting, and then 'Console (REPL)'. This will open a terminal window where you type Python commands and the result of those commands are printed out.
2. Type `actions.list()` and press enter. This will list out all the available actions.
3. You might like to look at this list of actions in your text editor (so you can search them, for example). To put the full list into your clipboard, copy and paste this code into the terminal window and press enter:

```python
import io;old=sys.stdout;sys.stdout = io.StringIO();actions.list();clip.set_text(sys.stdout.getvalue());sys.stdout = old
```
