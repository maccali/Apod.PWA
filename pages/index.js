import React from 'react'
import axios from 'axios'
import Head from 'next/head'

import Nav from '../components/utils/nav'
import Footer from '../components/utils/footer'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'
import SpinnerCard from '../components/cards/spinner'
import Error from '../components/utils/error'

import DateHelper from '../helpers/date'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: null,
      loading: true,
      last: new Date(),
      error: false,
      errorMessage: "An error occurred while fetching an image",
    };
  }

  async getData() {

    this.setState({
      loading: true,
      error: false
    })

    let today = DateHelper.todayNasaFormat()

    var arrUrls = DateHelper.dayUrlsCombine(today, 3)
    var arrDayDate = await DateHelper.getDaysData(arrUrls)

    this.setState({
      datas: arrDayDate
    })

    console.log(this.state.datas[1])
    console.log(this.state.datas[1].order)
    console.log(this.state.datas[1].url)
    console.log(this.state.datas[1].day)

    this.state.datas.map(dayData => {
      if (this.state.day === null) {
        // console.log(dayData.data)
        if (dayData.data !== undefined) {
          this.setState({
            day: dayData,
            loading: false
          })
        }
      }
    })

  }

  async componentDidMount() {
    this.getData()
  }

  render() {
    return <>
      <Nav />
      <Head>
        <title>Apod Pictu</title>
      </Head>
      <main>
        <HomeHead />
        {this.state.loading ?
          <SpinnerCard />
          : this.state.error ? <Error message={this.state.errorMessage} reload={() => this.getData()} reload={() => this.getData()} /> : < DayContent day={this.state.day} />
        }
      </main>
      <Footer />
    </>;
  }
}

export default Home
