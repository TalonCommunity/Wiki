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

## Note that this setting will mean that pop to click works even when Talon is sleeping. To disable pop to click when Talon is asleep, modify modes/sleep_mode.talon with this:  

```
mode: sleep
-
settings():
    #stop continuous scroll/gaze scroll with a pop
	user.mouse_enable_pop_stops_scroll = 0
	#enable pop click with 'control mouse' mode
	user.mouse_enable_pop_click = 0
#this exists solely to prevent talon from walking up super easily in sleep mode at the moment with wav2letter
<phrase>: skip()
```
