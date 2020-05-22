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
    <button
      className='myWonderfulButton'
      onClick={
        () => {
          navigator.share({
            title: 'Share',
            text: 'whatevs',
            url: 'https://apod.pictu.one'
          }
          )
        }
      }>
      Compartilhar
</button>
  </>
)

export default Social