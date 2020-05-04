import React from 'react'
import axios from 'axios'
import Head from 'next/head'

import Nav from '../components/nav'
import Footer from '../components/footer'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'

import DateHelper from '../helpers/date'

export async function getServerSideProps(context) {

  const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

  let today = DateHelper.todayNasaFormat()
  let yesterday = DateHelper.nasaFormatMinusOne(today)

  let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${today}`
  let urlYesterday = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${yesterday}`
  try {
    let req = await axios.get(`${url}`)
    return {
      props: {
        data: req.data,
      }
    }
  } catch (error) {
    let req = await axios.get(`${urlYesterday}`)
    if (req.status === 200) {
      return {
        props: {
          data: req.data,
        }
      }
    } else {
      return {
        props: {
          data: null,
        }
      }
    }
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      podList: [],
      querys: [],
      last: new Date()
    };
  }

  render() {
    let { data } = this.props
    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <HomeHead />
        <DayContent day={data} />
      </main>
      <Footer />
    </>;
  }
}

export default Home
