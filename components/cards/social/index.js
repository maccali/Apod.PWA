import React from 'react'
import styles from './social.module.css'

import ShareLinks from '../../../models/shareLinks'

const Social = ({ link }) => (
  <>
    <div className={styles.card}>
      <a target="_blank" href={`${ShareLinks.facebook}${link}`}>
        <i className="fab fa-facebook"></i>
      </a>
      <a target="_blank" href={`${ShareLinks.twitter}${link}`}>
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  </>
)

export default Social