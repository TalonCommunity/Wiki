# Foot Pedals

Foot pedals provide another alternative input method, though they often require intensive customization. The use cases for foot pedals varies and can be unique to a specific workflow, but there are few that are more common: scrolling, muting, and mouse replacement.

The customization for foot pedals is more involved than editing Talon files, and it helps to be familiar with the ctx python api especially for more complex use cases. There are some limitations as well. For example, the foot pedal needs to bind to a key that is not otherwise being used, e.g., some users have used `keypad_divide`, `keypad_multiply`, or `keypad_minus`. Also, some actions don't work well with Talon hotkeys, and `user.vscode` Talon community commands can have timeout issues. To bind pressing two pedals at once, some users have needed to use cron and asyncronous reading of a state dictionary. This is since you cannot press two keys at once without a modifier (and if a modifier like `shift` is pressed, then it simply becomes one key combination, not multiple presses)

- [Olympus RS31H](https://dictation.omsystem.com/product/rs-31h-footswitch/) is used by a few Talon Community members. It has 4 buttons (whereas other options only have 3). Check out this [video demo](https://youtu.be/eysWOhPldFQ) and [blog post](https://liannaee.blogspot.com/2023/03/olympus-rs31h-hardware-with-talon-voice.html)
- [Elgato Stream Deck Pedal](https://www.elgato.com/en/stream-deck-pedal) is natively supported in Talon beta and has 3 buttons.
- [Kinesis Savant Elite 2](https://kinesis-ergo.com/shop/savant-elite2-triple-pedal/) is mechanical and pedals can remap keys at the hardware level. It has 3 buttons.

With the talon beta, the elegato foot pedal can be used as follows:

```talon
deck(pedal_left): print("left pedal")
deck(pedal_middle): print("middle pedal")
deck(pedal_right): print("right pedal")
```

**Linux**: you'll need to give access to the usb devices to the current user, otherwise the stream deck will not be detected:

```bash
sudo sh -c 'echo "SUBSYSTEM==\"usb\", ATTRS{idVendor}==\"0fd9\", TAG+=\"uaccess\"" > /etc/udev/rules.d/70-streamdeck.rules'
sudo udevadm trigger
```
