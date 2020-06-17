# Contributing
This is a wiki for the beta version of [Talon](https://talonvoice.com/), a hands-free input replacement for using a computer.

Join the [Talon Slack](https://talonvoice.com/chat) to find other folks interested in or using Talon. The beta version is currently only available to Talon Beta tier Patreon supporters. If you want to try out the beta, consider donating to the [Patreon](https://www.patreon.com/lunixbochs). Links to download the beta version can be found in the @beta channel.

## How this Wiki is Built

This wiki is built using:
- [jekyll](https://jekyllrb.com/docs/), a static site generator
- [GitHub Pages](https://jekyllrb.com/docs/github-pages/), to host the site
- [git-wiki-theme](https://github.com/Drassil/git-wiki-theme), a wiki theme for jekyll
- [prose.io](https://github.com/prose/prose), a content editor for GitHub

# Adding Content
## Who can Contribute
This wiki belongs to the Talon Community, and contributions are welcome from anyone. Anyone can make pull requests, and any member of the TalonCommunity GitHub organization can merge that pull request. Talon Community members can push directly to `gh-pages` branch.

Content is formatted using Markdown syntax. Check out this [Markdown Syntax Guide](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf).

## New Pages
New pages can be added to the root directory - no need to add to any subfolder. Pages should include the `.md` file extension or they will not be rendered.

## Prose
As an alternative to editing wiki content with git or the GitHub UI, links to edit content using `Prose.io` are embedded into the site. If editing using Prose, please don't use the default filename including the date `2020-06-16-your-filename.md` and instead name it like `your-filename.md` with the `.md` file extension. Files without `.md` will not be rendered by jekyll.

## Previewing Changes Locally
Follow the instructions in the [Quickstart jekyll docs](https://jekyllrb.com/docs/) to setup a Ruby environment and install bundler.  To build the site and make it available to a local server, run:

```
bundle exec serve jekyll
```

and open `http://localhost:4000` in a browser.

Some functionality, such as the editing with prose, cannot be easily tested locally.

## Deploying the Changes
All changes merged to `gh-pages` branch will be automatically deployed using GitHub pages to the domain `talon.wiki`. There is some delay between merge and when site is refreshed with the new content, so expect changes to take a few minutes.


