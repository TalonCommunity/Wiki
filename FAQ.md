---
sidebar: true
order: 6
published: true
---

# FAQ

### What can I say?  
Checkout the [common commands](/getting_started/#basic-usage) to get started using Talon.

### How can I code in different languages with Talon
Talon does not require special configuration for different programming languages, but many users have per-language customizations to improve efficiency. Checkout the section on [Programming Languages](/unofficial_talon_docs#talon-settings) in the knausj repository README for more information on how to use different language modes included in knausj.

### What hardware should I have?
Check out the [hardware](/hardware) page for microphone and eye tracker recommendations.  

### Are languages other than English supported?

They're being worked on, join talonvoice.slack.com and find a channel for your language to see how it's going. If you are in the beta program, you can configure the WebSpeech API for dictation in other languages.

### How can I make talon recognise me better?

See the page [Improving Recognition Accuracy](/improving_recognition_accuracy).

### How can I contribute?

While Talon is closed source, there's plenty you can do to help:

* https://speech.talonvoice.com/ Extend the voice data set used for speech recognition training.
* Publish your talon commands on Github for others to use like https://github.com/knausj85/knausj_talon.
* Report issues at https://github.com/talonvoice/talon/issues
* Add more to these docs :)

### How do I enable verbose talon debugging?

Open your talon user directory, for example `~/.talon/user` on Linux. Open the `engines.py` file in an editor and change the line containing `W2lEngine()` to include the parameter `debug=True`. If a `debug=False` parameter already exists, in the `False` should be changed to `True`.

For example:
```
w2l = W2lEngine(model="en_US", debug=True)
```

### Troubleshooting
Checkout the [troubleshooting](/troubleshooting) for solutions to common problems.
