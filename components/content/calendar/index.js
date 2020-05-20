import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import DatePicker from 'react-datepicker'
import UtilHelper from '../../../helpers/util'
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

  function redirect(){
    console.log('CLICKEI PORRA')
    console.log(startDate)
  }

  return (
    <div className="container-fluid bg-primary">
      <div className="container ped-lr">
        <div className="row">
          <div className="col-12">
            <div className={styles.cont}>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
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
                        {"<"}
                      </button>
                      <select
                        value={date.getYear()}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={months[date.getMonth()]}
                        onChange={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }
                      >
                        {months.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {">"}
                      </button>
                    </div>
                  )}
              />
              <a onClick={() => redirect()}>dsfsdfs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarContent