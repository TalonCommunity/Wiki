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

    subgraph group_audio_presence["Audio Input Presence"]
        direction LR
        F1A[Flowchart F1: Check audio input presence]
        F1A-->F1B
        F1B{Any relevant corrective action taken?}
        F1B-- Yes ---recheck1[Recheck talon]
        F1B-- No (not needed, audio input is present) ---next1
        next1[Next: Check Talon Platform]
    end
    group_audio_presence-->group_talon_platform

    subgraph group_talon_platform["Check Talon Platform"]
        F2A[Flowchart F2: Check Talon platform running]
        F2A-->F2B
        F2B{Any relevant corrective action taken?}
        F2B-- Yes ---recheck2[Recheck talon]
        F2B-- No (not needed, talon platform running) ---next2
        next2[Next: Check Talon Community]
    end
    group_talon_platform-->group_talon_community

    subgraph group_talon_community["Check Talon Community"]
        F3A[Flowchart F3: Check Talon community running]
        F3A-->F3B
        F3B{Any relevant corrective action taken?}
        F3B-- Yes ---recheck3[Recheck talon]
        F3B-- No (no solution offered) ---ask_for_help1
        ask_for_help1[Asks for help]
    end
    %% the following link is "invisible" and is only present for improving the layout %%
    group_talon_community ~~~ group_audio_quality

    subgraph group_audio_quality["Audio Input Quality"]
        F4A[Flowchart F4: Check audio input quality]
        F4A-->F4B
        F4B{Is audio high quality?}
        F4C{Did flowchart F4 result in any corrective action?}
        F4C-- Yes ---recheck4[Recheck talon]
        F4C-- No (no solution offered) ---ask_for_help2
        ask_for_help2[Asks for help]
        F4B-- Yes ---talon_accuracy[Next: Explore Talon Accuracy Tips]
        F4B-- No ---F4C
    end
    group_audio_quality-->finish
    group_audio_quality ~~~ group_recheck_talon

    subgraph group_recheck_talon["Recheck Talon"]
        test{Does talon now perform satisfactorily?}
        test-- no ---restart
        test-- yes ---happy_days
        restart[Troubleshoot from top]
        happy_days@{ shape: stadium, label: "Happy Days"}
    end

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
