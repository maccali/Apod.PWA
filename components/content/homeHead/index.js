import React from 'react'
import Link from 'next/link'

import styles from './homehead.module.css'

const HomeHead = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title} >Astronomy Picture of the Day</h2>
        </div>
        <div className="col-12">
          <div className={styles.text}>
            <p>
              Each day a different image or photograph
              of our fascinating universe is featured, along with a brief explanation
              written by a professional astronomer.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className={styles.btn}>
            <Link href="/images/1">
              <a>
                Discover the cosmos!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeHead