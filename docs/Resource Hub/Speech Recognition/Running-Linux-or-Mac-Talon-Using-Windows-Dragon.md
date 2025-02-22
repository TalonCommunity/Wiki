# Running Mac or Linux Talon Using Windows Dragon

:::docoscope platform

:::

**This document is out of date and may be incorrect in parts. Please consult the [official docs](https://talonvoice.com/docs/) and/or ask on slack if you need help.**

You can link your two computers so that you can use the windows machine with Dragon as the voice engine that processes all your voice commands in the background and turns them into text strings, which will be sent back to Talon on your linux or mac and used to command and control your favorite OS by voice. Here's how:

Running Linux or Mac Talon against Windows Dragon: This allows you to use a copy of Windows Dragon on a windows OS as your voice engine.

1. Find the latest “Released” message in #beta. Make sure to sort the search by recent instead of relevant.

2. Install Talon on Windows and run it (talon.exe or talon_console.exe).

3. Right click on the Talon icon by the clock, go to Scripting, then “Open ~/talon”. Find draconity.toml in this directory and open it in a text editor.

4. Add this text at the end of draconity.toml:

```toml
[[socket]]
host = "0.0.0.0"
port = 38065
```

5. Copy the authentication key at the top of draconity.toml, you will need to have it to configure your other computer. Also note down the IP address of your Windows computer.

6. Install Talon on your non-Windows computer, open draconity.toml in the same way, edit the authentication key to match the Windows computer, and add this text at the end:

```toml
[[remote]]
host = "WINDOWS_IP_HERE"
port = 38065
```

7. Run Dragon on the Windows computer and wake up the microphone.
