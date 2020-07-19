---
sidebar: true
order: 5
---

# FAQ

### Beta instructions
1. Sign up for the beta ($15 USD) at https://www.patreon.com/join/lunixbochs (create a patreon account if you don't already have one).  

2. Join the Talon Voice Slack https://talonvoice.slack.com and send a direct message to @aegis to let him know you've signed up for the beta program. He'll add you to the beta channel.

3. In the #beta channel, check the pinned messages for the latest download for your OS (mac, linux, windows). For mac, download the dmg file, then double click to run it, you'll be prompted to copy it into your Applications folder. From there, you can run the program, after which you'll have a new directory called .talon (hidden) in your user's home directory.  

4. You will need a copy of the https://github.com/knausj85/knausj_talon repo. Git clone (or just download and unzip) into your user directory. If you've done this step correctly, you will see the users/yourusername/.talon/user folder and the knausj_talon within it (there will be subfolders like apps, code, lang, misc, etc).

5. Look again in the pinned files of the #beta channel, find the instructions and URL to download Wav2letter and extract it into .talon directory. If done correctly, the folder structure should have these additional files:

~/.talon/w2l/en_US
~/.talon/user/w2l.py

  * Wav2letter is the default speech recognition in Talon, but please checkout the other [speech engines](https://talon.wiki/SpeechRecognitionEngines/) available, especially the latest [sconv-b4](https://talon.wiki/model_4_instructions/).

### What can I say?  
Checkout the [common commands](https://talon.wiki/getting_started/#list-of-common-commands-to-get-started-with-talon)to get started using Talon.

### Coding with Talon
Checkout the [introductory guide to coding with Talon](https://talon.wiki/working_with_code/).

### What does Talon hear?
If you'd like a notification to show you what Talon is hearing you say, add this [notify.py](https://github.com/TalonCommunity/Wiki/tree/gh-pages/extras/notify.py) in users/yourusername/.talon/user (anywhere in the .talon/user folder is fine) (or create your own notify.py file with the contents:  

    #This file will add a notification to tell you what Talon heard you say
    from talon import app, speech_system
    def on_phrase(j):
        app.notify('' ''.join(j['phrase']))
    speech_system.register('phrase', on_phrase)

### What hardware should I have?
Check out the [hardware](https://talon.wiki/getting_started/#hardware) page for microphone and eye tracker recommendations.  

### I have X accent, will it work for me? 

Probably! Only one way to know, the dataset is trained mostly
on American accents but others work.

### Are languages other than English supported?

They're being worked on, join talonvoice.slack.com 
and find a channel for your language to see how it's going.

### How can I make talon recognise me better?

https://speech.talonvoice.com/ will help train the voice data set.  

https://noise.talonvoice.com/ will help train the dataset for noises such as pop/hiss as commands.

Use USB3 if you have a USB mic.

### How can I contribute?

While Talon is closed source, there's plenty you can do to help:

* https://speech.talonvoice.com/ Train the data set
* Publish your talon commands on Github for others to use like 

    https://github.com/knausj85/knausj_talon or https://github.com/lunixbochs/talon_starter_pack

    https://github.com/knausj85/knausj_talon

* Report issues in the beta https://github.com/talonvoice/beta
* Add more to these docs :)

### Troubleshooting
Checkout the [troubleshooting](https://talon.wiki/troubleshooting/) for solutions to common problems.
