import '../public/libs/bootstrap/bootstrap.min.css'
import '../public/libs/fontawesome/css/all.min.css'
import '../public/custom/css/styles.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import NextNprogress from 'nextjs-progressbar';
import NextNprogress from '../components/loader';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    {/* Other Custom Logic */}
    <NextNprogress
      color="#FFD061"
      startPosition="0.3"
      stopDelayMs="200"
      height="4"
      options={{ easing: 'ease', speed: 500 }}
    />
    <Component {...pageProps} />
  </>
}


