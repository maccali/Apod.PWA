import React from 'react'
import axios from 'axios'

import Head from 'next/head'
import Nav from '../../components/utils/nav'
import Footer from '../../components/utils/footer'
import CardPod from '../../components/cards/pod'
import Pagination from '../../components/pagination'

import DataHelper from '../../helpers/date'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      querys: [],
      last: new Date(),
      load: true
    };
  }

  static async getInitialProps(ctx) {

    console.log(ctx.query)
    ctx.query.p = ctx.query.page
    if (isNaN(ctx.query.p) || (ctx.query.p <= 0)) {
      ctx.query.p = 1
    }
    if (ctx.query.p === '') {
      ctx.query.p = 1
    }
    const count = 6
    let today = new Date()
    const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

    let daysLeftEnd = 0
    if (ctx.query.p) {
      daysLeftEnd = count * ctx.query.p
      // daysLeftEnd = daysLeftEnd - (count + 1)
      daysLeftEnd = daysLeftEnd - (count * 2)
    }

    let daysLeftStart = daysLeftEnd + count
    daysLeftEnd = daysLeftEnd + 1

    let endDate = today.setDate(today.getDate() - daysLeftStart)
    let startDate = today.setDate(today.getDate() - count + 1)

    let endDateFormeted = DataHelper.dateToNasaFormat(endDate)
    let startDateFormeted = DataHelper.dateToNasaFormat(startDate)

    var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDateFormeted}&end_date=${endDateFormeted}`

    let req = await axios.get(`${url}`)
    if (req.status === 200) {
      return {
        error: false,
        data: req.data.reverse(),
        page: ctx.query.p
      }
    }
    return {
      error: true,
      data: [],
      page: ctx.query.p
    }

  }

  componentDidMount() {
    this.setState({
      load: false
    })
  }


  render() {
    let { data, page, error } = this.props

    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container padding">
            <div className="row">
              {(error) ?
                <div>Erro na Api, Heuston temos um problemas</div>
                : data.map(pod =>
                  <div className="col-12 col-sm-6 col-md-4" key={pod.date}>
                    <CardPod pod={pod} />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </main>
      <Pagination page={page} />
      <Footer />
    </>;
  }
}

export default Home