# Contributing to this Wiki

This is a wiki for [Talon](https://talonvoice.com/), a hands-free input replacement for using a computer. These docs are rendered and deployed to:

[https://talon.wiki/](https://talon.wiki)

Join the [Talon Slack](https://talonvoice.com/chat) to find other folks interested in or using Talon. If you want to support the project, consider donating to the [Patreon](https://www.patreon.com/lunixbochs).

## Who can Contribute

This wiki belongs to the Talon Community, and contributions are welcome from anyone.

## Build Notes

### Generating Images for Diagrams

Diagrams are stored in `.graphml` files that were created using
https://www.yworks.com/yed-live

These files are stored within this repository for easy access under the `src/diagrams` directory.

`.graphml` files can be uploaded to yed-live for free, and also modified and converted to an image file for free.

As with all images, these are stored under the `static/img` directory.

### Generating Directory Structure Diagrams

The source for directory structure diagrams are also kept in the `src/diagrams` directory.

These are simple text files that are made pretty by using the `https://tree.nathanfriend.com` website.

This is how the diagrams in [Talon Directory Structure](/docs/Resource%20Hub/terminology.md) were generated.

### Build and view changes locally

Install `npm` then run the following

```
npm i
npm start
```

## Checklist

- Use relative markdown links
- run `npm run build` and make sure the build was successful (i.e. you didn't break any links)
