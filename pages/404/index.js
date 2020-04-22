import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Card404 from '../../components/errors/404'

const Custom404 = () => (
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
              <Card404 />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default Custom404
