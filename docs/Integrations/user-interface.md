# User Interface

| Software                                                     | Description                                                                                           |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [Talon Mode Indicator](#talon-mode-indicator)                | Basic visual indicator of the current talon mode. --------------------------------------------------- |
| [Talon Heads Up Display](#talon-hud-heads-up-display)        | Shows comprehensive visual information about your current state of Talon.                             |
| [Talon Deck](https://github.com/AndreasArvidsson/talon-deck) | Stream deck inspired interactive dashboard for Talon. Turn your phone/tablet into a Talon control UI. |
| [Customizable Subtitles](#customizable-subtitles)            | Subtitles that display as you speak, with customizable text size, placement on screen etc |

## Window Placement Software

| Software                                                         | Description                                                                       |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Window Tweak](https://github.com/codecat555/talon-window-tweak) | A Talon module for moving and resizing windows using voice commands.              |
| [Talon WM](https://github.com/lunixbochs/talon_wm)               | Basic tiling window manager implementation in Talon.                              |
| [Rectangle](https://github.com/rxhanson/Rectangle)               | (Mac, not integrated with talon) Keyboard control window placement and management |

## Details

### Talon Mode Indicator


The [talon tray icon](/docs/Basic%20Usage/talon-ui.md#talon-tray-icon) indicates whether or not talon is listening.

:::info This item Pertains to the [Talon Community User File Set](/docs/Resource%20Hub/terminology.md)

:::

The talon community user file set contains a more comprehensive yet still simple mode indicator.

| Mode | |
| - | - |
| Command | <img src="/img/talon_ui/mode_indicator/command.png" alt="Command mode" /> |
| Dictation | <img src="/img/talon_ui/mode_indicator/dictation.png" alt="Dictation mode" /> |
| Mixed | <img src="/img/talon_ui/mode_indicator/mixed.png" alt="Mixed mode" /> |
| Sleep | <img src="/img/talon_ui/mode_indicator/sleep.png" alt="Sleep mode" /> |
| Other | <img src="/img/talon_ui/mode_indicator/other.png" alt="Other mode" /> |

[YouTube - Mode indicator demo](https://youtu.be/1lqtfM4vvH4)

This is enabled and configured with settings present in:
`plugin\mode_indicator\mode_indicator.talon`

:::note Managing Customizations

Instead of changing this file directly, consider [overriding it instead](/docs/Customization/managing-customizations.md#overriding-cleanly)

:::



### Talon HUD (Heads Up Display)

This heads up display is awesome because it shows things like when Talon is awake, asleep, what language mode active, prints a pretty history, And a whole bunch of other things that right now you have to memorize.

For example the following shows that the microphone is on, talon is in command mode and it is in C# language mode:
<img src="/img/integrations/talon_hud/talon_hud_cs.png/"
     alt="sample screenshot of the Talon HUD"
/>

And this shows the Talon HUD options:
<img src="/img/integrations/talon_hud/talon_hud_options.png/"
     alt="sample screenshot of the talon hud options"
/>

Official site https://github.com/chaosparrot/talon_hud:

<img src="https://github.com/chaosparrot/talon_hud/blob/master/docs/intro.png?raw=true"
     alt="Screenshot highlighting various features of the Talon HUD"
 />

### Customizable Subtitles

The talon platform displays [subtitles](/docs/Basic%20Usage/talon-ui.md#talon-subtitles) (the text of the words it recognizes when you speak) by default.
It can be enabled or disabled, but not customized.

The talon community user file set it does provide a customizable subtitle facility with the following configurable items:
- Onto which screens subtitles will be shown
- Size and color of the subtitles
- Duration for which the subtitles are shown
- Vertical position on screen

These subtitles are enabled and configured with settings present in:
`plugin\subtitles\subtitles.talon`

:::note Managing Customizations

Instead of changing this file directly, consider [overriding it instead](/docs/Customization/managing-customizations.md#overriding-cleanly)

:::

Note that as this feature works independently of the talon platform subtitle, you will need to
disable that from the [speech recognition menu](/docs/Basic%20Usage/talon-ui.md#speech-recognition-menu) 
(otherwise two sets of subtitles will be displayed as you speak).


:::info This item Pertains to the [Talon Community User File Set](/docs/Resource%20Hub/terminology.md)

Software listed under integrations normally has links to a location from where the software can be downloaded.
As this subtitle feature is part of talon community user file set there is no separate download required,
as long as the community file set as already been downloaded.

It only needs to be enabled and configured.

:::
