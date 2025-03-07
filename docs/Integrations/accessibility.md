# Accessibility

## Non-Visual Use

Although Talon is not explicitly designed for non-visual use, it can still be used well alongside screen readers or other assistive technology.

Please note that Talon is in rapid development and is largely community supported. If you have issues, please join the [community slack](https://talonvoice.com/chat) and let someone know.

### How to get started

- Setup Talon as per normal:
  - [Install Talon](../Resource%20Hub/Talon%20Installation/installation_guide) and a speech recognition engine
  - Install the [community user file set](https://github.com/talonhub/community)
- Once setup, install [sight-free-talon](https://github.com/C-Loftus/sight-free-talon). This repository provides text-to-speech integration for Talon. If you use a screen reader, this repo prevents Talon from interrupting the text-to-speech voice as it types characters during dictation.
  - See the documentation in that repo for specific setup instructions

### Limitations

- Certain windows produced by Talon's imgui library, like those from the `help scope` command are not accessible.
