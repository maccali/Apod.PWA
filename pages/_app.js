// External Libs
import '../public/libs/bootstrap/bootstrap.min.css'

// Custom styles
import '../public/custom/css/template.css'
import '../public/custom/css/datepicker.css'
import '../public/custom/css/btns.css'

// External Components
import 'react-datepicker/dist/react-datepicker.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import NextNprogress from '../components/utils/loader';
import Meta from '../components/utils/Meta';
import Offline from '../components/utils/offline'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    {/* Other Custom Logic */}
    <NextNprogress
      color="#fff"
      colorSecondary="#2c2c7b"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      options={{ easing: 'ease', speed: 500 }}
    />
    <Offline />
    <Meta />
    <Component {...pageProps} />
  </>
}


