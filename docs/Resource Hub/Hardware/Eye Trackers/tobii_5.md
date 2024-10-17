# Tobii 5 Eye Tracker

![Tobii 5 hardware](/img/tobii_5_hardware.png) <!-- .element height="50%" width="50%" -->

### Setup

Regardless of which OS you will be using when you use your eye tracker, the initial setup requres that the eye tracker be connected to a Windows machine with internet access to complete the setup installation. After the initial setup, the eye tracker can be used on Windows, Mac, or Linux.

- Connect your new Tobii 5c eye tracker via USB to a Windows computer with an internet connection.
- Wndows should bring up the "Tobii Experience" configuration software automatically. This software should recognize your Tobii 5 hardware and prompt you to start a setup process. You don't actually need to do this.
- **If you are using Mac or Linux:** Disconnect the tracker from the Windows machine and connect to your Mac or Linux machine.
- **If you are using Linux:** When first running `run.sh`, Talon does some setup work related to permissions for the eye tracking device. You need to replug the eye tracking device and restart Talon (or of course reboot).
- **If you are using Windows:** Tobii runs three services by default that you will need to disable. Find the Services app by typing "services" in the start menu. Next scroll down until you find the three services that start with the word 'Tobii'. For each of these right click to view Properties and then change "Startup type" to "Disabled". Then either disable each of the services manually or restart your computer. If you'd want to use the Tobii app you can re-enable these at any time.
- Start up Talon. It should recognize your new hardware.
- Enable eye tracking in the Talon menu.
- Run the calibration in Talon.

### Calibration Issues

- If your displays are set up as duplicate (e.g. laptop with monitor plugged in), the calibration will be wonky as it will work off of your laptop's original screen rather than your monitor. Swap to "show only on monitor" temporarily for calibration.
- If the dots show up further away from the top left and right corners of your screen, then Talon is using a smaller part of the screen just above the tracker because your screen is too big for the tracker to reliably calibrate with.

### Next steps

The [Tobii 4c tips](./tobii_4c.md) page has detailed instructions on how to adjust your environment and behaviour to get a better eye tracking experience.
