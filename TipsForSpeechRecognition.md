## Tips for Speech Recognition Accuracy

1. Make sure that you have a good microphone and sound card. Speech recognition software requires better hardware than is commonly built in to computers.
[Selection guides](https://www.speechrecsolutions.com/MicGuide.htm) are available to choose the best microphones at each price point.

    a. Good hardware will not only improve accuracy, but also latency: bad hardware may pick up background noise, which makes it harder for Talon to determine when you are done speaking so it can begin executing commands.

    b. Ensure that the microphone is placed a consistent distance away from your mouth. For headset microphones, most speech recognition documentation recommends that you place the boom of the microphone approximately one inch from your face. For table microphones, somewhere between six and twelve inches works best.

    c. Increase the input volume of your microphone all the way up in your operating system settings.

2. Make sure that you are in the correct mode. `knausj_talon` has two modes: command mode and dictation mode.

    a. Use dictation mode for free-form speech dictation, like writing an email. (Switch by saying "dictation mode".)

    b. Use command mode for everything else, including dictating individual letters or writing code. (Switch by saying "command mode".)

3. Some people have problems with similar words such as "four" and "fourth" being misrecognized.

    a. One easy solution is too simply switch one of the words to be less phonetically similar: grep the `.talon` files for the similar word and change to a less common one.

    b. Enunciation guides are also available on the internet, which may help if you are not correctly enunciating all syllables.

4. Ensure that your voice is not tired, which will lead to poorer pronunciation.

    a. Make sure to drink plenty of liquids throughout the day: warm water and tea are especially helpful.

    b. Try to speak in a natural tone as if you are talking with someone else. At first this will feel a little weird, but speaking in an unatural voice will tire you out quicker.

    c. Try to keep your speaking volume consistent and low, quality microphones can easily pick up any volume you talk at. Speaking with low volume should help keep you from getting tired out.
