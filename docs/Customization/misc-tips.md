# Tips and tricks

This section contains some additional miscellaneous information which may be useful for developing and debugging Talon scripts.

## REPL and logging

Talon comes with a Python Read Eval Print Loop (REPL) which can be accessed from the Scripting menu. This lets you try out actions and use the introspection functions mentioned below.

There is also a `repl` executable in the `bin` subdirectory of your Talon home folder. You can pipe REPL commands into that and they will be executed in the running Talon environment. This is often used as a RPC interface to Talon. For example executing a line like this on Linux would toggle whether Talon is listening to the microphone: `bash -c "echo 'actions.speech.toggle()' | ~/.talon/bin/repl"`.

Talon also has basic logging functionality. If you have run Talon from the terminal you will have seen the output, but it can also be viewed using the 'Scripting -> View log' menu item or directly in the `talon.log` file in your Talon home folder. To add to the log from your script simply use the Python `print()` function, though in general this is only used for debugging.

## Introspection functions

This section lists some built in methods which are useful for developing or debugging Talon behaviour. The following are all imported by default into the REPL and aren't really meant to be used outside that context.

- `sim("tab close")` - Finds the .talon file that would handle the given command in the current context. If the command is not active in the current context, then it prints an error. Useful for finding the relevant code for a voice command. You might want to paste something like `import time;time.sleep(5);sim("tab close")` in to the REPL to give you a chance to switch to the appropriate context.
- `mimic("say hello world")` - Executes the given voice command like you spoke it in to the microphone. Can be useful to re-run voice commands while editing them so you don't have to keep saying the same thing.
- `actions.find("string")` - Searches the name, documentation, and code implementing an action for the given substring. Prints out a list of matches.
- `actions.list("edit")` - Prints out all registered actions matching the given prefix. If no argument is supplied then lists all actions. See the basic customization page for a trick to copy this output into your clipboard.
- `events.tail()` - If you're not getting enough information about what Talon is doing from the log file you can take a look at this method. It prints out Talon internal events, user actions called, scope changes etc. to the REPL. For even more logging try the `events.tail(noisy=True)` flag. You can also print out historical events and filter the events, run `help(events.tail)` to see the options.
- `registry.commands`, `registry.lists` etc. - Lets you view the currently active set of commands, lists, actions etc. that Talon is considering.

### API functions

Talon provides an API under the `talon` package allowing you to perform various actions from Python. Some examples are window management and drawing overlays. Talon is closed source, but does provide class, method, and module signatures as `.pyi` files in the `resources/python/lib/python3.9/site-packages/talon/` folder. These files can also be linked to by your IDE to provide autocompletion etc. Note that many of the `.pyi` files are internally facing, but it's generally fairly clear what's intended to be stable and used by user scripts.

A quick pointer to some APIs follows:

- `__init__.pyi` - The main API functionality is imported here (e.g. Module, Context, actions). This is what you import when you include `import talon` in your code.
- `ui.pyi` - window and workspace management functionality and focus change events. OS specific functionality is imported at the top of the file from `(linux|mac|windows)/ui.pyi`.
- `clip.pyi` - Cross platform clipboard monitoring and management.
- `cron.pyi` - Periodic tasks, use this for polling or background tasks so as not to block the main Talon thread.
- `screen.pyi` - Monitor/screen management querying functionality (e.g. get dimensions of screen), also screenshot functions.
- `imgui.pyi` - A simple GUI system for drawing basic floating windows including text and buttons.
- `canvas.pyi` - A floating canvas implementation with transparency that optionally captures mouse and keyboard events. See also the `talon.skia` package which provides the drawing functions (based on [the Skia library](https://skia.org/docs/)).
- `noise.pyi` - Register for pop and hiss noise events.
- `experimental/` - This package contains experimental APIs which may change in signature or be removed.
- `ctrl.pyi` - 'Low level' mouse and keyboard event injection. You should prefer using the exposed mouse/keyboard actions rather than this.
- `fs.pyi` - Watch files and folders for changes.

You are also able to use almost all of the CPython standard library. So you can use that do do network requests, maths operations, or execute subprocesses for example. Other Python packages like numpy may be included in the Talon distribution as an implementation detail, but are not guaranteed to be included forever.

An escape hatch for this kind of thing is the `.venv` folder in your Talon home directory. The `pip` executable in the `bin` subdirectory of your Talon home directory allows you to install arbitrary Python packages in to that. You're generally a bit on your own with this and may have difficulty building binary packages. For this reason it is discouraged to ask users of any public package you build to install things in their venv.
