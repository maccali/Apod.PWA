import App, { Container } from 'next/app'
import '../public/libs/bootstrap/bootstrap.min.css'
import '../public/libs/fontawesome/css/all.min.css'
import '../public/custom/css/styles.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import NextNprogress from 'nextjs-progressbar';
import ErrorPage from '../pages/_error'
import NextNprogress from '../components/utils/loader';
import Meta from '../components/utils/Meta';
import Offline from '../components/utils/offline'

// This default export is required in a new `pages/_app.js` file.

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    console.log(this)
    if (pageProps.statusCode) {
      return <ErrorPage statusCode={this.props.statusCode} />
    }
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
}


