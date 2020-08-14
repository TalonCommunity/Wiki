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
* Strongly prefer a **cardioid polar pattern** (to isolate voice and reduce background).  An omnidirectional microphone will only be acceptable in a silent room.
* It should **sound good**.  If you can, listen to samples.  If it sounds bad or muffled or metallic or anything unnatural to you, avoid it.  (The online store [Thomann](https://www.thomann.de/intl/microphones.html) provides samples for many mics.)
* A USB connection is **strongly** recommended over Bluetooth. Bluetooth introduces compression artifacts and latency. Compression reduces the recognition accuracy, and latency will make your computer slow to react.

Some people do report success with much cheaper microphones, but many also do not.  If you already have one, just try it out, but if not, think twice before buying cheap.


### Correctly setting up a microphone

1. Check that Talon and the OS are using the correct microphone!
2. Ensure that the microphone is pointed at the mouth: This points the axis of maximum sensitivity towards your mouth for best voice isolation (reducing background noise).  Some microphones require a much more careful placement than others.  Be sure to find the sweet spot!
3. Place it a consistent distance away from your mouth.  For headset microphones, most speech recognition documentation recommends that you place the boom of the microphone approximately one inch from your face, pointed at a side corner of your mouth. For table microphones, somewhere between six and twelve inches works best (unlike a radio moderator, you do not need to eat the mic).  A proper placement eliminates wind noises from breathing and loud sounds.
4. Properly adjust the microphone gain.  Your loudest speech voice must neither clip nor be distorted. There is a fast and easy way to get a _good enough_ setting:
  1. Install and start _Audacity_,
  2. set the correct microphone, and
  3. press _Record_, utter a loud "Pah!", and stop the recording.
  4. The peak should be somewhere between -3 to -10 dB.  If not, adjust the gain accordingly, and repeat from 3.
  5. Once this is done, record yourself talking, and listen to the playback: Your voice should now sound clear, and not be much softer than a _calm_ Youtube talk.



## Eye Tracker

Check out the `#eye-tracking` channel in Slack.

* Tobii 4C is the most commonly used and recommended eye tracker. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.
* [Tobii 5](https://gaming.tobii.com/product/eye-tracker-5/) works, but expect improvements in the coming weeks and months.
