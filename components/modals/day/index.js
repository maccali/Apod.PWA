import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import DayContent from '../../content/day'
import styles from './modalday.module.css'


function ModalDay({ day, open, closeModal }) {

  return (
    <>
      <div id="scroll" className={(open) ? `${styles.contaside} ${styles.contasideativado}` : styles.contaside}>
        <div className={styles.contasidefix}>
          <div className={`container-fluid ${styles.fixedcont}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={styles.headercont}>
                    <div className={styles.img}>
                      <img src="/icons/icon126t.png" alt="Site Logo" />
                    </div>
                    <a onClick={() => closeModal(!open)} aria-label="Close Menu">
                      <AiOutlineClose />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.spacer}></div>
            <DayContent day={day} />
            <div className={styles.spacer}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalDay
