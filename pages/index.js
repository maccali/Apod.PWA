import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'

import Nav from '../components/utils/nav'
import Footer from '../components/utils/footer'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'
import SpinnerCard from '../components/cards/spinner'
import Error from '../components/utils/error'

import DateHelper from '../helpers/date'

function Home() {

  const [day, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("An error occurred while fetching an image");


  async function getData() {
    setLoading(true)
    setError(false)

    let today = DateHelper.todayNasaFormat()

    var arrUrls = await DateHelper.daysCombine(today, 4)

    let eureca = false
    arrUrls.forEach(dayData => {
      if (dayData.data !== undefined) {
        if (!eureca) {
          setDay(dayData)
          eureca = true
        }
      }
    })

    setLoading(false)
    return;
  }

  useEffect(() => {
    (async function () {
      await getData()
    })()
  }, []);

  return (
    <>
      <Nav />
      <Head>
        <title>Apod Pictu</title>
      </Head>
      <main>
        <HomeHead />
        {loading ?
          <SpinnerCard />
          : day ?
            < DayContent day={day.data} />
            : <Error
              message={errorMessage}
              reload={() => getData()}
            />
        }
      </main>
      <Footer />
    </>
  )
}

export default Home
