import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Search from '../../components/search'

const qrcode = () => (
  <>
    <Nav />
    <Head>
      <title>Azeit QRCode</title>
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
    <Footer />
  </>
)

export default qrcode
