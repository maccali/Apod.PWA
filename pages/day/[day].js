import React from 'react'
import axios from 'axios'

import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import DayContent from '../../components/content/day'
import DateNotExist from '../../components/content/dateNotExist'

import DateHelper from '../../helpers/date'

class Day extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static async getInitialProps(ctx) {

    if (DateHelper.validDateAndPast(ctx.query.day)) {
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
      {(dayData) ?
        <Head>
          <title>Apod Day {dayData.date}</title>
        </Head> : ''}
      <main>
        {(dayData) ?
          <DayContent day={dayData} />
          : <DateNotExist />
        }
      </main>
      <Footer />
    </>;
  }
}

export default Day
