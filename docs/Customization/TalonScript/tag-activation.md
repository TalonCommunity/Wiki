# Tag Activation

You can also activate [tags](./Talon%20Framework/tags). This snippet activates the `user.my_tag` tag when the context header matches. This is used reasonably often to enable extra sets of voice commands for the given context.

```talon
title: /my app/
-
tag(): user.my_tag
```

