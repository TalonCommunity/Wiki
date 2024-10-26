# Browsers

The commands described here apply to all applications that are classified as a browser
(technically, those `.talon` files that have the line `tag: browser`).

This includes chrome, firefox, edge, safari.

Note that if these commands don't work, you might find some useful info in the [setup](#) section below.

## Commands


| Command                                                | Description                                 |
| ------------------------------------------------------ | ------------------------------------------- |
| `address bar \| go address \| go url`                  | places the focus within the address bar     |
| `go page \| page focus`                                | places the focus within the webpage content |
| `address copy \| url copy \| copy address \| copy url` | copies the content of the address bar       |
| `go home`                                              |                                             |
| `go to {user.website}`                                 | Navigates to the specified named website, for example `go to wikipedia`    |
| `go private`                                           |                                             |
| `bookmark it`                                          |                                             |
| `bookmark tabs`                                        |                                             |
| `bookmark show`                                        |                                             |
| `bookmark bar [show]`                                  |                                             |
| `downloads show`                                       |                                             |
| `extensions show`                                      |                                             |
| `history show`                                         |                                             |
| `cache show`                                           |                                             |
| `dev tools [show]`                                     |                                             |
| `(refresh \| reload) it`                               |                                             |
| `(refresh \| reload) it hard`                          |                                             |

## Website List

The list of known websites is contained in the `core\websites_and_search_engines\website.talon-list` and includes the following entries:

```
talon home page: http://talonvoice.com
talon slack: http://talonvoice.slack.com/messages/help
talon wiki: https://talon.wiki/
talon practice: https://chaosparrot.github.io/talon_practice/
talon repository search: https://search.talonvoice.com/search/
amazon: https://www.amazon.com/
dropbox: https://dropbox.com/
google: https://www.google.com/
google calendar: https://calendar.google.com
google maps: https://maps.google.com/
google scholar: https://scholar.google.com/
gmail: https://mail.google.com/
github: https://github.com/
gist: https://gist.github.com/
wikipedia: https://en.wikipedia.org/
youtube: https://www.youtube.com/
```

## Customizing the List

Perhaps the cleanest way to customize the list, is to use the method described in 
[Overriding Existing Voice Commands and Lists](/docs/Customization/managing-customizations.md#overriding-cleanly)

## Setup

Some of the Talon files for web apps (e.g. `apps/github/github_web.talon`) use a `browser.host` matcher. These talon files should work out of the box for Safari, Chrome, Brave, on Mac, but require additional configuration on other browsers/operating systems.

`community` is set up so that if a URL is found in the titlebar of an application matching the 'browser' tag it will be used to populate the browser.host matcher (see `code/browser.py`). This probably means that you will need an extension to make the browser.host based scripts work.

Browser extensions that can add the protocol and hostname or even the entire URL to the window title:

Firefox:

- https://addons.mozilla.org/en-US/firefox/addon/keepass-helper-url-in-title/

Chrome:

- https://chrome.google.com/webstore/detail/url-in-title/ignpacbgnbnkaiooknalneoeladjnfgb
