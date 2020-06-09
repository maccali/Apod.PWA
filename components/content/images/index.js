import React, { useState, useEffect } from 'react'

import CardPod from '../../cards/pod'
import NumberFormat from 'react-number-format';
import SpinnerCard from '../../cards/spinnerImages';
import ModalDay from '../../modals/day'

import styles from './imagescontent.module.css';

import DateHelper from '../../../helpers/date'

function ImagesContent() {

  const [listOfDays, setListOfDays] = useState([]);

  const [page, setPage] = useState();
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentApod, setCurrentApod] = useState(null);


  async function getData(page) {

    setLoad(true)

    let pageCount = 6
    let current = (pageCount * page) - pageCount

    let currentDay = new Date()
    currentDay.setDate(currentDay.getDate() - current);
    currentDay = DateHelper.dateToNasaFormat(currentDay)

    var arrUrls = await DateHelper.daysCombine(currentDay, pageCount)

    var arrOfDays = arrUrls.filter(theDate => {
      if (theDate.data != undefined) {
        return theDate.data
      }
    })

    setListOfDays(listOfDays.concat(arrOfDays))
    setPage(Number(page) + 1)
    setLoad(false)
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
    setModal(true)
    setCurrentApod(apodDay)
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  useEffect(() => {
    (async function () {
      await getData(1)
    })()
  }, []);

  return (
    <>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container padding">
            <div className="row">
              {Object.keys(listOfDays).map((key) => (
                <div className="col-12 col-sm-6 col-md-4" key={key}>
                  <CardPod pod={listOfDays[key].data} openModal={() => openModal(listOfDays[key].data)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {load ? <SpinnerCard />
          : <div className={styles.cont}>
            <div className={styles.card}>
              <div className={styles.line}>
                <div className={styles.divinput}>
                  <label aria-label="Type a page">
                    <NumberFormat
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
                  <a aria-label="Other pag" onClick={() => getData(page)}><div className={styles.btn}><i class="fas fa-plus"></i></div></a>
                </div>
              </div>
            </div>
          </div>}

      </main>
      <ModalDay day={currentApod} open={modal} closeModal={() => closeModal()} />

    </>
  )
}

export default ImagesContent

