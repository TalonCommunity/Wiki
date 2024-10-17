# Tobii 4c Eye Tracker

1. If you glance down at Tobii 4c, you should be able to clearly see all the visible red lights: left, center, and right. If you can’t, the Tobii can’t see you very well either!
2. It can be somewhat useful to temporarily load the official Tobii software on Windows, if that’s an option for you. The Tobii software can give you a good feel for proper positioning with the Tobii 4c.
3. [Distance is a very important factor when using the Tobii 4c](https://help.tobii.com/hc/en-us/articles/210250305-Position-in-front-of-the-Tobii-Eye-Tracker). It's difficult to know the "optimal" distance, so the best advice is simply to experiment with different distances.
4. Be sure to recalibrate after significantly adjusting your position, adjusting the Tobii’s position, or if the tracking feels more inaccurate than usual
5. Lighting matters quite a bit. The Tobii 4c works better in a lit room. You also don’t want e.g. sunlight directly beating down on the device
6. Some folks feel the largest useable monitor is 24”, though Tobii claims 27”.
7. Try both the "control mouse" and "zoom mouse" modes out to see which works best for you. [Demo here](https://www.youtube.com/watch?v=PQkJE-rtn-g&feature=youtu.be)
8. For the zoom mouse, tinker with the zoom level of zoom mouse for comfort & less scanning. [See an example of how to adjust these here](https://github.com/talonhub/community/blob/main/plugin/eye_tracking_settings.py)
9. Check the Talon Voice logs for errors:
   1. "talon.track.tobii.EyeCmdErr: Eye Tracker command 0x42e raised error 0x20000502" means Talon Voice cant determine the location of your head or gaze. It could be a problem with tracker position, head position, monitor size, or multiple screens (dont use extended or mirrored screens with Talon).
10. Calibrate your eye tracker in Talon if you change monitors or if your room lighting changes substantially.

### Notes on Control Mouse

The intended use is that you look at the thing you want to click on, then move your head (rotate, tilt, whatever) to put the mouse cursor over the thing, then use some method of clicking (like a voice command or physical button).

Moving your head is an important part of the new Control Mouse - moving your head locks your cursor to the current region until you look to a new part of the screen. This means the cursor will stabilize more when you start moving your head.

The speed at which you move your head has an exponential effect on the speed the mouse moves, so if you move your head very slowly, the mouse will only move a few pixels, but if you move your head very quickly, you can move the mouse by several inches.
