/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useRef, useState } from 'react'
import Fade from '../../utils/fade'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { RiCalendarLine, RiImageLine } from 'react-icons/ri'

import DatePicker from 'react-datepicker'
import UtilHelper from '../../../helpers/util'
import DateHelper from '../../../helpers/date'
import Credits from '../../cards/credits'
import styles from './calendar.module.css'
import Modal from '../../utils/modal'
import Erro from '../../utils/error'
import DayContent from '../../content/day'
import Button from '../../utils/button'

type CalendarSelectProps = {
  label: string
  options: Array<string | number>
  value: string | number
  onSelect: (value: string | number) => void
}

function CalendarSelect({
  label,
  options,
  value,
  onSelect
}: CalendarSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [])

  function selectOption(option: string | number) {
    onSelect(option)
    setOpen(false)
  }

  return (
    <div className={styles.select} ref={ref}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        className={styles.selectButton}
        onClick={() => setOpen(current => !current)}
      >
        {value}
      </button>

      {open ? (
        <div className={styles.selectMenu}>
          {options.map(option => (
            <button
              type="button"
              key={option}
              className={`${styles.selectOption} ${
                option === value ? styles.selectOptionActive : ''
              }`}
              onClick={() => selectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

function CalendarContent() {
  const [startDate, setStartDate] = useState<any>(new Date())
  const [modal, setModal] = useState<boolean>(false)
  const [modalErro, setModalErro] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [currentApod, setCurrentApod] = useState<DayFace | null>(null)
  const [load, setLoad] = useState<boolean>(false)

  function bodyControl(flag: boolean) {
    const { body } = document
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  async function openModal() {
    setLoad(true)
    setCurrentApod(null)

    let apodDay = undefined

    const nasaDate = DateHelper.dateToNasaFormat(String(startDate))
    try {
      const arrUrls = await DateHelper.daysCombine(nasaDate, 1)
      apodDay = arrUrls[0]
    } catch {
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
    setLoad(false)
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
  const selectedDate = DateHelper.dateToNasaFormat(String(startDate))

  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <Fade bottom>
                <div className={styles.cont}>
                  <section className={styles.panel}>
                    <div className={styles.intro}>
                      <div className={styles.icon}>
                        <RiCalendarLine />
                      </div>
                      <div>
                        <h1>APOD Calendar</h1>
                        <p>{selectedDate}</p>
                      </div>
                    </div>

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
                            type="button"
                            aria-label="Previous month"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            <AiOutlineLeft />
                          </button>
                          <CalendarSelect
                            value={date.getFullYear()}
                            label="Year"
                            options={years}
                            onSelect={value => changeYear(Number(value))}
                          />

                          <CalendarSelect
                            value={months[date.getMonth()]}
                            label="Month"
                            options={months}
                            onSelect={value =>
                              changeMonth(months.indexOf(String(value)))
                            }
                          />

                          <button
                            type="button"
                            aria-label="Next month"
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            <AiOutlineRight />
                          </button>
                        </div>
                      )}
                    />

                    <div className={styles.action}>
                      <Button
                        title="Go to Date"
                        action={() => openModal()}
                        textOnly
                        load={load}
                      >
                        <span>Go to image</span>
                      </Button>
                    </div>
                  </section>
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
