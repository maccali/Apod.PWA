/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import DatePicker from 'react-datepicker'
import UtilHelper from '../../../helpers/util'
import DateHelper from '../../../helpers/date'
import Credits from '../../cards/credits'
import styles from './calendar.module.css'
import Modal from '../../modals/modal'
import Erro from '../../utils/error'
import DayContent from '../../content/day'
import Button from '../../utils/button'

function CalendarContent() {
  const [startDate, setStartDate] = useState<any>(new Date())
  const [modal, setModal] = useState<boolean>(false)
  const [modalErro, setModalErro] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [currentApod, setCurrentApod] = useState<DayFace | null>(null)

  function bodyControl(flag: boolean) {
    const { body } = document
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  async function openModal() {
    setCurrentApod(null)

    let apodDay = undefined

    const nasaDate = DateHelper.dateToNasaFormat(String(startDate))
    try {
      const arrUrls = await DateHelper.daysCombine(nasaDate, 1)
      apodDay = arrUrls[0]
    } catch (err) {
      setModalErro(true)
      setErrorMsg(
        'There was an error when catching day, Verify if You`re Online'
      )
    }

    bodyControl(false)
    if (apodDay !== undefined) {
      setCurrentApod(apodDay.day)
      setModal(true)
    } else {
      setErrorMsg('There was an error when catching day')
      setModalErro(true)
    }

    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  function closeModalErro() {
    bodyControl(true)
    setModalErro(false)
  }

  const thisYear = new Date().getFullYear()
  const years = UtilHelper.rangeInt(1996, parseInt(String(thisYear)) + 1)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <Fade bottom>
                <div className={styles.cont}>
                  <DatePicker
                    selected={startDate}
                    onChange={(startDate: any) => setStartDate(startDate)}
                    minDate={new Date(1996, 6, 16)}
                    maxDate={new Date()}
                    showDisabledMonthNavigation={true}
                    inline={true}
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled
                    }: any) => (
                      <div className="date-picker__custom-head">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          <AiOutlineLeft />
                        </button>
                        <select
                          value={date.getFullYear()}
                          className="decorated"
                          onChange={({ target: { value } }) =>
                            changeYear(value)
                          }
                          data-size="2"
                        >
                          {years.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <select
                          value={months[date.getMonth()]}
                          className="decorated"
                          onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                          }
                          data-size="2"
                        >
                          {months.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          <AiOutlineRight />
                        </button>
                      </div>
                    )}
                  />
                  <Button
                    title="Go to Date"
                    action={() => openModal()}
                    textOnly
                  >
                    <span>Go to date</span>
                  </Button>
                </div>
              </Fade>
            </div>
            <div className="col-12">
              <Credits />
            </div>
          </div>
        </div>
      </div>

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

      <Modal open={modalErro} closeModal={() => closeModalErro()}>
        <Erro message={errorMsg} />
      </Modal>
    </>
  )
}

export default CalendarContent
