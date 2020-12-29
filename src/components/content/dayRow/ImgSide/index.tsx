import React from 'react'
import Image from 'next/image'
import styles from './ImgSide.module.css'

type DayImgFace = {
  mediaType: string
  url: string
  title: string
  invert: boolean
}

function ImgSide({ mediaType, url, title, invert }: DayImgFace) {
  return (
    <>
      <div className={`col-xs-12 col-md-4 ${styles.cont}`}>
        {mediaType === 'image' ? (
          <div
            className={`${styles.imgcont} ${
              invert ? styles.right : styles.left
            }`}
          >
            <a
              title={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={url} alt={title} layout="fill" />
              {/* <img src={url} alt={title} /> */}
            </a>
          </div>
        ) : (
          <div className={styles.framewrap}>
            <div className={styles.framecont}>
              <iframe
                title={title}
                src={url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ImgSide
