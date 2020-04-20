import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import CardTool from '../components/cards/tool'

const toolList = [
  {
    name: "QRCode Gen",
    icon: "<i className='fas fa-qrcode' style='color: yellowgreen'></i>",
    description: "Generate QRCode from any Link or Text",
    link: "/qrcode",
    offline: true
  },
  {
    name: "Short Link",
    icon: "<i className='fas fa-link' style='color: violet'></i>",
    description: "Shorten the link and choose which link you want to use",
    link: "/short-link",
    offline: false
  }
]


const Home = () => (
  <>
    <Nav />
    <Head>
      <title>Azeit Tools</title>
    </Head>
    <main>
      <div className="container-fluid bg-primary container-full-height">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Our tools</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="per center">
                Our tools aim to facilitate simple day-to-day work by being simple yet functional
              </p>
            </div>
          </div>
          <div className="row">
            {toolList.map(tool => (
              <div className="col-12 col-sm-3 col-md-4">
                <CardTool tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default Home
