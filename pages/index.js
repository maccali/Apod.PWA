import Head from 'next/head'
import Nav from '../components/nav'
import Search from '../components/search'

const Home = () => (
  <>
    <Nav />
    <Head>
      <title>Azeit URL and QRCode</title>
    </Head>

    <main>
      <div className="container-fluid bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Home
