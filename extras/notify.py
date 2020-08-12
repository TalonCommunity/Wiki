# This file will add a notification to tell you what Talon heard you say
from talon import app, speech_system
def on_phrase(j):
    phrase = getattr(j["parsed"], "_unmapped", j["phrase"])
    phrase = " ".join(word.split("\\")[0] for word in phrase)
    app.notify(phrase)
speech_system.register('post:phrase', on_phrase)
