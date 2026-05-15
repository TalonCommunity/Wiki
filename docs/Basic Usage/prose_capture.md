# The <user.prose> Capture
Community uses the <user.prose> capure to let the user dictate prose. This is used by dictation mode and commands that let the user dictate prose as part of them like the formatter commands. The <user.prose> capture allows dictating words and uses the following lists and captures to allow inserting other things.

## {user.punctuation}
The {user.punctuation} list allows inserting punctuation symbols. You can see the spoken forms for the symbols by saying `help punctuation`. 

## <user.prose_spell> and <user.prose_ship>
The <user.prose_spell> capture allows inserting letters by saying `spell <user.letters>`. You can see the spoken forms for letters by saying `help alphabet`. With base Community, you could say `spell abc` to insert "abc" when using the prose capture. The <user.prose_ship> capture allows inserting capital letters by saying `ship <user.letters>`, such as by saying `ship air bat cap` to insert "ABC". 

## <user.number_prose_prefixed>
The <user.number_prose_prefixed> capture allows inserting a number by saying `numb` or `numeral` and then a number. Saying `numb five` inserts "5". The following table has more examples.

| Spoken Form          | Inserted Text                 |
| ---------------- | --------------------------- |
| `numb three point five`        | 3.5  |
| `numb negative five`    | -5 |
| `numb three comma four` | 3,4   |
| `numb three colon twenty`   | 3:20     |

## <user.prose_percent>
The <user.prose_percent> capture allows inserting a number followed by a percent sign by dictating a number and then `sign`. For instance, saying `thirty fives point nine percent` inserts "35.9%".

## <user.prose_time>
The <user.prose_time> capture allows inserting a time of day. For instance, saying `twelve thirty` inserts "12:30". Saying `two pm` inserts "2pm" and saying `five thirty am` inserts "5:30am". 

## The remaining parts of the capture I have not documented yet
        "| {user.prose_snippets}"
        "| <user.prose_currency>"
        "| <user.prose_modifier>"
        "| <user.abbreviation>"
        "| <user.prose_contact>"
        "| <user.prose_clipboard>"

