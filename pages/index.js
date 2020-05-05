import React from 'react'
import axios from 'axios'
import Head from 'next/head'

import Nav from '../components/nav'
import Footer from '../components/footer'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'

import DateHelper from '../helpers/date'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      last: new Date()
    };
  }

  async componentDidMount() {

    const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'
  
    let today = DateHelper.todayNasaFormat()
    let yesterday = DateHelper.nasaFormatMinusOne(today)
  
    let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${today}`
    let urlYesterday = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${yesterday}`
    try {
      let req = await axios.get(`${url}`)
      
      this.setState({
        podList: req.data
      })
    } catch (error) {
      let req = await axios.get(`${urlYesterday}`)
      if (req.status === 200) {
        this.setState({
          podList: req.data
        })
      } else {
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
        <DayContent day={this.state.podList} />
      </main>
      <Footer />
    </>;
  }
}

export default Home
