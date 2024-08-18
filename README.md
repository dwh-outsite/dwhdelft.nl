# 🌈 Websites of DWH

## Setup

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
npm install
```

## Development Server

## Preview
When opening a PR, Netlify automatically generates a preview. This preview is only generated for either Outsite or DWH.
You can swap out `outsite` for `dwh` in the URL to see the DWH website (and reverse).

## Page Types

```bash
npm run dev <domain>

# For example:
npm run dev dwhdelft.nl
npm run dev outsite.nl
```

_The domain argument is actually the subdirectory. We use [Nuxt layers](https://nuxt.com/docs/getting-started/layers) to generate multiple websites from the same codebase._

## Production

Build the application for production:

```bash
npm run build <domain>
```

Locally preview production build:

```bash
npm run preview <domain>
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
