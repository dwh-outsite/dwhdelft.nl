# 🌈 Websites of DWH

## Setup

DWH is the independent LGBT+ association of Delft and surroundings.
We're two things: a meeting place for LGBT+ people and their friends and a group that actively
pushes for greater LGBT+ rights and acceptance.

The website is a (statically generated) [Nuxt.js](https://nuxtjs.org) app hosted on [Cloudflare](https://cloudflare.com).
The app makes heavy use of [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/).


## Requirements

* [Node.js 22](https://nodejs.org/en)
* NPM

## Build Setup

```bash
npm install
```

## Development

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
