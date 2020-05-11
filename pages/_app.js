import '../public/libs/bootstrap/bootstrap.min.css'
import '../public/libs/fontawesome/css/all.min.css'
import '../public/custom/css/styles.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import NextNprogress from 'nextjs-progressbar';
import NextNprogress from '../components/utils/loader';
import Meta from '../components/utils/Meta';

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
    <Meta />
    <Component {...pageProps} />
  </>
}


