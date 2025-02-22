# Turn off listening on start up

:::docoscope platform

:::

To put Talon in sleep mode when you start the app (and typically your computer), create a python file in your user directory (e.g. `sleep.py`) and put in the following contents:

```python
from talon import app, actions

def disable():
    actions.speech.disable()

app.register("ready", disable)
```
