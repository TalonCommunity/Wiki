# Formatters

Formatter commands are useful for formatting text including prose and variable names. You use a formatter by saying the name of the formatter and then the words you want formatted. You can the full list of formatters by saying `help formatters`. Each line of that help menu has the name of the formatter on the right and example text formatted by that formatter on the left.

Example: saying `camel one two three` will type the text `oneTwoThree`.

| Variable Name Formatter | Description                                    | Example             |
| ----------------------- | ---------------------------------------------- | ------------------- |
| `camel`                 | camel case                                     | oneTwoThree         |
| `snake`                 | underscore (\_) between words                  | one_two_three       |
| `kabob`                 | dash (-) between words                         | one-two-three       |
| `constant`              | all caps with underscore between words         | ONE_TWO_THREE       |
| `hammer`                | pascal case: the start of each word is capital | OneTwoThree         |
| `smash`                 | lowercase with no separator symbols            | onetwothree         |
| `dunder`                | double underscore (\_\_) between words         | one\_\_two\_\_three |

| Code Related Prose Formatter | Description                              | Example             |
| ---------------------------- | ---------------------------------------- | ------------------- |
| `dotted`                     | period (.) between words                 | one.two.three       |
| `packed`                     | double colon (::) between words          | one\:\:two:\:three |
| `string`                     | words surrounded by single quotes        | 'one two three'     |
| `dub string`                 | words surrounded by double codes         | "one to three"      |
| `conga`                      | slash (/) between words                  | one/two/three       |
| `slasher`                    | slash (/) at the start and between words | /one/two/three      |
