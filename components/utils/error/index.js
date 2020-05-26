import React from 'react'
import styles from './error.module.css'


function Error({ message, reload }) {
  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                <h2 className={styles.title}>{message}</h2>
                <img src="/imgs/earth.svg" alt="Error Image" />
                {reload ?
                  <div className="btn-custom">
                    <a onClick={reload}>
                      <i class="fas fa-sync-alt"></i>
                      Reload
                    </a>
                  </div> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error