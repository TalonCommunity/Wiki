---
sidebar_position: 7
---

# Basic Issues

## Flowchart 1: Top Level

```mermaid
graph TB
    start@{ shape: stadium, label: "Start"}
    start-->S1

    S1{Does talon 
        respond at all?}
    S1-- No ---g1_talon_functional
    S1-- Yes ---g2_audio_quality

    subgraph g1_talon_functional["Talon Working Functionally"]
        g1_start@{ shape: stadium, label: "Start"}
        g1_start-->g1_step1

        g1_step1[Flowchart 2: Get talon working functionally]
        g1_step1-->g1_test

        g1_test{Does talon now 
            perform satisfactorily?}
        g1_test-- yes ---g1_happy_days
        g1_test-- no ---g1_next

        g1_next@{ shape: stadium, label: "Next: Check 
            audio input quality"}

        g1_happy_days@{ shape: flag, label: "Happy Days"}
        g1_happy_days-- Potentially happier days ---g1_next
    end

    subgraph g2_audio_quality["Audio Input Quality"]
        direction TB
        g2_start@{ shape: stadium, label: "Start"}
        g2_start-->g2_check

        g2_check[S7: Check 
            audio input quality]

        g2_check-->g2_q1

        g2_q1{Is audio 
            high quality?}
        g2_q1-- No ---g2_q2
        g2_q1-- Yes ---g2_next[Next: Explore Talon Accuracy Tips]

        g2_q2[S8: Perform audio quality improvement tips]
        g2_q2-->g2_q3

        g2_q3{Does Talon now perform satisfactorily?}
        g2_q3-- Yes ---g2_happy_days
        g2_q3-- No ---g2_next

        g2_happy_days@{ shape: flag, label: "Happy Days"}
        g2_happy_days-- Potentially happier days ---g2_next

        g2_next@{ shape: stadium, label: "Next: Explore Talon Accuracy Tips"}
    end
    %% the following link is "invisible" and is only present for improving the layout %%
    g1_talon_functional ~~~ g2_audio_quality

    g1_talon_functional-- Next ---g2_audio_quality


```

:::tip

Once you have completed the steps above and talon is working functionally, you can attempt to
[improve the recognition accuracy](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md).

:::

## Flowchart 2: Getting talon working functionally

```mermaid
graph TB
    start@{ shape: stadium, label: "Start"}
    start-->g1_audio_presence

    subgraph g1_audio_presence["Check Audio Input Presence"]
        direction LR
        g1_start@{ shape: stadium, label: "Start"}
        g1_start-->g1_q1

        g1_q1{S1: Is the PC Is recognizing sound input?}
        g1_q1-- No ---g1_step1
        g1_q1-- Yes ---g1_next

        g1_step1[S2: Perform PC audio troubleshooting]
        g1_step1-->g1_q2

        g1_q2{Did this succeed?}
        g1_q2-- No ---g1_ask_for_help
        g1_q2-- Yes ---g1_next

        g1_ask_for_help[Ask for help]
        g1_next[Next: Check Talon Platform]
    end
    g1_audio_presence-->g2_talon_platform

    subgraph g2_talon_platform["Check Talon Platform"]
        direction LR
        g2_start@{ shape: stadium, label: "Start"}
        g2_start-->g2_q1

        g2_q1{S3: 
            Talon 
            platform 
            running?}
        g2_q1-- No ---g2_step1
        g2_q1-- Yes ---g2_step2

        g2_step1[S4: 
            Start 
            talon]
        g2_step1-->g2_q2

        g2_q2{ok?}
        g2_q2-- Yes ---g2_step2

        g2_step2[S5: 
            Enure correct 
            microphone 
            selected]
        g2_step2-->g2_step3

        g2_step3[S6: 
            Enure talon awake]
        g2_step3-->g2_next

        g2_q2-- No ---g2_ask_for_help
        g2_ask_for_help[Ask for help]
        g2_next[Next: 
            Check Talon 
            Community]
    end
    g2_talon_platform-->g3_talon_community

    subgraph g3_talon_community["Check Talon Community"]
        direction LR
        g3_start@{ shape: stadium, label: "Start"}
        g3_start-->g3_q1

        g3_q1{S5: Is talon community running?}
        g3_q1-- No ---g3_step1
        g3_q1-- Yes ---next3

        g3_step1[S4: Install talon community]
        g3_step1-->g3_q2

        g3_q2{Did this succeed?}
        g3_q2-- No ---g3_ask_for_help
        g3_q2-- Yes ---next3

        g3_ask_for_help[Ask for help]
        next3@{ shape: stadium, label: "Continue"}
    end

    g3_talon_community-->continue
    continue@{ shape: stadium, label: "Continue on main flowchart"}
```



## S1: Is the PC Is Recognizing Sound Input?

Your microphone is critical to your setup. If your microphone isn't working, then none of your voice commands will either. Testing this piece early may save you some time and help narrow down your troubleshooting to either hardware (microphone, audio interface, cables, etc) or software (talon, talon configuration, speech engine, etc).

Check that your computer is using the correct microphone and receiving sound input.

<details>
<summary role="button">Mac</summary>
<p>
Open System Preferences > Sound > Input. Check that the correct input device is selected and speak into the microphone. Watch the Input level as you speak; you should see the level rising and falling.
</p>
<img src="/img/resource_hub/sound_input_mac.gif"
     alt="gif of sound input window in system preferences on a Mac with input level moving"
 />
</details>

<details>
<summary role="button">Windows</summary>
<p>
Select Start > Settings > System > Sound. In Sound settings, go to Input > Test your microphone. Verify that the correct input device is selected and speak into the microphone. Look for a blue bar that should rise and fall as you speak.
</p>
</details>


## S2: Tips for PC audio troubleshooting

If you are not receiving any sound input, check your ancillary microphone equipment (cables, interfaces, preamps, etc.).

- Ensure your microphone is not muted.
- Check your cables and connections.
- Check your adapters and/or audio interfaces if you are using them. Examples: Shure X2U XLR-to-USB signal adapter or the DPA d:vice mobile audio interface. Check that they are connected properly and check any settings on the device, e.g., volume, gain, etc.


## S3: Check that Talon Platform is Operational

Look for the Talon icon in the menubar.

<details>
<summary role="button">Mac</summary>
<p>
Talon's icon should show up in the menu bar in the upper right corner of your screen:
</p>
<img src="/img/talon_ui/talon_menubar_awake.png"
     alt="screenshot of the desktop on a mac showing the talon icon in the top right menubar"
 />
</details>

## S4: Make the Talon Platform Operational

### Start Talon

:::docotodo

:::



## Nothing Happens When I Speak

If you are testing your setup with one of the [basic commands](/docs/Basic%20Usage/basic_usage.md) and getting no response at all, [follow this flow chart to start off with](./nothing-happens-when-i-speak.md).




## TODO

:::docotodo

Incorporate the following suggestions from https://github.com/TalonCommunity/Wiki/pull/312#issuecomment-2453041850

:::

Probably the piece that I think is most important to include is a standard list of troubleshooting instructions to use when "Talon doesn't understand me or is behaving in a flaky fashion". Some specific suggestions:

- Check for background noise as this can really confuse the voice activity detection.
- Note that Talon is more sensitive to microphone quality than many other speech recognition systems so do not assume that just because, for example, Dragon works fine that Talon will.
- Note that Talon is more sensitive to microphone volume/gain than other speech recognition systems and that many apps, particularly conferencing apps like Zoom, will adjust the system microphone gain themselves, which can cause your recognition performance to tank when you're not expecting it — usually there is a setting to turn this off but it may take some time to track down all the apps that do it.
- Explain the general behavior of how Talon chops up audio into utterances, both the benefits (reduced CPU consumption, command chaining) and the downsides (if the voice activity detector doesn't work in your case it will seem like Talon is not responding at all)

:::docofeedback

Is at worth considering consolidating some of the suggestions on this page together with
[improving accuracy](/docs/Resource%20Hub/Speech%20Recognition/improving_recognition_accuracy.md).

Could be a great candidate for a flow chart

:::

## Talon Crashes During Use

Talon should recover from most errors itself, but if it crashes please report it in the Talon Slack with the output log.
