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
      podList: [],
      loading: true,
      last: new Date(),
      error: false,
      errorMessage: "An error occurred while fetching an image"
    };
  }

  async getData() {

    this.setState({
      loading: true,
      error: false
    })

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
        this.setState({
          podList: null,
          error: true
        })
      }
    }
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
          : this.state.error ? <Error message={this.state.errorMessage} reload={() => this.getData()}reload={() => this.getData()} /> : < DayContent day={this.state.podList} />
        }
      </main>
      <Footer />
    </>;
  }
}

export default Home
