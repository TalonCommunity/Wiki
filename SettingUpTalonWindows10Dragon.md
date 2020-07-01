# Setting Up Talon on Windows 10 with Dragon Dictate

This is a tutorial describing how make your computer obey your voice commands.  

This is a tutorial about how to set up Talon on a Windows 10 machine, using Dragon Dictate.  Talon does NOT need Dragon Dictate, but this tutorial assumes you will be using Dragon Dictate because that is the setup that I, Tara, the tutorial writer, am using.  If you need help [installing dragon dictate, see this other tutorial I wrote. ](https://gist.github.com/tararoys/41514be609c953139294b8a674b25dc9).  Talon is voice control software made by programmers for programmers, and is very powerful and very much a work in progress.  

This tutorial was written April 28, 2020, and will probably be obselete the week after it was written.  Talon is software written by a programmer for programmers who suffer from a wide variety of thing that make it impossible to use their hands.  The version of talon this set of instructions was written for is a beta in rapid development.  It is a very exciting time to be involved in voice-control software, the tools are improving immensely, and things are changing almost daily!

As a result, please, please, make use of the [https://talonvoice.com/chat](talon slack chat channel) and if you get stuck on a step, please ask about it!  There could be any number of things going on.  Part of the reason I (Tara Roys, also known at @tararoys in the chat) wrote this tutorial was to make it easier for people to say, 'hey, I'm stuck on step 4 of the tutorial" and that way it's easier to figure out if the directions have changed.  

A talon setup has three parts that you need to have installed.  The first is some sort of voice processing engine that takes your voice and picks out recognizable words.  This tutorial assums you have bought Dragon Dictate and are using that.  The second is Talon, which is a very powerful engine that has commands that can control huge parts of your computer.  The third is a set of configuration files, which matches words you (or someone) has choses to make into commands with the programmed commands in talon.  Basically, the configuration files are your list of magic words, and talon is the genie that does what you command.   

This tutorial him assumes you already have Dragon Dictate installed, and will tell you how to set up Talon and how to install a set of commands made by J. Knaus.    

1. Go to [talonvoice.com](https://talonvoice.com)  

![Talon Home Page](https://user-images.githubusercontent.com/1163925/80399596-17382100-887f-11ea-8434-07cf901abf92.png)

2.  Talon is a work in progress on Windows, and nowhere near as complete as the Mac version.  If you want to use it at this point, there is a fee to help support it's development.  This is because research takes time.  You are going to want to select the private beta. 

![select private beta link](https://user-images.githubusercontent.com/1163925/80400335-43a06d00-8880-11ea-8d91-9d9debc070c5.png)

Many people who suffer from artheritis, RSI, amputation, chronic pain, or any of the many, many medical or mental conditions that make using a computer difficult or impossible also suffer from varying levels of extreme poverty, so if the $15 per month fee is too steep it can be waived.  This is also the only option available if you are unbanked and don't have a credit or debit card that can be used on the internet. 

You do have to work up the courage to ask, and the place to make a request is in the chat link, and the person to ask is @aegis:  [![chat link](https://user-images.githubusercontent.com/1163925/80401039-4e0f3680-8881-11ea-8adf-857fedf6da2e.png)](https://app.slack.com/client/T7FPSMV8F/C7ENXA7C4/thread/G9YTMSZ2T-1586396820.149800)

![help section of talon slack channel](https://user-images.githubusercontent.com/1163925/80401375-dc83b800-8881-11ea-98cb-af13fbe362a2.png)


If you do get a fee waiver, you will follow a different process than the rest of this tutorial.  

2.  Choose the $15 private Beta level of Patreon Subscription

![Patreon $15 tier](https://user-images.githubusercontent.com/1163925/80402444-8a439680-8883-11ea-975e-c84b1091b652.png)

Go through the Patreon checkout process. When you have managed to pay patreon somehow, you will see this notice: 

![Beta Tier Privileges notice](https://user-images.githubusercontent.com/1163925/80403676-97618500-8885-11ea-9794-f5562027eefe.png)

Thanks so much! Make sure to join the Talon Slack (if you're interested in using or talking about voice/eye/other computer input systems) and talk about the projects and features you find exciting. If your Patreon tier has Talon-related rewards, such as beta or #vip access, message me at @aegis on the Talon Slack to receive them.

3.  At the time when this tutorial was written, when you go into the Talon Slack channel and message @aegis, @aegis will send you a private message with the download links for Talon.  @aegis also gives access to the @beta channel, which is an excellent place to talk about everything talon beta-related.  (If you need the download links again for some reason, they are in the pinned messages in the beta channel)  

![pinned download links for latest operating systems](https://user-images.githubusercontent.com/1163925/80405507-5323b400-8888-11ea-8cd9-367c5fd17e3f.png)

4.  Click on the Windows Download.  Wait for the it to be downloaded. 

![windows download](https://user-images.githubusercontent.com/1163925/80405751-a39b1180-8888-11ea-8ab9-0db481b6e43e.png)

Choose open with Windows Explorer. Wait for the download.  It can takes awhile, depending on how fast or slow your internet connection is.  

You can view the progress of the download by pressing the download arrow in the browser bar if the browser is firefox

5.  ![You can view the progress of the download by pressing the download arrow in the browser bar if the browser is firefox](https://user-images.githubusercontent.com/1163925/80434620-de6c6c00-88bf-11ea-8205-106151f97897.png)

When the download is finished, it will open in Windows explorer. Windows explorer will unzip the file.  

![Windows Explorer will Unizip the files](https://user-images.githubusercontent.com/1163925/80434461-7584f400-88bf-11ea-94b7-e7941d1c2841.png)

6. Press the 'Extract All' button.

![press extract all button](https://user-images.githubusercontent.com/1163925/80434911-b29db600-88c0-11ea-844b-92b0652cdf95.png)

We need to select a destination file.  The proper destination is program files.  We need to browse around to find program files. 

![We need to select a destination file.  The proper destination is program files](https://user-images.githubusercontent.com/1163925/80435091-39eb2980-88c1-11ea-9e33-9f9319dfe616.png)

Press the 'browse' button. 

![press the brows button](https://user-images.githubusercontent.com/1163925/80435236-9a7a6680-88c1-11ea-954e-b3167e1a2786.png)

In the file browser window, click on your "C" drive.  In the case of this example computer, it is Acer C:

![image](https://user-images.githubusercontent.com/1163925/80435425-15dc1800-88c2-11ea-9c9e-7971eaa37a7c.png)

Select Program Files.

![select Program Files](https://user-images.githubusercontent.com/1163925/80435558-73706480-88c2-11ea-8285-b55428ae2ee0.png)

Make a new folder called Talon, then highlight it to select it.  

Press Select folder button to select the talon folder.

![The files will be extracted to C:Program Files\Talon](https://user-images.githubusercontent.com/1163925/80436825-abc57200-88c5-11ea-9c59-5764e786ab81.png)

Check the 'show extracted files when complete' check box.  Then press extract. 

7. Grant the computer permission to install talon in this directory


![grant the computer permission to install talon in this directory](https://user-images.githubusercontent.com/1163925/80436953-fba43900-88c5-11ea-98e4-889c34235cd3.png)

Check 'do this for all current items' or you will need to give permission for several hundred files.  And that would be annoyging.  

![copying extracted files](https://user-images.githubusercontent.com/1163925/80436014-b67f0780-88c3-11ea-9448-626d932c44d5.png)

Open folder when extraction is done


![Open Folder when extraction is done](https://user-images.githubusercontent.com/1163925/80437462-42466300-88c7-11ea-9374-e071c385f4af.png)

Scroll down until you find Talon.  It will have a type application.  Double-click on it to start talon. 

![image](https://user-images.githubusercontent.com/1163925/80437663-c698e600-88c7-11ea-8a52-7333cd9c08b4.png)

8.  To check if the installation was successful, do the following: 

In the lower right hand corner of your screen, in the show hidden icons arrow, you can check to see if talon is up and running by looking for the talon icon

![In the lower right hand corner of your screen, in the show hidden icons arrow, you can check to see if talon is up and running by looking for the talon icon](https://user-images.githubusercontent.com/1163925/80437798-3e671080-88c8-11ea-9ceb-d69329f3bfdc.png)

This is the talon icon:  
![talon icon](https://user-images.githubusercontent.com/1163925/80437865-635b8380-88c8-11ea-9e5d-f2f7376539ce.png)

12.  We have intalled talon, but without a set of verbal commands we can't tell the computer to do anything.   Now we install a set of commands.  

Go to [https://github.com/knausj85/knausj_talon](https://github.com/knausj85/knausj_talon )

![knausj_talon configuration files github page](https://user-images.githubusercontent.com/1163925/80517915-65b2f180-894b-11ea-9910-ab8a695d5234.png)

Press the green clone or download button.

![Press the green 'clone or download' button](https://user-images.githubusercontent.com/1163925/80518297-e7a31a80-894b-11ea-88a8-c2569b1f4f0a.png)

Choose the download Zip option.

![choose the download zip option](https://user-images.githubusercontent.com/1163925/80518505-25a03e80-894c-11ea-8c56-7fd4f419a23f.png)

A download window will open.  Choose open files with windows file explorer, then press 'ok.'
![A download window will open.  Choose open files with windows file explorer, then press 'ok.'](https://user-images.githubusercontent.com/1163925/80518706-74e66f00-894c-11ea-9b4a-6577dfe2fdb6.png)

The configuration files are in the knausj_talon-master file folder. 

![Windows explorer extraction tool](https://user-images.githubusercontent.com/1163925/80519188-34d3bc00-894d-11ea-9af6-2e8aa456aea4.png)

Press Extract all button.  The files will be moved to a temporary place.  After that, we will move them to their permenant home, where Talon can find them. 

![press the extract all button](https://user-images.githubusercontent.com/1163925/80519305-62b90080-894d-11ea-8c9c-552ab0868c8d.png)

![this is the temporary folder.
](https://user-images.githubusercontent.com/1163925/80519497-b3305e00-894d-11ea-8e49-65a8daea52ce.png)

this is the temporary folder.  We will move the folder to the proper place after we extracted.  
you will see the following extraction window as the process is happening.

![extraction window](https://user-images.githubusercontent.com/1163925/80519945-613c0800-894e-11ea-9fd5-dbb45940e382.png)

and now we see the folder. Leave this open while we find the place we are going to move this file to.

![extracted talon configuration file temporary storage place ](https://user-images.githubusercontent.com/1163925/80520115-93e60080-894e-11ea-934d-b5713be0baf3.png)

Open the icons tray in the lower left-hand corner of your computer screen.

Right click on the talon icon.

Open talon by going to the lower right hand side of the computer, clicking on the system tray arrow, and right clicking on the talent icon (the one in light gray highlighted in the picture below).

![Talon icon in icon tray lower right -hand side of a computer screen](https://user-images.githubusercontent.com/1163925/80521146-23d87a00-8950-11ea-8e22-ed35919d8575.png)

Right click on the talon icon. Click on the scripting menu item. Click on ~/talon.  This will open the folder where your configuration folder is supposed to go.

![Right click on the talon icon. Click on the scripting menu item. Click on ~/talon](https://user-images.githubusercontent.com/1163925/80521711-1a034680-8951-11ea-8791-4ebde079cc18.png)

You want to put the knausj_config-master folder in the user folder. Double-click on the user folder to open it.  

![You want to put the knausj_config-master folder in the user folder](https://user-images.githubusercontent.com/1163925/80523202-4fa92f00-8953-11ea-8773-114a2eacb61f.png)

You have a window with the knausj_config-master folder and the talon folder.  Drag the knaus_jconfig-master folder over to the user folder window, and drop it.  



Now, with Dragon running and talon running, we can say our first talon command.  Make sure the dragon button is green so you know Dragon is taking in audio.  

![green dragon button](https://user-images.githubusercontent.com/1163925/80438041-da911780-88c8-11ea-99c6-87dd01d4887a.png)

Then say the command 'help alphabet.'  If Talon is working correctly, you should see the Talon alphabet.

![the Talon Alphabet](https://user-images.githubusercontent.com/1163925/80438142-13c98780-88c9-11ea-906c-fb19b7d659c5.png)

You can make this disappear by saying 'help close.' 

If these commands do not work, close and restart dragon, and close and restart talon, and try again.
