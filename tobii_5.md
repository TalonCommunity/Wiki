## Tobii 5 Eye Tracker

![Tobii 5 hardware](/media/tobii_5_hardware.png) <!-- .element height="50%" width="50%" -->

### Setup

#### Ubuntu 18.04

- Connect your new Tobii 5c eye tracker via USB to a Windows computer that's connected to the internet. (Note: tested on Windows 10)
- Wndows should bring up the "Tobii Experience" configuration software automatically. This SW should recognize your Tobii 5 hardware and prompt you to start a setup process. You don't actually need to do this.
- Disconnect the tracker from the Windows machine and connect to your Ubuntu machine.
- Start up Talon. It should recognize your new hardware.

#### Mac OS

- Connect Your Tobii 5c to a windows computer. you may hear some USB disconnection noises as the auto installation takes place.
- Download and run the [offline installer](https://help.tobii.com/hc/en-us/articles/360009325857-Installation-or-setup-issues-for-Tobii-Eye-Tracker-5), this should update the Tobii firmware
- Now connect it to your mac and enable eye tracking in the talon menu 
- Run the calibration in talon.

### Also see

- [Tobii 4c tips](/tobii_4c_tips.md)

If you find the control mouse is not accurate enough, try the zoom mouse in the knausj repository.
