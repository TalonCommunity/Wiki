# Nothing Happens When I Speak

If you are testing your setup with one of the [basic commands](/docs/Basic%20Usage/basic_usage.md) and getting no response at all, first check a few fundamentals to help focus the troubleshooting. There are a number of issues at different layers of the setup that could be causing the problem. Your first few steps should help narrow the focus.

## F1: Flowchart

```mermaid
graph TD;
    start@{ shape: stadium, label: "F1: Flowchart"}

    start-->S1
    S1{S1: Is the talon platform running?}

    S1-- No ---S2
    S2[S2: Start Talon]

    S1-- Yes ---S3
    S3{S3: Is talon using the correct microphone?}

    S3-- No ---S4
    S4[S4: Select correct microphone]

    S3-- Yes ---S5
    S5{S5: Is talon awake?}

    S5-- No ---S6
    S6[S6: Set command mode]

    S5-- Yes ---S7
    S7{S7: Is PC recognizing sound input?}

    S7-- No ---S8
    S8[S8: Troubleshoot sound system]

    S7-- Yes ---S9
    S9{S9: Is talon community installed?}

    S9-- No ---S10
    S10[S10: Install talon community]

    S9-- Yes ---check-sound-quality
    check-sound-quality@{ shape: stadium, label: "Check Sound Quality"}

    S2-->try-again
    S4-->try-again
    S6-->try-again
    S8-->try-again
    try-again@{ shape: stadium, label: "Try Again"}
```



## S3: Check that Talon is using the Correct Microphone

You can check that Talon is using the correct microphone by clicking the Talon icon in the menu bar.

<details>
<summary role="button">Mac</summary>
<p>
Talon's icon should show up in the menu bar in the upper right corner of your screen:
</p>
<img src="/img/talon_ui/talon_menu_microphone.png"
     alt="screenshot of the desktop on a mac showing the talon microphone menu"
 />
</details>

You can also check which which microphone is selected by looking in the talon logs, which are located in `~/.talon/talon.log`. Look for a log that looks like this:

`2020-03-04 15:27:53  INFO Activating Microphone: "Yeti Nano Analogue Stereo"`

If it's the wrong one, use the menu in the app tray to change it.

## S5: Check that Talon is Awake

When Talon is running, it will be in one of a few different [modes](/docs/Basic%20Usage/basic_usage.md). One of these modes is a `sleep` mode, which will put Talon in a dormant state where it is listening but not responding to commands. While asleep, Talon will only respond to a minimal set of commands, such as `talon wake`, which will put Talon out of sleep and enable Talon to respond to commands.

If you are trying to use Talon commands and Talon is not responding, make sure Talon is not in sleep mode. The Talon icon in the menubar provides some visual cue as to what mode Talon is in:

<details>
<summary role="button">Mac</summary>

| Talon Is Listening                                                                                                                          | Talon Is Not Listening                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/img/talon_ui/talon_menubar_awake.png" alt="screenshot of the desktop on a mac showint the talon icon in the top right menubar"/> | <img src="/img/talon_ui/talon_menubar_asleep.png" alt="screenshot of the desktop on a mac showint the talon icon in the top right menubar"/> |

</details>


