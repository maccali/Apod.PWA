import React, { useEffect, useState } from 'react'
import styles from './day.module.css'

import Social from '../../cards/social'
import Credits from '../../cards/credits'

type DayContentFace = {
  copyright: string
  date: string
  explanation: string
  mediaType: string
  title: string
  url: string
  hdUrl: string
}

function DayContent({
  copyright,
  date,
  explanation,
  mediaType,
  title,
  url,
  hdUrl
}: DayContentFace) {
  const [link, setLink] = useState('')

  useEffect(() => {
    const { hostname, protocol } = window.location

    if (date) {
      setLink(`${protocol}//${hostname}/day/${date}`)
    }
    console.log(mediaType)
  })

  return (
    <div className="container-fluid bg-primary">
      <div className="container ped-lr">
        <div className="row">
          <div className="col-12">
            <h3 className={styles.date}>{date}</h3>
          </div>
          <div className="col-12">
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className="col-12">
            {mediaType === 'image' ? (
              <div className={styles.imgcont}>
                <a
                  title={`Open Image ${title} in Nasa site`}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={url} alt={title} />
                </a>
              </div>
            ) : (
              <div className={styles.framecont}>
                <iframe
                  src={url}
                  title={title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="col-12">
            <div className={styles.socialcont}>
              {link !== '' ? (
                <Social title={`ApodSpace`} text={`$title}`} url={`${link}`} />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="col-12">
            {copyright ? (
              <p className={styles.copyright}>
                <b>Image Credit & Copyright:</b> {copyright}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="col-12">
            <p className={styles.explanationtitle}>Explanation:</p>
          </div>
          <div className="col-12">
            <p className={styles.explanation}>{explanation}</p>
          </div>
          <div className="col-12">
            {hdUrl ? (
              <div className={`btn-custom ${styles.btn}`}>
                <a target="_blank" rel="noopener noreferrer" href={`${hdUrl}`}>
                  See image in high quality
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="col-12">
            <Credits />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayContent
