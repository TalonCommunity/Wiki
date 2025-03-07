---
sidebar_position: 1
---

# Speech Engines

:::docoscope talon-scope-platform

:::

Talon uses a speech recognition engine that translates voice audio to text. The Conformer speech engine is recommended, but it is possible to use Talon with other speech engines, for example, if you already use Dragon and want to use Talon with Dragon or need a speech engine with language support other than English.

| Engine        | OS            | Description                                                                                                                                                                           | Installation                                                                                                                | Price                                                                                             |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| W2L Conformer | Win/Mac/Linux | Best option for new users. Excellent accuracy and speed for both commands and dictation. Even lower latency for Talon beta users due to ongoing performance optimisations.            | Install from Talon tray icon                                                                                                | Free                                                                                              |
| W2L Gen2      | Win/Mac/Linux | Speech engine used prior to Conformer. Decent command accuracy. Dictation accuracy is lacking.                                                                                        | Install from Talon tray icon                                                                                                | Free                                                                                              |
| Dragon        | Win           | Good accuracy for both commands and dictation. Has quirks which can't be fixed by us. Professional version is recommended over home version (home version doesn't have command mode). | [Buy and Install Dragon Professional](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html) | [$300-$500](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html) |

:::note

The Professional version of Dragon for Windows is recommended (but not strictly required) because it can be run in [Command Mode](https://www.nuance.com/products/help/dragon/dragon-for-mac6/enx/Content/Introduction/RecognitionModes.html). Some users have been able to find less expensive copies of Dragon by either waiting for a sale or looking on eBay for older versions.

:::

### Dictation Engines for Additional Language Support

As of April 2024, Talon's main conformer model only supports English. If you need to dictate text in another language, the [Talon Beta](../../Help/beta_talon) supports the following options:

| Engine    | Platform      | Description                                                                                                                                       | Requirements                                                         |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Webspeech | Win/Mac/Linux | Excellent accuracy, but added latency. Uses your browser as a voice engine; requires an internet connection. Supports many non-English languages. | See pinned messages in #beta on [Slack](https://talonvoice.com/chat) |
| Vosk      | Win/Mac/Linux | Supported languages: [https://alphacephei.com/vosk/](https://alphacephei.com/vosk/)                                                               | See [Github Project](https://github.com/mqnc/talon_german)           |

:::note

You cannot use Webspeech or Vosk standalone; they don't handle commands well, only dictation, so you need a command-mode speech recognition engine to use with them.

The Mac Voice Control engine is technically supported for dictation in beta, but it's not recommended over Conformer.

:::
