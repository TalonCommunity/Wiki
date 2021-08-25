---
sidebar: true
order: 4
---

# Hardware


## Microphones

In case of doubt: Check out the `#hardware` channel in Slack.

Speech recognition will be vastly improved with a better microphone. Compared to webcams and cheap headsets, a good microphone for speech recognition picks up less background noise (improving your experience whenever you're not alone in a silent room) and record a naturally sounding voice.


### Model Recommendations

These are models that Talon community members regularly recommend:

**Blue Yeti Nano (USB 3)**: desktop, affordable and pretty good recognition. Can be attached to an arm. Useful if you're trying out speech recognition for the first time and don't want to spend a lot.

**DPA d:fine 4188 or 4288** with a **DPA d:vice** interface: expensive, but highly recommended for full time use.  It's likely the best in wearing comfort, audio quality and voice isolation (see this [impressive demo from the manufacturer](https://youtu.be/35GvWlRirxI))

**Stenomask**: useful for open plan offices as it covers your mouth.

**XLR Microphones** and **USB XLR Audio interfaces** as a budget-minded alternative to the DPA combo:

* **AKG C 520** (or the _C 520L_ plus the _AKG MPA VL Male_ adapter); compared to the DPA you have to give up significant amount of voice isolation and some wearing comfort and audio quality (a [demo from a singing drummer](https://www.youtube.com/watch?v=cwCea9SIbNg&t=235s)).
* **Audio-Technica Pro 8 HEx**; a long-standing recommendation from [2shea's intro post][whalequench-gettingstarted]; even cheaper still, you lose some more audio quality again, but it is perfectly suitable for use with Talon.
* Suitable audio interfaces are for instance **Sure X2U** (rather compact), **Focusrite Scarlett Solo** (very popular) or the **Behringer U-Phoria UMC22** (a great budget option).
* There are a ton more of brands and models, and many will work just fine.

[whalequench-gettingstarted]: https://whalequench.club/blog/2019/09/03/learning-to-speak-code.html

**Plug-In powered mics**

[The Speechrecsolutions selection guide](https://www.speechrecsolutions.com/MicGuide.htm) lists options at several price-points.  We don't know about each and every model, but you can ask on `#hardware` for some experience report.


### Can this mic maybe work?

Many microphones used by studio professionals and ambitious podcasters will likely work well, but gaming and call-center headsets can be hit or miss.  But beware: While technical specs may suggest issues, on their own they cannot guarantee success!  Generally speaking:

* The mic should have a good frequency response over at least 150 Hz to 16 kHz.
* An omnidirectional microphone will be acceptable in a room without competing voices (other people or media playback).  In other cases, you will likely need a microphone with good background rejection (a cardioid polar pattern is helpful, but not every cardioid mic is the same).
* It should **sound good**.  If you can, listen to samples.  If it sounds bad or muffled or metallic or anything unnatural to you, avoid it.  (The online store [Thomann](https://www.thomann.de/intl/microphones.html) provides samples for many mics.)
* A USB connection is **strongly** recommended over Bluetooth. Bluetooth introduces compression artifacts and latency. Compression reduces the recognition accuracy, and latency will make your computer slow to react.  _BT AptX LowLatency_ is reported by some to work, but usually requires a separate dongle.

Some people do report success with much cheaper microphones, but many also do not.  If you already have one, just try it out, but if not, think twice before buying cheap.

### Windows & Bluetooth Headsets
Windows default drivers have a limitation and that they _cannot_ record and play stereo sound simultaneously. See [this stackoverflow answer](https://superuser.com/questions/978089/simultaneous-use-of-a2dp-and-hfp-bluetooth-profiles) for more details. For this reason, if you want to hear audio while dictating, you _must_ use a wired (or plug in your) headset on Windows. OSX does not have this limitation.

## Eye Tracker

Check out the `#eye-tracking` channel in Slack, and the [Tobii 4c Tips](/tobii_4c_tips) page.

* Tobii 4C is a commonly used and recommended eye tracker, but it is becoming less common as more folks are using the Tobii 5. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.
* [Tobii 5](https://gaming.tobii.com/product/eye-tracker-5/) This is the currently recommended eye tracker, although the Tobii 4C also works just fine. This one does require a one-time initialization on a Windows PC with the Tobii software installed. Check out the dedicated [Tobii 5 page](/tobii_5.md).


### Windows Login plus Talon

Talon and Tobii software clash a bit. But you can keep the Tobii driver installed, and only disable the Tobii service, you can keep using the Tobii as a Windows Hello device (login via facial recognition), even while having the Tobii available for Talon.
