---
sidebar_position: 3
---

# Operators

With supported languages, most operators can be dictated with `op (operator name)` and comparison operators can be dictated with `is (operator name)`.

For example, saying `op equals` while editing a Python file inserts `=`. Saying `is equal` inserts `==`.

You can find the spoken forms for the operators in the talon-list files with names that start with `operators` in the [lang/tags directory](https://github.com/talonhub/community/tree/main/lang/tags).

To see which operators are supported for a given language or change how any operators are inserted, find the Python file for the language implementation in the [lang directory](https://github.com/talonhub/community/tree/main/lang) and look for the `Operators` object.
