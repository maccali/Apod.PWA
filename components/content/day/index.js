import React, { useEffect, useState } from 'react'
import styles from './day.module.css'

import Social from '../../cards/social'
import Credits from '../../cards/credits'


function DayContent({ day }) {

  const [url, setUrl] = useState('');

  useEffect(() => {
    const { hostname, protocol } = window.location

    if (day) {
      setUrl(`${protocol}//${hostname}/day/${day.date}`)
    }
  });

  if (day) {
    return (
      <div className="container-fluid bg-primary">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <h3 className={styles.date}>{day.date}</h3>
            </div>
            <div className="col-12">
              <h1 className={styles.title}>{day.title}</h1>
            </div>
            <div className="col-12">
              <div className={styles.imgcont}>
                {(day.media_type === 'image') ?
                  <img src={day.url} alt={day.title} />
                  : <iframe src={day.url} height="100%" alt={day.title} frameBorder="0" allowFullScreen></iframe>
                }
              </div>
            </div>
            <div className="col-12">
              <div className={styles.socialcont}>
                {(url !== '') ?
                  <Social title={`ApodSpace`} text={`${day.title}`} url={`${url}`} />
                  : ''}
              </div>
            </div>
            <div className="col-12">
              {(day.copyright) ?
                <p className={styles.copyright}><b>Image Credit & Copyright:</b> {day.copyright}</p>
                : ''}
            </div>
            <div className="col-12">
              <p className={styles.explanationtitle}>
                Explanation:
                  </p>
            </div>
            <div className="col-12">
              <p className={styles.explanation}>
                {day.explanation}
              </p>
            </div>
            <div className="col-12">
              {(day.hdurl) ?
                <div className="btn-custom">
                  <a target="_blank" rel="noopener noreferrer" href={`${day.hdurl}`}>
                    See image in high quality
                  </a>
                </div>
                : ''}
            </div>
            <div className="col-12">
              <Credits />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<></>)

  }

}

export default DayContent