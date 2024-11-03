# Downloading the Talon User File Set

After installing talon, and a speech recognition engine as described here,
you will need to  download a user file set. This wiki is all about the talent community user file set
and so this page is about downloading  that specific user file set.

This can be done using two different methods, using zip and using git.

The background to this choice is that if you use Talon for any period of time,
you can expect the following:

- The community will update the `user file set` with bug fixes and new features, and you will want
to update your local copy of it.
- You might make your own changes to some of these files.

---

## Considerations

### About `zip`
This is easier to get started with Talon as it involves only downloading a single file and using standard
methods on your PC to extract all the files from it.

The disadvantage is longer term. Periodically on those occasions when you download the latest community user file set, you will manually need to keep track of which files you have changed
and make sure those changes aren't lost during the update.

:::tip

In many cases, this disadvantage can be mitigated by following the recommendations SO BE COMPLETED

:::

### About `git`
The benefit of `git`, is that it makes it easy to obtain the latest files without losing any changes you've made in the meantime.
This is a benefit when using talent longer term.

If you haven't already heard of `git`, and if you are not particularly comfortable using a command terminal, 
this will be harder to get started with Talon.

### Summary
If you are not particularly comfortable using a command terminal, and if you are just wanting to explore the suitability of Talon
you may wish to use the simpler method of downloading `zip` files. 

You will always be able to switch to using `git` down the track.

---

## Instructions

### Installing Using the Zip File

In this method, the zip file is downloaded from:
https://github.com/talonhub/community

Click on the `Code` button:
<img src="/img/talonhub_community_github.png/"
     alt="screenshot of the talon hub community page on GitHub"
/>

And download the zip file:
<img src="/img/talonhub_community_download.png/"
     alt="screenshot of the GitHub code panel"
/>

- Extract the files. If you don’t know how to extract zip files, a quick google search for "extract zip files" may be helpful.
- Place these extracted files inside the `user` folder of the Talon Home directory. You can find this folder by right-clicking the Talon icon in the taskbar (Windows) or clicking the Talon icon in the menu bar (Mac), clicking Scripting > Open ~/talon, and navigating to `user`.

### Installing Using Git

If you wish to install `community` by using git, proceed as follows:

#### Linux & Mac

1. Install [`git`](https://git-scm.com/)
1. Open a terminal ([Mac](https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) / [Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners#3-opening-a-terminal))
1. Paste the following into the terminal window then press Enter/Return:

```bash
cd ~/.talon/user
git clone https://github.com/talonhub/community community
```

#### Windows

1. Install [`git`](https://git-scm.com/)
2. Open a [command prompt](https://www.wikihow.com/Open-the-Command-Prompt-in-Windows)
3. Paste the following into the command prompt window then press Enter:

```
cd %AppData%\Talon\user
git clone https://github.com/talonhub/community community
```

