# ApodSpace

![Banner for ApodSpace](https://github.com/maccali/Apod/blob/master/.github/banner.png)

Progressive Web App for NASA's Astronomy Picture of the Day.

<p align="center">
  <i>Site & App</i>
</p>

<p align="center">
  <a href="https://apod.pictu.one" target="_blank">
    <img alt="Open the site" src="https://github.com/maccali/Apod/blob/master/.github/site.png" />
  </a>
  <a href="https://play.google.com/store/apps/details?id=one.pictu.apod.twa&hl=pt_BR&gl=US" target="_blank">
    <img alt="Open the Android app" src="https://github.com/maccali/Apod/blob/master/.github/google-play.png" />
  </a>
</p>

<p align="center">
  <i>Info</i>
</p>

<p align="center">
  <img alt="PRs welcome!" src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000&style=flat-square" />
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000&style=flat-square" />
</p>

<p align="center">
  <i>Techs</i>
</p>

<p align="center">
  <a href="https://www.npmjs.com" target="_blank">
    <img alt="NPM" src="https://img.shields.io/badge/npm-11+-0.svg?style=flat-square&labelColor=000000" />
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img alt="Node" src="https://img.shields.io/badge/node-%3E%3D20.9.0-0.svg?style=flat-square&labelColor=000000" />
  </a>
  <a href="https://nextjs.org" target="_blank">
    <img alt="NextJS" src="https://img.shields.io/badge/NextJS-16.2.4-0.svg?style=flat-square&color=6191ff&labelColor=000000" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img alt="ReactJS" src="https://img.shields.io/badge/ReactJS-19.2.5-0.svg?style=flat-square&color=00d8ff&labelColor=000000" />
  </a>
  <a href="https://www.typescriptlang.org" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8.3-0.svg?style=flat-square&color=3178c6&labelColor=000000" />
  </a>
  <a href="https://eslint.org" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/badge/ESLint-9.39.4-0.svg?style=flat-square&color=4b32c3&labelColor=000000" />
  </a>
  <a href="https://github.com/axios/axios" target="_blank">
    <img alt="Axios" src="https://img.shields.io/badge/Axios-1.8.4-0.svg?style=flat-square&color=1f7cb1&labelColor=000000" />
  </a>
  <a href="https://getbootstrap.com" target="_blank">
    <img alt="Bootstrap Grid" src="https://img.shields.io/badge/Bootstrap%20Grid-4.4.1-0.svg?style=flat-square&color=563d7c&labelColor=000000" />
  </a>
  <a href="https://react-icons.github.io/react-icons/" target="_blank">
    <img alt="React Icons" src="https://img.shields.io/badge/React%20Icons-3.10.0-0.svg?style=flat-square&color=e91e63&labelColor=000000" />
  </a>
</p>

<p align="center">
  <i>Best Practices</i>
</p>

<p align="center">
  <a href="https://nextjs.org/docs/pages/api-reference/components/image" target="_blank">
    <img alt="Next Image" src="https://img.shields.io/badge/Next%20Image-Remote%20Images-0.svg?style=flat-square&color=022ba7&labelColor=000000" />
  </a>
  <a href="https://accounts.google.com/" target="_blank">
    <img alt="Google Analytics" src="https://img.shields.io/badge/Google-Analytics-0.svg?style=flat-square&color=f27904&labelColor=000000" />
  </a>
  <a href="https://support.google.com/webmasters/answer/9008080?hl=pt-BR" target="_blank">
    <img alt="Google Site Verification" src="https://img.shields.io/badge/Google-Site%20Verification-0.svg?style=flat-square&color=f36&labelColor=000000" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/" target="_blank">
    <img alt="PWA" src="https://img.shields.io/badge/PWA--0.svg?style=flat-square&color=5a0fc8&labelColor=000000" />
  </a>
  <a href="https://developers.google.com/web/android/trusted-web-activity" target="_blank">
    <img alt="TWA" src="https://img.shields.io/badge/TWA--0.svg?style=flat-square&color=5a0fc8&labelColor=000000" />
  </a>
  <a href="https://en.wikipedia.org/wiki/Search_engine_optimization" target="_blank">
    <img alt="SEO" src="https://img.shields.io/badge/SEO-0.svg?style=flat-square&color=0082f0&labelColor=000000" />
  </a>
  <a href="https://en.wikipedia.org/wiki/Site_map" target="_blank">
    <img alt="Site Map" src="https://img.shields.io/badge/Site-Map-0.svg?style=flat-square&color=c1baa0&labelColor=000000" />
  </a>
</p>

<p align="center">
  <i>Recommended Tools</i>
</p>

<p align="center">
  <a href="https://code.visualstudio.com/" target="_blank">
    <img alt="Made with VSCode" src="https://img.shields.io/badge/Made%20with-VSCode-1f425f.svg?style=flat-square" />
  </a>
  <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank">
    <img alt="Lighthouse" src="https://img.shields.io/badge/Light-House-0.svg?style=flat-square&color=e95632&labelColor=000000" />
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
