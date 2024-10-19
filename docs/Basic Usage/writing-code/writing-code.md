# Writing Code

Although it's possible to write code only with the features described in command mode,
there are additional features in Talon community that can make this more efficient.



When you say the voice command for a programming element such as `state case`, Talon inserts the appropriate characters
for your current coding language. Saying `state case` whilst in `csharp` mode performs:

```talon
    actions.insert("case \nbreak;")
    actions.edit.up()
```

Whilst in ruby mode:
```talon
    actions.insert("when ")
```

This means that Talon must know what is the current programming language, which is done through [language activation](language-activation.md).

Before that, there may be setup required for your development environment, see below for details.

:::tip Videos and Demonstrations

Here are some [videos and demonstrations](/docs/Resource%20Hub/talon_related_resources.md) of using Talon to write code.
Don't worry if it appears overwhelming, some were made by very experienced users
highlighting how efficiently coding using Talon can be.

:::

## Video Demonstrations
## IDE Setup

### Programming languages

To enable title tracking for your application:

1. Ensure the active filename (including extension) is included in the window title.
2. Implement the required Talon-defined `filename` action to correctly extract the filename from the window title. See the [Visual Studio Code implementation](apps/vscode/vscode.py#L137-L153) for an example.
