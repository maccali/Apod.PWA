import React from 'react'
import styles from './credits.module.css'

function Credits() {
  return (
    <>
      <div className={styles.cont}>
        <a className={styles.link} rel="noopener noreferrer" href="https://www.nasa.gov/" target="_blank" aria-label="Go to Nasa Site" >
          <img src="/imgs/nasa-site-logo.svg" alt="Developer Site Logo" />
        </a>
        <a className={styles.link} rel="noopener noreferrer" href="https://guilhermemaccali.com/" target="_blank" aria-label="Go to Developer Site" >
          <img src="/imgs/developer-site-logo.svg" alt="Developer Site Logo" />
        </a>
      </div>
    </>
  )

}

export default Credits