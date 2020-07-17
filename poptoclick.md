# Pop to click

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
