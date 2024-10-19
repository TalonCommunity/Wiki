# Programming Languages

Talon community includes specific support for the following programming languages:


| Language          | File Extension | Note                                                                  |
| ----------------- | -------------- | --------------------------------------------------------------------- |
| `batch`           | `bat`          |                                                                       |
| `c`               | `c` or `h`     |                                                                       |
| `csharp`          | `cs`           |                                                                       |
| `css`             | `css`          |                                                                       |
| `gdb`             | `gdb`          |                                                                       |
| `go`              | `go`           |                                                                       |
| `java`            | `java`         |                                                                       |
| `javascript`      | `js`           |                                                                       |
| `javascriptreact` | `jsx`          |                                                                       |
| `kotlin`          | `kt`           |                                                                       |
| `lua`             | `lua`          |                                                                       |
| `markdown`        | `md`           |                                                                       |
| `php`             | `php`          |                                                                       |
| `python`          | `py`           |                                                                       |
| `r`               | `r`            |                                                                       |
| `ruby`            | `rb`           |                                                                       |
| `rust`            | `rs`           |                                                                       |
| `scala`           | `scala`        |                                                                       |
| `scss`            | `scss`         |                                                                       |
| `sql`             | `sql`          |                                                                       |
| `stata`           | `do` or `ado`  |                                                                       |
| `talon`           | `talon`        |                                                                       |
| `talonlist`       | `talon-list`   |                                                                       |
| `terraform`       | `tf`           |                                                                       |
| `tex`             | `tex`          |                                                                       |
| `typescript`      | `ts`           |                                                                       |
| `typescriptreact` | `tsx`          |                                                                       |
| `vimscript`       | `vim vimrc`    |                                                                       |
| `html`            | `html`         | html doesn't actually have a language mode but we do have snippets.   |

## Supporting New Languages


Python, C#, Talon and JavaScript language support is broken up into multiple tags in an attempt to standardize common voice commands for features available across languages. 

Each tag is defined in a `.talon` file named after a `user.code_` tag (e.g., `user.code_functions` → `functions.talon`) containing voice commands and a Python file declaring the actions that should be implemented by each concrete language implementation to support the voice commands. These files include:


| Tag                                          | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `lang/tags/comment_block.{talon,py}`         | block comments (e.g., C++'s `/* */`)                         |
| `lang/tags/comment_documentation.{talon,py}` | documentation comments (e.g., Java's `/** */`)               |
| `lang/tags/comment_line.{talon,py}`          | line comments (e.g., Python's `#`)                           |
| `lang/tags/data_null.{talon,py}`             | null & null checks (e.g., Python's `None`)                   |
| `lang/tags/data_bool.{talon,py}`             | booleans (e.g., Haskell's `True`)                            |
| `lang/tags/functions.{talon,py}`             | functions and definitions                                    |
| `lang/tags/functions_common.{talon,py}`      | common functions (also includes a GUI for picking functions) |
| `lang/tags/imperative.{talon,py}`            | statements (e.g., `if`, `while`, `switch`)                   |
| `lang/tags/libraries.{talon,py}`             | libraries and imports                                        |
| `lang/tags/libraries_gui.{talon,py}`         | graphical helper for common libraries                        |
| `lang/tags/object_oriented.{talon,py}`       | objects and classes (e.g., `this`)                           |
| `lang/tags/operators_array.{talon,py}`       | array operators (e.g., Ruby's `x[0]`)                        |
| `lang/tags/operators_assignment.{talon,py}`  | assignment operators (e.g., C++'s `x += 5`)                  |
| `lang/tags/operators_bitwise.{talon,py}`     | bitwise operators (e.g., C's `x >> 1`)                       |
| `lang/tags/operators_lambda.{talon,py}`      | anonymous functions (e.g., JavaScript's `x => x + 1`)        |
| `lang/tags/operators_math.{talon,py}`        | numeric, comparison, and logical operators                   |
| `lang/tags/operators_pointer.{talon,py}`     | pointer operators (e.g., C's `&x`)                           |



Language-specific implementations of the above features are in files named `lang/{your-language}/{your-language}.py`.

To add support for a new language, ensure appropriate extension is added/uncommented in the [`language_extensions` dictionary in language_modes.py](core/modes/language_modes.py#L9). Then create the following files:

- `lang/{your-language}/{your-language}.py`
- `lang/{your-language}/{your-language}.talon`

Activate the appropriate tags in `{your-language}.talon` and implement the corresponding actions in `{your-language}.py`, following existing language implementations. Put additional voice commands for your language (not shared with other languages) in `{your-language}.talon`.

