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
          <div className="col-12">
            <Fade left>
              <h3 className={styles.date}>{date}</h3>
            </Fade>
          </div>
          <div className="col-12">
            <Fade right>
              <h1 className={styles.title}>{title}</h1>
            </Fade>
          </div>
          <div className="col-12">
            <Fade left>
              {mediaType === 'image' ? (
                <div className={styles.imgcont}>
                  <a
                    title={`Open Image ${title} in Nasa site`}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={url} alt={title} layout="fill" />
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
            </Fade>
          </div>
          <div className="col-12">
            <div className={styles.socialcont}>
              {link !== '' ? (
                <Fade right>
                  <Social
                    title={`ApodSpace`}
                    text={`$title}`}
                    url={`${link}`}
                  />
                </Fade>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="col-12">
            {copyright ? (
              <Fade left>
                <p className={styles.copyright}>
                  <b>Image Credit & Copyright:</b> {copyright}
                </p>
              </Fade>
            ) : (
              ''
            )}
          </div>
          <div className="col-12">
            <Fade left>
              <p className={styles.explanationtitle}>Explanation:</p>
            </Fade>
          </div>
          <div className="col-12">
            <Fade left>
              <p className={styles.explanation}>{explanation}</p>
            </Fade>
          </div>
          <div className="col-12">
            {hdUrl ? (
              <Fade bottom>
                <div className={`btn-custom ${styles.btn}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${hdUrl}`}
                  >
                    See image in high quality
                  </a>
                </div>
              </Fade>
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
