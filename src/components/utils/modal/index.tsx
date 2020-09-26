import React, { ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../button'

import styles from './modal.module.css'

type ModalFace = {
  open: boolean
  closeModal: (flag: boolean) => void
  children: ReactNode
}

function Modal({ open, closeModal, children }: ModalFace) {
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
                    <Button
                      title="Close Menu"
                      action={() => closeModal(!open)}
                      aria-label="Close Menu"
                      noStyle
                    >
                      <AiOutlineClose />
                    </Button>
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
