import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './credits.module.css'

function Credits() {
  return (
    <>
      <Fade bottom>
        <div className={styles.cont}>
          <a
            title="Go to Nasa site"
            className={styles.link}
            rel="noopener noreferrer"
            href="https://www.nasa.gov/"
            target="_blank"
            aria-label="Go to Nasa Site"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imgs/nasa-site-logo.svg" alt="Developer Site Logo" />
          </a>
          <a
            title="Go to Developer site"
            className={styles.link}
            rel="noopener noreferrer"
            href="https://guilhermemaccali.com/"
            target="_blank"
            aria-label="Go to Developer Site"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/developer-site-logo.svg"
              alt="Developer Site Logo"
            />
          </a>
        </div>
      </Fade>
    </>
  )
}

export default Credits
