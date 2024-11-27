# find_and_replace

The commands described here apply to all applications that are tagged with `tag: user.find_and_replace`.

This includes eclipse and visual studio code.

## Command Overview

| Command Prefix | Description                     |
| -------------- | ------------------------------- |
| hunt this      | search within the current file  |
| hunt all       | search within all files         |
| replace this   | replace within the current file |
| replace all    | replace within all files        |

## Find and Find All

| Command                   | Type     | Description                  |
| ------------------------- | -------- | ---------------------------- |
| hunt this                 | find     | show the find dialog         |
| hunt this (pace \| paste) | find     | using the clipboard contents |
| hunt this \<user.text>    | find     | using the spoken text        |
| hunt all                  | find-all | show the find-all dialog     |
| hunt all (pace \| paste)  | find-all | using the clipboard contents |
| hunt all \<user.text>     | find-all | using the spoken text        |
| hunt next                 |          |                              |
| hunt previous             |          |                              |

## Change Search Parameters

| Command         | Description             |
| --------------- | ----------------------- |
| hunt case       | toggle case sensitivity |
| hunt word       | toggle full word match  |
| hunt expression | toggle regex matching   |

## Find and Replace

| Command                     | Type                 | Description                                                                          |
| --------------------------- | -------------------- | ------------------------------------------------------------------------------------ |
| replace this [\<user.text>] | find-and-replaced    | show the find-and-replace dialog, with the find field populated with the spoken text |
| replace all                 | find-and-replace-all | show the find-and-replace-all dialog                                                 |
| replace \<user.text> all    | find-and-replace-all | with the find field populated with the spoken text                                   |
| replace confirm that        |                      |                                                                                      |
| replace confirm all         |                      |                                                                                      |

:::docotodo

```
| clear last \<user.text> [over]   |             |
| clear next \<user.text> [over]   |             |
| clear last clip                  |             |
| clear next clip                  |             |

| comment last \<user.text> [over] |             |
| comment last clip                |             |
| comment next \<user.text> [over] |             |
| comment next clip                |             |

| go last \<user.text> [over]      |             |
| go last clip                     |             |
| go next \<user.text> [over]      |             |
| go next clip                     |             |

| paste last \<user.text> [over]   |             |
| paste next \<user.text> [over]   |             |

| replace last \<user.text> [over] |             |
| replace next \<user.text> [over] |             |

| select last \<user.text> [over]  |             |
| select next \<user.text> [over]  |             |
| select last clip                 |             |
| select next clip                 |             |
```

:::
