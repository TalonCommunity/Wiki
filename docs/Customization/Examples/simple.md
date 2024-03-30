# Link Talon and Python

## Talon
```talon
insert the date: 
    result = user.my_custom_date_function()
    insert(result)
```
## Python
```python
from talon import Module  
import time

mod = Module()

@mod.action_class
class Actions:
    def my_custom_date_function():
        """My custom date function"""
        return time.strftime("%Y-%m-%d")
```
