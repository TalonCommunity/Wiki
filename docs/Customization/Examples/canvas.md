# Display an Image on Screen

:::docoscope platform

:::

You can use Talon's built in canvas library to display an image or text, or draw arbitrary shapes on the screen.

The code below creates a transparent canvas over the entire screen and paints a rectangle over it.

```python
from talon.canvas import Canvas
from talon.types import Rect
from talon import ui
from talon.skia.canvas import Canvas as SkiaCanvas

def on_draw(c: SkiaCanvas):
    c.paint.color = "FF0000"
    c.paint.style = c.paint.Style.FILL
    c.draw_rect(Rect(100,100,100,100))

screen: ui.Screen = ui.main_screen()

# Create a canvas object that you can draw or add text to
canvas = Canvas.from_screen(screen)
canvas.draggable = False
canvas.blocks_mouse = False
canvas.focused = False
canvas.cursor_visible = True

# Add a callback to specify how the canvas should be drawn
canvas.register("draw", on_draw)

# Freeze the canvas so it doesn't repeatedly refresh
canvas.freeze()
```
