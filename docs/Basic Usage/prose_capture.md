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

## <user.prose_currency>
The <user.prose_currency> capture allows inserting an amount of money by saying a number followed by a currency, such as by saying `twelve dollars` to insert "$12". Saying a number after the currency puts the second number after a decimal point, such as saying `twelve dollars fifty` to insert "$12.50". You can optionally say `and` after the currency and `cents` or `pence` at the end, such as saying `twelve dollars and fifty cents` to insert "$12.50".

## <user.abbreviation>
The <user.abbreviation> capture allows inserting an abbreviation by saying `brief {user.abbreviation}`. For instance, saying `brief statistic` inserts "stat". You can read and edit the list of abbreviations by saying `customize abbreviations`.

## <user.prose_modifier>
You can use the following prose modifiers in the <user.prose> capture to change the formatting. 

| Prose formatting options | Description                               |
| ------------------------ | ----------------------------------------- |
| `cap`                    | capitalize the next word                  |
| `no cap` or `no caps`    | the next word is in lowercase             |
| `no space`               | no space is inserted before the next word |

For instance, saying `this is an cap example of no space formatting` inserts "This is an Example offormatting".

## The remaining parts of the capture I have not documented yet
        "| {user.prose_snippets}"
        "| <user.prose_contact>"
        "| <user.prose_clipboard>"

