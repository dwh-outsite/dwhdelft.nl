# 🌈 Websites of DWH

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

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
