# Unix utilities

If you have a Unix (e.g. macOS) or Linux computer, you can enable support for a number of
common terminal utilities like `cat`, `tail`, or `grep` by uncommenting the following
line in `[unix_shell.py](tags/terminal/unix_shell.py)`:

```
# ctx.tags = ["user.unix_utilities"]
```

Once you have uncommented the line, you can customize your utility commands by editing
`tags/terminal/unix_utility.talon-list`.
