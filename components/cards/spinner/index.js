import React from 'react'
import styles from './spinner.module.css'

import Spinner from '../../../components/utils/spinner'


const SpinnerCard = () => (
  <div className={styles.cont}>
    <h2 className={styles.title}>
      Loading image of the day
    </h2>
    <Spinner />
  </div>
)

export default SpinnerCard