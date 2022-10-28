# Hardware


## Microphones

If in doubt, check out the `#hardware` channel in Slack.

Speech recognition will be vastly improved with a better microphone. Compared to webcams and cheap headsets, a good microphone for speech recognition picks up less background noise (improving your experience whenever you're not alone in a silent room) and will be better at recording a natural-sounding voice.


### Model Recommendations

These are models that Talon community members regularly recommend:

**Blue Yeti Nano (USB 3)**: desktop, affordable and pretty good recognition. Can be attached to an arm. Useful if you're trying out speech recognition for the first time and don't want to spend a lot.

**Samson Q9u**: a step up from the Blue Yeti, but still affodable desktop mic that can be operated as either USB and XLR.

**DPA d:fine 4188 or 4288**: expensive, but highly recommended for full time use.  It's likely the best in wearing comfort, audio quality and voice isolation (see this [impressive demo from the manufacturer](https://youtu.be/35GvWlRirxI)). The DPA mic can be paired with either (i) a **Shure X2U** + microdot to XLR adapter or (ii) a **DPA d:vice** interface. (i) will be cheaper, but a bit less portable, than the latter; (i) does however have a live monitor (you can plug in headphones and hear the computer audio mixed with your voice), whereas (ii) doesn't. 

**Audio-Technica BP894**: a much more budget-friendly alternative to the DPA microcapsule microphones above, but still excellent comfort, quality, and voice isolation. This model has been discontinued in favor of the BP894x so there are some great deals to be had ($100-300 (depending if you want to make it wireless). Check out #BP894_fan_club on Slack for tips on picking the right termination and adapter for your needs. 

**Stenomask**: useful for open plan offices as it covers your mouth.

**XLR Microphones** and **USB XLR Audio interfaces** as a budget-minded alternative to the DPA combo:

* **AKG C 520** (or the _C 520L_ plus the _AKG MPA VL Male_ adapter); compared to the DPA you have to give up significant amount of voice isolation and some wearing comfort and audio quality (a [demo from a singing drummer](https://www.youtube.com/watch?v=cwCea9SIbNg&t=235s)).
* **Audio-Technica Pro 8 HEx**; a long-standing recommendation from [2shea's intro post][whalequench-gettingstarted]; even cheaper still, you lose some more audio quality again, but it is perfectly suitable for use with Talon.
* Suitable audio interfaces are for instance **Shure X2U** (rather compact), **Focusrite Scarlett Solo** (very popular) or the **Behringer U-Phoria UMC22** (a great budget option).
* There are a ton of other brands and models, and many will work just fine.

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

* Tobii 4C is a commonly used and recommended eye tracker, but it is slowly being superceded as the default as more folks are starting to use the Tobii 5. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.
* [Tobii 5](https://gaming.tobii.com/product/eye-tracker-5/) is the newer model and may be easier to find than the 4C. This one does require a one-time initialization on a Windows PC with the Tobii software installed. Check out the dedicated [Tobii 5 page](/tobii_5.md).


### Windows Login plus Talon

Talon and Tobii software clash a bit. But you can keep the Tobii driver installed, and only disable the Tobii service, you can keep using the Tobii as a Windows Hello device (login via facial recognition), even while having the Tobii available for Talon.
