# 🌈 Website of DWH

[![Netlify Status](https://api.netlify.com/api/v1/badges/267389a7-6a04-4d23-85c1-0956dfd672a1/deploy-status)](https://app.netlify.com/sites/dwh/deploys)

DWH is the independent LGBT+ association of Delft and surroundings. 
We're two things: a meeting place for LGBT+ people and their friends and a group that actively
pushes for greater LGBT+ rights and acceptance.

The website is a (statically generated) [Nuxt.js](https://nuxtjs.org) app hosted on [Netlify](https://netlify.com).
The app makes heavy use of [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/).


## Node version
Compatible node versions: `(^14.18.0 || ^16.10.0 || ^17.0.0 || ^18.0.0 || ^19.0.0)`.

We recommend node v16.

For node v17 and up, a [ERR_OSSL_EVP_UNSUPPORTED error](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported) can arrise. To surpress this, switch to an older version (node v16), or set `NODE_OPTIONS=--openssl-legacy-provider` in your .zshrc.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Preview
When opening a PR, netlilfy automatically generates a preview. This preview is only generated for either Outsite or DWH.
You can swap out _outsite_ for _dwh_ in the URL to see the DWH website (and reverse).

## Page Types

The "easier" pages are Markdown based and can be found in `content/pages`.
There are multiple layouts available for these pages.
The markdown pages can make use of components from `components/globals`.
See [the documentation of Nuxt Content](https://content.nuxtjs.org/writing) for further details.

The more complex pages of the website live in the `pages/` directory and are Vue components,
supported by the components in `components/`.
When these pages have content-heavy elements, their content usually comes from markdown files in the
`content/` directory.
