---
sidebar: true
order: 5
---

# Troubleshooting


## Nothing Happens When I Speak

If you are testing your setup with one of the [basic commands](/getting_started#basic-usage) and getting no response at all, first check a few fundamentals to help focus the troubleshooting. There are a number of issues at different layers of the setup that could be causing the problem. Your first few steps should help narrow the focus.


### Check Your Microphone

Your microphone is critical to your setup. If your microphone isn't working, then none of your voice commands will either. Testing this piece early may save you some time and help narrow down your troubleshooting to either hardware (microphone, audio interface, cables, etc) or software (talon, talon configuration, speech engine, etc).

Check that your computer is using the correct microphone and receiving sound input.

<details>
<summary role="button">Mac</summary>
<p>
Open System Preferences > Sound > Input. Check that the correct input device is selected and speak into the microphone. Watch the Input level as you speak; you should see the level rising and falling.
</p>
<img src="/media/sound_input_mac.gif"
     alt="gif of sound input window in system preferences on a Mac with input level moving"
 />
</details>

<details>
<summary role="button">Windows</summary>
<p>
Select Start > Settings > System > Sound. In Sound settings, go to Input > Test your microphone. Verify that the correct input device is selected and speak into the microphone. Look for a blue bar that should rise and fall as you speak.
</p>
</details>

If you are not receiving any sound input, check your ancillary microphone equipment (cables, interfaces, preamps, etc.).

* Check your cables and connections.
* Check your adapters and/or audio interfaces if you are using them. Examples: Shure X2U XLR-to-USB signal adapter or the DPA d:vice mobile audio interface. Check that they are connected properly and check any settings on the device, e.g., volume, gain, etc.
* Ensure your microphone is not muted.
* Ensure that the microphone is pointed at the mouth. This points the axis of maximum sensitivity toward your mouth for best voice isolation (reducing background noise). Some microphones require more careful placement than others.
* Place the microphone at a consistent distance away from your mouth. For headset microphones, most speech recognition documentation recommends that you place the boom of the microphone approximately one inch from your face, pointed at a side corner of your mouth. For table microphones, somewhere between six and twelve inches works best (unlike a radio moderator, you do not need to eat the mic).  A proper placement eliminates wind noises from breathing and loud sounds.


### Check that Talon is Running

After you have started the Talon application, look for the Talon icon in the menubar. 

<details>
<summary role="button">Mac</summary>
<p>
Talon's icon should show up in the menu bar in the upper right corner of your screen:
</p>
<img src="/media/talon_icon_menubar.png"
     alt="screenshot of the desktop on a mac showint the talon icon in the top right menubar"
 />
</details>


### Check that Talon is using the Correct Microphone

You can check that Talon is using the correct microphone by clicking the Talon icon in the menu bar.

<details>
<summary role="button">Mac</summary>
<p>
Talon's icon should show up in the menu bar in the upper right corner of your screen:
</p>
<img src="/media/talon_menu_microphone.png"
     alt="screenshot of the desktop on a mac showing the talon microphone menu"
 />
</details>

You can also check which which microphone is selected by looking in the talon logs, which are located in `~/.talon/talon.log`. Look for a log that looks like this:

`2020-03-04 15:27:53  INFO Activating Microphone: "Yeti Nano Analogue Stereo"`

If it's the wrong one, use the menu in the app tray to change it.


## Talon seems to do the wrong thing


### Check the Quality of the Sound Input

If your computer is receiving sound input, that doesn't necessarily mean the sound is of good quality. To confirm the sound quality, make a recording of yourself saying Talon commands and play it back. There should be no distortion of the sound and it should be at an optimum volume (not too loud, not too quiet). If you hear any distortion or the volume seems too low or high, check the microphone [gain](/troubleshooting#check-the-gain).


### Check the Gain

If you are new to using microphone equipment and are not familiar with microphone gain, check out this podcasting blog [What is microphone gain?](https://podcastarticles.com/what-is-microphone-gain/). In simple terms, gain is the *input* volume of your audio. If the gain is too low, the audio will sound very quiet and Talon may cut you off or hear you at all. If the gain is too high, then sound may get distorted by [clipping](https://youtu.be/8Px0UReBI60) and Talon may not understand your commands.

One way to test your gain settings is to make an audio recording and listen to how it sounds. The sound should not be overly quiet nor should it sound like you are shouting. Listen for clipping distortions and reduce the gain until there are no distortions.

One tool to make a recording is [Audacity](https://www.audacityteam.org), a free and open-source audio editor and recorder that supports Windows, macOS, GNU/Linux. To make a recording with Audacity:

1. Install and start _Audacity_,
2. set the correct microphone, and
3. press _Record_, utter an upbeat "Hello there!", and stop the recording.
4. Listen to the playback: Your voice should sound clear. If it's too low, increase the gain, if it's distorted, reduce it.

Some audio recording software may also provide visual feedback about whether your gain is at the right level. Look for waveforms that react to your voice. The waveforms should be as big as possible without maxing out.

Each microphone and piece of ancillary microphone equipment (audio interface, preamp, audio adapter, etc.) will have a different personality.  Because of that, trust your ears more than the dB reading or the graph of Audacity.


### Check that Talon is in the correct mode

Talon configuration sets can be configured to have multiple modes, which will have a different set of functionality. Most commonly, like in the `knausj_talon` repository, there will be two modes: command mode and dictation mode. In command mode, your speech will be mapped to the commands you have configured in your configuration set. In dictation mode, your speech will be typed out literally, which is useful if you want to dictate text, like in an email or document.

* Use dictation mode for free-form speech dictation, like writing an email. (Switch by saying "dictation mode".)
* Use command mode for everything else, including dictating individual letters using the alphabet or writing code. (Switch by saying "command mode".)


### Check your Speech Engine

Check that your speech engine has been initialized by looking in the [talon log file](/troubleshooting#check-the-talon-logs) You should see a line that looks like this:

```
2020-03-04 15:28:05  INFO (SpeechSystem) Activating speech engine: W2lEngine(en_US)
```

### Check your Talon Configuration Set

Check you have some valid commands in `~/.talon/user`. If it's empty clone https://github.com/knausj85/knausj_talon and test with some [basic commands](/getting_started#basic-usage). Clone the entire repository, not just individual files. Do not combine this repository with other configuration sets. Pick one and customize it as needed.

Talon automatically tracks changes to files in `~/.talon/user`, so that one can change scripts on the fly. This breaks if `~/.talon` (or any other part of the path) is a symlink.

On Linux, this can be fixed by replacing the symlink by a [bind mount][bind-mount-stackexchange]:

```sh
rm ~/.talon; mkdir ~/.talon  # or whichever part is a symlink
sudo mount --bind /path/to/dot/dir ~/.talon
```

[bind-mount-stackexchange]: https://unix.stackexchange.com/questions/198590/what-is-a-bind-mount

This can be made permanent by adding the following line to `/etc/fstab`:

```
/path/to/dot/dir	/home/<user>/.talon	none	bind
```

### Check out Tips for Improving Accuracy

If commands are intermittently working, check out these tips for [improving accuracy](/improving_recognition_accuracy).


### Check the Talon Logs

Talon emits debug information to a log file in your Talon user directory, Windows: `%APPDATA%\Talon` Mac: `~/.talon`. Look for a file with the `.log` extension, probably named `talon.log`. The logs will contain useful debug information, like the Talon version or which microphone Talon is using. Syntax errors will also show up in these logs, which make them useful for debugging your configuration set.

```
2021-04-10 17:56:28  INFO Activating Microphone: "d:vice MMA-A"
2021-04-10 15:19:58 DEBUG Talon Version: 0.1.5
```


## Talon Crashes During Use

Talon should recover from most errors itself, but if it crashes please report it in the Talon Slack with the output log.
