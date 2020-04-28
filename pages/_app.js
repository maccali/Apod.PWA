import '../public/libs/bootstrap/bootstrap.min.css'
import '../public/libs/fontawesome/css/all.min.css'
import '../public/custom/css/styles.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import '../public/custom/js/macy.js'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}