---
sidebar_position: 6
---

# Symbols

Symbol commands can be useful for situations not handled by operators and for greater flexibility. `help symbols` will show you the symbol commands. You can say `pad <user.symbol_key>` to insert a symbol surrounded by spaces, such as `pad star` inserting " \* ". The `pad` command can also be used by itself to surround the cursor with spaces.

Because inserting a pair of symbols around the cursor (such as braces, parentheses, and quotation marks) is so common, community offers support for inserting paired delimiters. You can edit these commands by changing the `user.delimiter_pair` list and see these commands by saying `help pairs`.

| Name             | Pair    |
| ---------------- | ------- |
| `round`:         | ( )     |
| `box`:           | [ ]     |
| `diamond`:       | < >     |
| `curly`:         | \{ \}   |
| `twin`:          | ' '     |
| `quad`:          | " "     |
| `skis`:          | \` \`   |
| `percentages`:   | % %     |
| `escaped quad`:  | \\" \\" |
| `escaped twin`:  | \\' \\' |
| `escaped round`: | \\( \\) |
| `escaped box`:   | \\[ \\] |
