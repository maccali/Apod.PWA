import React from 'react'
import Fade from 'react-reveal/Fade'

import styles from './homehead.module.css'

const HomeHead = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Fade left>
            <h2 className={styles.title}>Astronomy Picture of the Day</h2>
          </Fade>
          <Fade left>
            <h3 className={styles.subtitle}>Last Days</h3>
          </Fade>
        </div>
      </div>
    </div>
  </div>
)

export default HomeHead
