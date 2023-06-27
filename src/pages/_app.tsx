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
import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BHhIVzKvdgioNaHnB-OhBCzmqv0AeBLszr8j1Q8uVnJ5d0Ves9ErcZlg_SbEzTc_8tPYIer6_rDQe4wb89eLIMI'
          });
        })
        .then((subscription) => {
          console.log('Endpoint de inscrição:', subscription.endpoint);
          console.log('Endpoint de inscrição:', subscription.endpoint);
          console.log('Chave p256dh:', btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('p256dh')))));
          console.log('Chave auth:', btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('auth')))));    
        })
        .catch((error) => {
          console.error('Erro ao obter a inscrição:', error);
        });
    }
  }, []);

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
