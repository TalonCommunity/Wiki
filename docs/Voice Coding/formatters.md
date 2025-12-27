---
sidebar_position: 2
---

# Formatters

Formatter commands are useful for formatting text, including prose and identifiers in code. You use a formatter by saying the name of the formatter and then the words you want formatted. You can the full list of formatters by saying `help formatters` — formatter names are listed on the right and the example text "one two three" formatted by that formatter on the left.

Example: saying `camel one two three` will insert the text `oneTwoThree`.

| Identifier Formatter | Description                                        | Example             |
| -------------------- | -------------------------------------------------- | ------------------- |
| `camel`              | camel case                                         | oneTwoThree         |
| `snake`              | underscore (\_) between words                      | one_two_three       |
| `kebab`              | hash (-) between words                             | one-two-three       |
| `constant`           | all caps with underscore between words             | ONE_TWO_THREE       |
| `hammer`             | Pascal case: the start of each word is capitalized | OneTwoThree         |
| `smash`              | lowercase with no separator symbols                | onetwothree         |
| `dunder`             | double underscore (\_\_) between words             | one\_\_two\_\_three |

| Other Code Formatter | Description                              | Example                |
| -------------------- | ---------------------------------------- | ---------------------- |
| `dotted`             | period (.) between words                 | one.two.three          |
| `packed`             | double colon (::) between words          | one::&#8203;two::three |
| `string`             | words surrounded by single quotes        | 'one two three'        |
| `dub string`         | words surrounded by double quotes        | "one two three"        |
| `conga`              | slash (/) between words                  | one/two/three          |
| `slasher`            | slash (/) at the start and between words | /one/two/three         |
