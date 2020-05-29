import React from 'react'
import styles from './social.module.css'

import ShareLinks from '../../../models/shareLinks'

function Social({ title, text, url }) {

  function share() {
    console.log(title, text, url)
    navigator.share({
      title, text, url
    })
  }

  return (
    <>
      {(navigator.share === undefined) ?
        <div className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.facebook}${url}`}>
            <i className="fab fa-facebook"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.twitter}${url}`}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        : <div className={styles.card}>
          <a onClick={() => share()}>
            <i className="fas fa-share-alt"></i>
          </a>
        </div>
      }
    </>
  )
}

export default Social