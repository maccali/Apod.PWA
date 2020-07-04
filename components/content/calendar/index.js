import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Router from 'next/router'
import DatePicker from 'react-datepicker'
import UtilHelper from '../../../helpers/util'
import DateHelper from '../../../helpers/date'
import Credits from '../../cards/credits'
import styles from './calendar.module.css'
import Modal from '../../modals/modal'
import Erro from '../../utils/error'
import DayContent from '../../content/day'

function CalendarContent() {

  const [startDate, setStartDate] = useState(new Date);
  const [modal, setModal] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentApod, setCurrentApod] = useState(null);

  function bodyControl(flag) {
    let { body } = document;
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  async function openModal() {
    setCurrentApod(null)

    let nasaDate = DateHelper.dateToNasaFormat(startDate)
    try {
      var arrUrls = await DateHelper.daysCombine(nasaDate, 1)
    } catch (err) {
      setModalErro(true)
      setErrorMsg('There was an error when catching day, Verify if You`re Online')
    }
    var apodDay = arrUrls[0]

    bodyControl(false)
    if (apodDay !== undefined) {
      setCurrentApod(apodDay.data)
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


  const thisYear = new Date().getFullYear();
  const years = UtilHelper.rangeInt(1996, parseInt(thisYear) + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  function redirect() {
    let nasaDate = DateHelper.dateToNasaFormat(startDate)
    let link = `/day/${nasaDate}`
    Router.push(link)
  }

  function retry() {
    console.log('Reload')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <div className={styles.cont}>
                <DatePicker
                  selected={startDate}
                  onChange={startDate => setStartDate(startDate)}
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
                  }) => (
                      <div className="date-picker__custom-head">
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                          <AiOutlineLeft />
                        </button>
                        <select
                          value={date.getFullYear()}
                          className="decorated"
                          onChange={({ target: { value } }) => changeYear(value)}
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

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                          <AiOutlineRight />
                        </button>
                      </div>
                    )}
                />
                <div className="btn-custom">
                  <a onClick={() => openModal()}>
                    Go to date
                </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <Credits />
            </div>
          </div>
        </div>
      </div>

      <Modal open={modal} closeModal={() => closeModal()}>
        <DayContent
          day={currentApod}
        />
      </Modal>

      <Modal open={modalErro} closeModal={() => closeModalErro()} >
        <Erro
          message={errorMsg}
          reload={() => {}}
        />
      </Modal>
    </>
  );
};

export default CalendarContent