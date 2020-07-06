## New sconv4 model

If you would like to test out the new voice model and are in the beta program, here are the instructions.
This works for macOS and Linux only, and this does NOT work with web2letter:  

1. Update to latest Talon (at least v1328)
2. Download tarball: [link to URL in beta channel](https://talonvoice.slack.com/archives/G9YTMSZ2T/p1593080845371600?thread_ts=1593080845.371600)
3. Extract tarball to `~/.talon/`. It will create `w2l/en_US-sconv-beta4/`
4. Copy `lm-ngram.bin` from your existing `w2l/en_US` directory into `en_US-sconv-beta4`.
5. Edit your existing `user/w2l.py` by commenting out the other model and add a new line):    
```
#engine = W2lEngine(language='en_US', debug=True)
engine = W2lEngine(language='en_US-sconv-beta4', debug=True)
```
6. Restart Talon.
