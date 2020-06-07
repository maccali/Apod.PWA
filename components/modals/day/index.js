import React from 'react'
import DayContent from '../../content/day'
import styles from './modalday.module.css'


function ModalDay({ day, open, closeModal }) {

  return (
    <>
      <div className={`${styles.cont} ${(open) ? styles.open : ''}`}>

        <div className={styles.scroll}>
          <div className="container-fluid">
            <div className={styles.nav}>
              <div className="container ped-lr-0">
                <div className={styles.item}>
                  <a onClick={() => closeModal()}><i className="fas fa-times"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.preday}></div> */}
          <DayContent day={day} />
          {/* <div className={styles.preday}></div> */}
        </div>
      </div>
    </>
  )
}

export default ModalDay
