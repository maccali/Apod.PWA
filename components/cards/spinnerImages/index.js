import React from 'react'
import styles from './spinnerimages.module.css'

import Spinner from '../../../components/utils/spinner'


const SpinnerCard = () => (
  <div className={styles.cont}>
    <Spinner />
  </div>
)

export default SpinnerCard