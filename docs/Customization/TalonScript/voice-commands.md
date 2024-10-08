# Voice Commands

## A simple TalonScript example

Let's make a new voice command that presses the key combination `cmd+a` or `control+a` when you say "select everything".

Open up a text editor and save an empty file called `simple_test.talon` somewhere in your [Talon user directory](/docs/Help/terminology.md#talon-user-directory). 

OK, let's get to defining the command. 

:::note Spacing is Important
Spacing is important in TalonScript. For example, ensure you have the spaces at the start of the 'key' line.
:::

If you're running MacOS, copy/paste the following into your editor and save the file.

```talon
select everything:
    key(cmd-a)
```

If you're on Windows or Linux you can use this instead:

```talon
select everything:
    key(ctrl-a)
```

Your command should now be defined, so if you focus your text editor and say "select everything" it should indeed select everything.

:::tip The Talon Log File

The [Talon log file](./talon-log-file.md) contains information helpful to troubleshoot issues in `.talon` files.
You may wish to become familiar with the log file now that the most basic TalonScript file has been created.
:::

