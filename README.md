# doctornpm

Did somebody call a doctor?  doctornpm is a friendly fork of the
[doctocat](https://github.com/primer/doctocat) Gatsby theme from
GitHub's design systems team for [the npm
documentation](https://docs.npmjs.com/).

## Development

If you need to work on the theme for [the npm
documentation](https://docs.npmjs.com/), this is the place to start.
This repository includes both the [Gatsby theme
itself](https://github.com/npm/doctornpm/tree/main/gatsby-theme-doctornpm)
_and_ the [documentation for the
theme](https://github.com/npm/doctornpm/tree/main/docs).

(The latter also serves as a great example site to act as a test site for
the theme, so that you can view and validate the changes that you're making.)

## Prerequisites

Prerequisites: [Node.js](https://nodejs.org/en/) (LTS) and
[npm 8](https://github.com/npm/cli).

**npm 8 is a requirement** since this repository uses workspaces.
If you don't have npm 8 yet, you can `npm install -g npm@latest`.

## Getting Started

1. Clone this repository: `git clone https://github.com/npm/doctornpm`.
2. `npm install` in the `doctornpm` directory.
3. `npm run develop` to build the site and start a local webserver.
4. Visit the documentation site in your local instance,
   http://localhost:8000/

## Publishing

The documentation for the theme is published to the `gh-pages` branch
via a [GitHub action](.github/workflows/publish.yml).
It lives at [npm.github.io/doctornpm](https://npm.github.io/doctornpm/).

