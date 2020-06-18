#This file will add a notification to tell you what Talon heard you say
from talon import app, speech_system
def on_phrase(j):
    app.notify('' ''.join(j['phrase']))
speech_system.register('phrase', on_phrase)
