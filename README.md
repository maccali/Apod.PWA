# ApodSpace

Progressive Web App for NASA's Astronomy Picture of the Day.

<p align="center">
  <a href="https://apod.pictu.one" target="_blank">
    <img alt="Open the site" src="https://github.com/maccali/Apod/blob/master/.github/site.png" />
  </a>
  <a href="https://play.google.com/store/apps/details?id=one.pictu.apod.twa&hl=pt_BR&gl=US" target="_blank">
    <img alt="Open the Android app" src="https://github.com/maccali/Apod/blob/master/.github/google-play.png" />
  </a>
</p>

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint 9 with Next flat config
- Axios
- next-pwa / Workbox
- Bootstrap Grid
- NASA APOD API

## Features

- Today's APOD on the home page
- Image and video APOD support
- Image gallery with 6 days per page
- Calendar search for a specific day
- Day detail modal
- PWA service worker and offline cache
- Google Analytics support

## Requirements

- Node.js `>=20.9.0`
- npm 11+
- NASA API key

Create a `.env` file:

```env
NASA_API_KEY=your_nasa_api_key
```

## Setup

```bash
npm install
npm run dev
```

The local app runs at:

```text
http://localhost:3042
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

`dev` and `build` use the `--webpack` flag because `next-pwa` still adds a Webpack configuration. Next.js 16 uses Turbopack by default, so the explicit flag avoids the Turbopack/Webpack config error.

## Performance Notes

The gallery loads APOD metadata in parallel with `Promise.all`, instead of requesting each day one by one. Image loading can still depend on NASA or YouTube asset size and response time.

Images are currently configured with `images.unoptimized: true` in `next.config.js`, so Next.js does not proxy or optimize remote APOD images.

## Validation

Before opening a PR, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## License

MIT
