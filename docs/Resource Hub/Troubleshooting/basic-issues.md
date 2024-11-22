---
sidebar_position: 7
---

# Basic Issues

```mermaid
graph TB
    start@{ shape: stadium, label: "Start"}
    start-->S1

    S1{S1: Does talon respond at all?}
    S1-- No ---group_audio_presence
    S1-- Yes ---group_audio_quality

    subgraph group_audio_presence["Check Audio Input Presence"]
        direction LR
        F1A{S1: Is audio input present?}
        F1A-- No ---F1B
        F1A-- Yes ---next1
        F1B[S2: Perform PC audio troubleshooting]
        F1B-->F1C
        F1C{Did this succeed?}
        F1C-- No ---ask_for_help1
        F1C-- Yes ---next1
        ask_for_help1[Ask for help]
        next1[Next: Check Talon Platform]
    end
    group_audio_presence-->group_talon_platform

    subgraph group_talon_platform["Check Talon Platform"]
        direction LR
        F2A{S3: Is talon platform running?}
        F2A-- No ---F2B
        F2A-- Yes ---next2
        F2B[S4: Start talon]
        F2B-->F2C
        F2C{Did this succeed?}
        F2C-- No ---ask_for_help2
        F2C-- Yes ---next2
        ask_for_help2[Ask for help]
        next2[Next: Check Talon Community]
    end
    group_talon_platform-->group_talon_community

    subgraph group_talon_community["Check Talon Community"]
        direction LR
        _F3A{S5: Is talon community running?}
        _F3A-- No ---_F3B
        _F3A-- Yes ---next3
        _F3B[S4: Install talon community]
        _F3B-->_F3C
        _F3C{Did this succeed?}
        _F3C-- No ---ask_for_help3
        _F3C-- Yes ---next3
        ask_for_help3[Ask for help]
        next3[Next: Recheck Talon]
    end
    group_talon_community-->group_recheck_talon

    subgraph group_recheck_talon["Recheck Talon"]
        test{Does talon now perform satisfactorily?}
        test-- no ---restart
        test-- yes ---happy_days
        restart[Troubleshoot from top]
        happy_days@{ shape: stadium, label: "Happy Days"}
    end
    %% the following link is "invisible" and is only present for improving the layout %%
    group_recheck_talon ~~~ group_audio_quality

    subgraph group_audio_quality["Audio Input Quality"]
        F4A[Flowchart F4: Check audio input quality]
        F4A-->F4B
        F4B{Is audio high quality?}
        F4C{Did flowchart F4 result in any corrective action?}
        F4C-- Yes ---recheck4[Recheck talon]
        F4C-- No (no solution offered) ---ask_for_help4
        ask_for_help4[Asks for help]
        F4B-- Yes ---talon_accuracy[Next: Explore Talon Accuracy Tips]
        F4B-- No ---F4C
    end
    group_audio_quality-->finish


    finish@{ shape: stadium, label: "Finish"}
```


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
