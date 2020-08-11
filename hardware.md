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

Several of us also have success with these:

**AKG C 520** (or the _C 520L_ plus the _AKG MPA VL_ adapter) with an _XLR audio interface_: a cheaper alternative to the DPA solution; you have to give up significant amount of voice isolation and wearing comfort, and some audio quality.  Suitable audio interfaces are for instance _Sure X2U_, _Focusrite Scarlett Solo_ or the _Behringer U-Phoria UMC22_.

Other sites also provide [selection guides](https://www.speechrecsolutions.com/MicGuide.htm) for microphones at several price points.


### Can this mic maybe work?

Many microphones used by studio professionals and ambitious podcasters will likely work well, but gaming and call-center headsets can be hit or miss.  But beware: While technical specs may suggest issues, on their own they cannot guarantee success!  Generally speaking:

* The mic should have a good frequency response over at least 150 Hz to 16 kHz.
* Strongly prefer a **cardioid polar pattern** (to isolate voice and reduce background).  Hypercardioid also works, but might be more difficult to place properly.  An omnidirectional microphone will only be acceptable in a silent room.
* It should **sound good**.  If you can, listen to samples.  If it sounds bad or muffled or metallic or anything unnatural to you, avoid it.  (The online store [Thomann](https://www.thomann.de/intl/microphones.html) provides samples for many mics.)
* A USB connection is **strongly** recommended over Bluetooth. Bluetooth introduces compression artifacts and latency. Compression reduces the recognition accuracy, and latency will make your computer slow to react.

Some people do report success with much cheaper microphones, but many also do not.  If you already have one, just try it out, but if not, think twice before buying cheap.


### Correctly setting up a microphone

a. Check that Talon and the OS are using the correct microphone!
b. Ensure that the microphone is placed a consistent distance away from your mouth. For headset microphones, most speech recognition documentation recommends that you place the boom of the microphone approximately one inch from your face, pointed at a side corner of your mouth. For table microphones, somewhere between six and twelve inches works best (unlike a radio moderator, you do not need to eat the mic).  A proper placement eliminates wind noises from breathing and loud sounds, and points the axis of maximum sensitivity towards your mouth for best voice isolation.
c. Properly adjust the microphone gain.  Your loudest speech voice must neither clip nor be distorted. There is a fast and easy way to get a _good enough_ setting:
  1. Install and start _Audacity_,
  2. set the correct microphone, and
  3. press _Record_, utter a loud "Pah!", and stop the recording.
  4. The peak should be somewhere between -3 to -10 dB.  If not, adjust the gain accordingly, and repeat from 3.
  5. Once this is done, record yourself talking, and listen to the playback: Your voice should now sound clear, and not be much softer than a _calm_ Youtube talk.


## Eye Tracker

Check out the `#eye-tracking` channel in Slack.

* Tobii 4C is the most commonly used and recommended eye tracker. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.
* [Tobii 5](https://gaming.tobii.com/product/eye-tracker-5/) works, but expect improvements in the coming weeks and months.
