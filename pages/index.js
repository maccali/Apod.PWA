import React from 'react'
import axios from 'axios'
import Head from 'next/head'

import Nav from '../components/utils/nav'
import Footer from '../components/utils/footer'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'
import SpinnerCard from '../components/cards/spinner'

import DateHelper from '../helpers/date'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      loading: true,
      last: new Date()
    };
  }

  async componentDidMount() {

    const key = process.env.NASA_API_KEY

    let today = DateHelper.todayNasaFormat()
    let yesterday = DateHelper.nasaFormatMinusOne(today)

    let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${today}`
    let urlYesterday = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${yesterday}`
    try {
      let req = await axios.get(`${url}`)

      this.setState({
        podList: req.data,
        loading: false
      })
    } catch (error) {
      let req = await axios.get(`${urlYesterday}`)
      if (req.status === 200) {
        this.setState({
          podList: req.data,
          loading: false
        })
      } else {
        console.log("ERRO")
        this.setState({
          podList: null
        })
      }
    }
  }

  render() {
    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>

      </Head>
      <main>
        <HomeHead />
        {this.state.loading ?
          <SpinnerCard/>
          : <DayContent day={this.state.podList} />
        }
      </main>
      <Footer />
    </>;
  }
}

export default Home
