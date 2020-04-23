import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import CardPod from '../components/cards/pod'

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      podList: []
    };
  }

  async getData() {
    let response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM&start_date=2020-04-10')
    return { data: response.data }
  }

  macy() {
    var macy = Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 4,
      breakAt: {
        1200: 4,
        940: 2,
        520: 1
        // 400: 1
      }
    });
    macy.recalculate();
  }

  async componentDidMount() {
    var res = await this.getData()
    console.log(res.data)
    this.setState(prevState => ({
      // podList: [...prevState.podList, res.data]
      podList: res.data
    }))
    this.macy()
  }

  componentDidUpdate() {
    this.macy();
  }

  render() {
    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div id="macy-container" className="container">
            {this.state.podList.map(pod =>
              <div key={pod.name}>
                <CardPod pod={pod} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>;
  }
}

export default Home
