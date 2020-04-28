import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/nav'
import Footer from '../components/footer'
import CardPod from '../components/cards/pod'
import Pagination from '../components/pagination'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      querys: [],
      last: new Date()
    };
  }

  // static async getInitialProps(ctx) {
  //   if (isNaN(ctx.query.p) || (ctx.query.p <= 0)) {
  //     ctx.query.p = 1
  //   }
  //   if (ctx.query.p === '') {
  //     ctx.query.p = 1
  //   }
  //   const count = 6
  //   let today = new Date()
  //   const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

  //   let daysLeftEnd = 0
  //   if (ctx.query.p) {
  //     daysLeftEnd = count * ctx.query.p
  //     daysLeftEnd = daysLeftEnd - (count + 1)
  //   }

  //   let daysLeftStart = daysLeftEnd + count
  //   daysLeftEnd = daysLeftEnd + 1

  //   let endDate = today.setDate(today.getDate() - daysLeftStart)
  //   let startDate = today.setDate(today.getDate() - count + 1)

  //   let endDateFormeted = new Date(endDate).toISOString().split('T')[0]
  //   let startDateFormeted = new Date(startDate).toISOString().split('T')[0]

  //   var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDateFormeted}&end_date=${endDateFormeted}`

  //   let req = await axios.get(`${url}`)

  //   return {
  //     data: req.data,
  //     page: ctx.query.p
  //   }
  // }


  render() {
    let { data, page } = this.props

    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div id="macy-container" className="container">\
          Começo
          <Link href={`/images/1`}>
              <a>
                Outras Imagens
              </a>
            </Link>

            {/* {data.map(pod =>
              <div key={pod.date}>
                <CardPod pod={pod} />
              </div>
            )} */}
          </div>
        </div>
      </main>
      {/* <Pagination page={page} /> */}
      <Footer />
    </>;
  }
}

export default Home
