import React from 'react'

import styles from './homehead.module.css'

const HomeHead = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>Astronomy Picture of the Day</h2>
          <h3 className={styles.subtitle}>Last Days</h3>
        </div>
      </div>
    </div>
  </div>
)

export default HomeHead
