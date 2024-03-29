import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
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
  })

  return (
    <div className="container-fluid bg-primary">
      <div className="container ped-lr">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.hLock}>
              {copyright ? (
                <p className={styles.copyright}>
                  <b>Image Credit & Copyright:</b> {copyright}
                </p>
              ) : (
                ''
              )}
              {mediaType === 'image' ? (
                <div className={styles.imgcont}>
                  <a
                    title={`Open Image ${title} in Nasa site`}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={url}
                      alt={title}
                      layout={'fill'}
                      objectFit={'contain'}
                    />
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
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.hLock}>
              <div>
                <h3 className={styles.date}>{date}</h3>
                <h1 className={styles.title}>{title}</h1>
              </div>

              <p className={styles.explanation}>{explanation}</p>

              <div className={styles.btnsCount}>

                {hdUrl ? (
                  <div className={`btn-custom ${styles.btn}`}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${hdUrl}`}
                    >
                      See image in high quality
                    </a>
                  </div>
                ) : (
                  ''
                )}

                <div className={styles.socialcont}>
                  {link !== '' ? (
                    <Social
                      title={`ApodSpace`}
                      text={`${title}`}
                      url={`${link}`}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <Credits />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayContent
