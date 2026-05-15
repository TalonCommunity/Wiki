# The <user.prose> Capture
Community uses the <user.prose> capure to let the user dictate prose. This is used by dictation mode and commands that let the user dictate prose as part of them like the formatter commands. The <user.prose> capture allows dictating words and uses the following lists and captures to allow inserting other things.

## {user.punctuation}
The {user.punctuation} list allows inserting punctuation symbols. You can see the spoken forms for the symbols by saying `help punctuation`. 

## <user.prose_spell> and <user.prose_ship>
The <user.prose_spell> capture allows inserting letters by saying `spell <user.letters>`. You can see the spoken forms for letters by saying `help alphabet`. With base Community, you could say `spell abc` to insert "abc" when using the prose capture. The <user.prose_ship> capture allows inserting capital letters by saying `ship <user.letters>`, such as by saying `ship air bat cap` to insert "ABC". 

## <user.number_prose_prefixed>

## The remaining parts of the capture I have not documented yet
        "| {user.prose_snippets}"
        "| <user.prose_currency>"
        "| <user.prose_time>"
        "|"
        "| <user.prose_percent>"
        "| <user.prose_modifier>"
        "| <user.abbreviation>"
        "| <user.prose_contact>"
        "| <user.prose_clipboard>"

