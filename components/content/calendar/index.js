import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import DatePicker from 'react-datepicker'
import UtilHelper from '../../../helpers/util'
import DateHelper from '../../../helpers/date'
import Credits from '../../cards/credits'
import styles from './calendar.module.css'


function CalendarContent() {

  const [startDate, setStartDate] = useState(new Date);

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

  useEffect(() => {
  })

  return (
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
                        <i className="fas fa-chevron-left"></i>
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
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  )}
              />
              <div className="btn-custom">
                <a onClick={() => redirect()}>
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
  );
};

export default CalendarContent