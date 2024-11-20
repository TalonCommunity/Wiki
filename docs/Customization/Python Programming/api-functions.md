# API functions

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

You are also able to use almost all of the CPython standard library. So you can use that to do network requests, maths operations, or execute subprocesses for example. Other Python packages like numpy may be included in the Talon distribution as an implementation detail, but are not guaranteed to be included forever.

An escape hatch for this kind of thing is the `.venv` folder in your Talon home directory. The `pip` executable in the `bin` subdirectory of your Talon home directory allows you to install arbitrary Python packages in to that. You're generally a bit on your own with this and may have difficulty building binary packages. For this reason it is discouraged to ask users of any public package you build to install things in their venv.
