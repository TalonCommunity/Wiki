# User Interface

| Software                                                     | Description                                                                                           |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [Talon Heads Up Display](#talon-hud-heads-up-display)        | Show visual information about your current state of Talon.                                            |
| [Talon Deck](https://github.com/AndreasArvidsson/talon-deck) | Stream deck inspired interactive dashboard for Talon. Turn your phone/tablet into a Talon control UI. |
| [Customizable Subtitles](#customizable-subtitles)            | Subtitles that display as you speak, with customizable text size, placement on screen etc |

## Window Placement Software

| Software                                                         | Description                                                                       |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Window Tweak](https://github.com/codecat555/talon-window-tweak) | A Talon module for moving and resizing windows using voice commands.              |
| [Talon WM](https://github.com/lunixbochs/talon_wm)               | Basic tiling window manager implementation in Talon.                              |
| [Rectangle](https://github.com/rxhanson/Rectangle)               | (Mac, not integrated with talon) Keyboard control window placement and management |

## Details

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

:::info

Software listed under integrations normally have links to a location from where the software can be downloaded.
As this subtitle feature is part of talon community user file set there is no separate download required,
as long as the community file set as already been downloaded.

It only needs to be enabled and configured.

:::
