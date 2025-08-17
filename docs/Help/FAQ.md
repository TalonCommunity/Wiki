---
sidebar_position: 2
---

# FAQ

### What can I say?

Checkout the [common commands](../Basic%20Usage/basic_usage) to get started using Talon.

### How can I code in different languages with Talon

Talon does not require special configuration for different programming languages, but many users have per-language customizations to improve efficiency. Checkout the section on [Programming Languages](https://github.com/talonhub/community#programming-languages) in the Community Talon user file set README for more information on how to use different language modes.

### What hardware should I have?

Check out the [hardware](../Resource%20Hub/Hardware/hardware.md) page for microphone and eye tracker recommendations.

### Are languages other than English supported?

They're being worked on, join [Talon Slack](https://talonvoice.com/chat) and find a channel for your language to see how it's going. If you are in the beta program, you can configure the WebSpeech API for dictation in other languages.

### How can I make Talon recognise me better?

See the page [Improving Recognition Accuracy](../Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy).

### I get voice fatigue when using Talon

Talking to your computer the whole day can definitely strain your voice. Here are a few suggestions.

- Listen to your body! Many of us need to use Talon just because we didn't do that before.
- Take frequent pauses
- Talk in normal relaxed sentences. Avoid whispering, shouting or a staccato tempo.
- Stay hydrated. Besides normal water: Tea with honey and/or ginger is liked by many.
- Perform vocal exercises. The [The Voice Book](https://www.amazon.com/Voice-Book-Caring-Protecting-Improving/dp/1641603305) is excellent. There's also good resources on YouTube.
  - [Vocal Straw Exercise](https://www.youtube.com/watch?v=0xYDvwvmBIM)
  - [Repair Your Voice](https://www.youtube.com/watch?v=2CI2dXIdq_4)

### How can I contribute?

While Talon is closed source, there's plenty you can do to help:

- https://speech.talonvoice.com/ Extend the voice data set used for speech recognition training.
- Publish your Talon commands on Github for others to share. Consider contributing back to the [Talon Community](https://github.com/talonhub/community) user file set. Publicly shared file sets are [searchable using this search engine](https://search.talonvoice.com/search/).
- Report issues at https://github.com/talonvoice/talon/issues
- Add more to these docs :)

### Troubleshooting

<details>
<summary role="button">Mac</summary>
#### When I dictate text I get superfluous periods in my sentence
In System Settings → Keyboard → Text Input → Input Sources, click Edit… and turn off “Add period (or full stop) with double-space”.
</details>

### Problem with voice control

The [Speech recognition - Troubleshooting](../Resource%20Hub/Speech%20Recognition/troubleshooting) page includes solutions to common problems with speech recognition.

### Talon crashes during use

Talon should recover from most errors itself, but if it crashes please report it in the Talon Slack with the output log.

### Eye tracking

<details>
<summary role="button">Windows</summary>
#### Eye tracker option is disabled in the Talon menu
Tobii runs three services by default that you will need to disable. Find the Services app by typing "services" in the start menu. Next scroll down until you find the three services that start with the word 'Tobii'. For each of these right click to view Properties and then change "Startup type" to "Disabled". Then either disable each of the services manually or restart your computer. If you'd want to use the Tobii app you can re-enable these at any time.

#### Eye tracker doesn't work during application installation

Lower UAC (User Account Control) one step to: `Notify me only when apps try to make changes to my computer (do not dim my desktop)`

#### Mouse cursor is not visible after returning from hibernation/sleep

You need to disable cursor suppression in the registry. Create a register file with the following content and run that.

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"EnableCursorSuppression"=dword:00000000
```

</details>

<details>
<summary role="button">Mac</summary>
#### Zoom mouse only shows desktop when zoomed in
Go to `system preferences => security & privacy => privacy` and enable screen recording permission for talon.
</details>
