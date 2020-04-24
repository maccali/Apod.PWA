import React from 'react'
import axios from 'axios'

import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import CardPod from '../components/cards/pod'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      querys: [],
      last: new Date()
    };
  }

  static async getInitialProps(ctx) {
    let data = [];
    const count = 60
    let today = new Date()

    console.log(ctx.query.p)

    let daysLeftEnd = 0
    if (ctx.query.p) {
      daysLeftEnd = count * ctx.query.p
      daysLeftEnd = daysLeftEnd - (count + 1)
    }

    let daysLeftStart = daysLeftEnd + count
    daysLeftEnd = daysLeftEnd + 1

    let endDate = today.setDate(today.getDate() - daysLeftEnd)
    let startDate = today.setDate(today.getDate() - daysLeftStart)
    const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

    let endDateFormeted = new Date(endDate).toISOString().split('T')[0]
    let startDateFormeted = new Date(startDate).toISOString().split('T')[0]

    var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDateFormeted}&end_date=${endDateFormeted}`

    let req = await axios.get(`${url}`)

    return {
      data: req.data
    }
  }

  zeroLeftIfOneDigit(str) {
    if (str.length === 1) {
      str = `0${str}`
    }
    return str;
  }

  getDataFormatada(data) {
    let les = new Date(data.toString())
    let day = this.zeroLeftIfOneDigit(`${les.getDate()}`);
    let month = this.zeroLeftIfOneDigit(`${les.getMonth() + 1}`);
    let year = les.getFullYear();
    let dateFormated = `${year}-${month}-${day}`
    return dateFormated
  }

  macy() {
    var macy = Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: true,
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

  componentDidMount(){
    this.macy()
  }


  render() {
    let { data } = this.props

    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div id="macy-container" className="container">
            {data.map(pod =>
              <div key={pod.date}>
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
