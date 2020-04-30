import React from 'react'
import axios from 'axios'

import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import DayContent from '../../components/content/day'

import DateHelper from '../../helpers/date'

class Day extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static async getInitialProps(ctx) {

    if (DateHelper.dataValida(ctx.query.day)) {
      const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

      var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${ctx.query.day}`

      let req = await axios.get(`${url}`)
      if (req.status === 200) {
        console.log(req.data)
        return {
          dayData: req.data
        }
      }
    }

    return {
      dayData: null
    }

  }

  render() {
    let { dayData } = this.props

    return <>
      <Nav />
      <Head>
        <title>Apod Day {dayData.date}</title>
      </Head>
      <main>
        <DayContent day={dayData}/>
      </main>
      <Footer />
    </>;
  }
}

export default Day
