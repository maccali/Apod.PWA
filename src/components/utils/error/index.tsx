/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import styles from './error.module.css'

import Button from '../button'

type ErrorFace = {
  message: string
  reload?: () => void
  noimg?: boolean
}

function Error({ message, reload, noimg }: ErrorFace) {
  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                <h2 className={styles.title}>{message}</h2>
                {noimg ? <img src="/imgs/earth.svg" alt="Error Image" /> : ''}
                {reload ? (
                  <Button title="Reload" action={() => reload()}>
                    <AiOutlineReload className={styles.btnicon} />
                    <span>Reload</span>
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error
