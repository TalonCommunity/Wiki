# The Talon Log File

TalonScript is designed to be a simple way for all users to create new voice commands, without having programming experience.

However, if there is an issue with your `.talon` file, typically there would be useful clues about the reason in the Talon log file. 
For non-programmers, try to ignore the technical gibberish also contained in the file, and if it is too confusing then
reach out to the community on [slack](/docs/Help/talon-slack.md).

To open the log file, right click on the Talon icon in your status bar, choose scripting, and then 'View log'. This will show a list of log messages from Talon, and in particular will be where Talon tells us if there far any problems.

## Information messages

When Talon notices changes to any of the `.talon` or `.py` files under the [Talon user directory](/docs/Resource%20Hub/terminology.md#talon-user-directory), 
it automatically reloads then and includes an information message within the log file.

For the [simple TalonScript example](./voice-commands.md#a-simple-voice-command-example) the file `simple_test.talon` was written.

You should see a line like `2021-09-02 17:33:36 DEBUG [+] /home/normal/.talon/user/mystuff/simple_test.talon` printed in your Talon log. 

This indicates that Talon has picked up your new/updated file and has loaded it successfully. 

If you don't see a line like that, there should be information in the log file that would help. The next section explains this further. 


## Error messages

Following on from the [simple TalonScript example](./voice-commands.md#a-simple-voice-command-example), let's now deliberately introduce an error so we can see how Talon tells us about that. 

Edit your file and remove the final `)` character so the last line is ` key(cmd-a` or ` key(ctrl-a`. Save the file and look at your Talon log. For me, Talon writes out the following:

```
    2021-09-02 17:46:02 DEBUG [-] /home/normal/.talon/user/simple_test.talon
    2021-09-02 17:46:02 DEBUG [+] /home/normal/.talon/user/simple_test.talon
    2021-09-02 17:46:02 ERROR     8:                         talon/scripting/talon_script.py:705|
        7:                lib/python3.9/site-packages/lark/lark.py:561|
        6:    lib/python3.9/site-packages/lark/parser_frontends.py:107|
        5: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:41 |
        4: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:171|
        3: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:188|
        2: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:182|
        1: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:129|
    lark.exceptions.UnexpectedToken: Unexpected token Token('$END', '') at line 1, column 5.
    Expected one of:
        * RPAR


        1: lib/python3.9/site-packages/lark/parsers/lalr_parser.py:126|
    KeyError: '$END'

    [The below error was raised while handling the above exception(s)]
    2021-09-02 17:46:02 ERROR Failed to parse TalonScript in "user.simple_test.talon" for "select everything"
       16:      lib/python3.9/threading.py:912* # cron thread
       15:      lib/python3.9/threading.py:954*
       14:      lib/python3.9/threading.py:892*
       13:                   talon/cron.py:155|
       12:                   talon/cron.py:106|
       11:                     talon/fs.py:64 |
       10:                     talon/fs.py:57 |
        9:         talon/scripting/rctx.py:233| # 'fs' main:on_change()
        8:         app/resources/loader.py:689|
        7:         app/resources/loader.py:639|
        6:         app/resources/loader.py:517|
        5:         app/resources/loader.py:501|
        4:      talon/scripting/context.py:520|
        3:      talon/scripting/context.py:436| # [stack splice]
        2: talon/scripting/talon_script.py:719|
        1: talon/scripting/talon_script.py:713|
    talon.scripting.talon_script.CompileError:   Line: 1, Column: 5 - unexpected token
          key(ctrl-a
              ^
      Expected: )
     in script at /home/normal/.talon/user/simple_test.talon:2:
      key(ctrl-a
```

So that's quite a lot of output. The useful bit is at the bottom:

```
    talon.scripting.talon_script.CompileError:   Line: 1, Column: 5 - unexpected token
          key(ctrl-a
              ^
      Expected: )
     in script at /home/normal/.talon/user/simple_test.talon:2:
      key(ctrl-a
```

You can see it has the `in script at /home/normal/.talon/user/simple_test.talon:2:` line. This tells us the file the problem occurred in, and also the (maybe approximate) line number the problem was on, '2' in our case. There is also some suggestive text indicating that Talon was expecting a `)` character. The error message you get will depend on the problem with what you've written, but it should always tell you which file has the problem in it, and also the approximate line the problem was on.

If you can't figure it out, then you might want to ask for help on the [Talon slack](https://talonvoice.com/chat) in the #help channel.

OK, we're finished with this file now so you can delete it.
