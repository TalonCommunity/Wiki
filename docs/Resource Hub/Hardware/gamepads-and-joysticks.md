# Gamepads & Joysticks

With gamepad support in Talon you can recieve input from gamepads and/or joysticks. To check if your gamepad works with Talon, view the log after startup and look for a message after all the user scripts are read in. It should display something like `INFO Gamepad Attach: $CONTROLLER_ID ($CONTROLLER_NAME)` Gamepad input is particularly useful since it doesn't require you to use a hotkey (Pressing a different key from a Talon hotkey is often error prone, since the key is still held down while the other is pressed). Additionally, gamepads like the [Logitech Adaptive Gaming Kit and the Xbox Adaptive Controller](https://www.logitechg.com/en-us/products/gamepads/adaptive-gaming-kit-accessories) are useful ways to add physical buttons to your setup that don't require fine motor control.

Gamepad presses can be captured in .talon files similar to key presses

```talon
gamepad(dpad_up):           print("dpad_up")
gamepad(dpad_down):         print("dpad_down")
gamepad(east):              print("east/B")
gamepad(south):             print("south/A")
```

A helpful list of all the other gamepad buttons with an associated gamepad button tester written Andreas Arvidsson can be found [here](https://github.com/AndreasArvidsson/andreas-talon/tree/master/plugins/gamepad_tester). This Talon script can help you set up your controller inputs.

### Custom Gamepads

Custom gamepads can be useful for creating your own foot pedal or alternate input methods. If you have experience with Arduino or Raspberry Pi programming, you can take advantage of many types of sensors that don't require hand usage.

On Windows, for your controller to work with Talon it must support XInput (most modern controllers that mimic an Xbox controller do). If you are using an old/abnormal controller or a custom arduino device, you will likely need to use a tool like [XOutput](https://github.com/csutorasa/XOutput) to remap DirectInput to XInput. This also allows you to remap keys from the default output to a particular desired button or stick on a standard Xbox controller.

On Linux if you are using a custom controller you may need to set the `SDL_GAMECONTROLLERCONFIG` environment variable before launching Talon. Otherwise even though the controller may be recognized, it may be the case that no input will be captured. This environment variable specifies the proper mapping between the unmapped hardware button press and the corresponding controller button. The [SDL2 Gamepad Tool by General Arcade](https://generalarcade.com/gamepadtool/) can automatically generate the mappings for this environment variable. Make sure to place this environment variable in your shell such that it is set by default on login and in any subshells.
