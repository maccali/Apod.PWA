// External Libs
import '../../public/libs/bootstrap/bootstrap.min.css?v=2'

// Custom styles
import '../../public/custom/css/template.css?v=2'
import '../../public/custom/css/datepicker.css?v=2'
import '../../public/custom/css/btns.css?v=2'

// External Components
import 'react-datepicker/dist/react-datepicker.css?v=2'
import 'react-lazy-load-image-component/src/effects/opacity.css?v=2'

import type { AppProps } from 'next/app'

import Meta from '../components/utils/meta'
import Offline from '../components/utils/offline'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Other Custom Logic */}
      {/* <NextNprogress
        color="#fff"
        colorSecondary="#2c2c7b"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        options={{ easing: 'ease', speed: 500 }}
      /> */}
      <Offline />
      <Meta />
      <Component {...pageProps} />
    </>
  )
}
