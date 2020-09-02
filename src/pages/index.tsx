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
  const [listOfDays, setListOfDays] = useState<Array<DayCustomFace>>([])
  const [loading, setLoading] = useState<boolean>(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [error, setError] = useState<boolean>(false)

  const [modal, setModal] = useState<boolean>(false)
  const [currentApod, setCurrentApod] = useState<DayFace | null>(null)
  const errorMessage = 'An error occurred while fetching an image'

  async function getData() {
    setLoading(true)
    // setError(false)

    const today = DateHelper.todayNasaFormat()
    const arrUrls = await DateHelper.daysCombine(today, 4)

    setListOfDays(arrUrls)
    setLoading(false)

    return
  }

  function bodyControl(flag: boolean) {
    const { body } = document
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  function openModal(apodDay: DayCustomFace) {
    bodyControl(false)
    setCurrentApod(apodDay.day)
    setModal(true)
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  useEffect(() => {
    ;(async function () {
      await getData()
    })()
  }, [])

  return (
    <>
      <Nav />
      <Head>
        <title>Apod Pictu</title>
      </Head>
      <main>
        <HomeHead />
        {loading ? (
          <SpinnerCard />
        ) : listOfDays ? (
          Object.keys(listOfDays).map((_value: string, key: number) => (
            <DayRowContent
              key={key}
              day={listOfDays[key].day}
              openModal={() => openModal(listOfDays[key])}
              invert={key % 2 ? true : false}
            />
          ))
        ) : (
          <Error message={errorMessage} reload={() => getData()} />
        )}
        <Credits />
        <Modal open={modal} closeModal={() => closeModal()}>
          {currentApod ? (
            <DayContent
              copyright={currentApod.copyright}
              date={currentApod.date}
              explanation={currentApod.explanation}
              mediaType={currentApod.mediaType}
              title={currentApod.title}
              url={currentApod.url}
              hdUrl={currentApod.hdUrl}
            />
          ) : (
            ''
          )}
        </Modal>
      </main>
    </>
  )
}

export default Home
