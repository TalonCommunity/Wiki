The knausj repo by default setting for using the 'pop' sound to enact a mouse click is enabled only while Tobii eyetracking's control mouse is active.  

To enable pop to click anytime, modify code/mouse.py and modify lines 190-194 to the following:


```def on_pop(active):
    if (gaze_job or scroll_job):
        if settings.get("user.mouse_enable_pop_stops_scroll") >= 1:
            stop_scroll()
    else:
        if settings.get("user.mouse_enable_pop_click") >= 1:
            ctrl.mouse_click(button=0, hold=16000)
```
