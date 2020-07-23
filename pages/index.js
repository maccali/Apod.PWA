import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Nav from '../components/utils/nav'
import HomeHead from '../components/content/homeHead'
import DayContent from '../components/content/day'
import DayRowContent from '../components/content/dayRow'
import SpinnerCard from '../components/cards/spinner'
import Error from '../components/utils/error'
import Credits from '../components/cards/credits'
import Modal from '../components/modals/modal'


import DateHelper from '../helpers/date'

function Home() {

  const [listOfDays, setListOfDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("An error occurred while fetching an image");
  const [cardOrder, setCardOrder] = useState(true)
  const [modal, setModal] = useState(false);
  const [currentApod, setCurrentApod] = useState(null);

  async function getData() {
    setLoading(true)
    setError(false)

    let today = DateHelper.todayNasaFormat()
    var arrUrls = await DateHelper.daysCombine(today, 4)

    setListOfDays(arrUrls)
    setLoading(false)

    return;
  }

  function setCardPositionImage() {
    setCardOrder((window.innerWidth <= 991))
  }

  function bodyControl(flag) {
    let { body } = document;
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  function openModal(apodDay) {
    bodyControl(false)
    setCurrentApod(apodDay)
    setModal(true)
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  useEffect(() => {
    (async function () {
      await getData()
    })()
  }, []);

  useEffect(() => {
    (function () {
      window.addEventListener("resize", function () {
        setCardPositionImage()
      })
      setCardPositionImage()
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
          : listOfDays ?
            Object.keys(listOfDays).map((key) => (
              <DayRowContent
                key={key}
                day={listOfDays[key].data}
                openModal={() => openModal(listOfDays[key].data)}
                invert={(cardOrder) ? true : (key % 2)}
              />
            ))
            : <Error
              message={errorMessage}
              reload={() => getData()}
            />
        }
        <Credits />
        <Modal open={modal} closeModal={() => closeModal()}>
          <DayContent day={currentApod} />
        </Modal>
      </main>
    </>
  )
}

export default Home
