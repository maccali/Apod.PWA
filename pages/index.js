import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import CardTool from '../components/cards/tool'

const toolList = [
  {
    name: "QRCode Gen",
    icon: "<i className='fas fa-qrcode'></i>",
    description: "Generate QRCode from any Link or Text",
    link: "/qrcode"
  },
  {
    name: "Short Link",
    icon: "<i className='fas fa-link'></i>",
    description: "Encurte o link e escolha qual link você quer usar",
    link: "/short-link"
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
