import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './modal.module.css'

function Modal({ open, closeModal, children }) {
  return (
    <>
      <div
        id="scroll"
        className={
          open
            ? `${styles.contaside} ${styles.contasideativado}`
            : styles.contaside
        }
      >
        <div className={styles.contasidefix}>
          <div className={`container-fluid ${styles.fixedcont}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={styles.headercont}>
                    <div className={styles.img}>
                      <img src="/icons/icon126t.png" alt="Site Logo" />
                    </div>
                    <a
                      onClick={() => closeModal(!open)}
                      aria-label="Close Menu"
                    >
                      <AiOutlineClose />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.spacer}></div>
            <div className={styles.bgprimary}>{children}</div>
            <div className={styles.spacer}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
