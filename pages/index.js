import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <>
    <Nav />
    <Head>
      <title>Azeit</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

    </main>
  </>
)

export default Home
