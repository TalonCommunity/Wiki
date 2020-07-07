---
order: -100
---

# FAQ

## What is Talon?

Voice recognition and eye tracking software written by @lunixbochs that
runs cross platform (in beta) and is easily configurable

## Beta instructions
First, sign up for the beta ($15 USD) at https://www.patreon.com/join/lunixbochs (create a patreon account if you don't already have one)

Next, join the Talon Voice Slack https://talonvoice.slack.com and send a direct message to @aegis to let him know you've signed up for the beta program. He'll add you to the beta channel.

In the #beta channel, check the pinned messages for the latest download for your OS (mac, linux, windows). For mac, download the dmg file, then double click to run it, you'll be prompted to copy it into your Applications folder. From there, you can run the program, after which you'll have a new directory called .talon (hidden) in your user's home directory.

You will need a copy of the https://github.com/knausj85/knausj_talon repo. Git clone (or just download and unzip) into your user directory. If you've done this step correctly, you will see the users/yourusername/.talon/user folder and the knausj_talon within it (there will be subfolders like apps, code, lang, misc, etc).

Next, look again in the pinned files of the beta channel, find the instructions and URL to download Wav2letter and extract it into .talon directory. If done correctly, the folder structure should have these additional files:

~/.talon/w2l/en_US
~/.talon/user/w2l.py

This is the default experience with Talon, but please checkout the other [speech engines](https://github.com/TalonCommunity/Wiki/blob/gh-pages/SpeechRecognitionEngines.md) available, especially the latest [sconv4](https://github.com/TalonCommunity/Wiki/blob/gh-pages/model_4_instructions.md).

## What can I say?  
Checkout the [common commands](https://talon.wiki/common_commands/) to get started using Talon

## Coding with Talon
Checkout the [introductory guide to coding with Talon](https://talon.wiki/working_with_code/)

## What does Talon hear?
If you'd like a notification to show you what Talon is hearing you say, add this [notify.py](https://github.com/TalonCommunity/Wiki/tree/gh-pages/extras/notify.py) in users/yourusername/.talon/user (anywhere in the .talon/user folder is fine) (or create your own notify.py file with the contents:  

    #This file will add a notification to tell you what Talon heard you say
    from talon import app, speech_system
    def on_phrase(j):
        app.notify('' ''.join(j['phrase']))
    speech_system.register('phrase', on_phrase)

## What hardware should I have?

### Microphone

Speech recognition works better the better the microphone you have.
Some recommendations are:

* Blue Yeti Nano (USB 3) - desktop, affordable and pretty good recognition. 
Can be attached to an arm for increased recognition. Useful if you're 
trying out speech recognition for the first time and don't want to spend a lot
* DPA d:fine 4188 or 4288 (nearly equivalent) with a DPA d:vice interface - 
expensive but highly recommend for full time use
* Stenomask - useful for open plan offices as it covers your mouth

### Eye Tracking

Tobii 4C is the most commonly used and recommended eye tracker. Talon also supports the Tobii PCEye Mini. Support for most 4th gen Tobii devices can be trivially added.  Ask in `#eye-tracking` channel if you want to know if your device can be supported.

## I have X accent, will it work for me? 

Probably! Only one way to know, the dataset is trained mostly
on American accents but others work.

## Are languages other than English supported?

They're being worked on, join talonvoice.slack.com 
and find a channel for your language to see how it's going.

## How can I make talon recognise me better?

https://speech.talonvoice.com/ will help train the voice data set  

https://noise.talonvoice.com/ will help train the dataset for noises such as pop/hiss as commands.

Use USB3 if you have a USB mic.

## How can I contribute?

While Talon is closed source, there's plenty you can do to help:

* https://speech.talonvoice.com/ Train the data set
* Publish your talon commands on Github for others to use like 

    https://github.com/knausj85/knausj_talon or https://github.com/lunixbochs/talon_starter_pack

    https://github.com/knausj85/knausj_talon

* Report issues in the beta https://github.com/talonvoice/beta
* Add more to these docs :)

## Talon is slow, why?

If you get slow recognition times and lots of pipes in your output
try lowering your input level on your mic, any small background noise
will make Talon wait before it starts processing

## Talon does nothing when I speak

Check the microphone Talon selected, it's at the start of the log
e.g. `2020-03-04 15:27:53  INFO Activating Microphone: "Yeti Nano Analogue Stereo"`

If it's the wrong one, use the menu in the app tray to change it.

Check your speech engine has initialised by looking at the log e.g.
`2020-03-04 15:28:05  INFO (SpeechSystem) Activating speech engine: W2lEngine(en_US)`

If your on Linux or Mac (without dragon), you'll need w2l setup.

Check you have some valid commands in ~/.talon/user. If it's empty clone https://github.com/knausj85/knausj_talon and try saying the alphabet

"air bat cap drum".

## Talon crashes a lot

Report it! Talon should recover from most errors itself
but if it crashes report it in Slack with the output log.

Originally published by @hbk619 https://github.com/hbk619/talon-docs/blob/master/faq.md.
