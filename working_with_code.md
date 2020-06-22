## An Introductory Guide to Programming in Talon

### Activating your language

If talon is scripted to support your language, activating language support is as easy as focusing a file with the correct extension. For example, opening a file with the extension `.ts` will enable TypeScript support.

If for some reason you are not in a file with the correct extension, you can manually activate the language with the commands defined in **modes/modes.talon**. For example, to activate TypeScript support say the command `force type script`. This will activate the correct mode for as long as you want until you say the command `clear language modes`.

### Where are my languages defined?
There are some commands that are defined at a high level for all programming languages. These commands are defined in **code/programming.talon**. The functionality for these is implemented in each language script, for example TypeScript functionality is defined in **code/typescript.talon**.

Some language-specific functionality is defined in the specific language script, for example **code/typescript.talon**.

### Some command examples

Some examples of high-level programming concepts that are implemented in TypeScript are given below. See **code/programming.talon** and **code/typescript.talon** for more high-level commands.

|Command|Output (TypeScript, as example)|
|---|---|
|state class|`class `|
|state if|`if ()`|
|funky foo|`private foo()`|
|pro funky foo|`protected foo()`|
|pub funky foo|`public foo()`|

Some examples of language-specific commands defined in TypeScript are given below. See **code/typescript.talon** for more language-specific commands. 

|Command|Output (TypeScript as example)|
|---|---|
|state const|`const `|
|state let|`let `|
|funky var|`var `|
|state map|`.map()`|
|state spread|`...`|
