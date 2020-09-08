import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { AiOutlinePlus } from 'react-icons/ai'

import CardPod from '../../cards/pod'
import NumberFormat from 'react-number-format'
import SpinnerCard from '../../cards/spinnerImages'
import Modal from '../../modals/modal'
import DayContent from '../../content/day'
import Erro from '../../utils/error'
import Button from '../../utils/button'

import styles from './imagescontent.module.css'

import DateHelper from '../../../helpers/date'

function ImagesContent() {
  const [listOfDays, setListOfDays] = useState<Array<DayCustomFace>>([])
  const [page, setPage] = useState<any>()
  const [load, setLoad] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [currentApod, setCurrentApod] = useState<DayFace | null>(null)
  const [error, setError] = useState<boolean>(false)

  const errorMsg = 'There was an error when catching days, Verify Internet'

  async function getData(page: number) {
    setLoad(true)

    const pageCount = 6
    const current = pageCount * page - pageCount

    let currentDay: any = new Date()
    currentDay.setDate(currentDay.getDate() - current)
    currentDay = DateHelper.dateToNasaFormat(currentDay)

    try {
      const arrOfDays = await DateHelper.daysCombine(currentDay, pageCount)
      setListOfDays(listOfDays.concat(arrOfDays))
      setPage(Number(page) + 1)
      setError(false)
    } catch (error) {
      setError(true)
    }
    setLoad(false)
  }

  function bodyControl(flag: boolean) {
    const { body } = document
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  function openModal(apodDay: DayFace) {
    bodyControl(false)
    setModal(true)
    setCurrentApod(apodDay)
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  useEffect(() => {
    ;(async function () {
      await getData(1)
    })()
  }, [])

  return (
    <>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container padding">
            <div className="row">
              {Object.keys(listOfDays).map((_value: string, key: number) => (
                <div className="col-12 col-sm-6 col-md-4" key={key}>
                  <Fade bottom>
                    <CardPod
                      day={listOfDays[key].day}
                      openModal={() => openModal(listOfDays[key].day)}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>

        {error ? <Erro message={errorMsg} noimg /> : ''}
        {load ? (
          <SpinnerCard />
        ) : (
          <div className={styles.cont}>
            <Fade bottom>
              <div className={styles.card}>
                <div className={styles.line}>
                  <div className={styles.divinput}>
                    <label htmlFor="pager" aria-label="Type a page">
                      <NumberFormat
                        name="pager"
                        type="text"
                        value={page}
                        onChange={e => setPage(e.target.value)}
                        decimalSeparator={false}
                      />
                    </label>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.line}>
                    <Button title="One more page" action={() => getData(page)}>
                      <AiOutlinePlus />
                      <span>More</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </main>

      <Modal open={modal} closeModal={() => closeModal()}>
        {currentApod ? (
          <DayContent
            copyright={currentApod.copyright}
            date={currentApod.date}
            explanation={currentApod.explanation}
            hdUrl={currentApod.hdUrl}
            mediaType={currentApod.mediaType}
            title={currentApod.title}
            url={currentApod.url}
          />
        ) : (
          ''
        )}
      </Modal>
    </>
  )
}

export default ImagesContent
