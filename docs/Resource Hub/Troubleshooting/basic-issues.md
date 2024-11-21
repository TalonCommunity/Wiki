---
sidebar_position: 7
---

# Basic Issues

```mermaid
graph TB
    start@{ shape: stadium, label: "Start"}
    start-->S1

    S1{S1: Does talon respond at all?}
    S1-- No ---G1
    S1-- Yes ---G4

    subgraph G1["Audio Input Presence"]
        direction LR
        F1A[Flowchart F1: Check audio input presence]
        F1A-->F1B
        F1B{Any relevant corrective action taken?}
        F1B-- Yes ---recheck1
        F1B-- No (not needed, audio input is present) ---next1
        next1[Check: Talon Platform]
    end
    G1-- (audio input is present) ---G2

    subgraph G2["Talon Platform"]
        F2A[Flowchart F2: Check Talon platform running]
        F2A-->F2B
        F2B{Any relevant corrective action taken?}
        F2B-- Yes ---recheck2
        F2B-- No (not needed, talon platform running) ---next2
        next2[Check: Talon Community]
    end
    G2-- (talon platform running) ---G3

    subgraph G3["Talon Community"]
        F3A[Flowchart F3: Check Talon community running]
        F3A-->F3B
        F3B{Any relevant corrective action taken?}
        F3B-- Yes ---recheck3
        F3B-- No (not needed, talon community running) ---next4
        next3[Check: Audio Input Quality]
    end
    %% the following link is "invisible" and is only present for improving the layout %%
    G3 ~~~ G4

    subgraph G4["Audio Input Quality"]
        F4A[Flowchart F4: Check audio input quality]
        F4A-->F4B
        F4B{Any relevant corrective action taken?}
        F4B-- Yes ---recheck4
    end
    G4-->finish

    subgraph G5["Recheck"]
        something
    end
    G5-->finish

    finish@{ shape: stadium, label: "Finish"}
```

``` 
graph TD;
    start@{ shape: stadium, label: "Start"}

    start-->S1

    S1{S1: Does talon respond at all?}
    S1-- No ---F1A

    subgraph one
    F1A[Flowchart F1: Check audio input presence]
    F1A-->F1B
    F1B{Any relevant corrective action taken?}
    F1B-- Yes ---check
    F1B-- No (not needed, audio input is present) ---F2A
    end

    subgraph two
    F2A[Flowchart F2: Check Talon platform running]
    F2A-->F2B
    F2B{Any relevant corrective action taken?}
    F2B-- Yes ---check
    F2B-- No (not needed, talon platform running) ---F3A
    end

    subgraph three
    F3A[Flowchart F3: Check Talon community running]
    F3A-->F3B
    F3B{Any relevant corrective action taken?}
    F3B-- Yes ---check
    F3B-- No (not needed, talon community running) ---F4A
    end

    subgraph four
    F4A[Flowchart F4: Check audio input quality]
    F4A-->F4B
    F4B{Any relevant corrective action taken?}
    F4B-- Yes ---check
    end

    subgraph five
    check{Is talon working properly now?}
    check-- No ---start
    check-- Yes ---finish
    end

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
